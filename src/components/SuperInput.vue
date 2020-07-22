<template>
  <div>
    <el-form :model="form" :rules="rules"  ref="form">
      <el-form-item label="名字" prop="input">
        <el-input v-model.trim.number="form.input"  @input="handleChange">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>

<script>
    export default {
        name: "SuperInput",
      data() {
          return {
            form: {
              input: ''
            },
            rules : {
              input: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
              ],
            }

          }
      },
      methods: {
        handleChange(data) {
          this.input= data.target.value.replace(/[^\d.]/g, '')
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        handleChange(value){
          value=value.replace(/\D/g,'');
          this.form.input = value;//data参数赋值
        }
      }
    }
</script>

<style scoped>

</style>
