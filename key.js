import { useState } from "react";

function Students(){
    const students=[{id:1,name:"Rahul"},{id:2,name:"Priya"},{id:3,name:"Aman"}];

    return(
        <ul>
            {students.map((student)=>(
                <li key={student.id}>{student.name}</li>
            ))}
        </ul>
    );
}

export default Students;