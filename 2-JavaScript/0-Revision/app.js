//var : //Global
var a = 1
let a = 1

//boundary start
function myName (){
    if(){
        var x = 2
    }
    function foo(){
        var aFoo = 1
    }
    console.log(x)
    let c = 2
}
//boundary end

function myName() {
    if(){
        let a = 1
    }
    console.log(a)
}