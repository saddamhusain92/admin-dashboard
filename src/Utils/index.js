const sum = (a,b)=>{
 return a+b;
}
const split = (string,symbol,arr)=>{
    return string.split(symbol)[arr] ;
   }
const envData = ()=>{
    return process.env.VUE_APP_VAR
}
const capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export {sum,split,envData,capitalize}