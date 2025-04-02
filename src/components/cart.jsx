import { useState,useEffect } from "react"

export default function Cart({cases,setcases}){
    const[total,settotal]=useState(0);

    useEffect(() => {
        settotal(cases.reduce((acc, curr) => acc + parseFloat(curr.price), 0));
      }, [cases]); 

    return(
        <div className='cart-container row'>
            {cases.length > 0 ? (
            cases.map((one)=>(
                <div key={one.id}  className="col-3 m-3 py-0"style={{ width: '250px', height: '300px' ,border: '1px solid #ddd', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor:'#f0f0f0'}}>
                          
                <p>{one.title}</p>
                 <p> Price{one.price} </p>
                <img src={one.thumbnail} alt={one.title} style={{width:'150px',height:'100px'}}/>
                
              </div>
            ))):(<p> no items in cart</p>)
        }
        <h4>Total: ${total}</h4>
        </div>

    )
}