import { UserElem } from "../UI/UserElem/UserElem"
import { dataList } from "./dataList"
import { SList } from "./list.style"


export const List =()=>{
    return(
        <SList>
          <div className="List__title">
            <h2>Подписки</h2>
            <span className="count">123</span>
          </div>
          {dataList.map((e, i)=>(
                <UserElem userImg={e.listImg} userMainText={e.listMain} userSecundaryText={e.listSecondary}/>
            ))}
        </SList>
    )
}