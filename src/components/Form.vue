<template>
  <div>
    <el-form :model="dynamicValidateForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div v-for="(domain, index) in dynamicValidateForm.domains" :key="index">
        <h1>{{`规则${index+1}`}}</h1>
        <el-form-item label="活动名称"
                      prop="name"
                      :prop="'domains.' + index + '.name'"
                      :rules="rules.name"
        >
          <el-input v-model="domain.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域"
                      :prop="'domains.' + index + '.region'"
                      :rules="rules.region"
        >
          <el-select v-model="domain.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>


    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Form",
    props: {
      data: {
        default: {},
        type: Object,
      }
    },
    data() {
      // 自定义校验
      var validatePass = (rule, value, callback) => {
        // 获取当前index
        let num = Number(rule.field.split('.')[1]);
        console.log( this.dynamicValidateForm.domains[num]);

        // 当前位数大于1
        if (num > 0) {
          let lastNum = num - 1;
          // 如果上一个值大于当前值，则提示错误
          if (Number(this.dynamicValidateForm.domains[lastNum]['name']) > Number(value)) {
            callback(new Error('必须大于前一个值'));
          } else {
            callback();
          }
        } else {
          callback();
        }
      };
      return {
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {validator: validatePass, trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
        },
        dynamicValidateForm: this.data
      }
    },
    watch: {
      data(newValue) {
        this.dynamicValidateForm = newValue
      }
    }
  }
</script>

<style scoped>

</style>
