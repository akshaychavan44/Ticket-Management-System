import { useNavigate } from "react-router-dom";
import TicketForm from "../components/TicketForm";


function CreateTicket(){

  const navigate = useNavigate();

  return(

    <div className="p-6">

     


      <h1 className="text-3xl font-extrabold text-center text-black mb-6">
        Create Ticket
      </h1>


      <TicketForm/>

    </div>

  )

}

export default CreateTicket;