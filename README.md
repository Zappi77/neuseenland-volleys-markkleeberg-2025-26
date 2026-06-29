# Neuseenland-Volleys Markkleeberg - Saison 2025/26

Statische Webseite mit Spielkarten zur Saison 2025/26 von Neuseenland-Volleys Markkleeberg in der Sparda 2. Liga Pro.

Die Seite enthält:

- alle 28 Saisonspiele
- Ergebnisse, Satzstände und Ballpunkte
- Tabellenplatz nach dem jeweiligen Spiel
- Spielnummern und matchIds
- Spieldauer, Zuschauer und Spielhalle
- planmäßige Uhrzeit je Spiel
- Teamlogos und Links zu Teamseiten
- MVPs mit Spielerinnenlinks
- Kurzberichte aus VBL-Spielartikeln bzw. neutralen Spieldaten
- Links zu Spieldetails, Statistik-PDF, Spielartikeln und YouTube-Video
- Punkteverlauf als Kreis-Kette
- Tabellenverlauf und Abschlusstabellen
- Kreuztabelle
- Saisonbilanz
- Markkleeberger MVP-Auswertung
- bekannte YouTube-Direktlinks sowie Suchlinks als Platzhalter fuer spaeter nachzutragende Direktvideos

## Dateien

Die Seite besteht nur aus statischen Dateien:

- `index.html` - HTML-Struktur
- `styles.css` - Layout und Responsive Design
- `app.js` - Rendering, Filter, Sortierung und Berechnungen
- `games.js` - Spieldaten, Links, Logos, MVPs und YouTube-Aufrufe
- `cross-table.js` - Kreuztabelle der Liga

Es gibt keinen Build-Schritt und keine Server-Abhängigkeit.

## Lokal anschauen

Im Projektordner:

```bash
python3 -m http.server 8000
```

Danach im Browser öffnen:

```text
http://localhost:8000/
```

## Veröffentlichung auf knud-zabrocki.de

Empfohlen ist eine statische Unterseite auf dem Webspace.

1. Per FTP/SFTP oder Webhosting-Dateimanager einen Ordner anlegen, zum Beispiel:

```text
/neuseenland-volleys-markkleeberg-2025-26/
```

2. Diese fünf Dateien in den Ordner hochladen:

```text
index.html
styles.css
app.js
games.js
cross-table.js
```

3. Danach sollte die Seite erreichbar sein unter:

```text
https://knud-zabrocki.de/neuseenland-volleys-markkleeberg-2025-26/
```

## In WordPress einbinden

Wenn die Seite als eigene statische Unterseite auf dem Webspace liegt, kann sie in WordPress per Custom-HTML-Block eingebettet werden:

```html
<iframe
  src="https://knud-zabrocki.de/neuseenland-volleys-markkleeberg-2025-26/"
  style="width:100%; height:900px; border:0;"
  loading="lazy">
</iframe>
```

Bei sehr langer Seite kann die Hoehe erhoeht werden. Alternativ ist ein normaler Link auf die Unterseite oft sauberer.

## GitHub Pages

Falls ein Repository angelegt wird, kann es auch direkt mit GitHub Pages veroeffentlicht werden:

Repository:

```text
https://github.com/Zappi77/neuseenland-volleys-markkleeberg-2025-26
```

1. GitHub-Repository oeffnen.
2. `Settings` -> `Pages`.
3. `Deploy from a branch` auswaehlen.
4. Branch `main`, Ordner `/root` waehlen.
5. Speichern.

Danach stellt GitHub eine Pages-URL bereit, typischerweise:

```text
https://zappi77.github.io/neuseenland-volleys-markkleeberg-2025-26/
```

Diese URL kann ebenfalls in WordPress verlinkt oder per iframe eingebettet werden.

## Daten aktualisieren

Die meisten Inhalte stehen in `games.js`.

Typische Anpassungen:

- YouTube-Aufrufe: `youtubeViews`
- Stichtag der YouTube-Aufrufe: `youtubeViewsDate`
- neue/andere Links: `videoUrl`, `videoUnavailable`, `articleUrl`
- Spieltexte: `gameSummaries`
- MVPs: `mvps`
- Logos: `teamLogoUrls`

Nach Aenderungen:

```bash
git add .
git commit -m "Update season data"
git push
```

## Hinweise

Die Teamlogos, Spieldetails, Statistik-PDFs, Spielartikel und YouTube-Videos werden extern verlinkt. Bildergalerien sind derzeit nicht hinterlegt.

## Änderungshistorie

### 28.06.2026

- Projekt aus der Vilsbiburg-Vorlage für Neuseenland-Volleys Markkleeberg angelegt
- 28 Markkleeberger Ligaspiele aus der offiziellen VBL-Teamseite übernommen
- Einzelsatzergebnisse, Ballpunkte, Spielnummern und matchIds ergänzt
- planmäßige Uhrzeiten, Spielhallen, Zuschauer und Spieldauer aus VBL-Daten ergänzt
- Tabellenplatz nach jedem Markkleeberger Spiel aus allen 210 Ligaergebnissen berechnet
- MVPs mit Spielerinnenprofilen aus den VBL-Spieldetails ergänzt
- vorhandene VBL-Artikel, Kurzberichte und Bildergalerien matchId-genau aus den bereits bearbeiteten Teamseiten übernommen
- 22 bekannte YouTube-Direktlinks aus den bereits bearbeiteten Teamseiten übernommen
- die sechs zunächst fehlenden Videos gegen BBSC Berlin, TV Dingolfing und TV Hörde ergänzt; damit sind alle 28 Spiele direkt verlinkt
- YouTube-Aufrufzahlen aller 28 Videos mit Stichtag 29.06.2026 direkt aktualisiert
- Bildergalerie-Links vorerst nicht hinterlegt
- Punkteverlauf, Tabellenverlauf, Abschlusstabellen, Kreuztabelle und Saisonbilanz angepasst
- Syntax-, Browser- und externer Linkcheck durchgeführt

### 29.06.2026

- auf allen 28 Spielkarten mindestens einen offiziellen VBL-Spielbericht aus der jeweiligen Spieldetail-Seite verlinkt
- Kurzberichte um Ergebnis, sämtliche Satzstände, Ballpunkte und konkrete Inhalte der vollständigen VBL-Nachberichte erweitert
- sechs fehlende YouTube-Direktlinks ergänzt und anhand der YouTube-Titel den richtigen Heim- und Auswärtsspielen zugeordnet
- YouTube-Aufrufzahlen aller 28 Direktvideos aktualisiert
- übernommene interne Köln-Bezeichner in JavaScript und CSS durch neutrale Markkleeberg-/Fokusteam-Namen ersetzt
