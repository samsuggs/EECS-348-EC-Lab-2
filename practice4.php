<?php
$size = $_POST['size'];
echo "<table border=1>";
echo "<tbody>";
for($i = 0; $i<=$size; $i++){
	echo "<tr>";
	for($j = 0; $j<=$size; $j++){
		echo "<td>";
		if($i*$j != 0){
			echo $i*$j;
		}
		elseif($i==0 && $j != 0){
			echo $j;
		}
		elseif($i != 0 && $j==0){
			echo $i;
		}
		echo "</td>";
	}
	echo "</tr>";
}
echo "</tbody>";
echo "</table>";
?>
