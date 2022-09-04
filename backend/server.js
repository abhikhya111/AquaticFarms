import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";


const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());




const CONNECTION_URL = 'mongodb+srv://abhikhya:ashi3666@crud.yjywtf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error));

app.post('/sendEmail',async(req,res) => {
    
    const email =req.body.myEmail;
    console.log(email);
    var OTP = Math.floor(1000 + Math.random() * 9000);

    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "abhikhya.ashi@gmail.com", // generated ethereal user
          pass: "rklquvseypoxfvvy"
        },
      });

      const info = await transporter.sendMail({
        from: '"Abhikhya Ashi 👻" <abhikhya.ashi@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Email Verification OTP ✔", // Subject line
        text: "Email Verification", // plain text body
        html: `<b> ${OTP} : is your One Time Password for registration at <a href="/google.com">aquaticfarms.in</a></b>`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send("Email sent!");
})

