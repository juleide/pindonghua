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

    // 未登录时 点击会员中心 显示模态框
    $('#vip-btn').on('click', function(event) {
        $('#navlist').collapse('show');
        $('#myModal').modal('show');
        event.stopPropagation(); 
    })

    // 未登录时 点击收藏夹 显示模态框
    $('#collect').on('click', function() {
        $('#myModal').modal('show');
    })

    // 点击模态框 确定按钮 跳转登录页
    $('#close-modal').on('click', function() {
        window.location.href = 'page/login.html';
    })
});


