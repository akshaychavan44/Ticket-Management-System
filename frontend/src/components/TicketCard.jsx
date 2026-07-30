function TicketCard({ticket}){

return(

<div className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">


<div className="flex justify-between items-center mb-4">

<h2 className="text-xl font-bold">
{ticket.title}
</h2>


<span className={`px-3 py-1 rounded-full text-sm font-semibold
${ticket.status==="Open"
? "bg-green-100 text-green-700"
: "bg-yellow-100 text-yellow-700"
}`}>

{ticket.status}

</span>


</div>



<p className="text-gray-700 mb-2">
<b>Customer:</b> {ticket.customerName}
</p>


<p className="text-gray-700 mb-2">
<b>Email:</b> {ticket.email}
</p>


<p className="text-gray-700 mb-4">
<b>Issue:</b> {ticket.description}
</p>


<div className="text-sm text-gray-500">

Ticket ID:
<br/>

{ticket.ticketId}

</div>


</div>

)

}


export default TicketCard;