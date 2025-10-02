function validateCaptcha() {
    var response = grecaptcha.getResponse();
    if(response.length === 0) {
        alert("Пожалуйста, подтвердите, что вы не робот.");
        return false;
    }
    return true;
}
