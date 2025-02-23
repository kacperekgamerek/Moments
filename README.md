# Moments - Aplikacja do dzielenia się chwilami

**Moments** to aplikacja webowa, która pozwala użytkownikom dzielić się swoimi chwilami z całym światem. Użytkownicy mogą dodawać zdjęcia z krótkim opisem i automatycznie pobieraną lokalizacją, a także przeglądać posty innych użytkowników.

---

## Funkcje aplikacji

### 1. **Rejestracja i logowanie**
- Użytkownicy mogą zakładać konta i logować się do aplikacji.
- Formularze rejestracji i logowania są dostępne w formie wyskakujących okienek (modalów).

### 2. **Dodawanie postów**
- Użytkownicy mogą dodawać zdjęcia z krótkim opisem.
- Lokalizacja jest automatycznie pobierana za pomocą Geolocation API przeglądarki.
- Posty są zapisywane w bazie danych wraz z informacjami o użytkowniku, lokalizacji i czasie dodania.

### 3. **Przeglądanie postów**
- Na stronie głównej wyświetlane są wszystkie posty w kolejności od najnowszego.
- Każdy post zawiera:
  - Zdjęcie.
  - Lokalizację.
  - Opis.
  - Nazwę użytkownika.
  - Datę i godzinę dodania.

### 4. **Automatyczna geolokalizacja**
- Aplikacja automatycznie pobiera lokalizację użytkownika za pomocą Geolocation API.
- Lokalizacja jest konwertowana na czytelną nazwę (np. "Warszawa, Polska") za pomocą API OpenStreetMap Nominatim.

---

## Wymagania systemowe

- Python 3.8+
- Django 4.2+
- Biblioteka `geopy` (do konwersji współrzędnych na nazwy lokalizacji)

---

### Po uruchomieniu serwera Django trzeba wykonać jeden dodatkowy krok!

Aplikacja pobiera lokalizację użytkownika, co nie byłoby możliwe bez działania z protokołem HTTPS. Dlatego trzeba uruchomić sesję ngrok, która to zapewnia.

```bash
ngrok http 8000
```
