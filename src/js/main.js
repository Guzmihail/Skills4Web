import $ from "jquery";
import WOW from"wow.js";
import slick from"./slick";
import Parallax from 'parallax-js';
import Rellax from 'rellax';

console.log('Hello!');

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);
// var rellax = new Rellax('.rellax');
var rellax = new Rellax('.rellax', {
    speed: 1,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });



// window.addEventListener('DOMContentLoaded', () => {

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             const id = entry.target.getAttribute('id');
//             if (entry.intersectionRatio > 0) {
//                 document.querySelector(`.menu-bg ul li a[href="#${id}"]`).parentElement.classList.add('active');
//             } else {
//                 document.querySelector(`.menu-bg ul li a[href="#${id}"]`).parentElement.classList.remove('active');
//             }
//         });
//     });

//     // Track all sections that have an `id` applied
//     document.querySelectorAll('div[id]').forEach((div) => {
//         observer.observe(div);
//     });
    
// });

$(function() {
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();
// fixed menu
   	const navFixed = $("div.header-nav"),
           navHeight = $('div').height();
     const elemUl = $('.header-nav__run');
     const menuBg = $('.car-bg');


  if ($(window).scrollTop()) {
      navFixed.addClass("fixed").removeClass("nofixed");
  };


  if (navFixed.length) {
      $(window).scroll(function(){
         const scroll = $(window).scrollTop();
         
        
          if (scroll < navHeight + 100) {
              navFixed.addClass("nofixed");
              navFixed.removeClass("fixed hidden");
              elemUl.removeClass('pseodo');
              menuBg.removeClass('car-show');
          };
       if (scroll > navHeight + 500){
             navFixed.addClass("hidden");
          };
          if (scroll > navHeight + 200){
              navFixed.addClass("fixed");
              navFixed.removeClass("nofixed hidden");
              elemUl.addClass('pseodo');
             menuBg.addClass('car-show');
            
         };
        
      });
  };

//  Menu Fixed

// Burger Menu 
   const hamburger = document.querySelector('.menu-lines');
   const navlinks = document.querySelector('.elem');
   const listUl = document.querySelector('.list');
   const LinkS = document.querySelectorAll('.list li');
   const liniesBur = document.querySelectorAll('.menu-lines');
   const ScollOff = document.body;

     const boxMenu = document.querySelector('.navigation-wrap');


    hamburger.addEventListener('click', () => {
        listUl.classList.toggle('open');
        ScollOff.classList.toggle('scroolY');
         LinkS.forEach(link => {
             link.classList.toggle('fadde');
         });
         liniesBur.forEach(items => {
            items.classList.toggle('inr');
         });

        //  Link.classList.toggle('display', 'block');
    });

// Burger Menu 

// Button Active

        // $('.l1').click(function(){
        //     $('.l1').addClass('binn');
        //     $('.l2').removeClass('binn');
        // });
        // $('.l2').click(function(){
        //     $('.l1').removeClass('binn');
        //     $('.l2').addClass('binn');
            
        // });
       
// Button Active

// Cards Elem hidden
            // $('.inf ').mouseenter(function () {
            //     $('.inf-bl').css('display','flex');
            // });
            // $('.inf').mouseleave(function () {
            //     $('.inf-bl').css('display','none');
            // });

            // $('.inf2').mouseenter(function () {
            //     $('.inf-bl2').css('display','flex');
            // });
            // $('.inf2').mouseleave(function () {
            //     $('.inf-bl2').css('display','none');
            // });

            // $('.inf3').mouseenter(function () {
            //     $('.inf-bl3').css('display','flex');
            // });
            // $('.inf3').mouseleave(function () {
            //     $('.inf-bl3').css('display','none');
            // });

            // $('.inf4').mouseenter(function () {
            //     $('.inf-bl4').css('display','flex');
            // });
            // $('.inf4').mouseleave(function () {
            //     $('.inf-bl4').css('display','none');
            // });

            // $('.inf5').mouseenter(function () {
            //     $('.inf-bl5').css('display','flex');
            // });
            // $('.inf5').mouseleave(function () {
            //     $('.inf-bl5').css('display','none');
            // });
            
            // $('.inf6').mouseenter(function () {
            //     $('.inf-bl6').css('display','flex');
            // });
            // $('.inf6').mouseleave(function () {
            //     $('.inf-bl6').css('display','none');
            // });

            // $('.inf7').mouseenter(function () {
            //     $('.inf-bl7').css('display','flex');
            // });
            // $('.inf7').mouseleave(function () {
            //     $('.inf-bl7').css('display','none');
            // });

            // $('.inf8').mouseenter(function () {
            //     $('.inf-bl8').css('display','flex');
            // });
            // $('.inf8').mouseleave(function () {
            //     $('.inf-bl8').css('display','none');
            // });

            // $('.inf9').mouseenter(function () {
            //     $('.inf-bl9').css('display','flex');
            // });
            // $('.inf9').mouseleave(function () {
            //     $('.inf-bl9').css('display','none');
            // });
            

// Cards Elem hidden

//  Slider
 $('.slider-bl').slick({
     dots: true,
     speed:1200,
     adaptiveHeight:true,
     slidesToScroll: 1,
     slidesToShow: 1,
     prevArrow:'<div class="slick-prev slick-btn"><span class="perv-img"></span></div>',
     nextArrow:'<div class="slick-next slick-btn-next"><span class="perv-img right"></span></div>',
    //  responsive: [
    //      {
    //        breakpoint: 1110,
    //        settings: {
    //          // centerMode: true,
    //          slidesToShow: 3
    //        }
    //      },
    //      {
    //        breakpoint: 992,
    //        settings: {
    //          slidesToShow: 2
    //        }
    //      },
    //      {
    //          breakpoint: 768,
    //          settings: {
    //            slidesToShow: 2
    //          }
    //        },
    //        {
    //          breakpoint: 576,
    //          settings: {
    //            slidesToShow: 1
    //          }
    //        }
    //    ]
 });

//  ACARDION
//   const lem = document.querySelector('.card');
 $('.ms-1').click(function(){
    $('.c1').slideToggle(900);
    $(this).toggleClass("expand");
});
$('.ms-2').click(function(){
    $('.c2').slideToggle(900);
    $(this).toggleClass("expand");
});
$('.ms-3').click(function(){
    $('.c3').slideToggle(900);
    $(this).toggleClass("expand");
});
$('.ms-4').click(function(){
    $('.c4').slideToggle(900);
    $(this).toggleClass("expand");
});
$('.ms-5').click(function(){
    $('.c5').slideToggle(900);
    $(this).toggleClass("expand");
});

//  ACARDION

// Acardion
    // $('.service').click(function(){
    //     $(this).next().slideToggle(900);
    //     $(this).toggleClass("expand");
    // });

// Axardion

//    Progrres Bar Quiz
//    $(".btn-ques").click(function() {
//        const elem = document.querySelector('.intrabare');
//        elem.textContent= 'Вопрос 2';
//        $("#line-label").addClass('sr-only1');    
//    });




// Parals mouses
// $(".price-discaunt").parallax();



// Parals mouses

// Popap Form 1
    $('.link-consultations').click(function(){
        $('.selected-1').css('display','flex');
        $('.elem').addClass('scroolHidden');
        
    });
    $('.close-popap').click(function(){
        $('.selected-1').css('display','none');
        $('.elem').removeClass('scroolHidden');
        
    });
   

 // Popap Form 1

 // Popap Form 2

    $('.price-btn').click(function(){
        $('.selected-2').css('display','flex');
        $('.elem').addClass('scroolHidden');
        
    });
    $('.close-popap').click(function(){
        $('.selected').css('display','none');
        $('.elem').removeClass('scroolHidden');
    });

 // Popap Form 2

 // Popap Form 3
 
 $('.tilda-cursor').click(function(){
    $('.selected-3').css('display','flex');
    $('.elem').addClass('scroolHidden');
    
});
$('.close-popap').click(function(){
    $('.selected').css('display','none');
    $('.elem').removeClass('scroolHidden');
});

 // Popap Form 3

// Slider 2
$('.work-slider').slick({
    dots: true,
    speed:1200,
    adaptiveHeight:true,
    slidesToScroll: 1,
     slidesToShow: 2,
     prevArrow:'<div class="slick-prev slick-btn-work"><span class="perv-img-rwork"></span></div>',
     nextArrow:'<div class="slick-next slick-btn-next-work"><span class="perv-img-rwork right"></span></div>',
    });
 });
 
