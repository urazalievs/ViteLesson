type TAppInput  ={
    inputType:"text" | "tel" | "password",
    inputValue?:string,
    inputPlaceholder: string,
    inputChange?:()=>{}
}


export const AppInput = ({inputType,inputValue,inputPlaceholder, inputChange}:TAppInput)=>{
    return(
        <input type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputChange}/>
    )
}