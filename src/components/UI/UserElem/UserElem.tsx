import { SUserElem } from "./UserElem.style"

interface  IUserElem {
    userImg:string,
    userMainText:string,
    userSecundaryText:string
}

export const UserElem = ({userImg,userMainText,userSecundaryText}:IUserElem)=>{
    return(
        <SUserElem>
            <img src={userImg} alt="User" />
            <div className="user__description">
              <p className="main__text">{userMainText}</p>
              <p className="secondary__text">{userSecundaryText}</p>
            </div>
            <span className="Badge">3</span>
          </SUserElem>
    )
}