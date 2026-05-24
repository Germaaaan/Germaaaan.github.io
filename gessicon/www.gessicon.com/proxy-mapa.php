<?php
// 1. Permitir que tu propio HTML de Live Server o dominio acceda a este archivo
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 2. La URL real del servidor de Inmovilla a la que queremos consultar
$url_original = "https://www.gessicon.com/modulos/_ajx/buscador/buscadorMapa.php";

// 3. Capturar los parámetros que tu mapa envía (filtros, ciudad, precio, etc.)
// Las peticiones de mapas suelen enviar datos por POST o GET. Pasamos ambos por si acaso.
$data = $_REQUEST; 

// 4. Configurar la petición hacia el servidor externo usando cURL
$ch = curl_init();
$queryString = http_build_query($data);

// Si el mapa original pide los datos por GET, descomenta la línea de abajo:
// curl_setopt($ch, CURLOPT_URL, $url_original . "?" . $queryString);

// Si los pide por POST (lo más común en buscadores avanzados):
curl_setopt($ch, CURLOPT_URL, $url_original);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $queryString);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Evita problemas con certificados SSL locales

// 5. Ejecutar la petición y recibir los datos de las viviendas
$response = curl_exec($ch);

if(curl_errno($ch)){
    echo json_encode(["error" => curl_error($ch)]);
} else {
    // 6. Devolver la respuesta exacta de las viviendas a tu HTML
    echo $response;
}

curl_close($ch);
?>