import React from "react";
import './Main.css';
import Leftbar from "./Leftbar";
import Mainsection from "./Mainsection";

function Main(){
    return(
        <div className="Main">
            <Leftbar />
            <Mainsection />
        </div>
    );
}
export default Main;