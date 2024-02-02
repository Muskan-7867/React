//Props se hum  components data pass kr skte hai just like function parameter.
//jaise function me parameter pass hote hai components me props pass hote hai.
function Student(Props)
{
    console.log(Props)
    return(
        <div>
            <h1>Helloo {Props.name}</h1>
            <h2>Email:{Props.email}</h2>
        </div>
    )
}
export default Student;