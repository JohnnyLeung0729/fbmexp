<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">添加企业</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
          ]
        }
      },
      created () {
        this.getInfo()
      },
      methods: {
        getInfo() {
          let form = {
            page: 1,
            size: 15
          }
            this.$axios.enterprise.getListenter(form).then(res => {
              console.log(res)
              this.tableData = res.data
            }).catch(err => {
              console.log(err)
            })
        },
        handleClick(row){
          console.log(row)
          this.$router.push({path: 'addListenter'})
        }
      }
    }
  </script>
