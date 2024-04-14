import client from './twiliio.js';

function message(numbers, alertMessage) {
  numbers.forEach(number => {
    
    const clientmessage = client.messages
      .create({ 
        from: 'whatsapp:+14155238886',
        body: `${alertMessage}`,
        to: `whatsapp:+91${number}`,
      })
      .then(message => console.log(message.sid));
    console.log(alertMessage)
  });
}
 

export default message; 

// function message(number, alertMessage) {
//   const clientmessage = client.messages
//     .create({
//       from: 'whatsapp:+14155238886',
//       body: `${alertMessage}`,
//       to: `whatsapp:+91${number}`,
//     })
//     .then(message => console.log(message.sid));
//   console.log(alertMessage)
// }
 
// (number, alertMessage) => {
//   console.log(number, alertMessage) 
//   client.messages
//     .create({
//       from: 'whatsapp:+14155238886',
//       body: `${alertMessage}`,
//       to: `whatsapp:+91${number}`,
//     })
//     .then(message => console.log(message.sid));
//   console.log(alertMessage)
//   }
  