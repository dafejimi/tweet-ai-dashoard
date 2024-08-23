const cron = require('node-cron')
const createAutobotFn = require("./create-autobots")

// Cron job that runs every hour
cron.schedule('0 * * * *', async () => {
    console.log('Cron job started: Creating 500 Autobots');
    // Creating Autobots
    await createAutobotFn.createAutobots()
    
    console.log('Cron job finished: Finished Creating 500 Autobots');
});
