import imagen from '../../public/img/nosotros.jpg'
import  styles from '~/styles/nosotros.css'

export function meta() {
  return(
    [
      {
        title: 'GuitarLA - Sobre Nosotros'
      },
      {
        description: 'Venta de guitarras, blog de música'
      }
    ]
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
      <img src={imagen} alt="imagen sobre nosotros" />

      <div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
      </div>
      </div>
    </main>
  )
}

export default Nosotros