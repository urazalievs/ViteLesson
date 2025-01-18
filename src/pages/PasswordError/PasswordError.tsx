import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppLink } from "../../components/UI/AppLink/AppLink";
import { ItemWrapper } from "../../components/UI/itemsWrapper/ItemWrapper";


export const PasswordError = ()=>{
    return(
        <div className="container">
            <div className="LoginPage">
                  <h1 className="passwTitle">Забыли пароль?</h1>
                  <p className="passwText">Укажите свой номер телефона, чтобы получить код для сброса пароля.</p>
                  <form action="#">
                    <AppInput
                      inputPlaceholder="Номер телефона"
                      inputType="tel"
                    />
                  </form>
                  <AppButton
                    buttonType="button"
                    buttontext="Отправить"
                    isDisabled
                  />
                  
            </div>
        </div>
    );
}