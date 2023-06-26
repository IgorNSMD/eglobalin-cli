import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./layout/header"
import Sidebar from "./layout/sidebar"
import Main from "./layout/main"

//import './App.css';


function App() {


  return (
    <div>
      <Header/>
      <div className="container-fluid">
        <div className="row"> 
            <Sidebar/>
            <Main/>
        </div>
      </div>
    </div>    
  );
}

export default App;
