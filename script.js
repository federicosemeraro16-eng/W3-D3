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

/* STATO
   In cima al file definisci poche variabili globali:
   - un array di oggetti come dato principale (es. libri, ricette, film, ...)
   - una variabile per il filtro corrente
   - una variabile per l'ordinamento corrente
   - una variabile per la stringa di ricerca corrente
*/
const form = document.querySelector(".form");
const taskField = document.querySelector("#task-field");
const formSection = document.querySelector(".form");
const lista = document.querySelector(".lista");
const contatorPar = document.querySelector("#contatore-p");

const tasks = [
  {
    testo: "Pagare le bollette",
    completed: false,
    id: 0,
  },
  {
    testo: "Studiare Javascript",
    completed: false,
    id: 1,
  },
  {
    testo: "Comprare il pane",
    completed: false,
    id: 2,
  },
  {
    testo: "Chiamare il dentista",
    completed: false,
    id: 3,
  },
  {
    testo: "Riposarsi",
    completed: false,
    id: 4,
  },
];

let filtroCorrente = "tutti";
let ordinamentoCorrente = "";
let ricercaCorrente = "";

/* SCRIVI QUI LA TUA RISPOSTA */

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

const render = () => {
  lista.innerHTML = "";

  let taskDaMostrare = [...tasks];

  if (filtroCorrente === "completati") {
    taskDaMostrare = tasks
      .filter((task) => task.completed)
      .sort((a, b) => a - b);
    render();
  } else if (filtroCorrente === "attivo") {
    tasks.filter((task) => !task.completed).sort((a, b) => a.id - b.id);
    render();
  }

  taskDaMostrare.forEach((task) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("data-id", task.id);

    const newCheck = document.createElement("input");
    Object.assign(newCheck, {
      type: "checkbox",
      checked: task.completed,
      id: task.id,
    });

    const newTaskSpan = document.createElement("span");
    newTaskSpan.textContent = task.testo;

    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.setAttribute("data-id", task.id);

    newDeleteBtn.textContent = "Elimina";

    newLi.appendChild(newCheck);
    newLi.appendChild(newTaskSpan);
    newLi.appendChild(newDeleteBtn);
    lista.appendChild(newLi);
  });
};

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
  console.log("form inviato");
  const inputVal = taskField.value.trim();
  if (!inputVal) {
    const newErrp = document.createElement("p");
    newErrp.textContent = `Inserisci una task`;
    formSection.appendChild(newErrp);
    return;
  } else {
    tasks.push({ testo: inputVal, completed: false, id: Date.now() });
    //  form.reset();
    render();
  }
});

/* INTERAZIONI BASE — eliminare, modificare, contare
   - Elimina: filter per id, render(). Event delegation sul container.
   - Modifica in-place: button "Modifica". Al click il testo diventa <input>,
     si conferma con Invio o blur.
   - Conteggi dinamici dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

lista.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const taskIndex = tasks.findIndex(
      (task) => task.id === Number(e.target.dataset.id)
    );
    if (taskIndex === -1) return;
    tasks.splice(taskIndex, 1);

    console.log(e.target);
    lista.innerHTML = "";
    contatore(); // da sistemare perché il contatore deve mostrare solo quelli attivi e non quante attività ci sono totali //
    render();
  }
});

lista.addEventListener("change", (e) => {
  
  if (e.target.matches("input")) {
   tasks.completed = e.target.checked
   
  }

//   const taskCompleted = tasks.map((task)=>task.completed)
//   const newActiveItems = taskCompleted.length
//   contatore()
//   render()
});

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

const contatore = () => {
  const taskActive = tasks.filter((task) => !task.completed);
  contatorPar.textContent = `Attivi: ${taskActive.length}`;
};

console.log(contatore());

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
