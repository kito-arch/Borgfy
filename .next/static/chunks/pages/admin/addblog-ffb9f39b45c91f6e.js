(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{6471:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/addblog",function(){return n(8195)}])},8195:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i=n(797),r=n(5893),o=n(594),l=n(9008),s=n.n(l),d=n(5675),u=n.n(d),a=n(1664),c=n.n(a),p=n(1163),x=n(7294),h=n(214),f=n.n(h);function g(){var e=(0,p.useRouter)(),t=(0,x.useRef)(null),n=(0,x.useRef)(null),l=(0,x.useRef)(null),d=(0,x.useRef)(null),a=(0,x.useRef)(null),h=(0,x.useRef)(null),g=(0,x.useRef)(null),m=(0,x.useRef)(null);(0,x.useRef)(null);var j=(0,x.useState)([]),v=j[0],y=j[1],b=function(e){var t=v.filter(function(t){return t!=e});y((0,i.Z)(t))},_=function(){var i,r,s,u,c,p,x,f,j,y,b,_,w,k,S,B,C,R,z=new Date,T=new FormData;T.append("title",null!==(b=null==t?void 0:null===(i=t.current)||void 0===i?void 0:i.value)&&void 0!==b?b:""),T.append("subtext",null!==(_=null==n?void 0:null===(r=n.current)||void 0===r?void 0:r.value)&&void 0!==_?_:""),T.append("image1",null!==(w=null==l?void 0:null===(s=l.current)||void 0===s?void 0:null===(u=s.files)||void 0===u?void 0:u[0])&&void 0!==w?w:""),T.append("image2",null!==(k=null==d?void 0:null===(c=d.current)||void 0===c?void 0:null===(p=c.files)||void 0===p?void 0:p[0])&&void 0!==k?k:""),T.append("facebook_link",null!==(S=null==a?void 0:null===(x=a.current)||void 0===x?void 0:x.value)&&void 0!==S?S:""),T.append("twitter_link",null!==(B=null==h?void 0:null===(f=h.current)||void 0===f?void 0:f.value)&&void 0!==B?B:""),T.append("linkedin_link",null!==(C=null==g?void 0:null===(j=g.current)||void 0===j?void 0:j.value)&&void 0!==C?C:""),T.append("instagram_link",null!==(R=null==m?void 0:null===(y=m.current)||void 0===y?void 0:y.value)&&void 0!==R?R:""),T.append("date",z.getFullYear()+"-"+(z.getMonth()+1>9?z.getMonth()+1:"0"+(z.getMonth()+1))+"-"+(z.getDate()>9?z.getDate():"0"+z.getDate())),T.append("sections",JSON.stringify(v));for(var A=document.getElementsByClassName("image3"),D=0;D<A.length;D++)T.append("image3",A[D].files[0]);o.Z.post("https://admin.borgfy.com/blogs/add",T,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){alert("Submitted"),e.push("/admin/blogs")}).catch(function(e){console.log(e),alert(e)})};return(0,r.jsxs)("div",{className:f().container,children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Borgfy"}),(0,r.jsx)("meta",{name:"description",content:"Generated by Borgfy"}),(0,r.jsx)("link",{rel:"icon",href:"/logo_white.png"})]}),(0,r.jsxs)("main",{style:{backgroundColor:"white",color:"black"},children:[(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",backgroundColor:"lightblue",padding:"10px"},children:(0,r.jsx)(u(),{src:"/../public/logo_white.png",width:"159px",height:"70px"})}),(0,r.jsxs)("div",{style:{padding:"20px"},children:[(0,r.jsx)(c(),{href:"/admin/blogs",children:(0,r.jsx)("h2",{style:{cursor:"pointer",width:"fit-content",padding:"10px 20px",color:"white",backgroundColor:"lightblue",borderRadius:"10px"},children:"Back to Blogs"})}),(0,r.jsx)("h1",{children:"Welcome, Admin"}),(0,r.jsx)("h2",{children:"Borgyfy -- Add Blog"}),(0,r.jsx)("br",{}),(0,r.jsx)("h2",{children:"Blog Details:"}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Title"}),(0,r.jsx)("input",{ref:t,style:{fontSize:"20px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Description"}),(0,r.jsx)("textarea",{ref:n,style:{fontSize:"20px",height:"100px",width:"500px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Featured Image"}),(0,r.jsx)("input",{type:"file",ref:l,style:{width:"500px",fontSize:"20px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Secondary Featured Image"}),(0,r.jsx)("input",{type:"file",ref:d,style:{width:"500px",fontSize:"20px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Facebook Link"}),(0,r.jsx)("input",{ref:a,style:{width:"500px",fontSize:"20px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Twitter Link"}),(0,r.jsx)("input",{ref:h,style:{width:"500px",fontSize:"20px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Linkedin Link"}),(0,r.jsx)("input",{ref:g,style:{width:"500px",fontSize:"20px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Instagram Link"}),(0,r.jsx)("input",{ref:m,style:{width:"500px",fontSize:"20px"}}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h2",{children:"Blog Sections: "}),(0,r.jsx)("br",{}),v.map(function(e,t){return(0,r.jsxs)(x.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"fit-content"},children:[(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Title of Section"}),(0,r.jsx)("div",{onClick:function(){b(e)},style:{marginLeft:"30px",cursor:"pointer"},children:(0,r.jsx)(u(),{src:"/../public/rm_icon.png",width:"24px",height:"24px"})})]}),(0,r.jsx)("input",{value:v[t].title,style:{fontSize:"20px"},onChange:function(e){v[t].title=e.target.value,y((0,i.Z)(v))}})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{style:{marginBottom:"2px"},children:"Description of Section"}),(0,r.jsx)("textarea",{value:v[t].description,onChange:function(e){v[t].description=e.target.value,y((0,i.Z)(v))},style:{fontSize:"20px",height:"100px",width:"500px"}})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Image of Section"}),(0,r.jsx)("input",{style:{fontSize:"20px"},type:"file",className:"image3"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]},t)}),(0,r.jsx)("p",{onClick:function(){v.push({title:"",description:""}),y((0,i.Z)(v))},style:{marginTop:"10px",color:"white",background:"lightblue",padding:"10px",width:"fit-content",cursor:"pointer"},children:"Add Section"}),(0,r.jsx)("p",{onClick:_,style:{marginTop:"10px",color:"white",background:"lightblue",padding:"10px",width:"fit-content",cursor:"pointer"},children:"Submit"})]})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},797:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[247,594,774,888,179],function(){return e(e.s=6471)}),_N_E=e.O()}]);