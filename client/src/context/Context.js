import {createContext, useEffect, useReducer} from "react"
import Reducer from "./Reducer";


const INITIAL_STATE = {
    user: false,
    isFetching:false,
    error:false
}

//Mechanism used to allow user login 
export const Context = createContext(INITIAL_STATE);

//gives user info to rest of app
export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    
    useEffect(()=>{
        
        localStorage.setItem("user",JSON.stringify(state.user));

    },[state.user])

    return (
        <Context.Provider
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </Context.Provider>
      )
}