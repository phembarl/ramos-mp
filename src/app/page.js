import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Strategic from '@/components/Strategic';

export default function Home() {
  return (
    <main className="p-10 relative">
      <Navbar />
      <Hero />
      <Strategic />
    </main>
  );
}
