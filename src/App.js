import React,{Component} from 'react';
import HomePage from './Pages/homepage';
import Navbarheader from './Components/navbar/navbar.component';


class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="App">
        <Navbarheader/>
       <HomePage />
      </div>
    )
  }
}

export default App;
