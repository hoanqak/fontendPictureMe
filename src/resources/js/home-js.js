var count = 0;
function changeImage(){
    var img = document.getElementById("formLogin");
    console.log("----"+count)
    if(count == 0){
        img.style.background="url('../resources/images/bg-cl-home-2.jpg')";
        count = 1;
    }
    else if(count == 1){
        img.style.background ="url('../resources/images/bg-cl-home-3.jpg')";
        count = 2;
    }
    else if(count == 2){
        img.style.background = "url('../resources/images/bg-cl-home.jpg')";
        count = 0;
    }

}
// setInterval(function(){
//     changeImage();
// }, 3000)

window.onload = setInterval(changeImage, 2000)
