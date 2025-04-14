const List =() =>{
    const list = ['Mobile','Charger','Wifi']
    return(
        <>
        {list.map((item,index) =>(
                <h1 key={index}> {item} </h1>

            ))}
        
        </>
    )
}