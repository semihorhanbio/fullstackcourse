import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({ courses }) => {
    const coursesInfo = courses.map(course => {
        return (
            <div key={course.id}>
                <Header courseName={course.name}/>
                <Content parts={course.parts}/>
                <Total parts={course.parts}/>
            </div>    
        )
    })
    
    return <>{coursesInfo}</>
}

export default Course