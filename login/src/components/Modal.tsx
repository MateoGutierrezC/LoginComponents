import { createElement } from 'react';
import { IconType } from 'react-icons';
import '../assets/css/Modal.css'

interface Modal {
    firsttext: string,
    secondtext: string,
    icon1: IconType;
    icon2: IconType;
}



function Modal({ firsttext, secondtext, icon1, icon2 }: Modal) {
    return (
        <div className='ModalContainer'>
            <div className='closeModal'>
            {createElement(icon1, {})}
            </div>
            <div className="checkModal">
                <div className='iconCheck'>{createElement(icon2, {})}</div>
            </div>
            <div className='textCheck'>
                <div className='textCheck1'>{firsttext}</div>
                <div className='textCheck2'>{secondtext}</div>
            </div>

        </div>
    )
}

export default Modal