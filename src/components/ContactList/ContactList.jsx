import ContactCard from "../ContactCard/ContactCard";

function ContactList() {
  return (
    <div className="grid gap-4">
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
}

export default ContactList;
