import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import styles from '../../styles/Home.module.css'



export default function AddBlog() {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        get()
    }, [])

    let get = ()=>{
        axios.get("https://admin.borgfy.com/blogs/")
        .then((res)=>{
            setBlogs(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            alert("Some Error Occured While Fetching Blogs")
        })
    }


    let remove = (link) => {
        axios.post("https://admin.borgfy.com/blogs/delete/" + link)
        .then(res=>{get()})
        .catch((err)=>{
            alert("Some Error Occured While Deleting Blog")
        })
    }

    const router = useRouter()

    let edit = (link) => {
        router.push("/admin/editblog/"+link)
    }

  return (
    <div style = {{backgroundColor: 'white', minHeight: '160vh'}} className={styles.container}>
      <Head>
        <title>Borgfy - Shaping Visions</title>
        <meta name="description" content="Generated by Borgfy" />
        <link rel="icon" href="/tab_icon.png" />
      </Head>

      <main style = {{backgroundColor: 'white', color: 'black'}}>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', backgroundColor: 'lightblue', padding: '10px'}}>
            <Image src = './logo_white.png' width = '159px' height = '70px'/>
        </div>

        <div style = {{padding: '20px'}}>
            <h1>Welcome, Admin</h1>
            <h2>Borgyfy -- Blogs</h2>
            <br/>
            <div style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <Link href = '/admin/addblog'>
                    <h2 style = {{cursor: 'pointer', width: 'fit-content', padding: '10px 20px', color: 'white', backgroundColor: 'lightblue', borderRadius: '10px'}}>Add Blog</h2>
                </Link>
            </div>

            <div style = {{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                <table className='boostrap4_dark_striped'>
                    <thead>
                        <tr>
                            <th><h2>Title</h2></th>
                            <th><h2>Action</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                    {blogs.map((blog)=>{
                        return(
                                <tr key = {blog.id}>
                                    <td><h2>{blog.title}</h2></td>
                                    <td>
                                        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <div onClick={()=>{edit(blog.link)}} style = {{cursor: 'pointer', marginRight: '30px'}}>
                                                <Image src = './edit_icon.png' width = '24px' height = '24px' />
                                            </div>
                                            <div onClick={()=>{remove(blog.link)}} style = {{cursor: 'pointer'}}>
                                                <Image src = './rm_icon.png' width = '24px' height = '24px' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            

        </div>


      </main>

      
    </div>
  )
}
