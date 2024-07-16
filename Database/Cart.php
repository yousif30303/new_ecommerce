<?php

// Use to fetch product data
class Cart
{
    public $db = null;

    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }


    

    // insertIntoCart
    public function insertIntoCart($params = null, $table= 'cart'){
        print_r($params);
        exit();
        if (isset($item_id)){
            $result = $this->db->con->query("INSERT INTO {$table} ({},{}) VALUES ({},{})");

            $resultArray = array();

            // fetch product data one by one
            while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                $resultArray[] = $item;
            }

            return $resultArray;
        }
    }
}


?>