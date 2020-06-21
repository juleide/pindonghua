$(function () { 
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#maskbox').on("click", function (e) {
        $('#navlist').collapse('hide');
    });

    $(document).on("click",function(){
        $('#pc-change').collapse('hide');
    })
});