Array.prototype.odd = function(){
    var arr = new Array();
         for(let i=0; i<this.length; i++){
            if(this[i]%2!==0){
                arr.push(this[i])
            }     
    }
    console.log(arr)
}
Array.prototype.even = function(){
    var arr2 = new Array();
         for(let i=0; i<this.length; i++){
            if(this[i]%2===0){
                arr2.push(this[i])
            } 
    }
    console.log(arr2)
}

console.log('start');
setTimeout(()=>{[1,2,3,4,5,6,7,8].even()},0);
setImmediate(()=>{[1,2,3,4,5,6,7,8].odd()});
console.log('end');