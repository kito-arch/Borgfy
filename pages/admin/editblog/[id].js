import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import styles from '../../../styles/Home.module.css'



export default function EditBlog() {

    const router = useRouter()

    const [blog, setBlog] = useState(null)

    useEffect(()=>{
        axios.get("https://admin.borgfy.com/blogs/" + router.query.id)
        .then(res=>{
            setBlog(res.data[0])
            setSection(res.data[0]?.sections ?? [])
            console.log(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    }, [])

    const title_ref = useRef(null)
    const subtext_ref = useRef(null)
    const image1_ref = useRef(null)
    const image2_ref = useRef(null)
    const facebook_link_ref = useRef(null)
    const twitter_link_ref = useRef(null)
    const linkedin_link_ref = useRef(null)
    const instagram_link_ref = useRef(null)
    const image3_ref = useRef(null)

    const [section, setSection] = useState([])

    // let images = ()=>{
    //     let arr = []
    //     var slides = document.getElementsByClassName("image3");
    //     for (var i = 0; i < slides.length; i++) {
    //         arr.push(slides[i].files[0])
    //     }
    //     return arr
    // }

    let remove = (sec)=>{
        let newSections = section.filter( (el) => el != sec )
        setSection([...newSections])
    }

    let removeBlog = (link) => {
        axios.post("https://admin.borgfy.com/blogs/delete/" + link)
    }

    let submit = ()=>{
        let date = new Date()
        // let arr = images()
        
        let formData = new FormData()
        formData.append('title', title_ref?.current?.value ?? "")
        formData.append('subtext', subtext_ref?.current?.value ?? "")
        formData.append('image1', image1_ref?.current?.files?.[0] ?? "")
        formData.append('image2', image2_ref?.current?.files?.[0] ?? "")
        formData.append('facebook_link', facebook_link_ref?.current?.value ?? "")
        formData.append('twitter_link', twitter_link_ref?.current?.value ?? "")
        formData.append('linkedin_link', linkedin_link_ref?.current?.value ?? "")
        formData.append('instagram_link', instagram_link_ref?.current?.value ?? "")
        formData.append('date', date.getFullYear() + "-" + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)) + "-" + ((date.getDate()) > 9 ? (date.getDate()) : "0" + (date.getDate())))
        formData.append('sections', JSON.stringify(section))
        
        var slides = document.getElementsByClassName("image3");
        for (var i = 0; i < slides.length; i++) {
            formData.append('image3', slides[i].files[0])
        }


        axios.post("https://admin.borgfy.com/blogs/add", formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res)=>{
            removeBlog(router.query.id)
            alert("Submitted")
            router.push("/admin/blogs")
        })
        .catch((err)=>{console.log(err);alert(err)})
    }

  return (
    <div className={styles.container}>
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
            <Link href = '/admin/blogs'>
                <h2 style = {{cursor: 'pointer', width: 'fit-content', padding: '10px 20px', color: 'white', backgroundColor: 'lightblue', borderRadius: '10px'}}>Back to Blogs</h2>
            </Link>
            <h1>Welcome, Admin</h1>
            <h2>Borgyfy -- Add Blog</h2>
            <br/>
            <h2>Blog Details:</h2>
            <h4 style = {{marginBottom: '2px'}}>Title</h4>
            <input defaultValue={blog?.title} ref = {title_ref} style = {{fontSize: '20px'}}/>
            <br/>
            <h4 style = {{marginBottom: '2px'}}>Description</h4>
            <textarea ref = {subtext_ref} style = {{fontSize: '20px', height: '100px', width: '500px'}}></textarea>
            <br/>
            <h4 style = {{marginBottom: '2px'}}>Featured Image</h4>
            <input type={'file'} ref = {image1_ref} style = {{width: '500px', fontSize: '20px'}}/>
            <br/>
            <h4 style = {{marginBottom: '2px'}}>Secondary Featured Image</h4>
            <input type={'file'} ref = {image2_ref} style = {{width: '500px', fontSize: '20px'}}/>
            <br/>
            <h4 style = {{marginBottom: '2px'}}>Facebook Link</h4>
            <input defaultValue={blog?.facebook_link} ref = {facebook_link_ref} style = {{width: '500px', fontSize: '20px'}}/>
            <br/>
            <h4 style = {{marginBottom: '2px'}}>Twitter Link</h4>
            <input defaultValue={blog?.twitter_link} ref = {twitter_link_ref} style = {{width: '500px', fontSize: '20px'}}/>
            <br/>
            <h4 style = {{marginBottom: '2px'}}>Linkedin Link</h4>
            <input defaultValue={blog?.linkedin_link} ref = {linkedin_link_ref} style = {{width: '500px', fontSize: '20px'}}/>
            <br/>
            <h4 style = {{marginBottom: '2px'}}>Instagram Link</h4>
            <input defaultValue={blog?.instagram_link} ref = {instagram_link_ref} style = {{width: '500px', fontSize: '20px'}}/>

            <br/>
            <br/>
            <br/>
            <h2>Blog Sections: </h2>
            <br/>


            {section.map((sec, index)=>{
                return( 
                    <React.Fragment key = {index}>
                        <div>
                            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content'}}>
                                <h4 style = {{marginBottom: '2px'}}>Title of Section</h4>
                                <div onClick={()=>{remove(sec)}} style = {{marginLeft: '30px', cursor: 'pointer'}}>
                                    <Image src = './rm_icon.png' width = '24px' height = '24px' />
                                </div>
                            </div>
                            <input value={section[index].title} style={{fontSize: '20px'}} onChange={(event)=>{
                                section[index].title = event.target.value
                                setSection([...section])
                            }} />
                        </div>

                        <div>
                            <h4 style = {{marginBottom: '2px'}}>Description of Section</h4>
                            <textarea value={section[index].description} onChange={(event)=>{
                                section[index].description = event.target.value
                                setSection([...section])
                            }} style = {{fontSize: '20px', height: '100px', width: '500px'}}></textarea>
                        </div>

                        <div>
                            <h4>Image of Section</h4>
                            <input style = {{fontSize: '20px'}} type = "file" className = 'image3'/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </React.Fragment>
                )
            })}
            <p onClick={()=>{
                section.push({title: "", description: ""})
                setSection([...section])
                }} style = {{marginTop: '10px', color: 'white', background: 'lightblue', padding: '10px', width: 'fit-content', cursor: 'pointer'}}>Add Section</p>


            <p onClick={submit} style = {{marginTop: '10px', color: 'white', background: 'lightblue', padding: '10px', width: 'fit-content', cursor: 'pointer'}}>Submit</p>

        </div>



        {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h2>Fill in the Fields<br/>Leave Fields empty if you dont want to that respective section</h2>
        </div>


        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>title</h1>
            <textarea style = {{fontSize: '30px', height: '200px'}} ref = {title_ref} ></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>subtext</h1>
            <textarea style = {{fontSize: '30px', height: '200px'}} ref = {subtext_ref} ></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>image1</h1>
            <input type = "file" ref = {image1_ref} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>image2</h1>
            <input type = "file" ref = {image2_ref} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>facebook link</h1>
            <textarea style = {{fontSize: '30px', height: '200px'}} ref = {facebook_link_ref} ></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>twitter link</h1>
            <textarea style = {{fontSize: '30px', height: '200px'}} ref = {twitter_link_ref} ></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>linkedin link</h1>
            <textarea style = {{fontSize: '30px', height: '200px'}} ref = {linkedin_link_ref} ></textarea>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
            <h1 style = {{marginRight: '10px'}}>instagram_link</h1>
            <textarea style = {{fontSize: '30px', height: '200px'}} ref = {instagram_link_ref} ></textarea>
        </div>

        {section.map((sec, index)=>{
            return( 
                <React.Fragment key = {index}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
                        <h1 style = {{marginRight: '10px'}}>Title</h1>
                        <textarea onChange={(event)=>{
                            section[index].title = event.target.value
                            setSection([...section])
                        }} style = {{fontSize: '30px', height: '200px'}}></textarea>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
                        <h1 style = {{marginRight: '10px'}}>Description</h1>
                        <textarea onChange={(event)=>{
                            section[index].description = event.target.value
                            setSection([...section])
                        }} style = {{fontSize: '30px', height: '200px'}}></textarea>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
                        <h1 style = {{marginRight: '10px'}}>Image</h1>
                        <input type = "file" className = 'image3'/>
                    </div>
                </React.Fragment>
            )
        })}

        <h2 onClick={()=>{
            section.push({title: "", description: ""})
            setSection([...section])
            }} style = {{background: 'blue', padding: '10px', width: 'fit-content', cursor: 'pointer'}}>Add</h2>


        <h2 onClick={submit} style = {{background: 'blue', padding: '10px', width: 'fit-content', cursor: 'pointer'}}>Submit</h2> */}


      </main>

      
    </div>
  )
}
