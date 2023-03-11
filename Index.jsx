import React, { createContext} from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

const Index = () => {
   return(
    <>
    <FirstName.Provider value= {"Umar"}>
    <LastName.Provider value={"Aziz"}>
      <ComA />
     </LastName.Provider>
     </FirstName.Provider>
    </>
   );
};

export default Index;
export {FirstName,LastName};