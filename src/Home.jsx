import { useContext } from "react";
import { BioContext } from "./propdill";
export const Home = () => 
    {
        const myName = useContext(BioContext);
        return ( <h1>Home {myName}</h1>
      ); };