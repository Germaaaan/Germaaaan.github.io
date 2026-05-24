var borrar;
var letraFoto=obtenerLetraFoto();

/*$idiomas = array(
"1" => "castellano",
"2" => "inglés",
"3" => "alemán",
"4" => "francés",
"5" => "holandes",
"6" => "noruego",
"7" => "ruso",
"8" => "portugues",
"9" => "sueco",
"10" => "finlandes",
"11" => "chino",
"12" => "catalan",
"15" => "italiano",
"16" => "vasco",
"17" => "polaco",
"19" => "danes"
"22" => "lituano"
"24" => "Ucraniano"
"25" => "búlgaro"
);
*/
var cookies_idiomas_plugin = {
    "_ga": {
        1: {
            titulo : "_ga",
            tipo : "Cookies analíticas",
            descripcion : "Utilizada para distinguir a los usuarios.",
            duracion : "2 años",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "_ga",
            tipo : "Analytical cookies",
            descripcion : "Used to distinguish users.",
            duracion : "2 years",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "_ga",
            tipo : "Analytische Cookies",
            descripcion : "Wird zur Unterscheidung von Benutzern verwendet.",
            duracion : "2 Jahre",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "_ga",
            tipo : "Cookies analytiques",
            descripcion : "Utilisé pour distinguer les utilisateurs.",
            duracion : "2 ans",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "_ga",
            tipo : "Analytische cookies",
            descripcion : "Wordt gebruikt om gebruikers te onderscheiden.",
            duracion : "2 jaar",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "_ga",
            tipo : "Analytiske informasjonskapsler",
            descripcion : "Brukes til å skille brukere.",
            duracion : "2 år",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "_ga",
            tipo : "Аналитические куки",
            descripcion : "???????????? ??? ?????????? ?????????????.",
            duracion : "2 ????",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "_ga",
            tipo : "Cookies Analíticos",
            descripcion : "Usado para distinguir usuários.",
            duracion : "2 anos",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "_ga",
            tipo : "Analytiska kakor",
            descripcion : "Används för att särskilja användare.",
            duracion : "2 år",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "_ga",
            tipo : "Analyyttiset evästeet",
            descripcion : "Käytetään käyttäjien erottamiseen.",
            duracion : "2 vuotta",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "_ga",
            tipo : "分析性Cookie",
            descripcion : "用於指定分配給AWS Load Balancer服務的服務器。除非在技術上不可能，否則請嘗試確保響應Web會話請求的服務器始終相同。",
            duracion : "7天",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "_ga",
            tipo : "Cookies analítiques",
            descripcion : "Utilitzada per distingir els usuaris.",
            duracion : "2 anys",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "_ga",
            tipo : "Cookie analitici",
            descripcion : "Utilizzato per distinguere gli utenti.",
            duracion : "2 anni",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "_ga",
            tipo : "Cookie analitikoak",
            descripcion : "Erabiltzaileak bereizteko erabiltzen da.",
            duracion : "2 urte",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "_ga",
            tipo : "Analityczne pliki cookie",
            descripcion : "Służy do rozróżniania użytkowników.",
            duracion : "2 lata",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "_ga",
            tipo : "Cookies analíticas",
            descripcion : "Utilizada para distinguir a los usuarios.",
            duracion : "2 años",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "_ga",
            tipo : "Analytiske cookies",
            descripcion : "Bruges til at skelne brugere.",
            duracion : "2 år",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "_ga",
            tipo : "Analitiniai slapukai",
            descripcion : "Naudojamas vartotojams atskirti.",
            duracion : "2 metai",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "_ga",
            tipo: "Аналітичні файли cookie",
            descripcion: "Використовується для розпізнавання користувачів.",
            duracion: "2 роки",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo: "_ga",
            tipo: "Аналитични бисквитки",
            descripcion: "Използва се за разграничаване на потребителите.",
            duracion: "2 години",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        }
    },
    "_gid" : {
        1: {
            titulo : "_gid",
            tipo : "Cookies analíticas",
            descripcion : "Utilizada para distinguir a los usuarios.",
            duracion : "24 horas",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "_gid",
            tipo : "Analytical cookies",
            descripcion : "Used to distinguish users.",
            duracion : "24 hours",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "_gid",
            tipo : "Analytische Cookies",
            descripcion : "Wird zur Unterscheidung von Benutzern verwendet.",
            duracion : "24 Stunden",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "_gid",
            tipo : "Cookies analytiques",
            descripcion : "Utilisé pour distinguer les utilisateurs.",
            duracion : "24 heures",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "_gid",
            tipo : "Analytische cookies",
            descripcion : "Wordt gebruikt om gebruikers te onderscheiden.",
            duracion : "24 uur",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "_gid",
            tipo : "Analytiske informasjonskapsler",
            descripcion : "Brukes til å skille brukere.",
            duracion : "24 timer",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "_gid",
            tipo : "Аналитические куки",
            descripcion : "Используется для различения пользователей.",
            duracion : "24 часа",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "_gid",
            tipo : "Cookies Analíticos",
            descripcion : "Usado para distinguir usuários.",
            duracion : "24 horas",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "_gid",
            tipo : "Analytiska kakor",
            descripcion : "Används för att särskilja användare.",
            duracion : "24 timmar",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "_gid",
            tipo : "Analyyttiset evästeet",
            descripcion : "Käytetään käyttäjien erottamiseen.",
            duracion : "24 tuntia",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "_gid",
            tipo : "分析性Cookie",
            descripcion : "用於區分用戶。",
            duracion : "24小時",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "_gid",
            tipo : "Cookies analítiques",
            descripcion : "Utilitzada per distingir els usuaris.",
            duracion : "24 hores",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "_gid",
            tipo : "Cookie analitici",
            descripcion : "Utilizzato per distinguere gli utenti.",
            duracion : "24 ore",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "_gid",
            tipo : "Cookie analitikoak",
            descripcion : "Erabiltzaileak bereizteko erabiltzen da.",
            duracion : "24 ordu",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "_gid",
            tipo : "Analityczne pliki cookie",
            descripcion : "Służy do rozróżniania użytkowników.",
            duracion : "24 godziny",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "_gid",
            tipo : "Cookies analíticas",
            descripcion : "Utilizada para distinguir a los usuarios.",
            duracion : "24 horas",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "_gid",
            tipo : "Analytiske cookies",
            descripcion : "Bruges til at skelne brugere.",
            duracion : "24 timer",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "_gid",
            tipo : "Analitiniai slapukai",
            descripcion : "Naudojamas vartotojams atskirti.",
            duracion : "24 valandos",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "_gid",
            tipo: "Аналітичні файли cookie",
            descripcion: "Використовується для розпізнавання користувачів.",
            duracion: "24 години",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo: "_gid",
            tipo: "Аналитични бисквитки",
            descripcion: "Използва се за разграничаване на потребителите.",
            duracion: "24 часа",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        }

    },
    "_gat" : {
        1: {
            titulo : "_gat",
            tipo : "Cookies analíticas",
            descripcion : "Utilizada para limitar el porcentaje de solicitudes. Si se ha añadido Google Analytics con Google Tag Manager, esta cookie se llamará: _dc_gtm_[property-id].",
            duracion : "1 minuto",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "_gat",
            tipo : "Analytical cookies",
            descripcion : "Used to limit the percentage of requests. If Google Analytics has been added with Google Tag Manager, this cookie will be called: _dc_gtm_ [property-id].",
            duracion : "1 minute",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "_gat",
            tipo : "Analytische Cookies",
            descripcion : "Wird verwendet, um den Prozentsatz der Anforderungen zu begrenzen. Wenn Google Analytics mit Google Tag Manager hinzugefügt wurde, heißt dieses Cookie: _dc_gtm_ [Eigenschafts-ID].",
            duracion : "1 Minute",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "_gat",
            tipo : "Cookies analytiques",
            descripcion : "Utilisé pour limiter le pourcentage de demandes. Si Google Analytics a été ajouté avec Google Tag Manager, ce cookie sera appelé: _dc_gtm_ [property-id].",
            duracion : "1 minute",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "_gat",
            tipo : "Analytische cookies",
            descripcion : "Wordt gebruikt om het percentage verzoeken te beperken. Als Google Analytics is toegevoegd met Google Tag Manager, wordt deze cookie genoemd: _dc_gtm_ [property-id].",
            duracion : "1 minuut",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "_gat",
            tipo : "Analytiske informasjonskapsler",
            descripcion : "Brukes til å begrense prosentandelen av forespørsler. Hvis Google Analytics er lagt til med Google Tag Manager, vil denne informasjonskapselen hete: _dc_gtm_ [property-id].",
            duracion : "1 minutt",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "_gat",
            tipo : "Аналитические куки",
            descripcion : "Используется для ограничения процента запросов. Если Google Analytics был добавлен с помощью Диспетчера тегов Google, этот файл cookie будет называться: _dc_gtm_ [property-id].",
            duracion : "1 минута",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "_gat",
            tipo : "Cookies Analíticos",
            descripcion : "Usado para limitar a porcentagem de solicitações. Se o Google Analytics foi adicionado ao Gerenciador de tags do Google, este cookie será chamado de: _dc_gtm_ [id da propriedade].",
            duracion : "2 años",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "_gat",
            tipo : "Analytiska kakor",
            descripcion : "Används för att begränsa andelen förfrågningar. Om Google Analytics har lagts till med Google Tag Manager kommer denna cookie att kallas: _dc_gtm_ [property-id].",
            duracion : "1 minut",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "_gat",
            tipo : "Analyyttiset evästeet",
            descripcion : "Käytetään pyyntöjen prosenttiosuuden rajoittamiseen. Jos Google Analytics on lisätty Google Tag Managerin kanssa, tämän evästeen nimi on _dc_gtm_ [property-id].",
            duracion : "1 minuutti",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "_gat",
            tipo : "分析性Cookie",
            descripcion : "用於限制請求的百分比。如果已將Google Analytics（分析）與Google跟踪代碼管理器一起添加，則此Cookie的名稱為：_dc_gtm_ [property-id]。",
            duracion : "1分鐘",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "_gat",
            tipo : "Cookies analítiques",
            descripcion : "Utilitzada per limitar el percentatge de sol·licituds. Si s'ha afegit Google Analytics amb Google Tag Manager, aquesta galeta es dirà: _dc_gtm_ [property-id].",
            duracion : "1 minut",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "_gat",
            tipo : "Cookie analitici",
            descripcion : "Utilizzato per limitare la percentuale di richieste. Se Google Analytics è stato aggiunto con Google Tag Manager, questo cookie verrà chiamato: _dc_gtm_ [property-id].",
            duracion : "1 minuto",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "_gat",
            tipo : "Cookie analitikoak",
            descripcion : "Eskaeren ehunekoa mugatzeko erabiltzen da. Google Analytics Google Tag Manager-ekin gehitu bada, cookie honi deituko zaio: _dc_gtm_ [jabetza-id].",
            duracion : "Minutu 1",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "_gat",
            tipo : "Analityczne pliki cookie",
            descripcion : "Służy do ograniczania odsetka żądań. Jeśli Google Analytics został dodany z Google Tag Manager, ten plik cookie będzie miał nazwę: _dc_gtm_ [property-id].",
            duracion : "1 minuta",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "_gat",
            tipo : "Cookies analíticas",
            descripcion : "Utilizada para limitar el porcentaje de solicitudes. Si se ha añadido Google Analytics con Google Tag Manager, esta cookie se llamará: _dc_gtm_[property-id].",
            duracion : "1 minuto",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "_gat",
            tipo : "Analytiske cookies",
            descripcion : "Bruges til at begrænse procentdelen af anmodninger. Hvis Google Analytics er blevet tilføjet med Google Tag Manager, kaldes denne cookie: _dc_gtm_[property-id].",
            duracion : "1 minut",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "_gat",
            tipo : "Analitiniai slapukai",
            descripcion : "Naudojamas apriboti užklausų procentą. Jei „Google Analytics“ buvo pridėta prie „Google“ žymų tvarkyklės, šis slapukas bus vadinamas: _dc_gtm_[ypatybės ID].",
            duracion : "1 minutę",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "_gat",
            tipo: "Аналітичні файли cookie",
            descripcion: "Використовується для обмеження відсотка запитів. Якщо Google Analytics додано через Google Tag Manager, цей файл cookie називатиметься: _dc_gtm_[property-id].",
            duracion: "1 хвилина",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo: "_gat",
            tipo: "Аналитични бисквитки",
            descripcion: "Използва се за ограничаване на процента на заявките. Ако Google Analytics е добавен чрез Google Tag Manager, тази бисквитка ще се нарича: _dc_gtm_[property-id].",
            duracion: "1 минута",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        }
    },
    "AMP_TOKEN" : {
        1: {
            titulo : "AMP_TOKEN",
            tipo : "Cookies analíticas",
            descripcion : "Añade un token que se utiliza para recuperar una ID de cliente del servicio de IDs de cliente de AMP. Puede incluir también inhabilitaciones, solicitudes en curso o errores obtenidos al recuperar una ID del servicio de IDs de cliente de AMP.",
            duracion : "De 30 segundos a 1 año",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "AMP_TOKEN",
            tipo : "Analytical cookies",
            descripcion : "Adds a token that is used to retrieve a client ID from the AMP Client IDs service. It can also include disables, requests in progress, or errors obtained when retrieving an ID from the AMP Client IDs service.",
            duracion : "30 seconds to 1 year",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "AMP_TOKEN",
            tipo : "Analytische Cookies",
            descripcion : "Fügt ein Token hinzu, mit dem eine Client-ID vom AMP-Client-ID-Dienst abgerufen wird. Es kann auch Deaktivierungen, laufende Anforderungen oder Fehler enthalten, die beim Abrufen einer ID vom AMP Client IDs-Dienst auftreten.",
            duracion : "30 Sekunden bis 1 Jahr",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "AMP_TOKEN",
            tipo : "Cookies analytiques",
            descripcion : "Ajoute un jeton utilisé pour récupérer un ID client à partir du service AMP Client IDs. Cela peut également inclure des désactivations, des demandes en cours ou des erreurs obtenues lors de la récupération d'un ID à partir du service AMP Client IDs.",
            duracion : "30 secondes à 1 an",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "AMP_TOKEN",
            tipo : "Analytische cookies",
            descripcion : "Voegt een token toe dat wordt gebruikt om een ​​client-ID op te halen uit de AMP Client IDs-service. Het kan ook uitschakelingen, lopende aanvragen of fouten bevatten die zijn verkregen bij het ophalen van een ID van de AMP Client IDs-service.",
            duracion : "30 seconden tot 1 jaar",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "AMP_TOKEN",
            tipo : "Analytiske informasjonskapsler",
            descripcion : "Legger til et token som brukes til å hente en klient-ID fra AMP-klient-ID-tjenesten. Det kan også omfatte deaktiver, pågående forespørsler eller feil innhentet når du henter en ID fra AMP Client IDs-tjenesten.",
            duracion : "30 sekunder til 1 år",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "AMP_TOKEN",
            tipo : "Аналитические куки",
            descripcion : "Добавляет токен, который используется для получения идентификатора клиента из службы идентификаторов клиентов AMP. Он также может включать отключения, выполняемые запросы или ошибки, полученные при получении идентификатора из службы идентификаторов клиентов AMP.",
            duracion : "От 30 секунд до 1 года",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "AMP_TOKEN",
            tipo : "Cookies Analíticos",
            descripcion : "Adiciona um token que é usado para recuperar um ID de cliente do serviço de IDs de cliente de AMP. Também pode incluir desabilitações, solicitações em andamento ou erros obtidos ao recuperar um ID do serviço de IDs de cliente AMP.",
            duracion : "30 segundos a 1 ano",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "AMP_TOKEN",
            tipo : "Analytiska kakor",
            descripcion : "Lägger till en token som används för att hämta ett klient-ID från AMP-klient-ID-tjänsten. Det kan också innehålla inaktiverar, pågående förfrågningar eller fel som uppnåtts vid hämtning av ett ID från AMP-klient-ID-tjänsten.",
            duracion : "30 sekunder till 1 år",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "AMP_TOKEN",
            tipo : "Analyyttiset evästeet",
            descripcion : "Lisää tunnuksen, jota käytetään asiakastunnuksen noutamiseen AMP-asiakastunnuspalvelusta. Se voi myös sisältää käytöstä poistoja, käynnissä olevia pyyntöjä tai virheitä, jotka on saatu haettaessa tunnusta AMP Client IDs -palvelusta.",
            duracion : "30 sekuntia - 1 vuosi",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "AMP_TOKEN",
            tipo : "分析性Cookie",
            descripcion : "添加用於從AMP客戶端ID服務中檢索客戶端ID的令牌。當從AMP客戶端ID服務檢索ID時，它還可能包括禁用，正在進行的請求或獲得的錯誤。",
            duracion : "30秒至1年",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "AMP_TOKEN",
            tipo : "Cookies analítiques",
            descripcion : "Afegeix un símbol que s'utilitza per recuperar una ID de client de el servei de IDs de client d'AMP. Pot incloure també inhabilitacions, sol·licituds en curs o errors obtinguts a l'recuperar una ID de el servei de IDs de client d'AMP.",
            duracion : "De 30 segons a 1 any",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "AMP_TOKEN",
            tipo : "Cookie analitici",
            descripcion : "Aggiunge un token utilizzato per recuperare un ID client dal servizio ID client AMP. Può anche includere disabilitazioni, richieste in corso o errori ottenuti durante il recupero di un ID dal servizio ID client AMP.",
            duracion : "Da 30 secondi a 1 anno",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "AMP_TOKEN",
            tipo : "Cookie analitikoak",
            descripcion : "AMP Bezero IDak zerbitzutik bezero ID bat berreskuratzeko erabiltzen den token bat gehitzen du. AMP Bezeroaren ID zerbitzutik ID bat berreskuratzean lortutako akatsak, egiten ari diren eskaerak edo akatsak ere sar ditzake.",
            duracion : "30 segundotik 1 urtera",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "AMP_TOKEN",
            tipo : "Analityczne pliki cookie",
            descripcion : "Dodaje token używany do pobierania identyfikatora klienta z usługi identyfikatorów klientów AMP. Może również obejmować wyłączenia, żądania w toku lub błędy uzyskane podczas pobierania identyfikatora z usługi identyfikatorów klientów AMP.",
            duracion : "30 sekund do 1 roku",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "AMP_TOKEN",
            tipo : "Cookies analíticas",
            descripcion : "Añade un token que se utiliza para recuperar una ID de cliente del servicio de IDs de cliente de AMP. Puede incluir también inhabilitaciones, solicitudes en curso o errores obtenidos al recuperar una ID del servicio de IDs de cliente de AMP.",
            duracion : "De 30 segundos a 1 año",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "AMP_TOKEN",
            tipo : "Analytiske cookies",
            descripcion : "Tilføjer et token, der bruges til at hente et klient-id fra AMP's klient-id-tjeneste. Kan også omfatte fravalg, igangværende anmodninger eller fejl opnået under hentning af et id fra AMP Client ID-tjenesten.",
            duracion : "ra 30 sekunder til 1 år",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "AMP_TOKEN",
            tipo : "Analitiniai slapukai",
            descripcion : "Prideda prieigos raktą, kuris naudojamas kliento ID nuskaityti iš AMP kliento ID paslaugos. Taip pat gali apimti atsisakymus, vykdomas užklausas arba klaidas, gautas gaunant ID iš AMP kliento ID paslaugos.",
            duracion : "Nuo 30 sekundžių iki 1 metų",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "AMP_TOKEN",
            tipo: "Аналітичні файли cookie",
            descripcion: "Додає токен, який використовується для отримання ідентифікатора клієнта зі служби ідентифікаторів клієнтів AMP. Також може містити відключення, поточні запити або помилки, отримані під час отримання ідентифікатора зі служби AMP.",
            duracion: "Від 30 секунд до 1 року",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo: "AMP_TOKEN",
            tipo: "Аналитични бисквитки",
            descripcion: "Добавя токен, който се използва за извличане на клиентски ID от услугата за AMP клиентски ID. Може също така да включва откази, текущи заявки или грешки при извличане на ID от услугата за AMP клиентски ID.",
            duracion: "От 30 секунди до 1 година",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        }
    },
    "_gac_[property-id]" : {
        1: {
            titulo : "_gac_[property-id]",
            tipo : "Cookie de Marketing",
            descripcion : "Incluye información de la campaña relativa al usuario. Si has vinculado tus cuentas de Google Analytics y Google Ads, las etiquetas de conversión en sitio web de Google Ads leerán esta cookie, a menos que la desactives. Más información",
            duracion : "90 días",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "_gac_[property-id]",
            tipo : "Marketing Cookie",
            descripcion : "Includes campaign information related to the user. If you've linked your Google Analytics and Google Ads accounts, the Google Ads website conversion tags will read this cookie, unless you disable it. More information",
            duracion : "90 days",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "_gac_[property-id]",
            tipo : "Marketing-Cookie",
            descripcion : "Enthält Kampagneninformationen zum Benutzer. Wenn Sie Ihre Google Analytics- und Google Ads-Konten verknüpft haben, wird dieses Cookie von den Conversion-Tags der Google Ads-Website gelesen, sofern Sie es nicht deaktivieren. Mehr Informationen",
            duracion : "90 Tage",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "_gac_[property-id]",
            tipo : "Cookie marketing",
            descripcion : "Comprend des informations de campagne liées à l'utilisateur. Si vous avez associé vos comptes Google Analytics et Google Ads, les balises de conversion du site Web Google Ads liront ce cookie, sauf si vous le désactivez. Plus d'informations",
            duracion : "90 jours",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "_gac_[property-id]",
            tipo : "Marketingcookie",
            descripcion : "Bevat campagne-informatie met betrekking tot de gebruiker. Als u uw Google Analytics- en Google Ads-accounts heeft gekoppeld, lezen de conversietags van de Google Ads-website deze cookie, tenzij u deze uitschakelt. Meer informatie",
            duracion : "90 dagen",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "_gac_[property-id]",
            tipo : "Markedsføringskake",
            descripcion : "Inkluderer kampanjeinformasjon relatert til brukeren. Hvis du har koblet sammen Google Analytics- og Google Ads-kontoene dine, leser konverterings-taggene på Google Ads-nettstedet denne informasjonskapselen, med mindre du deaktiverer den. Mer informasjon\n",
            duracion : "90 dager",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "_gac_[property-id]",
            tipo : "Маркетинговые файлы cookie",
            descripcion : "Включает информацию о кампании, относящуюся к пользователю. Если вы связали свои аккаунты Google Analytics и Google Рекламы, теги конверсии веб-сайта Google Рекламы будут читать этот файл cookie, если вы не отключите его. Дополнительная информация",
            duracion : "90 дней",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "_gac_[property-id]",
            tipo : "Cookie de marketing",
            descripcion : "Inclui informações de campanha relacionadas ao usuário. Se você vinculou suas contas do Google Analytics e do Google Ads, as tags de conversão do site do Google Ads lerão esse cookie, a menos que você o desative. Mais informação",
            duracion : "90 dias",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "_gac_[property-id]",
            tipo : "Marknadsföringskaka",
            descripcion : "Inkluderar kampanjinformation relaterad till användaren. Om du har länkat dina Google Analytics- och Google Ads-konton läser konverteringstaggarna för Google Ads-webbplatsen denna cookie, såvida du inte inaktiverar den. Mer information",
            duracion : "90 dagar",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "_gac_[property-id]",
            tipo : "Markkinointieväste",
            descripcion : "Sisältää käyttäjään liittyvät kampanjatiedot. Jos olet linkittänyt Google Analytics- ja Google Ads-tilisi, Google Ads -verkkotunnistetunnisteet lukevat tämän evästeen, ellet poista sitä käytöstä. Lisää tietoa",
            duracion : "90 päivää",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "_gac_[property-id]",
            tipo : "營銷Cookie",
            descripcion : "包括與用戶有關的活動信息。如果您已關聯了Google Analytics（分析）帳戶和Google Ads帳戶，則除非您禁用它，否則Google Ads網站轉換標籤將讀取該cookie。更多信息",
            duracion : "90天",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "_gac_[property-id]",
            tipo : "Cookie de Màrqueting",
            descripcion : "lou informació de la campanya relativa a l'usuari. Si has vinculat teus comptes de Google Analytics i Google Ads, les etiquetes de conversió en lloc web de Google Ads llegiran aquesta galeta, llevat que la desactivis. més informació",
            duracion : "90 dies",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "_gac_[property-id]",
            tipo : "Cookie di marketing",
            descripcion : "Include le informazioni sulla campagna relative all'utente. Se hai collegato i tuoi account Google Analytics e Google Ads, i tag di conversione del sito web di Google Ads leggeranno questo cookie, a meno che tu non lo disabiliti. Maggiori informazioni",
            duracion : "90 giorni",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "_gac_[property-id]",
            tipo : "Merkaturatzeko cookie-a",
            descripcion : "Erabiltzailearekin lotutako kanpainaren informazioa biltzen du. Google Analytics eta Google Ads kontuak lotu badituzu, Google Ads webguneko bihurketa etiketek cookie hau irakurriko dute, desgaitu ezean. Informazio gehiago",
            duracion : "90 egun",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "_gac_[property-id]",
            tipo : "Marketingowy plik cookie",
            descripcion : "Zawiera informacje o kampanii związane z użytkownikiem. Jeśli połączyłeś swoje konta Google Analytics i Google Ads, tagi konwersji witryny Google Ads odczytują ten plik cookie, chyba że go wyłączysz. Więcej informacji",
            duracion : "90 dni",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "_gac_[property-id]",
            tipo : "Cookie de Marketing",
            descripcion : "Incluye información de la campaña relativa al usuario. Si has vinculado tus cuentas de Google Analytics y Google Ads, las etiquetas de conversión en sitio web de Google Ads leerán esta cookie, a menos que la desactives. Más información",
            duracion : "90 días",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "_gac_[property-id]",
            tipo : "Marketing cookies",
            descripcion : "Det inkluderer kampagneoplysninger relateret til brugeren. Hvis du har linket dine Google Analytics- og Google Ads-konti, vil Google Ads-webstedets konverteringstags læse denne cookie, medmindre du deaktiverer den. Mere information",
            duracion : "90 dage",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "_gac_[property-id]",
            tipo : "Rinkodaros slapukus",
            descripcion : "Tai apima kampanijos informaciją, susijusią su vartotoju. Jei susiejote „Google Analytics“ ir „Google Ads“ paskyras, „Google Ads“ svetainės konversijų žymos skaitys šį slapuką, nebent jį išjungsite. Daugiau informacijos",
            duracion : "90 dienų",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "_gac_[property-id]",
            tipo: "Маркетингова cookie",
            descripcion: "Містить інформацію про кампанію, що стосується користувача. Якщо ти пов'язав облікові записи Google Analytics і Google Ads, теги конверсій Google Ads на вебсайті зчитуватимуть цей файл cookie, якщо тільки його не вимкнено. Докладніше",
            duracion: "90 днів",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo : "_gac_[property-id]",
            tipo : "Маркетинг бисквитка",
            descripcion : "Включва информация за кампанията, свързана с потребителя. Ако сте свързали вашите акаунти в Google Analytics и Google Ads, етикетите за конверсии в уебсайта на Google Ads ще четат тази бисквитка, освен ако не я деактивирате. Повече информация",
            duracion : "90 дни",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        }
    },

    "AWSALBCORS": {
        1: {
            titulo : "AWSALBCORS",
            tipo : "Cookie de Marketing",
            descripcion : "Registra que grupo de servidores está atendiendo al visitante. Se para optimizar la experiencia del usuario equilibrando la carga.",
            duracion : "6 días",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "AWSALBCORS",
            tipo : "Marketing Cookie",
            descripcion : "Registers which group of servers is serving the visitor. It is to optimize the user experience by balancing the load.",
            duracion : "6 days",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "AWSALBCORS",
            tipo : "Marketing-Cookie",
            descripcion : "Registriert, welche Servergruppe den Besucher bedient. Es dient dazu, die Benutzererfahrung durch Lastausgleich zu optimieren.",
            duracion : "6 Tage",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "AWSALBCORS",
            tipo : "Cookie marketing",
            descripcion : "Enregistre le groupe de serveurs qui dessert le visiteur. Il s'agit d'optimiser l'expérience utilisateur en équilibrant la charge.",
            duracion : "6 jours",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "AWSALBCORS",
            tipo : "Marketingcookie",
            descripcion : "Registreert welke groep servers de bezoeker bedient. Het is om de gebruikerservaring te optimaliseren door de belasting te balanceren.",
            duracion : "6 dagen",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "AWSALBCORS",
            tipo : "Markedsføringskake",
            descripcion : "Registrerer hvilken gruppe servere som betjener den besøkende. Det er å optimalisere brukeropplevelsen ved å balansere belastningen.",
            duracion : "6 dager",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "AWSALBCORS",
            tipo : "Маркетинговые файлы cookie",
            descripcion : "Регистрирует, какая группа серверов обслуживает посетителя. Он предназначен для оптимизации взаимодействия с пользователем путем балансировки нагрузки.",
            duracion : "6 дней",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "AWSALBCORS",
            tipo : "Cookie de marketing",
            descripcion : "Registra qual grupo de servidores está atendendo ao visitante. É para otimizar a experiência do usuário equilibrando a carga.",
            duracion : "6 dias",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "AWSALBCORS",
            tipo : "Marknadsföringskaka",
            descripcion : "Registrerar vilken grupp av servrar som betjänar besökaren. Det är att optimera användarupplevelsen genom att balansera belastningen.",
            duracion : "6 dagar",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "AWSALBCORS",
            tipo : "Markkinointieväste",
            descripcion : "Rekisteröi, mikä palvelinryhmä palvelee kävijää. Se on optimoida käyttökokemus tasapainottamalla kuormaa.",
            duracion : "90 päivää",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "AWSALBCORS",
            tipo : "營銷Cookie",
            descripcion : "註冊為訪問者服務的服務器組。通過平衡負載來優化用戶體驗。",
            duracion : "6天",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "AWSALBCORS",
            tipo : "Cookie de Màrqueting",
            descripcion : "Registra que grup de servidors està atenent al visitant. Es per optimitzar l'experiència de l'usuari equilibrant la càrrega.",
            duracion : "6 dies",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "AWSALBCORS",
            tipo : "Cookie di marketing",
            descripcion : "Registra quale gruppo di server sta servendo il visitatore. È per ottimizzare l'esperienza dell'utente bilanciando il carico.",
            duracion : "6 giorni",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "AWSALBCORS",
            tipo : "Merkaturatzeko cookie-a",
            descripcion : "Bisitariari zer zerbitzari-talde ematen dion erregistratzen du. Erabiltzaileen esperientzia optimizatzeko da, karga orekatuz.",
            duracion : "6 egun",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "AWSALBCORS",
            tipo : "Marketingowy plik cookie",
            descripcion : "Rejestruje, która grupa serwerów obsługuje gościa. Ma to na celu optymalizację doświadczenia użytkownika poprzez równoważenie obciążenia.",
            duracion : "6 dni",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "AWSALBCORS",
            tipo : "Cookie de Marketing",
            descripcion : "Registra que grupo de servidores está atendiendo al visitante. Se para optimizar la experiencia del usuario equilibrando la carga.",
            duracion : "6 días",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "AWSALBCORS",
            tipo : "CMarketing cookies",
            descripcion : "Registrerer, hvilken gruppe af servere der betjener den besøgende. Det bruges til at optimere brugeroplevelsen ved belastningsbalancering.",
            duracion : "6 dage",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "AWSALBCORS",
            tipo : "Rinkodaros slapukai",
            descripcion : "Įrašo, kuri serverių grupė aptarnauja lankytoją. Jis naudojamas siekiant optimizuoti vartotojo patirtį balansuojant apkrovą.",
            duracion : "6 dienos",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "AWSALBCORS",
            tipo: "Маркетингова cookie",
            descripcion: "Реєструє, яка група серверів обслуговує відвідувача. Використовується для оптимізації користувацького досвіду шляхом балансування навантаження.",
            duracion: "6 днів",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo : "AWSALBCORS",
            tipo : "Маркетинг бисквитка",
            descripcion : "Записва коя група сървъри обслужва посетителя. Използва се за оптимизиране на потребителското изживяване чрез балансиране на натоварването.",
            duracion : "6 дни",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        }
    },
    "JSESSIONID": {
        1: {
            titulo : "JSESSIONID",
            tipo : "Cookie de Marketing",
            descripcion : "Almacena los estados de los usuarios en todas las peticiones realizadas por la página.",
            duracion : "Sesión",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "JSESSIONID",
            tipo : "Marketing Cookie",
            descripcion : "Stores the states of the users in all the requests made by the page.",
            duracion : "Session",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "JSESSIONID",
            tipo : "Marketing-Cookie",
            descripcion : "Speichert den Status der Benutzer in allen von der Seite gestellten Anforderungen.",
            duracion : "Session",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "JSESSIONID",
            tipo : "Cookie marketing",
            descripcion : "Stocke les états des utilisateurs dans toutes les requêtes effectuées par la page.",
            duracion : "Session",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "JSESSIONID",
            tipo : "Marketingcookie",
            descripcion : "Slaat de status van de gebruikers op in alle verzoeken van de pagina.",
            duracion : "Sessie",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "JSESSIONID",
            tipo : "Markedsføringskake",
            descripcion : "Lagrer statusen til brukerne i alle forespørsler fra siden.",
            duracion : "6 dager",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "JSESSIONID",
            tipo : "Маркетинговые файлы cookie",
            descripcion : "Сохраняет состояния пользователей во всех запросах, сделанных страницей.",
            duracion : "Сессия",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "JSESSIONID",
            tipo : "Cookie de marketing",
            descripcion : "Armazena os estados dos usuários em todas as solicitações feitas pela página.",
            duracion : "Sessão",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "JSESSIONID",
            tipo : "Marknadsföringskaka",
            descripcion : "Lagrar användarnas tillstånd i alla förfrågningar från sidan.",
            duracion : "Session",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "JSESSIONID",
            tipo : "Markkinointieväste",
            descripcion : "Tallentaa käyttäjien tilat kaikkiin sivun tekemiin pyyntöihin.",
            duracion : "Istunto",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "JSESSIONID",
            tipo : "營銷Cookie",
            descripcion : "在頁面發出的所有請求中存儲用戶的狀態。",
            duracion : "屆會",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "JSESSIONID",
            tipo : "Cookie de Màrqueting",
            descripcion : "Emmagatzema els estats dels usuaris en totes les peticions realitzades per la pàgina.",
            duracion : "Sessió",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "JSESSIONID",
            tipo : "Cookie di marketing",
            descripcion : "Memorizza gli stati degli utenti in tutte le richieste effettuate dalla pagina.",
            duracion : "Sessione",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "JSESSIONID",
            tipo : "Merkaturatzeko cookie-a",
            descripcion : "Orriak egindako eskaera guztietan erabiltzaileen egoerak gordetzen ditu.",
            duracion : "Saioa",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "JSESSIONID",
            tipo : "Marketingowy plik cookie",
            descripcion : "Przechowuje stany użytkowników we wszystkich żądaniach wysyłanych przez stronę.",
            duracion : "Sesja",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "JSESSIONID",
            tipo : "Cookie de Marketing",
            descripcion : "Almacena los estados de los usuarios en todas las peticiones realizadas por la página.",
            duracion : "Sesión",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "JSESSIONID",
            tipo : "Marketing cookies",
            descripcion : "Gemmer brugernes tilstande i alle anmodninger fra siden.",
            duracion : "Session",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "JSESSIONID",
            tipo : "Rinkodaros slapukai",
            descripcion : "Saugo vartotojų būsenas visose puslapio užklausose.",
            duracion : "Sesija",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "JSESSIONID",
            tipo: "Маркетингова cookie",
            descripcion: "Зберігає стани користувачів під час усіх запитів, здійснених сторінкою.",
            duracion: "Сесія",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo : "JSESSIONID",
            tipo : "Маркетинг бисквитка",
            descripcion : "Съхранява състоянията на потребителите при всички заявки, направени от страницата.",
            duracion : "Сесия",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        }
    },
    "_cfduid": {
        1: {
            titulo : "_cfduid",
            tipo : "Cookie de Marketing",
            descripcion : "Utilizada para rastrear la información de los vídeos de YouTube incrustados en un sitio web.",
            duracion : "1 mes",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "_cfduid",
            tipo : "Marketing Cookie",
            descripcion : "Used to track the information of YouTube videos embedded in a website.",
            duracion : "1 month",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "_cfduid",
            tipo : "Marketing-Cookie",
            descripcion : "Wird verwendet, um die Informationen von YouTube-Videos zu verfolgen, die in eine Website eingebettet sind.",
            duracion : "1 Monat",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "_cfduid",
            tipo : "Cookie marketing",
            descripcion : "Utilisé pour suivre les informations des vidéos YouTube intégrées dans un site Web.",
            duracion : "1 mois",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "_cfduid",
            tipo : "Marketingcookie",
            descripcion : "Wordt gebruikt om de informatie van YouTube-video's die in een website zijn ingesloten bij te houden.",
            duracion : "1 maand",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "_cfduid",
            tipo : "Markedsføringskake",
            descripcion : "Brukes til å spore informasjonen om YouTube-videoer innebygd på et nettsted.",
            duracion : "1 måned",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "_cfduid",
            tipo : "Маркетинговые файлы cookie",
            descripcion : "Используется для отслеживания информации о видеороликах YouTube, встроенных в веб-сайт.",
            duracion : "1 месяц",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "_cfduid",
            tipo : "Cookie de marketing",
            descripcion : "Usado para rastrear as informações de vídeos do YouTube incorporados em um site.",
            duracion : "Sessão",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "_cfduid",
            tipo : "Marknadsföringskaka",
            descripcion : "Används för att spåra informationen om YouTube-videor inbäddade på en webbplats.",
            duracion : "Session",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "_cfduid",
            tipo : "Markkinointieväste",
            descripcion : "Käytetään verkkosivustoon upotettujen YouTube-videoiden tietojen seuraamiseen.",
            duracion : "1 kuukausi",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "_cfduid",
            tipo : "營銷Cookie",
            descripcion : "用於跟踪網站中嵌入的YouTube視頻的信息。",
            duracion : "1個月",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "_cfduid",
            tipo : "Cookie de Màrqueting",
            descripcion : "Utilitzada per rastrejar la informació dels vídeos de YouTube incrustats en un lloc web.",
            duracion : "1 mes",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "_cfduid",
            tipo : "Cookie di marketing",
            descripcion : "Utilizzato per tracciare le informazioni dei video di YouTube incorporati in un sito web.",
            duracion : "1 mese",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "_cfduid",
            tipo : "Merkaturatzeko cookie-a",
            descripcion : "Webgune batean txertatutako YouTube bideoen informazioaren jarraipena egiteko erabiltzen da.",
            duracion : "1 hilabete",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "_cfduid",
            tipo : "Marketingowy plik cookie",
            descripcion : "Służy do śledzenia informacji o filmach YouTube osadzonych w witrynie internetowej.",
            duracion : "1 miesiąc",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "_cfduid",
            tipo : "Cookie de Marketing",
            descripcion : "Utilizada para rastrear la información de los vídeos de YouTube incrustados en un sitio web.",
            duracion : "1 mes",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "_cfduid",
            tipo : "Marketing cookies",
            descripcion : "Bruges til at spore oplysningerne om YouTube-videoer, der er indlejret på et websted.",
            duracion : "1 måned",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "_cfduid",
            tipo : "Rinkodaros slapukai",
            descripcion : "Naudojamas svetainėje įterptų „YouTube“ vaizdo įrašų informacijai sekti.",
            duracion : "1 mėnuo",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "_cfduid",
            tipo: "Маркетингова cookie",
            descripcion: "Використовується для відстеження інформації про відео YouTube, вбудовані на вебсайті.",
            duracion: "1 місяць",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo : "_cfduid",
            tipo : "Маркетинг бисквитка",
            descripcion : "Използва се за проследяване на информацията за вградените видеа от YouTube в уебсайта.",
            duracion : "1 месец",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        }
    },
    "AWSALB": {
        1: {
            titulo : "AWSALB",
            tipo : "Cookie Técnica",
            descripcion : "Utilizada para especificar el servidor asignado al servicio AWS Load Balancer. A excepción de que sea técnicamente imposible, intenta que el servidor que responde a las peticiones de una sesión web sea siempre el mismo.",
            duracion : "7 días",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        2: {
            titulo : "AWSALB",
            tipo : "Technical Cookie",
            descripcion : "Used to specify the server assigned to the AWS Load Balancer service. Unless it is technically impossible, try to ensure that the server that responds to requests for a web session is always the same.",
            duracion : "1 month",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        3: {
            titulo : "AWSALB",
            tipo : "Technisches Cookie",
            descripcion : "Wird verwendet, um den Server anzugeben, der dem AWS Load Balancer-Dienst zugewiesen ist. Stellen Sie sicher, dass der Server, der auf Anforderungen für eine Websitzung reagiert, immer derselbe ist, es sei denn, dies ist technisch nicht unmöglich.",
            duracion : "7 Tage",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        4: {
            titulo : "AWSALB",
            tipo : "Cookie technique",
            descripcion : "Utilisé pour spécifier le serveur affecté au service AWS Load Balancer. À moins que cela ne soit techniquement impossible, essayez de vous assurer que le serveur qui répond aux demandes de session Web est toujours le même.",
            duracion : "7 jours",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        5: {
            titulo : "AWSALB",
            tipo : "Technische Cookie",
            descripcion : "Wordt gebruikt om de server op te geven die is toegewezen aan de AWS Load Balancer-service. Probeer ervoor te zorgen dat de server die reageert op verzoeken om een ​​websessie, altijd dezelfde is, tenzij het technisch onmogelijk is.",
            duracion : "7 dagen",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        6: {
            titulo : "AWSALB",
            tipo : "Teknisk informasjonskapsel",
            descripcion : "Brukes til å spesifisere serveren som er tilordnet AWS Load Balancer-tjenesten. Med mindre det er teknisk umulig, prøv å sikre at serveren som svarer på forespørsler om en websesjon alltid er den samme.",
            duracion : "7 dager",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        7: {
            titulo : "AWSALB",
            tipo : "Технические файлы cookie",
            descripcion : "Используется для указания сервера, назначенного сервису AWS Load Balancer. Если это технически невозможно, постарайтесь убедиться, что сервер, отвечающий на запросы веб-сеанса, всегда один и тот же.",
            duracion : "7 дней",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        8: {
            titulo : "AWSALB",
            tipo : "Cookie Técnico",
            descripcion : "Usado para especificar o servidor atribuído ao serviço AWS Load Balancer. Exceto que é tecnicamente impossível, tente que o servidor que responde às solicitações de uma sessão web seja sempre o mesmo.",
            duracion : "7 dias",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        9: {
            titulo : "AWSALB",
            tipo : "Teknisk cookie",
            descripcion : "Används för att ange servern som tilldelats AWS Load Balancer-tjänsten. Om det inte är tekniskt omöjligt, försök att se till att servern som svarar på förfrågningar om en webbsession alltid är densamma.",
            duracion : "7 dagar",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        10: {
            titulo : "AWSALB",
            tipo : "Tekninen eväste",
            descripcion : "Käytetään AWS Load Balancer -palvelulle määritetyn palvelimen määrittämiseen. Ellei se ole teknisesti mahdotonta, yritä varmistaa, että web-istunnon pyyntöihin vastaava palvelin on aina sama.",
            duracion : "7 päivää",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        11: {
            titulo : "AWSALB",
            tipo : "技術性Cookie",
            descripcion : "用於指定分配給AWS Load Balancer服務的服務器。除非在技術上不可能，否則請嘗試確保響應Web會話請求的服務器始終相同。",
            duracion : "7天",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        12: {
            titulo : "AWSALB",
            tipo : "Cookie Tècnica",
            descripcion : "Utilitzada per especificar el servidor assignat a l'servei AWS Load Balanç. A excepció que sigui tècnicament impossible, intenta que el servidor que respon a les peticions d'una sessió web sigui sempre el mateix.",
            duracion : "7 dies",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        15: {
            titulo : "AWSALB",
            tipo : "Cookie tecnico",
            descripcion : "Utilizzato per specificare il server assegnato al servizio AWS Load Balancer. A meno che non sia tecnicamente impossibile, cerca di assicurarti che il server che risponde alle richieste di una sessione web sia sempre lo stesso.",
            duracion : "7 giorni",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        16: {
            titulo : "AWSALB",
            tipo : "Cookie teknikoa",
            descripcion : "AWS Load Balancer zerbitzura esleitutako zerbitzaria zehazteko erabiltzen da. Teknikoki ezinezkoa bada behintzat, saiatu web saio baterako eskaerei erantzuten dien zerbitzaria beti berdina izan dadin.",
            duracion : "7 egun",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        17: {
            titulo : "AWSALB",
            tipo : "Techniczne pliki cookie",
            descripcion : "Służy do określenia serwera przypisanego do usługi AWS Load Balancer. O ile nie jest to technicznie niemożliwe, spróbuj upewnić się, że serwer odpowiadający na żądania sesji internetowej jest zawsze ten sam.",
            duracion : "7 dni",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        18: {
            titulo : "AWSALB",
            tipo : "Cookie Técnica",
            descripcion : "Utilizada para especificar el servidor asignado al servicio AWS Load Balancer. A excepción de que sea técnicamente imposible, intenta que el servidor que responde a las peticiones de una sesión web sea siempre el mismo.",
            duracion : "7 días",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        19: {
            titulo : "AWSALB",
            tipo : "Teknisk cookie",
            descripcion : "Bruges til at angive den server, der er tildelt AWS Load Balancer-tjenesten. Medmindre det er teknisk umuligt, så prøv at sikre, at serveren, der svarer på anmodninger fra en websession, altid er den samme.",
            duracion : "7 dage",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        22: {
            titulo : "AWSALB",
            tipo : "Techninis slapukas",
            descripcion : "Naudojamas serveriui, priskirtam AWS Load Balancer paslaugai, nurodyti. Nebent techniškai neįmanoma, pabandykite užtikrinti, kad serveris, atsakantis į žiniatinklio seanso užklausas, visada būtų tas pats.",
            duracion : "7 dienos",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        },
        24: {
            titulo: "AWSALB",
            tipo: "Технічна cookie",
            descripcion: "Використовується для вказівки сервера, призначеного для служби AWS Load Balancer. Якщо це технічно можливо, намагається забезпечити, щоб на запити однієї веб-сесії завжди відповідав один і той самий сервер.",
            duracion: "7 днів",
            idlabel: "cookies_accepted_google5",
            aceptar: ""
        },
        25: {
            titulo : "AWSALB",
            tipo : "Техническа бисквитка",
            descripcion : "Използва се за указване на сървъра, назначен от услугата AWS Load Balancer. Освен ако не е технически невъзможно, се стреми сървърът, който отговаря на заявките по време на уеб сесията, винаги да бъде един и същ.",
            duracion : "7 дни",
            idlabel : "cookies_accepted_google5",
            aceptar : ""
        }
    },
};





function obtiene_texto(idioma,cookie, es_google) {
    let txt_propietario = es_google ? 'google.com' : 'metricool.com';

    var fila = `
    <tr>
        <td style="height:30px; width:89px">
            <p><strong>` + cookies_idiomas_plugin[cookie][idioma]["titulo"] + `</strong></p>
        </td>
        <td style="height:30px; width:47px">
            <p>` + cookies_idiomas_plugin[cookie][idioma]["tipo"] + `</p>
        </td>
        <td style="height:30px; width:246px">
            <p>` + cookies_idiomas_plugin[cookie][idioma]["descripcion"] + `</p>
        </td>
        <td style="height:30px; width:132px">
            <p>` + cookies_idiomas_plugin[cookie][idioma]["duracion"] + `</p>
        </td>
        <td style="height:30px; width:85px">
            <p>` + txt_propietario + `</p>
        </td>
<!--        <td style="height:77px; width:85px"><input id="` + cookies_idiomas_plugin[cookie][idioma]["idlabel"] + `" type="checkbox" /> <span style="color: grey">` + cookies_idiomas_plugin[cookie][idioma]["aceptar"] + `</span></td>-->
    </tr>
    `;

    return fila;
}

//let cookie_metricool = ['AWSALBCORS', 'JSESSIONID', '_cfduid', 'AWSALB'];
let cookie_anaytics = ['_ga', '_gid', '_gat', 'AMP_TOKEN', '_gac_[property-id]'];

//let textoMetricoolCookies = '';
let textoAnalyticsCookies = '';

/*$.each(cookie_metricool, function(key, val) {
    textoMetricoolCookies +=  obtiene_texto(idio, val, false);
});*/
$.each(cookie_anaytics, function(key, val) {
    textoAnalyticsCookies +=  obtiene_texto(idio, val, true);
});


function eventosAlIniciar()
{
    //cmabiar fotos propiedades
    $('.propiedad .flechaprev, .propiedad .flechanext').on('click', function(event){
        event.stopPropagation();
        event.preventDefault();
        cambiaFoto(this);
    });

    $('body').on('click', '.custom-select-html', function(event){
        var $obj = typeof event.srcElement != 'undefined' ? $(event.srcElement) : $(event.target) ;

        //si no es el elemento padre contenedor ppasssamos
        if(!$obj.hasClass('custom-select-html'))
            return true;

        var $primerElemento = $obj.find('> *:first');
        if($primerElemento.is(':visible') === true) {
            $obj.find('> *').hide();
        }else{
            $('.custom-select-html').find('> *').hide();
            $obj.find('> *').slideDown(200);
        }
    });

    $('.enlaceAcontacto > a').on('click', function(event){
        event.preventDefault();
        //$('html, body').animate({scrollTop:$(document).height()}, 'slow');
        if (document.getElementById("modulo-cabecera-1") != null){
            $('html, body').animate({ scrollTop: $(".contacto").offset().top - 165 }, 'slow');
        }
        else {
            $('html, body').animate({ scrollTop: $(".contacto").offset().top - 100 }, 'slow');
        }
    });

    //elementos a ocultar automaticamente
    $('body').on('click', function(event){
        var objClick = typeof event.srcElement != 'undefined' ? event.srcElement : event.target ;
        ocultarEnClickHtml(objClick);
        ocultarCustomsSelectsClickHtml(objClick);
    });

    //svg
    reemplazarSvgs();

    eventosEnScroll();

    /* Esto se ha puesto asi para que se tenga en cuenta el antesydespues de la propiedad ya que este no carga hasta que se cambia de imagen.
       Lo forzamos para que se muestre si lo tiene.
    */

    if((typeof(arr_antesydespues)!="undefined" && arr_antesydespues.length > 1) && (actual == 'fichapromocion.php' || actual == 'fichapropiedad.php')){
        cambiaFoto($("a.flechanext"));
        cambiaFoto($("a.flechaprev"));
    }

}

//esta funcion coge el archivo .svg y lo sustituye por su contenido
//para asi poder cambiar los colores del svg
function reemplazarSvgs()
{
// For each image with an SVG class, execute the following function.
    $("img[src*='.svg']").each(function () {
        // Perf tip: Cache the image as jQuery object so that we don't use the selector muliple times.
        var $img = jQuery(this);
        // Get all the attributes.
        var attributes = $img.prop("attributes");
        // Get the image's URL.
        var imgURL = $img.attr("src");
        // Fire an AJAX GET request to the URL.
        $.get(imgURL, function (data) {
            // The data you get includes the document type definition, which we don't need.
            // We are only interested in the <svg> tag inside that.
            var $svg = $(data).find('svg');
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Loop through original image's attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });
            // Replace image with new SVG
            $img.replaceWith($svg);
        });
    });

}

function marcaDesmarcaCheckboxTiposZonas($obj)
{
    var $objTituloSelect = $obj.closest('[original-txt]');

    if($objTituloSelect.length === 0) return true; //si no existe el nombre original nos lo saltamos

    var $elLabel = $obj.closest('.grupoTipoZona').find('span');
    var elLabelTxt = $elLabel.html();
    var nombreOriginal = $objTituloSelect.attr('original-txt').trim();
    var nombreActual = $objTituloSelect.attr('data-txt').trim();
    var nuevoTxt;

    var esChecked = $obj.is(':checked');

    if(nombreOriginal === nombreActual && esChecked) {
        $objTituloSelect.attr('data-txt', elLabelTxt);
        return true;
    }

    if(esChecked) {
        nuevoTxt = elLabelTxt + ', ' + nombreActual;
    }else{
        var regEx = new RegExp(elLabelTxt + ", ", 'gi');
        if(nombreActual.match(regEx) !== null) {
            nuevoTxt = nombreActual.replace(regEx, '');
        }else{
            regEx = new RegExp('(, )?' + elLabelTxt, 'gi');
            nuevoTxt = nombreActual.replace(regEx, '');
        }
    }

    if(nuevoTxt == '') { //si se ha quedado vacio ponemos el nombre original
        nuevoTxt = nombreOriginal;
    }

    $objTituloSelect.attr('data-txt', nuevoTxt);

}

function labelCheckboxGruposTipos($obj)
{
    $obj.closest('.grupoTipoZona').find('input[type=checkbox]').click();
}

function marcaDesmarcaGruposTipos($obj)
{
    $li = $obj.closest('li');
    if($obj.is(':checked')) { //marcamos
        $li.find('ul').slideDown(400);
        $li.find('.marcarTipoZona:not(:checked)').each(function(key, val){
            var $elObj = $(val);
            if(!$elObj.is(':checked')) {
                $elObj.click();
            }
        });
    } else { //desamarcamos
        $li.find('ul').slideUp(200);
        $li.find('.marcarTipoZona:checked').each(function(key, val){
            var $elObj = $(val);
            if($elObj.is(':checked')) {
                $elObj.click();
            }
        });
    }
}

function marcarDesmarcarTodosTipos($obj)
{
    $ul = $obj.closest('ul.cajaGrupoTiposZonas');
    if($obj.is(':checked')) {
        $ul.find('ul').slideDown(400);
        $ul.find('.marcarGrupoTiposZonas').prop('checked', true);
        $ul.find('.marcarTipoZona').each(function(key, val){
            var $elObj = $(val);
            if(!$elObj.is(':checked')) {
                $elObj.click();
            }
        });
    } else {
        $ul.find('ul').slideUp(200);
        $ul.find('.marcarGrupoTiposZonas').prop('checked',false);
        $ul.find('.marcarTipoZona').each(function(key, val){
            var $elObj = $(val);
            if($elObj.is(':checked')) {
                $elObj.click();
            }
        });
    }
}

function eventosEnScroll()
{

    cargarFotosAlVuelo();
    cargarIframesAlVuelo();

    $(window).on('scroll', function(event){

        cargarFotosAlVuelo(event);
        cargarIframesAlVuelo(event);

    });
}

function cargarFotosAlVuelo(event)
{
    var posicionScroll = $(window).scrollTop();
    var altoVentana = posicionScroll + $(window).innerHeight();
    var posicionParaCargarFoto = altoVentana + 150;
    var posicionElemento, $obj, lafoto;

    $('.fotosAlVuelo:not(.fotoCargada):not(.nofoto)').each(function(key, val){
        $obj = $(this);
         posicionElemento = $obj.offset().top;
         if(posicionParaCargarFoto < posicionElemento) return true; //si no ha llegado a la aaltura del elemento continuamos con el siguiente

         lafoto = $obj.attr('cargaFoto');
         if(lafoto == null || lafoto == '') return true;

         if ($obj.attr('imgResponsive')=="true")
             lafoto=lafoto.replace("_*.", "_"+letraFoto+".");

        $obj.css('background-image', 'url("' + lafoto + '")');
        $obj.addClass('fotoCargada');
    });
}

function cargarIframesAlVuelo(event)
{
    var posicionScroll = $(window).scrollTop();
    var altoVentana = posicionScroll + $(window).innerHeight();
    var posicionParaCargarFoto = altoVentana + 250;
    var posicionElemento, $obj, elSrc;

    $('.srcAlVuelo:not(.srcCargado):not(.nofoto)').each(function(key, val){
        $obj = $(this);
         posicionElemento = $obj.offset().top;
         if(posicionParaCargarFoto < posicionElemento) return true; //si no ha llegado a la aaltura del elemento continuamos con el siguiente

         elSrc = $obj.attr('rutaSrc');
         if(elSrc == null || elSrc == '') return true;

        $obj.attr('src', elSrc);
        $obj.css('background-image', 'url("' + elSrc + '")');
        $obj.addClass('srcCargado');
    });
}

function obtenerLetraFoto() {
    var ancho=window.screen.width;

    switch (true) {
        case ancho<=680 :  return 's'; break;
        case ancho<=1280 : return 'm'; break;
        default : return 'l'; break;
    }
}

function cambiaFoto(obj)
{
    var $obj = $(obj);
    var $objPropiedad = $obj.closest('.propiedad');
    var $objFoto = $objPropiedad.hasClass('fotopropiedad') ? $objPropiedad : $objPropiedad.find('.fotopropiedad');
    var tipoPropiedad = $objPropiedad.attr('tipo');
    var indicePropiedad = $objPropiedad.attr('indice');
    var siguiente = true;
    if($obj.hasClass('flechaprev')) {
        siguiente = false;
    }else if($obj.hasClass('flechanext')) {
        siguiente = true;
    }else{
        console.error('No tiene clase siguiente o anterior');
        return false;
    }


    if(typeof listados[tipoPropiedad] == 'undefined' || typeof listados[tipoPropiedad] != 'undefined' &&  typeof listados[tipoPropiedad][indicePropiedad] == 'undefined') {
        console.error('no se ha encontrado el objeto para el listado');
        return false;
    }

    var objDatosPropiedad = listados[tipoPropiedad][indicePropiedad];

    var fotoLetra = objDatosPropiedad.fotoletra;
    var numfotos = parseInt(objDatosPropiedad.numfotos);

    if(numfotos === 0 || numfotos === 1) return false;

    var fotoActual = $objFoto.css('background-image').match(/url\s*\(([^\)]+)\)/);
    if(typeof fotoActual[1] == 'undefined') {
        console.error('No hay imagen en el style');
        return false;
    }
    fotoActual = fotoActual[1].replace(/"/g, '').replace(/'/g, '');

    let esMiniatura = fotoActual.includes('s.jpg');

    var numFotoActual = fotoActual.match(/\/[0-9]+-([0-9]+)/);

    if(typeof numFotoActual[1] == 'undefined') {
        console.error('No se ha encontrado el numfoto actual');
        return false;
    }

    numFotoActual = parseInt(numFotoActual[1]);
    var nuevaFoto;

    if(siguiente) {
        if(numFotoActual >= numfotos)
            nuevaFoto = 1;
        else
            nuevaFoto = numFotoActual + 1;
    }else{
        if(numFotoActual <= 1)
            nuevaFoto = numfotos;
        else
            nuevaFoto = numFotoActual - 1;
    }

    if (typeof(arr_antesydespues)!="undefined") {
     if ($(obj).closest("#fichapropiedad-bloquevisor").attr("tipo")=="fichapropiedad") {
         if(arr_antesydespues[nuevaFoto]!=undefined) {
            $(obj).siblings(".verAntesYDespues").attr('fotoActual',nuevaFoto);
            $(obj).siblings(".verAntesYDespues").fadeIn(80);
         } else {
            $(obj).siblings(".verAntesYDespues").attr('fotoActual',0);
            $(obj).siblings(".verAntesYDespues").fadeOut(50);
         }
     }
    }

    var sufijo = "";
    switch (objDatosPropiedad.estadoficha) {
        case 1: case 7: case null: case 40: case 41: case 18:
            sufijo = "";
            break;
        default:
            sufijo = "?n";
            break;

    }

    let appendMiniatura = esMiniatura ? 's' : '';

    var foto = 'https://fotos' + objDatosPropiedad.srvfotos + '.apinmo.com/' + objDatosPropiedad.numagencia + '/' + objDatosPropiedad.cod_ofer + '/' + fotoLetra + '-' + nuevaFoto + appendMiniatura + '.jpg' + sufijo;
    $objFoto.css('background-image', 'url("' + foto + '")');

}

function validarEmail(email) {
    var pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    return pattern.test(email);
}

$(document).ready(function(){
    eventosAlIniciar();
});

function recargarCss() {
    var queryString = '?reload=' + new Date().getTime();
    $('link[rel="stylesheet"]').each(function () {
        // this.href = this.href.replace(/\?.*|$/, queryString);
        this.href = this.href+queryString;
    });
}

function ocultarEnClickHtml(obj)
{
    var $obj = $(obj);

    var $esClickHtmlObj = false;

    if($obj.hasClass('ocultarEnClickHtml'))
        $esClickHtmlObj = $obj;
    if($obj.closest('.ocultarEnClickHtml').length > 0)
        $esClickHtmlObj = $obj.closest('.ocultarEnClickHtml:first');
    //si no se esta clickando el menu del movil lo ocultamos
    if($obj.closest('.header-menu').length == 0 && !$obj.hasClass('.header-menu')) {
        $('.header-menu').removeClass('xvisible')
    }

    if($esClickHtmlObj === false) {
        $('.ocultarEnClickHtml').hide();
    }else{
        $('.ocultarEnClickHtml').each(function(key, val){
            $objEach = $(val);
            if($esClickHtmlObj === $objEach)
                return true;

            $objEach.hide();
        });
    }

}

function ocultarCustomsSelectsClickHtml(obj)
{
    var $obj = $(obj);
    //es un IF raro pero lo que viene a hacer comprueba si el objeto al que se le ha hecho click su padre o abuelo o bis... es un .custom-select-html
    // luego comprueba si se ha hecho click sobre el propio custom-select-html si es el mismo que hay abierto si lo hay
    //si cumple una de estas condiciones devuelve false para que siga la vida tal cual
    if($obj.closest('.custom-select-html').length > 0 || ($obj.hasClass('custom-select-html') && $('.custom-select-html > *:visible').closest('.custom-select-html') == $obj))
        return false;

    $('.custom-select-html > *:visible').slideUp(100);
}

//hay que pasarle objeto en plan:
// {'res' : xNumelementosPorPagina}
function anyadirParamentroAurlYredirigir(obj, hastag)
{

    if(hastag == null)
        hastag = '';
    if(hastag != '' && hastag.match('#') == null)
        hastag = '#' + hastag;


    //let url_explode = window.location.href.split('?');

    //let url = window.location.href.replace(`/${idio_txt}/?`, '/?').replace(`/${idio_txt}?`, '/?');

    let regex = new RegExp(`\/${idio_txt}\/?$`);
    let url = window.location.href.replace(regex, '/');
    var urlActual = new URL(url);

    //var urlActual = new URL(window.location.href);

    $.each(obj, function(key, val){
        var parametroActual = urlActual.searchParams.get(key);

        if(parametroActual == null) {
            urlActual.searchParams.append(key, val);
        }else{
            urlActual.searchParams.set(key, val);
        }
    });

    if(hastag != '')
        urlActual.hash = hastag;

    window.location.href = urlActual.href;

}


function anyadirFavorito(cod_ofer){
    var cookies_permitidas = document.cookie.split("; ").includes("cookies_accepted_vdf=1");
    if (cookies_permitidas) {
        parametros="tipo=favoritas&cod_ofer="+cod_ofer;
        var respuesta=lanzaajax("POST","modulos/__ajx/setCookies.php",parametros,"");
        var msj=document.getElementById('propiedadfavorita').value;
        alert(msj);
        document.querySelector("#fichapropiedad-titulos #boton_favoritos").setAttribute('onclick','quitarFavorito('+cod_ofer+')');
        document.querySelector("#fichapropiedad-titulos #boton_favoritos").className = "titulos-favoritosQuitar";
        document.querySelector("#fichapropiedad-titulos #boton_descartar").className = "titulos-descartadas";
        document.querySelector("#fichapropiedad-titulos #boton_descartar").setAttribute('onclick','anyadirDescartado('+cod_ofer+')');
    } else {
        alert('Las cookies de Favoritos están desactivadas');
    }

}

function quitarFavorito(cod_ofer){

    var cookies_permitidas = document.cookie.split("; ").includes("cookies_accepted_vdf=1");
    if (cookies_permitidas) {
        parametros="tipo=favoritas&cod_ofer="+cod_ofer+"&eliminar=1";
        var respuesta=lanzaajax("POST","modulos/__ajx/setCookies.php",parametros,"");
        var msj=document.getElementById('propiedadeliminadafavorita').value;
        alert(msj);
        document.querySelector("#fichapropiedad-titulos #boton_favoritos").setAttribute('onclick','anyadirFavorito('+cod_ofer+')');
        document.querySelector("#fichapropiedad-titulos #boton_favoritos").className = "titulos-favoritos";
    } else {
        alert('Las cookies de Favoritos están desactivadas');
    }

}

function anyadirDescartado(cod_ofer){
    var cookies_permitidas = document.cookie.split("; ").includes("cookies_accepted_vdf=1");
    if (cookies_permitidas) {
        parametros="tipo=descartados&cod_ofer="+cod_ofer;
        var respuesta=lanzaajax("POST","modulos/__ajx/setCookies.php",parametros,"");
        var msj=document.getElementById('propiedaddescartada').value;
        alert(msj);

        document.querySelector("#fichapropiedad-titulos #boton_descartar").setAttribute('onclick','quitarDescartado('+cod_ofer+')');
        document.querySelector("#fichapropiedad-titulos #boton_descartar").className = "titulos-descartadasQuitar";
        document.querySelector("#fichapropiedad-titulos #boton_favoritos").className = "titulos-favoritos";
        document.querySelector("#fichapropiedad-titulos #boton_favoritos").setAttribute('onclick','anyadirFavorito('+cod_ofer+')');
    } else {
        alert('Las cookies de Descartado están desactivadas');
    }

}

function quitarDescartado(cod_ofer){
    var cookies_permitidas = document.cookie.split("; ").includes("cookies_accepted_vdf=1");
    if (cookies_permitidas) {
        parametros="tipo=descartados&cod_ofer="+cod_ofer+"&eliminar=1";
        var respuesta=lanzaajax("POST","modulos/__ajx/setCookies.php",parametros,"");
        var msj=document.getElementById('propiedadeliminadadescartada').value;
        alert(msj);
        document.querySelector("#fichapropiedad-titulos #boton_descartar").setAttribute('onclick','anyadirDescartado('+cod_ofer+')');
        document.querySelector("#fichapropiedad-titulos #boton_descartar").className = "titulos-descartadas";
    } else {
        alert('Las cookies de Descartado están desactivadas');
    }


}

function alerta(texto, modal)
{
    if(modal == null)
        modal = false;

    var html;
    html = '<div class="cajaNegraAlerta">';
    if(modal)
        html +=     '<div class="cajaAlertaContenedor cajaAlertaContenedorModal">';
    else
        html +=     '<div class="cajaAlertaContenedor">';
    html +=         '<div class="cajaAlertaTxt">';
    html +=             texto;
    html +=         '</div>';
    if(!modal)
        html +=         '<button class="cajaAlertaAceptar" onclick="cerrarAlerta(this)">' + $('#aceptar_modal').val() + '</button>';
    html +=     '</div>';
    html += '</div>';

    $('body').append(html);
}

function cerrarAlerta(obj)
{
    $(obj).closest('.cajaNegraAlerta').remove();
}

function modalNuestra(idCapa, tituloModal)
{

    var html = '';
    var contenido = $('#' + idCapa).html();

    if(contenido != '') {
        $('#' + idCapa + ' [id]').each(function(key, val){
           var xId = $(val).attr('id');
           var nuevaId = xId + '__tmp__';
           $(val).attr('id', nuevaId);
        });
    }

    html += '<div class="cajaNegraAlerta" capa="' + idCapa + '">';
    html += '<div class="modalNuestra">';
    html += '<div class="cajaCabeceraModalNuestra">';
    html += '<h4>' + tituloModal + '</h4>';
    html += '<span onclick="cerrarModalNuestra(this);">x</span>';
    html += '</div>';
    html += '<div class="modalNuestraCont">';
    html += contenido;
    html += '</div>';
    html += '</div>';
    html += '</div>';

    $('body').append(html);

}


// En caso de aceptar todas cookies en el aviso central
function cookieHideAceptarMensajeCentro() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*31104000;
    now.setTime(expireTime);
    var tiempo = ";expires=" + now.toGMTString() + ';path=/';
    //var tiempo = ";max-age=" + "99999";
    document.cookie="cookies_accepted=1" + tiempo;
    document.cookie="cookies_accepted_vdf=1" + tiempo;
    document.cookie="cookies_accepted_add_1=1" + tiempo;
    document.cookie="cookies_accepted_google=1" + tiempo;
    document.cookie="cookies_accepted_google_analytics=0" + tiempo;

    var parametros="cookies_accepted=1&cookies_accepted_vdf=1&cookies_accepted_add_1=1";
    parametros += "&cookies_accepted_google=1";
    var respuesta=lanzaajax("POST","modulos/__ajx/setVariableSession.php",parametros,"");
}

function cookieHideRechazarMensajeCentro() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*31104000;
    now.setTime(expireTime);
    var tiempo = ";expires=" + now.toGMTString() + ';path=/';
    //var tiempo = ";max-age=" + "99999";
    document.cookie="cookies_accepted=0" + tiempo;
    document.cookie="cookies_accepted_vdf=0" + tiempo;
    document.cookie="cookies_accepted_add_1=0" + tiempo;
    document.cookie="cookies_accepted_google=0" + tiempo;

    var parametros="cookies_accepted=0&cookies_accepted_vdf=0&cookies_accepted_add_1=0";
    parametros += "&cookies_accepted_google=0";
    var respuesta=lanzaajax("POST","modulos/__ajx/setVariableSession.php",parametros,"");
}

function desplegarTextoCookiesAviso() {
    if (document.getElementById('caja_texto_cookies_entrada').style.visibility != 'hidden') {
        $('#caja_texto_cookies_entrada').hide();
        $('#caja_texto_cookies_textocompleto').show();
        document.getElementById('caja_texto_cookies_textocompleto').style.overflow = 'auto';
    }

}


function getCookie(nombre) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nombre + "=") === 0) {
            return c.substring((nombre + "=").length, c.length);
        }
    }
    return "0";
}

function comprobarCheckboxPoliticaCookies(){
    if(getCookie('cookies_accepted') && getCookie('cookies_accepted') != 0){
        document.querySelector('#cookies_accepted').checked = true;
    }else{
        document.querySelector('#cookies_accepted').checked = false;
    }
    if(getCookie('cookies_accepted_vdf') && getCookie('cookies_accepted_vdf') != 0){
        document.querySelector('#cookies_accepted_vdf').checked  = true;
    }else{
        document.querySelector('#cookies_accepted_vdf').checked  = false;
    }

    if(getCookie('cookies_accepted_add_1') && getCookie('cookies_accepted_add_1') != 0){
        document.querySelector('#cookies_accepted_add_1').checked  = true;
    }else{
        document.querySelector('#cookies_accepted_add_1').checked  = false;
    }

    if(getCookie('cookies_accepted_google') && getCookie('cookies_accepted_google') != 0){
        document.querySelector('#cookies_accepted_google').checked  = true;
    }else{
        document.querySelector('#cookies_accepted_google').checked  = false;
    }
}

function cerrarModalNuestra(obj)
{

    var $cajaNegra = $(obj).closest('.cajaNegraAlerta');
    var capa = $cajaNegra.attr('capa');

    $('#' + capa + ' [id]').each(function(key, val){
        var xId = $(val).attr('id');
        var nuevaId = xId.replace('__tmp__', '');
        $(val).attr('id', nuevaId);
    });


    $cajaNegra.remove();
}

function modal(nbcapa)
{

    if (nbcapa=="ventanalertas") lanzaajax("POST","pantallaalertas_raul.php","","ventanalertas");

    var activaventana=document.getElementById(nbcapa);
    var ventana=document.getElementById("opaca");

    ventana.style.display="block";
    ventana.style.zIndex=90;


    /* if(navigator.userAgent.indexOf("MSIE 6.0")>=0 && document.getElementById("limciudad")!=null) {
     document.getElementById("limciudad").style.display="none";
     document.getElementById("liminmociudad.zonas").style.display="none";
     }*/

    if (activaventana.style.display!="block")
    {
        activaventana.style.display="block";
        activaventana.style.zIndex=100;
        centrarventana(activaventana);
    }

}

//ejemplos
//var parametros = {'pepico':'juanico', 'menganico':'pascualico'};
//var opcionesJson = {'dataType' : 'json'};
/*
//en esta funcion de callback cuando se completa la peticion se trabjaa con json deuvelto, ya que el datatype que se le ha pasado es json
var miFuncionDeRespuesta = function(data) {
                                            if(!data.correcto) { //ha fallado por algun motivo la peticion y se ha devuelto en el json que correcto == false
                                                alert(data.error)  //imprimimos el error que viene devuelto en el json que ha sido previamente creado en el fichero de la peticion
                                            }
                                            console.log(data); //imprime el json devuelto como objeto
                                        }

se puede usar cualquier funcion que se halla creado previamente por ejemplo asi:

function miFuncionDeRespuesta (data)
{
                                            if(!data.correcto) { //ha fallado por algun motivo la peticion y se ha devuelto en el json que correcto == false
                                                alert(data.error)  //imprimimos el error que viene devuelto en el json que ha sido previamente creado en el fichero de la peticion
                                            }
                                            console.log(data); //imprime el json devuelto como objeto

}
 */

//lanzaajax2('index.php', parametros, miFuncionDeRespuesta, opcionesJson)

function lanzaajax2(url, datosJson, callback, opcionesJson)
{

    var opciones = {
                        'method'            : 'post',
                        'url'               : url,
                        'dataType'          : 'html',
                        'async'             : true
    };

    if(typeof opcionesJson == 'object') {
        $.each(opcionesJson, function(key, val){
            opciones[key] = val;
        });
    }

    if(typeof datosJson == 'object')
        opciones.data = datosJson;

    $.ajax(opciones)
        .done(function(data){
            if(typeof callback == 'function')
                callback(data)
        })
        .fail(function(error){
            console.error('ha fallado la petición lanzaajax2');
            console.error(error);
        });

}

function lanzaajax(tipo,url,parametros,capa, asincrono, xSuccess){
    if (capa==null) capa="";
    if(asincrono == null) asincrono = false;
    if(xSuccess == null) xSuccess = false;
    var respuesta='';

    $.ajax({
        url: url,
        type: tipo,
        data: parametros,
        dataType:"html",
        async:asincrono,
        errror:muestraError,
        success: function(html){
            if(xSuccess) {
                xSuccess(html);
            }
            if(capa!="")
                document.getElementById(capa).innerHTML=html;
            respuesta=html;
        }
    });
    return respuesta;

}

function muestraError(html){
    alert(html);
}


function cargarCiudadesEnSelectCiudades(keyprov, $objetoDestino, todaslasciudades, optionTodas, publicaInmueble)
{

    var parametros = {};
    parametros.keyprov = keyprov;

    if(todaslasciudades == null || !todaslasciudades) {
        todaslasciudades = 0;
    }else{
        todaslasciudades = 1;
    }

    if(optionTodas == null || !optionTodas) {
        optionTodas = 0;
    }else{
        optionTodas = 1;
    }

    if(publicaInmueble == null || !publicaInmueble) {
        publicaInmueble = 0;
    }else{
        publicaInmueble = 1;
    }

    parametros.todaslasciudades = todaslasciudades;
    parametros.optionTodas = optionTodas;
    parametros.publicaInmueble = publicaInmueble;

    $.ajax({
        'url'           : 'modulos/__ajx/buscador/rellenaSelectCiudades.php',
        'method'        : 'post',
        'data'          : parametros,
        'dataType'      : 'json'
    })
        .done(function(data){
            if(!data.correcto) {
                alert('ha fallado al cargar las ciudades');
                return false;
            }

            $objetoDestino.html(data.html);
        })
        .fail(function(e){
            console.error('Ha fallado al pedir ciudades con error:');
            console.error(e);
            alert('ha fallado al cargar las ciudades')
        });
}

function cargaLoading()
{
    var html;
    html = '<div class="cajaNegraLoading">';
    html += '<img src="img/loading_fff.gif">';
    html += '</div>';

    $('body').append(html);
}

function eliminarLoading()
{
    $('.cajaNegraLoading').remove();
}

//deja solo introducir numeros
function solonumeros(e){
    var tecla_codigo = (document.all) ? e.keyCode : e.which;
    if(tecla_codigo==8)return true;
    var patron =/[0-9]/;
    if (tecla_codigo!=0) {
        var tecla_valor = String.fromCharCode(tecla_codigo);
        return patron.test(tecla_valor);
    }
}
// En caso de aceptar cookies
function cookieHide() {
    // var cookie1 = document.getElementById("cookies_accepted_ca").value;
    // var cookie2 = document.getElementById("cookies_accepted_phpsid").value;
    // var cookie3 = document.getElementById("cookies_accepted_vdf").value;
    // var cookie4 = document.getElementById("cookies_accepted_add_1").value;
    // var cookie5 = document.getElementById("cookies_accepted_add_2").value;
    // var cookie6 = document.getElementById("cookies_accepted_google1").value;
    // var cookie7 = document.getElementById("cookies_accepted_google2").value;
    // var cookie8 = document.getElementById("cookies_accepted_google3").value;
    // var cookie9 = document.getElementById("cookies_accepted_google3").value;



    // document.querySelector('#mas-detalles-cookies').style.display === 'block' --> False oculto
    // document.querySelector('#mas-detalles-cookies').style.display === 'block' --> True mostrado
    if (document.querySelector('#mas-detalles-cookies').style.display === 'block') { // mostrado


        if (document.querySelector('#cookies_accepted_vdf') != null)
            var cookie3 = document.querySelector('#cookies_accepted_vdf').checked;
        else
            var cookie3 = false;
        if (document.querySelector('#cookies_accepted_add_1') != null)
            var cookie4 = document.querySelector('#cookies_accepted_add_1').checked;
        else
        /*    var cookie4 = false;
        if (document.querySelector('#cookies_accepted_metric') != null)
            var cookie5 = document.querySelector('#cookies_accepted_metric').checked;
        else
            var cookie5 = false;*/
        if (document.querySelector('#cookies_accepted_google') != null)
            var cookie6 = document.querySelector('#cookies_accepted_google').checked;
        else
            var cookie6 = false;


        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000*31104000;
        now.setTime(expireTime);
        var tiempo = ";expires=" + now.toGMTString() + ';path=/';
        //var tiempo = ";max-age=" + "99999";
        document.getElementById("aviso-cookies").style.visibility = "hidden";
        document.getElementById("aviso-cookies").innerHTML = "";
        //document.cookie="cookies_accepted=1" . "; expires=" + date;
        document.cookie="cookies_accepted=1" + tiempo;
        //document.cookie="cookies_accepted_vdf=1" + "; max-age=31536000";
        //document.cookie="cookies_accepted_add_1=1" + "; max-age=31536000";

        //var parametros="cookies_accepted=1&cookies_accepted_vdf=1&cookies_accepted_add_1=1";
        var parametros="cookies_accepted=1";
        if (cookie3) {
            parametros += "&cookies_accepted_vdf=1";
            document.cookie="cookies_accepted_vdf=1" + tiempo;
        } else {
            parametros += "&cookies_accepted_vdf=0";
            document.cookie="cookies_accepted_vdf=0" + tiempo;
        }

        if (cookie4) {
            parametros += "&cookies_accepted_add_1=1";
            document.cookie="cookies_accepted_add_1=1" + tiempo;
        } else {
            parametros += "&cookies_accepted_add_1=0";
            document.cookie="cookies_accepted_add_1=0" + tiempo;
        }

        /*if (cookie5) {
            parametros += "&cookies_accepted_metric=1";
            document.cookie="cookies_accepted_metric=1" + tiempo;
        } else {
            parametros += "&cookies_accepted_metric=0";
            document.cookie="cookies_accepted_metric=0" + tiempo;
        }*/

        if (cookie6) {
            parametros += "&cookies_accepted_google=1";
            document.cookie="cookies_accepted_google=1" + tiempo;
        } else {
            parametros += "&cookies_accepted_google=0";
            document.cookie="cookies_accepted_google=0" + tiempo;
        }

        var respuesta=lanzaajax("POST","modulos/__ajx/setVariableSession.php",parametros,"");



    } else { // oculto
        cookieHideAceptar();
    }


}



// En caso de aceptar cookies
function cookieHiveAptSelMsgCentro() {
    // var cookie1 = document.getElementById("cookies_accepted_ca").value;
    // var cookie2 = document.getElementById("cookies_accepted_phpsid").value;
    // var cookie3 = document.getElementById("cookies_accepted_vdf").value;
    // var cookie4 = document.getElementById("cookies_accepted_add_1").value;
    // var cookie5 = document.getElementById("cookies_accepted_add_2").value;
    // var cookie6 = document.getElementById("cookies_accepted_google1").value;
    // var cookie7 = document.getElementById("cookies_accepted_google2").value;
    // var cookie8 = document.getElementById("cookies_accepted_google3").value;
    // var cookie9 = document.getElementById("cookies_accepted_google3").value;


    if (document.querySelector('#cookies_accepted_vdf') != null)
        var cookie3 = document.querySelector('#cookies_accepted_vdf').checked;
    else
        var cookie3 = false;
    if (document.querySelector('#cookies_accepted_add_1') != null)
        var cookie4 = document.querySelector('#cookies_accepted_add_1').checked;
    else
        var cookie4 = false;
    /*if (document.querySelector('#cookies_accepted_metric') != null)
        var cookie5 = document.querySelector('#cookies_accepted_metric').checked;
    else
        var cookie5 = false;*/
    if (document.querySelector('#cookies_accepted_google') != null)
        var cookie6 = document.querySelector('#cookies_accepted_google').checked;
    else
        var cookie6 = false;


    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*31104000;
    now.setTime(expireTime);
    var tiempo = ";expires=" + now.toGMTString() + ';path=/';
    //var tiempo = ";max-age=" + "99999";
    //document.cookie="cookies_accepted=1" . "; expires=" + date;
    document.cookie="cookies_accepted=1" + tiempo;
    //document.cookie="cookies_accepted_vdf=1" + "; max-age=31536000";
    //document.cookie="cookies_accepted_add_1=1" + "; max-age=31536000";

    //var parametros="cookies_accepted=1&cookies_accepted_vdf=1&cookies_accepted_add_1=1";
    var parametros="cookies_accepted=1";
    if (cookie3) {
        parametros += "&cookies_accepted_vdf=1";
        document.cookie="cookies_accepted_vdf=1" + tiempo;
    } else {
        parametros += "&cookies_accepted_vdf=0";
        document.cookie="cookies_accepted_vdf=0" + tiempo;
    }

    if (cookie4) {
        parametros += "&cookies_accepted_add_1=1";
        document.cookie="cookies_accepted_add_1=1" + tiempo;
    } else {
        parametros += "&cookies_accepted_add_1=0";
        document.cookie="cookies_accepted_add_1=0" + tiempo;
    }

    /*if (cookie5) {
        parametros += "&cookies_accepted_metric=1";
        document.cookie="cookies_accepted_metric=1" + tiempo;
    } else {
        parametros += "&cookies_accepted_metric=0";
        document.cookie="cookies_accepted_metric=0" + tiempo;
    }*/

    if (cookie6) {
        parametros += "&cookies_accepted_google=1";
        document.cookie="cookies_accepted_google=1" + tiempo;
    } else {
        parametros += "&cookies_accepted_google=0";
        document.cookie="cookies_accepted_google=0" + tiempo;
    }

    var respuesta=lanzaajax("POST","modulos/__ajx/setVariableSession.php",parametros,"");

}



// En caso de rechazar cookies
function cookieHideRechazar() {
    document.getElementById("aviso-cookies").style.visibility = "hidden";
    document.getElementById("aviso-cookies").innerHTML = "";

    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*31104000;
    now.setTime(expireTime);
    var tiempo = ";expires=" + now.toGMTString() + ';path=/';
    //var tiempo = ";max-age=" + "99999";
    document.cookie="cookies_accepted=0" + tiempo;
    document.cookie="cookies_accepted_vdf=0" + tiempo;
    document.cookie="cookies_accepted_add_1=0" + tiempo;
    //document.cookie="cookies_accepted_metric=0" + tiempo;
    document.cookie="cookies_accepted_google=0" + tiempo;

    var parametros="cookies_accepted=0&cookies_accepted_vdf=0&cookies_accepted_add_1=0";
    parametros += "&cookies_accepted_google=0";
    var respuesta=lanzaajax("POST","modulos/__ajx/setVariableSession.php",parametros,"");
}


// En caso de aceptar todas cookies
function cookieHideAceptar() {
    document.getElementById("aviso-cookies").style.visibility = "hidden";
    document.getElementById("aviso-cookies").innerHTML = "";

    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*31104000;
    now.setTime(expireTime);
    var tiempo = ";expires=" + now.toGMTString() + ';path=/';
    //var tiempo = ";max-age=" + "99999";
    document.cookie="cookies_accepted=1" + tiempo;
    document.cookie="cookies_accepted_vdf=1" + tiempo;
    document.cookie="cookies_accepted_add_1=1" + tiempo;
    //document.cookie="cookies_accepted_metric=1" + tiempo;
    document.cookie="cookies_accepted_google=1" + tiempo;

    var parametros="cookies_accepted=1&cookies_accepted_vdf=1&cookies_accepted_add_1=1";
    parametros += "&cookies_accepted_google=1";
    var respuesta=lanzaajax("POST","modulos/__ajx/setVariableSession.php",parametros,"");
}


function cookieShowMoreInfo(e,textocookies,textoboton,textobotongestionar) {
    e.preventDefault();

    if (document.querySelector('#mas-detalles-cookies').style.display === 'block'){
        $('#mas-detalles-cookies').slideToggle();
        document.getElementById('aceptarCookies_boton').innerHTML = textoboton;
        document.getElementById('cookieShowMoreInfo').innerHTML = textobotongestionar;

        return false;
    }
    var elem_li = '';
    elem_li = textoCookiesCompleto(textocookies);


    //var elem_ul = `<ul>${elem_li}</ul>`;
    document.querySelector('#mas-detalles-cookies').innerHTML = elem_li;


    //document.querySelector('#aviso-cookies').style.height = '95%';
    //document.querySelector('#aviso-cookies').style.height = 'auto';


    $('#mas-detalles-cookies').slideToggle();
    document.getElementById('aceptarCookies_boton').innerHTML = textoboton;
    document.getElementById('cookieShowMoreInfo').innerHTML = textobotongestionar;

}


function textoCookiesCompleto(textocookies) {
    var elem_li = '';
    var elem_li = textocookies;
    if(tienegooglanalitics) {
        /*if (tienemetricool == 1) {
            elem_li +=
                `<div class="grid-container">
                    <div>&nbsp;</div>
                    <div>
                        <table border="0px" cellpadding="0px" cellspacing="0px" style="width:100%">
                            <tr>
                                <td style="height:13px; width:89px">
                                    <p><strong>Nombre</strong></p>
                                </td>
                                <td style="height:13px; width:47px">
                                    <p><strong>Tipo</strong></p>
                                </td>
                                <td style="height:13px; width:246px">
                                    <p><strong>Descripción/Finalidad</strong></p>
                                </td>
                                <td style="height:13px; width:132px">
                                    <p><strong>Duración</strong></p>
                                </td>
                                <td style="height:13px; width:85px">
                                    <p><strong>Propietario</strong></p>
                                </td>
                                <td style="height:13px; width:85px">
                                    <p><strong>Aceptar</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5"></td>
                                <td><input id="cookies_accepted_metric" type="checkbox"></td>
                            </tr>`;
            elem_li += textoMetricoolCookies;
            elem_li += `</table></div></div>`;
        }*/
        if (tienegooglanalitics == 1) {
            elem_li +=
                `<div class="grid-container">
                    <div>&nbsp;</div>
                    <div>
                        <table border="0px" cellpadding="0px" cellspacing="0px" style="width:100%">
                            <tr>
                                <td style="height:13px; width:89px">
                                    <p><strong>Nombre</strong></p>
                                </td>
                                <td style="height:13px; width:47px">
                                    <p><strong>Tipo</strong></p>
                                </td>
                                <td style="height:13px; width:246px">
                                    <p><strong>Descripción/Finalidad</strong></p>
                                </td>
                                <td style="height:13px; width:132px">
                                    <p><strong>Duración</strong></p>
                                </td>
                                <td style="height:13px; width:85px">
                                    <p><strong>Propietario</strong></p>
                                </td>
                                <td style="height:13px; width:85px">
                                    <p><strong>Aceptar</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5"></td>
                                <td><input id="cookies_accepted_google" type="checkbox"></td>
                            </tr>`;
            elem_li += textoAnalyticsCookies;
            elem_li += `</table></div></div>`;
        }
    }
    return elem_li;
}

function tareaSitemapXML(){

    return;

    $.ajax({
        'url'           : 'sitemap.php',
        'method'        : 'post',
        'dataType'      : 'json'
    });

}

//parametrosObj = {};
//parametrosObj.parametro1 = valor1
//parametrosObj.parametro2 = valor2
/**
 * Toma una URL actual, agrega o modifica parámetros de consulta en esa URL según un objeto proporcionado
 * (parametrosObj), y realiza redirecciones en la URL según ciertas condiciones y el valor de redirigira.
 * Luego, devuelve la URL resultante como una cadena de texto.
 * @param parametrosObj
 * @param redirigira
 * @returns {string}
 */
function anyadirParametrosAurl(parametrosObj, redirigira) {
    const url = new URL(window.location.href);
    const query_string = url.search;
    const search_params = new URLSearchParams(query_string);
    const orden_valor = search_params.get("orden");
    let dirurl = url.pathname;

    $.each(parametrosObj, function (key, val) {
        search_params.set(key, val);
    });

    // Remover el idioma
    if(/\/\w{2}$/.test(dirurl)) {
        dirurl = dirurl.replace(/\w{2}$/, "");
    }

    const dirUrlSanetized = dirurl.substring(1);
    let redirigiraSanetized = redirigira;

    // Remover el idioma
    if(/\/\w{2}$/.test(redirigiraSanetized)) {
        redirigiraSanetized = redirigira.replace(/\w{2}$/, "");
    }

    // TODO: Estos if se llegan a llamar de alguna forma? Parece que solo sea necesario el final
    if (redirigira == "alquiler.php" && dirurl.includes('venta.php')) {
        dirurl = dirurl.replace("venta.php", "alquiler.php");
    } else if (redirigira == "venta.php" && dirurl.includes('alquiler.php')) {
        dirurl = dirurl.replace("alquiler.php", "venta.php");
    } else if (redirigira == "venta.php") {
        if (/[a-zA-Z].php/.test(dirurl)) {
            dirurl = dirurl.replace(/[a-zA-Z]*.php/gi, 'venta.php');
        } else {
            dirurl = dirurl + 'venta.php';
        }
    } else if (redirigira == "alquiler.php") {
        if (/[a-zA-Z].php/.test(dirurl)) {
            dirurl = dirurl.replace(/[a-zA-Z]*.php/gi, 'alquiler.php');
        } else {
            dirurl = dirurl + 'alquiler.php';
        }
    } else {
        if (dirUrlSanetized !== redirigiraSanetized) {
            if (/[a-zA-Z].php/.test(dirurl) && !/banco.php/.test(dirurl)) {
                dirurl = dirurl.replace(/[a-zA-Z]*.php/gi, redirigira);
            } else if (!redirigira.includes("frame-clientes")) {
                dirurl = dirurl + redirigira;
            }
        }
    }

    url.pathname = dirurl;
    url.search = search_params.toString();

    if(redirigira.includes("frame-clientes")){
        if(orden_valor > 0){
            var url_a_cambiar = window.location.search.toString();
            var nuevaurl = url_a_cambiar.replace("orden="+orden_valor,"orden="+parametrosObj.orden);

            return url.origin + "/"+redirigira + nuevaurl;
        }
        else{
            search_params.set('orden', parametrosObj.orden);

            return `${dirurl}?${search_params.toString()}`;
        }
    }

    return url.toString();
}

function modalAlVuelo(contenidoHTML) {
    // Crear nuevo elemento div
    var modalAlVuelo = document.createElement('div');

    // Asignar clase para el estilo
    modalAlVuelo.className = 'modalAlVuelo';
    modalAlVuelo.id = 'modalAlVuelo';

    // Crear contenido de la modalAlVuelo
    var contenidoModal = document.createElement('div');
    contenidoModal.className = 'contenido-modalAlVuelo';

    // Añadir el contenido HTML al contenido de la modalAlVuelo
    contenidoModal.innerHTML = contenidoHTML;

    // Crear botón de cierre
    var botonCerrar = document.createElement('span');
    botonCerrar.className = 'boton-cerrar';
    botonCerrar.innerHTML = 'X';

    // Función para cerrar la modalAlVuelo
    botonCerrar.onclick = function() {
        // Eliminar la modalAlVuelo del DOM
        document.body.removeChild(modalAlVuelo);
    };

    // Añadir botón de cierre al contenido de la modalAlVuelo
    contenidoModal.appendChild(botonCerrar);

    // Añadir contenido de la modalAlVuelo a la modalAlVuelo
    modalAlVuelo.appendChild(contenidoModal);

    // Añadir modalAlVuelo al cuerpo del documento
    document.body.appendChild(modalAlVuelo);
}

function throttle(func, delay) {
    let isThrottled = false;

    return function() {
        const context = this;
        const args = arguments;

        if (!isThrottled) {
            // Call the function
            func.apply(context, args);
            // Set throttling flag
            isThrottled = true;
            // Reset throttling flag after delay
            setTimeout(() => {
                isThrottled = false;
            }, delay);
        }
    };
}

tareaSitemapXML();

