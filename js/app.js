(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
     var vm=new Vue({
		 el:'#app',
		 data:{
			 list:[
				 {text:'吃饭',isfalg:true},
				 {text:'睡觉',isfalg:false},
				 {text:'敲代码',isfalg:false},
				 
			 ],
			 toggleall:'',
			 nexttext:'',
			 editindex:"",
			 liststatus:"all"
		 },
		 methods: {
			addLiet(){
			   if(this.nexttext.trim()==''){
				   console.log('输入不能未空');
				   this.nexttext=''
				   return 
			   }	
			   this.list.push({text:this.nexttext,isfalg:false})
			       this.nexttext=''
			},
			isShow(v){
				//打开即显示
				switch (this.liststatus) {
					case "all":
						return true;
						break;
						//根据每一项的状态isflag来判断，值为false才能 return true
					case "active":
					   if(v.isfalg==false){
						return true;
					   }			
						break;
					case "completed":
						return v.isfalg;				
						break;	
					default:
						break;
				}
			}
		 },
		 computed: {
			// toggleAll(){
            //     //遍历list列表，所有为true,toggele 为true   
            //    var listtemp= this.list.filter(v=>{
			// 		//返回未完成,false 为未完成
			// 		return !v.isfalg
			// 	})
			// 	return listtemp.length==0? true :false
			// }
			toggleAll:{
				//设置,遍历list列表
				set(newval){
                    this.list.forEach(v=> {
						  v.isfalg=newval
					});
				},
				//获取
				get(){
				if(this.list.length==0){
					return false;
				}	
			    //遍历list列表，所有为true,toggele 为true   
                var listtemp= this.list.filter(v=>{
					//返回未完成,false 为未完成
					return !v.isfalg
				})
				return listtemp.length==0? true :false
			}
			}
		 }
	 })
})(window);
