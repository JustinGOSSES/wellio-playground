

let wellio = "w"
let well_path = ""

//// var all_files is a holder for the las files uploaded into the browser
var all_files = [""];
//// var temp_json is the single well las file converted to json object format
var temp_json = {};




function readInLASFromASSETS(){
    //// removes all status spans for uploads
    // removeInnerHTML("upload-file-info");
    // removeInnerHTML("upload-success");
    $.ajax({
              url : "a00-01-01-073-05W5-0.LAS",
              dataType: "text",
              success : function (data) {
                all_files = [data,""]
                // document.getElementById("upload-success").innerHTML = "upload success";
                console.log("successfully loaded a00-01-01-073-05W5-0.LAS",all_files)
                convertToWellioLAS()
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
  }

function checker(message){console.log("wellio in checker function",wellio)}

async function myPromise(){ 
    return await new Promise((resolve, reject)=>{
            resolve(require(['./js/wellio/dist/index.js'],function(wellio_obj){wellio = wellio_obj}));
        }).catch(error =>{
            reject(error);
        }); 
}

function loadLAS(){
    return wellio.loadLAS( well_path)
}

myPromise().then(
    (message) => {
        setTimeout(() => console.log("wellio object",wellio), 200)
    }
  ).then(
      (message) => {
        setTimeout(() => console.log("help test",wellio.help()), 100)
        }
  ).then(
    (message) => {
      setTimeout(() => readInLASFromASSETS(), 300)
      }
   )
  
  
  