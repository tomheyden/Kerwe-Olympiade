# Kerwe Olympiade Hemsbach 2026

Statische Webseite (eine `index.html`, kein Build-System). Deployment wie gehabt: committen, pushen, fertig.

## Update am Turniertag

Es müssen nur zwei Dateien angefasst werden — beides einfache JS-Dateien mit Kommentaren direkt in der Datei:

### 1. Spielplan → [data/schedule.js](data/schedule.js)

Sobald die Teams ausgelost sind, die `'TBD'`-Einträge durch die Paarungen ersetzen, z.B.:

```js
{ slot: 1, zeit: '13:15', matches: ['Rakete vs Blitz', 'Adler vs Fuchs', ...] },
```

Die Reihenfolge pro Slot entspricht den Stationen in `SCHEDULE_STATIONS`:
`BP Tisch 1, BP Tisch 2, BP Tisch 3, Flip Cup, Boccia, Sprint, Flunkyball`.
Eine leere Station im Slot einfach als `'—'` eintragen.

### 2. Live-Tabelle → [data/standings.js](data/standings.js)

Nach jedem Slot die Werte der Teams aktualisieren (Teamname, Spiele, Siege, Punkte = Siege × 2):

```js
{ team: 'Rakete', spiele: 3, siege: 2, punkte: 4 },
```

Die Tabelle sortiert sich automatisch nach Punkten (dann Siegen) — dafür nichts weiter tun.

Danach: speichern, committen, pushen → Seite ist aktuell.
