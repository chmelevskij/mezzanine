$(function(){
var arrow = $('div#toggle span');
$('#toggle').click(function(){
	$(this).toggleClass('close');
	$('div.bodywrapper').toggleClass('fullscreen');
	$('div.sphinxsidebar').toggleClass('close');
	if(arrow.html() === '⪡'){
		arrow.html('⪢');
	}else{
		arrow.html('⪡');
	}
})
});
