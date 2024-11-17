const { listContacts, getContactById, addContact, removeContact } = require("./contacts");

(async () => {
  console.log('Toate contactele:', await listContacts());
  console.log('Contact după ID:', await getContactById('1'));

  const newContact = await addContact('Alice Johnson', 'alice@example.com', '555-1234');
  console.log('Contact adăugat:', newContact);

  const updatedContacts = await removeContact(newContact.id);
  console.log('Contacte după ștergere:', updatedContacts);
})();


