$(function(){
    const btn_prev = $('.button-prev');
    const btn_next = $('.button-next');
    const item = $('.menuBar>.item');
    const categories = $('.categories .list p');
    const catAll =  $('.categories .all');
    const slides = $('.banner-slide');
    const tabs = $('.tab');
    const pages = $('.page');
    let activeSlideNum = 0;
    let slidesArray = new Array();
    slidesArray = Array.from(slides);
    slidesArray.forEach(function(item, index) {
        slidesArray[index] = $(item);
        if (index>0) slidesArray[index].css({left: '714px'});
    });
    const slidesCount = slidesArray.length;

    pages.click(function () {
        pages.removeClass('activePage');
        $(this).addClass('activePage');
    });

    tabs.click(function () {
        tabs.removeClass('activeTab');
        $(this).addClass('activeTab');
    });

    categories.click(function () {
        categories.removeClass('active');
        catAll.removeClass('active');
        $(this).addClass('active');
    });

    catAll.click(function () {
        categories.removeClass('active');
        catAll.addClass('active');
    });

    let animateTimeout = true;
    btn_prev.click(function () {
        if (animateTimeout) {
            setTimeout(() => {animateTimeout = true;},1000);
            if (activeSlideNum === 0) {
                slidesArray[slidesCount-1].css({left: '-714px'});
                slidesArray[slidesCount-1].animate({left: '0'}, 1000);
                slidesArray[0].animate({left: '714px'}, 1000);
                activeSlideNum = slidesCount-1;
            }
            else {
                slidesArray[activeSlideNum-1].css({left: '-714px'});
                slidesArray[activeSlideNum-1].animate({left: '0'}, 1000);
                slidesArray[activeSlideNum].animate({left: '714px'}, 1000);
                activeSlideNum = activeSlideNum-1;
            }
        }
        animateTimeout = false;
    })

    btn_next.click(function () {
        if (animateTimeout) {
            setTimeout(() => {animateTimeout = true;},1000);
            if (activeSlideNum === slidesCount-1) {
                slidesArray[0].css({left: '714px'});
                slidesArray[0].animate({left: '0'}, 1000);
                slidesArray[slidesCount-1].animate({left: '-714px'}, 1000);
                activeSlideNum = 0;
            }
            else {
                slidesArray[activeSlideNum+1].css({left: '714px'});
                slidesArray[activeSlideNum+1].animate({left: '0'}, 1000);
                slidesArray[activeSlideNum].animate({left: '-714px'}, 1000);
                activeSlideNum = activeSlideNum+1;
            }
        }
        animateTimeout = false;
    })

    item.click(function () {
        item.removeClass('active');
        $(this).addClass('active');
    });
})