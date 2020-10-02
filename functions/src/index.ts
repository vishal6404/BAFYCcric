import * as functions from 'firebase-functions';

// we would also have to import Suggestions, BasicCard etc. here if we need them
import { dialogflow } from 'actions-on-google';

// initialize the app
const app = dialogflow();

// whenever the intent "this is my intent name" is fired, this function would be called
// conv would contain all the information about the on going conversation, like the parameters extracted
// what matters for the moment is the part inside {}
app.intent("Total runs", conv => {

    // extract the parameters 
    const cricketers = conv.parameters["cricketers"];
    const date = conv.parameters["date"];
    // this sends a response back to userwhich one
    conv.ask("You said " + cricketers + date) ;//It ask for deploying 

    //use conv.close to end the conversation
    // 5 min lag sakta hai deploy hone ke baad update hone me
    // ok 
    // text karna jaisa ho
    //ok ruk 1 bar entity ur intent v dekh le
});

exports.googleAction = functions.https.onRequest(app);
