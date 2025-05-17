# Baden liest die Bibel - Temporäre Landingpage

Diese Landingpage dient als Vorschau und Ankündigung für das Projekt "Baden liest die Bibel", bis die vollständige Webseite mit allen Funktionen (Atelier-Details, Anmeldung etc.) am 1. Juni 2025 verfügbar sein wird.

## Projektstruktur

```
baden-liest-bibel/
│
├── index.html          # Hauptseite mit Countdown
├── css/
│   └── styles.css      # Stilregeln
├── js/
│   ├── countdown.js    # JavaScript für den Countdown
│   └── countdown-test.js # Test-Version des Countdowns (für Entwickler)
└── images/
    ├── favicon-white.png     # Favicon
    ├── bg-wave-pattern.png   # Hintergrundelement mit Wellenlinien
    └── .gitkeep              # Platzhalter für Git
```

## Features

- Responsive Design für alle Bildschirmgrößen (Desktop, Tablet, Mobile)
- Countdown-Timer bis zum 1. Juni 2025, 00:00:00 Uhr mit Anzeige von Tagen, Stunden, Minuten und Sekunden
- Automatische Weiterleitung zur Anmeldeseite, sobald der Countdown abgelaufen ist
- Konsistente Farbgebung und Typografie entsprechend dem Projekt-Design
- Animationen für ein ansprechendes visuelles Erlebnis

## Countdown-Funktionalität

Der Countdown zählt die verbleibende Zeit bis zum 1. Juni 2025, 00:00:00 Uhr herunter:

- Die Zeit wird in Tagen, Stunden, Minuten und Sekunden angezeigt
- Alle Zeiteinheiten werden mit führenden Nullen dargestellt (z.B. "09" statt "9")
- Das Sekundenfeld blinkt dezent im Sekundentakt
- Nach Ablauf des Countdowns wird eine Meldung angezeigt und der Benutzer zur Anmeldeseite weitergeleitet

### Test-Modus

Für Testzwecke gibt es eine separate JavaScript-Datei `countdown-test.js`, mit der der Countdown auf ein nahes Datum gesetzt werden kann:

1. In `index.html` die JavaScript-Einbindung ändern:
   ```html
   <!-- <script src="js/countdown.js"></script> -->
   <script src="js/countdown-test.js"></script>
   ```

2. In `countdown-test.js` die Variable `testMode` auf `true` setzen:
   ```javascript
   const testMode = true; // Auf true setzen, um den Test-Modus zu aktivieren
   ```

3. Die Seite neu laden. Der Countdown läuft nun nur 30 Sekunden und zeigt dann das Verhalten bei Ablauf.

## Verwendete Technologien

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts (Open Sans)

## Deployment-Anleitung

### Option 1: Direktes Hochladen auf den Webspace

1. Laden Sie alle Dateien und Ordner im Verzeichnis `baden-liest-bibel` auf Ihren Webserver hoch
2. Die Dateien sollten in das Root-Verzeichnis der Domain www.badenliestdiebibel.ch hochgeladen werden
3. Stellen Sie sicher, dass die Datei `countdown.js` (nicht `countdown-test.js`) in `index.html` eingebunden ist

### Option 2: Hosting über Nginx auf dem VPS

1. Übertragen Sie die Dateien auf den VPS (z.B. via SFTP oder SCP)
2. Konfigurieren Sie Nginx mit etwa folgender Konfiguration:

```nginx
server {
    listen 80;
    server_name badenliestdiebibel.ch www.badenliestdiebibel.ch;
    
    root /pfad/zu/baden-liest-bibel;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

3. Speichern Sie die Konfiguration z.B. unter `/etc/nginx/sites-available/badenliestdiebibel.ch`
4. Erstellen Sie einen Symlink: `ln -s /etc/nginx/sites-available/badenliestdiebibel.ch /etc/nginx/sites-enabled/`
5. Testen Sie die Konfiguration: `nginx -t`
6. Starten Sie Nginx neu: `systemctl restart nginx`

## Anpassungen und Wartung

- Um das Zieldatum zu ändern, bearbeiten Sie die Zeile mit `const countdownDate` in `countdown.js`
- Für Farbänderungen können die CSS-Variablen am Anfang der `styles.css` angepasst werden
- Um die Weiterleitungs-URL zu ändern, bearbeiten Sie die `window.location.href` Zeile in `countdown.js`

## Hinweise

- Diese Landingpage wird am 1. Juni 2025 durch die vollständige Webseite ersetzt
- Der Countdown läuft automatisch und leitet nach Ablauf auf die Anmeldeseite weiter
- Die Landingpage ist vollständig statisch und benötigt keine Datenbank oder Backend