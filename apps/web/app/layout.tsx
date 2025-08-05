import type { Metadata } from "next";
import "./globals.css";
// import '@repo/ui/styles.css'
import { NotificationProvider } from "../Component/notification/notification";

export const metadata: Metadata = {
  title: "VisionSpace",
  description: "AI Powered Canvas",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`text-white `}>
      <NotificationProvider>
        {children}
      </NotificationProvider>
      </body>
    </html>
  );
}
