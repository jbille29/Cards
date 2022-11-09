import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'
import ProductTile from '../components/ProductTile'
import heroIm from '../assets/hero-im.png'

const Landing = () => {

    const [products, setProducts] = useState([])

    const loadProducts = async() => {
        try {
            const res = await axios.get("http://localhost:5002/api/products")
            console.log(res.data)
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }
   
    useEffect(()=>{
        // load cards from api
        loadProducts()
    }, [])

    return (
        <>
            <Navbar />
            <section className='hero'>
                <div className="hero-container">
                    <div className="hero-left">
                        <h1>Sign and send a card with just a few clicks</h1>
                        <p>Sign and send a personalized card with just a few clicks</p>
                        <form className='hero-email-form'>
                        <input type="email" />
                        <button type='submit'>Get started</button>
                        </form>
                    </div>
                    <img className='hero-img' src={heroIm} alt="" />
                </div>
            </section>

        
            {/* display cards */}
            <section className='featured-products'>
                {products.map(product => (
                    <ProductTile 
                        id={product._id}
                        price={product.price}
                        name={product.name}
                    />
                ))}
            </section>
        </>
    )
}

export default Landing