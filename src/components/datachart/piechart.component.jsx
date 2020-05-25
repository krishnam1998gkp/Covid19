import './canvas.styles.scss';
var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react').default;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Piechart extends Component {
    constructor(props){
        super(props);

        const {infos,name} = props;

        this.state = {
            infos:infos,
            name:name
        }
    }
    
	render() {
        const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: `Current status of ${this.state.name}`
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}",
				dataPoints: [
					{ y: this.state.infos.confirmed, label: "confirmed" },
					{ y: this.state.infos.active, label: "active" },
					{ y: this.state.infos.deaths, label: "deaths" }
				]
			}]
        }
        
		return (
            <div className="piechart">
			<CanvasJSChart options = {options}/>
		</div>
		);
	}
}

export default Piechart;       