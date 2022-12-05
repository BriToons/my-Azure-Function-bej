module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const lastname = (req.query.lastname || (req.body && req.body.lastname));

    responseMessage = "Welcome to the site \nWho might you be?"
    if (name != undefined){responseMessage = "Hello " + name + " hope youre having a wonderful day!"}
    if (name === "Eric" || name === "Brian"){responseMessage = "Welcome to the secret side of the site " + name + "\n"}
    if(lastname != undefined && name != undefined){
        responseMessage = "Oh so youre " + name + " " + lastname + ". Why didnt you just say so?" 
        if(name == "Eric" && lastname == "Pogue"){responseMessage = "Hello Professor, you entered the backrooms of the site.\nOnly entering your first and last name gets you here"}
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}