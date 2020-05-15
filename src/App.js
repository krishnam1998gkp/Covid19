import React,{Component} from 'react';
import HomePage from './Pages/homepage';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="App">
       <HomePage />
      </div>
    )
  }
}

export default App;
