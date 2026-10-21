/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questi commenti.
- Pattern fondamentale: stato -> render() -> eventi.
  Tutto cio' che vedi a schermo dipende dallo stato.
  Gli eventi modificano lo stato e poi chiamano render().
- Apri index.html nel browser. Apri la console (DevTools) per gli errori.
- Cerca su MDN solo i concetti dichiarati come "cerca tu":
  localStorage, Blob/URL.createObjectURL, FileReader.
  Tutto il resto e' stato visto in settimana.
- Niente AI per generare codice. Niente template scaricati.
*/
const form = document.querySelector(".form");
const taskfield = document.querySelector("#task-field");
const controlSection = document.querySelector(".controlli");
const lista = document.querySelector(".lista");

/* STATO
   In cima al file definisci poche variabili globali:
   - un array di oggetti come dato principale (es. libri, ricette, film, ...)
   - una variabile per il filtro corrente
   - una variabile per l'ordinamento corrente
   - una variabile per la stringa di ricerca corrente
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//creo un oggetto base con chiavi id testo e completed
const tasks = [];

// apro una funzione con add event listener su bottone add-btn
//dentro la funzione
//viene letto il valore dell'input
//creato un nuovo oggetto con chiavi id testo e completed
//viene creato un id con date now come da slide
//viene pushato l'oggetto dentro l'array tasks

function createTaskobj() {
  const taskArg = taskfield.value.trim();
  if (!taskArg) {
    const errorPar = document.createElement("p");
    errorPar.textContent = "Inserire il task da registrare";
    controlSection.appendChild(errorPar);

    return;
  }
  const newTask = {
    id: Date.now(),
    testo: taskArg,
    completed: false,
  };

  tasks.push(newTask);

  return newTask;
}

/* RENDER()
   Una sola funzione che ridipinge la lista. A ogni chiamata:
   1) parte dall'array completo,
   2) filtra,
   3) ordina,
   4) svuota il container DOM,
   5) ricrea gli elementi DOM per gli oggetti risultanti.
   Aggiorna anche conteggi e statistiche.
   Salva lo stato in localStorage in fondo a render() (cerca tu come funziona).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// chiamo la funzione createtaskobj
//faccio un foreach
//creo un nuovo li per ogni task
//creo un nuovo input
//ci metto un nuovo attribute type con set attribute checkbox e un altro type con value uguale al id
//creo un nuovo span
//ci inserisco come text content il valore del testo
//creo un nuovo bottone
//ci metto il testo elimina con text content
//faccio append child degli elementi creati al nuovo li
//faccioun append child del nuovo li alla lista ul
//ritorno newli

function renderlist() {
   lista.innerHTML=''
  tasks.forEach((task) => {
    const newLi = document.createElement("li");
    const doneCheck = document.createElement("input");

    Object.assign(doneCheck, {
      type: "checkbox",
      id: task.id,
      value: task.id,
    });
    const newTaskspan = document.createElement("span");
    newTaskspan.textContent = task.testo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "elimina";

    newLi.appendChild(doneCheck);
    newLi.appendChild(newTaskspan);
    newLi.appendChild(deleteBtn);
    lista.appendChild(newLi);

    return newLi;
  });
}

/* FORM CON VALIDAZIONE
   addEventListener("submit") sul form.
   event.preventDefault().
   Leggi i valori con .value.trim().
   Se uno dei campi obbligatori e' vuoto, mostra errore e return.
   Altrimenti push allo stato, form.reset(), render().
   Id univoco con Date.now().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTaskobj();
  renderlist();
});

/* INTERAZIONI BASE — eliminare, modificare, contare
   - Elimina: filter per id, render(). Event delegation sul container.
   - Modifica in-place: button "Modifica". Al click il testo diventa <input>,
     si conferma con Invio o blur.
   - Conteggi dinamici dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* RICERCA, FILTRO, ORDINAMENTO
   - Ricerca live: <input> con event "input". Salva in stato e render().
   - Filtro: <select> con event "change". Salva in stato e render().
   - Ordinamento: due button (o select). Salva in stato e render().
   I tre si compongono dentro render() in fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* NOTIFICHE TEMPORANEE
   Funzione notifica(testo) che imposta il testo del <div id="notifica">,
   lo mostra (display: block), poi dopo 3000ms (setTimeout) lo nasconde.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* TEMA CHIARO/SCURO
   Un button che chiama document.body.classList.toggle("dark").
   In CSS scrivi le regole opposte (es. body.dark { background: #111; ... }).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* PERSISTENZA — localStorage (cerca tu su MDN)
   - In fondo a render(), salva lo stato:
       localStorage.setItem("dati", JSON.stringify(stato));
   - All'avvio, prima della prima render(), carica:
       const salvato = localStorage.getItem("dati");
       if (salvato) stato = JSON.parse(salvato);
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* RIORDINO ↑ ↓
   Due button su ogni elemento. Click su ↑ scambia con il precedente nell'array,
   ↓ con il successivo. Event delegation. Poi render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESPORTAZIONE / IMPORTAZIONE JSON (cerca tu su MDN)
   - Esporta: crea un Blob con JSON.stringify(stato), genera un URL con
     URL.createObjectURL e simula il click su un <a download>.
   - Importa: <input type="file"> + FileReader per leggere il contenuto come
     testo, JSON.parse, sostituisci lo stato, render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* STATISTICHE GRAFICHE
   Almeno due indicatori: contatori grandi e/o barre orizzontali
   (<div> con width: X% in base al dato). Aggiorna dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* MULTI-VISTA — lista / card / tabella
   Una variabile globale "vista" che render() legge per decidere quale HTML
   produrre. Tre button cambiano "vista" e chiamano render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* CATEGORIE
   Aggiungi un campo categoria nello schema. Nel form un <select> per sceglierla.
   In render(), raggruppa con reduce in { categoria: [elementi] } e disegna un
   header per categoria con sotto la lista di quella categoria.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
