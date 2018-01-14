var Shop = new Array("緣食堂", "吉利", "精緻自助餐", "大珍咖哩");
var Name = new Array("建均", "宣哥", "俊儀", "承憲", "嘉翔", "社長");
function Random() {
	var x = Math.floor((Math.random() * 3));
	var text = "123";
	switch (x) {
		case 0:
		   text = "問" + name(Name) + "ㄚ~";
		   break;
		case 1:
		   text = "吃" + shop(Shop) + "啦~";
		   break;
		default:
		   text = "吃學餐囉，呵呵~";
		   break;
	}
    document.getElementById("demo").innerHTML = text;
    Speak(text);
}
function name(Name) {
	var x = Math.floor((Math.random() * 5));
	return Name[x];
}
function shop(Shop) {
	var x = Math.floor((Math.random() * 4));
	return Shop[x]
}
document.write('<script src="speak.js"></script>');