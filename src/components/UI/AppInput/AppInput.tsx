import { SAppInput } from "./AppInput.style"

type TAppInput  ={
    inputType:"text" | "tel" | "password",
    inputValue?:string,
    inputPlaceholder: string,
    inputChange?:()=>{}
}


export const AppInput = ({inputType,inputValue,inputPlaceholder, inputChange}:TAppInput)=>{
    return(
        <SAppInput type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputChange}/>
    )
}