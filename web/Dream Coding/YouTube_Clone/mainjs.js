window.onload = function() {
  const likeBtn = document.querySelector('.liked');
  const dislikeBtn = document.querySelector ('.disliked');
  const thumbsIconsSpan = document.querySelector('.thumbsIcons');

  const onClick = e =>{
    console.log('isworking');
    if(e.target.classList.contains('liked')){
      console.log('liked clicked');
      likeBtn.classList.toggle('active');
      if(dislikeBtn.classList.contains('active')){
        console.log('disliked toggle');
        dislikeBtn.classList.toggle('active');
        
      }
        
    }
    else if(e.target.classList.contains('disliked')) {
      console.log('disliked clicked');
      dislikeBtn.classList.toggle('active');
      if(likeBtn.classList.contains('active'))
      {
        console.log('liked toggle');
        likeBtn.classList.toggle('active');
      }
      
    }

  }

  thumbsIconsSpan.addEventListener('click', onClick)
  
  
}






