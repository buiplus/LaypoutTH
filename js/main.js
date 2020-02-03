$(function () {
    khoimonan = $('.nhieumon').isotope({
        itemSelector: '.motmon',
        layoutMode: 'masonry'
    });
    khoimonan.imagesLoaded().progress(function () {
        khoimonan.isotope('layout');
    });
    $('.thucdonct .tieudect a').click(function () {
         danhmuc = $(this).data('monan');
        console.log(danhmuc);
         tendanhmuc = $(this).text();
        $('.noidungct h2').text(tendanhmuc);
        // $('.noidungct .nhieumon ').each(function () {
        //     if ($(this).hasClass(danhmuc)) {
        //         $(this).fadeIn();   
        //     } else {
        //         $(this).fadeOut();
        //     }
        // })
        if (danhmuc == ".all") {
            $('.noidungct .nhieumon').isotope({ filter: '*' });
        } else {
            $('.noidungct .nhieumon').isotope({ filter: danhmuc });
        }
       return false;

    });

    //lỗi responsive chỗ slidemonan

    soluongmon = $('.motmon').length;
    console.log(soluongmon);
    
})