import {login} from "@/api/sys";
import JSEncrypt from "jsencrypt";
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
            const jse = new JSEncrypt(); // 实例化一个 jsEncrypt 对象
            jse.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPdkhtCXoojyzSCmzhEydFkFLx1GKtHUZyCuffvD0C/j878tmhpu3UjNoh24SkMUK0bYuFK8a0iXgfqyCSQ4FJJzZL+NGIEVPbogvpXvI0+8Rdls0ItTsQm8Vu/jA3HMB0wQ33d7+FJCPysSnwQkSn0t0qbo6KSHPelY1d8jihZQIDAQAB"); //配置公钥
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: jse.encrypt(password)
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
