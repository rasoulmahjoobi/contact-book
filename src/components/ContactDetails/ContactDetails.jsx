import { FaPhone, FaBriefcase, FaStar } from "react-icons/fa";

function ContactDetails() {
  return (
    <div className="bg-white rounded-xl shadow p-6 border">
      <h2 className="text-xl font-bold mb-6">Contact Details</h2>

      <p className="mb-4">
        <strong>Name:</strong> Ali Rezaei
      </p>

      <p className="flex items-center gap-2 mb-4">
        <FaPhone />
        09123456789
      </p>

      <p className="flex items-center gap-2 mb-4">
        <FaBriefcase />
        Frontend Developer
      </p>

      <p className="flex items-center gap-2">
        <FaStar className="text-yellow-500" />
        Favorite
      </p>
    </div>
  );
}

export default ContactDetails;
