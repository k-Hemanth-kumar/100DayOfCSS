// var droppedFiles = false;
// var fileName = '';
// var $dropzone = $('.dropzone');
// var $button = $('.upload-btn');
// var uploading = false;
// var $syncing = $('.syncing');
// var $done = $('.done');
// var $bar = $('.bar');
// var timeOut;

// $dropzone.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
// 	e.preventDefault();
// 	e.stopPropagation();
// })
// 	.on('dragover dragenter', function() {
// 	$dropzone.addClass('is-dragover');
// })
// 	.on('dragleave dragend drop', function() {
// 	$dropzone.removeClass('is-dragover');
// })
// 	.on('drop', function(e) {
// 	droppedFiles = e.originalEvent.dataTransfer.files;
// 	fileName = droppedFiles[0]['name'];
// 	$('.filename').html(fileName);
// 	$('.dropzone .upload').hide();
// });

// $button.bind('click', function() {
// 	startUpload();
// });

// $("input:file").change(function (){
// 	fileName = $(this)[0].files[0].name;
// 	$('.filename').html(fileName);
// 	$('.dropzone .upload').hide();
// });

// function startUpload() {
// 	if (!uploading && fileName != '' ) {
// 		uploading = true;
// 		$button.html('Uploading...');
// 		$dropzone.fadeOut();
// 		$syncing.addClass('active');
// 		$done.addClass('active');
// 		$bar.addClass('active');
// 		timeoutID = window.setTimeout(showDone, 3200);
// 	}
// }

// function showDone() {
// 	$button.html('Done');
// }

var droppedFiles =false;
var fileName='';
var dropzone=document.querySelector('.drop-zone');
var btn=document.querySelector('.upload-btn');
var syncing=document.querySelector('.syncing')
var done=document.querySelector('.done');
var bar=document.querySelector('.bar');
var upload=false;
dropzone.addEventListener("drag dragstart dragend dragover dragenter dragleave drop",(e)=>{
	e.preventDefault();
	e.stopPropagation();
})
dropzone.addEventListener('dragover dragenter',()=>{
	dropzone.classList.add('is-dragover')
});
dropzone.addEventListener('dragleave dragend drop',()=>{
	dropzone.classList.remove('is-dragover')
})
dropzone.addEventListener('drop',function(e){
	droppedFiles=e.dataTransfer.files;
	fileName=droppedFiles[0]['name'];
	document.querySelector('.filename').innerHTML=fileName;
})
btn.addEventListener('click',(e)=>{
	startUpload();
})
//document.querySelector("input:file").cha