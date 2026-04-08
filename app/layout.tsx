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
  title: '1-888-EZ1-JUNK | NYC #1 Junk Removal Service',
  description: '1-888-EZ1-JUNK is NYC\'s top-rated junk removal service for homes and businesses. We offer reliable, eco-friendly rubbish and waste disposal across the 5 boroughs and Long Island. Call 1-888-391-5865 for a free estimate.',
  keywords: ['junk removal nyc', 'waste removal', 'rubbish removal', 'trash removal', 'garbage removal', 'furniture removal', 'appliance disposal', 'electronics recycling', 'yard waste disposal', 'waste management', '1888EZ1JUNK', 'Manhattan', 'Queens', 'Brooklyn', 'Bronx', 'Long Island'],
  authors: [{ name: '1-888-EZ1-JUNK' }],
  creator: '1-888-EZ1-JUNK',
  publisher: '1-888-EZ1-JUNK',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://1888ez1junk.com'),
  openGraph: {
    title: '1-888-EZ1-JUNK | NYC #1 Junk Removal',
    description: 'Reliable, EZ, and cleaner junk removal service for your home or business in NYC and Long Island. Free estimates available.',
    url: 'https://1888ez1junk.com',
    siteName: '1-888-EZ1-JUNK',
    images: [
      {
        url: '/images/index_04.png',
        width: 800,
        height: 600,
        alt: '1-888-EZ1-JUNK Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1-888-EZ1-JUNK | NYC #1 Junk Removal',
    description: 'Reliable, EZ, and cleaner junk removal service for your home or business in NYC and Long Island.',
    images: ['/images/index_04.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
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
