<template>
  <div id="login-container">
    <el-form
      class="login-form"
      ref="user"
      :model="user"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item>
        <h5>辽宁科技大学学生管理系统</h5>
      </el-form-item>

      <el-form-item label="手机号" prop="phone">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>

      <el-form-item label="学号" prop="code">
        <el-input v-model="user.code"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="login-btn" type="primary" size="mini" @click="onLogin"
          >登录</el-button
        >
        <el-button
          class="reset-btn"
          type="primary"
          size="mini"
          @click="resetForm('user')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        phone: "",
        code: "",
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "change" },
          {
            validator: function(rule, value, callback) {
              if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("请输入正确的手机号"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],

        code: [
          { required: true, message: "请输入学号", trigger: "change" },
          {
            validator: function(rule, value, callback) {
              if (/^2\d{11}$/.test(value) == false) {
                callback(new Error("请输入正确的12位学号"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onLogin() {
      this.$router.push("/home");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
#login-container {
  position: fixed;
  left: 30px;
  right: 30px;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, red, yellow, blue);
}

.login-form {
  width: 400px;
  height: 280px;
  background: violet;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 30px;
  .login-btn {
    width: 150px;
  }
  .reset-btn {
    background: springgreen;
    outline: none;
  }
}

h5 {
  font-size: 20px;
  color: crimson;
}

.el-form-item__label:before {
  content: "" !important;
}
</style>
