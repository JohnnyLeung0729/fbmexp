<template>
  <div class="topMenu">
    <div class="topMenu_icon" @click="iconType = !iconType">
      <i v-if="iconType" class="el-icon-s-fold"></i>
      <i v-if="!iconType" class="el-icon-s-unfold"></i>
    </div>
    <div class='bread_container' id="bread_container">
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item
            v-for='(itemName,index) in matchedArr()'
            :key='index'
        >
          {{ itemName }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i style="vertical-align: middle;" class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <!--        <div class="btn-bell">-->
        <!--          <el-badge :value="3" class="item">-->
        <!--            <router-link to="/tabs">-->
        <!--              <img src="../assets/img/emil.png" style="width: 27px;vertical-align: middle;" alt="">-->
        <!--            </router-link>-->
        <!--          </el-badge>-->
        <!--        </div>-->
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{ name }}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>My Center</el-dropdown-item>
            <el-dropdown-item divided command="loginout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="user-name" trigger="click" @command="handleLanguage">
                    <span class="el-dropdown-link">
                        {{ languageName }}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="中文">中文</el-dropdown-item>
            <el-dropdown-item divided command="English">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { setToken, getToken, removeToken } from '@/utils/auth'

export default {
  name: "TopMenu",
  computed: {
    ...mapGetters(['name', 'avatar', 'sidebar']),
    headNavWidth () {
      return document.body.clientWidth-this.sidebar.width
    }

  },
  data () {
    return {
      iconType: true,
      fullscreen: false,
      languageName: '中文',
    }
  },
  created () {
  },
  methods: {
    matchedArr () {
      let temp = [], temps = [];
      this.$route.matched.filter((item, index, self) => {
        if (item.name) {
          const name = item.name;
          temp.push(name);
        }
      });
      temp.filter((item, index, self) => {
        if (!temps.includes(item)) {
          temps.push(item);
        }
      })
      return temps;
    },
    // 语言切换
    handleLanguage (command) {
      console.log(command)
      this.languageName = command
    },
    // 用户名下拉菜单选择事件
    handleCommand (command) {
      if (command == 'loginout') {
        removeToken("Token")
        removeToken("user")
        localStorage.removeItem('ms_username');
        this.$router.push('/login');
      }
    },
    // 全屏事件
    handleFullScreen () {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  }
}
</script>

<style scoped lang="scss">
.topMenu {
  height: 50px;
  width: 100%;
  display: flex;
  background: white;
  box-sizing: border-box;

  .topMenu_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
    cursor: pointer;
    font-size: 24px;
  }

  .bread_container {
    width: 100%;

    .breadcrumb {
      float: left;
      margin-left: 15px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(105, 123, 140, 1);

      .breadbutton {
        float: left;
        margin: 4px 5px 0 0;

      }
    }

  }

  .header-right {
    padding-right: 50px;

    .header-user-con {
      display: flex;
      align-items: center;
      height: 50px;

      .btn-fullscreen {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
        margin-right: 5px;
        font-size: 24px;
        transform: rotate(45deg);
      }

      .user-name {
        margin-left: 10px;
      }

      .el-dropdown {
        display: inline-block;
        position: relative;
        color: #606266;
        font-size: 14px;
      }

      .el-dropdown-link {
        cursor: pointer;
        display: flex;
        width: max-content;
      }
    }
  }
}
</style>
