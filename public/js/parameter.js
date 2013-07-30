/***** String Parameter Type *****/
var Strings={
	$input:null,
	html:function($parentId){
		this.$input=$("<input type='text' name='string' class='stringon'>");
		
		$parentId.append(this.$input);
		/*var input=document.createElement('input');
		input.setAttribute('type','text');
		input.setAttribute('name','string');
		input.setAttribute('class','stringon');
		document.getElementById(parentId).appendChild(input);*/
		this.javascript();
	},
	javascript:function(){
		//alert("ok");
		
		this.$input.css({
			"background":"#d12d29",
			"border":"1px",
			"outline":"none",
			"border-color":"#960501",
			"border-style":"solid",
			"color":"#fff",
			"padding":"5px",
			"width":"230px",
			"margin-top":"5px",
			"font-size":"14px"
		});
	}
};

/***** Variable Parameter Type *****/
var Variable={
	$input:null,
	html:function($parentId){
		/*var input=document.createElement('input');
		input.setAttribute('type','text');
		input.setAttribute('name','string');
		input.setAttribute('class','variableon');
		document.getElementById(parentId).appendChild(input);*/
		this.$input=$("<input type='text' name='string' class='variableon'>");
		$parentId.append(this.$input);
		this.javascript();
	},
	javascript:function(){
		this.$input.css({
			"background":"#b804b6",
			"border":"1px",
			"outline":"none",
			"border-color":"#5b005a",
			"border-style":"solid",
			"color":"#fff",
			"padding":"5px",
			"width":"230px",
			"margin-top":"5px",
			"font-size":"14px"
		});
	}
};

/***** List Parameter Type *****/
var List={
	$input:null,
	html:function($parentId){
		this.$input=$("<input type='text' name='string' class='liston'>");
		$parentId.append(this.$input);
		/*var input=document.createElement('input');
		input.setAttribute('type','text');
		input.setAttribute('name','string');
		input.setAttribute('class','liston');
		document.getElementById(parentId).appendChild(input);*/
		this.javascript();
	},
	javascript:function(){
		$(".liston").css({
			"background":"#f1429f",
			"border":"1px",
			"outline":"none",
			"border-color":"#c4056a",
			"border-style":"solid",
			"color":"#fff",
			"padding":"5px",
			"width":"230px",
			"margin-top":"5px",
			"font-size":"14px"
		});
	}
};

/***** List Parameter Type *****/
var Table={
	$input:null,
	html:function($parentId){
		this.$input=$("<input type='text' name='string' class='tableon'>");
		$parentId.append(this.$input);
		/*var input=document.createElement('input');
		input.setAttribute('type','text');
		input.setAttribute('name','string');
		input.setAttribute('class','tableon');
		document.getElementById(parentId).appendChild(input);*/
		this.javascript();
	},
	javascript:function(){
		this.$input.css({
			"background":"#f7f736",
			"border":"1px",
			"outline":"none",
			"border-color":"#c5c502",
			"border-style":"solid",
			"color":"#565649",
			"padding":"5px",
			"width":"230px",
			"margin-top":"5px",
			"font-size":"14px"
		});
	}
};


/*******Box *******/
var Box1={
	html:function(parentId,head,innerId,paraLen,ob,boxid){
		//alert(paraLen);
		
		//alert(parentId);
		if(ob.isContainer=="true")
		{
			var $divP=$("<div>");
			$divP.addClass("scriptdropwrapper");
			/*$divP.width(220);
			for(i=1;i<=$("#"+parentId).parents("div.scriptdropwrapper").size();i++)
			{
				var wdt=$("#"+parentId).parents("div.scriptdropwrapper").width();
				$("#"+parentId).parents("div.scriptdropwrapper").eq(i-1).width(wdt+(i*25));
								
			}*/
			
			var $divW=$('<div>');
			$divW.addClass("boxwrapper");
			var $h2=$('<h2>');
			$h2.text(head);
			var $divI=$('<div>');
			$divI.addClass("boxinner");
			$divI.attr("id",innerId);
			var $pId=$("#"+parentId);
			$divW.append($h2);
			$divW.append($divI);
			$divP.append($divW);
			$pId.before($divP);
			for(i=0;i<paraLen;i++){
				var $p=$("<p>");
				$label=$("<label>"+ob.Parameters[i].label+"</label>"); 
				$p.addClass("field");
				//$p.attr('id','field'+i);
				$divI.append($p);
				$p.append($label);
				ob.Parameters[i].type.html($p);
			}
			this.dropBox($divI,boxid);
			var $p=$("<p>");
			$p.addClass("buttonfield");
			$okbutton=$("<button value='OK' class='okay'>OK</button>");
			$p.append($okbutton);
			$cancelbutton=$("<button value='Cancel' class='cancel'>Cancel</button>");
			$p.append($cancelbutton);
			$divI.append($p);
		}
		else
		{
			var $divP=$("<div>");
			$divP.addClass("scriptdropwrapper");
			/*$divP.width(220);
			for(i=1;i<=$("#"+parentId).parents("div.scriptdropwrapper").size();i++)
			{
				var wdt=$("#"+parentId).parents("div.scriptdropwrapper").width();
				var diff=wdt-220;
				if(diff<0)
					wdt=wdt-diff;
				$("#"+parentId).parents("div.scriptdropwrapper").eq(i-1).width(wdt+(i*25));
								
			}*/
			var $divW=$('<div>');
			$divW.addClass("boxwrapper");
			var $h2=$('<h2>');
			$h2.text(head);
			var $divI=$('<div>');
			$divI.addClass("boxinner");
			$divI.attr("id",innerId);
			var $pId=$("#"+parentId);
			$divW.append($h2);
			$divW.append($divI);
			$divP.append($divW);
			$pId.before($divP);
			for(i=0;i<paraLen;i++){
				var $p=$("<p>");
				$label=$("<label>"+ob.Parameters[i].label+"</label>"); 
				$p.addClass("field");
				//$p.attr('id','field'+i);
				$divI.append($p);
				$p.append($label);
				ob.Parameters[i].type.html($p);
			}
			var $p=$("<p>");
			$p.addClass("buttonfield");
			$okbutton=$("<button value='OK' class='okay'>OK</button>");
			$p.append($okbutton);
			$cancelbutton=$("<button value='Cancel' class='cancel'>Cancel</button>");
			$p.append($cancelbutton);
			$divI.append($p);
		}
		
	},
	dropBox:function($appendId,id){
		$div1=$("<div>");
		$div1.attr("class","scriptdropwrapper activeborder fixwdith");
		$div1.attr('id',id);
		$div2=$("<div>");
		$div2.addClass("scriptdroparea");
		$div3=$("<div>");
		$div3.addClass("scriptdrpcontent");
		$p=$("<p>");
		$p.text("Drag Commands Here");
		$div3.append($p);
		$div2.append($div3);
		$div1.append($div2);
		$appendId.append($div1);
		/*<div class="scriptdropwrapper" id="test">
				
				<div class="scriptdroparea">
							<div class="scriptdrpcontent">
								<p>Drag Commands Here</p>
							</div>
						</div>
					</div>*/
	}
};


/*Node={
	Datas:[
		   {
			   "value":"Loop",
			   html:function()
			   {
				   alert("ok");
			   }
			   
		   },
		   {
			   "value":"Text",
			   html:function()
			   {
				   alert("kok");
			   }
			   
		   }
	]
};*/