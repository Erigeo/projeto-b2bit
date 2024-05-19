interface Props {
    bgColor: string
}

const FooterCredit = ({bgColor} : Props) => {
    return(
        <footer className={`flex justify-center ${bgColor} font-nunito font-normal text-[14px]`}>
            <span> made by Georg Herison - georgherison@gmail.com</span>
        </footer>
     )
}

export default FooterCredit