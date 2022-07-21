

fetch("./posts.json")
.then(response => {

   if(response.ok){ return response.json();}
   else{throw new Error("kuch toh hua hai")}
})

.then(data => {
    
  const blogbox=document.querySelector(".blog-box");
  
  for(let i=0;i<12;i++){
    const bloglist=document.createElement("div");
    bloglist.classList="blog";


   const infocard =  `<div class="img">
    <img src="${data.posts[i].img}" alt="">
    <div class="date">${data.posts[i].datetime}</div>
</div>
<div class="blog-info">
    <div class="admin"><i class="fa fa-user"></i> BY: <span>${data.posts[i].author}</span></div>
<div class="comment">
    <i class="fa fa-heart"> <span>${data.posts[i].comment_count}</span></i> | <i class="fa fa-comment"> <span>${data.posts[i].comment_count}</span></i>
</div>
</div>
<div class="blog-text">
    <h3>${data.posts[i].title}</h3>
    <p>${data.posts[i].desc}</p>
    </div>
    <div class="read">
      <a href="#">Read More..</a></div>`;



bloglist.innerHTML=infocard;
blogbox.append(bloglist);

  }
})
.catch((error) => { alert(error) })

    








