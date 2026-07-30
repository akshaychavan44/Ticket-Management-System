import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosConfig";

function Dashboard() {

  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;


  useEffect(() => {
    loadTickets();
  }, []);
useEffect(() => {
  setCurrentPage(1);
}, [search, statusFilter]);

  const loadTickets = async () => {
    try {
      const response = await API.get("/tickets");
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this ticket?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/tickets/${id}`);
    loadTickets(); 
  } catch (error) {
    console.log(error);
    alert("Failed to delete ticket");
  }
};

  const filteredTickets = useMemo(() => {

    return tickets.filter((ticket) => {

      const value = search.toLowerCase();

      const searchMatch =
  ticket.ticketId?.toLowerCase().includes(value) ||
  ticket.customerName?.toLowerCase().includes(value) ||
  ticket.email?.toLowerCase().includes(value) ||
  ticket.title?.toLowerCase().includes(value) ||
  ticket.description?.toLowerCase().includes(value);


      const statusMatch =
        statusFilter === "All" ||
        ticket.status === statusFilter;


      return searchMatch && statusMatch;

    });

  }, [tickets, search, statusFilter]);

const indexOfLastTicket = currentPage * ticketsPerPage;

const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;

const currentTickets = filteredTickets.slice(
  indexOfFirstTicket,
  indexOfLastTicket
);

const totalPages = Math.ceil(
  filteredTickets.length / ticketsPerPage
);

  const total = tickets.length;

  const open = tickets.filter(
    t => t.status === "Open"
  ).length;

  const progress = tickets.filter(
    t => t.status === "In Progress"
  ).length;

  const closed = tickets.filter(
    t => t.status === "Closed"
  ).length;



  return (

<div className="w-full min-h-screen">


<div
  data-aos="fade-down"
  className="w-full px-8 py-8 flex justify-between items-center"
>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Manage customer support tickets
          </p>
        </div>


        <Link
          to="/create-ticket"
          className="bg-black hover:bg-yellow-500 text-white px-5 py-3 rounded-lg shadow"
        >
          + Create Ticket
        </Link>


      </div>





<div
  data-aos="fade-up"
  className="px-8 grid grid-cols-1 md:grid-cols-4 gap-6"
>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            Total Tickets
          </p>

          <h2 className="text-3xl font-bold mt-2 text-blue-600">
            {total}
          </h2>
        </div>



        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            Open
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600">
            {open}
          </h2>
        </div>



        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            In Progress
          </p>

          <h2 className="text-3xl font-bold mt-2 text-yellow-600">
            {progress}
          </h2>
        </div>



        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">
            Closed
          </p>

          <h2 className="text-3xl font-bold mt-2 text-red-600">
            {closed}
          </h2>
        </div>


      </div>



<div
  data-aos="fade-right"
  className="px-8 mt-8 flex justify-start"
>


        
  <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-4 w-fit">

          <input

            type="text"

            placeholder="Search by ID, Name, E-mail & Description"

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

           className="
           w-full
           md:w-96
           border
          rounded-lg
            px-4
            py-3
            outline-none
          focus:ring-2
              focus:ring-blue-500
"

          />



          <select

            value={statusFilter}

            onChange={(e)=>setStatusFilter(e.target.value)}

            className="
            border
            rounded-lg
            px-4
            py-3
            md:w-52
            "

          >

            <option value="All">
              All
            </option>

            <option value="Open">
              Open
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Closed">
              Closed
            </option>

          </select>


        </div>


      </div>







<div
  data-aos="zoom-in"
  className="px-8 mt-8 pb-10"
>

        <div className="bg-white rounded-xl shadow overflow-hidden">


          <table className="w-full">


            <thead className="bg-black text-white">


              <tr>

                <th className="px-6 py-4 text-left">
                  Ticket ID
                </th>

                <th className="px-6 py-4 text-left">
                  Customer
                </th>

                <th className="px-6 py-4 text-left">
                  Subject
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-left">
                  Date
                </th>

                <th className="px-6 py-4">
                  Action
                </th>

              </tr>


            </thead>

<tbody>

{
  currentTickets.length === 0 ? (

    <tr>
      <td
        colSpan="6"
        className="text-center py-8 text-gray-500 text-lg"
      >
        No tickets found
      </td>
    </tr>

  ) : (

    currentTickets.map((ticket)=>(

      <tr
        key={ticket._id}
        className="border-b hover:bg-gray-50"
      >


           


                  <td className="px-6 py-5">
                    {ticket.ticketId}
                  </td>


                  <td className="px-6 py-5">
                    {ticket.customerName}
                  </td>


                  <td className="px-6 py-5">
                    {ticket.title}
                  </td>


                  <td className="px-6 py-5">


                    <span
                      className={`
                      px-3 py-1 rounded-full text-sm

                      ${
                        ticket.status==="Open"
                        ?
                        "bg-green-100 text-green-700"
                        :
                        ticket.status==="In Progress"
                        ?
                        "bg-yellow-100 text-yellow-700"
                        :
                        "bg-red-100 text-red-700"
                      }
                      `}
                    >

                      {ticket.status}

                    </span>


                  </td>



                  <td className="px-6 py-5">
                    {
                      new Date(ticket.createdAt)
                      .toLocaleDateString()
                    }
                  </td>



                  <td className="px-6 py-5 text-center space-x-2">
  <Link
    to={`/ticket/${ticket._id}`}
          className="bg-yellow hover:bg-yellow-500 text-black px-5 py-3 rounded-lg shadow"
  >
    View
  </Link>

  <button
    onClick={() => handleDelete(ticket._id)}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
  >
    Delete
  </button>
</td>


                </tr>

                  )
              ))
            }


            </tbody>


          </table>
<div className="flex justify-center items-center gap-4 py-5">

  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
  >
    Previous
  </button>


  <span className="font-semibold">
    Page {currentPage} of {totalPages || 1}
  </span>


  <button
disabled={currentPage === totalPages || totalPages === 0}
onClick={() => setCurrentPage(currentPage + 1)}
    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
  >
    Next
  </button>

</div>

        </div>


      </div>


    </div>

  );
}

export default Dashboard;