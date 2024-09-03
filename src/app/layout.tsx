import type { Metadata } from "next";
import { cookies } from "next/headers";
import { cairoClass } from "styles/fonts";
import ToastProvider from "src/providers/ToastProvider";
import SideBar from "sidebar/SideBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyparta | Software Development",
  description:
    "An official personal services application that allows users to book a spot in a government office, parking space, or shipping and delivery services.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const validToken = cookies().get("authToken")?.value;
  return (
    <html lang="en">
      <body
        className={`max-md:w-full max-md:pl-5 w-[80%] xl:w-[69%] ml-auto xl:mr-[3.75rem] bg-light-100 ${cairoClass} pt-8 overflow-x-hidden `}
      >
        <ToastProvider>{children}</ToastProvider>
        <SideBar user={validToken} />
        <aside id="modals" />
      </body>
    </html>
  );
}
