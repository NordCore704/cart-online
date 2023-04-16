import '@/styles/globals.css'
import { CartContext, SharedLayout } from './components'
import './components/home/home.css'
import './components/navbar/navbar.css'
import './components/footer/footer.css'
import './components/about/about.css'
import './components/contact/contact.css'
import './components/products/products.css'
import './components/cart/cart.css'


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
