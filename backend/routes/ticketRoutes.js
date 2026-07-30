const express = require("express");

const router = express.Router();

const {
    createTicket,
    getTickets,
    getSingleTicket,
    updateTicket,
    searchTickets,
    filterTickets,
    deleteTicket
} = require("../controller/ticketController");



router.post("/", createTicket);

router.get("/", getTickets);

router.get("/search", searchTickets);

router.get("/filter", filterTickets);

router.get("/:id", getSingleTicket);

router.put("/:id", updateTicket);

router.delete("/:id", deleteTicket);

module.exports = router;