
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import { Roboto} from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic'],
})

export const metadata = {
  title: "Home",
  description: "E-commerce",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/8209/8209584.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
             {children}
      </body>
    </html>
  );
}
