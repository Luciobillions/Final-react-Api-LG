import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Characters from './components/Characters.jsx';
import './index.css';
import Home from './pages/home.jsx';
import Pagenotfound from './pages/pagenotfound.jsx';

// la otra forma que use-----
// const root = ReactDOM.createRoot(document.getElementById('root'));
// <section>
// </section>
// root.render(
//   <StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/character/:id" element={<Characters />} />
//         <Route path="*" element={<Pagenotfound />} />
//       </Routes>
//     </Router>
//   </StrictMode>
// );
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Pagenotfound />,
  },
  {
    path: "/character/:id",
    element:<Characters />
  }
  
 
]);


//El RouterProvider maneja el listado de rutas
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);