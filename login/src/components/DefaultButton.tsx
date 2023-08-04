import { IconType } from 'react-icons'
import '../assets/css/DefaultButton.css'
import { createElement } from 'react'

interface DefaultButton {
    title?: string
    icon?:IconType
}

function DefaultButton({ title,icon }: DefaultButton) {
    return (
        <div className='defaultBtn'>
            <a className='btn'>{title}</a>
            {icon && <a href="#">{createElement(icon, {})}</a>}
        </div>
    )

}

export default DefaultButton