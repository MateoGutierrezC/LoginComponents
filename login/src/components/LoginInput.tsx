import '../assets/css/LoginInput.css'


interface LoginInput {
    title: string
}

function LoginInput({ title }: LoginInput) {
    return (
        <div className='inputContainer'>
            <input placeholder={`${title}`} className="loginInput" type="text" name={`$title`}></input>
        </div>
    )
}

export default LoginInput 
