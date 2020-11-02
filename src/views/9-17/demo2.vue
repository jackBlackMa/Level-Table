<template>
  <div>
    <v-form :data="dynamicValidateForm" ref="form"></v-form>
    <el-button type="primary" @click="add">样增</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </div>
</template>
<script>
  import Form from '@/components/Form'
  export default {
    components: {
      'v-form': Form
    },
    mounted() {
      console.log("%O", this.$data);
    },
    data() {
      return {
        dynamicValidateForm: {
          domains: [
            {
              name: '',
              region: '',
            }
          ]
        },

      };
    },
    methods: {
      submitForm(formName) {
        this.$refs['form'].$refs['ruleForm'].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      add() {
        this.dynamicValidateForm.domains.push({
          name: '',
          region: '',
        })
      }
    }
  }
</script>
