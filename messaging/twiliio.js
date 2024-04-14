// twilioClient.mjs
import  Client  from 'twilio';

const accountSid = 'AC8f953edd943a15164148ecb7b06efe8b';
const authToken = '807e2543372449391b4b2b5c2d9e9222';

const client = new Client(accountSid, authToken);

export default client;  // Optional for multiple exports
