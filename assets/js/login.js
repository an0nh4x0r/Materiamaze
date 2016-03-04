(function () {
    var i_show_password = document.getElementById("visibility_icon"),
        password = document.getElementById("password");

    var check = function () {
        if (password.type === "password"){
            password.type = "text";
            i_show_password.textContent = "visibility_off"
        } else if (password.type === "text"){
            password.type = "password";
            i_show_password.textContent = "visibility";
        }
    };

    i_show_password.addEventListener("click", check, false);
}());