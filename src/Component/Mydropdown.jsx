import { ScalarFilter } from 'ag-grid-community'
import React from 'react';
import {Dropdown,DropdownButton,SplitButton,ButtonGroup} from "react-bootstrap";

 export const Mydropdown=()=>{
     return(
      <>
      <div className="mb-2">
      {['make'].map(
    (variant) => (
      <SplitButton style={{width:"200px"}}
        key={variant}
        id={`dropdown-split-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Toyota</Dropdown.Item>
        <Dropdown.Item eventKey="2">Ford</Dropdown.Item>
        <Dropdown.Item eventKey="2">Porsche</Dropdown.Item>
       </SplitButton>
        ))}
         {[ "model"].map(
    (variant) => (
      <SplitButton style={{width:"200px"}}
        key={variant}
        id={`dropdown-split-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">celica</Dropdown.Item>
        <Dropdown.Item eventKey="2">modeo</Dropdown.Item>
        <Dropdown.Item eventKey="2">Boxter</Dropdown.Item>
       </SplitButton>
        ))}
         {[ "price"].map(
    (variant) => (
      <SplitButton style={{width:"200px"}}
        key={variant}
        id={`dropdown-split-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">100000</Dropdown.Item>
        <Dropdown.Item eventKey="2">200000</Dropdown.Item>
        <Dropdown.Item eventKey="2">300000</Dropdown.Item>
       </SplitButton>
        ))}
         {["quantity"].map(
    (variant) => (
      <SplitButton style={{width:"200px"}}
        key={variant}
        id={`dropdown-split-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">2</Dropdown.Item>
        <Dropdown.Item eventKey="2">3</Dropdown.Item>
        <Dropdown.Item eventKey="2">4</Dropdown.Item>
       </SplitButton>
        ))}
      </div>
    </>
     )
 }