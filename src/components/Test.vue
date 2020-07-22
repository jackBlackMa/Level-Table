<template>
  <div class="custom-tree-container">
    <el-tree
      :data="data"
      node-key="id"
      :default-expand-all="true"
      :expand-on-click-node="false"
      ref="tree"
    >
      <div slot-scope="{ node, data }" style="width: 100%">
        <div class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <span>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => append(node)">
                  添加子节点
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
                  添加材料
                </el-button>
              </span>
          <span>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => append(data)">
                  编辑
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
                  删除
                </el-button>
              </span>
          </span>
        </div>
        <el-table
          v-if="data.tableData"
          :data="data.tableData"
          style="width: 100%;margin-bottom: 20px">
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
        </el-table>
      </div>

    </el-tree>
  </div>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      return {
        data: [{
          label: '1 中心经营情况与同业分析',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },],
          children: [{
            label: '1.1 中心经营情况',
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }],
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }],
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
        }],
      }
    },

    methods: {
      append(data) {
        console.log(data)
        // const newChild = {id: id++, label: 'testtest', children: []};
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },

      remove(node, data) {
        debugger
        console.log(this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()))
        // const parent = node.parent;
        // const children = parent.data.children || parent.data;
        // const index = children.findIndex(d => d.id === data.id);
        // children.splice(index, 1);
      },
    }
  };
</script>

<style>
  .custom-tree-container {

    width: 80%;
    margin: 20px auto;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid #EBEEF5;
  }

  .el-tree-node__content {
    height: initial !important;
    /*padding-left: 0px !important;*/

  }

  .el-tree > .el-tree-node {
    margin-bottom: 20px;
    border: 1px solid #EBEEF5;
  }

  .el-tree-node__expand-icon {
    display: none !important;
  }
</style>
