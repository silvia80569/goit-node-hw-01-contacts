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
        console.log(chalk.green('All contacts:'));
        const contacts = await listContacts();
        if (contacts.length === 0) {
          console.log(chalk.yellow('There are no saved contacts.'));
        } else {
          console.table(contacts);
        }
        break;

      case 'get':
        if (!id) {
          console.error(chalk.red('You must provide an ID to get the contact.'));
          return;
        }
        const contact = await getContactById(id);
        if (contact) {
          console.log(chalk.blue(`Contact by ID: ${id}:`), contact);
        } else {
          console.log(chalk.red(`Contact ID ${id}not found`));
        }
        break;

      case 'add':
        if (!name || !email || !phone) {
          console.error(chalk.red('You must provide name, email and phone to add a contact.'));
          return;
        }
        const newContact = await addContact(name, email, phone);
        console.log(chalk.green('Contact added:'), newContact);
        break;

      case 'remove':
        if (!id) {
          console.error(chalk.red('You must provide an ID to delete the contact.'));
          return;
        }
        const updatedContacts = await removeContact(id);
        console.log(chalk.yellow('Contacts after deletion:'));
        if (updatedContacts.length === 0) {
          console.log(chalk.yellow('There are no more saved contacts.'));
        } else {
          console.table(updatedContacts);
        }
        break;

      default:
        console.error(chalk.magenta('Unknown action. Use --help to view the available options.'));
    }
  } catch (error) {
    console.error(chalk.red('An error occurred:'), error.message);
  }
}

invokeAction({ action, id, name, email, phone });
