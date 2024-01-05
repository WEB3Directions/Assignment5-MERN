import React from 'react'
import "./App.css";
import Apps from "./Apps.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First_chair from './First_chair.js';
import Second_chair from './Second_chair.js';
import Third_chair from './Third_chair.js';
import Forth_chair from './Forth_chair.js';
import Fifth_chair from './Fifth_chair.js';
import Sixth_chair from './Sixth_chair.js';
import Seventh_chair from './Seventh_chair.js';
import Eigth_chair from './Eigth_chair.js';




function App() { 
  console.log(First_chair); 
  
  return (

    <div >
<BrowserRouter>

      <div>
        
        <Routes>
        <Route path="/" element={<Apps />} />
          <Route path="/First_chair" element={<First_chair/>} />
          <Route path="/Second_chair" element={<Second_chair/>} />
          <Route path="/Third_chair" element={<Third_chair/>} />
          <Route path="/Fourth_chair" element={<Forth_chair/>} />
          <Route path="/Fifth_chair" element={<Fifth_chair/>} />
          <Route path="/Sixth_chair" element={<Sixth_chair/>} />
          <Route path="/Seventh_chair" element={<Seventh_chair/>} />
          <Route path="/Eight_chair" element={<Eigth_chair/>}/>
          
          
        </Routes>
      </div>
    
    </BrowserRouter>
     
</div>

    
  );

}

export default App;





// function App() { 
  
//   return (

//     <div className="offset-text" >

//       <div> <Text3 color="blue"/>  </div>

// <First_Component/>

// <Second_Component/>
      
// <Third_Component/>
     
// </div>

    
//   );

// }

// export default App;



// function App() { 
  
//   return (

//     <div className="change">

//     <Cards title="Honda" imgSrc="https://static.pakwheels.com/2023/10/redesigned-2025-honda-accord-aims-to-surprise-with-significant-virtual-design-changes-222083_1.jpg" desc="Accord 2024"/>
//     <Cards title="Mercedes" imgSrc="https://www.thedrive.com/uploads/2022/07/21/2021-Mercedes-AMG-GT-Stealth-Edition.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440" desc="IMG GT"/>
//     <Cards title="BMW" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2019_BMW_M850i_xDrive_Automatic_4.4_Front.jpg/800px-2019_BMW_M850i_xDrive_Automatic_4.4_Front.jpg" desc="8 Series"/>
//     <Cards title="Lexus" imgSrc="https://global.toyota/pages/news/images/2020/07/07/1330/20200707_02_07_s.jpg"  desc="LS 450 2022"/>
     
// </div>

    
//   );

// }

// export default App;






























































































// import Cards from "./card";
// import Header from "./components/Header";
// import footer from "./footer";
// import Router from "./components/Router"
// import './App.css';
// // import { useState } from "react";




// function App() {

//   // const [userName, setUserName] = useState("Zakriya")
//   // const changeName = () => {
//   //   setUserName("Kiran")
//   //}

//   return (

//     <div>
// {/* 
//       <h1> {userName} </h1> */}

      
//       {/* <h1>Header</h1>
//       <Footer/>
//        */}
//    {/* <Cards title="Mercedes" imgSrc="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D"/>
//    <Cards title="Dodge Viper" imgSrc="https://img.freepik.com/premium-photo/red-racing-car-drift-track-dust-from-wheels-art-illustration-motion-blur_305419-2157.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais"/>
//    <Cards title="Lamborghini " imgSrc="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"/>
//    */}


//      {/* <button onClick={changeName}>Update Name</button> */}




//        </div>
//   )
// }

// export default App;


































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
