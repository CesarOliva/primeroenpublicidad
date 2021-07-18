// $(document).ready(function(){
//     var windowWidth = $(window).width();
//     if(windowWidth < 852){
//         window.addEventListener("scroll", function(){
//             const header = this.document.querySelector('header');
//             header.classList.toggle('sticky', window.scrollY >= 0);
//         })
        
//         document.querySelector('.toggle').onclick = function(){
//             this.classList.toggle('active');
//         }
//     }
// })

$(document).ready(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 852){
        window.addEventListener("scroll", function(){
            const header = this.document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY >= 0);
        })
        
        const navigation = document.querySelector('nav')
        document.querySelector('.toggle').onclick = function(){
            this.classList.toggle('active');
            navigation.classList.toggle('active')
        }
    }
})