/*
# Create reservations table (single-tenant, public submission)

1. Purpose
- Stores reservation requests submitted through the website's booking form.
- This is a no-auth restaurant website: guests submit reservation requests as anonymous visitors.
- No user accounts exist; therefore no user_id column and no auth.uid() ownership checks.

2. New Tables
- `reservations`
  - `id` (uuid, primary key, default gen_random_uuid())
  - `name` (text, not null) — guest full name
  - `email` (text, not null) — guest contact email
  - `phone` (text, not null) — guest phone number
  - `date` (date, not null) — requested reservation date
  - `time` (time, not null) — requested reservation time
  - `party_size` (integer, not null, default 2) — number of guests
  - `occasion` (text, nullable) — optional occasion note (anniversary, birthday, etc.)
  - `notes` (text, nullable) — optional special requests / dietary notes
  - `status` (text, not null, default 'pending') — request status: pending, confirmed, declined
  - `created_at` (timestamptz, default now()) — submission timestamp

3. Indexes
- `reservations_created_at_idx` on `created_at` (desc) for ordering recent submissions
- `reservations_date_time_idx` on `date`, `time` for checking availability

4. Security (RLS)
- Enable RLS on `reservations`.
- This is a single-tenant, no-auth public submission form. Guests do not sign in.
- INSERT: allow `anon, authenticated` so anonymous website visitors can submit requests.
  - With CHECK (true) since there is no ownership concept for public submissions.
- SELECT / UPDATE / DELETE: restricted to `authenticated` (the restaurant owner / staff)
  so that guests cannot read or modify other guests' reservation data.
  - For SELECT/UPDATE/DELETE we use `TO authenticated USING (true)` because any
    authenticated staff member may manage reservations; there is no per-user ownership
    among staff. This is acceptable here because the table holds public-facing requests
    intended to be managed by the operator, not personal user data.

5. Notes
- The frontend uses the anon Supabase key and only ever INSERTs new rows.
- Reading/managing existing reservations happens through a future staff dashboard
  behind authentication — not exposed on the public site.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  party_size integer NOT NULL DEFAULT 2,
  occasion text,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS reservations_created_at_idx
  ON reservations (created_at DESC);

CREATE INDEX IF NOT EXISTS reservations_date_time_idx
  ON reservations (date, time);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- INSERT: public (anon) guests submit reservation requests
DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations"
ON reservations FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- SELECT: only authenticated staff can view reservations
DROP POLICY IF EXISTS "staff_select_reservations" ON reservations;
CREATE POLICY "staff_select_reservations"
ON reservations FOR SELECT
TO authenticated
USING (true);

-- UPDATE: only authenticated staff can manage reservation status
DROP POLICY IF EXISTS "staff_update_reservations" ON reservations;
CREATE POLICY "staff_update_reservations"
ON reservations FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- DELETE: only authenticated staff can delete reservations
DROP POLICY IF EXISTS "staff_delete_reservations" ON reservations;
CREATE POLICY "staff_delete_reservations"
ON reservations FOR DELETE
TO authenticated
USING (true);
