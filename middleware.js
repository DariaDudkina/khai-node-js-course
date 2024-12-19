// A simple middleware function that logs the request details
function logRequest(req, res, next) {
console.log(`Received a ${req.method} request to ${req.url}`);
   next(); // Call the next middleware function in the chain
}

function blockSpecialId(req, res, next) {
   if (req.params.id === '9') {
       res.status(403).send('Unavailable id');
   } else {
       next();
   }
}

module.exports = { logRequest, blockSpecialId };