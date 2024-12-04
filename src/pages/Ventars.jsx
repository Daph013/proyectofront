import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import Stats from "../components/Stats";
import Metodos from "../components/Metodos";
import { FloatLabel } from "primereact/floatlabel";
import 'primeicons/primeicons.css';

const Ventars = () => {
  const [value, setValue] = useState('');
  return (
    <>
    <div className="bg-base-300">
    <img className="mx-auto my-3 py-5" src="/public/rs3.png" width={250} alt="" />
    <div className='container mx-auto'>
    <div className=" my-28 card lg:card-side bg-base-100 shadow-xl">
  <figure className=" w-1/2 h-96">
    <img className="  rounded-lg"
      src="/public/deal4.jpg"
      
      alt="Album" />
      
  </figure>
 
  <div className="card-body bg-base-200 rounded">
    <h2 className="card-title">  
        INGRESA CANTIDAD A VENDER:
        <div className="card flex justify-content-center">
        <FloatLabel>
            <InputText className="p-inputtext-md mx-16"  keyfilter="int" placeholder="    /" />
            
        </FloatLabel>
            
        </div>
        M
    </h2>
    <div className="py-5">
    <Metodos/>


<div className="stat place-items-center bg-slate-800">
      <div className="stat-title">Recibiras:</div>
      <div className="stat-value text-secondary">4,200</div>
      <div className="stat-desc text-secondary"> <i className="pi pi-dollar" style={{ color: 'slateblue' }}></i>  USD </div>   
  </div>
    </div>
      <div className="card-actions justify-end">
        <button  className="btn mx-auto py-4 w-36 btn-primary">Vender</button>
      </div>
      <div className="container mx-auto">
  <ul className="steps py-4">
    <li className="step step-primary">Ingrese tu monto a vender</li>
    <li className="step step-primary">Selecciona metodo de pago</li>
    <li className="step">Vende</li>
    <li className="step">Un agente te contactara para finalizar la venta.</li>
  </ul>
</div>
  </div>
</div>
</div>
<div className="container text-center mx-auto py-40">
<Stats/>
</div>
</div>



</>
  )
}

export default Ventars