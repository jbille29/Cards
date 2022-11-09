import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { GrTextAlignLeft, GrTextAlignRight, GrTextAlignCenter } from 'react-icons/gr'

import SignNavbar from '../components/SignNavbar'
import LowSignNavbar from '../components/LowSignNavbar'
import Modal from '../components/Modal'
import { addCartItem, clearCart } from '../features/cart/cartSlice'
import emptyCard from '../assets/empty.jpg'
import productIm from '../assets/sloth.png'

const Sign = () => {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    
    let navigate = useNavigate()

    const dispatch = useDispatch()
    
    
    
    const [page, setPage] = useState(1)
    const [displayModal, setDisplayModal] = useState(false)
    const [activeTextbox, setActiveTextbox] = useState(null)
    const [homeClicked, setHomeClicked] = useState(false)
    const [xClicked, setXClicked] = useState(false)
    
    const [messages, setMessages] = useState([
            {
                text: '',
                alignment: 'center'
            },
            {
                text: 'message 2',
                alignment: 'center'
            }
        ])

    const saveData = () => {
        const cartId = Math.floor(Math.random() * 100)
        
        dispatch(addCartItem({cartId, productId, messages, qty: 1}))
        navigate('/address', {state:{cartId: cartId}})
    }

    const setNavButton = (buttonClicked) => {
        if(buttonClicked === 'home') {
            setHomeClicked(true)
        }
        else {setXClicked(true)}

        setDisplayModal(true)
    }

    const setLowNavButton = (buttonClicked) => {
        if(buttonClicked === 'cancel') {
            setMessages(
                messages.map((message, index) => 
                    index === activeTextbox
                    ? {text: '', alignment: 'center'}
                    : message))
        }
        setPage(2)
    }

    const modalOptions = (buttonClicked) => {
        if(buttonClicked === 'discard' && xClicked)  {
            navigate(-1)
        }
        if(buttonClicked === 'discard' && homeClicked)  {
            navigate('/')
        }
        if(buttonClicked === 'x') setDisplayModal(false)
    }

    // check if text boxes are filled
    // display button 
        // if button clicked navigate to shippping and save data

    if(page===1) {
        return (
            <>
                {displayModal && <Modal modalOptions={modalOptions}/>}
                <SignNavbar setNavButton={setNavButton}/>
                <main className='sign-page-1'>
                    <div className='sign-page-1-cardpreview'>
                        <img src={productIm} alt="" />
                        <button onClick={()=>setPage(2)}>Start Personalizing</button>
                    </div>
                    <p className='sign-page-1-instructions'>Add your message - we'll print and mail it for you, free!</p>
                </main>
            </>
        )
    }

    const addMessage =(textboxNum) => {
        setActiveTextbox(textboxNum)
        setPage(3)
    }

    if(page === 2) {
        return (
            <>
                {displayModal && <Modal modalOptions={modalOptions}/>}
                <SignNavbar setNavButton={setNavButton}/>
                <main className='sign-page-2'>
                    <div className='sign-page-2-col1'>
                        <div className='sign-page-2-cardpreview'>
                            <img src={productIm} alt="" />
                            <div
                                className='add-message-textbox'
                                onClick={()=>addMessage(0)}
                            >
                                {messages[0].text === ""? "add message":messages[0].text}
                            </div>

                            <div
                                className='add-message-textbox1'
                                onClick={()=>addMessage(1)}
                            >
                                {messages[1].text === ""? "add message":messages[1].text}
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>setPage(1)}>Start Personalizing</button>
                            {(messages[0].text !== "" || messages[1].text !== "") && <button onClick={saveData}>Address the envelope</button>}
                            <button onClick={()=> dispatch(clearCart())}>Clear cart</button>
                        </div>
                    </div>
                    <p className='sign-page-2-instructions'>Choose an area to add your message.</p>
                </main>
            </>
        )
    }

    if(page === 3) {
        return (
            <div>
                {displayModal && <Modal modalOptions={modalOptions}/>}

                <main className='sign-card'>
                    <section className="card-preview">
                        <img src={emptyCard} alt="" />
                    </section>

                    <section className="card-message-form">
                        <div className="form-container">
                            <h3>Type a Message</h3>
                            <div className='card-message-text'>
                                <label htmlFor="textbox1"
                                    className='card-message-label'>Your Message</label>
                                <textarea 
                                    name="textbox1" 
                                    id="textbox1" 
                                    cols="30" 
                                    rows="10" 
                                    value={messages[activeTextbox].text}
                                    onChange={e=>setMessages(
                                        messages.map((message, index) => 
                                            index === activeTextbox
                                            ? {...message, text: e.target.value}
                                            : message)
                                    )}
                                />
                            </div>
                            <div className='card-message-font'>
                                <label htmlFor="textbox1"
                                    className='card-message-label'>Font</label>
                                <select name="languages" id="lang">
                                    <option value="javascript">JavaScript</option>
                                    <option value="php">PHP</option>
                                    <option value="java">Java</option>
                                    <option value="golang">Golang</option>
                                    <option value="python">Python</option>
                                    <option value="c#">C#</option>
                                    <option value="C++">C++</option>
                                    <option value="erlang">Erlang</option>
                                </select>
                            </div>
                            <div className='card-message-size'>
                                <label htmlFor="textbox1"
                                    className='card-message-label'>Size</label>
                                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                            </div>
                            <div className='card-message-alignment'>
                                <label htmlFor="textbox1"
                                    className='card-message-label'>Alignment</label>

                                <div className='alignment-icons'>
                                    <button className='align-btns'><GrTextAlignLeft /></button>
                                    <button className='align-btns'><GrTextAlignCenter /></button>
                                    <button className='align-btns'><GrTextAlignRight /></button>
                                    
                                </div>
                            </div>
                        </div>   
                    </section>
                </main>
                <LowSignNavbar setLowNavButton={setLowNavButton}/>
            </div>
          )
    }
}

export default Sign