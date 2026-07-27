const { NotFoundError } = require("../helpers/utility"); 
 
// --------------------------------------------
// RESPONSE COLLECTION
// --------------------------------------------
function sendJSON(res, success, message, responseCode=500, data = []) {
    if(success){
        console.log(message);
    }else{
        console.error(message);
    }
    return res.status(responseCode).json({ success, message, data });
}