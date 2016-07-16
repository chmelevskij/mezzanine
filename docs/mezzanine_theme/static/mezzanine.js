$(function(){
$('#toggle').click(function(){
	$(this).toggleClass('close');
	$('div.bodywrapper').toggleClass('fullscreen');
	$('div.sphinxsidebar').toggleClass('close');
})
});
