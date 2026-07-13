

import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import SortSelect from "./components/SortSelect/SortSelect";
import ContactList from "./components/ContactList/ContactList";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
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
              <SearchBar />
            </div>

            <SortSelect />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactList />
            </div>

            <ContactDetails />
          </div>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
