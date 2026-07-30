import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollProgress } from '@/components/ScrollProgress';

import HomePage from '@/pages/HomePage';

const AboutPage = lazy(() => import('@/pages/AboutPage'));
const MenuPage = lazy(() => import('@/pages/MenuPage'));
const WinePage = lazy(() => import('@/pages/WinePage'));
const ReservationsPage = lazy(() => import('@/pages/ReservationsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-px w-16 bg-amber-gold animate-pulse" />
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-espresso-950 text-cream">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/wine" element={<WinePage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
