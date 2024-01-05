// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Contact from './components/Contact';

 function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Nav />}>
//         <Route index element={<Homepage />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//       </Route>
//     )
//  
  return (
    <div className="App">

      {/* <RouterProvider router={router} /> */}
      <Nav/>
           <Homepage/>
          <About/>
          <Contact/> 




    </div>
  );
}

export default App;
