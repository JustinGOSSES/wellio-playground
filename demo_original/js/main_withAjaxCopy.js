
// GLOBAL VARIABLES
//// var all_files is a holder for any files uploaded into the browser memory
var all_files = [""];
//// The wellio object is loaded asynchronously. We're using it here as a global variable instead of inside a function, 
//// so it is available in the browser console for demo purposes. Generally speaking, not the best practice.
var wellio = ""


 /**
* A function that reads in a file into browser memory.
**/
function readInLASFromASSETS(url_to_file){
    $.ajax({
              url : url_to_file,
              dataType: "text",
              success : function (data) {
                all_files = [data,""]
                document.getElementById("altair").innerHTML = "upload success, see console for more details";
                console.log("successfully loaded file at path",url_to_file,"into all_files window object")
                return data
              },
              error : function (XMLHttpRequest, textStatus, errorThrown) {
                // document.getElementById("upload-success").innerHTML = "upload failure";
                console.log("error in function readInLASFromASSETS() : ",textStatus, errorThrown)
              } 
          });
  }

  function convertToWellioLAS(){
      let well = wellio.las2json(all_files[0])
      console.log("wellio JSON",well)
      return wellio.las2json(all_files[0])
  }

function myPromise(){ 
    return new Promise((resolve, reject)=>{
            resolve(require(['node_modules/wellio/dist/index.js'],function(wellio_obj){wellio = wellio_obj}));
        }).catch(error =>{
            reject(error);
        }); 
}
  
myPromise()
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
