import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../service/Auth';


function Account(){
    const navigate = useNavigate();
    const [data, setData] = useState({} as any);
    
    useEffect(() => {
        async function setUserData(){
            const result = await getUserData()
            console.log( result)
            setData(result)
            localStorage.setItem('image', data.avata.low)
        }

        setUserData()
    }, []
    )

    function logout(){
        localStorage.removeItem('userToken')
        navigate('/')
    }

   


    return (
        <>
        <header className="bg-componentBackground w-[1440px] h-[70px] flex items-center flex-row-reverse">
            <button className="bg-buttonColor w-[272px] h-[44px] rounded-[6.33px] text-backgroundWhite mr-8" onClick={ () => logout()}>Logout</button>

        </header>
        <div className="flex h-screen justify-center  bg-backgroundAccount">
            <div className="flex items-center bg-componentAccount w-[356px] h-[315px] rounded-[16px] drop-shadow-xl flex-col mt-[95px]">
                <div className="flex items-center  mt-5 flex-col">
                    <h4 className='font-nunito text-[14px] font-semibold'>Profile picture</h4>
                    <div className='w-[58px] h-[56px] rounded-[8px] mt-3'>
                        <img className="w-[58px] h-[56px] rounded-[8px]" src={data.avatar?.medium || data.avatar?.high || data.avata?.low} alt="" /> 

                    </div>
                </div>
                <div className="mt-4">
                    <div className="inline-flex whitespace-pre">
                        <h4 className='font-nunito font-normal'>Your</h4>
                        <h4 className='font-nunito font-bold'> Name</h4>
                    </div>
                    <div className="font-nunito font-normal text-[14px] mt-1 w-[296px] h-[44px] rounded-[8px] bg-componentAccoutSpace flex items-center px-5">
                        <h5 className=''> {data.name} </h5>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="inline-flex whitespace-pre">
                        <h4 className='font-nunito font-normal'>Your</h4>
                        <h4 className='font-nunito font-bold'> E-mail</h4>
                    </div>
                    <div className="font-nunito font-normal text-[14px] mt-1 w-[296px] h-[44px] rounded-[8px] bg-componentAccoutSpace flex items-center px-5">
                        <h5 className=''>{data.email}</h5>
                    </div>
                </div>
            </div> 
        
        </div>
        </>
    )
}

export default Account
