javascript:绑定一下事件
$(function(){ //y页面加载完毕执行
$(".back-to-top").click(function(){ //.back-to-top元素点击时执行代码
        $('body,html').animate({scrollTop:0},400);//某个元素执行动画，这里的元素是$('body,html')，滚动条的位置为0
        return false;//防止执行默认动作，比如HMTL中的元素不是P是a元素，那么加上这句就不会跳转
    });
})