import ContactCard from "../ContactCard/ContactCard";

function ContactList({ contacts }) {
  return (
    <div className="grid gap-4">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
}

export default ContactList;