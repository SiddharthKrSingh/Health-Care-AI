// twilioClient.mjs
import  Client  from 'twilio';

const accountSid = 
const authToken = '

const client = new Client(accountSid, authToken);

export default client;  // Optional for multiple exports
