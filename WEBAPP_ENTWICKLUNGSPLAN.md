# Entwicklungsplan: Baden liest die Bibel - Web-Applikation

## Projektübersicht

Transformation der statischen Countdown-Seite in eine vollständige Web-Applikation für das Veranstaltungsprojekt "Baden liest die Bibel" (16. Oktober - 20. November 2025).

## Technologie-Stack

### Backend
- **Framework:** Laravel 11.x (PHP 8.2+)
- **Datenbank:** PostgreSQL 15
- **Cache:** Redis
- **Queue:** Redis + Laravel Horizon
- **API:** RESTful JSON API mit Laravel Sanctum

### Frontend
- **Framework:** Vue.js 3.4+ mit Composition API
- **State Management:** Pinia
- **Build Tool:** Vite 5.x
- **CSS:** Tailwind CSS 3.x
- **UI Components:** Headless UI

### Zahlungsintegration
- **Provider:** Mollie
- **Methoden:** TWINT, Kreditkarten, Apple Pay, Google Pay

### Deployment
- **Container:** Docker (PHP-FPM + Nginx)
- **CI/CD:** GitHub Actions
- **Hosting:** VPS mit Docker Compose

## Entwicklungsphasen

### Phase 1: Basis-Setup (2 Wochen)

#### Woche 1
- [ ] Laravel-Projekt initialisieren
- [ ] PostgreSQL-Datenbank einrichten
- [ ] Redis-Integration konfigurieren
- [ ] Docker-Entwicklungsumgebung erstellen
- [ ] Basis-Authentifizierung mit Laravel Sanctum

#### Woche 2
- [ ] Datenbank-Schema implementieren
- [ ] Migrations und Seeders erstellen
- [ ] Admin-Bereich Grundstruktur
- [ ] API-Routing und Basis-Controller
- [ ] Unit-Test-Setup mit PHPUnit

### Phase 2: Atelier-Management (3 Wochen)

#### Woche 3
- [ ] Atelier-Model und Relations
- [ ] Admin CRUD für Ateliers
- [ ] Atelier-Sessions Management
- [ ] Atelier-Leaders Verwaltung
- [ ] Bildupload-Funktionalität

#### Woche 4
- [ ] Öffentliche API für Ateliers
- [ ] Verfügbarkeits-Berechnung
- [ ] Wartelisten-Logik
- [ ] Cache-Layer für Performance
- [ ] API-Tests schreiben

#### Woche 5
- [ ] Frontend: Atelier-Übersicht
- [ ] Frontend: Atelier-Detailseiten
- [ ] Filter- und Suchfunktionen
- [ ] Responsive Design
- [ ] Frontend-Tests mit Vitest

### Phase 3: Anmeldesystem (2 Wochen)

#### Woche 6
- [ ] Anmelde-API entwickeln
- [ ] Validierungs-Regeln
- [ ] Mehrfach-Atelier-Buchung
- [ ] E-Mail-Verifizierung
- [ ] Datenschutz-Compliance

#### Woche 7
- [ ] Frontend: Anmeldeformular
- [ ] Frontend: Bestätigungsseiten
- [ ] Session-Management
- [ ] Error-Handling
- [ ] A11y-Optimierung

### Phase 4: Zahlungssystem (2 Wochen)

#### Woche 8
- [ ] Mollie-Integration Backend
- [ ] Webhook-Handler
- [ ] Zahlungsstatus-Management
- [ ] Refund-Funktionalität
- [ ] Zahlungs-Logs

#### Woche 9
- [ ] Frontend: Checkout-Prozess
- [ ] Zahlungsmethoden-Auswahl
- [ ] Erfolgs-/Fehlerseiten
- [ ] Manuelle Zahlungs-Option
- [ ] E2E-Tests für Zahlungen

### Phase 5: E-Mail-System (1 Woche)

#### Woche 10
- [ ] E-Mail-Templates erstellen
- [ ] Queue-Jobs für Versand
- [ ] Template-Editor im Admin
- [ ] E-Mail-Logs
- [ ] Erinnerungs-Automation

### Phase 6: Admin-Backend (2 Wochen)

#### Woche 11
- [ ] Dashboard mit Statistiken
- [ ] Anmeldungs-Verwaltung
- [ ] Export-Funktionen
- [ ] Wartelisten-Management
- [ ] Bulk-Operationen

