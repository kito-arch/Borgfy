

export default async function handler(req, res){
    const resp = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_SECRET}&response=${req.body.token}`, {method: 'POST'});
    // console.log(process.env.NEXT_PUBLIC_SECRET)
    // console.log(resp)
    const data = await resp.json();
    // console.log(data)
    res.send(data)
}