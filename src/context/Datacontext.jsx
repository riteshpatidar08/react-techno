//NOTE step 1 import createContext from react
import { createContext } from "react";

//Step2 call the createContext save the function result in a variable.

export const Datacontext = createContext()

//step3 then you have to create a component.

export const DataProvider = ({children}) => {
    console.log(children)
    const userData = {
        username : '123',
        name : "john"
    }

    return <Datacontext.Provider value={{userData}}>
    {children}
    </Datacontext.Provider>
}