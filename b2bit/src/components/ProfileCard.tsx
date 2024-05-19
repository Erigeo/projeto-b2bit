
interface Props {
    name: string,
    email: string,
    img1: any,
    img2: any,
    img3: any
}

const ProfileCard = ({name, email, img1, img2, img3} : Props) => {
    return(
        <div className="flex items-center bg-componentAccount w-[356px] h-[315px] rounded-[16px] drop-shadow-xl flex-col mt-[95px]">
                <div className="flex items-center  mt-5 flex-col">
                    <h4 className='font-nunito text-[14px] font-semibold'>Profile picture</h4>
                    <div className='w-[58px] h-[56px] rounded-[8px] mt-3'>
                        <img className="w-[58px] h-[56px] rounded-[8px]" src={img1 || img2|| img3} alt="" /> 

                    </div>
                </div>
                <div className="mt-4">
                    <div className="inline-flex whitespace-pre">
                        <h4 className='font-nunito font-normal'>Your</h4>
                        <h4 className='font-nunito font-bold'> Name</h4>
                    </div>
                    <div className="font-nunito font-normal text-[14px] mt-1 w-[296px] h-[44px] rounded-[8px] bg-componentAccoutSpace flex items-center px-5">
                        <h5 className=''> {name} </h5>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="inline-flex whitespace-pre">
                        <h4 className='font-nunito font-normal'>Your</h4>
                        <h4 className='font-nunito font-bold'> E-mail</h4>
                    </div>
                    <div className="font-nunito font-normal text-[14px] mt-1 w-[296px] h-[44px] rounded-[8px] bg-componentAccoutSpace flex items-center px-5">
                        <h5 className=''>{email}</h5>
                    </div>
                </div>
            </div> 
    )
}


export default ProfileCard;