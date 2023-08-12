import '../assets/css/Logo.css'

interface Logo {
    src: string
    alt: string
}

function Logo({ src, alt }:Logo){
    return (
        <div className='logo'>
            <img src={src} alt={alt} />
        </div>
    )

}

export default Logo