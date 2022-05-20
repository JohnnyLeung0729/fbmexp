<template>
    <div class="homeIndex">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in cardList">
          <div class="card">
            <div class="title">
              {{item.name}}
              <el-tooltip class="item" effect="dark" :content="item.tooltip" placement="top">
                <span class="question"><i class="el-icon-question"></i></span>
              </el-tooltip>
            </div>
            <div class="num">
              {{item.num}}
              <span class="detailLink">查看详情 ></span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    import HomeLayout from "../../layout/HomeLayout.vue";

    export default {
        name: 'home',
        data(){
            return {
              cardList:[
                {
                  name: '一件代发',
                  num: 150,
                  tooltip: '一件代发的订单数'
                },
                {
                  name: '代发待出库',
                  num: 150,
                  tooltip: '代发待出库的订单数'
                },
                {
                  name: '快递订单',
                  num: 195,
                  tooltip: '快递订单的下单数'
                },
                {
                  name: '转运订单',
                  num: 39,
                  tooltip: '转运的订单数'
                },
                {
                  name: '异常件',
                  num: 9,
                  tooltip: '异常件数量'
                },
              ]
            }
        },
        computed:{
        },
        components:{
            HomeLayout,
        },
        created() {
        },
        mounted (){
        },
        watch:{

        }
    }
</script>
<style scoped lang="scss">
  .homeIndex {
    .card {
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.06);
      border-radius: 4px;
      padding: 20px 20px 25px 25px;
      margin: 0 0 20px 0;
      text-align: left;
      .title {
        font-size: 16px;
        line-height: 18px;
        color: #284876;
        .question {
          float: right;
        }
      }
      .num {
        font-size: 36px;
        line-height: 18px;
        color: #ec6d0e;
        margin: 41px 0 0 0;
        .detailLink {
          float: right;
          cursor: pointer;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
