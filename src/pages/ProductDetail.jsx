import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

import productData from '../productData'

import Navbar from '../components/Navbar'

const ProductDetail = () => {

    const rangeQty = [...Array(100 - 1 + 1).keys()].map(x => x + 1)
    
    let navigate = useNavigate()
    
    /* uncomment to use db */
    //const [product, setProduct] = useState({imgs: []})
    const [product, setProduct] = useState(productData[0])
    const [activeImage, setActiveImage] = useState(0)

    const [personalize, setPersonalize] = useState("nomessage")
    const [quantity, setQuantity] = useState(1)

    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const loadProduct = async() => {
        try {
            const res = await axios.get(`http://localhost:5002/api/products/${productId}`)
            setProduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        /* uncomment to use db */
        //loadProduct()
        
    }, [])

    const radioHandler = (e) => {
        setPersonalize(e.target.value)
        if(e.target.value === 'personalize') setQuantity(1)
    }

    const addToCartHandler = () => {
        const cartId = Math.floor(Math.random() * 100)
        navigate(`/sign/${product._id}/${cartId}`)
    }
  
    return (
        <>
        <Navbar />
        
        <main className='product-details-main'>
            <div className="product-details-left">
                <div className='image-array'>
                    {product.imgs.map((item, index) => {
                        if(activeImage === index) return <img key={item.id} src={item} className='active-image' onClick={()=>setActiveImage(index)} />
                        return <img key={item.id} src={item}  onClick={()=>setActiveImage(index)} />
                    })}
                </div>

                {product.imgs.map((item, index) => {
                    if(activeImage === index) return <img key={item.id} className='product-details-img' src={item} alt="" />
                })}
            </div>
            <div className="product-details-right">
                <h3 className='product-title'>{product.name}</h3>
                <p className="product-price"><strong>${product.price}</strong></p>
                <p className='product-description'>{product.description}</p>

                <div>
                    <input 
                        id="personalize-toggle"
                        type="radio"
                        value='personalize'
                        onChange={radioHandler}
                        checked={personalize === 'personalize'}
                     />
                     <label htmlFor="personalize-toggle">Personalize</label>

                     <input 
                        id="nomessage-toggle"
                        type="radio"
                        value='nomessage'
                        onChange={radioHandler}
                        checked={personalize === 'nomessage'}
                     />
                     <label htmlFor="nomessage-toggle">Ship it</label>
                </div>

                <div>
                    <select 
                        value={quantity} 
                        onChange={(e)=>setQuantity(e.target.value)}
                        disabled={personalize === 'personalize'}
                    >
                        {rangeQty.map((el) => (
                            <option value={el}>{el}</option>
                        ))}
                    </select>
                </div>

                <button 
                    className='product-details-cart-btn'
                    onClick={addToCartHandler}
                >
                    {personalize === 'personalize' ? 'Personalize' : 'Add to Cart'}
                </button>
            </div>
        </main>
      </>
  )
}

export default ProductDetail