window.onload=function(){
	
	$('#autoplay').addClass('autoplay');
	var play=true;
	
		$('#autoplay').on('click',function(){
			play=!true;
			if(play==!true){
				$(this).removeClass('autoplay');
				}	
			else{
				$('#autoplay').addClass('autoplay');
			}
		},false)
	
}