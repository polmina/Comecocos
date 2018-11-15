<!DOCTYPE html>

<?php
if(isset($_COOKIE['puntuacio'])){
    echo "<div class='puntuacioMaxima'><h2>Puntuacio Maxima: </h2><h2 id='puntuacio'>".$_COOKIE['puntuacio']."</h2></div>";
}
else{
     echo "<div class='puntuacioMaxima'><h2>Puntuacio Maxima: </h2><h2 id='puntuacio'>0</h2></div>";
}

