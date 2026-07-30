import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axiosConfig";


function TicketDetails() {

  const { ticketId } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");



  useEffect(() => {
    fetchTicket();
  }, []);



  const fetchTicket = async () => {

    try {

      const response = await API.get(`/tickets/${ticketId}`);

      console.log(response.data);

      setTicket(response.data);
      setStatus(response.data.status);

    }
    catch(error) {

      console.log(error);

    }

  };




  const updateTicket = async () => {

  if (
    status === ticket.status &&
    comment.trim() === ""
  ) {
    alert("No changes made");
    return;
  }


  try {

    await API.put(`/tickets/${ticketId}`, {

      status: status,
      comment: comment

    });


    alert("Ticket Updated");

    fetchTicket();

    setComment("");

  }
  catch(error){

    console.log(error);

  }



  };




  if(!ticket){

    return (
      <div className="p-10 text-xl">
        Loading...
      </div>
    );

  }




  return (

    <div className="min-h-screen bg-gray-100 p-8">


      <div className="bg-white rounded-xl shadow p-8 max-w-4xl mx-auto">


        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Ticket Details
        </h1>



        <div className="space-y-4">


          <p>
            <b>Ticket ID:</b> {ticket.ticketId}
          </p>


          <p>
            <b>Customer Name:</b> {ticket.customerName}
          </p>


          <p>
            <b>Email:</b> {ticket.email}
          </p>


          <p>
            <b>Subject:</b> {ticket.title}
          </p>


          <p>
            <b>Description:</b> {ticket.description}
          </p>


          <p>
            <b>Created Date:</b>{" "}
            {new Date(ticket.createdAt).toLocaleDateString()}
          </p>


          <p>
            <b>Status:</b>

            <span className="ml-2 px-3 py-1 rounded-full bg-green-100 text-green-700">
              {ticket.status}
            </span>

          </p>


        </div>




        <hr className="my-8"/>




        <h2 className="text-xl font-bold mb-4">
          Comments
        </h2>


        {
          ticket.comments.length === 0 ? (

            <p className="text-gray-500">
              No comments added
            </p>

          ) : (

            ticket.comments.map((item)=>(

              <div
                key={item._id}
                className="bg-gray-100 p-3 rounded mb-2"
              >

                <p>
                  {item.text}
                </p>

                <small className="text-gray-500">
                  {
                    new Date(item.createdAt)
                    .toLocaleString()
                  }
                </small>

              </div>

            ))

          )
        }




        <hr className="my-8"/>




        <h2 className="text-xl font-bold mb-4">
          Update Ticket
        </h2>




        <select

          value={status}

          onChange={(e)=>setStatus(e.target.value)}

          className="border rounded-lg p-3 w-full mb-4"

        >

          <option>
            Open
          </option>

          <option>
            In Progress
          </option>

          <option>
            Closed
          </option>


        </select>





        <textarea

          value={comment}

          onChange={(e)=>setComment(e.target.value)}

          placeholder="Add comment"

          className="border rounded-lg p-3 w-full h-32 mb-4"

        />




        <div className="flex gap-4">

  <button
    onClick={() => navigate("/")}
    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
  >
    ← Back to Dashboard
  </button>


  <button
    onClick={updateTicket}
    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
  >
    Update Ticket
  </button>

</div>



      </div>


    </div>

  );

}


export default TicketDetails;