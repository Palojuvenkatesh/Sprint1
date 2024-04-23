import React from 'react';
import './addproduct.component.css';

export function Addproduct(){

    const [name, setName]= React.useState('');
    const [description, setDescription]= React.useState('');
    const [price, setPrice]= React.useState('');
    const [categorey, setCategorey]= React.useState('');

   


    return(
        <div className="bg1">
            <h1>Add products</h1>

            <p className='item-name'>Name:</p>
            <input type='text'  className='inputbox'  value={name}
            onChange={(e)=>{setName(e.target.value)}}
            ></input>
            <p className='item-name' >Description:</p>
            <input type='text'  className='inputbox'  value={description}
            onChange={(e)=>{setDescription(e.target.value)}}></input>
            <p className='item-name' >Price:</p>
            <input type='text'  className='inputbox' value={price}

            onChange={(e)=>{setPrice(e.target.value)}}></input>
            <p className='item-name' >Categorey:</p>
            <input type='text'  className='inputbox' value={categorey}
            onChange={(e)=>{setCategorey(e.target.value)}}></input>

            <button  className='addbutton'>Add Product</button>


        </div>
    )
}