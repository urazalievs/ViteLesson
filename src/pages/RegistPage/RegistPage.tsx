import { AppButton } from "../../components/UI/AppButton/AppButton"
import { AppInput } from "../../components/UI/AppInput/AppInput"
import { ItemWrapper } from "../../components/UI/itemsWrapper/ItemWrapper"
import "./RegistPage.scss";
// type TRegistPage ={

// }

export const RegistPage =({})=>{
    return(
       <div className="LoginPage">
             <h1>Регистрация</h1>
             <form action="#">
                <AppInput
                    inputPlaceholder="Имя и Фамилия"
                    inputType="text"
                />
               <AppInput
                 inputPlaceholder="Номер телефона"
                 inputType="tel"
               />
               <AppInput
                 inputPlaceholder="Пароль"
                 inputType="password"
               />
               <AppButton
                 buttontext="Зарестрироваться"
                 buttonType="button"
                 isDisabled={false}
               />
             </form>
             <ItemWrapper
                itemText="Войти"
                helpLink="Регистрация"
                hasError={true}
               regLink="./RegistPage/RegistPage.tsx"
             />
           </div>
    )
}