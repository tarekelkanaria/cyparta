import { Toaster } from "sonner";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster
        position="bottom-left"
        richColors
        visibleToasts={1}
        closeButton
      />
      {children}
    </>
  );
}
