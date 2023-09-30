import './App.css';
import Flowers from './Flowers';
import FlowersData  from './FlowersData';


function App() {

  return (

      <>
      <h1 class='mt-[40px] text-purple text-5xl text-center'>About Flowers</h1>
      <div class='mt-[60px] '>
        
      
     {FlowersData.map((values)=>{
      return(
        <>
<Flowers
title={values.title}
imgsrc={values.imgsrc}
des={values.des}
btn ={values.btn}
        />
        </>
      )
     })}
      </div>
      </>

  );
}

export default App;
