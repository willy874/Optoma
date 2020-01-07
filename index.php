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
    
default:
    $fileIndex = 'home';
}
include $fileIndex.'.html';
?>

    </main>
<?php include 'footer.html'; ?>
<script type="text/javascript" src="./dist/js/dist.bundle.js"></script>
</body>
</html>