import route from "@/common/public.js"
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import mpviePicker from '@/components/mpvue-picker/mpvuePicker.vue'
	import cityData from '@/common/city.data.js'
	export default {
		components: {
			// wPicker,
			mpvueCityPicker,
			mpviePicker,
			// cityData
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
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				isActive:true,  //地址列表显示与隐藏
				isActives:false,	//修改地址显示与隐藏
				addressDef: '',		//默认地址
				addressList: '',	//地址列表
				/* upAddress:"", */
				/* arName:"", //获取用户输入的收货人
				arPhone:"", //获取用户输入的电话号码
				arAddress:"", //用户输入的地址
				arDetailed:"", //用户输入的详细地址 */
				dtlAddress:"" ,//拼接后的完整地址
				//定义的是修改地址时绑定的数据变量
				upName:"",
				upPhone:"",
				upAddress:"",
				upDeDetailed:"",
				Signboard:'',
				Signguid:'',
				addressId:"" //地址序号
			}
		},
		computed:{
			
		},
		methods: {
			 showMulLinkageThreePicker() {
                this.$refs.mpvueCityPicker.show()
            },
            onConfirm(e) {
                this.pickerText = JSON.stringify(e)
				this.pickerText = JSON.parse(this.pickerText)
				/* this.arAddress=this.pickerText.label; */ //获取选中的地址并复制给arAddress
				this.upAddress=this.pickerText.label;
				/* console.log(this.pickerText.label+'成都') */
            },
			xiuGai(e){
				this.isActive = false,
				this.isActives = true
				this.upName=e.name;
				this.upPhone=e.telephone;
				this.addressId=e.addid;
				let address=e.address;
				let spAddress=address.split(" ");
				this.upAddress=spAddress[0];
				this.upDeDetailed=spAddress[1];
				console.log(spAddress[0]);
				console.log(e);
			},
			goBack(e){
				this.isActive = true;
				this.isActives = false;
			},
			
			toggleTab(index){
				this.tabIndex=index;
				this.$refs.picker.show();
			},
			/* //获取用户输入的信息 1.收货人 2.电话 3.地址 4.详细地址
			name:function(evt){
				this.arName=evt.target.value;
			},
			phone:function(evt){
				this.arPhone=evt.target.value;
			},
			detailedAddress:function(evt){ //获取详细地址
				this.arDetailed=evt.target.value;
				this.dtlAddress=this.upAddress+" "+this.upDeDetailed;
				console.log(this.dtlAddress);
				console.log(1111111111111);
			}, */
			btnAddress(evt){
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var data = JSON.parse(wulala); //JSON字符串转对象
				var Signboard = data.Ident_Signboard;  //给Signboard 赋值
				var Signguid = data.Ident_Signguid;  //给Signguid 赋值
				
				this.dtlAddress=this.upAddress+" "+this.upDeDetailed;
			
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
						url:route+'/mobile/personal/updateAdd',
						method:'GET',
						data:{
							addid:this.addressId,
							name:this.upName,
							telephone:this.upPhone,
							address:this.dtlAddress,
							Ident_Signboard: Signboard,
							Ident_Signguid: Signguid
						},
						success: (res) => {
							console.log(res);
							if(res.data.status==0){
								uni.showToast({
									title:res.data.message,
									icon:'none'
								})
								this.isActive=true;
								this.isActives=false;
								uni.navigateTo({
									url:'../user/useraddress'
								})
							}else{
								uni.showToast({
									title:'修改地址失败',
									icon:'none'
								})
							}
						}
					})
				}
			},
			shanChu(evt){
				this.addressId=evt.addid;
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var data = JSON.parse(wulala); //JSON字符串转对象
				var Signboard = data.Ident_Signboard;  //给Signboard 赋值
				var Signguid = data.Ident_Signguid;  //给Signguid 赋值
				uni.request({
					url:route+'/mobile/personal/deleteAdd',
					method:'GET',
					data:{
						addid:this.addressId,
						Ident_Signboard: Signboard,
						Ident_Signguid: Signguid
					},
					success: (res) => {
						console.log(res);
						if(res.data.status==0){
							uni.showToast({
								title:res.data.message,
								icon:'none'
							})
							uni.navigateTo({
								url:'../user/useraddress'
							})
						}else{
							uni.showToast({
								title:'地址删除失败',
								icon:'none'
							})
						}
					}
				})
			}
		},
		onBackPress() {
          if (this.$refs.mpvuePicker.showPicker) {
            this.$refs.mpvuePicker.pickerCancel();
            return true;
          }
          if (this.$refs.mpvueCityPicker.showPicker) {
            this.$refs.mpvueCityPicker.pickerCancel();
            return true;
          }
        },
		// 页面加载
		onLoad:function(){
			var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
			var data = JSON.parse(wulala); //JSON字符串转对象
			var Signboard = data.Ident_Signboard;  //给Signboard 赋值
			var Signguid = data.Ident_Signguid;  //给Signguid 赋值
			uni.request({
				url: route+'/mobile/personal/getAddress',
				method: 'GET',
				data:{ 
					Ident_Signboard: Signboard,
					Ident_Signguid: Signguid
				},
				success: (res) => {
					this.addressDef = res.data.default;	//给默认地址addressDef赋值
					this.addressList = res.data.address;	//给默认地址addressDef赋值
				}
			})
		}
	}