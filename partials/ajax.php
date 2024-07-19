<?php
require('../Database/DBConnection.php');
require('../Database/Product.php');

$db = new DBController();

$product = new Product($db);

if(isset($_POST['itemid']))
    $result = $product->getProduct($_POST['itemid']);
    echo json_encode($result);
?>