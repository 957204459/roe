window.onload=function(){editor.setOpt({emotionLocalization:false});emotion.SmileyPath=editor.options.emotionLocalization===true?"images/":"http://img.baidu.com/hi/";emotion.SmileyBox=createTabList(emotion.tabNum);emotion.tabExist=createArr(emotion.tabNum);initImgName();initEvtHandler("tabHeads")};function initImgName(){for(var e in emotion.SmilmgName){var t=emotion.SmilmgName[e],i=emotion.SmileyBox[e],o="";if(i.length)return;for(var a=1;a<=t[1];a++){o=t[0];if(a<10)o=o+"0";o=o+a+".gif";i.push(o)}}}function initEvtHandler(e){var t=$G(e);for(var i=0,o=0;i<t.childNodes.length;i++){var a=t.childNodes[i];if(a.nodeType==1){domUtils.on(a,"click",function(e){return function(){switchTab(e)}}(o));o++}}switchTab(0);$G("tabIconReview").style.display="none"}function InsertSmiley(e,t){var i={src:editor.options.emotionLocalization?editor.options.UEDITOR_HOME_URL+"dialogs/emotion/"+e:e};i._src=i.src;editor.execCommand("insertimage",i);if(!t.ctrlKey){dialog.popup.hide()}}function switchTab(e){autoHeight(e);if(emotion.tabExist[e]==0){emotion.tabExist[e]=1;createTab("tab"+e)}var t=$G("tabHeads").getElementsByTagName("span"),i=$G("tabBodys").getElementsByTagName("div"),o=0,a=t.length;for(;o<a;o++){t[o].className="";i[o].style.display="none"}t[e].className="focus";i[e].style.display="block"}function autoHeight(e){var t=dialog.getDom("iframe"),i=t.parentNode.parentNode;switch(e){case 0:t.style.height="380px";i.style.height="392px";break;case 1:t.style.height="220px";i.style.height="232px";break;case 2:t.style.height="260px";i.style.height="272px";break;case 3:t.style.height="300px";i.style.height="312px";break;case 4:t.style.height="140px";i.style.height="152px";break;case 5:t.style.height="260px";i.style.height="272px";break;case 6:t.style.height="230px";i.style.height="242px";break;default:}}function createTab(e){var t="?v=1.1",i=$G(e),o=emotion.SmileyPath+emotion.imageFolders[e],a=11/2,n=iHeight=35,s=3,r=emotion.imageCss[e],l=emotion.imageCssOffset[e],c=['<table class="smileytable">'],m=0,h=emotion.SmileyBox[e].length,g=11,p,d,u,y,b,f;for(;m<h;){c.push("<tr>");for(var v=0;v<g;v++,m++){p=emotion.SmileyBox[e][m];if(p){d=o+p+t;u=o+p;y=v<a?0:1;b=l*m*-1-1;f=emotion.SmileyInfor[e][m];c.push('<td  class="'+r+'"   border="1" width="'+s+'%" style="border-collapse:collapse;" align="center"  bgcolor="transparent" onclick="InsertSmiley(\''+u.replace(/'/g,"\\'")+"',event)\" onmouseover=\"over(this,'"+d+"','"+y+'\')" onmouseout="out(this)">');c.push("<span>");c.push('<img  style="background-position:left '+b+'px;" title="'+f+'" src="'+emotion.SmileyPath+(editor.options.emotionLocalization?'0.gif" width="':'default/0.gif" width="')+n+'" height="'+iHeight+'"></img>');c.push("</span>")}else{c.push('<td width="'+s+'%"   bgcolor="#FFFFFF">')}c.push("</td>")}c.push("</tr>")}c.push("</table>");c=c.join("");i.innerHTML=c}function over(e,t,i){e.style.backgroundColor="#ACCD3C";$G("faceReview").style.backgroundImage="url("+t+")";if(i==1)$G("tabIconReview").className="show";$G("tabIconReview").style.display="block"}function out(e){e.style.backgroundColor="transparent";var t=$G("tabIconReview");t.className="";t.style.display="none"}function createTabList(e){var t={};for(var i=0;i<e;i++){t["tab"+i]=[]}return t}function createArr(e){var t=[];for(var i=0;i<e;i++){t[i]=0}return t}