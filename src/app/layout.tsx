import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Raghunath's Portfolio`,
  description: 'A modern and stylish portfolio showcasing professional work and skills',
  keywords: ['portfolio', 'developer', 'Software Engineer', 'projects', 'skills', 'experience'],
  authors: [{ name: 'Raghunath Tiwari' }],
  creator: 'Raghunath Tiwari',
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize dark mode based on localStorage or system preference
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches 
                    ? 'dark' 
                    : 'light';
                }
                
                const theme = getThemePreference();
                
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // This prevents flash of wrong theme
                document.documentElement.style.colorScheme = theme;
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', () => {
                const observerOptions = {
                  root: null,
                  rootMargin: '0px',
                  threshold: 0.1
                };
                
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                    }
                  });
                }, observerOptions);
                
                document.querySelectorAll('.animate-on-scroll').forEach(element => {
                  observer.observe(element);
                });
              });
            `
          }}
        />
      </body>
    </html>
  );
}