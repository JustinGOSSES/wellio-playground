

// let wellio = "w"

//// var all_files is a holder for the las files uploaded into the browser
var all_files = [""];



function readInLASFromASSETS(){
    $.ajax({
              url : "a00-01-01-073-05W5-0.LAS",
              dataType: "text",
              success : function (data) {
                all_files = [data,""]
                // document.getElementById("upload-success").innerHTML = "upload success";
                console.log("successfully loaded a00-01-01-073-05W5-0.LAS",all_files)
                return convertToWellioLAS()
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
      // return wellio.las2json(all_files[0])
  }

function myPromise(){ 
    return new Promise((resolve, reject)=>{
            resolve(require(['node_modules/wellio/dist/index.js'],function(wellio_obj){wellio = wellio_obj}));
        }).catch(error =>{
            reject(error);
        }); 
}
  
myPromise()
// .then(
//   (message) => {
//       setTimeout(() => console.log("wellio object",wellio), 200)
//   }
// ).then(
//     (message) => {
//       setTimeout(() => console.log("help test",wellio.help()), 100)
//       }
// )
.then(
  (message) => {
    setTimeout(() => readInLASFromASSETS(), 100)
    }
 )
//  .then(
//   (message) => {
//     setTimeout(() => console.log("The well in JSON = ",message), 700)
//     }
//  )


  