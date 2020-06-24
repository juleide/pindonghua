$(function () { 
    $('[data-toggle="tooltip"]').tooltip();
    
    $(document).on("click", function (e) {
        $('#navlist').collapse('hide');
    });
    $('.header-course_option').on("click", function (event) {
        $('#courselist').collapse('toggle');
        event.stopPropagation(); 
    });

    $(document).on("click",function(){
        $('#changeSelect').collapse('hide');
    });
});


