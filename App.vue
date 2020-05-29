<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	
	/*每个页面公共css */
	.page{
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		/* position: absolute; */
	}
	
	.page-block {
		background-color: #FFFFFF;
	}
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
