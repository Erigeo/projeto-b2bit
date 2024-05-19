import { useNavigate } from "react-router-dom";

const HeaderLogout = () => {
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('userToken')
        navigate('/')
    }

    
    
    return(
        <header className="bg-componentBackground xl:w-full  h-[70px] flex items-center sm: flex-row-reverse">
            <button className="bg-buttonColor w-[272px] h-[44px] rounded-[6.33px] text-backgroundWhite mr-8 " onClick={ () => logout()}>Logout</button>
        </header>
    )
}

export default HeaderLogout;