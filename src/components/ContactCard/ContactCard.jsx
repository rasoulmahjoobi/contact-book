import {
  FaPhone,
  FaBriefcase,
  FaTrash,
  FaEdit,
  FaRegStar,
} from "react-icons/fa";

import BASE_URL from "../../services/api";

function ContactCard({ contact, contacts, setContacts }) {
  const deleteContact = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (!confirmDelete) return;

    fetch(`${BASE_URL}/${contact.id}`, {
      method: "DELETE",
    }).then(() => {
      const newContacts = contacts.filter((item) => item.id !== contact.id);

      setContacts(newContacts);
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-lg">{contact.name}</h3>

          <p className="flex items-center gap-2 mt-3 text-gray-500">
            <FaPhone />
            {contact.phone}
          </p>

          <p className="flex items-center gap-2 mt-2 text-gray-500">
            <FaBriefcase />
            {contact.job}
          </p>
        </div>

        <button className="cursor-pointer">
          <FaRegStar className="text-xl text-gray-400 hover:text-yellow-500" />
        </button>
      </div>

      <div className="flex justify-end gap-3 mt-5">
        <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-800 cursor-pointer">
          <FaEdit />
        </button>

        <button
          onClick={deleteContact}
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-800 cursor-pointer"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
