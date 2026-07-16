import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import { RootLayout } from './layout';
import { SEO } from '@/constants';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  title: SEO.SITE_NAME,
  description: SEO.DESCRIPTION,
  keywords: SEO.KEYWORDS,
  authors: [{ name: SEO.AUTHOR }],
  creator: SEO.AUTHOR,
  generator: 'Next.js',
  applicationName: SEO.SITE_NAME,
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: SEO.SITE_NAME,
    title: SEO.SITE_NAME,
    description: SEO.DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ajayupreti',
    title: SEO.SITE_NAME,
    description: SEO.DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout>
      <Providers>
        {children}
      </Providers>
    </RootLayout>
  );
}
