interface CategoryNavProps<T extends string> {
  categories: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
}

/**
 * Sticky horizontal category tab bar used by the Menu and Wine pages.
 * Replaces two near-identical inline implementations.
 */
export function CategoryNav<T extends string>({
  categories,
  active,
  onChange,
}: CategoryNavProps<T>) {
  return (
    <section className="sticky top-20 md:top-24 z-30 bg-espresso-950/90 backdrop-blur-xl border-y border-cream/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="flex gap-2 md:gap-1 overflow-x-auto py-4 md:py-5 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`shrink-0 px-5 md:px-8 py-2 text-xs uppercase tracking-[0.2em] font-sans transition-all duration-500 ${
                active === cat.id
                  ? 'text-amber-gold'
                  : 'text-cream/50 hover:text-cream/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
