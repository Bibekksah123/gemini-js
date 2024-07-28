
let sectionbar=document.querySelector('.sidebaraction');
let chathistry=document.querySelector('.chathistry ul');
let brand=document.querySelector('.brand');
let brandvalue=document.querySelector('.brandvalue');
let chat=document.querySelector('.chatcontent');
let inputesearch=document.querySelector('.inputare input');
let result=document.querySelector('.result');
let navigationbar=document.querySelector('.sidnavbutton');
let menu=document.querySelector('.menu');
let send =document.querySelector('.send');
let satrtconent=document.querySelector('.startcontent ul');
let startcontent=document.querySelector('.startcontent');
  question.forEach((option)=>{
  let listitem=document.createElement('li');
  listitem.addEventListener("click",()=>{
   getgeminires(option.questions, true);
  })
  listitem.innerHTML=`${option.questions}`;
  satrtconent.appendChild(listitem);
  })
  menu.addEventListener("click",()=>{
    sectionbar.classList.toggle('removebarwith');
  })
  inputesearch.addEventListener("keyup",(e)=>{
  if(e.target.value.length<0){
    send.style.display='none';
  }else{
    send.style.display='block';
  }
  });
  send.addEventListener("click",()=>{
    getgeminires(inputesearch.value, true);
  });
    function getgeminires(question,appendhistry){
     let recent=document.createElement('li');
     recent.innerHTML=`${question}`;
     chathistry.appendChild(recent);
     result.innerHTML="";
     inputesearch.value="";
     startcontent.style.display='none';
     chat.style.display='block';
    
  let url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBz95nLaYJFmdP-q93DHkzy0vqB19mSslM";
  fetch(url,{
    method:"POST",
    body:JSON.stringify({
      contents:[{parts:[{text:question}]}],
    }),
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    result.innerHTML=data.candidates[0].content.parts[0].text;
    
  });
  // .then((res)=>res.json())
  // .then((Data)=>{
  //   console.log(Data)
  // })
  // .catch((err)=>{
  //   console.log('err')
  // })
  // let url="AIzaSyCzjpFCoOSRnI0o-af5SUh58jfPVp9YT0w";
  // fetch(url)
  // .then((res)=>res.json())
  // then((data)=>{console.log(data)})
}