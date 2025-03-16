const Mapp = () =>{
    const fruits = ['grapes','banana','apple']
    const days = ['Monday','Tuesday','Wednesday','thuursday']
    const names = ['Ali','Zain','Ahsan','ismail']
    const asia = ['Pakistan','India','China','Japan']
    const mobile = ['vivo','Infinix','iphone','Nokia']
    const laptop = ['Dell','hp','Lenovo']

    return(
       <>
       <h1>Page 5 Mapping</h1>
        { fruits.map((item , index) => (
        <h1 key = {index}>{item}</h1>

        

    ))}
    {days.map((item, index) =>(
    <h1 key={index}>{item}</h1>
    ))}

    {names.map((item,index) =>(
        <h1 key={index}>{item}</h1>
    ))}
    <ul>
        {asia.map((item,index) =>(
            <h1><li key={index}>{item}</li></h1>
        ))}
    </ul>
    <ol>
        {mobile.map((item , index) =>(
            <h1><li key={index}>{item}</li></h1>
        ))}

    </ol>

    <h1>Page 5 End</h1>
       </>
    )
    ol
        {laptop.map((item , index)=>(
          <h1><li key ={index}> {item}</li></h1>
        ))}
    

}
export default Mapp