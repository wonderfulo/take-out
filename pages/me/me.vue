<template>
	<view class="page page-fill">

		<view class="header">
			<view class="set-wapper">
				<navigator url="../meInfo/meInfo">
					<image src="../../static/icos/liaoTian.png" class="settings"></image>
				</navigator>
				<navigator url="../meInfo/meInfo">
					<image src="../../static/icos/setting.png" class="settings"></image>
				</navigator>
			</view>

			<view class="info-wapper">
				<!-- 头像 -->
				<view class="info-left">
					<image @click="changeTouXinag()" :src="touXiangUrl" class="headPortrait"></image>
				</view>
				<!-- 个人信息 -->
				<view class="info-right">
					<view class="name-wapper">
						<view class="name">
							<text @click="showDiv('name')">{{name}}</text>
						</view>
						<view class="yunYingShang-wapper">
							<text class="yunYingShang" @click="showDiv('quYuYunYingShang')">{{quYuYunYingShang}}</text>
						</view>
					</view>
					<view class="yaoqingma-wapper">
						<text>邀请码：</text>
						<text @click="showDiv('yaoQingMa')">{{yaoQingMa}}</text>
						<text class="copy">复制</text>
					</view>
				</view>
			</view>

			<!--特权  -->
			<view class="teQuan-wapper">
				<view class="teQuan">
					<image src="../../static/image/rocket.png" mode="" class="rocket"></image>
					<text class="teQuan-font">前往升级获取更高特权</text>
				</view>
				<view>
					<text class="shengJi">立即升级</text>
				</view>
			</view>
			<view class="zhangDan-wapper">
				<view class="zhangDan-left">
					<view class="yuE-top" @click="showDiv('price')">
						<text>账户可用余额￥
							<text class="yuE-top-price">{{price}}</text>
						</text>
					</view>
					<view class="yuE-bottom">
						<text>本月确认收货的订单于次月25号到可提现余额</text>
					</view>
				</view>
				<view class="zhangDan-right">
					<text class="zhangDan-right-text">提现</text>
				</view>
			</view>
		</view>

		<view class="center">
			<view class="yuGu-wapper">
				<view class="yuGu" @click="showDiv('jinRiYuGu')">
					<text class="yuGu-top">{{jinRiYuGu}}</text>
					<text class="yuGu-bottom">今日预估</text>
				</view>
				<view class="yuGu" @click="showDiv('benYueYuGu')">
					<text class="yuGu-top">{{benYueYuGu}}</text>
					<text class="yuGu-bottom">本月预估</text>
				</view>
				<view class="yuGu" @click="showDiv('shangYueYuGu')">
					<text class="yuGu-top">{{shangYueYuGu}}</text>
					<text class="yuGu-bottom">上月预估</text>
				</view>
				<view class="yuGu" @click="showDiv('shangYueJieSuan')">
					<text class="yuGu-top">{{shangYueJieSuan}}</text>
					<text class="yuGu-bottom">上月结算</text>
				</view>
			</view>

			<view class="lunBo-wapper">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="500">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/image/tuiGuang.png" mode="" class="tuiGuang"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/image/tuiGuang.png" mode="" class="tuiGuang"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/image/tuiGuang.png" mode="" class="tuiGuang"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>

		</view>
		<view class="bottom">
			<view class="svip">
				SVIP中心
			</view>
			<view class="icon_wapper">
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/dingDan.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">订单</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/tuanDui.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">团队</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/yaoQingYouJiang.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">邀请有奖</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/woDeDianPu.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">我的店铺</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/o2oShangJiaZhongXin.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">O2O商家中心</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/dengLuYunFaDanZhuShou.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">登录云发单助手</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/shengJiZongJian.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">升级总监</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/shengJiQuYuYunXingShang.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">升级区域运营商</text>
					</view>
				</view>
				<view class="icon">
					<view class="icon-image-wapper">
						<image src="../../static/suCai/shengJiQuanQiuYunYingShang.png" mode="" class="icon-image"></image>
					</view>
					<view class="icon-font-wapper">
						<text class="icon-font">升级全球运营商</text>
					</view>
				</view>
			</view>
		</view>


		<view :hidden="userFeedbackHidden" class="popup_content">
			<view class="popup_title">请输入</view>
			<view class="popup_textarea_item">
				<textarea class="popup_textarea" placeholder='请输入内容...' v-model="feedbackContent">
				</textarea>
				<view @click="submitFeedback()">
					<button class="popup_button">提交</button>
				</view>
			</view>
		</view>
		<view class="popup_overlay" :hidden="userFeedbackHidden" @click="hideDiv()"></view>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from 'image-tools'
	export default {
		data() {
			return {
				userFeedbackHidden: true, // 默认隐藏
				feedbackContent: '', // 用户反馈内容
				temp: '', //临时变量
				name: "李振华",
				quYuYunYingShang: "区域运营商",
				yaoQingMa: "111666",
				price: '12.98',
				jinRiYuGu: '22.01',
				benYueYuGu: '297.09',
				shangYueYuGu: '542.7',
				shangYueJieSuan: '593.38',
				touXiangUrl: '../../static/headPortrait/wuKong.jpg',
				cropFilePath: ''
			}
		},
		onShow() {
			let me = this;

		},
		methods: {
			showDiv(temp) { // 显示输入弹出框
				this.userFeedbackHidden = false;
				this.temp = temp;
				console.log("显示弹出框")
			},
			hideDiv() { // 隐藏输入弹出框
				this.userFeedbackHidden = true;
			},
			submitFeedback() { // 提交反馈

				var _this = this;
				// 提交反馈内容
				// console.log(_this.feedbackContent);.
				// eval('_this.' + _this.temp + '=_this.feedbackContent')
				if (_this.temp == 'name') {
					_this.name = _this.feedbackContent;
				} else if (_this.temp == 'quYuYunYingShang') {
					_this.quYuYunYingShang = _this.feedbackContent;
				} else if (_this.temp == 'yaoQingMa') {
					_this.yaoQingMa = _this.feedbackContent;
				} else if (_this.temp == 'price') {
					_this.price = _this.feedbackContent;
				} else if (_this.temp == 'jinRiYuGu') {
					_this.jinRiYuGu = _this.feedbackContent;
				} else if (_this.temp == 'benYueYuGu') {
					_this.benYueYuGu = _this.feedbackContent;
				} else if (_this.temp == 'shangYueYuGu') {
					_this.shangYueYuGu = _this.feedbackContent;
				} else if (_this.temp == 'shangYueJieSuan') {
					_this.shangYueJieSuan = _this.feedbackContent;
				}
			},
			changeTouXinag() {
				let _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						// console.log(JSON.stringify(res.tempFilePaths));
						// var tempFilePaths = res.tempFilePaths;
						// _this.urlTobase64(tempFilePaths[0]);
						// uni.saveFile({
						// 	tempFilePath: tempFilePaths[0],
						// 	success: function(res) {
						// 		var savedFilePath = res.savedFilePath;
						// 		console.log(JSON.stringify(res.savedFilePath));
						// 	}
						// });
						
						pathToBase64(res.tempFilePaths[0])
						  .then(base64 => {
						    console.log(base64)
							_this.touXiangUrl = base64;
						  })
						  .catch(error => {
						    console.error(error)
						  })
						// let url  = JSON.stringify(res.tempFilePaths[0]);
						// console.log(url);
						// var path=plus.io.convertLocalFileSystemURL(res.tempFilePaths[0]);
						// console.log(path);
						// _this.touXiangUrl = path;
						
					}
				});
			}
		}
	}
</script>

<style>
	@import url("me.css");

	.popup_overlay {

		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: .80;
		filter: alpha(opacity=88);
	}

	.popup_content {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 520upx;
		height: 550upx;
		margin-left: -270upx;
		margin-top: -270upx;
		border: 10px solid white;
		background-color: white;
		z-index: 1002;
		overflow: auto;
		border-radius: 20upx;
	}

	.popup_title {
		padding-top: 20upx;
		width: 480upx;
		text-align: center;
		font-size: 32upx;
	}

	.popup_textarea_item {
		padding-top: 5upx;
		height: 240upx;
		width: 440upx;
		background-color: #F1F1F1;
		margin-top: 30upx;
		margin-left: 20upx;
	}

	.popup_textarea {
		width: 410upx;
		font-size: 26upx;
		margin-left: 20upx;
	}

	.popup_button {
		color: white;
		background-color: #4399FC;
		border-radius: 20upx;
	}
</style>
