import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({cart, setCart}) => {
  const {id} = useParams()
  const [product, setProduct] = useState({});

  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
   const filterProduct = items.filter((product)=>product.id == id)
  //  console.log(filterProduct)
  setProduct(filterProduct[0]);

const relatedProducts = items.filter((samaan)=>samaan.category === product.category)

// console.log("RealatedProduct = ",relatedProducts)
setRelatedProducts(relatedProducts)
   
  }, [id , product.category])




  const addToCart = (id,price,title,description,imgSrc)=>{
    const obj ={
        id,price,title,description,imgSrc 
    }
    setCart([...cart, obj]);
    console.log("Cart element  =",cart)

    toast.success('Add Cart Sucess!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });


 }
  

  return (
    <>
     <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition = {Bounce}
/>





      <div className="container arrange">
        <div className="img d-flex items align-items-center justify-content-center">
          <img src={product.imgSrc} alt="" />
        </div>

        <div className='text-center'>
      <h1 className="card-title">{product.title}</h1>
       <p className="card-text">{product.description}</p>
       <button className='btn btn-primary mx-3'>{product.price}{"  "}₹</button>
       <button
                                                
                                                onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                                                className='btn btn-warning'>Add To Cart</button>

      </div>

      </div>
       <h1  className='text-center mt-5'>Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
     
    </>
  )
}

export default ProductDetail


