import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import First_chair from './First_chair.js'






const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/First_chair" element={<First_chair/>} />
          {/* <Route path="/First_chair" element={<First_chair/>} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter


// const About = () => {
//     return (
//       <div>
//         <h1>About</h1>
//         <ul>
//           <li> <Link to="/">Home</Link></li>
//           <li> <Link to="/Contact">Contact</Link></li>
//         </ul>
//       </div>
//     )
//   }
