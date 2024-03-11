import React, { useState } from "react";
import CourseCard from "./CourseCard";

const Planner = () => {
    const [data , setData] = useState([]) ;

    const addFunctionality = () => {

        const courseName = document.getElementById('course-name').value;
        const courseHour = document.getElementById('course-hour').value;

        //create object

        const newData = {
            name : courseName,
            hour : parseInt(courseHour)
        }

        //In data push obj created above\
        setData([...data , newData])


    }

    return (
        <div className="container">
            <h2>Geekster Education Planner</h2>
            <div className="input-field">
                <input type="text" placeholder="Subject" id="course-name" />
                <input type="number" placeholder="Hour" id="course-hour"/>
                <button className="add-btn" onClick={addFunctionality}>Add</button>
            </div>
            {data.map((course , index)=>
                 
                    <CourseCard name={course.name} hour={course.hour} key={index}/>
    
            )}
        </div>
    )

}

export default Planner;

