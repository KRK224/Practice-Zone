window.onload = function() {  
  const likeBtn = document.querySelector('.liked');
  const dislikeBtn = document.querySelector ('.disliked');
  const thumbsIconsSpan = document.querySelector('.thumbsIcons');

  const onClick = e =>{
    console.log('isworking');
    console.log('e.target: ' +e.target);
    console.log('icon cliked?: '+e.target.classList.contains('fas'))
    if(e.target.classList.contains('fa-thumbs-up') || e.target.parentElement.classList.contains('liked')){
      console.log('liked clicked');
      likeBtn.classList.toggle('active');
      if(dislikeBtn.classList.contains('active')){
        console.log('disliked toggle');
        dislikeBtn.classList.toggle('active');
        
      }
        
    }
    else if(e.target.classList.contains('fa-thumbs-down') || e.target.parentElement.classList.contains('disliked')) {
      console.log('disliked clicked');
      dislikeBtn.classList.toggle('active');
      console.log(dislikeBtn.children[0]);
      console.log(Number(dislikeBtn.children[0].textContent));
      if(Number(dislikeBtn.children[0].textContent)=== 28){
        dislikeBtn.children[0].innerHTML = '<i class="fas fa-thumbs-down"></i> 29';
      }
      else {
        dislikeBtn.children[0].innerHTML = '<i class="fas fa-thumbs-down"></i> 28';
      }
      if(likeBtn.classList.contains('active'))
      {

        console.log('liked toggle');
        likeBtn.classList.toggle('active');
      }
      
    }

  }

  thumbsIconsSpan.addEventListener('click', onClick)
  
  
}






