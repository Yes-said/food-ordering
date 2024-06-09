const eventSerice = require("../services/event.service");

module.exports = {

    createEvents: async(req, res) => {


        try {
            
    const { event } = req.body;
    const { restaurantId } = req.params;
  const createdEvents = await eventSerice.createdEvent(event, restaurantId);
  res.status(202).json(createdEvents);


        } catch (error) {
            
if (error instanceof Error) {
    res.status(400).json({ error: error.message});
} else {
    res.status(500).json({ error: "Internal server error"});
}

        }
    },

    findAllEvents: async(req, res) => {

        try {
            
            const events = await eventSerice.findAllEvent();
            res.status(202).json(events);

        } catch (error) {
            
            if (error instanceof Error) {
                res.status(400).json({ error: error.message});
            } else {
                res.status(500).json({ error: "Internal server error" });
            }

        }
    },


    findRestaurantsEvents: async(req, res) => {

try {

    const { restaurantId } = req.params;
    const events = await eventSerice.findRestaurantsEvent(restaurantId);
    res.status(202).json(events);


    
} catch (error) {

    if (error instanceof Error) {
        res.status(400).json({ error: error.message});
    } else {
        res.status(500).json({ error: "Intrenal server error"});
    }
    
}

    },

    deleteEvents: async(req, res) => {

        try {

            const { id } = req.params;
            await eventSerice.deleteEvent(id);
            res.status(202).json({ message: "Events Deleted", success: true});
            
        } catch (error) {
         
            res.status(500).json({ error: "Internal server error"});
        }
    },
};