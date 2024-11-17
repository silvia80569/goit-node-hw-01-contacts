## Descriere

Această aplicație este un instrument simplu și eficient pentru gestionarea contactelor. Permite utilizatorilor să salveze, să vizualizeze, să adauge și să șteargă contacte dintr-o bază de date locală direct din linia de comandă. Proiectul este construit cu Node.js și oferă o interfață de utilizator simplă, utilizând comenzi clare pentru interacțiuni rapide.
Funcționalitățile includ:

- **Listarea tuturor contactelor:** Permite vizualizarea unei liste complete de contacte salvate.
- **Obținerea unui contact după ID:** Permite căutarea și afișarea unui contact specific folosind ID-ul său.
- **Adăugarea unui contact:** Permite adăugarea unui contact nou cu detalii complete (nume, email, telefon).
- **Ștergerea unui contact:** Permite ștergerea unui contact existent din listă.

Aplicația este ideală pentru gestionarea unui număr mic sau mediu de contacte în format de linie de comandă, fiind utilă pentru dezvoltatori sau utilizatori care preferă interacțiunea rapidă prin terminal.


## Utilizare

Pentru a utiliza aplicația, deschide linia de comandă și rulează comenzile conform nevoilor tale. Iată câteva exemple:

1. **Listarea tuturor contactelor**  
   Această comandă afișează toate contactele salvate:  
   ```bash
   node index.js --action list

2. **Obținerea unui contact după ID**
  Pentru a obține un contact specific folosind ID-ul său, folosește comanda următoare. Înlocuiește  cu ID-ul contactului dorit:
   ```bash
   node index.js --action get --id <id>
  
3. **Adaugarea unui contact nou**
  Pentru a adăuga un contact, furnizează numele, emailul și numărul de telefon al contactului. Exemplu de comandă:
  node index.js --action add --name "Mango" --email "mango@gmail.com" --phone "322-22-22"

4. **Ștergerea unui contact**
  Pentru a șterge un contact, furnizează ID-ul acestuia. Exemplu de comandă:
  node index.js --action remove --id <id>

## Exemple


1. **Listarea tuturor contactelor**
 ![Action list](https://i.ibb.co/vQ4n8Nx/Action-list.png)
2. **Obținerea unui contact după ID**
 ![Action get](https://i.ibb.co/LhJxDjj/Action-get.png)
3. **Adaugarea unui contact nou**
 ![Action add](https://i.ibb.co/NrBnbGD/Action-add.png)
4. **Ștergerea unui contact**
 ![Action remove](https://i.ibb.co/J5rCQSs/Action-remove.png) 

