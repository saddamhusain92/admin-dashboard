import {useAuthStore} from '@/Stores/user'

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
const profileName = ()=>{
    const user = useAuthStore().user.fullname;
    return user
}
const profileAvatar = ()=>{
    const avatar = useAuthStore().user.avatar;
    return avatar
}

export {sum,split,envData,capitalize,profileName,profileAvatar}