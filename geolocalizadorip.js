if (typeof navigator.geolocation == 'object'){
    navigator.geolocation.getCurrentPosition(mostrar_ubicacion);
}
 
function mostrar_ubicacion(p)
{
    alert('posición: '+p.coords.latitude+','+p.coords.longitude );
}