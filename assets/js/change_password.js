(function () {

    var password_shower_button = document.getElementById("password_shower_button"),
        curr_pass = document.getElementById("curr_pass"),
        new_pass = document.getElementById("new_pass"),
        again_pass = document.getElementById("again_pass"),
        password_shower = document.getElementById("password_shower"),
        submit = document.getElementById("submit");

    password_shower_button.onclick = function () {
        if (curr_pass.type === "password"){
            curr_pass.type = "text";
            new_pass.type = "text";
            again_pass.type = "text";
            password_shower.textContent = "visibility_off";
        } else if (curr_pass.type === "text"){
            curr_pass.type = "password";
            new_pass.type = "password";
            again_pass.type = "password";
            password_shower.textContent = "visibility";
        }
    };

    submit.onclick = function () {
        if (new_pass.value.trim() !== again_pass.value.trim()){
            swal({
                title               :   "Oops..!",
                type                :   "error",
                timer               :   2000,
                html                :   "<strong>New Password doesn\'t matches to Again New Password.</strong>",
                showConfirmButton   :   false
            });
        }

        if (curr_pass.value.trim() === "" || new_pass.value.trim() === "" || again_pass.value.trim() === ""){
            swal({
                title   :   "Error..!",
                type    :   "error",
                timer   :   1800,
                html    :   "<strong>Please fill all the fields.</strong>",
                showConfirmButton   :   false
            });
        }
    }

}());