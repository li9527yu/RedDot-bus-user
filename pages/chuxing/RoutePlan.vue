<!-- <template>
	<view class="allmap-container" v-show="show">
		<view @click="allmap.onClick" :prop="markerList" :change:prop="allmap.updateEcharts" id="allmap"></view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				markerList: [],
				dataIndex: '',
				adCode: 330700, // 绍兴
				city: '金华市',
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.getMapData()
			})
		},
		methods: {
			// 模拟从后台获取地图数据
			getMapData() {
				this.markerList = [{
						lat: 29.069072,
						lng: 119.282266,
						icon: 'static/ITkoala-amap/icon-place.png'
					},
					{
						lat: 29.069072,
						lng: 119.982266,
						icon: 'static/ITkoala-amap/icon-place.png'
					}, {
						lat: 29.269072,
						lng: 119.632266,
						icon: 'static/ITkoala-amap/icon-place.png'
					}, {
						lat: 29.299072,
						lng: 119.382266,
						icon: 'static/ITkoala-amap/icon-place.png'
					},
					{
						lat: 29.069072,
						lng: 119.582266,
						icon: 'static/ITkoala-amap/icon-store.png'
					}
				]
			},
			//地图点击回调事件
			onViewClick(params) {
				this.dataIndex = params.dataIndex
			}
		}
	}
