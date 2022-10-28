const authUser = ()=>{
    const token = localStorage.getItem("userInfo")
    return token?true:false;
}
export default authUser