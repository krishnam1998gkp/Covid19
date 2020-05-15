import React,{Component} from 'react';
import './homepage-styles.css';

class HomePage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="homepage">
                <div className="updates">
                    <h2 className="update-title">Live Updates</h2>
                    <div className="cards">
                    <div className="card">
                        <div className="data">
                            <h3 className="data-text">India</h3>
                            <h3 className="data-num">443</h3>
                        </div>
                        <div className="link">
                        <a href="#" className="btn btn-black">Learn More</a></div>
                    </div>
                    <div className="card">
                        <div className="data">
                            <h3 className="data-text red">Active</h3>
                            <h3 className="data-num red">223</h3>
                        </div>
                        <div className="link">
                        <a href="#" className="btn btn-black">Learn More</a></div>
                    </div>
                    <div className="card">
                        <div className="data">
                            <h3 className="data-text green">Recovered</h3>
                            <h3 className="data-num green">23</h3>
                        </div>
                        <div className="link">
                        <a href="#" className="btn btn-black">Learn More</a></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;