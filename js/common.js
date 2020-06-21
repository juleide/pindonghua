$(function () { 
    $('#maskbox').on("click", function (e) {
        $('#navlist').collapse('hide');
    });

    $(document).on("click",function(){
        $('#pc-change').collapse('hide');
    })
});