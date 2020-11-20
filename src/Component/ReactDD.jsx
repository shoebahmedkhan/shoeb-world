import React, {useState, useEffect} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



export const ReactDD=()=>{
    const [selectedCategory, setSelectedCategory] = useState("1");
    const options = [
        {value:1, label:'one'}, {value:2, label:'Two'}, {value:3, label:'three'}
      ];

      const defaultOption = options[0];

      useEffect(()=>{
          console.log(selectedCategory);
      }, [selectedCategory]);


      useEffect(()=>{
        console.log("Hey Khalid Thanks!!!");
    }, []);

    return (
       <Dropdown options={options} onChange={e=>setSelectedCategory(e)} value={defaultOption} placeholder="Select an option" />
    )
}
