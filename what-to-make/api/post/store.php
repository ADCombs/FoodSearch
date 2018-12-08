<?php
     header("Access-Control-Allow-Origin: *");
     header('Content-Type: application/json');
     
     function foodLookup(){
        debug_zval_dump($_COOKIE);
        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            print_r($row);
        }
    }

?>