import '@/styles/globals.css'
import { SharedLayout } from '../exports'
import '../components/home/home.css'
import '../components/navbar/navbar.css'
import '../components/footer/footer.css'
import '../components/about/about.css'
import '../components/contact/contact.css'
import '../components/products/products.css'
import '../components/cart/cart.css'
import CartContext from '@/helpers/CartContext'


export default function App({ Component, pageProps }) {
  return (
    <>
    <CartContext>
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
    </CartContext>
    </>
  
  )
}
