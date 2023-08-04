import '../assets/css/Login.css'
import LeftSideContainer from './LeftSideContainer'
import RightSideContainerFirst from './RightSideContainer1'
import RightSideContainerSecond from './RightSideContainer2'

function Login() {
    return (
        <div className='main-container'>
            <div className='left-side'>
                <LeftSideContainer></LeftSideContainer>
            </div>
            <div className='right-side'>
               <RightSideContainerFirst></RightSideContainerFirst>
                <RightSideContainerSecond></RightSideContainerSecond>
            </div>



        </div>
    )

}

export default Login