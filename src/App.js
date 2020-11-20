import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import{Grid} from "./Component/Grid";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {Mydropdown} from "./Component/Mydropdown";
import {ReactDD} from "./Component/ReactDD";
import{Example} from "./Component/Example";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { form } from 'react-dom-factories';

function App() {
  return (
    
<div >
  <ReactDD />
<Mydropdown />
  <Grid/>
  <Example/>
  


   </div>
);
}

export default App;
