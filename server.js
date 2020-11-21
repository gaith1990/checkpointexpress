// console.log("hello")
// Import express
const express =require('express');
//Init express
const app=express();
//creation endpoints
app.use((req, res, next) => {
    const date = new Date();
    let X = date.toDateString().slice(0, 3);
    let hour = date.toTimeString().slice(0, 2);
    let state = false;
    switch (X) {
      case "Mon":
      case "Tue":
      case "Wed":
      case "Thu":
      case "Fri":
        state = true;
    }
    if (state === true && hour >= 9 && hour <= 17) {
      next();
    } else res.end("Le site est hors service");
  });
//run serveur 
 const port = process.env.PORT || 8000;
app.listen(port
    , err=>{err? console.log(err):console.log(`Server app listening on port ${port}`)});
     
    //server static file 
app.use(express.static("public"))