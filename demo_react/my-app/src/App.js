import logo from './logo.svg';
import './App.css';
import wellio from 'wellio';
import wellpath from './a00-01-01-073-05W5-0.LAS';

function getWell(){
  console.log("test wellio", wellio)
  console.log("swellpath",wellpath)
  let pathToWellLog = "./a00-01-01-073-05W5-0.LAS"
  let text = fetch(wellpath)
    .then((r) => r.text())
    .then(text  => {
      console.log("text",text);
      console.log("well_string", text)
      let well_json_as_string = JSON.stringify(wellio.las2json(text)) 
      console.log("well_json_as_string", well_json_as_string)
      return well_json_as_string
    })  
}

function App() {
  let well_as_json_string = getWell()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A <a href="https://github.com/JustinGOSSES/wellio.js">Wellio</a> demo</h1>
        <p>The repository that holds the code is <a href="https://github.com/JustinGOSSES/wellio-playground">JustinGOSSES/wellio-playground</a>. Each demo has a folder and README that describes what it is demonstrating.</p>
        <p>This is a barebone demos to show one of a few possible ways to use wellio with different amounts of JavaScript tooling.</p>
        <p>A LAS formatted well log file stored with the front-end code for this website is loaded and converted to JSON where it can be further manipulated and visualized in the browser.</p>
        <h3>SEE BROWSWER'S CONSOLE FOR MORE DETAILS AND THE LOADED WELL</h3>
        <h4>This demo is still being created!</h4>
        <div id="altair"></div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <p>dangerouslySetInnerHTML={{ __html: well_as_json_string }}</p> */}
        {/* <p>{well_as_json_string}</p> */}
      </header>
    </div>
  );
}

export default App;
