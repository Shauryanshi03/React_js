import { useState } from "react";

function Loginform(){
    const[email,setEmail]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        alert(`Email:${email}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            
        <label>Email:</label>
        <input type="email" value={email} onChange={(event)=> 
            setEmail(event.target.value)
        }required/>

        <button type="submit">Submit</button>
        </form>
    );
}

export default Loginform;