# Moments - Aplikacja do dzielenia się chwilami

**Moments** to aplikacja webowa, która pozwala użytkownikom dzielić się swoimi chwilami z całym światem. Użytkownicy mogą dodawać zdjęcia z krótkim opisem i automatycznie pobieraną lokalizacją, a także przeglądać i like'ować posty innych użytkowników.

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

### 4. **Like'owanie postów**
- Użytkownicy mogą like'ować posty innych użytkowników.
- Liczba like'ów jest wyświetlana obok każdego posta.
- Użytkownik może cofnąć like, klikając przycisk ponownie.

### 5. **Automatyczna geolokalizacja**
- Aplikacja automatycznie pobiera lokalizację użytkownika za pomocą Geolocation API.
- Lokalizacja jest konwertowana na czytelną nazwę (np. "Warszawa, Polska") za pomocą API OpenStreetMap Nominatim.

---

## Wymagania systemowe

- Python 3.8+
- Django 4.2+
- Biblioteka `geopy` (do konwersji współrzędnych na nazwy lokalizacji)

---

## Instrukcja uruchomienia

### 1. Sklonuj repozytorium

    ```bash
    git clone https://github.com/kacperekgamerek/Moments.git
    cd Moments
    ```

### 2. Utwórz i aktywuj środowisko wirtualne

    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/MacOS
    venv\Scripts\activate     # Windows
    ```

### 3. Zainstaluj wymagane pakiety

    ```bash
    pip install -r requirements.txt
    ```

### 4. Wykonaj migracje bazy danych

    ```bash
    python manage.py migrate
    ```

### 5. Uruchom serwer deweloperski

    ```bash
    python manage.py runserver
    ```

### 6. Uruchom localhost.run (aby umożliwić geolokalizację)
Aby geolokalizacja działała, musisz udostępnić aplikację przez HTTPS. Możesz to zrobić za pomocą narzędzia **locahost.run**:
1. Uruchom localhost.run:

    ```bash
    ssh -R 80:localhost:8000 localhost.run
    ```

2. Skopiuj wygenerowany adres HTTPS (np. `https://abc123.lhr.life`) i otwórz go w przeglądarce.
 
