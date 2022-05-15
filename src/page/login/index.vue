<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class='titleArea rflex'>
          <span class='title'>FBM</span>
          <ul class="title_icon"><li><span></span></li><li><span></span></li><li><span></span></li></ul>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
<!--          <el-form-item class="login-item">-->
<!--            <el-select class="chainWidh" v-model="loginForm.chainVal" placeholder="请选择">-->
<!--              <el-option-->
<!--                  v-for="item in chainOptions"-->
<!--                  :key="item.value"-->
<!--                  :label="item.label"-->
<!--                  :value="item.value">-->
<!--              </el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
          <div class="form_title">
            <div>Sign in</div>
            <div>One account for everything Intuit.<span>Learn more</span></div>
          </div>
          <el-form-item prop="username" class="login-item" label="Phone number, email or user ID">
            <el-input @keyup.enter.native="submitForm('loginForm')" type="text" placeholder="username"
                      v-model="loginForm.username">
              <img slot="prefix" class="inputIcon" src="../../assets/img/user.png"/>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item" label="password">
            <el-input @keyup.enter.native="submitForm('loginForm')" type="password" placeholder="password"
                      v-model="loginForm.password">
              <img slot="prefix" class="inputIcon" src="../../assets/img/pwd.png"/>
            </el-input>
          </el-form-item>
<!--          <el-form-item-->
<!--              prop="captcha_code"-->
<!--              class="inputbar"-->
<!--          >-->
<!--            <el-row>-->
<!--              <el-col :span="18">-->
<!--                <el-input-->
<!--                    class="log-input"-->
<!--                    v-model="loginForm.captcha_code"-->
<!--                    placeholder="验证码"-->
<!--                    @keydown.enter.native="submitForm('loginForm')"-->
<!--                >-->
<!--                </el-input>-->
<!--              </el-col>-->
<!--              <el-col :span="5" class="checkCodeSty user_select">-->
<!--                <span class="checkCode" @click="createCode">{{ checkCode}}</span>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </el-form-item>-->
          <div style="margin-bottom: 15px" class="user_select">
            <el-row>
              <el-col :span="12" style="text-align: left;">
                <el-checkbox class="colorSty" v-model="checked">Remember me</el-checkbox>
              </el-col>
              <el-col :span="12" class="checkCode colorSty" style="text-align: right;">
                <span class="el-checkbox__label">Forgot password？</span>
              </el-col>
            </el-row>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">Sign In
            </el-button>
          </el-form-item>
          <div class="form_footer">By selecting Sign In, you agree to our Terms and have read and acknowledge our Global Privacy Statement.
          </div>
          <hr class="form_hr">
          <div class="form_try">Try something else</div>
          <div class="form_new">New to Intuit? <span>Create an account.</span></div>
          <div class="sec_footer">Invisible reCAPTCHA by Google <span>Privacy Policy</span> and <span>Terms of Use.</span></div>
        </el-form>
      </section>
    </transition>
    <div class="login_footer">
      <div>Legal&nbsp;&nbsp;&nbsp;&nbsp; Privacy&nbsp;&nbsp;&nbsp;&nbsp; Security</div>
      <div>© 2022 Intuit, Inc. All rights reserved. Intuit, QuickBooks, QB, TurboTax, ProConnect and Mint are registered trademarks of Intuit Inc.
        <br>
        Terms and conditions, features, support, pricing, and service options subject to change without notice.</div>
    </div>
  </div>
</template>

<script>
import logoImg from "@/assets/img/logo.png";
import {setToken,removeToken,getToken} from '@/utils/auth'

export default {
  data() {
    return {
      logo: logoImg,
      checked: false,
      loginForm: {
        username: 'admin',
        captcha_code: '',
        password: '123456'
      },
      checkCode: '',
      rules: {
        username: [
          {required: true, message: 'Standard call, message, or data rates may apply.', trigger: 'blur'},
          // {min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please enter your password', trigger: 'blur'}
        ],
        // captcha_code: [
        //   {required: true, message: '请输入验证码', trigger: 'blur'}
        // ],
      }
    }
  },
  created() {
    this.createCode()
  },
  mounted() {
  },
  methods: {
    showMessage(type, message) {
      this.$message({
        type: type,
        message: message
      });
    },
    submitForm(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          console.log(this.$axios.user)
          // let userinfo = this.loginForm;
          // this.$axios.user.login(userinfo).then(res => {
          //   let userList = res.data.userList;
            let userList = {
              token: 123,
              name: 'sada'
            };
            userList.roles = 'admin'
            console.log(userList)
            setToken("Token", userList.token)
            setToken("user", JSON.stringify(userList))
            this.$store.dispatch('initLeftMenu'); //设置左边菜单始终为展开状态
            this.$router.push({path: '/home'})
          // })
        }
      });
    },
    createCode() {
      let code = "";
      let codeLength = 4; //验证码的长度
      let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); //随机数
      for (let i = 0; i < codeLength; i++) { //循环操作
        let index = Math.floor(Math.random() * 10); //取得随机数的索引（0~35）
        code += random[index]; //根据索引取得随机数加到code上
      }
      this.checkCode = code; //把code值赋给验证码
    }
  }
}
</script>

