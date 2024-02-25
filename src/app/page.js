import DataActions from '@/components/DataActions';
import Hero from '@/components/Hero';
import Maximize from '@/components/Maximize';
import Navbar from '@/components/Navbar';
import Strategic from '@/components/Strategic';

export default function Home() {
  return (
    <main className="p-10 relative">
      <Navbar />
      <Hero />
      <Strategic />
      <Maximize />
      <DataActions />
    </main>
  );
}
