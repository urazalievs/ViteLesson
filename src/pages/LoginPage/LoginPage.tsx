import { Link, useNavigate, } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppLink } from "../../components/UI/AppLink/AppLink";
import { ItemWrapper } from "../../components/UI/itemsWrapper/ItemWrapper";
import "./LoginPage.scss";

export const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <AppInput
          inputPlaceholder="Номер телефона"
          inputType="tel"
        />
        <AppInput
          inputPlaceholder="Пароль"
          inputType="password"
        />
        <AppButton
          buttontext="Войти"
          buttonType="button"
          isDisabled={false}
        />
      </form>
      <AppLink
        href="/password-page"
        linkText="Забыли пароль?"
      />
      <ItemWrapper
        itemText="Зарегистрироваться"
        helpLink="Войти"
        hasError= {true}
        regLink="/regist-page"
      />
      
    </div>
  );
};
