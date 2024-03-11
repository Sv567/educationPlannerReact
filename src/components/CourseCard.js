import { useState } from 'react' ;

const CourseCard = ({ name, hour, key }) => {
    const [hourVal, updateHourVal] = useState(hour);
    return (

        <div key={key} className='content'>
            <p>Subject Name : {name}</p>
            <p> Hour : {hourVal}</p>

            <div className='btn'>
                <button onClick={()=>{updateHourVal(hourVal+1)}}>+</button>
                <button onClick={()=>{updateHourVal(hourVal-1)}} className='minus-btn'>-</button>
            </div>

        </div>
    )
}

export default CourseCard ;