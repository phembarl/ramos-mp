import { Urbanist } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['sans-serif'],
});

export const metadata = {
  title: 'Ramos',
  description: 'Analytics that helps you shape the future ',
};

export const viewport = {
  width: 'device-width',
  initialScale: 0.1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-ramosGrey p-5`}>
        {children}
      </body>
    </html>
  );
}
