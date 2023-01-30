import './App.css';
import Add from './component/Add';
import Multi from './component/Multi';
import Square from './component/Square';
import Student from './component/Student';
import Sub from './component/Sub';
import UserListing from './component/UserListing';



function App() {

  var student1 = {
    name : "Gautam",
    age : 20,
    roll_no : 66,
    city : "Mumbai"
  }

 /* function showData(){
    alert('Hii')
    fetch("https://reqres.in/api/users?page=1")
    .then(res=> res.json())
    .then(result =>
      console.table(result.data)
      )
  } */

  return (
    <>
         {/* <button onClick={showData}>Click Me </button>  */}
        <UserListing/>
        <Multi/>
        <Square/>
        <Student data={student1}/>
        <h1>Hello World!</h1>
        <h2>Welcome to React...</h2>
        <h2>{9*5}</h2>
        <Add x={50} y={30}/>
        <Sub x={40} y={20}/>        
        
    </>
  );
}

export default App;
