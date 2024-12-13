# EventNow

**EventNow** è un'applicazione per la gestione di eventi, pensata per amministratori e utenti. Gli amministratori possono gestire eventi, mentre gli utenti possono acquistare biglietti, interagire con post e commentare. Inoltre, gli utenti hanno la possibilità di creare post visibili ad altri utenti.

---

## Tecnologie utilizzate

- **React**
- **JavaScript**
- **Redux**
- **React Bootstrap / CSS**
- **Stripe**

---

## Funzionalità

### Main Page

- **Autenticazione**: Gli utenti possono autenticarsi o registrarsi se non hanno un account.
- **Identificazione dell'utente**: Il sistema identifica automaticamente se l'utente è un admin o un utente e lo reindirizza alla dashboard appropriata.

### Dashboard Admin / Dashboard User

- **Ricerca eventi**: Gli utenti possono cercare eventi in base al loro artista preferito.
- **Prenotazione eventi**: Gli utenti possono prenotare biglietti e completare il pagamento tramite Stripe.

### Post

- **Creazione di post**: Gli utenti possono creare post visibili a tutti.
- **Commenti**: Gli utenti possono commentare i post e visualizzare tutti i commenti di un determinato post.
- **Visualizzazione post**: Gli utenti possono vedere i post creati da altri utenti.

### Gestione Eventi (per gli Admin)

- **Creazione, modifica e eliminazione di eventi**.

### Profilo

- **Gestione dei post**: Gli utenti possono creare, modificare o eliminare i propri post.
- **Gestione dei commenti**: Gli utenti possono modificare o eliminare i propri commenti.
- **Visualizzazione delle prenotazioni**: Gli utenti possono visualizzare tutte le loro prenotazioni e annullarle se necessario.

### Logout

- Gli utenti possono disconnettersi dal proprio account e tornare alla main page.

---

## Getting Started with Create React App

Questo progetto è stato creato con [Create React App](https://github.com/facebook/create-react-app).

---

## Installazione

Per iniziare a lavorare con il progetto, segui questi passaggi:

1. **Clona il repository**:

   ```bash
   git clone https://github.com/tuo-username/eventnow.git
Entra nella cartella del progetto:

bash
Copia codice
cd eventnow
Installa le dipendenze:

Frontend (React):

bash
Copia codice
cd client
npm install
Backend (se presente):

bash
Copia codice
cd server
npm install
Avvia l'applicazione:

Frontend:

bash
Copia codice
npm start
Backend:

bash
Copia codice
npm start
Vai su http://localhost:3000 nel tuo browser per visualizzare l'app.

Script disponibili
Nel progetto, puoi eseguire i seguenti comandi:

npm start: Esegue l'app in modalità sviluppo.
Apri http://localhost:3000 nel tuo browser per visualizzarla.

npm test: Esegue i test in modalità interattiva.
Consulta la sezione sui test per maggiori informazioni.

npm run build: Compila l'app per la produzione nella cartella build.
La build è ottimizzata per la migliore performance.

npm run eject: Nota: questa è un'operazione irreversibile.
Se non sei soddisfatto della configurazione degli strumenti di build, puoi eseguire eject per avere il pieno controllo.

Contributi
Se vuoi contribuire al progetto:

Fai un fork del repository.

Crea un branch per la tua funzionalità:

bash
Copia codice
git checkout -b feature/nome-funzionalità
Fai il commit delle tue modifiche:

bash
Copia codice
git commit -am 'Aggiungi nuova funzionalità'
Fai il push del tuo branch:

bash
Copia codice
git push origin feature/nome-funzionalità
Invia una pull request.

Licenza
Questo progetto è concesso sotto la licenza MIT. Vedi il file LICENSE per maggiori dettagli.

Link utili
Backend: https://github.com/AlessioLosi/capstone
Stripe: https://stripe.com/docs
Documentazione di React: https://reactjs.org/
