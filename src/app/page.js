import FullControl from '@/components/FullControl';
import DataActions from '@/components/DataActions';
import Hero from '@/components/Hero';
import Maximize from '@/components/Maximize';
import Navbar from '@/components/Navbar';
import Strategic from '@/components/Strategic';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="bg-white w-11/12 mx-auto overflow-hidden relative rounded-[20px]">
        <div className="p-10">
          <Navbar />
          <Hero />
          <Strategic />
          <Maximize />
          <DataActions />
          <FullControl />
          <GetStarted />
        </div>
        <Footer />
      </main>
    </>
  );
}
