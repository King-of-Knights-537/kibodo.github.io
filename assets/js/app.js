document.addEventListener("DOMContentLoaded",function(){

    //Opening Animation
    
    var loading = new TimelineMax();
    loading.fromTo('.loader',1,{ 

        autoAlpha: 1

    },{

        autoAlpha: 0,
        ease: Power1.easeInOut

    },'+=4')

    .fromTo('.opening-animation',1,{

        autoAlpha: 0,

    },{

        autoAlpha: 1,
        ease: Power1.easeInOut

    })   

    //click function
    var arrows = document.getElementsByClassName('arrow');
    for (i=0;i<arrows.length;i++){
        arrows[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    };

    var arrowsInCircle = document.getElementsByClassName('arrow-in-cicle');
    for (i=0;i<arrowsInCircle.length;i++){
        arrowsInCircle[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    };

});

//Homepage-Animation

document.addEventListener("DOMContentLoaded",function(){

    var homepageLoading = new TimelineMax();
    homepageLoading.fromTo('#slide1 .title',1,{ 

        autoAlpha: 0,
        x:-50

    },{

        autoAlpha: 1,
        x:0,
        ease: Power1.easeInOut

    },'+=6')

    .fromTo('#slide1 .title-2',1,{ 

        autoAlpha: 0,
        x:50

    },{

        autoAlpha: 1,
        x:0,
        ease: Power1.easeInOut

    })

    //Arrow-Animation
    .fromTo('#slide1 .arrow-with-animation-1',1,{ 

        autoAlpha: 0,

    },{

        autoAlpha: 1,
        ease: Power1.easeInOut

    },'+=1')

    ;

});

//Introduction-Page-Animation

document.addEventListener("DOMContentLoaded",function(){

    var introductionPageLoading = new TimelineMax();
    introductionPageLoading.fromTo('#slide1 .title-3',1,{ 

        autoAlpha: 0,
        x:-50

    },{

        autoAlpha: 1,
        x:0,
        ease: Power1.easeInOut

    },'+=1.3')

    .fromTo('#slide1 .title-4',1,{ 

        autoAlpha: 0,
        x:50

    },{

        autoAlpha: 1,
        x:0,
        ease: Power1.easeInOut

    })

    //Arrow-Animation
    .fromTo('#slide1 .arrow-with-animation-2',1,{ 

        autoAlpha: 0,

    },{

        autoAlpha: 1,
        ease: Power1.easeInOut

    },'+=1')

    ;

});

//Introduction-Page-Animation

document.addEventListener("DOMContentLoaded",function(){

    var introductionPageLoading = new TimelineMax();
    introductionPageLoading.fromTo('#slide1 .title-5',1,{ 

        autoAlpha: 0,
        y:-100

    },{

        autoAlpha: 1,
        y:0,
        ease: Power1.easeInOut

    },'+=1')

    //Arrow-Animation
    .fromTo('#slide1 .arrow-with-animation-3',1,{ 

        autoAlpha: 0,

    },{

        autoAlpha: 1,
        ease: Power1.easeInOut

    },'+=1')

    ;

});

new fullpage('#fullpage', {
	autoScrolling:true,
    scrollHorizontally: true,
    //onLeave: function(origin, destination, direction) (if necessary)
});

//Click-And-Fade-In Animation
$('.fadeIn').on('click', function() {

    var loading3 = new TimelineMax();
    loading3.fromTo('.fadedContent',1,{ 

        autoAlpha: 0

    },{

        autoAlpha: 1,
        ease: Power1.easeInOut

    },'+=0.5')

});