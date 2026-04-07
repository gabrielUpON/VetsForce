import "./globals.css";

export const metadata = {
  title: "VetsForce",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="font-sans text-[#F9F9F9]">
        <main>{children}</main>
      </body>
    </html>
  );
}