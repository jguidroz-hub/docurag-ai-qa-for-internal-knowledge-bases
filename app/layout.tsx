import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DocuRAG: AI Q&A for Internal Knowledge Bases',
  description: `Value Proposition: For IT/HR departments & internal support teams, provides an instant, accurate Q&A interface over scattered internal documentation (wikis, Confluence, shared drives). Reduces search time, improves employee self-service & onboarding efficiency.

Target Customer: Medium to large organizations with extensive, decentralized internal knowledge bases. IT/HR support teams. Companies with high employee turnover.

---
Category: Micro-SaaS
Target Market: Medium to large organizations with extensive, decentralized internal knowledge bases. IT/HR support teams. Companies with high employee turnover.
Source Hypothesis ID: a2ce0f82-6284-4bb2-a2cc-58bcbf621f8d
Promotion Type: automatic',
};

export const viewport = {
  width: 'device-width`,
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">DocuRAG: AI Q&A for Internal Knowledge Bases</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
