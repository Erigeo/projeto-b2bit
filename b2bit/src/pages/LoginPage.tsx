import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../service/Auth'
import * as Yup from 'yup'
import Login from '../components/Login';
import FooterCredit from '../components/FooterCredit';




function LoginPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [carregandoPage, setCarregandoPage] = useState(true);

  useEffect(() => {
    async function verifyLogin(){
      try {
        const token = localStorage.getItem('userToken')
        if(token){
          navigate('/profile')
        }
        setCarregandoPage(false)
      }catch(e){
        setOpen(true)
      }
    }

    verifyLogin()
  }, [])

  if(carregandoPage){
    return null
  }

  async function login(email: string, password: string) {
    try{
      const result =  await signIn(email, password)

      if(result){
        console.log( )
        localStorage.setItem('userToken', result.tokens.access)
        localStorage.setItem('userId', result.user.id)
        navigate('/profile')
       
      }else{
        setOpen(true)
      }
    }catch(e){
      console.log("login error")
      setOpen(true)
    }
  }

  const initialValues = {
      email: '',
      password: ''
    };
    const onSubmit = (values: { email: string; password: string; }) => {
      login(values.email, values.password)
    }; 
    const validationSchema = Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email adress"),
      password: Yup.string().required("Password is required"),
    });
  

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-backgroundWhite ">
        <Login initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} open={open}/>
      </div>
      <FooterCredit bgColor='bg-backgroundWhite'/>
    </>
  )
}

export default LoginPage
