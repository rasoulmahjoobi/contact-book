import { useState } from "react";
import BASE_URL from "../../services/api";

function ContactForm({ contacts, setContacts }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");

  const addContact = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      phone,
      job,
      favorite: false,
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts([...contacts, data]);

        setName("");
        setPhone("");
        setJob("");
      });
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 border">

      <h2 className="text-xl font-bold mb-6">
        Add Contact
      </h2>

      <form onSubmit={addContact} className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 cursor-pointer"
        >
          Add Contact
        </button>

      </form>

    </div>
  );
}

export default ContactForm;