</script>
<script module="allmap" lang="renderjs">
	import {
		mymap
	} from "static/map.js";
	const start = require('../../static/img/home.png')
	const iconplace = require('../../static/img/home.png')
	const iconstore = require('../../static/img/home.png') //选中的图片
	export default {
		data() {
			return {
				map: null,
				ownerInstanceObj: null, //service层对象,m
				ak: 'l7n0ORx7O050a7IHaZPZs5piwKTpYM7o',                  //申请方法网上很多自行百度
				show:false
			}
		},
		mounted() {
			// 动态引入较大类库避免影响页面展示
			this.$nextTick(() => {
				let _this = this;
				mymap(_this.ak).then((mymap) => {
					// 创建地图实例
					var map = new BMapGL.Map("allmap");
					console.log(map, 'this.map ')
					var point = new BMapGL.Point(119.949506, 29.089524);
					map.centerAndZoom(point, 10); //设置缩放级别	
					map.setTilt(43);//设置倾斜角度
					map.setHeading(24.5);   //设置地图旋转角度		
					map.enableScrollWheelZoom();
					map.setMapStyleV2({
						styleId: '自定义样式的id' //百度开放平台搜搜个性化地图
					});
					var bd = new BMapGL.Boundary();
					bd.get('金华市', function(rs) {
						console.log(rs, 'rs')
						var count = rs.boundaries.length; //行政区域的点有多少个
						var pointArray = [];
						for (var i = 0; i < count; i++) {
							var path = [];
							let str = rs.boundaries[i].replace(' ', '');
							let points = str.split(';');
							for (var j = 0; j < points.length; j++) {
								var lng = points[j].split(',')[0];
								var lat = points[j].split(',')[1];
								path.push(new BMapGL.Point(lng, lat));
							}
							var prism = new BMapGL.Prism(path, 5000, {
								topFillColor: '#2b4493',  //看到的那个地图面的颜色 可自行修改
								topFillOpacity: 0.3,
								sideFillColor: '#060c1c',
								sideFillOpacity: 1

							});
							map.addOverlay(prism);
							// 添加标记
							var markerList = [{
									lat: 28.669072,
									lng: 119.582266,
									icon: iconplace,
									w:20,
									h:25
								},
								{
									lat: 29.269072,
									lng: 120.382266,
									icon: iconplace,
									w:20,
									h:25
								}, {
									lat: 29.269072,
									lng: 119.632266,
									icon: iconplace,
									w:20,
									h:25
								}, {
									lat: 29.299072,
									lng: 119.382266,
									icon: iconplace,
									w:20,
									h:25
								},
								{
									lat: 29.069072,
									lng: 119.582266,
									icon: iconstore,
									w:50,
									h:50
								}
							]						
							markerList.map((item,index)=>{
								let point = new BMapGL.Point(item.lng, item.lat);
								let myIcon = new BMapGL.Icon(item.icon, new BMapGL.Size(item.w, item.h), {}); 
								let marker = new BMapGL.Marker(point, {icon: myIcon});  
								map.addOverlay(marker); 
							})
							
                           // 添加折线
							var polyline2 = new BMapGL.Polyline([
								new BMapGL.Point(119.582266, 29.069072),
								new BMapGL.Point(119.777693,29.069072),
								new BMapGL.Point(119.877693,28.998232),
								new BMapGL.Point(120.177693,29.269072),
								// new BMapGL.Point(119.877693,29.198232),
								new BMapGL.Point(120.382266,29.269072),							
							], {
								strokeColor: "#ff598a",
								strokeWeight: 2,
								strokeOpacity: 1
							});
							map.addOverlay(polyline2);
							// 添加折线
							var polyline1 = new BMapGL.Polyline([
								new BMapGL.Point(119.582266, 29.069072),
								new BMapGL.Point(119.777693,28.997232),
								new BMapGL.Point(119.582266, 28.669072),
																				], {
								strokeColor: "#25ffd7",
								strokeWeight: 2,
								strokeOpacity: 1
							});
							map.addOverlay(polyline1);						
							var polyline = new BMapGL.Polyline([
								new BMapGL.Point(119.582266, 29.069072),
								new BMapGL.Point(119.292266, 29.169072),
								new BMapGL.Point(119.382266,29.299072),																				
							], {
								strokeColor: "#ffc256",
								strokeWeight: 2,
								strokeOpacity: 1
							});
							map.addOverlay(polyline);
						}
					});
					this.map = map;
					//等待样式文件加载完成之后 出现 但是有点闪烁 还在解决中 不能用v-if  或报错 用的v-show  这个v-if v-show
					// 有时候用起来影响很大啊 ！！！
					map.loadMapStyleFiles(() => {
					  this.show=true
					})

				});
			});

		},
		methods: {
			initEcharts() {
				var map = new BMapGL.Map("allmap"); // 创建Map实例
				map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
				map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放	
			},
			
			initline() {
				let path = [
					new AMap.LngLat(119.582266, 29.069072),
					new AMap.LngLat(119.582266, 29.190732),
					new AMap.LngLat(119.582266, 29.090732),
					new AMap.LngLat(119.282266, 29.090732),
				];

				// 创建折线实例
				let polyline = new AMap.Polyline({
					path: path,
					borderWeight: 0.5, // 线条宽度，默认为 1
					strokeColor: '#ffa64b', // 线条颜色
					lineJoin: 'round' // 折线拐点连接处样式
				});

				// 将折线添加至地图实例
				this.map.add(polyline);
			},
			init1(city) { //区域遮盖
				var that = this
				if (that.polygon) {
					that.map.remove(that.polygon)
				}
				AMap.plugin('AMap.DistrictSearch', function() {
					new AMap.DistrictSearch({
						extensions: 'all',
						subdistrict: 0
					}).search(city, function(status, result) { // 外多边形坐标数组和内多边形坐标数组
						var outer = [
							new AMap.LngLat(-360, 90, true),
							new AMap.LngLat(-360, -90, true),
							new AMap.LngLat(360, -90, true),
							new AMap.LngLat(360, 90, true)
						]
						var holes = result.districtList[0].boundaries
						var pathArray = [outer]
						pathArray.push.apply(pathArray, holes)
						that.polygon = new AMap.Polygon({
							pathL: pathArray,
							strokeColor: '#0a131e', //城市边界颜色
							strokeWeight: 4,
							fillColor: '#000001', // 遮罩背景色黑色
							fillOpacity: 1
						})
						that.polygon.setPath(pathArray)
						that.map.add(that.polygon)
					})
				})
			},
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				this.ownerInstanceObj = ownerInstance
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					dataIndex: this.dataIndex
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.allmap-container .amap-logo {
		right: 0 !important;
		left: auto !important;
		display: none !important;
	}
	.amap-copyright {
		right: 70px !important;
		left: auto !important;
	}
	#allmap {
		width:100%;
		height: 249.23rpx;
	}
</style>


<!-- <template>
	<view>
		<view class="pageMap">
			<map
			style="width: 1000px;height: 500px;"
			:latitude="latitude"
			:longitude="longitude"
			:markers="covers"
			:polyline="ployline"></map>
		</view>
	</view>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=l7n0ORx7O050a7IHaZPZs5piwKTpYM7o"></script>
<script>
	export default{
		data(){
			return{
				id:0,
				MapWidth:"1000px",
				MapHeight:"500px",
				latitude:'',
				longitude:'',
				covers:[],
				ployline:[{
					points:[
						{latitude:119.786633,longitude:25.504709},
						{latitude:119.790334, longitude:25.503445}
					],
					width:10,
					color: "#00aaff",
					arrowLine:true,
					arrowIconPath:'../../static/img/sinaweibo.png'
				}]
			}
		},
		onLoad() {
			this.getLocation()	
			
		},
		methods:{
			getLocation(){
				var that=this;
				uni.getLocation({
					type:'gcj02',
					success: (res) => {
						console.log('success')
						that.latitude=res.latitude
						that.longitude=res.longitude
						that.covers=[
							{
								latitude:res.latitude,
								longitude:res.longitude,
								iconPath:'../../static/img/location.png',
								width:40,
								height:40
							}
						]
					},
					fail: (err) => {
						console.log(JSON.stringify(err))
					}
				})
			}
		}
	}
</script>
<style>
	.pageMap{
		width: 100%;
		height: 100%;
	}
	#bdMap {
	  overflow: hidden;
	  width: 100%;
	  height: 100%;
	  margin: 0;
	  font-family: "微软雅黑";
	}
	.bm-view {
	  width: 500px;
	  height: 300px;
	}
</style>
<!-- <template>
	<view>
		<view id="container"></view>
	</view>
</template>
<script>
	export default{
		onLoad(){
			window.onLoad  = function(){
			    var map = new AMap.Map('container');
			}
			var url = 'https://webapi.amap.com/maps?v=1.4.15&key=8117f9074468c444632cc77ce99a1974&callback=onLoad';
			var jsapi = document.createElement('script');
			jsapi.charset = 'utf-8';
			jsapi.src = url;
			document.head.appendChild(jsapi);
		}
	}
</script> --> --> -->