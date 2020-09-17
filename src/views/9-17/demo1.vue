<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="type"
        label="会议名"
        min-width="80%"
      >
      </el-table-column>
      <el-table-column
        label="参与人"
        min-width="20%"
      >
        <template slot-scope="scope">
          <v-box :list="scope.row.user"></v-box>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import box from "@/components/ShrinkBox"

  export default {
    name: "demo1",
    components: {
      'v-box': box
    },
    data() {
      return {
        tableData: [
          {
            type: '会议一',
            user: [
              {
                name: '张三'
              },
              {
                name: '李四'
              }
            ],
            key: 1
          },
          {
            type: '会议二',
            user: [
              {
                name: '张三'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              ,
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              }, {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },
              {
                name: '李四'
              },

              {
                name: '李五'
              }
            ],
            key: 2,
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
