import { ErrorMessage, Field, Form, Formik } from "formik";
import logo from '../assets/logo.png'

interface Props {
  initialValues: {email: string;
    password: string;};
  onSubmit: (values: {    email: string;    password: string;}) => void;
  validationSchema: any;
  open: boolean;
}


const Login = ( {initialValues, onSubmit, validationSchema, open} : Props ) => {


  
    return(
        <div className="bg-componentBackground xl:w-[438px] h-[534px] sm:w-[180px] rounded-[18px] justify-center flex-col items-center drop-shadow-2xl backdrop-blur-8">
            <div className="flex justify-center items-center flex-col gap-7">
              <div className=" xl:mt-[65px] sm:mt-[30px]">
                <img src={logo} className="xl:h-[116px] xl:w-[295px] sm:h-[116px] sm:w-[295px]" alt="merda" />
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
    )
}

export default Login;