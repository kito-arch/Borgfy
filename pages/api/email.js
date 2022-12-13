import { SMTPClient } from 'emailjs';
 
 
export default function handler(req, res) {
 
 const email = req.body.email;
 // console.log(process.env)
 
 const client = new SMTPClient({
   user: 'user',
   password: 'pass',
   host: 'smtp.server.com',
   ssl:true
 });
 
 try{
 
  
   client.send(
     {
       text: `Just for testing purpose`,
       from: '',
       to: email,
       subject: 'testing emailjs',
      
     }
     )
   }
 catch(e){
   res.status(400).end(JSON.stringify({ message:"Error" }))
   return;
 }
 
 res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}