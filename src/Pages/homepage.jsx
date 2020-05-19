import React,{Component} from 'react';
import './homepage-styles.css';
import Piechart from '../Components/piechart/piechart.component';


class HomePage extends Component{
    constructor(){
        super();
        this.state = {
            infos: []
        }
    }
    componentDidMount(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://covid19pr.herokuapp.com/totaldata'
        fetch(proxyUrl+url)
        .then(response=>response.json())
        .then(newInfo=>this.setState({infos:newInfo}))
    }
    render(){
        let {infos} = this.state;
        //console.log(infos._id);
        
        return(
            <div className="homepage">
                <div className="updates">
                    <h2 className="update-title">Live Updates</h2>
                    <div className="cards">
                    <div className="card">
                            <div className="data">
                                <h3 className="data-text">India</h3>
                                <h3 className="data-num">{infos.confirmed}</h3>
                            </div>
                            <div className="link">
                            <a href="#f" className="btn btn-black">Learn More</a></div>
                     </div>
                     <div className="card">
                            <div className="data">
                                <h3 className="data-text red">Active</h3>
                                <h3 className="data-num red">{infos.active}</h3>
                            </div>
                            <div className="link">
                            <a href="#f" className="btn btn-black">Learn More</a></div>
                     </div>
                     <div className="card">
                            <div className="data">
                                <h3 className="data-text green">Recovered</h3>
                                <h3 className="data-num green">{infos.recovered}</h3>
                            </div>
                            <div className="link">
                            <a href="#f" className="btn btn-black">Learn More</a></div>
                     </div>
                    
                    </div>
                </div>
                <Piechart key={infos._id} infos={infos} name={'India'}></Piechart>
            </div>
        )
    }
}

export default HomePage;