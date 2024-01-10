$(function(){
    $('#fullpage').fullpage({ //fullpage 方法里接受json对象形式
       //是否显示项目导航 默认为false
	   navigation:true, 
	   //给小圆点命名
       navigationTooltips: ['项目规则','参与国家', '运动员成就'],
	   //页面是否居中
       verticalCentered:false, 
	   //给每一个屏幕设置对应锚点
	   
	   menu:'#menu',
	   //是否循环滚动
	   continuousVertical:true,
	   /*cubic-bezier 又称三次贝塞尔，主要是为animation生成速度曲线的函数
	   规定是cubic-bezier(<x1>,<y1>,<x2>,<y2>)
	   */
	   easingcss3:'cubic-bezier(0,0.885,0.320,1.2)'
    });
});