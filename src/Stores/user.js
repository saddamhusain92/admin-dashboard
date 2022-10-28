import { defineStore } from 'pinia';


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: '',
        returnUrl: null
    }),
    actions: {
        login(data) {
            this.user = data
            
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});