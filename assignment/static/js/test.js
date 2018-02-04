function mytime(){
    var a = new Date();
    var b = a.toLocaleTimeString();
    document.getElementById("time1").innerHTML = b;
}
setInterval(function() {mytime()},1000);
        
function initMap(){
    var purdue = {lat: 40.424, lng: -86.91};
    var map = new google.maps.Map(document.getElementById("map"),
    {
        zoom:14,
        center: purdue
    });
    var marker = new google.maps.Marker({
    position: purdue,
    map: map
    });
}

