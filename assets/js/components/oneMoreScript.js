$(document).on('click', '.page__top-tab', function() {
    $(this).parent().find(".page__top-tab_active").removeClass("page__top-tab_active");
    $(this).addClass("page__top-tab_active");




    // function addInput(){

    //     var newDiv=document.createElement('div');
    //     var newTrack = document.createElement('input');
    
    //     var trackNumber = 'track'+tracknum;
    
    //     newTrack.setAttribute('id',trackNumber);
    //     newTrack.setAttribute('name',trackNumber);
    //     newTrack.setAttribute('type','text');
    //     newTrack.setAttribute('size','60');
    
    //     var select = document.createElement('select');
    //     select.setAttribute('name','ltrack'+ tracknum);
    //     for(var key in lyricslist) {
    //     select.options[select.options.length] = new Option(lyricslist[key].title, lyricslist[key].id);
    //     }
    //     newDiv.appendChild(newTrack);
    //     newDiv.appendChild(select);
    //     document.getElementById('customFilter__select-wrapper').appendChild(newDiv);
    
    //     tracknum++;
    // }
    // addInput();
});



$(document).on('click', '.question__question', function() {
    $(this).parent().find(".question__answer").slideToggle();
    $(".question__item_active").removeClass("question__item_active");
    $(this).parent().addClass("question__item_active");
    $(this).parent().find(".question__arrow_active").toggleClass("question__arrow");
    $(this).parent().find(".question__arrow").addClass("question__arrow_active");
})
// $(".header__burger").click(function() {
//     $(".burger__menu").addClass("active");
// });
// $(".burger__close").click(function() {
//     $(".burger__menu").removeClass("active");
// });

// if ($(window).width() < 768) {
//     $(".whyUs__wrapper").addClass("whyUs__wrapper-slider");
// }
// $( window ).resize(function() {
//     if ($(window).width() < 768) {
//         $(".whyUs__wrapper").addClass("whyUs__wrapper-slider");
//     }
//     else {

//         $(".whyUs__wrapper").removeClass("whyUs__wrapper-slider");
//     }
//   });
