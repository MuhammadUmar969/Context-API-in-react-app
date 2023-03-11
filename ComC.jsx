import React, { useContext } from "react";
import  {FirstName, LastName} from "./Index";

const ComC = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return(
        <>

     {/*
      Create Context Method
      <FirstName.Consumer> 
     {(fname) => {
       return (
        <LastName.Consumer>
        {(lname) => {
           return(
         <h1> 
           My Name is {fname} {lname}
         </h1>
           );
        }}
        </LastName.Consumer>
       )
     }} 
     </FirstName.Consumer> */}
        <h1> 
           My Name is {fname} {lname}
         </h1>
    </>
    );
};

export default ComC;