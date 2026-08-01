// ══════════════════════════════════════════════════════════════
//  SPIELPLAN — HIER AM TURNIERTAG DIE TEAMNAMEN EINTRAGEN
//  Einfach die "TBD"-Strings durch die Paarungen ersetzen,
//  z.B. 'Team Rakete vs Team Blitz' — dann speichern & neu deployen.
//  Die Reihenfolge der Einträge pro Slot entspricht den Stationen unten.
// ══════════════════════════════════════════════════════════════

const SCHEDULE_STATIONS = [
  'BP Tisch 1',
  'BP Tisch 2',
  'BP Tisch 3',
  'Flip Cup',
  'Boccia',
  'Sprint',
  'Flunkyball'
];

// Teamliste — T-Nummer → Spieler. '?' = noch unklar, einfach ersetzen.
const SCHEDULE_TEAMS = [
  { nr: 1,  namen: 'Arne + Jaylen' },
  { nr: 2,  namen: 'Marius + Max B.' },
  { nr: 3,  namen: 'Felix + Björn O.' },
  { nr: 4,  namen: 'Dustin + Max' },
  { nr: 5,  namen: 'Arne M. + Stephano' },
  { nr: 6,  namen: 'Luca + Julia' },
  { nr: 7,  namen: 'Jörn + Morten' },
  { nr: 8,  namen: 'Luca Gohl' },
  { nr: 9,  namen: 'Laris + Mauni' },
  { nr: 10, namen: 'Björn R. + Julia' },
  { nr: 11, namen: 'Yannick + Philipp Silke' },
  { nr: 12, namen: 'Sembach + Tom' },
  { nr: 13, namen: 'Simon + Anton' },
  { nr: 14, namen: 'Johannes + Julia' },
  { nr: 15, namen: 'Philipp + Adrian' },
  { nr: 16, namen: 'Buebs' }
];

const SCHEDULE_SLOTS = [
  { slot: 1, zeit: '13:15', matches: ['T6–T1', 'T13–T14', 'T7–T2', 'T16–T10', 'T12–T5', 'T9–T15', 'T3+T8 vs T11+T4'] },
  { slot: 2, zeit: '13:35', matches: ['T5–T3', 'T4–T10', 'T8–T9', 'T11–T6', 'T1–T2', 'T14–T7', 'T15+T16 vs T13+T12'] },
  { slot: 3, zeit: '13:55', matches: ['T11–T16', 'T12–T15', 'T9–T3', 'T7–T1', 'T8–T4', 'T5–T13', 'T2+T10 vs T6+T14'] },
  { slot: 4, zeit: '14:15', matches: ['T10–T11', 'T2–T15', 'T12–T14', 'T8–T3', 'T16–T13', 'T6–T4', 'T9+T1 vs T7+T5'], pauseAfter: true },
  { slot: 5, zeit: '15:05', matches: ['T6–T5', 'T4–T16', 'T13–T7', 'T9–T12', 'T15–T11', 'T8–T10', 'T3+T14 vs T1+T2'] },
  { slot: 6, zeit: '15:25', matches: ['T1–T15', 'T3–T13', 'T10–T9', 'T4–T14', 'T6–T7', 'T12–T2', 'T11+T8 vs T5+T16'] },
  { slot: 7, zeit: '15:45', matches: ['T8–T14', 'T2–T16', 'T5–T4', 'T13–T15', 'T10–T3', 'T1–T11', 'T9+T6 vs T12+T7'] },
  { slot: 8, zeit: '16:05', matches: ['T1–T12', 'T8–T6', 'T7–T11', 'T5–T2', 'T14–T9', 'T3–T16', 'T10+T13 vs T15+T4'] }
];
