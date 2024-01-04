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
