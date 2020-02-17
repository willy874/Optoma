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

