import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Dashboard",
  description: "A simple productivity dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen w-full bg-slate-900 font-sans text-slate-100">
          <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4">
            <h1 className="text-2xl semi-bold mb-6">My Dashboard</h1>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/settings"
                className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                Settings
              </Link>
              <Link
                href="/profile"
                className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/logout"
                className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                Logout
              </Link>
            </nav>
          </aside>
          <main className="flex-1 items-center justify-center mb-6">
            <header className="flex justify-between items-center mb-6 p-4">
              <h2 className="text-2xl semi-bold">Overview</h2>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-300">Hello, Achin</span>
                <button className="bg-slate-800 text-slate-100 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
                  logout
                </button>
              </div>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
