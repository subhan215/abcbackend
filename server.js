
/// Asynchronously Reading Data /// Read Data first and then give it in callback function 
/* var fs = require("fs");
fs.readFile("data.txt"  ,  (err , data) => {
    console.log(data.toString())
    if(err) {
        console.log(err)
    }
}) */
/// Asynchronously writing data /// 
/* var fs = require("fs") ; 
var data = JSON.stringify({
    name : "subhan" , 
    number : "03083978739"
})
fs.writeFile("data.txt" , data , (error) => {
    if(error){console.log(error)}
    console.log("successfully data is written");
}
) */
/// Synchronously Writing data /// 
/* var fs = require("fs") ; 
var data = JSON.stringify({
    name : "subhan" , 
    number : "03083978739"
})
 try {
    fs.writeFileSync("data.txt" , data);
    console.log("Data is written")
} catch (error){
    console.log(error)
} */
/// Synchronously Reading Data /// 
/* var fs = require("fs") ; 
try {
    const data = fs.readFileSync("data.txt")
    console.log(data.toString())
} catch (error) {
    console.log(error)
}  */
