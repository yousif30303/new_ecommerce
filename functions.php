<?php
  require('./Database/DBConnection.php');
  require('./Database/Product.php');
  require('./Database/Cart.php');

  $db = new DBController();

  $product = new Product($db);

  $cart = new Cart($db);

?>