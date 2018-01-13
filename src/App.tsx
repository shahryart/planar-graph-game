import * as React from 'react';
import './App.css';
import { Graph } from './Graph/Graph';
import Dropdown from 'react-dropdown';
import { readFileSync } from 'fs';



const graphFile = 'graph.json';

let graphs = JSON.parse(readFileSync(graphFile, 'utf-8'));


const options = graphs.map((value: any) => value.name);

class App extends React.Component {
  timeSteps: number = 0;
  state = {
    graph: {nodes: graphs[0].nodes, edges: graphs[1].edges},
    timeSteps: 1,
  };
  constructor(props: any) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>nice</h2>
          <Dropdown 
            options={options} 
            onChange={this.onSelect}
            placeholder="Select an option" 
          />
          <input defaultValue="1" onChange={this.handleTextChange}/>
          <button type="change" className="btn btn-primary" onClick={this.handleClick}>Change</button>
        </div>
        <p className="Planar Graph Game">
        <Graph
          timeSteps={this.state.timeSteps}
        />
        </p>
      </div>
    );
  }
  handleTextChange(e: any): void {
    this.timeSteps = parseInt(e.target.value, 10);
  }
  handleClick(): void {
    let i = this.timeSteps;
    this.setState({graph: undefined, timeSteps: i});
  }
  onSelect(): void {
    return;
  }
}
export default App;
