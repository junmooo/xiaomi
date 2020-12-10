$(function () {
  //手机号验证规则
  $.validator.addMethod('zidingyiusername', function (value, ele, param) {
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
 
  //密码验证规则
  $.validator.addMethod('mimazidingyi', function (value, ele, param) {
    const reg = /^\w{6,10}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }, '6位至10位的数字字母')

  $('#login').validate({
    // rules 表 示这个表单的验证规则
    rules: {
      // 你要验证的表单的 name 属性 : 你要使用的验证规则
      username: 'zidingyiusername',
      password: 'mimazidingyi',
    },
    // messages 表示这个表单的验证失败提示文本
    messages: {
      // 经历验证的表单的 id 属性 : 你自定义的提示文本
      username: '手机号码格式错误',
      password: '密码格式错误'
    },
    // 表单提交事件
    submitHandler(form) {
    // 2. 进行表单提交
    // 2-1. 拿到用户填写的内容
      const info = $(form).serialize()

     // 2-2. 发送请求到后端, 准备接受结果
     $.post('../server/login.php', info, null, 'json').then(res => {
     // res 就是后端给我的结果
       console.log(res)

        // 3. 登录成功以后的操作
        if (res.code === 0) {
          // 登录失败
          $('.login_error').removeClass('hide')
        } else if (res.code === 1) {
          // 3-2. 登录成功, 跳转页面, 存储 cookie
          // 为了在首页还需要使用
          setCookie('nickname', res.nickname)
          // 跳转页面
          window.location.href = '../pages/index.html'
        }
      })
    }
  })
})