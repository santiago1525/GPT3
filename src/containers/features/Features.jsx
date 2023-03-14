import React from 'react'
import { Feature } from '../../components'
import './features.css'


const featuresData = [
  {
    title: 'Mejorar las inseguridades al instante',
    text: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. '
  },
  {
    title: 'Conviértete en el activo atendido',
    text: 'Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable.'
  },
  {
    title: 'Mensaje o no soy nada',
    text: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. '
  },
  {
    title: 'Condado de ley realmente chico',
    text: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. '
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          El futuro es ahora y sólo tienes que darte cuenta. Entra en el futuro hoy y hazlo realidad.
        </h1>
        <p>Solicita acceso anticipado para comenzar</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((data, index) => (
          <Feature title={data.title} text={data.text} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Features