import {login} from "@/api/sys";
import MD5 from 'js-md5'
import {getItem, setItem} from "@/utils/storage";
import {TOKEN} from "@/constant";
export default {
    namespaced: true,
    state: () => ({
        token: getItem(TOKEN),
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            setItem(token)
        }
    },
    actions: {
        login(context, userinfo) {
            const {username, password} = userinfo
            return new  Promise((resolve, reject) => {
                login({
                    username,
                    password: MD5(password)
                }).then(data => {
                    console.log(data);
                    this.commit('user/setToken', data.data.token)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}
