import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaishali Sharma — QA Engineer | Testing Quality. Building Confidence.",
  description:
    "QA Engineer with hands-on experience in manual and automation testing on enterprise-grade microservices and web applications. Skilled in TestNG, JUnit, Postman, JIRA, and SQL.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "QA Engineer",
    "SDET",
    "Software Test Engineer",
    "Automation Engineer",
    "Quality Engineer",
    "Manual Testing",
    "API Testing",
    "Regression Testing",
    "TestNG",
    "JUnit",
    "Postman",
    "JIRA",
  ],
  authors: [{ name: "Vaishali Sharma" }],
  creator: "Vaishali Sharma",
  openGraph: {
    title: "Vaishali Sharma — QA Engineer",
    description:
      "QA Engineer specializing in manual and automation testing for enterprise-grade applications. Building confidence in every release.",
    type: "website",
    locale: "en_US",
    siteName: "Vaishali Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishali Sharma — QA Engineer",
    description:
      "QA Engineer specializing in manual and automation testing. Testing Quality. Building Confidence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-background font-body text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
