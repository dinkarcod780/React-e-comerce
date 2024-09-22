import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartPlus } from 'react-icons/fa';


const Navbar = ({ setData, cart }) => {

    const location = useLocation();

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("")

    const filterByCategory = (category) => {
        const element = items.filter((product) => product.category === category)
        setData(element)
    }

    const filterByPrice = (price) => {
        const element = items.filter((product) => product.price >= price)
        // console.log(element)
        setData(element)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
    }

    return (
        <>
            <header className='sticky-top'>
                <div className="navbar">
                    <Link to={"/"} className="brand">E-COMERCE</Link>

                    <form onSubmit={handleSubmit} className="search-bar">
                        <input className='py-2 rounded-pill text-center'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"

                            placeholder='Search Products' />
                    </form>
                    <Link to={"/cart"} className="cart">

                        <button type="button" className="btn btn-primary position-relative">
                        <FaCartPlus style={{fontSize:"1.4rem"}} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>

                    </Link>
                </div>

                {
                    location.pathname == "/" &&(
                    
                        <div className="nav-bar-wrapper ">
                        {/* <div className="items">Filter by {"->"}</div> */}
                        <div
                            onClick={() => setData(items)}
                            className="items">Home</div>
                        <div
    
                            onClick={() => filterByCategory("mobile")} className="items">Mobiles</div>
                        <div
                            onClick={() => filterByCategory("laptop")}
                            className="items">Laptop</div>
                        <div
                            onClick={() => filterByCategory("tablet")}
                            className="items">Tablets</div>
                        {/* <div onClick={() => filterByPrice(49999)} className="items">{">="}49999</div>
                        <div onClick={() => filterByPrice(69999)} className="items">{">="}69999</div>
                        <div onClick={() => filterByPrice(89999)} className="items">{">="}89999</div>
                        <div onClick={() => filterByPrice(29999)} className="items">{">="}29999</div> */}
    
                    </div>




                    )
                }
     

               
            </header>
        </>
    )
}

export default Navbar