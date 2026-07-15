import ContactCard from "../ContactCard/ContactCard";

function ContactList({
  contacts,
  setContacts,
  setEditingContact,
  selectedContact,
  setSelectedContact,
}) {
  // اگر هیچ مخاطبی نباشد
  if (contacts.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
        No contacts found.
      </div>
    );
  }

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
