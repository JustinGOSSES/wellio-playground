
// GLOBAL VARIABLES
//// var all_files is a holder for any files uploaded into the browser memory
var all_files = [""];
//// The wellio object is loaded asynchronously. We're using it here as a global variable instead of inside a function, 
//// so it is available in the browser console for demo purposes. Generally speaking, not the best practice.
var wellio = ""


/**
* A function that reads in a file into browser memory.
 * @returns {string} A string representation of the file uploaded.
**/
function readInLASFromASSETS(url_to_file){
    $.ajax({
              url : url_to_file,
              dataType: "text",
              success : function (data) {
                all_files = [data,""]
                document.getElementById("uploadResult").innerHTML = "upload success";
                console.log("successfully loaded file at path",url_to_file,"into all_files window object")
                return data
              },
              error : function (XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById("uploadResult").innerHTML = "upload failure";
                console.log("error in function readInLASFromASSETS() : ",textStatus, errorThrown)
              } 
          });
  }

/**
* A function that converts a string representation of a LAS file into a wellio JSON object by calling wellio.las2json().
 * @returns {string} A string representation of the file uploaded.
**/
function convertToWellioLAS(){
      let well = wellio.las2json(all_files[0])
      // let well = wellio.las2json(well_string)
      console.log("wellio JSON",well)
      document.getElementById("well_json").innerHTML = JSON.stringify(well);
      return wellio.las2json(all_files[0])
}

/**
* A function that loads the wellio.js module.
 * @returns {obj} The wellio.js object with various functions available. You can call 'wellio' in the browser console to see 
 * all the functions available.
**/
function loadWellio(){ 
    return new Promise((resolve, reject)=>{
            resolve(require(['node_modules/wellio/dist/index.js'],function(wellio_obj){wellio = wellio_obj}));
            //resolve(require(['https://raw.githubusercontent.com/JustinGOSSES/wellio.js/master/dist/index.js'],function(wellio_obj){wellio = wellio_obj})); 
        }).catch(error =>{
            reject(error);
        }); 
}
  
/**
* This calls all the functions in the right order. Due to the asynchronous nature of the functions, in particular loading the 
wellio module, the order of execution is important and timeouts are used to ensure that the functions are executed in the right order.
* This is kinda a hack, but it means you don't have to use webpack, browserify, or any other build tool that might be one more thing to learn.
**/
loadWellio()
.then(
  (message) => {
    setTimeout(() => readInLASFromASSETS("a00-01-01-073-05W5-0.LAS"), 200)
    }
 )
 .then(
  (message) => {
      setTimeout(() => convertToWellioLAS(), 300)
  }
)
