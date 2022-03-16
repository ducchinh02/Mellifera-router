window.onload = function() {
    const header_sticky = document.querySelector('.header-sticky');
    const icon = document.querySelectorAll('.menuActive');
    const backToTop = document.querySelector('.backToTop');
    const input = document.querySelector('.input');
    const submit = document.querySelector('.submit');
    const email_input = document.querySelector('.email-input')
    backToTop.addEventListener("click", scroll);
    let currentIndex = 0;

    function scroll() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            backToTop.classList.add('active_back');
        } else { backToTop.classList.remove('active_back'); }
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            header_sticky.classList.add("active")
        } else {
            header_sticky.classList.remove("active")
        }
    }
    icon.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active-icon')
        })
    })



    const gallery = document.querySelector('.show-gallery');
    const show_img = document.querySelector('.show-gallery .show-img img');
    const img = document.querySelectorAll('.gallery-img .image img');
    const close = document.querySelector('.close')
    const next = document.querySelector('.next')
    const previous = document.querySelector('.previous')

    function show() {
        show_img.src = img[currentIndex].src;
        gallery.classList.add('active-show')
        next.classList.add('active-show');
        previous.classList.add('active-show')

    }

    img.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentIndex = index;
            show();
        })
    })

    close.addEventListener("click", () => {
        gallery.classList.remove('active-show')
    })

    next.addEventListener("click", () => {
        if (currentIndex < img.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        show();
    })

    previous.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = img.length - 1;
        }
        show();
    })

    gallery.addEventListener("click", () => {
        gallery.classList.remove('active-show');
        next.classList.remove('active-show');
        previous.classList.remove('active-show');
    })
    submit.addEventListener("click", () => {
        if (input.value == "") {
            var errorText = document.createElement('p');
            errorText.className = 'error';
            errorText.innerHTML = 'The field is required.';
            email_input.appendChild(errorText);

            document.getElementById('must-fill').style.display = "block";
        } else {
            const error_ss = document.querySelectorAll('.error');
            error_ss.forEach((item) => {
                item.remove();
            })
            document.getElementById('must-fill').style.display = "none";
        }
    })

    const box_margin = document.querySelectorAll('.box-margin');
    const box = document.querySelectorAll('.box');

    box_margin[5].style.marginTop = `${box[2].clientHeight - box_margin[2].clientHeight}px`
    box_margin[6].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
    box_margin[8].style.marginTop = `${box[5].clientHeight - box_margin[5].clientHeight}px`

    window.addEventListener('resize', reportWindowSize);

    function reportWindowSize() {
        const box_margin = document.querySelectorAll('.box-margin');
        const box = document.querySelectorAll('.box');

        box_margin[5].style.marginTop = `${box[2].clientHeight - box_margin[2].clientHeight}px`
        box_margin[6].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
        box_margin[8].style.marginTop = `${box[5].clientHeight - box_margin[5].clientHeight}px`

        if (box_margin[5].style.marginTop === "0px") {
            box_margin[5].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
        }
    }


}

// document.addEventListener('DOMContentLoaded', function() {
//     const header_sticky = document.querySelector('.header-sticky');
//     const icon = document.querySelectorAll('.menuActive');
//     const backToTop = document.querySelector('.backToTop');
//     const input = document.querySelector('.input');
//     const submit = document.querySelector('.submit');
//     const email_input = document.querySelector('.email-input')
//     backToTop.addEventListener("click", scroll);
//     let currentIndex = 0;

//     function scroll() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     }

//     window.onscroll = function() { scrollFunction() };

//     function scrollFunction() {
//         if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
//             backToTop.classList.add('active_back');
//         } else { backToTop.classList.remove('active_back'); }
//         if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//             header_sticky.classList.add("active")
//         } else {
//             header_sticky.classList.remove("active")
//         }
//     }
//     icon.forEach((item) => {
//         item.addEventListener('click', () => {
//             item.classList.toggle('active-icon')
//         })
//     })



//     const gallery = document.querySelector('.show-gallery');
//     const show_img = document.querySelector('.show-gallery .show-img img');
//     const img = document.querySelectorAll('.gallery-img .image img');
//     const close = document.querySelector('.close')
//     const next = document.querySelector('.next')
//     const previous = document.querySelector('.previous')

//     function show() {
//         show_img.src = img[currentIndex].src;
//         gallery.classList.add('active-show')
//         next.classList.add('active-show');
//         previous.classList.add('active-show')

//     }

//     img.forEach((item, index) => {
//         item.addEventListener("click", () => {
//             currentIndex = index;
//             show();
//         })
//     })

//     close.addEventListener("click", () => {
//         gallery.classList.remove('active-show')
//     })

//     next.addEventListener("click", () => {
//         if (currentIndex < img.length - 1) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         show();
//     })

//     previous.addEventListener("click", () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = img.length - 1;
//         }
//         show();
//     })

//     gallery.addEventListener("click", () => {
//         gallery.classList.remove('active-show');
//         next.classList.remove('active-show');
//         previous.classList.remove('active-show');
//     })
//     submit.addEventListener("click", () => {
//         if (input.value == "") {
//             var errorText = document.createElement('p');
//             errorText.className = 'error';
//             errorText.innerHTML = 'The field is required.';
//             email_input.appendChild(errorText);

//             document.getElementById('must-fill').style.display = "block";
//         } else {
//             const error_ss = document.querySelectorAll('.error');
//             error_ss.forEach((item) => {
//                 item.remove();
//             })
//             document.getElementById('must-fill').style.display = "none";
//         }
//     })

//     const box_margin = document.querySelectorAll('.box-margin');
//     const box = document.querySelectorAll('.box');

//     box_margin[5].style.marginTop = `${box[2].clientHeight - box_margin[2].clientHeight}px`
//     box_margin[6].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
//     box_margin[8].style.marginTop = `${box[5].clientHeight - box_margin[5].clientHeight}px`

//     window.addEventListener('resize', reportWindowSize);

//     function reportWindowSize() {
//         const box_margin = document.querySelectorAll('.box-margin');
//         const box = document.querySelectorAll('.box');

//         box_margin[5].style.marginTop = `${box[2].clientHeight - box_margin[2].clientHeight}px`
//         box_margin[6].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
//         box_margin[8].style.marginTop = `${box[5].clientHeight - box_margin[5].clientHeight}px`

//         if (box_margin[5].style.marginTop === "0px") {
//             box_margin[5].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
//         }
//     }
// }, false);