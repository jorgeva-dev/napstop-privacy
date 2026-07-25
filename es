<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NapStop — Política de privacidad</title>
<meta name="description" content="Política de privacidad de NapStop, la alarma por ubicación que te despierta antes de tu parada. Tu ubicación no sale de tu dispositivo.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --night:#0F1424;
    --panel:#1A2036;
    --rule:#2A3350;
    --ink:#E8EAF0;
    --muted:#8892AA;
    --indigo:#5C6BC0;
    --amber:#FF7043;
    --signal:#4DB6AC;
    --measure:64ch;
  }

  *{box-sizing:border-box;}

  html{-webkit-text-size-adjust:100%;}

  body{
    margin:0;
    background:var(--night);
    color:var(--ink);
    font-family:"IBM Plex Sans",system-ui,-apple-system,sans-serif;
    font-size:16.5px;
    line-height:1.65;
    -webkit-font-smoothing:antialiased;
  }

  .wrap{
    max-width:var(--measure);
    margin:0 auto;
    padding:0 24px;
  }

  /* ---------- masthead ---------- */

  .masthead{
    border-bottom:1px solid var(--rule);
    padding:28px 0 20px;
  }

  .masthead .wrap{
    display:flex;
    flex-wrap:wrap;
    gap:16px;
    align-items:baseline;
    justify-content:space-between;
  }

  .brand{
    font-family:"Barlow Condensed",sans-serif;
    font-weight:700;
    font-size:30px;
    letter-spacing:.06em;
    text-transform:uppercase;
    color:var(--ink);
    margin:0;
  }

  .brand span{color:var(--indigo);}

  .langbar{
    display:flex;
    gap:4px;
    font-family:"IBM Plex Mono",monospace;
    font-size:12px;
  }

  .langbar button{
    background:transparent;
    border:1px solid var(--rule);
    color:var(--muted);
    padding:5px 11px;
    border-radius:3px;
    cursor:pointer;
    letter-spacing:.1em;
    text-transform:uppercase;
    font-family:inherit;
    font-size:inherit;
    transition:color .15s ease,border-color .15s ease;
  }

  .langbar button:hover{color:var(--ink);border-color:var(--indigo);}

  .langbar button[aria-pressed="true"]{
    color:var(--night);
    background:var(--indigo);
    border-color:var(--indigo);
  }

  :focus-visible{outline:2px solid var(--amber);outline-offset:2px;}

  /* JS-off fallback: no tabs, every language stacked and visible */
  .langbar{display:none;}
  body.js .langbar{display:flex;}
  body.js .doc[hidden]{display:none;}
  .doc{display:block;}

  /* ---------- thesis ---------- */

  .thesis{padding:56px 0 8px;}

  .eyebrow{
    font-family:"IBM Plex Mono",monospace;
    font-size:11.5px;
    letter-spacing:.18em;
    text-transform:uppercase;
    color:var(--muted);
    margin:0 0 14px;
  }

  .thesis h1{
    font-family:"Barlow Condensed",sans-serif;
    font-weight:600;
    font-size:clamp(38px,8vw,60px);
    line-height:1.03;
    letter-spacing:.005em;
    margin:0 0 18px;
  }

  .thesis p{
    color:var(--muted);
    max-width:52ch;
    margin:0;
  }

  /* ---------- the board (signature) ---------- */

  .board{
    margin:38px 0 8px;
    background:var(--panel);
    border:1px solid var(--rule);
    border-radius:4px;
    overflow:hidden;
  }

  .board-head,
  .board-row{
    display:grid;
    grid-template-columns:1fr auto;
    gap:16px;
    align-items:center;
    padding:11px 18px;
    font-family:"IBM Plex Mono",monospace;
    font-size:13px;
  }

  .board-head{
    color:var(--muted);
    font-size:10.5px;
    letter-spacing:.16em;
    text-transform:uppercase;
    border-bottom:1px solid var(--rule);
    background:rgba(0,0,0,.16);
  }

  .board-row{border-bottom:1px solid rgba(42,51,80,.5);}
  .board-row:last-child{border-bottom:0;}

  .board-row .what{color:var(--ink);}

  .board-row .stamp{
    color:var(--signal);
    font-weight:500;
    letter-spacing:.05em;
    text-transform:uppercase;
    font-size:11.5px;
    text-align:right;
  }

  .board-row .stamp.on{color:var(--amber);}

  @media (prefers-reduced-motion:no-preference){
    body.js .board-row{
      opacity:0;
      transform:translateY(-6px);
      animation:flip .34s ease forwards;
    }
    @keyframes flip{to{opacity:1;transform:none;}}
  }

  .board-note{
    font-family:"IBM Plex Mono",monospace;
    font-size:11.5px;
    color:var(--muted);
    margin:10px 2px 0;
    line-height:1.5;
  }

  /* ---------- policy body ---------- */

  .policy{padding:16px 0 72px;}

  .policy h2{
    font-family:"Barlow Condensed",sans-serif;
    font-weight:600;
    font-size:26px;
    letter-spacing:.02em;
    margin:46px 0 6px;
    padding-top:22px;
    border-top:1px solid var(--rule);
  }

  .policy h2:first-of-type{border-top:0;padding-top:0;margin-top:34px;}

  .policy h3{
    font-family:"IBM Plex Sans",sans-serif;
    font-weight:600;
    font-size:15px;
    margin:26px 0 4px;
    color:var(--ink);
  }

  .policy p{margin:0 0 14px;}

  .policy ul{margin:0 0 16px;padding-left:0;list-style:none;}

  .policy li{
    position:relative;
    padding-left:22px;
    margin-bottom:7px;
  }

  .policy li::before{
    content:"";
    position:absolute;
    left:2px;
    top:.72em;
    width:7px;
    height:1px;
    background:var(--indigo);
  }

  .policy a{color:var(--indigo);text-decoration:underline;text-underline-offset:3px;}
  .policy a:hover{color:var(--ink);}

  code.perm{
    font-family:"IBM Plex Mono",monospace;
    font-size:12.5px;
    color:var(--muted);
    background:rgba(92,107,192,.12);
    padding:1px 6px;
    border-radius:3px;
  }

  .callout{
    border-left:2px solid var(--amber);
    padding:2px 0 2px 18px;
    margin:20px 0;
    color:var(--ink);
  }

  .updated{
    font-family:"IBM Plex Mono",monospace;
    font-size:11.5px;
    letter-spacing:.1em;
    text-transform:uppercase;
    color:var(--muted);
    margin:34px 0 0;
  }

  footer{
    border-top:1px solid var(--rule);
    padding:24px 0 44px;
    font-family:"IBM Plex Mono",monospace;
    font-size:11.5px;
    letter-spacing:.08em;
    color:var(--muted);
    text-transform:uppercase;
  }

  @media (max-width:520px){
    .board-head,.board-row{grid-template-columns:1fr;gap:2px;padding:10px 14px;}
    .board-row .stamp{text-align:left;}
    .board-head .stamp{display:none;}
  }

  @media print{
    body{background:#fff;color:#000;}
    .langbar,.board-note{display:none;}
    .doc[hidden]{display:block !important;}
  }
</style>
</head>
<body>

<header class="masthead">
  <div class="wrap">
    <p class="brand">Nap<span>Stop</span></p>
    <nav class="langbar" aria-label="Idioma / Language / Idioma">
      <button type="button" data-go="es" aria-pressed="true">Español</button>
      <button type="button" data-go="en" aria-pressed="false">English</button>
      <button type="button" data-go="ca" aria-pressed="false">Català</button>
    </nav>
  </div>
</header>

<main>

<!-- ══════════════════ ESPAÑOL ══════════════════ -->
<article class="doc" data-lang="es" lang="es">
  <section class="thesis wrap">
    <p class="eyebrow">Política de privacidad</p>
    <h1>Nada sale de tu teléfono.</h1>
    <p>NapStop necesita saber dónde estás para despertarte antes de tu parada. Esa ubicación se procesa únicamente en tu dispositivo y no se envía a ningún servidor.</p>

    <div class="board">
      <div class="board-head"><span>Dato</span><span class="stamp">Estado</span></div>
      <div class="board-row"><span class="what">Ubicación</span><span class="stamp on">Solo en tu dispositivo</span></div>
      <div class="board-row"><span class="what">Alarmas guardadas</span><span class="stamp on">Solo en tu dispositivo</span></div>
      <div class="board-row"><span class="what">Identificador de publicidad</span><span class="stamp on">Usado por Google AdMob, con tu consentimiento</span></div>
      <div class="board-row"><span class="what">Contactos, cámara, archivos</span><span class="stamp">Sin acceso</span></div>
      <div class="board-row"><span class="what">Analítica</span><span class="stamp">No existe</span></div>
      <div class="board-row"><span class="what">Publicidad</span><span class="stamp on">Google AdMob, solo en ajustes</span></div>
      <div class="board-row"><span class="what">Cuentas o registro</span><span class="stamp">No se piden</span></div>
    </div>
    <p class="board-note">Salvo la publicidad de Google AdMob, descrita más abajo, ningún dato de esta tabla se transmite fuera del teléfono, se comparte con terceros ni se vende.</p>
  </section>

  <section class="policy wrap">

    <h2>Quién es el responsable</h2>
    <p>NapStop está desarrollada y mantenida por jorgeva.dev, desarrollador independiente con domicilio en España. Para cualquier cuestión relacionada con esta política puedes escribir a jorgeva.dev@gmail.com.</p>

    <h2>Qué datos utiliza la aplicación</h2>
    <p>NapStop solicita los siguientes permisos, todos ellos necesarios para su única función:</p>
    <ul>
      <li><strong>Ubicación precisa y aproximada</strong> <code class="perm">ACCESS_FINE_LOCATION</code> <code class="perm">ACCESS_COARSE_LOCATION</code> — para mostrar tu posición en el mapa y detectar cuándo llegas a la zona de alarma.</li>
      <li><strong>Ubicación en segundo plano</strong> <code class="perm">ACCESS_BACKGROUND_LOCATION</code> — para que la alarma funcione mientras duermes, con la pantalla apagada y la aplicación cerrada.</li>
      <li><strong>Notificaciones</strong> <code class="perm">POST_NOTIFICATIONS</code> — para mostrar la alarma y la notificación del servicio activo.</li>
    </ul>
    <p>Además, la aplicación guarda las alarmas que tú creas: una etiqueta, unas coordenadas, un radio y el medio de transporte elegido.</p>
    <p>NapStop <strong>no</strong> accede a tus contactos, cámara, micrófono, archivos, calendario ni historial de llamadas. El único identificador que puede compartirse con un tercero es el identificador de publicidad, usado por Google AdMob y descrito en la sección «Publicidad» más abajo.</p>

    <h2>Por qué necesita la ubicación en segundo plano</h2>
    <p>La función principal de NapStop es sonar en el momento exacto en que llegas a un punto que tú has marcado, normalmente mientras duermes en un tren o un autobús. Sin acceso a la ubicación en segundo plano, la aplicación no puede cumplir esa función y deja de tener sentido.</p>
    <div class="callout">
      <p>NapStop recopila datos de ubicación para activar tu alarma incluso cuando la aplicación está cerrada o no se está usando.</p>
    </div>
    <p>Este acceso se produce <strong>únicamente mientras tienes una alarma activa</strong> creada por ti, y se detiene automáticamente cuando la alarma suena, se cancela o se desactiva.</p>

    <h2>Dónde se procesa tu ubicación</h2>
    <p>Toda la lógica ocurre en tu propio teléfono. NapStop utiliza la API de Geofencing de Google Play Services, un componente del sistema Android, para detectar la entrada en la zona que has definido. Tu posición no se transmite al desarrollador ni a ningún servidor propio, porque NapStop no tiene servidores.</p>
    <p>Las alarmas que creas se almacenan en una base de datos local dentro de la aplicación, en tu dispositivo.</p>

    <h2>Servicios de terceros</h2>
    <p>NapStop se apoya en varios componentes de Google que forman parte del ecosistema Android:</p>
    <ul>
      <li><strong>Google Play Services (Geofencing y ubicación)</strong> — detecta la llegada a la zona de alarma.</li>
      <li><strong>Google Maps SDK for Android</strong> — muestra el mapa donde eliges el punto.</li>
      <li><strong>Google AdMob</strong> — muestra el banner publicitario en las pantallas de configuración; puede usar tu identificador de publicidad si das tu consentimiento. Ver la sección «Publicidad» más abajo.</li>
    </ul>
    <p>Estos componentes son de Google y su tratamiento de datos se rige por la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacidad de Google</a>, ajena a esta aplicación. NapStop no envía a Google ninguna información adicional sobre ti más allá de lo que estos componentes requieren para funcionar.</p>

    <h2>Publicidad</h2>
    <p>NapStop muestra un banner publicitario de <strong>Google AdMob</strong> únicamente en las pantallas de configuración: crear o editar una alarma, la lista de alarmas guardadas y los ajustes. La pantalla de alarma activa mientras duermes, la pantalla de alarma sonando y su botón de detener están siempre libres de publicidad.</p>
    <p>Para mostrar anuncios, Google AdMob puede usar tu <strong>identificador de publicidad</strong> y datos técnicos del dispositivo (modelo, versión de Android, dirección IP aproximada). Si te encuentras en el Espacio Económico Europeo, Reino Unido o Suiza, NapStop pedirá tu consentimiento mediante el formulario de la User Messaging Platform (UMP) de Google antes de cargar el primer anuncio; podrás elegir entre anuncios personalizados o no personalizados, o rechazarlos.</p>
    <p>Puedes revisar tu elección de consentimiento en cualquier momento desde los ajustes de la aplicación, y gestionar tus preferencias de anuncios personalizados con Google desde <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>.</p>
    <p>NapStop ofrece además una compra única, <strong>NapStop Pro</strong>, que desactiva la publicidad de forma permanente en toda la aplicación.</p>

    <h2>Conservación y eliminación de datos</h2>
    <p>Como no se recoge nada fuera de tu dispositivo, no hay datos que conservar en ningún otro sitio. Puedes eliminar la información local en cualquier momento:</p>
    <ul>
      <li>Borrando alarmas concretas desde la propia aplicación.</li>
      <li>Borrando los datos de la aplicación desde los ajustes de Android.</li>
      <li>Desinstalando NapStop, lo que elimina toda la información asociada.</li>
    </ul>

    <h2>Menores</h2>
    <p>NapStop no está dirigida a menores de edad ni recopila de forma consciente información de ellos. Su ficha en Google Play está destinada a un público adulto.</p>

    <h2>Tus derechos</h2>
    <p>Conforme al Reglamento General de Protección de Datos (UE) 2016/679, tienes derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición sobre tus datos personales. Dado que NapStop no recoge ni almacena datos personales fuera de tu dispositivo, puedes ejercer estos derechos directamente desinstalando la aplicación o borrando sus datos.</p>
    <p>Si consideras que se ha vulnerado tu privacidad, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a>).</p>

    <h2>Cambios en esta política</h2>
    <p>Si NapStop cambia su forma de tratar los datos, esta página se actualizará y se modificará la fecha que aparece abajo. Los cambios relevantes se anunciarán además en las notas de la versión en Google Play.</p>

    <h2>Contacto</h2>
    <p>Para cualquier duda sobre esta política de privacidad: jorgeva.dev@gmail.com</p>

    <p class="updated">Última actualización: 25 de julio de 2026</p>
  </section>
