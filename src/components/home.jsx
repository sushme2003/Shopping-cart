import { useState,useEffect } from "react";
export default function Home({cases,setcases}){
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/carts")
          .then((res) => res.json())
          .then((data) => setCarts(data.carts)); 
      }, []);

      const addcart = (item) => {
        setcases([...cases, { ...item}]); 
      };
      const removecart = (item) => {
        setcases(cases.filter(cartItem => cartItem.id !== item.id));
      };
    return(
            <div className="m-3 " style={{ backgroundColor: '#a5d6a7' }}>
              {carts.length > 0 ? (
                carts.map((cart) => (
                  <div key={cart.id} className="row d-flex justify-content-start align-items-center mx-5">
                    {cart.products && cart.products.length > 0 ? (
                      cart.products.map((item) => (
                        <div key={item.id}  className="col-3 m-3 py-0"style={{ width: '250px', height: '300px' ,border: '1px solid #ddd', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor:'#f0f0f0'}}>
                          
                          <p>{item.title}</p>
                           <p> Price{item.price} </p>
                          <img src={item.thumbnail} alt={item.title} style={{width:'150px',height:'100px'}}/>
                          {cases.some((cartItem) => cartItem.id === item.id) ?(
                          <button style={{ border: 'none', marginBottom: '2px', backgroundColor: '#F44336', color: '#ffffff', padding: '5px 10px', borderRadius: '4px' , width:'150px' }} onClick={()=>removecart(item)}> Remove Cart</button>)
                          :<button style={{ border: 'none', marginBottom: '2px', backgroundColor: '#4CAF50', color: '#ffffff', padding: '5px 10px', borderRadius: '4px' , width:'150px' }} onClick={()=>addcart(item)} > Add to Cart</button>}
                        </div>
                      ))
                    ) : (
                      <p>No products found in this cart.</p>
                    )}
                  </div>
                ))
              ) : (
                <p>Loading carts...</p> // Show loading message until data is loaded
              )}
            </div>
          );
}