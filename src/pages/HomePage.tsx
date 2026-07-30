import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { SignatureDishes } from '@/components/home/SignatureDishes';
import { Atmosphere } from '@/components/home/Atmosphere';
import { WinePreview } from '@/components/home/WinePreview';
import { CtaReservation } from '@/components/home/CtaReservation';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SignatureDishes />
      <Atmosphere />
      <WinePreview />
      <CtaReservation />
    </>
  );
}
