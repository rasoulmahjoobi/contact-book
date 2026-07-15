import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import SortSelect from "./components/SortSelect/SortSelect";
import ContactList from "./components/ContactList/ContactList";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ContactForm from "./components/ContactForm/ContactForm";

import BASE_URL from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  //search & sort
  // حساس نبودن به حروف کوچک و بزرگ
  const filteredContacts = contacts.filter((contact) =>
    (contact.name || "").toLowerCase().includes(search.toLowerCase()),
  );

  const sortedContacts = [...filteredContacts];

  if (sort === "asc") {
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "desc") {
    sortedContacts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Contacts</h2>

            <span>Total Contacts: 30</span>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <SearchBar
                contacts={contacts}
                setContacts={setContacts}
                search={search}
                setSearch={setSearch}
              />
            </div>

            <SortSelect
              contacts={contacts}
              setContacts={setContacts}
              sort={sort}
              setSort={setSort}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2">
              <ContactList
                contacts={sortedContacts}
                setContacts={setContacts}
                setEditingContact={setEditingContact}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
              />
            </div>

            {/* Right */}
            <div className="space-y-6 lg:sticky lg:top-6 self-start">
              <ContactDetails selectedContact={selectedContact} />

              <ContactForm
                contacts={contacts}
                setContacts={setContacts}
                editingContact={editingContact}
                setEditingContact={setEditingContact}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
