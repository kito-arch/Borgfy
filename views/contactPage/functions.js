
import axios from 'axios'

export const mail = ()=>{
    return new Promise((resolve, reject)=>{

        axios.post('https://admin.borgfy.com/api/email', {email: ''})
        .then((res)=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })

    })
}