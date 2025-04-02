import { Link } from "react-router-dom"
export default function Header({cases}){
    return(
        <div className="container-fluid d-flex justify-content-between align-items-center bg-black w-100 py-4 px-3 text-white " style={{ height: '50px' }}>
            <h4> Shopping Cart</h4>
            <ul className="d-flex justify-content-evenly list-unstyled">
                <li>
                <Link to={"/"} className="text-decoration-none text-white"> <h5> Home</h5> </Link>
                </li>
                <li className="ms-4">
                    <Link to={"/cart"} className="text-decoration-none text-white"> <h5><span style={{height:'30px',backgroundColor:'yellowgreen',width:'30px',borderRadius:'50%', padding:'5px', display:'inline-block',textAlign:'center'}}> {cases.length}</span> View Cart</h5></Link>
                </li>
            </ul>
            
        </div>
    )
}