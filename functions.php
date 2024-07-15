<?php
  require('./Database/DBConnection.php');
  require('./Database/Product.php');

  $db = new DBController();

  $product = new Product($db);
?>