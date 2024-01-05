function animatedImage(){
    var image= document.getElementById('animeImg');
    image.style.opacity=1
}
window.addEventListener('load' , animatedImage);

$('#costum_link').hover(
    function(){
        $(this).css({
            "background-color": "#c58f59",
            "color": "white",
            "transition": "background-color 0.3s, color 0.3s"
        });
    },
    function(){
        $(this).css({
            "background-color": "",
            "color": "",
            "transition": "background-color 0.3s, color 0.3s"
        });
    }
);

document.addEventListener("DOMContentLoaded", function() {
    var phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function() {
        try {
            var regex = /^[0-9+]+$/;
            if (!regex.test(phoneInput.value)) {
                throw new Error("Numri qe shenuat nuk eshte valid");
            }
            alert("Inputi valid: " + phoneInput.value);
        } catch (error) {
            alert(error.message);
        }
    });
});



