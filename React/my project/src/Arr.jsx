function Arr() {
  const names = ["Ahsan ", "Ali ", "Gull ", "Ayaz "];
  const fruits = ["Apple", "banana", "Grapes"];

  return (
    <>
      <h1 style={{ color: "red" }}>{names}</h1>
      <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1>
      <h1>{names[3]}</h1>

      <div><h1>{fruits}</h1>
      <h1 style={{textAlign:'center', color:'red' }}>{fruits[0]}</h1>
      <h1 style={{textAlign:'center',color:'yellow'}}>{fruits[1]}</h1>
      <h1 style={{textAlign:'center',color:'green'}}>{fruits[2]}</h1>
      </div>
      
      
    </>
  );
}
export default Arr;
