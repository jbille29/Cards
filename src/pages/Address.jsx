import React, { useState } from 'react'
import axios from 'axios'
import emptyEnvelope from '../assets/emptyenv.jpg'
import { useDispatch } from 'react-redux'
import { addCartItem, addAddressInfo } from '../features/cart/cartSlice'
import { useNavigate, useLocation } from 'react-router-dom'


const Address = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate() 
    let location = useLocation()
    const cartId = location.state.cartId

    const [recipient, setRecipient] = useState('Logan Bro')
    const [address, setAddress] = useState('54 Woodbrook Way')
    const [apt, setApt] = useState('')
    const [city, setCity] = useState('Fitchburg')
    const [state, setState] = useState('WI')
    const [zip, setZip] = useState('53711')

    const [sender, setSender] = useState('Joe Bille')
    const [senderAddress, setSenderAddress] = useState('5116 Lacy Rd')
    const [senderApt, setSenderApt] = useState('305')
    const [senderCity, setSenderCity] = useState('Fitchburg')
    const [senderState, setSenderState] = useState('WI')
    const [senderZip, setSenderZip] = useState('53711')

    const [displaySenderAptInput, setdisplaySenderAptInput] = useState(false)
    const [displayRecipientAptInput, setdisplayRecipientAptInput] = useState(false)

    const [recipientAddressValid, setRecipientAddressValid ] = useState(true)
    const [senderAddressValid, setSenderAddressValid ] = useState(false)

    const checkRecipientAddress = async(e) => {
        e.preventDefault()
        const recipientsAddress = {
            recipient,
            address,
            apt,
            city,
            state,
            zip
        }
        /*
        try {
            const res = await axios.post("http://localhost:5002/api/test", recipientsAddress)
            console.log(res.data.deliverability)
          } catch(err){
            console.log(err)
          }
          */
    }

    const checkSendersAddress = async(e) => {
        e.preventDefault()
        
        const sendersAddress = {
            recipient,
            address,
            apt,
            city,
            state,
            zip
        }
        try {
            //const res = await axios.post("http://localhost:5002/api/test", sendersAddress)
            //console.log(res.data.deliverability)
            saveData()
        } catch(err){
            console.log(err)
        }
        
    }

    const saveData = () => {
        const recipientsAddress = {
            recipient,
            address,
            apt,
            city,
            state,
            zip
        }
        const sendersAddress = {
            recipient,
            address,
            apt,
            city,
            state,
            zip
        }
        dispatch(addAddressInfo({cartId, recipientsAddress, sendersAddress}))
        navigate('/cart')
    }

    // layout the html first

  
    return (
    <main className='sign-card'>
        <section className="card-preview">
            <img src={emptyEnvelope} alt="" />
        </section>

        <div className='shipping-form'>
            <form onSubmit={checkRecipientAddress}>
                
                <div className='form-row'>
                    <label>Recipient (first & last name)</label>
                    <input 
                        type="text"
                        value={recipient}
                        onChange={e => setRecipient(e.target.value)}                      
                    />
                </div>
                <div className='form-row'>
                    <label>Address</label>
                    <input 
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor="">Apt, Suite</label>
                    <input 
                    type="text"
                    
                    />
                </div>
                <div className='form-row'>
                    <label>City</label>
                    <input 
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label>State</label>
                    <input 
                        type="text"
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />

                </div>
                <div className='form-row'>
                    <label>Zip</label>
                    <input 
                        type="text"
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            
            {recipientAddressValid && (
            <form onSubmit={checkSendersAddress}>
                
                <div className='form-row'>
                    <label>Sender</label>
                    <input 
                        type="text"
                        value={sender}
                        onChange={e => setSender(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label>Sender's Address</label>
                    <input 
                        type="text"
                        value={senderAddress}
                        onChange={e => setSenderAddress(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label>Sender's Apt, Suite</label>
                    <input 
                        type="text"
                        value={senderApt}
                        onChange={e => setSenderApt(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label>Sender's City</label>
                    <input 
                        type="text"
                        value={senderCity}
                        onChange={e => setSenderCity(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label>Sender's State</label>
                    <input 
                        type="text"
                        value={senderState}
                        onChange={e => setSenderState(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label>Sender's Zip</label>
                    <input 
                        type="text"
                        value={senderZip}
                        onChange={e => setSenderZip(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>)}
        </div>
    </main>
  )
}

export default Address