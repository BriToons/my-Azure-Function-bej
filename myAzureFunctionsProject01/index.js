module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    if(name == "Eric"){
        const newMessage = name
            ? " Welcome to the secret club" + name
            :"do you see what i see?";
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,newMessage
    };
}