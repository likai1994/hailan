//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp')//本地安装gulp所用到的地方
  
//定义一个testLess任务（自定义任务名称）
gulp.task('copy-html', function () {
    gulp.src('hailan/*.html') //该任务针对的文件
         //该任务调用的模块
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\hailan')); //将会在src/css下生成index.css
});
gulp.task("copy-css",function(){
	gulp.src("hailan/css/*.css")
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\hailan\\css'))
})
 
 gulp.task("images",function(){
	gulp.src("hailan/images/*.{jpg,png,gif,bmp}")
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\hailan\\images'))
})
 
 gulp.task("js",function(){
	gulp.src("hailan/js/*.js")
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\hailan\\js'))
})
 gulp.task("php",function(){
	gulp.src("hailan/php/*.php")
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\hailan\\php'))
})
 
 gulp.task("watch",function(){
	gulp.watch("hailan/*.html",["copy-html"]);
	gulp.watch("hailan/css/*.css",["copy-css"]);
	gulp.watch("hailan/js/*.js",["js"]);
	gulp.watch("hailan/images/*.{jpg,png,gif,bmp}",["images"]);
	gulp.watch("hailan/php/*.php",["php"])
})
 
 
 
 
 
 
 
gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
