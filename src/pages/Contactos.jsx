import React from 'react'

function Contactos() {
  // Reemplaza el número con el que deseas iniciar el chat en WhatsApp
  const message='Hola, estoy interesado en tus servicios. ¿Podrías proporcionarme más información?'
  const phonenumber = '+50433304828'
    const phonenumber2 = '+50489858989'
  const whatsappLink = `https://wa.me/${phonenumber}?text=${encodeURIComponent(message)}`;
  const whatsappLink2 = `https://wa.me/${phonenumber2}?text=${encodeURIComponent(message)}`;
  return (
    <div>Contactos
    
      <br />
      <br />
      <p>Números telefónicos:</p>
      <br />
    <p>{phonenumber}</p>
    <p>{phonenumber2}</p>
    <br />

    <br />
      <p>Whatsapp:</p>
      <br />
      <div className="flex flex-col gap-4">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contactar por WhatsApp Enlace 1
        </button>
      </a>
      <a href={whatsappLink2} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contactar por WhatsApp Enlace 2
        </button>
      </a>
    </div>
      <br />
     
     
      <p>Correo:</p>
      
      <p>innovabytes01@gmail.com</p>

      <br />
      <br />
      <p></p>
    </div>
  )
}

export default Contactos