import ContactCard from "../ContactCard/ContactCard";

function ContactList({
  contacts,
  setContacts,
  setEditingContact,
  selectedContact,
  setSelectedContact,
}) {
  return (
    <div className="grid gap-4">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          contacts={contacts}
          setContacts={setContacts}
          setEditingContact={setEditingContact}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
