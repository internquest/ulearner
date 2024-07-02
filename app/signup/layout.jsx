import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <div className={`${inter.className} selection:bg-lime`}>{children}</div>
    </html>
  );
}
