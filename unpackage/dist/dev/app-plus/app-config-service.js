
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/me/me","pages/index/index","pages/fanli/fanli","pages/menDian/menDian","pages/penguinCircle/penguinCircle"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#515151","selectedColor":"#919191","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabBarIco/index.png","selectedIconPath":"static/tabBarIco/index.png"},{"pagePath":"pages/fanli/fanli","text":"更多返利","iconPath":"static/tabBarIco/fanli.png","selectedIconPath":"static/tabBarIco/fanli.png"},{"pagePath":"pages/menDian/menDian","text":"周边门店","iconPath":"static/tabBarIco/menDian.png","selectedIconPath":"static/tabBarIco/menDian.png"},{"pagePath":"pages/penguinCircle/penguinCircle","text":"企鹅圈","iconPath":"static/tabBarIco/qiequan.png","selectedIconPath":"static/tabBarIco/qiequan.png"},{"pagePath":"pages/me/me","text":"我的","iconPath":"static/tabBarIco/me.png","selectedIconPath":"static/tabBarIco/me.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"企鹅省钱","compilerVersion":"2.6.16","entryPagePath":"pages/me/me","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#ED792E","titleNView":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/fanli/fanli","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"更多返利"}},{"path":"/pages/menDian/menDian","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"周边门店"}},{"path":"/pages/penguinCircle/penguinCircle","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"企鹅圈"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});