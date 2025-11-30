import { Cases } from '@/components/sections/Cases';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { Approach } from '@/components/sections/Approach';
import { Differentiators } from '@/components/sections/Differentiators';
import { CTA } from '@/components/sections/CTA';
import { Operations } from '@/components/sections/Operations';
import { Engagements } from '@/components/sections/Engagements';
import { Partners } from '@/components/sections/Partners';
import { Resources } from '@/components/sections/Resources';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Cases />
      <Approach />
      <Differentiators />
      <Operations />
      <Engagements />
      <Partners />
      <Resources />
      <Testimonials />
      <Team />
      <Contact />
      <CTA />
    </>
  );
}
