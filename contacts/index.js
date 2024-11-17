const { Command } = require('commander');
const { listContacts, getContactById, addContact, removeContact } = require("./contacts");
const chalk = require('chalk');

const program = new Command();

// Definirea opțiunilor de comandă
program
  .option('-a, --action <type>', 'action to perform (list, get, add, remove)')
  .option('-i, --id <id>', 'contact ID', parseInt)
  .option('-n, --name <name>', 'contact name')
  .option('-e, --email <email>', 'contact email')
  .option('-p, --phone <phone>', 'contact phone');

program.parse(process.argv);

const { action, id, name, email, phone } = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case 'list':
        console.log(chalk.green('Toate contactele:'));
        const contacts = await listContacts();
        if (contacts.length === 0) {
          console.log(chalk.yellow('Nu există contacte salvate.'));
        } else {
          console.table(contacts);
        }
        break;

      case 'get':
        if (!id) {
          console.error(chalk.red('Trebuie să furnizezi un ID pentru a obține contactul.'));
          return;
        }
        const contact = await getContactById(id);
        if (contact) {
          console.log(chalk.blue(`Contact după ID: ${id}:`), contact);
        } else {
          console.log(chalk.red(`Contactul cu ID-ul ${id} nu a fost găsit.`));
        }
        break;

      case 'add':
        if (!name || !email || !phone) {
          console.error(chalk.red('Trebuie să furnizezi name, email și phone pentru a adăuga un contact.'));
          return;
        }
        const newContact = await addContact(name, email, phone);
        console.log(chalk.green('Contact adăugat:'), newContact);
        break;

      case 'remove':
        if (!id) {
          console.error(chalk.red('Trebuie să furnizezi un ID pentru a șterge contactul.'));
          return;
        }
        const updatedContacts = await removeContact(id);
        console.log(chalk.yellow('Contacte după ștergere:'));
        if (updatedContacts.length === 0) {
          console.log(chalk.yellow('Nu mai există contacte salvate.'));
        } else {
          console.table(updatedContacts);
        }
        break;

      default:
        console.error(chalk.magenta('Acțiune necunoscută. Folosește --help pentru a vizualiza opțiunile disponibile.'));
    }
  } catch (error) {
    console.error(chalk.red('A apărut o eroare:'), error.message);
  }
}

invokeAction({ action, id, name, email, phone });
