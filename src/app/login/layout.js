
import { Roboto} from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic'],
})

export const metadata = {
  title: "login",
  description: "E-commerce",

};

export default function RootLayout({ children }) {
  return (
   
      < div className={roboto.className}>
        {children}
      </div>
   
  );
}