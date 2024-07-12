import React from 'react';


function Portada() {
  return (
 
      <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='grid'>
          <h3 className='float-left justify-center col-start-1 text-2xl'>Bienvenidos a InnovaBytes</h3>
        </div>
        <img
          className="w-1/4 h-1/2 img-container"
          src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small_2x/3d-website-developer-working-on-laptop-illustration-png.png"
          alt=""
        />
        <br/>
        <p className="text-left">
          Somos Freelancers que ofrecemos el servicio de desarrollo de aplicaciones web para pequeñas y medianas empresas (PYMES) o personas que buscan una solución tecnológica.🌐 
        </p>
        <br/>
        <br />
        <a href="https://porfolio-carlos-arturo.vercel.app/">Carlos Hernandez: porfolio-carlos-arturo.vercel.app/</a>
        <br />
        <a href="https://perfil-dani-sanchez.vercel.app/">Dani Sanchez: perfil-dani-sanchez.vercel.app</a>
      </div>
  );
}

export default Portada;
