import { SAppInput } from "./AppInput.style"

type TAppInput  ={
    inputType:"text" | "tel" | "password" | "search",
    inputValue?:string,
    inputPlaceholder: string,
    inputChange?:()=>{}
    inpName?:string
}& React.InputHTMLAttributes<HTMLInputElement>


export const AppInput = ({inpName,inputType,inputValue,inputPlaceholder, inputChange,...props}:TAppInput)=>{
    return(
        <SAppInput {...props} name={inpName} type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputChange}/>
    )
}