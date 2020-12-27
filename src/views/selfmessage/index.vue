<template>
  <div class="selfmessage-container">
    <!-- 查询模块 -->
    <el-card class="box-card">
      <el-input
        placeholder="请输入要查询的内容"
        prefix-icon="el-icon-search"
        v-model="input2"
        mini
      >
      </el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">新增</el-button>
    </el-card>

    <!-- 查询模块 -->

    <!-- 信息展示CARD -->
    <el-card class="box-card">
      <template>
        <el-table :data="tableData" height="300" stripe style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="100">
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="60">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
          <el-table-column prop="phone" label="手机号"> </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                type="success"
                @click="dialogTableVisible = true"
                size="mini"
                >编辑</el-button
              >

              <!-- 编辑页面 -->

              <el-dialog title="编辑" :visible.sync="dialogTableVisible">
                <el-form :model="tableData">
                  <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input
                      v-model="tableData.name"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-input
                      v-model="tableData.sex"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input
                      v-model="tableData.address"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input
                      v-model="tableData.phone"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input
                      v-model="tableData.email"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false"
                    >提交</el-button
                  >
                </div>
              </el-dialog>

              <!-- 编辑页面 -->

              <el-button
                size="mini"
                type="danger"
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>

      <div class="footercontrol">
        <el-button class="delall" type="danger" icon="el-icon-delete"
          >批量删除</el-button
        >
        <div class="block">
          <span class="demonstration"></span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </el-card>

    <!-- 信息展示CARD -->
  </div>
</template>

<script>
export default {
  name: "selfmessage",
  data() {
    return {
      input2: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      tableData: [
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
        {
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: 13399999999,
          email: "1228288@163.com",
          control: "",
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="less">
.el-input,
.el-input__inner {
  width: 200px !important;
}

.el-input {
  margin-right: 10px;
}
.block {
  display: inline-block;
  margin-left: 100px;
}

.delall {
  display: inline-block;
}

.footercontrol {
  margin-top: 30px;
}
</style>
