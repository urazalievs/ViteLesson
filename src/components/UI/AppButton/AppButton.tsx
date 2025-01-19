import { SAppbutton } from "./AppButtonStyle"

type TAppButton = {
    buttontext:string,
    buttonType:"button"|"submit",
    buttonClick?:()=>{},
    isDisabled: boolean,
}


export const AppButton = ({
        buttontext,
        buttonType, 
        buttonClick,
        isDisabled
    }:TAppButton)=>{
    return (
        <SAppbutton 
            type={buttonType} 
            onClick={buttonClick}
            disabled= {isDisabled}
            >{buttontext}</SAppbutton>
    )
}