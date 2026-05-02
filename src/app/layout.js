import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://tekzura.com"),
  title: {
    default: "Tekzura Digital | Web, Mobile & Growth Engineering",
    template: "%s | Tekzura Digital",
  },
  description:
    "Tekzura Digital builds fast web platforms, mobile products, and growth systems—engineering, design, and delivery for teams that need reliability at scale.",
  keywords: [
    "web development",
    "mobile apps",
    "digital agency",
    "UI UX",
    "cloud",
    "DevOps",
    "Pakistan",
  ],
  authors: [{ name: "Tekzura Digital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tekzura Digital",
    title: "Tekzura Digital | Web, Mobile & Growth Engineering",
    description:
      "Modern IT solutions, web experiences, and digital strategy—from discovery to launch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekzura Digital",
    description:
      "Modern IT solutions, web experiences, and digital strategy.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
