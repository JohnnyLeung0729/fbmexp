<template>
    <div class="home rflex">
      <left_menu class="leftMenu"></left_menu>
      <div class="menu_right wflex el-scrollbar" ref="menu_right" width="200px">
        <top_menu></top_menu>
        <div class="menu_content" ref="menu_content">
                <router-view></router-view><!--页面渲染入口-->
            </div>
<!--        <my_footer></my_footer>-->
      </div>
    </div>
</template>

<script>
    import left_menu from "./LeftMenu.vue";
    import top_menu from "./TopMenu";
    import my_footer from "./footer"

    export default {
        name: 'homelayout',
        data(){
            return {
            }
        },
        computed:{
        },
        components:{
          left_menu,
          top_menu,
          my_footer
        },
        created() {
        },
        mounted (){
        },
        watch:{

        }
    }
</script>
<style scoped>
.home {
  min-height: 100vh;
}
.leftMenu{
  width: 200px;
  min-height: 100vh;
  background: #1a263a;
  float: left;
}
.menu_right {
  width: calc(100% - 201px);
  float: right;
}
.menu_content {
  padding: 20px;
  background: #f5f7fa;
  min-height: calc(100vh - 90px);
}
</style>
