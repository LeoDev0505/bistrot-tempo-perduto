import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE } from '@/lib/constants';

const DISHES = [
  {
    name: 'Escargots de Bourgogne',
    description:
      'Lumache alla borgognona gratinate nel guscio con burro, aglio e prezzemolo.',
    image: '/images/lumache.jpg',
    tag: 'Dal Mare',
  },
  {
    name: 'Baccalà mantecato',
    description:
      "Baccalà lavorato ad arte con un filo d'olio extravergine, servito con un crostino croccante e una delicata foglia di basilico fresco.",
    image: '/images/baccala.jpg',
    tag: 'Pasta Fresca',
  },
{
  name: 'Crudo di Gamberi Rossi',
  description: 'Freschissimi gamberi rossi serviti al naturale su un letto di ghiaccio tritato, per esaltarne la purezza e la naturale dolcezza.',
  image: '/images/gamberi.jpg',
  tag: 'Dal Mare',
},
  {
    name: 'Cozze alla marinara',
    description:
      'Cozze saltate in padella con aglio, prezzemolo, vino bianco e pomodorini, servite con crostino dorato e limone.',
    image: '/images/cozze.png',
    tag: 'Dolce',
  },
];

export function SignatureDishes() {
  return (
    <section className="relative py-24 md:py-40 bg-charcoal-dark grain-overlay">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <SectionLabel label="I Piatti" align="center" />
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] max-w-3xl text-balance">
              I sapori che raccontano
              <span className="block italic text-amber-light/90">la nostra cucina</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-cream/60 leading-relaxed max-w-xl">
              Una selezione di piatti che uniscono la tradizione ligure
              all’eleganza francese. Ingredienti di stagione, lavorati a mano.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {DISHES.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden ${
                i % 2 === 0 ? 'md:mt-0' : 'md:mt-16'
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <SmartImage
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/20 to-transparent" />
                <span className="absolute top-6 left-6 text-[0.65rem] uppercase tracking-[0.3em] text-amber-gold bg-espresso-950/60 backdrop-blur-sm px-3 py-1.5">
                  {dish.tag}
                </span>
              </div>
              <div className="pt-6">
                <h3 className="font-serif text-2xl md:text-3xl text-cream group-hover:text-amber-gold transition-colors duration-500">
                  {dish.name}
                </h3>
                <p className="mt-3 text-cream/55 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 md:mt-24 flex justify-center">
          <ButtonLink to="/menu" variant="outline" withArrow>
            Vedi il Menù Completo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}