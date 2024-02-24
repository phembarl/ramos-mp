import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="p-5 relative">
      <Navbar />
      <Hero />
    </main>
  );
}
