import axios from 'axios'
import Head from 'next/head'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'




export default function AddCase() {

  let app_name_ref = useRef(null)
  let type_ref = useRef(null)
  let type2_ref = useRef(null)
  let title_ref = useRef(null)
  let description_ref = useRef(null)
  let image_ref = useRef(null)
  let person_name_ref = useRef(null)
  let person_place_ref = useRef(null)
  let contribution_text_ref = useRef(null)
  let timeline_ref = useRef(null)
  let contribution_image_ref = useRef(null)
  let brainstorm_text_ref = useRef(null)
  let brainstorm_image_ref = useRef(null)
  let objective_ref = useRef(null)
  let problem_text_ref = useRef(null)
  let problem_image_ref = useRef(null)
  let challenge1_text_ref = useRef(null)
  let challenge1_image_ref = useRef(null)
  let challenge2_text_ref = useRef(null)
  let challenge2_image_ref = useRef(null)
  let solution_ref = useRef(null)
  let approach_text_ref = useRef(null)
  let approach_image1_ref = useRef(null)
  let approach_image2_ref = useRef(null)
  let approach_image3_ref = useRef(null)
  let sketching_text_ref = useRef(null)
  let sketching_image_ref = useRef(null)
  let wireframe_text_ref = useRef(null)
  let wireframe_image_ref = useRef(null)
  let style_text_ref = useRef(null)
  let style_image1_ref = useRef(null)
  let style_image2_ref = useRef(null)
  let style_image3_ref = useRef(null)
  let visual_text_ref = useRef(null)
  let visual_image_ref = useRef(null)
  let final_image_ref = useRef(null)
  let funding_ref = useRef(null)
  let onboarding_ref = useRef(null)
  let revenue_ref = useRef(null)
  let quote_ref = useRef(null)
  let quote_by_ref = useRef(null)


  const submit = ()=>{
      axios.post("http://localhost:3000/cases/add", {
       app_name : app_name_ref.current.value,
       type : type_ref.current.value,
       type2 : type2_ref.current.value,
       title : title_ref.current.value,
       description : description_ref.current.value,
       image : image_ref.current.files[0],
       person_name : person_name_ref.current.value,
       person_place : person_place_ref.current.value,
       contribution_text : contribution_text_ref.current.value,
       timeline : timeline_ref.current.value,
       contribution_image : contribution_image_ref.current.files[0],
       brainstorm_text : brainstorm_text_ref.current.value,
       brainstorm_image : brainstorm_image_ref.current.files[0],
       objective : objective_ref.current.value,
       problem_text : problem_text_ref.current.value,
       problem_image : problem_image_ref.current.files[0],
       challenge1_text : challenge1_text_ref.current.value,
       challenge1_image : challenge1_image_ref.current.files[0],
       challenge2_text : challenge2_text_ref.current.value,
       challenge2_image : challenge2_image_ref.current.files[0],
       solution : solution_ref.current.value,
       approach_text : approach_text_ref.current.value,
       approach_image1 : approach_image1_ref.current.files[0],
       approach_image2 : approach_image2_ref.current.files[0],
       approach_image3 : approach_image3_ref.current.files[0],
       sketching_text : sketching_text_ref.current.value,
       sketching_image : sketching_image_ref.current.files[0],
       wireframe_text : wireframe_text_ref.current.value,
       wireframe_image : wireframe_image_ref.current.files[0],
       style_text : style_text_ref.current.value,
       style_image1 : style_image1_ref.current.files[0],
       style_image2 : style_image2_ref.current.files[0],
       style_image3 : style_image3_ref.current.files[0],
       visual_text : visual_text_ref.current.value,
       visual_image : visual_image_ref.current.files[0],
       final_image : final_image_ref.current.files[0],
       funding : funding_ref.current.value,
       onboarding : onboarding_ref.current.value,
       revenue : revenue_ref.current.value,
       quote : quote_ref.current.value,
       quote_by : quote_by_ref.current.value
      },
      {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      }
      )
      .then((res)=>{alert("Submitted")})
      .catch((err)=>{alert("Error Occured While Submitting")})
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h2>Fill in the Fields<br/>Leave Fields empty if you dont want to that respective section</h2>
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>app name</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {app_name_ref} ></textarea>
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>type</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {type_ref} ></textarea>
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>type2</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {type2_ref} ></textarea>
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>title</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {title_ref} ></textarea>
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>description</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {description_ref} ></textarea>
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>image</h1>
        <input type = "file" ref = {image_ref} />
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>person name</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {person_name_ref} ></textarea>
      </div>
      
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>person place</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {person_place_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>contribution text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {contribution_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>timeline</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {timeline_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>contribution image</h1>
        <input type = "file" ref = {contribution_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>brainstorm text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {brainstorm_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>brainstorm image</h1>
        <input type = "file" ref = {brainstorm_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>objective</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {objective_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>problem text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {problem_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>problem image</h1>
        <input type = "file" ref = {problem_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>challenge1 text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {challenge1_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>challenge1 image</h1>
        <input type = "file" ref = {challenge1_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>challenge2 text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {challenge2_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>challenge2 image</h1>
        <input type = "file" ref = {challenge2_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>solution</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {solution_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>approach text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {approach_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>approach image1</h1>
        <input type = "file" ref = {approach_image1_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>approach image2</h1>
        <input type = "file" ref = {approach_image2_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>approach image3</h1>
        <input type = "file" ref = {approach_image3_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>sketching text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {sketching_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>sketching image</h1>
        <input type = "file" ref = {sketching_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>wireframe text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {wireframe_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>wireframe image</h1>
        <input type = "file" ref = {wireframe_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>style text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {style_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>style image1</h1>
        <input type = "file" ref = {style_image1_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>style image2</h1>
        <input type = "file" ref = {style_image2_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>style image3</h1>
        <input type = "file" ref = {style_image3_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>visual text</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {visual_text_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>visual image</h1>
        <input type = "file" ref = {visual_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>final image</h1>
        <input type = "file" ref = {final_image_ref} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>funding</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {funding_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>onboarding</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {onboarding_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>revenue</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {revenue_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>quote</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {quote_ref} ></textarea>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px'}}>
        <h1 style = {{marginRight: '10px'}}>quote by</h1>
        <textarea style = {{fontSize: '30px', height: '200px'}} ref = {quote_by_ref} ></textarea>
      </div>

      <h2 onClick={submit} style = {{background: 'blue', padding: '10px', width: 'fit-content'}}>Submit</h2>
        
      </main>

      
    </div>
  )
}
