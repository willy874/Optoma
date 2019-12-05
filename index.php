<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'meta.php';?>
    <title>奧圖碼</title>   
    <link rel='stylesheet' type='text/css' media='all' href='./dist/css/main.css'/>
</head>
<body>
<?php include 'header.php';?>
    <main>
<?php
$fileUrl = $_GET['page'];
switch ($fileUrl)
{
case '1':
    $fileIndex = 'page1';
    break;     
case '2':
    $fileIndex = 'page2';
    break;  
case '3':
    $fileIndex = 'page3';
    break;
default:
    $fileIndex = 'home';
}
include $fileIndex.'.html';
?>
    </main>
<?php include 'footer.php'; ?>
<script type="text/javascript" src="./dist/js/dist.bundle.js"></script>
</body>
</html>