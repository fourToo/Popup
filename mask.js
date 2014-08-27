	function setPopup(str){
		var obj=new Object();
		obj.div1=document.createElement('div');
		obj.div1.id='block';
		obj.div1.style.position='fixed';
		obj.div1.style.top='0';
		obj.div1.style.left='0';
		obj.div1.style.width='100%';
		obj.div1.style.height='100%';
		obj.div1.style.background='#000';
		obj.div1.style.opacity=0.5;
		obj.div1.style.filter='alpha(opacity=50)'; 
		obj.div1.style.zIndex=100000;
		obj.div2=document.createElement('div');
		obj.div2.id='topbox';
		obj.div2.style.position='fixed';
		obj.div2.style.backgroundColor='#fff'
		obj.div2.style.zIndex='100000';
		obj.div2.style.top='50%';
		obj.div2.style.left='50%';
		obj.div2.innerHTML=str;

		obj.showPopup=function(){
			var cWidth=document.documentElement.clientWidth;
			var cHeight=document.documentElement.clientHeight;
			document.body.appendChild(obj.div1);
			document.body.appendChild(obj.div2);
			obj.div2.style.left=cWidth/2-obj.div2.offsetWidth/2+'px';
			obj.div2.style.top=cHeight/2-obj.div2.offsetHeight/2+'px';
		};

		obj.closePopup=function(){
			document.body.removeChild(obj.div1);
			document.body.removeChild(obj.div2);
		};


		return obj;
	};
