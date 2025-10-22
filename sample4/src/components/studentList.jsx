const StudentList=() =>{

    const students = [
        { id: 1, name: "John", grade: "A" },
        { id: 2, name: "Emma", grade: "B" },
        { id: 3, name: "Liam", grade: "A" },
        { id: 4, name: "Olivia", grade: "C" }];

    return <div>
        {students.map((values,index)=> <p key={index.id}> {values.id} {values.name} {values.grade}</p>)}
    </div>
}
export default StudentList