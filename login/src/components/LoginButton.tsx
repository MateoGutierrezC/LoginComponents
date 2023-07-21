import '../assets/css/LoginButton.css'

interface LoginButton {
    title: string
}

function LoginButton({ title }: LoginButton) {
    <div>
        <a className='loginButton' href="">{title}</a>
    </div>
}


export default LoginButton