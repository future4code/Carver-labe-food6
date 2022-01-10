import React from "react";
import { useState } from "react";

const HomePage = () => {
    const {cont , setCont} = useState(false)
    
    const screenMount = () => {
        if (cont === false){
        }
    }
   
    return (
        <div>
            HomePage
        </div>
    )
};

export default HomePage;