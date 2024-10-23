let sueldo = parseInt(prompt("dijite el sueldo del trabajador:"))

if (sueldo > 300000){
    console.log("su sueldo total es:", 0.15 * sueldo + sueldo) 
}else{
    console.log("su sueldo es:", sueldo)
}