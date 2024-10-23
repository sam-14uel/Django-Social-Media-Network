/******************Add the story ******************/
const image_profile = [
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','zineb'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','ikram'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','amina'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','amal'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','amine'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
    ['http://127.0.0.1:8000/media/media/user_profileimages/e8425322b1139e67_N1k2l51.gif','loy'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})