import {useEffect, useState} from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../service/Auth'
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup'









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
        <div className="bg-componentBackground w-[438px] h-[534px] rounded-[18px] justify-center flex-col items-center drop-shadow-2xl backdrop-blur-8">
            <div className="flex justify-center items-center flex-col gap-7">
              <div className=" mt-[65px]">
                <img src={logo} className="h-[116px] w-[295px]" alt="merda" />
              </div>
              <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                    >
                  {() => (
                  <Form className='flex justify-center flex-col items-center'>
                  <div className="flex justify-center flex-col" mb-2>
                    
                    {open ? (<div className=' flex items-center justify-center'> <span className='text-errorColor mt-[25px] font-nunito text-[12px] absolute'> Credenciais inválidos </span>  </div>) : null}
                    <label className='font-bold font-nunito text-[18px]'>E-mail</label>
                    
                   
                    <Field  className={`bg-inputColor px-3 rounded-[9px] w-[385px] h-[54px] mt-2 font-nunito font-normal text-[16px] ${open ? "border-errorColor border-2 rounded-[9px]" : null }`}  name="email" placeholder="@gmail.com"  />
                    <div className='m-1'>
                    <ErrorMessage name="email" component="span" className="text-errorColor font-nunito text-[12px] absolute" />
                    </div>
                  </div>
                  <div className="flex justify-center flex-col mt-3">
                    <label className='font-bold font-nunito text-[18px]'>Password</label>
                    
                    <Field className={`bg-inputColor px-3 rounded-[9px] w-[385px] h-[54px] mt-2 font-nunito font-normal text-[16px] ${open ? "border-errorColor border-2 rounded-[9px]" : null }`} name="password" type="password" placeholder="******************" />
                    
                    
                    <div className='m-1'>
                      <ErrorMessage name="password" component="span" className="text-errorColor font-nunito text-[12px] absolute" />
                    </div>
                    
              
                   </div>
                   
                  <button className="bg-buttonColor w-[90%] h-[54px] rounded-[9px] text-backgroundWhite mt-8" type='submit'>Sign in</button>
                    
                </Form>
                )}
                </Formik>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
