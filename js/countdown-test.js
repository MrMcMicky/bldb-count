/**
 * Test-Skript für die Countdown-Funktionalität
 * Erlaubt das Testen des Countdowns mit einem nahen Datum
 */

document.addEventListener('DOMContentLoaded', function() {
    // Für Test-Zwecke: Countdown auf 30 Sekunden ab jetzt
    const testMode = false; // Auf true setzen, um den Test-Modus zu aktivieren
    
    // Aktuelles Datum plus 30 Sekunden für Test-Zwecke
    const now = new Date();
    const testDate = new Date(now.getTime() + 30 * 1000); // 30 Sekunden ab jetzt
    
    // Das tatsächliche Zieldatum: 1. Juni 2025, 00:00:00
    const realCountdownDate = new Date("June 1, 2025 00:00:00").getTime();
    
    // Zieldatum basierend auf dem Modus wählen
    const countdownDate = testMode ? testDate.getTime() : realCountdownDate;
    
    // DOM-Elemente für die Zeitanzeige
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Countdown-Funktion, die jede Sekunde aktualisiert wird
    function updateCountdown() {
        // Aktuelles Datum und Zeit
        const now = new Date().getTime();
        
        // Differenz zwischen Zieldatum und aktuellem Datum berechnen
        const distance = countdownDate - now;
        
        // Zeitberechnung für Tage, Stunden, Minuten und Sekunden
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Anzeige aktualisieren mit führenden Nullen
        daysElement.innerText = days.toString().padStart(2, '0');
        hoursElement.innerText = hours.toString().padStart(2, '0');
        minutesElement.innerText = minutes.toString().padStart(2, '0');
        secondsElement.innerText = seconds.toString().padStart(2, '0');
        
        // Besondere Animation für Sekunden, die sich jede Sekunde ändert
        secondsElement.style.animation = 'none';
        setTimeout(function() {
            secondsElement.style.animation = 'secondTick 1s infinite';
        }, 10);
        
        // Wenn das Zieldatum erreicht ist
        if (distance < 0) {
            // Countdown-Interval stoppen
            clearInterval(countdown);
            
            // Anzeige auf 0 setzen
            daysElement.innerText = "00";
            hoursElement.innerText = "00";
            minutesElement.innerText = "00";
            secondsElement.innerText = "00";
            
            // Meldung anzeigen, dass die Anmeldung geöffnet ist
            document.querySelector('.countdown-info').innerHTML = 
                '<strong>Die Anmeldung ist jetzt geöffnet!</strong><br>Entdecken Sie alle Ateliers und melden Sie sich an.';
            
            // Countdown-Elemente visuell verändern
            const countdownItems = document.querySelectorAll('.countdown-item span');
            countdownItems.forEach(item => {
                item.style.animation = 'none';
                item.style.backgroundColor = '#E7F5EF'; // Leichter Mintgrün-Hintergrund
                item.style.color = '#248A5B'; // Dunkleres Grün für den Text
                item.style.borderColor = '#248A5B'; // Dunkleres Grün für den Rahmen
            });
            
            // Im Test-Modus: Nachricht nach 3 Sekunden anzeigen, keine Weiterleitung
            if (testMode) {
                setTimeout(function() {
                    alert("Test abgeschlossen: In der Produktionsversion würde jetzt eine Weiterleitung zur Anmeldeseite erfolgen.");
                    location.reload(); // Seite neu laden für weitere Tests
                }, 3000);
            } else {
                // Keine Weiterleitung in der Produktionsversion
                // Seite bleibt stabil
            }
        }
    }
    
    // Countdown initial ausführen
    updateCountdown();
    
    // Countdown jede Sekunde aktualisieren
    const countdown = setInterval(updateCountdown, 1000);
    
    // Lokale Zeit im Format "DD.MM.YYYY HH:MM:SS" anzeigen (optional)
    function updateLocalTime() {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        // Wenn ein Element mit der ID 'local-time' existiert, die Zeit dort anzeigen
        const localTimeElement = document.getElementById('local-time');
        if (localTimeElement) {
            localTimeElement.textContent = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
        }
    }
    
    // Im Test-Modus: Lokale Zeit anzeigen
    if (testMode) {
        const localTimeContainer = document.querySelector('.local-time-container');
        if (localTimeContainer) {
            localTimeContainer.style.display = 'block';
            updateLocalTime();
            setInterval(updateLocalTime, 1000);
        }
        
        // Zieldatum anzeigen
        console.log("Test-Modus aktiv. Countdown läuft bis: " + new Date(countdownDate).toLocaleString());
    }
});