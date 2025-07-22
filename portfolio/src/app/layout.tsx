import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arbresha",
  description:
    "A showcase of my latest projects, designs, and creative experiments.",
  icons: {
    icon: "/logo.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
