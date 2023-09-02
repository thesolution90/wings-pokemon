# Pokemon App

## Voraussetzungen

Installation von `docker` bzw. `docker-compose`

## Starten der App

Die App wird über den Befehl

```bash
docker compose up (-d)
```

gestartet.

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
- `PUBLIC_IMAGE_PATH` (default /home/thesolution/Documents/Studium/pokemon-wings/data/images/): Der Ort an dem die Bilder abliegen, damit die API darauf zugreifen kann


### Autor
* Christopher Becker