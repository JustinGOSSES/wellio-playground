import wellio from 'wellio';
import wellpath from './a00-01-01-073-05W5-0.LAS';
import React from 'react';
import ReactDOM from 'react-dom/client';




function GetWell(){
  console.log("test wellio", wellio)
  console.log("swellpath",wellpath)
  let pathToWellLog = "./a00-01-01-073-05W5-0.LAS"
  let text = fetch(wellpath)
    .then((r) => r.text())
    .then(text  => {
    //   console.log("text",text);
    //   console.log("well_string", text)
      let well_json_as_string = JSON.stringify(wellio.las2json(text)) 
      console.log("well_json_as_string", well_json_as_string)
    //   return well_json_as_string
    return React.createElement('p', {well_json_as_string})
    })
}

export default GetWell;