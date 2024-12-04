import React from 'react'

const Hero = () => {
  return (
    <>
    
    <div className="hero bg-neutral  min-h-screen" style={{
    backgroundImage: "url('/public/jungle.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}>
  
    <div className="hero-content flex-col lg:flex-row">
   
      <img
        src="/public/lion.jpeg" width={300}
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold ">Compra y vende tus coins!</h1>
        <p className="py-6 text-base">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-neutral">Get Started</button>
        <img className='py-1 mx-5 inline-flex'  src="/public/coins.png" width={50} alt="" />
      </div>
    </div>
  </div>
  
       <div className='container mx-auto py-5 text-center'>
        <div className='inline-flex'>
        <img src="/public/osrs.png " width={120} alt="" />
        </div>
        <div className='inline-flex'>
        <img src="/public/rs3.png " width={150} alt="" />
        </div>  
     </div>
    
    
     
  
  
  </>
  )
}

export default Hero