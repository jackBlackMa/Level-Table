<template>
  <div>
    <vueCropper
      ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
      :info="true"
      :full="option.full"
      :canMove="option.canMove"
      :canMoveBox="option.canMoveBox"
      :original="option.original"
      :autoCrop="option.autoCrop"
      :fixed="option.fixed"
      :fixedNumber="option.fixedNumber"
      :centerBox="option.centerBox"
      :infoTrue="option.infoTrue"
      :fixedBox="option.fixedBox"
    ></vueCropper>
  </div>
</template>

<script>
  export default {
    name: "demo2",
    data() {


      return {
        option: {
          img: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100", // 裁剪图片的地址
          info: true, // 裁剪框的大小信息
          outputSize: 0.8, // 裁剪生成图片的质量
          outputType: 'jpeg', // 裁剪生成图片的格式
          canScale: false, // 图片是否允许滚轮缩放
          autoCrop: true, // 是否默认生成截图框
          // autoCropWidth: 300, // 默认生成截图框宽度
          // autoCropHeight: 200, // 默认生成截图框高度
          fixedBox: true, // 固定截图框大小 不允许改变
          fixed: true, // 是否开启截图框宽高固定比例
          fixedNumber: [7, 5], // 截图框的宽高比例
          full: true, // 是否输出原图比例的截图
          canMoveBox: false, // 截图框能否拖动
          original: false, // 上传图片按照原始比例渲染
          centerBox: false, // 截图框是否被限制在图片里面
          infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        },
      }
    },
    mounted() {
      const self = this;
      var retstring = "data:image/png;base64,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";


      var data1 = this.dataURLtoFile(retstring)
      console.log(data1)
      this.option.img = data1

    },
    methods: {
      dataURLtoFile(dataurl, filename = 'file') {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let suffix = mime.split('/')[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], `${filename}.${suffix}`, {type: mime})
      },
    }
  }
</script>

<style scoped>
  div {
    height: 500px;
  }
  .cropper-content .cropper {
    width: auto;
    height: 300px;
  }
</style>
