import React, { useState } from 'react';

import { AgGridColumn, AgGridReact, Dropdown} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Select, AsyncSelect, MultiSelect } from 'dropdown-select';
import 'dropdown-select/dist/css/dropdown-select.css';


export const Grid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000, quantity:1 },
        {make: "Ford", model: "Mondeo", price: 32000, quantity:5 },
        {make: "Porsche", model: "Boxter", price: 72000, quantity:4 },
        
       
    ]);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className="ag-theme-alpine" style={ { height: 400, width: 800 } }>
            <AgGridReact style={{width:"800px"}}
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
                <AgGridColumn field="quantity"></AgGridColumn>
            </AgGridReact>
            
  
  
        </div>
    );
};

