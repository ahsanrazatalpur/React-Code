// import React, {useState} from 'react'
// const Counter = ()=>{
//     const [number,setNumber] =useState(0)
//     return(
//     <>
//         <h1>Tasbeeh</h1>
//         <h1>{number}</h1>
//     <button onClick = {()=> setNumber(number+1)}>Inc</button>
//     <button onClick={()=> setNumber(number-1)}>dec</button>
//     <button onClick={()=> setNumber(number == 0)}>Reset</button>
//     </>
//     )
// }
// export default Counter

import React, {useState} from 'react'
const Tasbeeh = () =>{
    const[number,setNumber]=useState(0)
    return(
        <div>
            <h1>{number}</h1>
            <button onClick = {()=> setNumber(number+1)}>Count++</button>
            <button onClick={()=> setNumber(number - 1)}>count--</button>
            <button onClick = {()=> setNumber(number == 0)}>refrsh</button>
        </div>

    )
}
export default Tasbeeh