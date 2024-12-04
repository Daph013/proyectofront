import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import 'primeicons/primeicons.css';
const Metodos = () => {
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const onIngredientChange = (e) => {
        setSelectedIngredient(e.value);
    }
    
  return (
    <div className="card flex flex-wrap justify-content-center gap-3">
    <div className="flex align-items-center">
        <RadioButton 
            inputId="ingredient1" 
            name="pizza" 
            value="Cheese" 
            onChange={onIngredientChange} 
            checked={selectedIngredient === 'Cheese'} 
        />
        <label htmlFor="ingredient1" className="ml-4 text-3xl"><i className="pi pi-bitcoin" style={{ color: '#DEAA79' }}></i></label>
    </div>
    <div className="flex align-items-center">
        <RadioButton 
            inputId="ingredient2" 
            name="pizza" 
            value="Mushroom" 
            onChange={onIngredientChange} 
            checked={selectedIngredient === 'Mushroom'} 
        />
        <label htmlFor="ingredient2" className="ml-4 text-3xl"><i className="pi pi-paypal" style={{ color: '#DEAA79' }}></i></label>
    </div>
    <div className="flex align-items-center">
        <RadioButton 
            inputId="ingredient3" 
            name="pizza" 
            value="Pepper" 
            onChange={onIngredientChange} 
            checked={selectedIngredient === 'Pepper'} 
        />
        <label htmlFor="ingredient3"   className="ml-4 text-3xl" style={{ color: '#DEAA79' }}>Zelle</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton 
            inputId="ingredient4" 
            name="pizza" 
            value="Onion" 
            onChange={onIngredientChange} 
            checked={selectedIngredient === 'Onion'} 
        />
        <label htmlFor="ingredient4" className="ml-4 text-3xl"><i className="pi pi-credit-card" style={{ color: '#DEAA79' }}></i></label>
    </div>
</div>
  )
  
}

export default Metodos