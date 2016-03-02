(function () {

    /*This section is to show password*/

    var button = document.getElementById("password_button"),
        button_text = document.getElementById("password_button_icon"),
        passwordInputField = document.getElementById("password"),
        usernameInputField = document.getElementById("username"),
        login = document.getElementById("login_button"),
        forgot_password_button = document.getElementById("forgot_password_button");

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
        if(usernameInputField.value.trim() === "an0nh4x0r" && passwordInputField.value.trim() === "material_design"){
            window.location = window.location.pathname.replace("login", "profile");
        } else {
            swal({
                type                :   "error",
                title               :   "Oops..!",
                showConfirmButton   :   false,
                timer               :   1300,
                html                :   "<em>Wrong Username or password</em>"
            });
        }
    };

    /*Section end*/

    /*This section is dedicated to forgot password*/

        forgot_password_button.onclick = function () {
            swal({
                title               :   'Forgot Password ?',
                html                :   '<label for="email" style="font-size: 15px; font-style: italic;">Email Address: </label></label><input id="email" />',
                confirmButtonColor  :   '#2196F3',
                confirmButtonText   :   'Submit'
            });
        };

    /*Section end*/

    /*This section checks if id = username or id = password is selected
    * if they are selected then change the icon color
    * */

        var username_icon = document.getElementById("account_circle_username"),
            password_icon = document.getElementById("lock_password");

        var check = function () {
            if (usernameInputField === document.activeElement){
                username_icon.style.color = "#2196F3";
            } else if (usernameInputField !== document.activeElement && usernameInputField.value.trim() === ""){
                username_icon.style.color = "";
            }
            if (passwordInputField === document.activeElement){
                password_icon.style.color = "#2196F3";
            } else if(passwordInputField !== document.activeElement && passwordInputField.value.trim() === ""){
                password_icon.style.color = "";
            }
            if (passwordInputField.value.trim() !== ""){
                button_text.style.color = "#2196F3";
            } else{
                button_text.style.color = "";
            }
        };

        username_icon.addEventListener("click", check, false);
        username_icon.addEventListener("keyup", check, false);
        password_icon.addEventListener("click", check, false);
        password_icon.addEventListener("keyup", check, false);
        document.addEventListener("click", check, false);
        document.addEventListener("keyup", check, false);

    /*section end*/

    /*This section if username and passwords are not empty then change the password show-hide eye icon color*/

        /*This got implemented between line 73 and 77*/

    /*Section end*/

}());