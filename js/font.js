function mob(){
	var iScale = 1;
	iScale = iScale / window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+iScale+',minimum-scale='+iScale+',maximum-scale='+iScale+',user-scalable=no" />')
	var iWidth = document.documentElement.clientWidth;
	iWidth = iWidth > 1620 ? 1620 : iWidth;
	document.getElementsByTagName('html')[0].style.fontSize = iWidth / 16 + 'px';	
}
function pc(){
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+1+',minimum-scale='+1+',maximum-scale='+1+',user-scalable=no" />')
	var iWidth = document.documentElement.clientWidth;
	iWidth = iWidth > 640 ? 640 : iWidth;
	document.getElementsByTagName('html')[0].style.fontSize = iWidth / 16 + 'px';
	console.log(0)	
}
function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		mob();
	} else {
		pc();
	}
}

browserRedirect();