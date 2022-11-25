const express = require('express');
const nodemailer = require('nodemailer')
const app = express();


app.get("/send-email", async (req, res) => {


    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4ad0d8c61ff18e",
          pass: "20344714e55642"
        }
      });



      var message = {
        from: "noreplay@roque.com",
        to: "roque.rafael.audaces@gmail.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
      };


      transport.sendMail(message, function(err){
        if (err) return res.status(400).json({
            erro:true,
            messagem: "Email NÃO enviado"
        });
      });








    return res.json({
        erro: false,
        mensagem: "Email enviado com sucessso."
    });
});


app.listen(8080, () =>{
    console.log('servidor iniciado na porta 8080');
})