</article>

<!-- ══════════════════ ENGLISH ══════════════════ -->
<article class="doc" data-lang="en" lang="en">
  <section class="thesis wrap">
    <p class="eyebrow">Privacy policy</p>
    <h1>Nothing leaves your phone.</h1>
    <p>NapStop needs to know where you are so it can wake you before your stop. That location is processed on your device alone and is never sent to any server.</p>

    <div class="board">
      <div class="board-head"><span>Data</span><span class="stamp">Status</span></div>
      <div class="board-row"><span class="what">Location</span><span class="stamp on">Stays on your device</span></div>
      <div class="board-row"><span class="what">Saved alarms</span><span class="stamp on">Stays on your device</span></div>
      <div class="board-row"><span class="what">Advertising identifier</span><span class="stamp on">Used by Google AdMob, with your consent</span></div>
      <div class="board-row"><span class="what">Contacts, camera, files</span><span class="stamp">No access</span></div>
      <div class="board-row"><span class="what">Analytics</span><span class="stamp">None</span></div>
      <div class="board-row"><span class="what">Advertising</span><span class="stamp on">Google AdMob, settings screens only</span></div>
      <div class="board-row"><span class="what">Accounts or sign-up</span><span class="stamp">Not required</span></div>
    </div>
    <p class="board-note">Except for Google AdMob advertising, described below, none of the data in this table is transmitted off the phone, shared with third parties or sold.</p>
  </section>

  <section class="policy wrap">

    <h2>Who is responsible</h2>
    <p>NapStop is developed and maintained by jorgeva.dev, an independent developer based in Spain. For anything related to this policy, write to jorgeva.dev@gmail.com.</p>

    <h2>What data the app uses</h2>
    <p>NapStop requests the following permissions, all of them required for its single purpose:</p>
    <ul>
      <li><strong>Precise and approximate location</strong> <code class="perm">ACCESS_FINE_LOCATION</code> <code class="perm">ACCESS_COARSE_LOCATION</code> — to show your position on the map and detect when you reach the alarm area.</li>
      <li><strong>Background location</strong> <code class="perm">ACCESS_BACKGROUND_LOCATION</code> — so the alarm works while you sleep, with the screen off and the app closed.</li>
      <li><strong>Notifications</strong> <code class="perm">POST_NOTIFICATIONS</code> — to show the alarm and the running service notification.</li>
    </ul>
    <p>The app also stores the alarms you create: a label, coordinates, a radius and the transport mode you picked.</p>
    <p>NapStop does <strong>not</strong> access your contacts, camera, microphone, files, calendar or call history. The only identifier that may be shared with a third party is the advertising identifier, used by Google AdMob and described in the "Advertising" section below.</p>

    <h2>Why it needs background location</h2>
    <p>NapStop's core function is to ring at the exact moment you reach a point you marked, usually while you are asleep on a train or a bus. Without background location access the app cannot do that, and it has no purpose left.</p>
    <div class="callout">
      <p>NapStop collects location data to trigger your alarm even when the app is closed or not in use.</p>
    </div>
    <p>This access happens <strong>only while you have an active alarm</strong> that you created, and stops automatically once the alarm rings, is cancelled or is switched off.</p>

    <h2>Where your location is processed</h2>
    <p>All the logic runs on your own phone. NapStop uses the Geofencing API from Google Play Services, an Android system component, to detect entry into the area you defined. Your position is never transmitted to the developer or to any first-party server, because NapStop has no servers.</p>
    <p>The alarms you create are stored in a local database inside the app, on your device.</p>

    <h2>Third-party services</h2>
    <p>NapStop relies on several Google components that are part of the Android ecosystem:</p>
    <ul>
      <li><strong>Google Play Services (Geofencing and location)</strong> — detects arrival at the alarm area.</li>
      <li><strong>Google Maps SDK for Android</strong> — displays the map where you choose your point.</li>
      <li><strong>Google AdMob</strong> — displays the ad banner on settings screens; it may use your advertising identifier if you give your consent. See the "Advertising" section below.</li>
    </ul>
    <p>These components belong to Google and their data handling is governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>, which is outside the scope of this app. NapStop sends Google no additional information about you beyond what these components need in order to work.</p>

    <h2>Advertising</h2>
    <p>NapStop shows an ad banner from <strong>Google AdMob</strong> only on settings screens: creating or editing an alarm, the list of saved alarms, and settings. The active-alarm screen while you sleep, the ringing-alarm screen and its stop button are always ad-free.</p>
    <p>To show ads, Google AdMob may use your <strong>advertising identifier</strong> and technical device data (model, Android version, approximate IP address). If you are in the European Economic Area, the UK or Switzerland, NapStop will ask for your consent via Google's User Messaging Platform (UMP) form before loading the first ad; you can choose between personalized and non-personalized ads, or decline.</p>
    <p>You can review your consent choice at any time from the app's settings, and manage your personalized ad preferences with Google at <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>.</p>
    <p>NapStop also offers a one-time purchase, <strong>NapStop Pro</strong>, which permanently turns off advertising throughout the app.</p>

    <h2>Data retention and deletion</h2>
    <p>Since nothing is collected off your device, there is no data held anywhere else. You can remove the local information at any time:</p>
    <ul>
      <li>Delete individual alarms from within the app.</li>
      <li>Clear the app's data from Android settings.</li>
      <li>Uninstall NapStop, which removes all associated information.</li>
    </ul>

    <h2>Children</h2>
    <p>NapStop is not directed at children and does not knowingly collect information from them. Its Google Play listing targets an adult audience.</p>

    <h2>Your rights</h2>
    <p>Under the General Data Protection Regulation (EU) 2016/679, you have the right to access, rectify, erase, restrict, port and object to the processing of your personal data. Because NapStop neither collects nor stores personal data outside your device, you can exercise these rights directly by uninstalling the app or clearing its data.</p>
    <p>If you believe your privacy has been infringed, you may lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a>).</p>

    <h2>Changes to this policy</h2>
    <p>If NapStop changes the way it handles data, this page will be updated and the date below will change. Significant changes will also be announced in the Google Play release notes.</p>

    <h2>Contact</h2>
    <p>For any question about this privacy policy: jorgeva.dev@gmail.com</p>

    <p class="updated">Last updated: 25 July 2026</p>
  </section>
