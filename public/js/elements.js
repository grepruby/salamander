var Panel={
		html:function(classn,id,counter,zcounter){
			var panEl="<div style='z-index:"+zcounter+"' class='panelwrapper zclass' data-name='panel"+counter+"' id='drag"+id+"'><h2 class='pcontent'>Div Panel</h2><div class='"+classn+"' id='drop"+id+"'  ><p class='ptext' id='ptext"+counter+"'>Lorem Ipsum</p></div></div>";
			return panEl;
		},
		//htmlClone:function(id,xpos,ypos,width,height) 
		htmlClone:function(panelD) 
		{
			
			var panEl=$(document.createElement('div'));
			panEl.attr({
				"class":"panelwrapper",
				"id":panelD.dragid,
				"data-name":panelD.name
			});
			panEl.css({
				"width":panelD.width,
				"height":panelD.height,
				"left":panelD.x,
				"top":panelD.y,
				"zIndex":panelD.zindex
			});
			var hEl=$(document.createElement('h2'));
			hEl.attr({
				"class":"pcontent",
			});
			hEl.html("Div Panel");
			var dropEl=$(document.createElement('div'));
			dropEl.attr({
				"class":"drpanel",
				"id":panelD.dropid
			});
			dropEl.css({
				"background-color":"#"+panelD.bgColor
			});
			
			var pEl=$(document.createElement('p'));
			pEl.attr({
				"class":"ptext",
				"id":panelD.contentid
			});
			pEl.html(panelD.text);
			dropEl.append(pEl);
			panEl.append(hEl);
			panEl.append(dropEl);
			//alert(panelD.parent.attr('id'));
			$("#droparea").append(panEl);
			//$("#"+panelD.parent.attr('id')).append(panEl);
		}
};
var Textbox={
	html:function(classn,id,counter,zcounter){
		var textEl="<div style='z-index:"+zcounter+"' class='textwrapper zclass' data-name='text"+counter+"' id='tdrag"+counter+"'> <h2 class='tcontent'>Text Input Box</h2><div class='textel' id='text"+counter+"'><p id='txt"+counter+"'>Demo Text</p></div></div>"; 
		return textEl;
	},
	htmlClone:function(txtlD) 
	{
		
		var txtEl=$(document.createElement('div'));
		txtEl.attr({
			"class":"textwrapper",
			"id":txtlD.dragid,
			"data-name":txtlD.name
		});
		txtEl.css({
			"width":txtlD.width,
			"height":txtlD.height,
			"left":txtlD.x,
			"top":txtlD.y,
			"zIndex":txtlD.zindex
		});
		var hEl=$(document.createElement('h2'));
		hEl.attr({
			"class":"tcontent",
		});
		hEl.html("Text Input Box");
		var dropEl=$(document.createElement('div'));
		dropEl.attr({
			"class":"textel",
			"id":txtlD.dropid
		});
		dropEl.css({
			"background-color":"#"+txtlD.bgColor
		});
		
		var pEl=$(document.createElement('p'));
		pEl.attr({
			/*"class":"ptext",*/
			"id":txtlD.contentid
		});
		pEl.css({
			"font-family":txtlD.font,
			"font-size":txtlD.size,
			"font-weight":txtlD.fontw,
			"font-style": txtlD.fonts,
			"color":"#"+txtlD.color,
			"text-align":txtlD.align
			
		});
		pEl.html(txtlD.text);
		dropEl.append(pEl);
		txtEl.append(hEl);
		txtEl.append(dropEl);
		//alert(panelD.parent.attr('id'));
		$("#droparea").append(txtEl);
		//$("#"+panelD.parent.attr('id')).append(panEl);
	}
};
