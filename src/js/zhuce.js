$(function () {
//手机号验证规则
  $.validator.addMethod('zidingyishoujihao', function (value, ele, param) {
    // value, 表示使用这个规则的表单填写的内容
    // ele, 就是这个表单元素
    // param, 就是你使用这个规则的时候传递的参数

    const reg = /^(86)?\d{11}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }, '目前只接受中国手机号注册')
  //国家验证规则
  $.validator.addMethod('selectcountry', function (value, ele, param) {
    const reg = /^(中国)$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }, '目前只接受中国手机号注册')
//密码验证规则
  $.validator.addMethod('mimazidingyi', function (value, ele, param) {
    const reg = /^\w{8,30}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }, '12位至30位的数字字母')

  $('#login').validate({
    // rules 表 示这个表单的验证规则
    rules: {
      // 你要验证的表单的 name 属性 : 你要使用的验证规则
      tel: 'zidingyishoujihao',
      country: 'selectcountry',
      password: 'mimazidingyi',
    },
    // messages 表示这个表单的验证失败提示文本
    messages: {
      // 经历验证的表单的 id 属性 : 你自定义的提示文本
      tel: '手机号码格式错误',
      country: '目前只接受中国手机号注册',
      password: '密码格式错误'
    },
    // 表单验证通过以后会执行的函数
    submitHandler(form) {
      // form 接受的就是表单标签
      window.location="../pages/denglu.html";
    }
  })  
})  