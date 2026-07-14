import { FaPhone, FaBriefcase, FaStar } from "react-icons/fa";

function ContactDetails({ selectedContact }) {
  if (!selectedContact) {
    return (
      <div className="bg-white rounded-xl shadow p-6 border">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>

        <p className="text-gray-500 text-center py-8">
          Select a contact to view details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 border">
      <h2 className="text-xl font-bold mb-6">Contact Details</h2>

      <div className="space-y-5">
        <div>
          <p className="text-gray-500 text-sm">Full Name</p>
          <h3 className="text-xl font-bold">{selectedContact.name}</h3>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="text-indigo-600" />
          <span>{selectedContact.phone}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaBriefcase className="text-indigo-600" />
          <span>{selectedContact.job}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaStar
            className={
              selectedContact.favorite ? "text-yellow-500" : "text-gray-300"
            }
          />

          <span>{selectedContact.favorite ? "Favorite" : "Not Favorite"}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
