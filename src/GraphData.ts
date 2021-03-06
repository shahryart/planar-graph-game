

const Red: string = '#ff0000';

export let graphs = [{name: 'default', nodes: [
    {id: '1', color: Red, timeSteps: 0, label: ''}, 
    {id: '2', color: Red, timeSteps: 0, label: ''},
    {id: '3', color: Red, timeSteps: 0, label: ''}],
    edges: [{id: 'e1', source: '1', target: '2'},
            {id: 'e2', source: '2', target: '3'},
            {id: 'e3', source: '1', target: '3'}]},
{name: 'starGraph', nodes: [
    {id: '1', color: Red, timeSteps: 0, label: ''}, 
    {id: '2', color: Red, timeSteps: 0, label: ''},
    {id: '3', color: Red, timeSteps: 0, label: ''},
    {id: '4', color: Red, timeSteps: 0, label: ''},
    {id: '5', color: Red, timeSteps: 0, label: ''},
    {id: '6', color: Red, timeSteps: 0, label: ''},
    {id: '7', color: Red, timeSteps: 0, label: ''},
    {id: '8', color: Red, timeSteps: 0, label: ''}
    ],
    edges: [{id: 'e1', source: '1', target: '8'},
            {id: 'e2', source: '2', target: '8'},
            {id: 'e3', source: '3', target: '8'},
            {id: 'e4', source: '4', target: '8'},
            {id: 'e5', source: '5', target: '8'},
            {id: 'e6', source: '6', target: '8'},
            {id: 'e7', source: '7', target: '8'}
            ]}, 
{name: 'square', nodes: [
    {id: '1', color: Red, timeSteps: 0, label: ''}, 
    {id: '2', color: Red, timeSteps: 0, label: ''},
    {id: '3', color: Red, timeSteps: 0, label: ''},
    {id: '4', color: Red, timeSteps: 0, label: ''},
    {id: '5', color: Red, timeSteps: 0, label: ''}],
    edges: [{id: 'e1', source: '1', target: '5'},
            {id: 'e2', source: '2', target: '5'},
            {id: 'e3', source: '3', target: '5'},
            {id: 'e4', source: '4', target: '5'},
            {id: 'e5', source: '1', target: '2'},
            {id: 'e6', source: '2', target: '3'},
            {id: 'e7', source: '3', target: '4'},
            {id: 'e8', source: '4', target: '1'}
            ]}
];
