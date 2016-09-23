var chess = document.getElementById('chess');
var context = chess.getContext('2d');
var me = true;
var over = false;
//用来存储棋盘上的位置
var chessBoard = [];
for(var i=0;i<15;i++){
	chessBoard[i]=[];
	for(var j=0;j<15;j++){
		chessBoard[i][j]=0;//初始化 没有落子的地方是0
	}
};

//赢法术组
var wins=[]
for(var i=0;i<15;i++){
	chessBoard[i]=[];
	for(var j=0;j<15;j++){
		chessBoard[i][j]=0;
	}
}
for(var i=0;i<15;i++){
	wins[i]=[];
	for (var j=0;j<15;j++){
		wins[i][j]=[];
	}
}
var count = 0; //赢法种类索引

//横线的赢法
for( var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i][j+k][count] = true;
		}
		count++;
	}
}
//竖线的赢法
for( var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[j+k][i][count] = true;
		}
		count++;
	}
}
// 斜线赢法
for( var i=0;i<11;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j+k][count] = true;
		}
		count++;
	}
}
// 反斜线赢法
for( var i=0;i<11;i++){
	for(var j=14;j>3;j--){
		for(var k=0;k<5;k++){
			wins[i+k][j-k][count] = true;
		}
		count++;
	}
}

//赢法统计数组
var myWin = [];
var comWin=[];

for(var i=0;i<count;i++){
	myWin[i]=0;
	comWin[i]=0;
}






//画水印（背景）
var logo = new Image();
logo.src = "img/logo.png"
logo.onload = function(){
	context.drawImage(logo,0,0,450,450);
	drawChessBoard();
}
var drawChessBoard = function(){
	//这是棋盘
	context.strokeStyle="#BFBFBF"
	for(var i=0;i<15;i++){
	context.moveTo(15+i*30,15);
	context.lineTo(15+i*30,435);	
	context.moveTo(15,15+i*30);
	context.lineTo(435,15+i*30);	
	context.stroke();
	}
}

var oneStep = function(i,j,me){
	context.beginPath();
	context.arc(15+i*30,15+j*30,13,0,2*Math.PI)
	context.closePath();
	
	//这是棋子渐变色
	var gradient = context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0)
	if(me){
		gradient.addColorStop(0,"#0A0A0A")
		gradient.addColorStop(1,"#636766")
	}
	else{
		gradient.addColorStop(0,"#D1D1D1")
		gradient.addColorStop(1,"#F9F9F9")
	}
	context.fillStyle=gradient;
	context.fill();
}

chess.onclick = function(e){
	 if(over){
	 	return;
	 }
	 
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x/30);
	var j = Math.floor(y/30);
	if(chessBoard[i][j] == 0){//没有落子的地方才可以落子
		oneStep(i,j,me);
		if(me){
			chessBoard[i][j]=1;//落黑子是1
		}
		else{
			chessBoard[i][j]=2;//落白字是2
		}
		me = !me;
		for(var k=0;k<count;k++){
			if(wins[i][j][k]){
				myWin[k]++;
				comWin[k]=6;
				if(myWin[k]==5){
					window.alert("你赢了");
					over = true;
				}				
			}
		}
	}	
}

