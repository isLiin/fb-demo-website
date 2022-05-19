<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./IMG/logo.jpg" type="image/x-icon">
    <link rel="stylesheet" href="./CSS/all.css">
    <link rel="stylesheet" href="./CSS/bootstrap.css">
    <link rel="stylesheet" href="./CSS/bootstrap.min.css">
    <link rel="stylesheet" href="./CSS/header.css">
    <link rel="stylesheet" href="./CSS/content.css">
    <link rel="stylesheet" href="./CSS/footer.css">
    <link rel="stylesheet" href="./CSS/btn-message.css">
    <title> !!! AVIGATO | HNK</title>
    <style>
        :root{
            --color-1: #191a1bf5;
            --color-2: #2b2a2a;
            --color-3: #4d515f;
            --color-4: #ffffff;
        }        
        /* width */
        ::-webkit-scrollbar {width: 10px;}
        /* Track */
        ::-webkit-scrollbar-track {background: var(--color-3);}
        /* Handle */
        ::-webkit-scrollbar-thumb {background: var(--color-2);}
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {background: var(--color-3);}
    </style>
</head>
<body style="background-color: var(--color-3); position: relative;">
    <!-- HEADER -->
    <?php include './Views/header.php';?>
    <!-- CONTENT -->
    <div class="container-content container-fluid row p-0 m-0 m-auto">        
        <!-- LEFT -->
        <?php include './Views/content-left.php';?>
        <!-- CENTER -->
        <?php include './Views/content-center.php';?>
        <!-- RIGHT -->
        <?php include './Views/content-right.php';?>
    </div>
    <!-- FOOTER -->
    <?php include './Views/footer.php';?>
    <div class="btn-message"><i class="fas fa-plus"></i></div>


    <!-- -============= Import Script =============- -->
        <script src="./JS/all.js"></script>
        <script src="./JS/bootstrap.js"></script>
        <script src="./JS/bootstrap.min.js"></script>
        <script src="./JS/jquery-3.6.0.js"></script>
        <script src="./JS/icontent.js"></script>
</body>
</html>