function ContactForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6 border">
      <h2 className="text-xl font-bold mb-6">Add Contact</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Job"
          className="w-full border rounded-lg p-3"
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-800 cursor-pointer">
          Add Contact
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
