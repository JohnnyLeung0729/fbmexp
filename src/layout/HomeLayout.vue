<template>
    <div class="home rflex">
      <top_menu></top_menu>
        <div class="menu_right wflex el-scrollbar" ref="menu_right" width="200px">
          <left_menu class="leftMenu"></left_menu>
          <div class="menu_content" ref="menu_content">
                <router-view></router-view><!--页面渲染入口-->
            </div>
        </div>
      <my_footer></my_footer>
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
  background: antiquewhite;
}
.menu_right {
  display: flex;
  width: calc(100%);
}
.menu_content {
  width: calc(100%  - 200px);
  padding: 25px;
  background: rgba(0,0,0,0.05);
  min-height: calc(100vh - 160px);
}
</style>
