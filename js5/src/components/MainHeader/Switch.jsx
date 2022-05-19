import { useContext } from "react"
import AuthContext from "../../store/auth-context"


export const Switchh=()=>{
    const dark = useContext(AuthContext)
    return(
        <div>
            <input  type="checkbox" />
        </div>
    )
}