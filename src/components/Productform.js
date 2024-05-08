import React, { useState } from 'react'
import "./Product.css"

function Productform() {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    function titlechangeHandler(event){
        // console.log(event.target.value);
        setTitle(event.target.value)
    }

    function datechangeHandler(event){
        // console.log(event.target.value);
        setDate(event.target.value  )
        console.log(title);
        console.log(date);
    }

    function submitHandler(event){
        event.preventDefault();

        // print data.
        const productData={
            title:title,
             date:date
        };
        console.log(productData);
        setTitle('');
        setDate('');

    }
  return (
    <>
    <h2>hello ji sare kaise ho</h2>
    <form className='product-form' onSubmit={submitHandler}>
        <div className='div1'>
        <div>
            <label>Title</label>
            <input type="text" value={title} onChange={titlechangeHandler}></input>
        </div>
        
        <div>
            <label>Date</label>
            <input type='date'  value={date} onChange={datechangeHandler} min="2022-12-10" max='2023-12-5'></input>
        </div>
            <button type="submit">Add button</button>
        </div>
    </form>

    <button type="submit"  to="mainpage">click me</button>

     
    </>
  )
}

export default Productform