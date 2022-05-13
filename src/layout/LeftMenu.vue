<template>
    <el-menu>
        <router-link to="/home">
            <el-menu-item>控制台</el-menu-item>
        </router-link>
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
</template>