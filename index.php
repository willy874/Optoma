<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'meta.php';?>
    <title>奧圖碼</title>   
    <link rel='stylesheet' type='text/css' media='all' href='./dist/css/main.min.css'/>
</head>
<body>
<?php include 'header.html';?>

    <main>
<?php
$fileUrl = $_GET['page'];
switch ($fileUrl)
{
case 'about':
    $fileIndex = 'about';
    break;  
       
case 'ourbraud':
    $fileIndex = 'ourbraud';
    break;      

case 'applications':
    $fileIndex = 'applications';
    break;     

case 'innovation':
    $fileIndex = 'innovation';
    break;

case 'design':
    $fileIndex = 'design';
    break;

case 'knowledge':
    $fileIndex = 'knowledge';
    break;

case 'social':
    $fileIndex = 'social';
    break;

case 'detail':
    $fileIndex = 'detail';
    break;
    
default:
    $fileIndex = 'home';
}
include $fileIndex.'.html';
?>

    </main>
<?php include 'footer.html'; ?>
<?php include 'data/index.php'; ?>
<script type="text/javascript" src="./dist/js/dist.bundle.js"></script>
<script type="text/javascript">
var banner = '.silck-banner'
var video = $('.silck-item-video-iframe')

// window.onYTAPIReady = function(){
//     for (var i = 0; i < video.length; i++) {
//         var id = 'YT-'+i
//         var videoId = video[i].dataset.videoid
//         video[i].id = id
//         video[i].player = new YT.Player(id, {
//             videoId: videoId,
//             events: {
//                 'onReady': function(e){
//                     e.target.mute().playVideo()
//                 },
//                 'onStateChange': function(e){
//                     var active = $(e.target.a).hasClass('active')
//                     if (e.data === 1 && !active) {
//                         e.target.stopVideo()
//                     }
//                     if (e.data === 0 && active) {
//                         $(banner).slick('slickNext')
//                     }
//                 },
//             }
//         })
//     }
// }


// $(banner).on('afterChange', function (event, slick, index) {
//     var playVideoBoolen = true
//     var iframe = $(banner + ' .slick-slide.slick-active iframe')
//     if (iframe.length === 1) {
//         iframe.addClass('active')
//         for (var i = 0; i < video.length; i++) {
//             if (iframe[0].id === video[i].id) {
//                 playVideoBoolen = false
//                 video[i].player.mute().playVideo()
//             }
//         }
//     }
//     if (playVideoBoolen) {
//         window.timer = setTimeout(() => {
//             $(banner).slick('slickNext')
//         }, 5000)
//     }
// })

// $(banner).on('beforeChange', function (event, slick, index) {
//     var iframe = $(banner + ' .slick-slide.slick-active iframe')
//     if (iframe.length === 1) {
//         iframe.removeClass('active')
//         for (var i = 0; i < video.length; i++) {
//             if (iframe[0].id === video[i].id) {
//                 video[i].player.stopVideo()
//             }
//         }
//     }
//     if(window.timer){
//         clearTimeout(window.timer)
//     }
// })


    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var initYT = true;
    function onYouTubeIframeAPIReady() {
        if(initYT){
            window.onYTAPIReady()
            initYT = false
        }
    }
</script>
</body>
</html>

