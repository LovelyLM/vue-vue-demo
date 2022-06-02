<template>

  <div class="login-container">
    <el-form class="login-form"
             :model="loginFrom"
             :rules="loginRules"
             ref="loginFormRef">
      <div class="title-container">
        <div>账号密码登录</div>
      </div>

      <!--用户名-->
      <div class="username-container">
        <el-form-item prop="username">
          <el-input :prefix-icon="User"
                    placeholder="请输入用户名"
                    v-model="loginFrom.username"
                    name="username"
                    type="text"></el-input>
        </el-form-item>
      </div>


      <!--密码-->
      <div class="password-container">
        <el-form-item prop="password">
          <el-input
              name="password"
              v-model="loginFrom.password"
              type="password"
              placeholder="请输入密码"
              show-password
              :prefix-icon="Lock"
          />
        </el-form-item>
        <div class="rememberPassword">
          <el-checkbox v-model="rememberPassword" label="记住密码" size="default"/>
          <el-link type="primary">忘记密码</el-link>
        </div>
      </div>
      <el-button class="login-button" @click="login" v-model:loading="loading" type="primary">登录
      </el-button>
    </el-form>

  </div>


</template>

<script setup>
import {ref} from 'vue'
// import {ElMessage,} from "element-plus";
import {useStore} from "vuex"
import {Lock, User} from '@element-plus/icons-vue'

let loading = ref(null)
let rememberPassword = ref(false)
const store = useStore()
const loginFrom = ref({
  username: "",
  password: ""
})
const loginFormRef = ref(null)

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空！'))
  }
  if (value.length < 11) {
    callback(new Error('密码至少为11位！'))
  } else if (value.length > 100) {
    callback(new Error('密码不能超过100位！'))
  }
  callback()
}
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空！'
    }
  ],
  password: [{
    required: true,
    trigger: 'blur',
    validator: validatePass
  }]
})


const login = () => {
  loginFormRef.value.validate(valid => {
    if (valid) {
      loading.value = true;
      store.dispatch('user/login', loginFrom.value)
          .then(() => {
            loading.value = false;
          }).catch(error => {
        console.log(error);
        loading.value = false;
      })
    } else {
      console.log("失败")
    }
  })
}


</script>
<style>
body {
  background: url(../../assets/wallpaper.jpg) no-repeat;
  background-size: cover;
}

.login-container {
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -200px;
  /* absolute居中的一种方法 */
  background-color: whitesmoke;
  width: 400px;
  height: 400px;
  border-radius: 25px;
  text-align: center;
  padding: 5px 40px;
  box-sizing: border-box;
  /* 这样padding就不会影响大小 */
}

.login-button {
  width: 320px;
  margin-top: 20px;
}

.username-container {
  margin-top: 50px;
}

.rememberPassword {

  justify-content: space-between;
  display: flex;
  align-items: center;
}

.title-container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
