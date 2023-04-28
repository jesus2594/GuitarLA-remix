import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  Link,
  useRouteError,
  isRouteErrorResponse
 
} from "@remix-run/react";

import styles from '~/styles/index.css'
import Header from "~/components/Header";
import Footer from "~/components/footer";
import { useState } from "react";

export function meta(){
  return (
    [
    {charSet: 'utf-8'},
    {title: 'GuitarLA - Remix'} ,
    {viewport: "width=device-width,initial-scale=1"}

    
  ]
  )
}



export function links(){
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    }
  ]
}

export default function App() {
  const [carrito, setCarrito] = useState([])

  const agregarCarrito = guitarra => {
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
      const carritoActualizado = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id){
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      setCarrito(carritoActualizado)
    }else{

      setCarrito([...carrito, guitarra])
    }
  }

  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito
        }}
      />
    </Document>
  );
}

function Document({children}){
  return(
    <html lang="es">
      <head>
       
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
       <Footer/>
        
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/**manejo de errores */
/* export function CatchBoundary(){
  const error = useRouteError()
  
  return(
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link className="error-enlace" to='/'>Tal vez quieras volver a la pagina principal</Link>
    </Document>
  )
} */

export function ErrorBoundary(){
  const error = useRouteError()
  if(isRouteErrorResponse(error)){
    return(
      <Document>
          <p className="error">{error.status} {error.statusText}</p>
          <Link className="error-enlace" to='/'>Tal vez quieras volver a la pagina principal</Link>
        </Document>
      )
  }
  
}