#### Woche 12
- [ ] Reporting-System
- [ ] E-Mail-Kampagnen
- [ ] System-Einstellungen
- [ ] Backup-Funktionen
- [ ] Admin-Dokumentation

### Phase 7: Frontend-Finalisierung (1 Woche)

#### Woche 13
- [ ] Performance-Optimierung
- [ ] PWA-Features
- [ ] SEO-Optimierung
- [ ] Analytics-Integration
- [ ] Browser-Testing

### Phase 8: Testing & Deployment (1 Woche)

#### Woche 14
- [ ] Integrations-Tests
- [ ] Load-Testing
- [ ] Security-Audit
- [ ] Deployment-Pipeline
- [ ] Go-Live Vorbereitung

## Migrations-Plan von bldb-count

### Zu übernehmende Elemente
1. **Design-Elemente**
   - Farbschema (Hauptfarbe: #8B0000)
   - Logo-Design "BADEN LIEST DIE BIBEL"
   - Wave-Pattern Hintergrund
   - Typography (Open Sans)

2. **Inhalte**
   - Projektbeschreibung
   - Zeitraum-Information
   - Pressetext
   - Kontaktdaten

3. **Funktionalität**
   - Countdown-Timer (bis 1. Juni 2025)
   - Responsive Design
   - Animations-Effekte

### Neue Struktur

```
bldb-webapp/
├── backend/
│   ├── app/
│   │   ├── Http/
│   │   ├── Models/
│   │   ├── Services/
│   │   └── Jobs/
│   ├── database/
│   ├── routes/
│   └── tests/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── stores/
│   │   └── services/
│   ├── public/
│   └── tests/
├── docker/
│   ├── nginx/
│   ├── php/
│   └── postgres/
└── docker-compose.yml
```

## Entwicklungs-Prioritäten

### Must-Have (MVP)
1. Atelier-Übersicht und Details
2. Online-Anmeldung
3. E-Mail-Bestätigungen
4. Admin-Verwaltung
5. Zahlungsabwicklung

### Should-Have
1. Wartelisten-System
2. Erweiterte Filter
3. Export-Funktionen
4. E-Mail-Templates Editor
5. Dashboard-Statistiken

### Nice-to-Have
1. Mehrsprachigkeit
2. PWA-Features
3. Newsletter-System
4. Social-Media-Integration
5. Teilnehmer-Portal

## Risiken und Mitigationen

### Technische Risiken
- **Zahlungsintegration:** Früh testen, Sandbox nutzen
- **Performance:** Caching-Strategie, CDN
- **Skalierbarkeit:** Load-Balancing vorbereiten

### Organisatorische Risiken
- **Zeitplan:** Buffer einplanen, MVP fokussieren
- **Requirements:** Regelmäßige Reviews
- **Testing:** Kontinuierliche Integration

## Erfolgskriterien

1. ✅ Alle 14 Ateliers online buchbar
2. ✅ Zahlungen werden korrekt verarbeitet
3. ✅ E-Mails werden zuverlässig versendet
4. ✅ Admin kann alle Daten verwalten
5. ✅ Mobile-optimiert (> 50% mobile Nutzer)
6. ✅ Ladezeit < 3 Sekunden
7. ✅ 99.9% Uptime während Anmeldephase
8. ✅ DSGVO-konform
9. ✅ Barrierefrei (WCAG 2.1 AA)
10. ✅ Vollständige Dokumentation

## Nächste Schritte

1. **Sofort:** Entwicklungsumgebung einrichten
2. **Diese Woche:** Laravel-Projekt initialisieren
3. **Nächste Woche:** Datenbank-Schema implementieren
4. **In 2 Wochen:** Erste API-Endpoints live

## Budget-Schätzung

- **Entwicklung:** 14 Wochen à 40h = 560h
- **Testing:** 40h
- **Deployment:** 20h
- **Dokumentation:** 20h
- **Buffer:** 60h
- **Total:** 700h

## Wartung nach Go-Live

- **Updates:** Monatliche Security-Updates
- **Backups:** Tägliche automatische Backups
- **Monitoring:** 24/7 Uptime-Monitoring
- **Support:** E-Mail-Support für Admins
- **Weiterentwicklung:** Nach Bedarf

---

*Stand: Januar 2025*
*Version: 1.0*