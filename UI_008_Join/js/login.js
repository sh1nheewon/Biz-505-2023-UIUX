// js 코드를 html 어디에 있던지 정상 실행 되도록 하기 위한 시작코드
document.addEventListener("DOMContentLoaded",()=>{
    const btn_login = document.querySelector("button.btn_login");
    const input_username = document.querySelector(
        "input[name='username']"
    );
    const input_password = document.querySelector("#password");

    btn_login?.addEventListener("click",()=>{
        const txt_username = input_username.value;
        const txt_password = input_password.value;
    })
});