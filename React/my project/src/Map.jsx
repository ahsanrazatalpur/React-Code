const Map = () =>{
    const days = ['Mnday','Tuesday','wednesday'] 
    return(
       <>
       { days.map((item) =>(
            <h1 key={index}> {item}</h1>

        ))
        }
       </>
    )
}
export default Map