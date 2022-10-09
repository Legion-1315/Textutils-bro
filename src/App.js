import React,{useState} from 'react'
import './App.css';
// import logo from './logo.svg';
import Accordion from './components/Accordion';
// imported componentfor 3rd
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

//commented when hosted on github because routing doesn't work on github pages so comment everything that contains routing.
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//NOTE: in the latest version of react we don't use Switch, instead we use Routes
//In the latest version of react we need to pass the component as element in the route otherwise the error will occur
//original structure of react app.js 
// function App() {
//   return (
//     // <>
//     // <div className="blank" id="one"></div>
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
//           Learn React with CWH
//         </a>
//       </header>
//       </div>
//       // </>
//   );
// }

//practice work
//1
//  function App() {
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg bg-light">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">Navbar</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">About</a>
//           </li>
          
//         </ul>
//         <form className="d-flex" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </div>
//     </div>
//       </nav>
//       {/* used navbar to check if it properly works */}
//       <Navbar/>
//     </>
//   );
// }

//2
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({msg:'sd',type:'danger'});
  const showAlert = (message,type) =>
  {
    setAlert({
      msg: message,
      type:type
    })
    
  }
  const toggleMode = () =>
  {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      //if we want to change the title while we click on any button dark mode in this case will change the title of the web site
      document.title = 'TextUtils-Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#d9d7d7';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode';
    }
  }
  

  return (
    <>
    <Router>
      {/* <Navbar/> */}
      {/* using props */}
      {/* when properties are passed we use this */}
      {/* <Navbar title="TextUtils" first="Home" second="About" third="Contact" /> */}
      {/* if less properties are passed than default value in the default props segment in the navbar component will execute
        */}
      <Navbar Mode={mode} toggleMode={toggleMode} title="TextUtils" first="Home" second="About" third="Contact" />
      <Alerts alert={alert} />
      <div className="container"> 
          <Routes>
          {/* used exact before the path because without it react will partially match the path which wil cause problems while routing , so use exact path = " dfdc " .. */}
            <Route exact path="Accordion" element={<Accordion Mode={mode} />}></Route>
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter your text here" Mode={mode} />}></Route>
      </Routes>
      {/* <TextForm showAlert = {showAlert} heading="Enter your text here" Mode={mode} /> */}
      </div>
    </Router>
    </>
  );
}

export default App;

