// app/page.js
import ProfessionalHero from '../components/ProfessionalHero';
import StartupShowcase from '../components/StartupShowcase';
import ProfessionalPhilosophy from '../components/ProfessionalPhilosophy';

export default function HomePage() {
  return (
    <>
      <ProfessionalHero />
      <StartupShowcase />
      <ProfessionalPhilosophy />
    </>
  );
}
