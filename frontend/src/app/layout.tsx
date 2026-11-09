
import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SuperComputing Club | Ramdeobaba University",
  description:
    "Explore SuperComputing Club at Ramdeobaba University — a community for developers, problem solvers and technology enthusiasts.",
  keywords: [
    "SuperComputing Club",
    "Ramdeobaba University",
    "Programming",
    "Technology",
    "Computer Science",
    "Coding Community",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
