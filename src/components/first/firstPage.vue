<template>
  <div>
    <div>first</div>
    <el-row align="left">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">修改</el-button>
      <el-button type="danger">删除</el-button>
    </el-row>
    <el-table
      :data="info"
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        width="40"
        align="center">
      </el-table-column>
      <el-table-column
        prop="unitName"
        label="所属单位名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="projectCode"
        label="项目编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="curPage"
      :page-size="curpageSize"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>


</template>

<script>
  // 导入外部函数
  import api from "@/api/api.js"
    export default {
        name: "firstPage",
        data(){
          return {
            info : [],
            total :0,
            curpageNum :1,
            curpageSize :10,
            curPage:1
          }
        },
        methods: {
          say: function () {
            let pageNum = 1;
            let pageSize = 10;
            api.queryInfo(pageNum,pageSize).then(data=>{
              this.info = data.rows;
              this.curpageNum = data.number;
              this.curpageSize = data.size;
              this.total = data.total;
              this.curPage = totalPages;
              console.log(data);
            })

          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        }

    }

</script>

<style scoped>

</style>
