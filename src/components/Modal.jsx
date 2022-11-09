import React from 'react'
import { BsXLg } from 'react-icons/bs'

const Modal = ({ modalOptions }) => {
  return (
    <div className='modal'>
        <div className='modal-content'>
            <span className="close">
                <BsXLg onClick={()=> modalOptions('x')}/>
            </span>
            <p>You haven't added this card to your cart yet. Changes won't be saved if you exit.</p>
            <p>This action can't be undone.</p>
            <button onClick={()=> modalOptions('discard')}>Discard Changes</button>
        </div>
    </div>
  )
}

export default Modal