/**
 * Baden liest die Bibel - Countdown Script
 * Zählt herunter bis zum 5. Juni 2025, 23:59:59 Uhr
 * Optimiert für Performance und Ressourceneffizienz
 */

(function() {
    'use strict';
    
    // DOM-Elemente bei Seiteninitialisierung einmalig cachen
    let daysElement, hoursElement, minutesElement, secondsElement;
    let countdownInterval = null;
    
    // Warten bis das DOM vollständig geladen ist
    document.addEventListener('DOMContentLoaded', initCountdown);
    
    /**
     * Initialisiert den Countdown
     */
    function initCountdown() {
        // DOM-Elemente cachen
        daysElement = document.getElementById('days');
        hoursElement = document.getElementById('hours');
        minutesElement = document.getElementById('minutes');
        secondsElement = document.getElementById('seconds');
        
        // Zieldatum festlegen: 5. Juni 2025, 23:59:59
        const countdownDate = new Date("June 5, 2025 23:59:59").getTime();
        
        // Initial Update durchführen
        updateCountdown(countdownDate);
        
        // Interval starten mit optimierter Update-Frequenz
        countdownInterval = setInterval(function() {
            updateCountdown(countdownDate);
        }, 1000);
        
        // Event Listener für Verlassen der Seite hinzufügen
        window.addEventListener('beforeunload', clearResources);
    }
    
    /**
     * Aktualisiert den Countdown basierend auf dem aktuellen Datum und dem Zieldatum
     * @param {number} countdownDate - Das Zieldatum als Timestamp
     */
    function updateCountdown(countdownDate) {
        // Aktuelles Datum und Zeit
        const now = new Date().getTime();
        
        // Differenz zwischen Zieldatum und aktuellem Datum berechnen
        const distance = countdownDate - now;
        
        // Wenn das Zieldatum erreicht oder überschritten wurde
        if (distance < 0) {
            handleCountdownComplete();
            return;
        }
        
        // Zeitberechnung für Tage, Stunden, Minuten und Sekunden - optimiert
        const days = Math.floor(distance / 86400000); // 1000 * 60 * 60 * 24
        const hours = Math.floor((distance % 86400000) / 3600000); // 1000 * 60 * 60
        const minutes = Math.floor((distance % 3600000) / 60000); // 1000 * 60
        const seconds = Math.floor((distance % 60000) / 1000);
        
        // Anzeige aktualisieren mit führenden Nullen - nur bei Änderungen
        updateElementIfChanged(daysElement, days);
        updateElementIfChanged(hoursElement, hours);
        updateElementIfChanged(minutesElement, minutes);
        updateElementIfChanged(secondsElement, seconds);
    }
    
    /**
     * Aktualisiert ein Element nur wenn sich der Wert geändert hat
     * @param {HTMLElement} element - Das zu aktualisierende DOM-Element
     * @param {number} value - Der neue Wert
     */
    function updateElementIfChanged(element, value) {
        const formattedValue = value.toString().padStart(2, '0');
        if (element.innerText !== formattedValue) {
            element.innerText = formattedValue;
        }
    }
    
    /**
     * Behandelt das Erreichen des Zieldatums
     */
    function handleCountdownComplete() {
        // Interval stoppen
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        
        // Anzeige auf 0 setzen
        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";
        
        // Info-Text aktualisieren
        const countdownInfo = document.querySelector('.countdown-info');
        if (countdownInfo) {
            countdownInfo.innerHTML = 
                '<strong>Die Anmeldung ist jetzt geöffnet!</strong><br>' +
                'Entdecken Sie alle Ateliers und melden Sie sich an.';
        }
        
        // Visuelle Änderungen für Countdown-Elemente
        const countdownItems = document.querySelectorAll('.countdown-item span');
        for (let i = 0; i < countdownItems.length; i++) {
            const item = countdownItems[i];
            item.style.animation = 'none';
            item.style.backgroundColor = '#E7F5EF';
            item.style.color = '#248A5B';
            item.style.borderColor = '#248A5B';
        }
        
        // Keine Weiterleitung - Seite bleibt stabil
    }
    
    /**
     * Räumt Ressourcen auf bevor die Seite verlassen wird
     */
    function clearResources() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }
})();