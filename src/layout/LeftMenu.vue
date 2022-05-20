<template>
  <div>
    <div class="left_logo">
      FBM PRIMES
    </div>
    <el-menu class="left_menu"
             :default-active="$route.path"
             unique-opened
             background-color="#1a263a"
             text-color="#fff"
    >
        <router-link to="/home">
            <el-menu-item index="/home">控制台</el-menu-item>
        </router-link>
      <el-submenu index="/warehouseManagement">
        <template slot="title">入库管理</template>
        <router-link to="/warehouseManagement/invoiceManagement">
          <el-menu-item index="/warehouseManagement/invoiceManagement">到货单管理</el-menu-item>
        </router-link>
        <router-link to="/warehouseManagement/invoiceEntry">
          <el-menu-item index="/warehouseManagement/invoiceEntry">到货单录入</el-menu-item>
        </router-link>
        <router-link to="/warehouseManagement/receivingRegistration">
          <el-menu-item index="/warehouseManagement/receivingRegistration">收货登记</el-menu-item>
        </router-link>
        <router-link to="/warehouseManagement/installingBracketRecord">
          <el-menu-item index="/warehouseManagement/installingBracketRecord">装托记录</el-menu-item>
        </router-link>
        <router-link to="/warehouseManagement/shelvesManagement">
          <el-menu-item index="/warehouseManagement/shelvesManagement">上架管理</el-menu-item>
        </router-link>
      </el-submenu>
        <el-submenu index="/manageenter">
            <template slot="title">企业管理</template>
            <router-link to="/manageenter/listenter">
                <el-menu-item index="/listenter">企业清单</el-menu-item>
            </router-link>
            <router-link to="/manageenter/addenter">
                <el-menu-item index="/addenter">添加企业</el-menu-item>
            </router-link>
        </el-submenu>
        <el-submenu index="/manageuser">
            <template slot="title">管理员管理</template>
            <router-link to="/manageuser/adduser">
                <el-menu-item index="/adduser">添加管理员</el-menu-item>
            </router-link>
        </el-submenu>
    </el-menu>
  </div>
</template>
<style scoped>
.left_logo {
  height: 50px;
  line-height: 50px;
  color: white;
}
/deep/ .el-menu {
  border: 0;
}
/deep/ .el-submenu__title:hover {
  background: linear-gradient(90deg,#1a4075 100%,#1a4075 0);
}
/deep/ .el-submenu__title:focus{
  background: linear-gradient(90deg,#1a4075 100%,#1a4075 0);
}
/deep/ .el-menu-item:focus{
  background: linear-gradient(90deg,#1a4075 100%,#1a4075 0);
}
/deep/.el-menu-item:hover{
  background: linear-gradient(90deg,#1a4075 100%,#1a4075 0);
}
/deep/ .el-menu-item.is-active {
  background: linear-gradient(90deg,#1a4075 100%,#1a4075 0);
  color: white;
  border: 0;
}
/deep/ router-link-exact-active:active{
  color: -webkit-link;
}
</style>
