import { useEffect, useState } from 'react';
import { getUserData } from '../service/Auth';
import ProfileCard from '../components/ProfileCard';
import HeaderLogout from '../components/HeaderLogout';
import FooterCredit from '../components/FooterCredit';


function Account(){
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

   
   


    return (
        <>
            <HeaderLogout/>
        <div className="flex h-screen justify-center  bg-backgroundAccount">
            <ProfileCard email={data.email} name={data.name} img1={data.avatar?.low} img2={data.avatar?.medium} img3={data.avatar?.high}  />
        </div>
        <FooterCredit bgColor='bg-backgroundAccount'/>
        </>
    )
}

export default Account
