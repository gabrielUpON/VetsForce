import "./globals.css";

export const metadata = {
  title: "VetsForce",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}