import "./globals.css";
import TopNav from "../components/TopNav";
import AskAI from "@/components/AskAI";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main>
          {children}
          <AskAI section="Portfolio" />
        </main>
      </body>
    </html>
  );
}
