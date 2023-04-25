"use client";
import Navbar from "@/components/navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {}
      <head />
      <body>
        <Navbar />
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
