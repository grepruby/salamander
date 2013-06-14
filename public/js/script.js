var dataTosave = [];
$(window).load(function(e) {
	$(".propblock").css({"display":"none"});
	$.getScript('/js/elements.js', function() //getting objects script
	{
    
		/*****Global Variable Declaration for Panel *****/
			var panelDrag=false,panelCounter=0,panelActive,superPanel=false,panelXNeg,panelYNeg;
			var editAreaWidth=$(".editorarea").outerWidth(true);
			var editAreaHeight=$(".editorarea").outerHeight(true);
			var panelPopupWidth=$(".panelpoup").outerWidth(true);
			var panelPopupHeight=$(".panelpoup").outerHeight(true);
			
			var textPopupWidth=$(".textpoup").outerWidth(true);
			var textPopupHeight=$(".textpoup").outerHeight(true);
			
		/*****Global Variable Declaration for Textbox *****/
			var textActive,textXNeg,textYNeg,textCounter=0,textDrag=false,superText=false;
			
		/*****Common Variable*****/
			var dropId,activeElement;
			var dar=$("#droparea").offset().left;
			var datr=$("#droparea").offset().top;
			var tempId;
			var lp,tp,zcounter=0;
		
		/* Defination for dragitem process starts */
				function dragProcess(dragthis,ui)
				{
					
					if(panelXNeg>0 && panelXNeg<=498 && panelYNeg>0 && panelYNeg<=467)
					{
						if(dropId=="droparea")
						{
							
							lp=dragthis.offset().left-dar;
							tp=dragthis.offset().top-datr;
							if(tp+$("#drag"+panelCounter).height()+2>488)
							{
								$("#drag"+panelCounter).css({"left":lp,"top":tp-((tp+$("#drop"+panelCounter).height()+2)-488)}); 
							}
							else
							{
								$("#drag"+panelCounter).css({"left":lp,"top":tp}); 
							}
							 
							 panelActive=$("#drag"+panelCounter);
							//$("#drop"+panelCounter).addClass("addborder");
							dragthis.remove();
							
							$("#name").val("panel"+panelCounter);
							$("#xpos").val(lp);
							$("#ypos").val(tp);
							$("#width").val($("#drop"+panelCounter).outerWidth(true));
							$("#height").val($("#drop"+panelCounter).outerHeight(true)); 
							$("#text").val($("#drop"+panelCounter+" .pcontent").text());
							
							showPopu($("#drag"+panelCounter)); 
							
							//$(".panelpoup").css({"display":"block","left":lp+118,"top":tp-10});
							$("#icont").val($("#drop"+panelCounter).children('p').text());
							$("#idname").val($("#drag"+panelCounter).attr('data-name')); 
							$("#text").val($("#ptext"+panelCounter).text());
							$(".textel").removeClass('addborder');
							$(".drpanel").removeClass('addborder');
							$(".textpoup").hide();
							$("#drop"+panelCounter).addClass('addborder');
							
							var rgbString = $("#drop"+panelCounter).css("background-color"); 
							var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
							delete (parts[0]);
							for (var i = 1; i <= 3; ++i) {
								 parts[i] = parseInt(parts[i]).toString(16);
								 if (parts[i].length == 1) parts[i] = '0' + parts[i];
							} 
							var hexString =parts.join('').toUpperCase();
							$('#bgcolor option[value="' + hexString + '"]').attr("selected", "selected");
								
								
							$("#tool1").append('<div class="tools" id="divpanel"><h2>Div Panel</h2><div class="panel" id="panel1"></div></div>');
							
							
							
							
							$( "#divpanel").draggable({
								revert: "invalid",
								drag:function(event,ui)
								{
									panelXNeg=$(this).offset().left-dar;
									panelYNeg=$(this).offset().top-datr;
									activeElement="panel";
							
								},
								start:function(event,ui)
								{
									textDrag=false;
									panelDrag=true;
									superPanel=false;
									activeElement="panel";
									$(".content").css({"display":"none"});
									$(".panelhide").css({"display":"none"});
									$(".pst").css({"display":"block"});
								},
								stop: function(event, ui)
								{
									dragProcess($(this), ui);
								}
							});
						}
						else
						{
							
							var drpW=dropId.outerWidth(true);
							var drpH=dropId.outerHeight(true);
							
						
							var drpL=dropId.parent().position().left+1;
							var drpT=dropId.parent().position().top+1;
							var drgW=$("#drag"+panelCounter).outerWidth(true)
							var drgH=$("#drag"+panelCounter).outerHeight(true)
							lp=dragthis.offset().left-dar;
							tp=dragthis.offset().top-datr;
							
							
							if(lp<drpL || (lp+drgW)>(drpL+drpW) || tp<drpT || (tp+drgH)>(drpT+drpH) ) 
							{
								/*alert(lp);
								alert(drpL);
								alert(drgW);
								alert(drpW);*/
								/*alert(tp);
								alert(drpT);*/
								
								$("#drag"+panelCounter).css({"left":lp,"top":tp});
								 panelActive=$("#drag"+panelCounter);
								 dragthis.remove();
								 $("#name").val("panel"+panelCounter);
							$("#xpos").val(lp);
							$("#ypos").val(tp);
							$("#width").val($("#drop"+panelCounter).outerWidth(true));
							$("#height").val($("#drop"+panelCounter).outerHeight(true)); 
							$("#text").val($("#drop"+panelCounter+" .pcontent").text());
							 panelActive=$("#drag"+panelCounter);
							//$(".panelpoup").css({"display":"block","left":lp+118,"top":tp-10});
							$("#icont").val($("#drop"+panelCounter).children('p').text());
							$("#idname").val($("#drag"+panelCounter).attr('data-name')); 
							$("#text").val($("#ptext"+panelCounter).text());
							$(".textel").removeClass('addborder');
							$(".drpanel").removeClass('addborder');
							$(".textpoup").hide();
							$("#drop"+panelCounter).addClass('addborder');
							
							var rgbString = $("#drop"+panelCounter).css("background-color"); 
							var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
							delete (parts[0]);
							for (var i = 1; i <= 3; ++i) {
								 parts[i] = parseInt(parts[i]).toString(16);
								 if (parts[i].length == 1) parts[i] = '0' + parts[i];
							} 
							var hexString =parts.join('').toUpperCase();
							$('#bgcolor option[value="' + hexString + '"]').attr("selected", "selected");
								
								
							$("#tool1").append('<div class="tools" id="divpanel"><h2>Div Panel</h2><div class="panel" id="panel1"></div></div>');
							
							
							
							
							$( "#divpanel").draggable({
								revert: "invalid",
								drag:function(event,ui)
								{
									panelXNeg=$(this).offset().left-dar;
									panelYNeg=$(this).offset().top-datr;
									activeElement="panel";
							
								},
								start:function(event,ui)
								{
									textDrag=false;
									panelDrag=true;
									superPanel=false;
									activeElement="panel";
									$(".content").css({"display":"none"});
									$(".panelhide").css({"display":"none"});
									$(".pst").css({"display":"block"});
								},
								stop: function(event, ui)
								{
									dragProcess($(this), ui);
								}
							});
								//alert("yes");	
							}
							else
							{
								 panelActive=$("#drag"+panelCounter);
								dragthis.remove();
								$("#drag"+panelCounter).appendTo(dropId);
								$("#drag"+panelCounter).css({"left":lp-drpL,"top":tp-drpT});
								
								$(".textel").removeClass('addborder');
								$(".drpanel").removeClass('addborder');
								$(".textpoup").hide();
								$("#drop"+panelCounter).addClass('addborder');
								
								
								
								
								
								$("#name").val("panel"+panelCounter);
							$("#xpos").val(lp);
							$("#ypos").val(tp);
							$("#width").val($("#drop"+panelCounter).outerWidth(true));
							$("#height").val($("#drop"+panelCounter).outerHeight(true)); 
							$("#text").val($("#drop"+panelCounter+" .pcontent").text());
							 panelActive=$("#drag"+panelCounter);
							//$(".panelpoup").css({"display":"block","left":lp+118,"top":tp-10});
							$("#icont").val($("#drop"+panelCounter).children('p').text());
							$("#idname").val($("#drag"+panelCounter).attr('data-name')); 
							$("#text").val($("#ptext"+panelCounter).text());
								
								var rgbString = $("#drop"+panelCounter).css("background-color"); 
								var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
								delete (parts[0]);
								for (var i = 1; i <= 3; ++i) {
								 	parts[i] = parseInt(parts[i]).toString(16);
								 	if (parts[i].length == 1) parts[i] = '0' + parts[i];
								} 
								var hexString =parts.join('').toUpperCase();
								$('#bgcolor option[value="' + hexString + '"]').attr("selected", "selected");
								$("#tool1").append('<div class="tools" id="divpanel"><h2>Div Panel</h2><div class="panel" id="panel1"></div></div>');
							
								
								$( "#divpanel").draggable({
									revert: "invalid",
									drag:function(event,ui)
									{
										panelXNeg=$(this).offset().left-dar;
										panelYNeg=$(this).offset().top-datr;
										activeElement="panel";
								
									},
									start:function(event,ui)
									{
										textDrag=false;
										panelDrag=true;
										superPanel=false;
										activeElement="panel";
										$(".content").css({"display":"none"});
										$(".panelhide").css({"display":"none"});
										$(".pst").css({"display":"block"});
									},
									stop: function(event, ui)
									{
										dragProcess($(this), ui);
									}
								});
							}
						}
					}
					else
					{
						dragthis.animate({"left":0,"top":0});
					}
				}
		/* Defination for dragitem process ends */
		
		/*****Panel Drag Event Implementing strats here *****/
				$( "#divpanel").draggable({
						revert: "invalid",
						drag:function(event,ui)
						{
							panelXNeg=$(this).offset().left-dar;
							panelYNeg=$(this).offset().top-datr;
													
						},
						start: function(event,ui)
						{
							panelDrag=true;
							activeElement="panel";
							$(".content").css({"display":"none"});
							$(".panelhide").css({"display":"none"});
							$(".pst").css({"display":"block"});
						},
						stop: function(event, ui)
						{
							dragProcess($(this), ui);
						}
				});
		/*****Panel Drag Event Implementing ends here *****/
		
			/* Defination for Drop Process starts */
				function dropProcess(dropthis,ui)
				{
					var curId=dropthis.attr('id'); 
					dropId=curId;
					tempId=dropthis;
					//dropId=dropthis;
					if(activeElement=="panel")
					{
						if(panelXNeg>0 && panelXNeg<=498 && panelYNeg>0 && panelYNeg<=467)
						{
							if(curId=="droparea" && !superPanel )
							{
								panelCounter++;
								zcounter++;
								$("#"+curId).append(Panel.html("drpanel",panelCounter,panelCounter,zcounter));
								panelActive=$("#drop"+panelCounter);
						
						$("#drag"+panelCounter).bind('click',function(e){
							e.stopPropagation();
							panelClick($(this)); 
						});
						$("#drag"+panelCounter).bind('dblclick',function(e){
							e.stopPropagation();
							showPopu($(this)); 
						});
						
						$( "#drag"+panelCounter).draggable({
								revert: "invalid",
								drag: function( event, ui )
								{
									panelDrag=false;
									superPanel=true;
									activeElement="panel";
									//var lp=$(this).offset().left-dar;
									//var tp=$(this).offset().top-datr;
									var lp=$(this).position().left;
									var tp=$(this).position().top;	
									panelXNeg=$(this).offset().left-dar;
									panelYNeg=$(this).offset().top-datr;
								/***** setting properties values *****/
									$("#name").val($(this).attr("data-name"));
									$("#xpos").val(lp);
									$("#ypos").val(tp);
									$("#width").val($(this).outerWidth(true));
									$("#height").val($(this).outerHeight(true));
									
								},
								start: function( event, ui )
								{
									tlp=$(this).offset().left-dar-1;
									ttp=$(this).offset().top-datr-1;
									$(".content").css({"display":"none"});
									$(".panelhide").css({"display":"none"});
									$(".pst").css({"display":"block"});
									$(".drpanel").removeClass('addborder');
									$(".textel").removeClass('addborder');
									$(this).children('div.drpanel').addClass('addborder');
								},
								stop: function(event, ui)
								{				
										dragElementProcess($(this), ui);
        						}
							}); 
							
							$('#drop'+panelCounter).resizable({
								handles: 'n,e,s,w,se,sw,ne,nw',
								 start: function(e, ui) {
           								rlp=$(this).parent().offset().left-dar; 
										rtp=$(this).parent().offset().top-datr; 
										
       							 },	
								resize: function(e, ui) {
									
									
									
									var lp=$(this).parent().offset().left-dar; 
									var tp=$(this).parent().offset().top-datr; 
									$(this).parent().width($(this).outerWidth(true));
									$(this).parent().height($(this).outerHeight(true));
									
          							
									
									$("#xpos").val(lp+$(this).position().left);
									$("#ypos").val(tp+$(this).position().top);
									$("#width").val($(this).outerWidth(true));
									$("#height").val($(this).outerHeight(true));
									
									/*** bound for width ***/																	
										if(lp+parseInt($(this).position().left)<rlp+4)
										{
											$(this).resizable( "option", "maxWidth",editAreaWidth-4);
											if(lp+parseInt($(this).position().left)<1)
											{
												$(this).resizable( "option", "maxWidth", $(this).outerWidth(true)-2);
												
											}
										}
										else if(rlp+parseInt($(this).outerWidth(true))>editAreaWidth-4)
										{
											$(this).resizable( "option", "maxWidth", $(this).outerWidth(true));
										}
										
									/*** bound for height ***/																	
										if(tp+parseInt($(this).position().top)<rtp+4)
										{
											$(this).resizable( "option", "maxHeight",editAreaHeight-22);
											if(tp+parseInt($(this).position().top)<1)
											{
												$(this).resizable( "option", "maxHeight", $(this).outerHeight(true)-22);
												
											}
										}
										else if(rtp+parseInt($(this).outerHeight(true))>editAreaHeight-22)
										{
											$(this).resizable( "option", "maxHeight", $(this).outerHeight(true));
										}
									
								} ,
       							stop: function(e, ui) {
									
									var lp=$(this).parent().position().left; 
									var tp=$(this).parent().position().top;
									$(this).parent().css({"left":lp+$(this).position().left,"top":tp+$(this).position().top});
								
									
									/**** positioning for width boundation ****/
									if(lp+parseInt($(this).position().left)<=1) 
									{
										$(this).parent().css({"left":1});
										$("#xpos").val(1);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(tp);
										$("#height").val($(this).outerHeight(true));
									}
									if(lp+parseInt($(this).position().left)+parseInt($(this).outerWidth(true))>=editAreaWidth-4) 
									{
										
										if((editAreaWidth-4-$(this).outerWidth(true))<=1)
										{
											lp=1;
										}
										else
										{
											lp=(editAreaWidth-4-$(this).outerWidth(true));
										}
										
										$(this).parent().css({"left":lp});
										$("#xpos").val(lp);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(tp);
										$("#height").val($(this).outerHeight(true));
									}
									
									
									/**** positioning for height boundation ****/
									if(tp+parseInt($(this).position().top)<=1) 
									{
										$(this).parent().css({"top":19});
										$("#xpos").val(1);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(19);
									}
									if(tp+parseInt($(this).position().top)+parseInt($(this).outerHeight(true))>=editAreaHeight-20) 
									{
										
										if((editAreaHeight-22-$(this).outerHeight(true))<=1)
										{
											tp=19;
											$("#ypos").val(19);
										}
										else
										{
											tp=(editAreaHeight-22-$(this).outerHeight(true));
										}
										
										$(this).parent().css({"top":tp});
										$("#xpos").val(lp);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(tp);
										$("#height").val($(this).outerHeight(true));
									}
									
									$(this).css({"left":0,"top":0});
									$(this).resizable( "option", "maxWidth",700);
									$(this).resizable( "option", "maxHeight",700);
									
        						}
						   });
							
							$("#drop"+panelCounter).droppable({
								revert: "invalid",
								drop: function(event, ui)
								{	
									dropElProcess($(this),ui);			
								}
							}); 
						}
						}
					}
					else if(activeElement=="text")
					{
						if(dropId=="droparea" && textDrag && !superText )
						{
						
							textCounter++;
							zcounter++;
							$("#"+curId).append(Textbox.html("tbox","tdrop"+textCounter,textCounter,zcounter)); 
							$("#tdrag"+textCounter).bind('click',function(e){
								e.stopPropagation();
								textClick($(this)); 
							});
							$("#tdrag"+textCounter).bind('dblclick',function(e){
								e.stopPropagation();
								textShowPop($(this)); 
							});
							$(".textel").change(function(){
									$("#text").val($(this).val());
									$("#ticont").val($(this).val());
							});
							textActive=$("#tdrop"+textCounter);
						
							$("#tdrag"+textCounter).draggable({
									revert: "invalid",
									drag: function( event, ui )
									{
									
										superText=true;
										textDrag=true;
										panelDrag=false;
										activeElement="text";
										var lp=$(this).offset().left-dar;
										var tp=$(this).offset().top-datr;
					
										panelXNeg=$(this).offset().left-dar;
										panelYNeg=$(this).offset().top-datr;
					
										
									/***** setting properties values *****/
						
										$("#name").val($(this).attr("data-name"));
										$("#xpos").val(lp);
										$("#ypos").val(tp);
										$("#width").val($(this).outerWidth(true));
										$("#height").val($(this).outerHeight(true));
										$("#text").val($("#txt"+$(this).attr('id').split('tdrag')[1]).text());
									},
									start: function( event, ui )
									{
										$(".content").css({"display":"block"});
										$(".panelhide").css({"display":"block"});
										$(".pst").css({"display":"none"});
										$(".drpanel").removeClass('addborder');
										$(".textel").removeClass('addborder');
										$(this).children('div.textel').addClass('addborder');
										superText=true;
										textDrag=true;
										
										activeElement="text";
										var lp=$(this).offset().left-dar;
										var tp=$(this).offset().top-datr;
										
									},
									stop: function(event, ui)
									{	
											superText=false;
											dragElementProcess($(this),ui);
									}
							}); 
							/**resize**/
							$('#text'+textCounter).resizable({
								handles: 'n,e,s,w,se,sw,ne,nw',
								 start: function(e, ui) {
           								rlp=$(this).parent().offset().left-dar; 
										rtp=$(this).parent().offset().top-datr; 
										
       							 },	
								resize: function(e, ui) {
									var lp=$(this).parent().position().left; 
									var tp=$(this).parent().position().top; 
									$(this).parent().width($(this).outerWidth(true));
									$(this).parent().height($(this).outerHeight(true));
									
          							 /*** bound for width ***/																	
										if(lp+parseInt($(this).position().left)<rlp+4)
										{
											$(this).resizable( "option", "maxWidth",editAreaWidth-4);
											if(lp+parseInt($(this).position().left)<1)
											{
												$(this).resizable( "option", "maxWidth", $(this).outerWidth(true)-2);
												
											}
										}
										else if(rlp+parseInt($(this).outerWidth(true))>editAreaWidth-4)
										{
											$(this).resizable( "option", "maxWidth", $(this).outerWidth(true));
										}
									/*** bound for height ***/																	
										if(tp+parseInt($(this).position().top)<rtp+4)
										{
											$(this).resizable( "option", "maxHeight",editAreaHeight-22);
											if(tp+parseInt($(this).position().top)<1)
											{
												$(this).resizable( "option", "maxHeight", $(this).outerHeight(true)-22);
												
											}
										}
										else if(rtp+parseInt($(this).outerHeight(true))>editAreaHeight-22)
										{
											$(this).resizable( "option", "maxHeight", $(this).outerHeight(true));
										}
									 	
									$("#xpos").val(lp);
									$("#ypos").val(tp);
									$("#width").val($(this).outerWidth(true));
									$("#height").val($(this).outerHeight(true));
									
								},
       							stop: function(e, ui) {
									
									var lp=$(this).parent().position().left; 
									var tp=$(this).parent().position().top;
									$(this).parent().css({"left":lp+$(this).position().left,"top":tp+$(this).position().top});
									
									/**** positioning for width boundation ****/
									if(lp+parseInt($(this).position().left)<=1) 
									{
										$(this).parent().css({"left":1});
										$("#xpos").val(1);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(tp);
										$("#height").val($(this).outerHeight(true));
									}
									if(lp+parseInt($(this).position().left)+parseInt($(this).outerWidth(true))>=editAreaWidth-4) 
									{
										
										if((editAreaWidth-4-$(this).outerWidth(true))<=1)
										{
											lp=1;
										}
										else
										{
											lp=(editAreaWidth-4-$(this).outerWidth(true));
										}
										
										$(this).parent().css({"left":lp});
										$("#xpos").val(lp);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(tp);
										$("#height").val($(this).outerHeight(true));
									}
									 
									 /**** positioning for height boundation ****/
									if(tp+parseInt($(this).position().top)<=1) 
									{
										$(this).parent().css({"top":19});
										$("#xpos").val(1);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(19);
									}
									if(tp+parseInt($(this).position().top)+parseInt($(this).outerHeight(true))>=editAreaHeight-20) 
									{
										
										if((editAreaHeight-22-$(this).outerHeight(true))<=1)
										{
											tp=19;
											$("#ypos").val(19);
										}
										else
										{
											tp=(editAreaHeight-22-$(this).outerHeight(true));
										}
										
										$(this).parent().css({"top":tp});
										$("#xpos").val(lp);
										$("#width").val($(this).outerWidth(true));
										$("#ypos").val(tp);
										$("#height").val($(this).outerHeight(true));
									}
									$(this).css({"left":0,"top":0});
									$(this).resizable( "option", "maxWidth",700);
									$(this).resizable( "option", "maxHeight",700);
        						} 
															
						   });
						}
					}
				}
				
				function dropElProcess(dropthis,ui)
				{
					dropId=dropthis;
					subcurId=dropthis;
					if(!panelDrag)
					{
						dropId=dropthis.attr('id');
						subcurId=dropthis;
						subWidth=subcurId.width();
						subHeight=subcurId.height();
						sublp=subcurId.offset().left-dar;
						subtp=subcurId.offset().top-datr;
					}
					
					
				}
				function dragElementProcess(dragthis,ui) //drag
				{
					if(activeElement=="panel")
					{
						
								if(panelXNeg>0 && panelYNeg+parseInt(dragthis.outerHeight())<=488 && panelYNeg>0 && panelXNeg+parseInt(dragthis.outerWidth())<=613 )
								{
									subchWidth=dragthis.width();
									subchHeight=dragthis.height();
									subchlp=dragthis.offset().left-dar;
									subchtp=dragthis.offset().top-datr;
									
									if(dropId!="droparea")
									{
										//alert(subchlp);
										if(dragthis.offset().left-subcurId.offset().left<0 || (subchWidth+subchlp)>(subWidth+sublp) ||dragthis.offset().top-subcurId.offset().top<0  || (subchHeight+subchtp)>(subHeight+subtp)) 
										{
											for(i=1;i<=10;i++)
											{
												subchWidth=dragthis.width();
												subchHeight=dragthis.height();
												subchlp=dragthis.offset().left-dar;
												subchtp=dragthis.offset().top-datr;
												if(dragthis.offset().left-subcurId.offset().left<0 || (subchWidth+subchlp)>(subWidth+sublp) ||dragthis.offset().top-subcurId.offset().top<0  || (subchHeight+subchtp)>(subHeight+subtp)) 
												{
													subchlp=dragthis.offset().left-subcurId.parent().offset().left;
													subchtp=dragthis.offset().top-subcurId.parent().offset().top;
													dragthis.appendTo(subcurId.parent());
													var chId=dragthis.attr('id');
													$("#"+chId).css({"left":subchlp,"top":subchtp});
													
													
													dropId=$("#"+dropId).parent().attr('id');
													subcurId=$("#"+dropId);
													subWidth=subcurId.width();
													subHeight=subcurId.height();
													sublp=subcurId.offset().left-dar;
													subtp=subcurId.offset().top-datr;
													
												}
											}
										}
										else
										{
											subchlp=dragthis.offset().left-subcurId.offset().left;
											subchtp=dragthis.offset().top-subcurId.offset().top;
												$("#xpos").val(subchlp);
												$("#ypos").val(subchtp);
												var chId=dragthis.attr('id');
												/*alert(subcurId.attr('id'));
												alert(dragthis.attr('id'));*/
												//subcurId.append("<div id='"+chId+"' class='drpanel' data-name='"+subcurId.attr('data-name')+"' style='"+dragthis.attr('style')+"'>");
												dragthis.appendTo(subcurId);
												$("#"+chId).css({"left":subchlp,"top":subchtp});
												
												
											
												
												
											
											
										}
									}
									else
									{
										
										lp=dragthis.offset().left-dar;
										tp=dragthis.offset().top-datr;
										dragthis.appendTo($("#"+dropId));
										dragthis.css({"left":subchlp,"top":subchtp});
									}
								}
								else
								{
									
									dragthis.animate({"left":tlp,"top":ttp},function(){
										$("#xpos").val(tlp);
										$("#ypos").val(ttp);
									});
									
								}
					}
					else if(activeElement=="text")
					{
									subchWidth=dragthis.width();
									subchlp=dragthis.offset().left-dar;
									subchtp=dragthis.offset().top-datr;
									
									if(dropId!="droparea")
									{
										if(dragthis.offset().left-subcurId.offset().left<0 || (subchWidth+subchlp)+20>(subWidth+sublp)) 
										{
											subchlp=dragthis.offset().left-subcurId.parent().parent().offset().left;
											subchtp=dragthis.offset().top-subcurId.parent().parent().offset().top;
											dragthis.appendTo(subcurId.parent().parent());
											var chId=dragthis.attr('id');
											$("#"+chId).css({"left":subchlp,"top":subchtp});
										}
										else
										{
											subchlp=dragthis.offset().left-subcurId.offset().left;
											subchtp=dragthis.offset().top-subcurId.offset().top;
										
												var chId=dragthis.attr('id');
												//subcurId.append("<div id='"+chId+"' class='drpanel' data-name='"+subcurId.attr('data-name')+"' style='"+dragthis.attr('style')+"'>");
												dragthis.appendTo(subcurId);
												$("#"+chId).css({"left":subchlp,"top":subchtp});
											
											
										}
									}
									else
									{
										lp=dragthis.offset().left-dar;
										tp=dragthis.offset().top-datr;
										dragthis.appendTo($("#"+dropId));
										dragthis.css({"left":subchlp,"top":subchtp});
									}
					}
				
				}
		/* Defination for Drop Process Ends */
		
		/*****Textbox Drag Event Implementing strats here *****/
			$( "#textpanel").draggable({
					revert: "invalid",
					drag:function()
					{
						panelXNeg=$(this).offset().left-dar;
						panelYNeg=$(this).offset().top-datr;
					},
					start: function(event,ui)
					{
						textDrag=true;
						activeElement="text";
						$(".content").css({"display":"block"});
						$(".panelhide").css({"display":"block"});
						$(".pst").css({"display":"none"});
						
					},
					stop: function(event, ui)
					{
						textDragProcess($(this), ui);
        			}
			});
			
			function textDragProcess(dragthis,ui)
			{
				if(panelXNeg>0 && panelXNeg<=498 && panelYNeg>0 && panelYNeg<=467)
				{
						if(textDrag && dropId=='droparea')
						{
							lp=dragthis.offset().left-dar;
						tp=dragthis.offset().top-datr;
						var cW=$("#tdrag"+textCounter).outerWidth(true);
						var cH=$("#tdrag"+textCounter).outerHeight(true);
						
						$("#tdrag"+textCounter).css({"left":lp,"top":tp}); 
						$(".textel").removeClass("addborder"); 
						$(".drpanel").removeClass("addborder");
						$(".panelpoup").hide();
						$(".textpoup").show();
						
						$("#text"+textCounter).addClass("addborder");
						textShowPop($("#tdrag"+textCounter));
						//$(".textpoup").css({"left":lp+cW+5,"top":tp-40}); 
						/***** setting properties values *****/
							$("#tidname").val($("#tdrag"+textCounter).attr('data-name')); 
							$("#ticont").val($("#text"+textCounter).children('p').text());
							$("#name").val($("#tdrag"+textCounter).attr('data-name'));
							$("#xpos").val(lp);
							$("#ypos").val(tp);
							$("#width").val(cW);
							$("#height").val(cH);
							$("#text").val($("#text"+textCounter).children('p').text());
							
						textActive=	$("#tdrag"+textCounter);
							
						dragthis.remove();
						
						$("#tool2").append('<div class="tools" id="textpanel"> <h2>Text Input Box</h2><div class="textbx" id="ttext"></div></div>');
						$( "#textpanel").draggable({
							revert: "invalid",
							drag:function(event,ui)
							{
								panelXNeg=$(this).offset().left-dar;
								panelYNeg=$(this).offset().top-datr;
								activeElement="text";
							},
							start:function(event,ui)
							{
								textDrag=true;
								activeElement="text";
							},
							stop: function(event, ui)
							{
								textDragProcess($(this), ui);
							}
						});
						}
						else
						{
							for(i=1;i<=10;i++)
							{
								if(dropId=="drop"+i)
								{
									dropId=$("#drop"+i);
									break;
								}
							}
							
							var drpW=dropId.outerWidth(true);
							var drpH=dropId.outerHeight(true);
							
						
							var drpL=dropId.parent().position().left+1;
							var drpT=dropId.parent().position().top+1;
							var drgW=$("#tdrag"+textCounter).outerWidth(true)
							var drgH=$("#tdrag"+textCounter).outerHeight(true)
							lp=dragthis.offset().left-dar;
							tp=dragthis.offset().top-datr;
							
							
							if(lp<drpL || (lp+drgW)>(drpL+drpW) || tp<drpT || (tp+drgH)>(drpT+drpH) ) 
							{
								textlActive=$("#tdrag"+textCounter);
								dragthis.remove();
								
								$("#tdrag"+textCounter).css({"left":lp,"top":tp});
								$("#tool2").append('<div class="tools" id="textpanel"> <h2>Text Input Box</h2><div class="textbx" id="ttext"></div></div>');
								
								
								$(".textel").removeClass("addborder"); 
								$(".drpanel").removeClass("addborder");
								$(".panelpoup").hide();
								$(".textpoup").show();
						
								$("#text"+textCounter).addClass("addborder");
								textShowPop($("#tdrag"+textCounter));
								//$(".textpoup").css({"left":lp+drgW+5,"top":tp-40}); 
							/***** setting properties values *****/
								$("#tidname").val($("#tdrag"+textCounter).attr('data-name')); 
								$("#ticont").val($("#text"+textCounter).children('p').text());
								$("#name").val($("#tdrag"+textCounter).attr('data-name'));
								$("#xpos").val(lp);
								$("#ypos").val(tp);
								$("#width").val(drgW);
								$("#height").val(drgH);
								$("#text").val($("#text"+textCounter).children('p').text());
								
								$( "#textpanel").draggable({
										revert: "invalid",
										drag:function(event,ui)
										{
											panelXNeg=$(this).offset().left-dar;
											panelYNeg=$(this).offset().top-datr;
											activeElement="text";
										},
										start:function(event,ui)
										{
											textDrag=true;
											activeElement="text";
										},
										stop: function(event, ui)
										{
											textDragProcess($(this), ui);
										}
								});
							}
							else
							{
								//alert("ok");
								textlActive=$("#tdrag"+textCounter);
								dragthis.remove();
								$("#tdrag"+textCounter).appendTo(dropId);
								$("#tdrag"+textCounter).css({"left":lp-drpL,"top":tp-drpT});
								$("#tool2").append('<div class="tools" id="textpanel"> <h2>Text Input Box</h2><div class="textbx" id="ttext"></div></div>');
								
								
								$(".textel").removeClass("addborder"); 
								$(".drpanel").removeClass("addborder");
								$(".panelpoup").hide();
								$(".textpoup").show();
						
								$("#text"+textCounter).addClass("addborder");
								textShowPop($("#tdrag"+textCounter));
								//$(".textpoup").css({"left":lp+drgW+5,"top":tp-40}); 
							/***** setting properties values *****/
								$("#tidname").val($("#tdrag"+textCounter).attr('data-name')); 
								$("#ticont").val($("#text"+textCounter).children('p').text());
								$("#name").val($("#tdrag"+textCounter).attr('data-name'));
								$("#xpos").val(lp);
								$("#ypos").val(tp);
								$("#width").val(drgW);
								$("#height").val(drgH);
								$("#text").val($("#text"+textCounter).children('p').text());
								
								$( "#textpanel").draggable({
										revert: "invalid",
										drag:function(event,ui)
										{
											panelXNeg=$(this).offset().left-dar;
											panelYNeg=$(this).offset().top-datr;
											activeElement="text";
										},
										start:function(event,ui)
										{
											textDrag=true;
											activeElement="text";
										},
										stop: function(event, ui)
										{
											textDragProcess($(this), ui);
										}
								});
								
							}
						} 
				}
			}
			
			function textClick(curObj)
			{
				$(".content").css({"display":"block"});
				$(".panelhide").css({"display":"block"});
				$(".pst").css({"display":"none"});
				textActive=curObj;
				activeElement="text";
				txtst=1;
				$(".textel").removeClass("addborder");
				$(".drpanel").removeClass("addborder");
				curObj.children('div.textel').addClass("addborder");
				//var lp=curObj.offset().left-dar;
				//var tp=curObj.offset().top-datr;
				var lp=curObj.position().left;
				var tp=curObj.position().top;
				
				/***** setting properties values *****/
					
					$("#name").val(curObj.attr('data-name'));
					$("#xpos").val(lp-1);
					$("#ypos").val(tp-1);
					$("#width").val(curObj.outerWidth(true));
					$("#height").val(curObj.outerHeight(true));
					$("#text").val(curObj.children('div.textel').find('p').text());
					var rgbString = curObj.children().css("color"); 
					var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
					delete (parts[0]);
					for (var i = 1; i <= 3; ++i) {
   							 parts[i] = parseInt(parts[i]).toString(16);
   							 if (parts[i].length == 1) parts[i] = '0' + parts[i];
					} 
					var hexString =parts.join('').toUpperCase();
					$('#fontcolor option[value="' + hexString + '"]').attr("selected", "selected");
					
					var rgbString = curObj.children().css("background-color"); 
					var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
					delete (parts[0]);
					for (var i = 1; i <= 3; ++i) {
   							 parts[i] = parseInt(parts[i]).toString(16);
   							 if (parts[i].length == 1) parts[i] = '0' + parts[i];
					} 
					var hexString =parts.join('').toUpperCase();
					$('#bgcolor option[value="' + hexString + '"]').attr("selected", "selected");
			}
		/*****Textbox Drag Event Implementing ends here *****/
		
		/*****Dropable Area Event Implementing strats here *****/
				$( ".editorarea" ).droppable({
						drop: function( event, ui )
						{
							 dropProcess($(this),ui);
						}
				});
		/*****Dropable Area Event Implementing ends here *****/
		/***** Properties changes implementation *****/
			$("input.pop").change(function(){
				
				if(activeElement=="panel")
				{
					var name=$("#name").val();
					var xpos=$("#xpos").val();
					var ypos=$("#ypos").val();
					var width=$("#width").val();
					var height=$("#height").val();
					var text=$("#text").val();
					$("#name").val();
					$("#xpos").val(xpos);
					$("#ypos").val(ypos);
					$("#width").val(width);
					$("#height").val(height);
					panelActive.attr("data-name",name);
					$("#text").val(text);
					$("#icont").val(text);
					panelActive.children('div.drpanel').children('p').html(text);
					$("#idname").val(name);
					
					if(parseInt(xpos)<0 || parseInt(xpos)+panelActive.outerWidth(true)>=613) 
					{
						alert("Invalid Position");
						$("#xpos").val(panelActive.offset().left-dar-1); 
						return;
					
					}
					else
					{
						panelActive.css({"left":parseInt(xpos)+"px"});
					}
					if(parseInt(ypos)<0 || parseInt(ypos)+panelActive.outerHeight(true)>=488) 
					{
						alert("Invalid Position");
						$("#ypos").val(panelActive.offset().top-datr-1); 
						return;
					
					}
					else
					{
						panelActive.css({"top":parseInt(ypos)+"px"});
					}
					if(parseInt(ypos)+parseInt(height)>488) 
					{
						alert("Greater Height");
						$("#height").val(panelActive.outerHeight(true));
						return;
					}
					else
					{
						panelActive.height(parseInt(height));
						panelActive.children('div.drpanel').height(parseInt(height));
					}
					if(parseInt(xpos)+parseInt(width)>613)
					{
						alert("Greater Width");
						$("#width").val(panelActive.outerWidth(true));
						return;
						
					}
					else
					{
						
						panelActive.width(parseInt(width));
						panelActive.children('div.drpanel').width(parseInt(width));
						
					}
				}
				else if(activeElement=="text")
				{
					var indx=textActive.attr('id').split('tdrag')[1];
					
					var name=$("#name").val();
					var xpos=$("#xpos").val();
					var ypos=$("#ypos").val();
					var width=$("#width").val();
					var height=$("#height").val();
					var text=$("#text").val();
					$("#name").val(name);
					$("#xpos").val(xpos);
					$("#ypos").val(ypos);
					$("#width").val(width);
					$("#height").val(height);
					$("#text").val(text);
					$("#ticont").val(text);
					textActive.attr("data-name",name);
					$("#txt"+indx).text(text); 
					textActive.height(height);
					textActive.width(width);
					$("#text"+indx).width(width);
					$("#text"+indx).height(height);
					textActive.css({"left":parseInt(xpos)+"px","top":parseInt(ypos)+"px"});
				}
			});
		/***** style changes implementation *****/
			$("#fontface").change(function(){
				if($(this).val() !="-1")
					textActive.children('div.textel').find('p').css({"font-family":$(this).val()});
			
			});
			$("#fontsize").change(function(){
				if($(this).val() !="-1")
						textActive.children('div.textel').find('p').css({"font-size":$(this).val()+"px"});
			});		
			
			$("#fontstyle").change(function(){
				if($(this).val() !="-1")
					if($(this).val()=="Bold")
					{
						textActive.children('div.textel').find('p').css({"font-weight":$(this).val()});
					}
					else
					{
						textActive.children('div.textel').find('p').css({"font-weight":"normal"});
						textActive.children('div.textel').find('p').css({"font-style":"normal"});
						textActive.children('div.textel').find('p').css({"font-style":$(this).val()});
					}
			});	
		
		$("#fontcolor").change(function(){
			if($(this).val() !="-1")							
				textActive.children('div.textel').find('p').css({"color":"#"+$(this).val()});
		});	
		$("#align").change(function(){
			if($(this).val() !="-1")
				textActive.children('div.textel').find('p').css({"text-align":$(this).val()});
		});
		$("#radius").change(function(){
			if($(this).val() !="-1")
				panelActive.children('div.drpanel').css({"border-radius":$(this).val()+"px"});
			
		});
		$("#bcolor").change(function(){
			if($(this).val() !="-1")
				panelActive.children('div.drpanel').css({"outline-color":"#"+$(this).val()});
			
		});
		$("#bgcolor").change(function(){
			if($(this).val() !="-1")
			{
				
				if(activeElement=="panel")
				{
					panelActive.children('div.drpanel').css({"background":"#"+$(this).val()});
				}
				else if(activeElement=="text")
				{
					textActive.children('div.textel').css({"background":"#"+$(this).val()});
				}
			}
		});
		
		
		/***** clcik method implementation *****/
			function showPopu(curObj)
			{
				
				//var tlp=curObj.position();.left;
				//var ttp=curObj.offset().top;
				$(".textpoup").hide();
				var tlp=$("#"+curObj.attr('id')).position().left;
				var ttp=$("#"+curObj.attr('id')).position().top;
				var tW=curObj.width();
				$("#idname").val(curObj.attr('data-name'));
				$("#icont").val(curObj.children('div.drpanel').children('p').text());
				if(tlp+10+tW+panelPopupWidth>editAreaWidth)
				{
					var lpos=tlp+10+tW+panelPopupWidth-editAreaWidth;
					if(ttp-panelPopupHeight>=1)
					{
						$(".panelpoup").css({"display":"block","left":(tlp+10+tW-lpos),"top":ttp-panelPopupHeight});
					}
					else if(ttp+panelPopupHeight+curObj.outerHeight(true)<=484)
					{
						$(".panelpoup").css({"display":"block","left":(tlp+10+tW-lpos),"top":ttp+curObj.outerHeight(true)});
					}
					else
					{
						$(".panelpoup").css({"display":"block","left":(tlp+10+tW-lpos),"top":ttp+20});
					}
				}
				else
				{
					$(".panelpoup").css({"display":"block","left":tlp+10+tW,"top":ttp-10});	
				}
			}
			
			function textShowPop(curObj)
			{
				$(".panelpoup").hide(); 
				var str=curObj.attr('id');
				var indx=str.split('tdrag')[1];
				//var tlp=curObj.offset().left;
				//var ttp=curObj.offset().top;
				var tlp=$("#"+str).position().left;
				var ttp=$("#"+str).position().top;
				var tW=curObj.width();
				var h=$(".textpoup").height();
				$("#tidname").val(curObj.attr('data-name'));
				$("#ticont").val($("#txt"+indx).text());
				
				if(tlp+10+tW+textPopupWidth>editAreaWidth)
				{
					var lpos=tlp+10+tW+textPopupWidth-editAreaWidth;
					if(ttp-textPopupHeight>=1)
					{
						$(".textpoup").css({"display":"block","left":(tlp+10+tW-lpos),"top":ttp-panelPopupHeight});
					}
					else if(ttp+textPopupHeight+curObj.outerHeight(true)<=484)
					{
						$(".textpoup").css({"display":"block","left":(tlp+10+tW-lpos),"top":ttp+curObj.outerHeight(true)});
					}
					else
					{
						$(".textpoup").css({"display":"block","left":(tlp+10+tW-lpos),"top":ttp+20});
					}
				}
				else
				{
					$(".textpoup").css({"display":"block","left":tlp+10+tW,"top":(ttp-h/2)});	
				}
				//$(".textpoup").css({"display":"block","left":tlp+10+tW,"top":(ttp-h/2)});	
			}
			st=0;
			function panelClick(curObj)
			{
				var npId=curObj.attr('id');
				var indx=npId.split('drag')[1];
				st=1;
				panelActive=curObj;
				activeElement="panel";
				$(".content").css({"display":"none"});
				$(".panelhide").css({"display":"none"});
				$(".pst").css({"display":"block"});
				$("#droparea").find("div.addborder").removeClass("addborder");
				curObj.children("div.drpanel").addClass("addborder");
				var lp=curObj.position().left;
				var tp=curObj.position().top;
				
				/***** setting properties values *****/
					
					$("#name").val(curObj.attr('data-name'));
					$("#xpos").val(lp);
					$("#ypos").val(tp);
					$("#width").val(curObj.outerWidth(true));
					$("#height").val(curObj.outerHeight(true));
					$("#text").val($("#ptext"+indx).text()); 
					var rgbString = curObj.css("background-color"); 
					var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
					delete (parts[0]);
					for (var i = 1; i <= 3; ++i) {
   							 parts[i] = parseInt(parts[i]).toString(16);
   							 if (parts[i].length == 1) parts[i] = '0' + parts[i];
					} 
					var hexString =parts.join('').toUpperCase();
					$('#bgcolor option[value="' + hexString + '"]').attr("selected", "selected");
			}
			
			pclick=0;
			$("#droparea").bind('click',function(e){
					e.stopPropagation();
					/*if(st==0)
					{*/
						$("#droparea").find("div.addborder").removeClass("addborder");
					/*}
					
					st=0;*/
					
						$(".panelpoup").css({"display":"none"});
						$(".textpoup").css({"display":"none"});
						$(".propblock").css({"display":"block"});
						resetting();
					
			});
			$(".panelpoup").click(function(e){
				e.stopPropagation();					   
				$(".panelpoup").css({"display":"block"});						   
			});
			
			$(".textpoup").click(function(e){
				e.stopPropagation();					   
				$(".textpoup").css({"display":"block"});						   
			});
		/***** Reset properties & style *****/
			function resetting()
			{
					$("#name").val("");
					$("#xpos").val("");
					$("#ypos").val("");
					$("#width").val("");
					$("#height").val("");
					$("#text").val("");
			}
			resetting();
				
		/***** popup id changes *****/
			$("#idname").change(function(e){
										 
				if(activeElement=="panel")
				{
					$("#name").val($(this).val());
					panelActive.attr('data-name',$(this).val());
				}
		 	});
			$("#icont").change(function(e){
				
					$("#text").val($(this).val());
					$("#ptext"+panelActive.attr('id').split('drag')[1]).text($(this).val());
					//panelActive.children('p').text($(this).val());
				
		 	});
			$("#tidname").change(function(e){
				
					$("#name").val($(this).val());
					textActive.attr('data-name',$(this).val());
				
		 	});
			$("#ticont").change(function(e){
				
					$("#text").val($(this).val());
					//alert(textActive.attr('id'));
					$("#txt"+textActive.attr('id').split('tdrag')[1]).text($(this).val());
				
		 	});
		/***** Layer click event ******/
			
			$(".menuclick li").bind('click',function(e){
					//alert($(this).attr('id'));
					/*var indx=$(this).attr('id'); 
					
					e.stopPropagation();
					var str=panelActive.attr('id');	
										 
					 var $element = $("#"+str).closest('.zclass');
					 
    				var $siblings = $element.siblings();
    				var zIndexes = $siblings.map(function() {
								if($(this).attr('id')=='nops' || $(this).attr('id')=='nots')
								{
									
								}
								else
        							return $(this).css('z-index');
								
    					});
					var zIndex = parseInt($element.css('z-index'));
					
					switch(indx) {
        					case 'p1':
           						 zIndex = Array.max(zIndexes) + 1;
            					 break;
        					case 'p3':
								zIndex-=1;
								break;
       					    case 'p2':
								zIndex+=1;
								break;
       					    case 'p4':
           						 zIndex = Array.min(zIndexes) - 1;
           						 break;
    				}
					
					 if (zIndex === -1) {
       						 zIndex = 0;
       						
   						 }
    					if(zIndex>=zcounter)
						{
							
							zIndex=zcounter;
						}
   						 $element.css({zIndex:zIndex});
    					 return false;*/
					if(zcounter>=2)
					{
						var el;
						var indx=$(this).index();
						var str=panelActive.attr('id');
						var slno=parseInt(str.split('drag')[1]);
						var curz=parseInt($("#drag"+slno).css("z-index"));
						
						if(indx==3)
						{
							$('*').each(function(){
									if($(this).css('z-index') == 1) {
											el=$(this);
									}
								});
								
								$("#drag"+slno).css("z-index",1);
								$("#"+el.attr('id')).css("z-index",curz);
						}
						else if(indx==2)
						{
							if(curz!=1)
							{
									$('*').each(function(){
									if($(this).css('z-index') == curz-1) {
											el=$(this);
									}
								});
								
								$("#drag"+slno).css("z-index",curz-1);
								$("#"+el.attr('id')).css("z-index",curz);
							}
						}
						else if(indx==1)
						{
							if(curz!=zcounter)
							{
							   
								$('*').each(function(){
										if($(this).css('z-index') == curz+1) {
												el=$(this);
										}
									});
								$("#drag"+slno).css("z-index",curz+1);
								$("#"+el.attr('id')).css("z-index",curz);
							}
						}
						if(indx==0)
						{
							
							$('*').each(function(){
									if($(this).css('z-index') == zcounter) {
											el=$(this);
									}
								});
								$("#drag"+slno).css("z-index",zcounter);
								$("#"+el.attr('id')).css("z-index",curz);
						}
					}
			});
			
			/****textbox ****/
				$(".tmenuclick li").bind('click',function(e){
					//alert($(this).attr('id'));
					/*var indx=$(this).attr('id'); 
					
					e.stopPropagation();
					var str=textActive.attr('id');	
										 
					 var $element = $("#"+str).closest('.zclass');
					 
    				var $siblings = $element.siblings();
    				var zIndexes = $siblings.map(function() {
								if($(this).attr('id')=='nops' || $(this).attr('id')=='nots')
								{
									
								}
								else
        							return $(this).css('z-index');
								
    					});
					var zIndex = parseInt($element.css('z-index'));
					
					switch(indx) {
        					case 'tp1':
           						 zIndex = Array.max(zIndexes) + 1;
            					 break;
        					case 'tp3':
								zIndex-=1;
								break;
       					    case 'tp2':
								zIndex+=1;
								 break;
       					    case 'tp4':
           						 zIndex = Array.min(zIndexes) - 1;
           						 break;
    				}
					
					 if (zIndex === -1) {
       						 zIndex = 0;
       						
   						 }
    					if(zIndex>=zcounter)
						{
							
							zIndex=zcounter;
						}
   						 $element.css({zIndex:zIndex});
    					 return false;*/
					if(zcounter>=2)
					{
						
						var el;
						var indx=$(this).index();
						var str=textActive.attr('id');
						var slno=parseInt(str.split('tdrag')[1]);
						var curz=parseInt($("#tdrag"+slno).css("z-index"));
						
						if(indx==3)
						{
							
							$('*').each(function(){
									if($(this).css('z-index') == 1) {
											el=$(this);
									}
								});
								
								$("#tdrag"+slno).css("z-index",1);
								$("#"+el.attr('id')).css("z-index",curz);
						}
						else if(indx==2)
						{
							if(curz!=1)
							{
									$('*').each(function(){
									if($(this).css('z-index') == curz-1) {
											el=$(this);
									}
								});
								
								$("#tdrag"+slno).css("z-index",curz-1);
								$("#"+el.attr('id')).css("z-index",curz);
							}
						}
						else if(indx==1)
						{
							if(curz!=zcounter)
							{
							   
								$('*').each(function(){
										if($(this).css('z-index') == curz+1) {
												el=$(this);
										}
									});
								$("#tdrag"+slno).css("z-index",curz+1);
								$("#"+el.attr('id')).css("z-index",curz);
							}
						}
						if(indx==0)
						{
							
							$('*').each(function(){
									if($(this).css('z-index') == zcounter) {
											el=$(this);
									}
								});
								$("#tdrag"+slno).css("z-index",zcounter);
								$("#"+el.attr('id')).css("z-index",curz);
						}
					}
			});
				
			Array.max = function(array) {
   					 return Math.max.apply(Math, array);
			};

			Array.min = function(array) {
    				return Math.min.apply(Math, array);
				};
		/***** Arrow Key Implementation *****/		
			$("html").keydown(function(event){
					
				if(activeElement=="panel")
				{
					if(event.which == "37")
					{
						panelActive.stop().animate({"left" : "-=1px"});
						$("#xpos").val(Math.round(panelActive.position().left));
						$("#ypos").val(Math.round(panelActive.position().top));
					}
					if(event.which == "39")
					{
						panelActive.stop().animate({"left" : "+=1px"});
						$("#xpos").val(Math.round(panelActive.position().left));
						$("#ypos").val(Math.round(panelActive.position().top));
					}
					if(event.which == "38")
					{
						panelActive.stop().animate({"top" : "-=1px"});
						$("#xpos").val(Math.round(panelActive.position().left));
						$("#ypos").val(Math.round(panelActive.position().top));
					}
					if(event.which == "40")
					{
						panelActive.stop().animate({"top" : "+=1px"});
						$("#xpos").val(Math.round(panelActive.position().left));
						$("#ypos").val(Math.round(panelActive.position().top));
					}
				}
				else if(activeElement=="text")
				{
					if(event.which == "37")
					{
						textActive.stop().animate({"left" : "-=1px"});
						$("#xpos").val(Math.round(textActive.position().left));
						$("#ypos").val(Math.round(textActive.position().top));
					}
					if(event.which == "39")
					{
						textActive.stop().animate({"left" : "+=1px"});
						$("#xpos").val(Math.round(textActive.position().left));
						$("#ypos").val(Math.round(textActive.position().top));
					}
					if(event.which == "38")
					{
						textActive.stop().animate({"top" : "-=1px"});
						$("#xpos").val(Math.round(textActive.position().left));
						$("#ypos").val(Math.round(textActive.position().top));
					}
					if(event.which == "40")
					{
						textActive.stop().animate({"top" : "+=1px"});
						$("#xpos").val(Math.round(textActive.position().left));
						$("#ypos").val(Math.round(textActive.position().top));
					}
				}
			});
			
			/***** Saving & Loading Implementation *****/
				function hexColor(rgbString)
				{
							//var rgbString = $("#drop"+panelCounter).css("background-color"); 
							var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
							delete (parts[0]);
							for (var i = 1; i <= 3; ++i) {
								 parts[i] = parseInt(parts[i]).toString(16);
								 if (parts[i].length == 1) parts[i] = '0' + parts[i];
							} 
							var hexString =parts.join('').toUpperCase();
							return hexString;
				}
				/***** Saving *****/
					var panelData = {
								panel: []
						};
					var textboxData = {
								textbox: []
						};
					function svaing()
					{
						$(".panelpoup").hide();
						$(".textpoup").hide();
						/***** Setting Json Data starts****/
						panelData.panel=[];
						textboxData.textbox=[];
						for(i=1;i<=panelCounter;i++)
						 {
								 //alert($("#drag"+i).parent().attr('id'));
							panelData.panel.push({ 
								"dragid"			: "drag"+i,
								"dropid"			: "drop"+i, 
								"contentid"			: "ptext"+i, 
								"name"			: $("#drag"+i).attr("data-name"),
								"x"				: $("#drag"+i).position().left,
								"y"				: $("#drag"+i).position().top,
								"width"			: $("#drag"+i).outerWidth(true),
								"height"		: $("#drag"+i).outerHeight(true),
								"text"			: $("#ptext"+i).text(),
								"borderColor"	: $("#drop"+i).css("outline-color") ,
								"zindex"		: $("#drag"+i).css("z-index"),
								"parent"		: $("#drag"+i).parent(),
								//"borderRadius"	:	,
								"bgColor"		: hexColor($("#drop"+i).css("background-color"))
							});
						 }
						 dataTosave[0] = panelData;
						 for(i=1;i<=textCounter;i++)
						 {
							 
							textboxData.textbox.push({ 
								"dragid"			: "tdrag"+i,
								"dropid"			: "text"+i, 
								"contentid"			: "txt"+i, 
								"name"			: $("#tdrag"+i).attr("data-name"),
								"x"				: $("#tdrag"+i).position().left,
								"y"				: $("#tdrag"+i).position().top,
								"width"			: $("#tdrag"+i).outerWidth(true),
								"height"		: $("#tdrag"+i).outerHeight(true),
								"text"			: $("#txt"+i).text(),
								"borderColor"	: $("#text"+i).css("outline-color") ,
								"zindex"		: $("#tdrag"+i).css("z-index"),
								"parent"		: $("#tdrag"+i).parent(),
								"font"			: $("#txt"+i).css("font-family"),
								"size"			: $("#txt"+i).css("font-size"),
								"fonts"			: $("#txt"+i).css("font-style"),
								"fontw"			: $("#txt"+i).css("font-weight"),
								"color"			: hexColor($("#txt"+i).css("color")),
								"align"			: $("#txt"+i).css("text-align"),
								//"borderRadius"	:	,
								"bgColor"		: hexColor($("#text"+i).css("background-color"))
							});
						 }
						 dataTosave[1] = textboxData;
						/***** Setting Json Data ends****/
						$("#droparea .panelwrapper,#droparea .textwrapper").remove();
					}
					$("#save").bind('click',function(e){
						
						svaing();
					});
				/*****Loading*****/
					function loading()
					{
						/***** For Panel *****/
							for(i=0;i<panelData.panel.length;i++)
							{
								//Panel.htmlClone(panelData.panel[i].id,panelData.panel[i].x,panelData.panel[i].y,panelData.panel[i].width,panelData.panel[i].height);
								Panel.htmlClone(panelData.panel[i]);
							}
							for(i=0;i<panelData.panel.length;i++)
							{
								panelCounter=(i+1);
								$("#drag"+panelCounter).bind('click',function(e){
									e.stopPropagation();
									panelClick($(this)); 
								});
								$("#drag"+panelCounter).bind('dblclick',function(e){
									e.stopPropagation();
									showPopu($(this)); 
								});
								$( "#drag"+panelCounter).draggable({
									revert: "invalid",
									drag: function( event, ui )
									{
										panelDrag=false;
										superPanel=true;
										activeElement="panel";
										var lp=$(this).position().left;
										var tp=$(this).position().top;	
										panelXNeg=$(this).offset().left-dar;
										panelYNeg=$(this).offset().top-datr;
									/***** setting properties values *****/
										$("#name").val($(this).attr("data-name"));
										$("#xpos").val(lp);
										$("#ypos").val(tp);
										$("#width").val($(this).outerWidth(true));
										$("#height").val($(this).outerHeight(true));
										
									},
									start: function( event, ui )
									{
										tlp=$(this).offset().left-dar-1;
										ttp=$(this).offset().top-datr-1;
										$(".content").css({"display":"none"});
										$(".panelhide").css({"display":"none"});
										$(".pst").css({"display":"block"});
										$(".drpanel").removeClass('addborder');
										$(".textel").removeClass('addborder');
										$(this).children('div.drpanel').addClass('addborder');
									},
									stop: function(event, ui)
									{				
											dragElementProcess($(this), ui);
									}
								}); 
								$('#drop'+panelCounter).resizable({
									handles: 'n,e,s,w,se,sw,ne,nw',
									 start: function(e, ui) {
											rlp=$(this).parent().offset().left-dar; 
											rtp=$(this).parent().offset().top-datr; 
											
									 },	
									resize: function(e, ui) {
										
										
										
										var lp=$(this).parent().offset().left-dar; 
										var tp=$(this).parent().offset().top-datr; 
										$(this).parent().width($(this).outerWidth(true));
										$(this).parent().height($(this).outerHeight(true));
										
										
										
										$("#xpos").val(lp+$(this).position().left);
										$("#ypos").val(tp+$(this).position().top);
										$("#width").val($(this).outerWidth(true));
										$("#height").val($(this).outerHeight(true));
										
										/*** bound for width ***/																	
											if(lp+parseInt($(this).position().left)<rlp+4)
											{
												$(this).resizable( "option", "maxWidth",editAreaWidth-4);
												if(lp+parseInt($(this).position().left)<1)
												{
													$(this).resizable( "option", "maxWidth", $(this).outerWidth(true)-2);
													
												}
											}
											else if(rlp+parseInt($(this).outerWidth(true))>editAreaWidth-4)
											{
												$(this).resizable( "option", "maxWidth", $(this).outerWidth(true));
											}
											
										/*** bound for height ***/																	
											if(tp+parseInt($(this).position().top)<rtp+4)
											{
												$(this).resizable( "option", "maxHeight",editAreaHeight-22);
												if(tp+parseInt($(this).position().top)<1)
												{
													$(this).resizable( "option", "maxHeight", $(this).outerHeight(true)-22);
													
												}
											}
											else if(rtp+parseInt($(this).outerHeight(true))>editAreaHeight-22)
											{
												$(this).resizable( "option", "maxHeight", $(this).outerHeight(true));
											}
										
									} ,
									stop: function(e, ui) {
										
										var lp=$(this).parent().position().left; 
										var tp=$(this).parent().position().top;
										$(this).parent().css({"left":lp+$(this).position().left,"top":tp+$(this).position().top});
									
										
										/**** positioning for width boundation ****/
										if(lp+parseInt($(this).position().left)<=1) 
										{
											$(this).parent().css({"left":1});
											$("#xpos").val(1);
											$("#width").val($(this).outerWidth(true));
											$("#ypos").val(tp);
											$("#height").val($(this).outerHeight(true));
										}
										if(lp+parseInt($(this).position().left)+parseInt($(this).outerWidth(true))>=editAreaWidth-4) 
										{
											
											if((editAreaWidth-4-$(this).outerWidth(true))<=1)
											{
												lp=1;
											}
											else
											{
												lp=(editAreaWidth-4-$(this).outerWidth(true));
											}
											
											$(this).parent().css({"left":lp});
											$("#xpos").val(lp);
											$("#width").val($(this).outerWidth(true));
											$("#ypos").val(tp);
											$("#height").val($(this).outerHeight(true));
										}
										
										
										/**** positioning for height boundation ****/
										if(tp+parseInt($(this).position().top)<=1) 
										{
											$(this).parent().css({"top":19});
											$("#xpos").val(1);
											$("#width").val($(this).outerWidth(true));
											$("#ypos").val(19);
										}
										if(tp+parseInt($(this).position().top)+parseInt($(this).outerHeight(true))>=editAreaHeight-20) 
										{
											
											if((editAreaHeight-22-$(this).outerHeight(true))<=1)
											{
												tp=19;
												$("#ypos").val(19);
											}
											else
											{
												tp=(editAreaHeight-22-$(this).outerHeight(true));
											}
											
											$(this).parent().css({"top":tp});
											$("#xpos").val(lp);
											$("#width").val($(this).outerWidth(true));
											$("#ypos").val(tp);
											$("#height").val($(this).outerHeight(true));
										}
										
										$(this).css({"left":0,"top":0});
										$(this).resizable( "option", "maxWidth",700);
										$(this).resizable( "option", "maxHeight",700);
										
									}
							   });
								
								$("#drop"+panelCounter).droppable({
									revert: "invalid",
									drop: function(event, ui)
									{	
										dropElProcess($(this),ui);			
									}
								}); 
							}
							for(i=0;i<panelData.panel.length;i++)
							{
								//alert("source"+panelData.panel[i].dropid);
								//alert("target"+panelData.panel[i].parent.attr('id'));
								if(panelData.panel[i].parent.attr('id')!="droparea")
								{
									$("#"+panelData.panel[i].dragid).appendTo($("#"+panelData.panel[i].parent.attr('id'))); 
								}
							}
						/*****For TextBox *****/
							for(i=0;i<textboxData.textbox.length;i++)
							{
								Textbox.htmlClone(textboxData.textbox[i]);
							}
							for(i=0;i<textboxData.textbox.length;i++)
							{
									textCounter=(i+1);
									$("#tdrag"+textCounter).bind('click',function(e){
											e.stopPropagation();
											textClick($(this)); 
									});
									$("#tdrag"+textCounter).bind('dblclick',function(e){
											e.stopPropagation();
											textShowPop($(this)); 
										});
										$(".textel").change(function(){
												$("#text").val($(this).val());
												$("#ticont").val($(this).val());
										});
										textActive=$("#tdrop"+textCounter);
									
										$("#tdrag"+textCounter).draggable({
												revert: "invalid",
												drag: function( event, ui )
												{
												
													superText=true;
													textDrag=true;
													panelDrag=false;
													activeElement="text";
													var lp=$(this).offset().left-dar;
													var tp=$(this).offset().top-datr;
								
													panelXNeg=$(this).offset().left-dar;
													panelYNeg=$(this).offset().top-datr;
								
													
												/***** setting properties values *****/
									
													$("#name").val($(this).attr("data-name"));
													$("#xpos").val(lp);
													$("#ypos").val(tp);
													$("#width").val($(this).outerWidth(true));
													$("#height").val($(this).outerHeight(true));
													$("#text").val($("#txt"+$(this).attr('id').split('tdrag')[1]).text());
												},
												start: function( event, ui )
												{
													$(".content").css({"display":"block"});
													$(".panelhide").css({"display":"block"});
													$(".pst").css({"display":"none"});
													$(".drpanel").removeClass('addborder');
													$(".textel").removeClass('addborder');
													$(this).children('div.textel').addClass('addborder');
													superText=true;
													textDrag=true;
													
													activeElement="text";
													var lp=$(this).offset().left-dar;
													var tp=$(this).offset().top-datr;
													
												},
												stop: function(event, ui)
												{	
														superText=false;
														dragElementProcess($(this),ui);
												}
										}); 
										/**resize**/
										$('#text'+textCounter).resizable({
											handles: 'n,e,s,w,se,sw,ne,nw',
											 start: function(e, ui) {
													rlp=$(this).parent().offset().left-dar; 
													rtp=$(this).parent().offset().top-datr; 
													
											 },	
											resize: function(e, ui) {
												var lp=$(this).parent().position().left; 
												var tp=$(this).parent().position().top; 
												$(this).parent().width($(this).outerWidth(true));
												$(this).parent().height($(this).outerHeight(true));
												
												 /*** bound for width ***/																	
													if(lp+parseInt($(this).position().left)<rlp+4)
													{
														$(this).resizable( "option", "maxWidth",editAreaWidth-4);
														if(lp+parseInt($(this).position().left)<1)
														{
															$(this).resizable( "option", "maxWidth", $(this).outerWidth(true)-2);
															
														}
													}
													else if(rlp+parseInt($(this).outerWidth(true))>editAreaWidth-4)
													{
														$(this).resizable( "option", "maxWidth", $(this).outerWidth(true));
													}
												/*** bound for height ***/																	
													if(tp+parseInt($(this).position().top)<rtp+4)
													{
														$(this).resizable( "option", "maxHeight",editAreaHeight-22);
														if(tp+parseInt($(this).position().top)<1)
														{
															$(this).resizable( "option", "maxHeight", $(this).outerHeight(true)-22);
															
														}
													}
													else if(rtp+parseInt($(this).outerHeight(true))>editAreaHeight-22)
													{
														$(this).resizable( "option", "maxHeight", $(this).outerHeight(true));
													}
													
												$("#xpos").val(lp);
												$("#ypos").val(tp);
												$("#width").val($(this).outerWidth(true));
												$("#height").val($(this).outerHeight(true));
												
											},
											stop: function(e, ui) {
												
												var lp=$(this).parent().position().left; 
												var tp=$(this).parent().position().top;
												$(this).parent().css({"left":lp+$(this).position().left,"top":tp+$(this).position().top});
												
												/**** positioning for width boundation ****/
												if(lp+parseInt($(this).position().left)<=1) 
												{
													$(this).parent().css({"left":1});
													$("#xpos").val(1);
													$("#width").val($(this).outerWidth(true));
													$("#ypos").val(tp);
													$("#height").val($(this).outerHeight(true));
												}
												if(lp+parseInt($(this).position().left)+parseInt($(this).outerWidth(true))>=editAreaWidth-4) 
												{
													
													if((editAreaWidth-4-$(this).outerWidth(true))<=1)
													{
														lp=1;
													}
													else
													{
														lp=(editAreaWidth-4-$(this).outerWidth(true));
													}
													
													$(this).parent().css({"left":lp});
													$("#xpos").val(lp);
													$("#width").val($(this).outerWidth(true));
													$("#ypos").val(tp);
													$("#height").val($(this).outerHeight(true));
												}
												 
												 /**** positioning for height boundation ****/
												if(tp+parseInt($(this).position().top)<=1) 
												{
													$(this).parent().css({"top":19});
													$("#xpos").val(1);
													$("#width").val($(this).outerWidth(true));
													$("#ypos").val(19);
												}
												if(tp+parseInt($(this).position().top)+parseInt($(this).outerHeight(true))>=editAreaHeight-20) 
												{
													
													if((editAreaHeight-22-$(this).outerHeight(true))<=1)
													{
														tp=19;
														$("#ypos").val(19);
													}
													else
													{
														tp=(editAreaHeight-22-$(this).outerHeight(true));
													}
													
													$(this).parent().css({"top":tp});
													$("#xpos").val(lp);
													$("#width").val($(this).outerWidth(true));
													$("#ypos").val(tp);
													$("#height").val($(this).outerHeight(true));
												}
												$(this).css({"left":0,"top":0});
												$(this).resizable( "option", "maxWidth",700);
												$(this).resizable( "option", "maxHeight",700);
											} 
																		
										 });
							}
							for(i=0;i<textboxData.textbox.length;i++)
							{
								
								if(textboxData.textbox[i].parent.attr('id')!="droparea")
								{
									$("#"+textboxData.textbox[i].dragid).appendTo($("#"+textboxData.textbox[i].parent.attr('id'))); 
								}
							}
						
						panelData.panel=[];
						textboxData.textbox=[];
					}
					$("#load").bind('click',function(e){
							loading();
					});
	}); //end of elements

});