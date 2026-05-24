/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, es6 */

'use strict';

const applicationServerPublicKey = 'BGeq7fPwu-FvKDCsPCJr_AH_WF6KrFRMuwv44PX7GIOqWMzkhRZqU2hPlSqA43ZOQ9j2qCpqbu1AcQzfzkzfYmI';

const pushButton = document.querySelector('.js-push-btn');

let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function updateBtn() {
    if (isSubscribed) {
        pushButton.textContent = 'Disable Push Messaging';
    } else {
        pushButton.textContent = 'Enable Push Messaging';
    }

    pushButton.disabled = false;
}

function updateSubscriptionOnServer(subscription) {
    // TODO: Send subscription to application server

    if (subscription) {
        //aqui se guarda en la bd
        var suscriptionJson = JSON.stringify(subscription);

        var enviar = {};
        enviar.json = suscriptionJson;

        if(typeof actual != 'undefined' && actual == 'fichapiso.php') {
            enviar.datoofe = datoofeGet;
        }

        if(typeof numagencia != 'undefined')
            enviar.numagencia = numagencia;


        if(typeof clienteEscaparate != 'undefined') {
            if(!clienteEscaparate)
                return;

            var url = '../plugins/__ajx/suscripcionpush/guardarAuthPushServidor.php';
            enviar.cliente = clienteEscaparate;
        }else
            var url = 'plugins/__ajx/suscripcionpush/guardarAuthPushServidor.php';


        $.ajax({
            url: url,
            method: 'POST',
            data: enviar
        })
            .done(function( data ) {
            });

        console.log(suscriptionJson);
    }
}

function subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function(subscription) {
            console.log('User is subscribed');

            updateSubscriptionOnServer(subscription);

            isSubscribed = true;

            // updateBtn();
        })
        .catch(function(err) {
            console.log('Failed to subscribe the user: ', err);
            // updateBtn();
        });
}

function initializeUI() {

    if(typeof clienteEscaparate == 'undefined' && desactivarNotificacionPush)
        return false;

    // Set the initial subscription value
    swRegistration.pushManager.getSubscription()
        .then(function(subscription) {
            isSubscribed = !(subscription === null);


            if (isSubscribed) {
                swRegistration.update();
                updateSubscriptionOnServer(subscription);
            } else {

                var hora = localStorage.getItem('horaUltimoPromptPush');
                //5 minutos en milisegundos
                var minutosMargen = 300000;

                var d = new Date();
                var timestampActual = d.getTime();

                if( ( Notification.permission != 'denied' && hora == null || hora != null && timestampActual > (parseInt(hora) + minutosMargen) ) && (typeof clienteEscaparate == 'undefined' || typeof clienteEscaparate != 'undefined' && clienteEscaparate ) ) {
                    mostrarConfirmacionPush();
                    return;
                }


            }

        });



}

function mostrarConfirmacionPush()
{

    if(typeof clienteEscaparate == 'undefined' && desactivarNotificacionPush)
        return false;

    if(typeof clienteEscaparate != 'undefined') {
        var url = '../plugins/__ajx/suscripcionpush/modalNotificacionesPush.php?cliente=' + clienteEscaparate;
        var logo = '../img/header/logo.png';
    }else {
        var url = 'plugins/__ajx/suscripcionpush/modalNotificacionesPush.php?cliente=0';
        var logo = 'img/header/logo.png';
    }


    $.ajax({
        url: url,
        type: "get",
        dataType:"html",
        async:true,
        success: function(html){
            html = html.replace('img/header/logo.png', logo);

            $(document).ready(function(){
                if(typeof clienteEscaparate != 'undefined') {
                    var obj = $('html');
                }else{
                    var obj = $('body');
                }

                $.when(obj.append(html)).then(function(){

                    $('#confirmaPush_cancelar').off('click').on('click', function(){
                        $(this).closest('#confirmaPush_Cont').remove();
                    });

                    $('#confirmaPush_aceptar').off('click').on('click', function(){
                        subscribeUser();
                        $(this).closest('#confirmaPush_Cont').remove();
                    });

                });

                var d = new Date();
                var timestampActual = d.getTime();
                localStorage.setItem('horaUltimoPromptPush', timestampActual)


            });

        }
    });

}


// if ('serviceWorker' in navigator && 'PushManager' in window) {
//     console.log('Service Worker and Push is supported');
//     if(typeof clienteEscaparate != 'undefined') {
//         var swRoute = '../js/sw.js';
//     }else {
//         var swRoute = 'js/sw.js';
//     }
//
//     navigator.serviceWorker.register(swRoute)
//         .then(function(swReg) {
//             console.log('Service Worker is registered', swReg);
//
//             swRegistration = swReg;
//             initializeUI();
//         })
//         .catch(function(error) {
//             console.error('Service Worker Error', error);
//         });
// } else {
//     console.warn('Push messaging is not supported');
// }