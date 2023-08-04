import '../assets/css/DefaultContainer.css'

interface DefaultContainer {
    text: string
}

function DefaultContainer({ text }: DefaultContainer) {
    return (
        <div className="defContainer">
            <p>{text}</p>
        </div>
    )
}

export default DefaultContainer