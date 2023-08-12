import './App.css'
import Login from './components/Login'
 import DefaultButton from './components/DefaultButton'
/* import Logo from './components/Logo'*/
import Sidebar from './components/SideBar'
import ModalAproved from './components/ModalAproved';
import { BiCheckCircle } from 'react-icons/bi';
import {AiFillCloseCircle} from 'react-icons/ai'
 import UpdateUserData from './components/UpdateUserData'
import SearchBar from './components/SearchBar'
/* import ListCardItem from './components/ListCardItem'*/
/*  import ItemsContainer from './components/ItemsContainer' */
/* import DefaultContainer from './components/DefaultContainer'*/
/* import CommentInput from './components/CommentInput'*/
/* import InputOptions from './components/InputOptions'*/
/* import DueProcess from './components/DueProcess'*/
 import ModalDueRequest from './components/ModalDueRequest'
/* import InfoForModal from './components/InfoForModal'*/
import ModalRequest from './components/ModalRequest'




function App() {

  return (
    <div>
      <DefaultButton title='Revisar solicitudes'></DefaultButton>
      {/*<Logo src="src/assets/imgs/Logo.png" alt='LogoSena'></Logo> */}

      <Sidebar></Sidebar>
      <DefaultButton color={'red'} title='Rechazar'></DefaultButton>
      <ModalAproved firsttext='Solicitud Enviada' secondtext='Recibira su Email' icon1={AiFillCloseCircle} icon2={BiCheckCircle}></ModalAproved>
      <UpdateUserData text='Actualizar Datos'></UpdateUserData>
      <SearchBar text='Buscar'></SearchBar>
      {/*<ListCardItem state='Pendiente' typedoc='PAZ Y SALVO' date={new Date(2023, 11, 12)}></ListCardItem>*/}
      {/*  <ItemsContainer></ItemsContainer> */}
      {/*<DefaultContainer text='Parece que no tiene nada pendiente y su paz y salvo ha sido aprobado'></DefaultContainer> */}
      {/* <CommentInput></CommentInput> */}
      {/* <InputOptions text='Tipo Documento' option1='CC' option2='TI' option3='CE'></InputOptions> */}
      {/* <DueProcess text='Biblioteca'></DueProcess> */}
      <ModalDueRequest></ModalDueRequest> 
      {/*  <InfoForModal title='Documento' text='100000000'></InfoForModal> */}
      <ModalRequest></ModalRequest>
      <Login></Login>
    </div>
  )
}

export default App
