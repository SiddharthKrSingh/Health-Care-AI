// twilioClient.mjs
import  Client  from 'twilio';


const client = new Client(accountSid, authToken);

export default client;  // Optional for multiple exports
