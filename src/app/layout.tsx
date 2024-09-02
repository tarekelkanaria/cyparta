import type { Metadata } from "next";
import SideBar from "sidebar/SideBar";
import { cairoClass } from "styles/fonts";
import "./globals.css";
import getUser from "src/lib/getUser";
import ToastProvider from "src/providers/ToastProvider";

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
  const user = await getUser();
  return (
    <html lang="en">
      <body
        className={`max-md:w-full max-md:pl-5 w-[80%] xl:w-[69%] ml-auto xl:mr-[3.75rem] bg-light-100 ${cairoClass} pt-8 overflow-x-hidden `}
      >
        <ToastProvider>{children}</ToastProvider>
        <SideBar user={user} />
        <aside id="modals" />
      </body>
    </html>
  );
}