</article>

<!-- ══════════════════ CATALÀ ══════════════════ -->
<article class="doc" data-lang="ca" lang="ca">
  <section class="thesis wrap">
    <p class="eyebrow">Política de privacitat</p>
    <h1>Res no surt del teu telèfon.</h1>
    <p>NapStop necessita saber on ets per despertar-te abans de la teva parada. Aquesta ubicació es processa únicament al teu dispositiu i no s'envia a cap servidor.</p>

    <div class="board">
      <div class="board-head"><span>Dada</span><span class="stamp">Estat</span></div>
      <div class="board-row"><span class="what">Ubicació</span><span class="stamp on">Només al teu dispositiu</span></div>
      <div class="board-row"><span class="what">Alarmes desades</span><span class="stamp on">Només al teu dispositiu</span></div>
      <div class="board-row"><span class="what">Identificador de publicitat</span><span class="stamp on">Utilitzat per Google AdMob, amb el teu consentiment</span></div>
      <div class="board-row"><span class="what">Contactes, càmera, fitxers</span><span class="stamp">Sense accés</span></div>
      <div class="board-row"><span class="what">Analítica</span><span class="stamp">No n'hi ha</span></div>
      <div class="board-row"><span class="what">Publicitat</span><span class="stamp on">Google AdMob, només als ajustos</span></div>
      <div class="board-row"><span class="what">Comptes o registre</span><span class="stamp">No es demanen</span></div>
    </div>
    <p class="board-note">Tret de la publicitat de Google AdMob, descrita més avall, cap dada d'aquesta taula es transmet fora del telèfon, es comparteix amb tercers ni es ven.</p>
  </section>

  <section class="policy wrap">

    <h2>Qui n'és el responsable</h2>
    <p>NapStop està desenvolupada i mantinguda per jorgeva.dev, desenvolupador independent amb domicili a Espanya. Per a qualsevol qüestió relacionada amb aquesta política pots escriure a jorgeva.dev@gmail.com.</p>

    <h2>Quines dades utilitza l'aplicació</h2>
    <p>NapStop sol·licita els permisos següents, tots necessaris per a la seva única funció:</p>
    <ul>
      <li><strong>Ubicació precisa i aproximada</strong> <code class="perm">ACCESS_FINE_LOCATION</code> <code class="perm">ACCESS_COARSE_LOCATION</code> — per mostrar la teva posició al mapa i detectar quan arribes a la zona d'alarma.</li>
      <li><strong>Ubicació en segon pla</strong> <code class="perm">ACCESS_BACKGROUND_LOCATION</code> — perquè l'alarma funcioni mentre dorms, amb la pantalla apagada i l'aplicació tancada.</li>
      <li><strong>Notificacions</strong> <code class="perm">POST_NOTIFICATIONS</code> — per mostrar l'alarma i la notificació del servei actiu.</li>
    </ul>
    <p>A més, l'aplicació desa les alarmes que tu crees: una etiqueta, unes coordenades, un radi i el mitjà de transport triat.</p>
    <p>NapStop <strong>no</strong> accedeix als teus contactes, càmera, micròfon, fitxers, calendari ni historial de trucades. L'únic identificador que es pot compartir amb un tercer és l'identificador de publicitat, utilitzat per Google AdMob i descrit a la secció «Publicitat» més avall.</p>

    <h2>Per què necessita la ubicació en segon pla</h2>
    <p>La funció principal de NapStop és sonar en el moment exacte en què arribes a un punt que tu has marcat, normalment mentre dorms en un tren o un autobús. Sense accés a la ubicació en segon pla, l'aplicació no pot complir aquesta funció i deixa de tenir sentit.</p>
    <div class="callout">
      <p>NapStop recull dades d'ubicació per activar la teva alarma fins i tot quan l'aplicació està tancada o no s'està utilitzant.</p>
    </div>
    <p>Aquest accés es produeix <strong>només mentre tens una alarma activa</strong> creada per tu, i s'atura automàticament quan l'alarma sona, es cancel·la o es desactiva.</p>

    <h2>On es processa la teva ubicació</h2>
    <p>Tota la lògica passa al teu propi telèfon. NapStop utilitza l'API de Geofencing de Google Play Services, un component del sistema Android, per detectar l'entrada a la zona que has definit. La teva posició no es transmet al desenvolupador ni a cap servidor propi, perquè NapStop no té servidors.</p>
    <p>Les alarmes que crees es desen en una base de dades local dins de l'aplicació, al teu dispositiu.</p>

    <h2>Serveis de tercers</h2>
    <p>NapStop es recolza en diversos components de Google que formen part de l'ecosistema Android:</p>
    <ul>
      <li><strong>Google Play Services (Geofencing i ubicació)</strong> — detecta l'arribada a la zona d'alarma.</li>
      <li><strong>Google Maps SDK for Android</strong> — mostra el mapa on tries el punt.</li>
      <li><strong>Google AdMob</strong> — mostra el bàner publicitari a les pantalles d'ajustos; pot utilitzar el teu identificador de publicitat si dones el teu consentiment. Vegeu la secció «Publicitat» més avall.</li>
    </ul>
    <p>Aquests components són de Google i el seu tractament de dades es regeix per la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacitat de Google</a>, aliena a aquesta aplicació. NapStop no envia a Google cap informació addicional sobre tu més enllà del que aquests components necessiten per funcionar.</p>

    <h2>Publicitat</h2>
    <p>NapStop mostra un bàner publicitari de <strong>Google AdMob</strong> únicament a les pantalles d'ajustos: crear o editar una alarma, la llista d'alarmes desades i els ajustos. La pantalla d'alarma activa mentre dorms, la pantalla d'alarma sonant i el seu botó d'aturar estan sempre lliures de publicitat.</p>
    <p>Per mostrar anuncis, Google AdMob pot utilitzar el teu <strong>identificador de publicitat</strong> i dades tècniques del dispositiu (model, versió d'Android, adreça IP aproximada). Si et trobes a l'Espai Econòmic Europeu, el Regne Unit o Suïssa, NapStop et demanarà el consentiment mitjançant el formulari de la User Messaging Platform (UMP) de Google abans de carregar el primer anunci; podràs triar entre anuncis personalitzats o no personalitzats, o rebutjar-los.</p>
    <p>Pots revisar la teva elecció de consentiment en qualsevol moment des dels ajustos de l'aplicació, i gestionar les teves preferències d'anuncis personalitzats amb Google des de <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>.</p>
    <p>NapStop també ofereix una compra única, <strong>NapStop Pro</strong>, que desactiva la publicitat de manera permanent a tota l'aplicació.</p>

    <h2>Conservació i eliminació de dades</h2>
    <p>Com que no es recull res fora del teu dispositiu, no hi ha dades a conservar en cap altre lloc. Pots eliminar la informació local en qualsevol moment:</p>
    <ul>
      <li>Esborrant alarmes concretes des de la mateixa aplicació.</li>
      <li>Esborrant les dades de l'aplicació des dels ajustos d'Android.</li>
      <li>Desinstal·lant NapStop, cosa que elimina tota la informació associada.</li>
    </ul>

    <h2>Menors</h2>
    <p>NapStop no està adreçada a menors d'edat ni recull de manera conscient informació seva. La seva fitxa a Google Play està destinada a un públic adult.</p>

    <h2>Els teus drets</h2>
    <p>D'acord amb el Reglament General de Protecció de Dades (UE) 2016/679, tens dret d'accés, rectificació, supressió, limitació, portabilitat i oposició sobre les teves dades personals. Atès que NapStop no recull ni emmagatzema dades personals fora del teu dispositiu, pots exercir aquests drets directament desinstal·lant l'aplicació o esborrant-ne les dades.</p>
    <p>Si consideres que s'ha vulnerat la teva privacitat, pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a>).</p>

    <h2>Canvis en aquesta política</h2>
    <p>Si NapStop canvia la manera de tractar les dades, aquesta pàgina s'actualitzarà i es modificarà la data que apareix a sota. Els canvis rellevants s'anunciaran també a les notes de la versió a Google Play.</p>

    <h2>Contacte</h2>
    <p>Per a qualsevol dubte sobre aquesta política de privacitat: jorgeva.dev@gmail.com</p>

    <p class="updated">Darrera actualització: 25 de juliol de 2026</p>
  </section>
</article>

</main>

<footer>
  <div class="wrap">NapStop · com.jorgeva.napstop</div>
</footer>

<script>
(function(){
  document.body.classList.add('js');

  var docs    = Array.prototype.slice.call(document.querySelectorAll('.doc'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.langbar button'));
  var valid   = ['es','en','ca'];

  function show(lang){
    if (valid.indexOf(lang) === -1) lang = 'es';

    docs.forEach(function(doc){
      doc.hidden = (doc.getAttribute('data-lang') !== lang);
    });

    buttons.forEach(function(btn){
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-go') === lang));
    });

    document.documentElement.lang = lang;

    var titles = {
      es: 'NapStop — Política de privacidad',
      en: 'NapStop — Privacy Policy',
      ca: 'NapStop — Política de privacitat'
    };
    document.title = titles[lang];

    // stagger the board rows on each switch
    var rows = document.querySelectorAll('.doc:not([hidden]) .board-row');
    Array.prototype.forEach.call(rows, function(row, i){
      row.style.animationDelay = (i * 45) + 'ms';
    });
  }

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var lang = btn.getAttribute('data-go');
      history.replaceState(null, '', '#' + lang);
      show(lang);
    });
  });

  var initial = (location.hash || '').replace('#','').toLowerCase();
  if (valid.indexOf(initial) === -1){
    var nav = (navigator.language || 'es').slice(0,2).toLowerCase();
    initial = valid.indexOf(nav) !== -1 ? nav : 'es';
  }
  show(initial);
})();
</script>

</body>
</html>
