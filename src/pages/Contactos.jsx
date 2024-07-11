import React from 'react'

function Contactos() {
  // Reemplaza el número con el que deseas iniciar el chat en WhatsApp
  const message='Hola, estoy interesado en tus servicios como desarrollador freelance. ¿Podrías proporcionarme más información?'
  const phonenumber = '+50487692973'
  const whatsappLink = `https://wa.me/${phonenumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>Contactos
    
      <br />
      <br />

    <br />
      <p>Whatsapp:</p>
      <br />
      <div className="flex flex-col gap-4">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contactar por WhatsApp
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