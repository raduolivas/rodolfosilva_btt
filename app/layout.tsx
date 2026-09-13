import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RodolfoLabs',
  description: 'Software, AI, cybersecurity, cloud and international tech careers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
