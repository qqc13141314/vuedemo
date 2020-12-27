<template>
  <div id="layout-container">
    <el-container>
      <!-- 左边区域 -->

      <el-aside>
        <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="selfmessage">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>

          <el-menu-item index="play">
            <i class="el-icon-menu"></i>
            <span slot="title">学生综合信息</span>
          </el-menu-item>

          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">奖学金申请</span>
          </el-menu-item>

          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">出勤情况</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 左边区域 -->
      <el-container>
        <!-- header区域 -->
        <el-header
          ><el-row>
            <el-col :span="4"
              ><div class="grid-content bg-purple">
                <img src="@/assets/logo.png" alt="" /></div
            ></el-col>
            <el-col :span="16"><h1>在校学生信息管理系统</h1></el-col>
            <el-col :span="4">
              <template>
                <el-button type="success" round plain @click="logout"
                  >退出</el-button
                >
              </template>
            </el-col>
          </el-row>
        </el-header>
        <!-- header区域 -->

        <!-- main区域 -->
        <el-main><router-view></router-view> </el-main>
        <!-- main区域 -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {},

  data() {
    return {
      isCollapse: true,
      activeName: "",
    };
  },
  methods: {
    logout() {
      this.$confirm("确认退出登录？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

#layout-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #ecf5ff;

  color: #333;
  text-align: center;
  line-height: 60px;
}
/* header LOGO */
img {
  width: 60px;
  height: 60px;
}

h1 {
  color: cadetblue;
  font-size: 30px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  width: 200px !important;

  line-height: 200px;
  height: 800px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
