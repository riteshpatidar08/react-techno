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


//----USING CONTEXT IN REACT TO SHARE THE DATA OR STATE GLOBALLY IN THE APPLICATION.

//STEP1 import createContext from 'react.

//2 - call the createContext and save the result in the variable ending with suffix "context" eg: Datacontext ;

//3 - now create a component whose name ends with the provider for example DataProvider

//4 declare the data you want to share across your application there

//5 now you have to return the data from that component using the context you have created by calling createContext() function

// 6 return 
{/* <Datacontext.Provider value={{datatoShare}}> </Datacontext.provider> */}

//7 then you have to export both the context and provider

//8 import the provider in the main.jsx file and wrap it around app 
// like <DataProvider>
// <App/>
// </DataProvider>

//9 when you pass something in between the opening and closing tag of the component it is treated children of the component

//10 then you have to go to the context file and destructure in the component params like ({children})

// 11 at last pass the children in the between the return statement like {/* <Datacontext.provider value={{datatoShare}}>
// {children}
// </Datacontext.provider> */}

//NOTE CONSUMING THE SHARED DATA

//step 1 go to the component where to want that data

//step2 import the useContext hook from react

//step3 import the context you have created in the eg we have Datacontext

//step4 pass the DataContext in the useContext(DataContext);

//step5 directly destruture the data you want to show in that component.