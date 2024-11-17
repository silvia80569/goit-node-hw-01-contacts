## Descriere
<p>
Această aplicație este un instrument simplu și eficient pentru gestionarea contactelor. Permite utilizatorilor să salveze, să vizualizeze, să adauge și să șteargă contacte dintr-o bază de date locală direct din linia de comandă. Proiectul este construit cu Node.js și oferă o interfață de utilizator simplă, utilizând comenzi clare pentru interacțiuni rapide.
Funcționalitățile includ:
</p>

- **Listarea tuturor contactelor: **Permite vizualizarea unei liste complete de contacte salvate.
- **Obținerea unui contact după ID:** Permite căutarea și afișarea unui contact specific folosind ID-ul său.
- ** Adăugarea unui contact:** Permite adăugarea unui contact nou cu detalii complete (nume, email, telefon).
-  **Ștergerea unui contact: **Permite ștergerea unui contact existent din listă.
<p>
Aplicația este ideală pentru gestionarea unui număr mic sau mediu de contacte în format de linie de comandă, fiind utilă pentru dezvoltatori sau utilizatori care preferă interacțiunea rapidă prin terminal.
</p>

## Utilizare
<p>
Pentru a utiliza aplicația, deschide linia de comandă și rulează comenzile conform nevoilor tale. Iată câteva exemple:
</p>
<ol>
<li>**Listarea tuturor contactelor**
Această comandă afișează toate contactele salvate:
`node index.js --action list`</li>
<li> **Obținerea unui contact după ID**
Pentru a obține un contact specific folosind ID-ul său, folosește comanda următoare. Înlocuiește  cu ID-ul contactului dorit:
`node index.js --action get --id <id>`
</li>
<li>**Adăugarea unui contact nou**
Pentru a adăuga un contact, furnizează numele, emailul și numărul de telefon al contactului. Exemplu de comandă:
`node index.js --action add --name "Mango" --email "mango@gmail.com" --phone "322-22-22"` </li>
<li>**Ștergerea unui contact**
Pentru a șterge un contact, furnizează ID-ul acestuia. Exemplu de comandă:
`node index.js --action remove --id <id>`</li>

</ol>
<ol>
<li> ![Action list](https://monosnap.com/file/4Rcryoie2GnXHPl6JpW9f9XOxdbe3B)</li>
<li>![Action get](https://monosnap.com/file/NEGvH808jflKVmde9Yp6U373A3VEOC)</li>
<li>![Action add](https://monosnap.com/file/uNAdzBSVKCyPYJjWAHj6QJ0AiqLkYe)</li>
<li>![Action remove](https://monosnap.com/file/yx53ezCHdH4ImvkTauJSdlxCuqmGBF) </li>
</ol>
