import publicApi from './config'
const authControllers = {
    login: async (data) => {
        try {
            let result = await publicApi.post('/api/login',data)
            return result;
        } catch (error) {
            throw error;
        }
      
    },
    logout: async () => {
        localStorage.clear('userInfo');
        console.log("logout");
        window.location.href='/'
    },


};

export default authControllers;
