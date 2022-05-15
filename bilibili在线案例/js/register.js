// 获取操作对象
let login = document.getElementById('login');
let register = document.getElementById('register');
let form_box = document.getElementsByClassName('form-box')[0];
let register_box = document.getElementsByClassName('register-box')[0];
let login_box = document.getElementsByClassName('login-box')[0];

// 注册按钮点击事件
register.addEventListener('click', () => {
    form_box.style.tranform = 'translateX(80%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})
// 登录按钮点击事件
login.addEventListener('click', () => {
    form_box.style.tranform = 'translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})