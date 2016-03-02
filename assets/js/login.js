(function () {

    /*This section is to show password*/

    var button = document.getElementById("password_button"),
        button_text = document.getElementById("password_button_icon"),
        passwordInputField = document.getElementById("password"),
        usernameInputField = document.getElementById("username"),
        login = document.getElementById("login_button");

    button.onclick = function () {
        if (passwordInputField.type === "password"){
            passwordInputField.type = "text";
            button_text.textContent = "visibility_off";
        } else if (passwordInputField.type === "text"){
            passwordInputField.type = "password";
            button_text.textContent = "visibility";
        }
    };

    /*Section end*/

    /*This section is to check password provided by user*/

    login.onclick = function () {
        if(usernameInputField.value === "an0nh4x0r" && passwordInputField.value === "material_design"){
            window.location = window.location.pathname.replace("login", "profile");
        } else {
            swal('WTF !!!', "Username = 'an0nh4x0r', Password = 'password'", "error");
        }
    };

    /*Section end*/

}());