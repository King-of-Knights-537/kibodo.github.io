document.addEventListener("DOMContentLoaded",function(){

    //click function
    var arrows = document.getElementsByClassName('arrow');
    for (i=0;i<arrows.length;i++){
        arrows[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }

    //Opening Animation
    
    var loading = new TimelineMax();
    loading.fromTo('.loader',1,{ 

            autoAlpha: 1

        },{

            autoAlpha: 0,
            ease: Power1.easeInOut

        },'+=4')

        .fromTo('main',1,{

            autoAlpha: 0,

        },{

            autoAlpha: 1,
            ease: Power1.easeInOut

        })   

    //Opening Animation

        .fromTo(".arrow",1,{ 

            autoAlpha: 0,
        
        },{ 

            autoAlpha: 1,
            ease: Power1.easeInOut
        
        },'+=0.3')    
        ;

});

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
        var loading2 = new TimelineMax();
        loading2.fromTo(".upper",0.6,{ 
            autoAlpha: 0,
         
        },{ 
            autoAlpha: 1,
         
        },"+=0.5")
        .fromTo(".lower",0.6,{ 
            autoAlpha: 0,
         
        },{ 
            autoAlpha: 1,
         
        },"-=0.6")
        ;
    },
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

    .fromTo('.wrapper .logo',1,{ 

        autoAlpha: 0

    },{

        autoAlpha: 1,
        ease: Power1.easeInOut

    },'+=1')
    ;

});