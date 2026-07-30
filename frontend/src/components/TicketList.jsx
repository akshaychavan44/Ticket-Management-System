function TicketList({ tickets }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets.map((ticket) => (
        <div key={ticket._id} className="border rounded p-4 shadow">
          <h2 className="text-xl font-bold">{ticket.title}</h2>

          <p>{ticket.description}</p>

          <p>Status: {ticket.status}</p>

          <button
            onClick={() => handleDelete(ticket._id)}
            className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TicketList;