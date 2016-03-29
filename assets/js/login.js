(function () {

    var i_show_password = document.getElementById("visibility"),
        i_show_password_icon = document.getElementById("visibility_icon"),
        password = document.getElementById("password");

    var check = function () {
        if (password.type === "password"){
            password.type = "text";
            i_show_password_icon.textContent = "visibility_off"
        } else if (password.type === "text"){
            password.type = "password";
            i_show_password_icon.textContent = "visibility";
        }
    };

    i_show_password.addEventListener("click", check, false);

}());

(function(){

    var forgot_password_card = document.getElementById('forgot_password_card'),
        back_to_login_card = document.getElementById('back_to_login_page'),
        forgot_password_button = document.getElementById('forgot_password_button'),
        back_to_login_page = document.getElementById('back_to_login_page'),
        login_card = document.getElementById('login_card');
    $(forgot_password_card).hide();
    $(back_to_login_card).hide();
    $(forgot_password_button).click(function () {
        $(login_card).hide();
        $(forgot_password_button).hide();
        $(forgot_password_card).fadeIn();
        $(back_to_login_page).fadeIn();
    });
    $(back_to_login_page).click(function () {
        $(forgot_password_card).hide();
        $(back_to_login_page).hide();
        $(login_card).fadeIn();
        $(forgot_password_button).fadeIn();
    });

}());