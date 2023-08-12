import '../assets/css/DefaultContainer.css'
import DueProcess from './DueProcess'
/* import DefaultButton from './DefaultButton' */

interface DefaultContainer {
    text?: string
    showComponent: boolean
}

function DefaultContainer({ text, showComponent }: DefaultContainer) {
    return (
        <div className="defContainer">
            <div className="defCText">
                <p>{text}</p>
            </div>
            <div className="defCContent">
                {showComponent && <DueProcess text='Hola' />}
                {showComponent && <DueProcess text='Hola' />}
                {showComponent && <DueProcess text='Hola' />}
               {/*  {showComponent && <DefaultButton title='Hola' />} */}
            </div>
        </div>
    )
}

export default DefaultContainer