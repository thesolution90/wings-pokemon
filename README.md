# Pokemon App

## Voraussetzungen

Installation von `docker` bzw. `docker compose`

Informationen dazu finden sich [hier](https://docs.docker.com/engine/install/).

## Starten der App

Erstmalig müssen alle Images erzeugt werden. Dies wird über den Befehl

```bash
docker compose build
```
erreicht.

Die App wird über den Befehl

```bash
docker compose up
```
gestartet.

Die App kann nun über den Browser unter der URL [http://localhost:3000](http://localhost:3000) erreicht werden.

## Struktur dieses Repositories

- `./api`: Sourcecode zum Betrieb der API
- `./data`: Statische Bilddateien
- `./frontend`: Sourcecode zum Betrieb der Benutzeroberfläche

Für die API wurde das Framework `ExpressJS` verwendet. Für die Nutzeroberfläche `React`. Das eingesetzte DBMS für Kommentarfunktion ist `redis`.

## Konfiguration der API

Es gibt vier Variablen die zur Konfiguration der API diesen:
- `PORT` (default 3001): Portnummer unter der der Express Server erreichbar ist.
- `REDIS_HOST` (default localhost): Hostname der Redis Datenbank
- `REDIS_PORT` (default 6379): Portnummer der Redis Datenbank
- `PUBLIC_IMAGE_PATH` (default /home/thesolution/Documents/Studium/pokemon-wings/data/images/): Der Ort an dem die Bilder abliegen, damit die API Plane darauf zugreifen kann. Zum Testen auf eigenen Pfad anpassen.

### Autor

* Christopher Becker