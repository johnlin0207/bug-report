<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="form-box">
    <el-form-item label="用户名">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.password" type="password"></el-input>
    </el-form-item>
    <el-button type="primary" class="btn" @click="login">登录</el-button>
  </el-form>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        const data = {username: this.formLabelAlign.name, password: this.formLabelAlign.name};
        console.log(this.$http.post('/login', data))
        this.$http.post('/login', data)
          .then((data) => {
            if (data.status === 1) {
              this.$router.push('/home');

            }else{
              this.$router.push('/login');
            }
          })
          .catch((err) => {
          })
      }
    },

  }
</script>

<style scoped lang="scss">
  .form-box {
    display: inline-block;
    position: absolute;
    top: 38%;
    transform: translate(-50%, -50%);

  }

  .btn {
    display: inline-block;
    width: 100%;
  }
</style>
