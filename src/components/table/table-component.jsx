import React,{Component} from 'react';
import './table-component-styles.css';

class Table extends Component{
    constructor(){
        super();
        this.state = {
            cases: []
        }
    }
    componentDidMount(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://covid19pr.herokuapp.com/worlddata';
        fetch(proxyUrl+url)
        .then(response=>response.json())
        .then(newCase=>this.setState({cases:newCase}))
    }
    render(){
        let {cases}=this.state;
        return(
            
            <table>
                <tr>
                    <th>Country</th>
                    <th>Total Cases</th>
                    <th>Active</th>
                    <th>Recovered</th>
                </tr>
                {cases.map(newCase=>(
                    <tr key={newCase.id}>
                        <td>{newCase.country_name}</td>
                        <td>{newCase.cases}</td>
                        <td>{newCase.active_cases}</td>
                        <td>{newCase.total_recovered}</td>
                    </tr>
                ))}

            </table>
        )

        
    }
}

export default Table;