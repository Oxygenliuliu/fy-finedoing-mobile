	import route from "@/common/public.js"
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import mpviePicker from '@/components/mpvue-picker/mpvuePicker.vue'
	import cityData from '@/common/city.data.js'
	export default {
		components: {
			'mpvue-city-picker':mpvueCityPicker,
			'mpvue-picker':mpviePicker,
		},
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1990; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				isActive:true,  //地址列表显示与隐藏
				judgeItems:"" ,//原数据的存入 用于进行判断
				//定义的是修改地址时绑定的数据变量
				upName:"", //修改的名字
				upPhone:"", //修改的电话
				upAddress:"", //修改的地址
				upDeDetailed:"", //修改的详细地址
				dtlAddress:"" ,//拼接后的完整地址
				patientia:0, //是否设置为默认地址
			}
		},
		methods: {
			//失去焦点时验证手机号
			VerInfoPhone(){
				if(!RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/).test(this.upPhone)){
					uni.showToast({
						title:'手机号码格式不正确',
						icon:'none'
					})
				}
			},
			/* 地址插件 */
			showMulLinkageThreePicker() {
			    this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
			    this.pickerText = JSON.stringify(e)
				this.pickerText = JSON.parse(this.pickerText)
				this.upAddress=this.pickerText.label;
			},
			//点击修改图标获取信息进行赋值
			updateIcon(e){
				this.judgeItems=e;
				this.upName = e.name;
				this.patientia=e.patientia;
				this.upPhone = e.telephone;
				this.addressId = e.addid;
				let address = e.address;
				let spAddress = address.split(" "); //使用空格来对地址进行分割
				this.upAddress = spAddress[0]; //分割后的地址
				this.upDeDetailed = spAddress[1]; //分割后的详细地址
				uni.setNavigationBarTitle({
					title: '编 辑 地 址'
				})
			},
			/* 点击编辑图标触发的事件 */
			xiuGai(e){
				this.showMask=true;
				this.isActive = false;
				this.isActives = true;
				this.updateIcon(e);
			},
			/* 修改地址信息 修改默认地址所需调用的接口 */
			upInformation(){
				this.dtlAddress=this.upAddress+" "+this.upDeDetailed;
				//判断现有数据是否有修改 如果有修改就调用修改接口，如果没有修改就不调用修改接口
				if(this.judgeItems.name!=this.upName||this.judgeItems.telephone!=this.upPhone||this.judgeItems.address!=this.dtlAddress||this.judgeItems.patientia!=this.patientia){
					if(this.upName == "" || this.upPhone == "" || this.upAddress == "" || this.upDeDetailed == ""){
						uni.showToast({
							title:'请将信息填写完整,不允许为空',
							icon:'none'
						})
					}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]+$/).test(this.upName)){
						uni.showToast({
							title:"用户名只能包含中文，字母，数字",
							icon: "none"
						})
					}else if(!RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/).test(this.upPhone)){
						uni.showToast({
							title:"手机号码格式不正确",
							icon: "none"
						})
					}else{
						uni.request({
							url:route.variable+'/mobile/personal/updateAdd',
							method:'GET',
							data:{
								addid:this.addressId,
								name:this.upName,
								telephone:this.upPhone,
								address:this.dtlAddress,
								Ident_Signboard: this.Signboard,
								Ident_Signguid: this.Signguid,
								patientia:this.patientia
							},
							success: (res) => {
								if(res.data.status==0){
									uni.showToast({
										title:res.data.message,
										icon:'none'
									})
									this.onAddress();
									this.isActive=true;
									this.isActives=false;
								}
							}
						})
					}
				}
			},
			onAddress(){
				uni.request({
					url: route.variable+'/mobile/personal/getAddress',
					method: 'GET',
					data:{ 
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid
					},
					success: (res) => {
						if(res.data.default.length == 0){
							this.defAddre = true
						}else{
							this.defAddre = false
							this.addressDef = res.data.default;	//给默认地址addressDef赋值
						}
						/* 判断如果默认地址数组里面没有值且地址信息里面只有一条信息时即设置为默认地址 */
						if(res.data.default.length == 0 && res.data.address.length==1){
							this.defAddre = false
							this.addressDef = res.data.address;	//给默认地址addressDef赋值
						}else{
							this.addressList = res.data.address;	//给默认地址addressDef赋值
						}
						
					}
				})
			}
		},
		// 页面加载
		onLoad:function(){
			var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
			var data = JSON.parse(wulala); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;  //给Signboard 赋值
			this.Signguid = data.Ident_Signguid;  //给Signguid 赋值
			/* 调用获取地址接口 */
			this.onAddress();
		}
	}