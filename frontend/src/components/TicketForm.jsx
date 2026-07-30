import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/axiosConfig";
function TicketForm() {

  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    customerName: "",
    email: "",
    title: "",
    description: ""
  });


  const handleChange = (e) => {

    setTicket({
      ...ticket,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/tickets", ticket);

      console.log(response.data);

      alert("Ticket Created Successfully");
        navigate("/");



      setTicket({
        customerName: "",
        email: "",
        title: "",
        description: ""
      });


    } catch (error) {

      console.log("Error creating ticket:", error);

      alert("Failed to create ticket");

    }

  };


  return (

    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-4"
    >

      <input
        type="text"
        name="customerName"
        placeholder="Customer Name"
        value={ticket.customerName}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        required
      />


      <input
        type="email"
        name="email"
        placeholder="Email"
        value={ticket.email}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        required
      />


     <select
  name="title"
  value={ticket.title}
  onChange={handleChange}
  className="border p-2 w-full rounded"
  required
>
  <option value="">Select Category</option>
  <option value="Technical Support">Technical Support</option>
  <option value="Billing">Billing</option>
  <option value="Sales">Sales</option>
  <option value="HR">HR</option>
  <option value="General Inquiry">General Inquiry</option>
</select>


   <textarea
  name="description"
  placeholder="Describe your issue"
  value={ticket.description}
  onChange={handleChange}
  className="border p-2 w-full rounded resize-none overflow-y-auto"
  rows="5"
  required
/>

      <div className="flex gap-4 mt-4">

  <button
    type="submit"
    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black"
  >
    Submit Ticket
  </button>

  <button
    type="button"
    onClick={() => navigate("/")}
    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black"
  >
    ← Back to Dashboard
  </button>

</div>
    

    </form>

  );

}

export default TicketForm;