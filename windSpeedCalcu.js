function Calculate() {
    var TempInFahr = document.getElementById("tempInFahr").value;
    var WindSpeed = document.getElementById("windSpeed").value;

    var windChill = 35.74 + 0.6215*TempInFahr + (0.4275*TempInFahr - 35.75)  *  Math.pow(WindSpeed ,0.16);


    document.getElementById("result").value = windChill;
}