<style lang="scss" scoped>
.login_page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(236,238,241,1);

  .title {
    font-size: 37px;
    font-family: SourceHanSansCN;
    font-weight: 500;
    color: rgba(140, 143, 149, 1);
  }
  .title_icon {
    display: block;
    text-align: center;
    padding: 0;
    list-style-type: none;
    height: 23px;
    width: 325px;
    margin: auto;
    margin-top: 15px;
    li {
      outline: none;
      white-space: nowrap;
      float: left;
      margin-right: 15px;
      width: 101px;
      height: 23px;
      display: inline-block;

      span {
        background: url("../../assets/img/xb.png") no-repeat;
        width: 101px;
        background-position: 0 -57px;
        height: 23px;
        display: inline-block;
      }
      &:nth-child(2) {
        width: 127px;
        span {
          width: 127px;
          background-position: -114px -57px;
        }
      }
      &:last-child{
        margin-right: 0;
        width: 67px;
        span {
          background-position: -253px -57px;
          width: 67px;
        }
      }
    }
  }
}

.chainWidh {
  width: 100%;
}

.checkCode {
  cursor: pointer;
}

.colorSty {
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  //color: rgba(255, 255, 255, 1);
}

.checkCodeSty {
  float: right;
  background: rgba(0, 160, 233, 1);
  border-radius: 20px;
  font-size: 18px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(254, 254, 254, 1);
}

.user_select {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.inputIcon {
  width: 16px;
  padding-top: 8px;
  padding-left: 3px;
}

.form_contianer {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 370px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;

  .titleArea {
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 22px;
    width: 100%;
    padding-bottom: 20px;
  }

  .loginForm {
    //border-radius: 8px;
    box-shadow: 0px 4px 16px 0px #00000033;
    border: solid 1px #D4D7DC;
    padding: 20px;
    background: #fff;

    .submit_btn {
      width: 100%;
      padding: 13px 0;
      font-size: 16px;
    }

    .form_title{
      padding-bottom: 22px;
      div{
        &:first-child{
          color: #393a3d;
          font-weight: 400;
          line-height: 1.1;
          font-size: 24px;
          font-family: 'AvenirNext', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        &:last-child {
          display: block;
          padding-top: 20px;
          color: #393a3d;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.2;
          span{
            color: #0077C5;
          }
        }
      }
    }
    .form_footer {
      color: #757575;
      font-style: italic;
      text-align: center;
      font-size: 12px;
      padding: 0 15px;
    }
    .form_hr {
      background: none;
      display: block;
      height: 1px;
      border: 0;
      margin: 15px 0;
      padding: 0;
      border-top: 1px solid #e2e1e1;
    }
    .form_try {
      color: #0077C5;
      text-decoration: none;
      font-size: 14px;
    }
    .form_new {
      padding-top: 20px;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      font-size: 14px;
      padding-bottom: 32px;

      span{
        color: #0077C5;
      }
    }
    .sec_footer {
      background-color: #eceef1;
      margin: 0 -20px -20px;
      padding: 20px;
      font-size: 10px;
      color: #8d9096;
      span{
        color: #0077C5;
      }
    }
  }
}

.login_footer {
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 20px 0;
  color: #505050;
  position: absolute;
  top: 85%;
  line-height: 1.5;
  div{
    &:first-child {

    }
  }
}
</style>
<style lang="scss">
.login_page {
  .el-input__inner {
    background: rgba(240, 246, 255, 1);
    //box-shadow: 0px 1px 18px 0px rgba(19, 44, 65, 0.58);
    border-radius: 4px;
    height: 35px;
  }

  .el-input__prefix {
    left: 8px;
  }

  .el-input--prefix .el-input__inner {
    padding-left: 35px;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    //color: white;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: white;
    border-color: white;
  }

  .el-checkbox__inner::after {
    border-color: #409EFF;
  }

  .el-button--primary, .el-button--primary.is-active, .el-button--primary:active, .el-button--primary:focus, .el-button--primary:hover {
    background: #0077c5;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
  }
}
</style>
