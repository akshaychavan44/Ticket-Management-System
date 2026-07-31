const Ticket = require("../models/Ticket");


exports.createTicket = async (req, res) => {

    try {

        const ticket = await Ticket.create({
            ticketId: "TKT-" + Date.now(),
            customerName: req.body.customerName,
            email: req.body.email,
            title: req.body.title,
            description: req.body.description
        });


        res.status(201).json(ticket);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};



exports.getTickets = async (req, res) => {

    try {

        const tickets = await Ticket.find();

        res.json(tickets);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

exports.getSingleTicket = async (req, res) => {

    try {

        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }

        res.json(ticket);
        } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
exports.updateTicket = async (req, res) => {

    try {

        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }


        if(req.body.status){
            ticket.status = req.body.status;
        }
          if(req.body.comment){

            ticket.comments.push({
                text:req.body.comment
            });

        }


        await ticket.save();

        res.json(ticket);


    } catch(error){

        res.status(500).json({
            message:error.message
                 });

    }

};

exports.searchTickets = async (req, res) => {

    try {

        const keyword = req.query.keyword;

        const tickets = await Ticket.find({
            $or: [
                { ticketId: { $regex: keyword, $options: "i" } },
                { customerName: { $regex: keyword, $options: "i" } },
                { email: { $regex: keyword, $options: "i" } },
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        });
        console.log("Result:", tickets);

        res.json(tickets);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};


exports.filterTickets = async (req,res)=>{

    try{

        const status = req.query.status;

        const tickets = await Ticket.find({
            status: status
        });

        res.json(tickets);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    await Ticket.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Ticket deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};