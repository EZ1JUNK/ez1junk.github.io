import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import BookingModal from '@/components/BookingModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: '1-888-EZ1-JUNK | NYC #1 Junk Removal',
  description: 'Modern landing page for 1-888-EZ1-JUNK, NYC\'s #1 Junk Removal Service.',
  icons: {
    icon: '/ez1junk/favicon.ico',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-gray-900" suppressHydrationWarning>
        {children}
        <BookingModal />
      </body>
    </html>
  );
}
