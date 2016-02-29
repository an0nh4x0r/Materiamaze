(function () {

    var button = document.getElementById("password_button"),
        button_text = document.getElementById("password_button_icon"),
        inputField = document.getElementById("password");

    button.onclick = function () {
        if (inputField.type === "password"){
            inputField.type = "text";
            button_text.textContent = "visibility_off";
        } else if (inputField.type === "text"){
            inputField.type = "password";
            button_text.textContent = "visibility";
        }
    };

}());