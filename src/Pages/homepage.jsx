import React,{Component} from 'react';
import './homepage-styles.css';
import Table from '../Components/table/table-component';
import Piechart from '../Components/datachart/piechart.component';
import Iframechart from '../Components/datachart/iframechart.component';

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
                <h1 className="wrldtbletitle">Cases Around the World</h1>
                <div className="india-table">
                    
                    <Table />
                </div>
                <Piechart key={infos._id} infos={infos} name={'India'}></Piechart>
                <Iframechart url={"https://ourworldindata.org/grapher/daily-cases-covid-19?tab=map&country=IND"}/>
                <Iframechart url={"https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case"}/>
            </div>
        )
    }
}

export default HomePage;