
import './App.css';
import {useState} from 'react';
import MyComp from './components/MyComp';
import MyAPIMockup from './components/MyAPIMockUp';


function App() {
  const  [dList, setDList] = useState(false)
  function displayList(){
    if(dList)
    setDList(false);
    else
    setDList(true);
  }
  return (
    <div>
      <div style={{display:"flex"}}>
    <MyComp dList={dList} onClick={displayList} />
    <MyComp dList={dList} onClick={displayList} />
    </div>
    
    <MyAPIMockup/>
    </div>
  );
}

export default App;
