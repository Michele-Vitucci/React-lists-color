
import Login from "./Input";
import FocusableInput from "./Ref";
import Colors, {colorData} from "./Rendering-lists/Lists";


function App() {

  return(
    <>
  
    <Login/>
    

    <FocusableInput/>

    <Colors colors={colorData} />

   


    

    
    </>
  )
  
}

export default App;