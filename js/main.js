
var myinputs=document.querySelectorAll('#contact input');
function displayDataGame(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
       gamesBox += `
<div class="col">
        <div class="mycar overflow-hidden  position-relative ">
         <div class="cardImage w-100">
          <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" class="img-fluid blurry-image"  alt="...">
          </div>
          <div class="overlay overflow-hidden animate__fadeIn" >
                 <h3 class=" move text-center">${data[i].original_title}</h3>    
                 <p class="move2">${data[i].overview}</p>
                 <p class="move3"><span class="fst-normal">Release Date<span> : ${data[i].release_date }</span></span></p>
                 <h5 class="move4 mb-4"><i class="fa-solid fa-star text-warning fs-6 "></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-solid fa-star text-warning fs-6"></i><i class="fa-regular fa-star-half-stroke text-warning fs-6"></i></h5>
                 <span class="move5 border border-success  p-2 rounded-circle mt-3  ">${data[i].vote_average}</span>
             </div>
     
        </div>
      </div>
       `;
    }

    document.getElementById("movieData").innerHTML = gamesBox;
   
    

    
   

 }


function openSideNav() {
  $(".side-nav-menu").animate({
      left: 0
  }, 500)


  $(".open-close-icon").removeClass("fa-align-justify");
  $(".open-close-icon").addClass("fa-x");


  for (let i = 0; i < 6; i++) {
      $(".links li").eq(i).animate({
          top: 0
      }, (i + 5) * 100)
  }
}

function closeSideNav() {
  let boxWidth = $(".side-nav-menu .nav-tab").outerWidth()
  $(".side-nav-menu").animate({
      left: -boxWidth
  }, 500)

  $(".open-close-icon").addClass("fa-align-justify");
  $(".open-close-icon").removeClass("fa-x");


  $(".links li").animate({
      top: 300
  }, 500)
}

closeSideNav()
$(".side-nav-menu i.open-close-icon").click(() => {
  if ($(".side-nav-menu").css("left") == "0px") {
      closeSideNav()
  } else {
      openSideNav()
  }
})
const items = document.querySelectorAll(".side-nav-menu li");

items.forEach(element => {
    element.addEventListener("click", (e) => {
        
        this.getData(e.target.dataset.category);
    });
});

async function getData(category) {
   

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGJmZmI5YTI3ZjgyNjlkZjZiYmQ0MzZiOTFjMGM3NiIsIm5iZiI6MTcyMTQ5NTMwOS41ODE2ODMsInN1YiI6IjY2OWI4NDM5ZTMwZmNmYzExMTY5YWRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e33D2rblqMNClkgbhXE0IiC-7ACQVFIIAgWLzCj4ruc'
        }
      };
      const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;

      const api = await fetch(url, options);
      const response = await api.json();
      console.log(response)
      console.log(response.results)
      displayDataGame(response.results);
      $('.mycar').hover(
        function() {
          $(this).find('.blurry-image').addClass('blurred');
       
          $(this).find('.move').slideDown(); // Slide down only the .move element within the hovered .mycar
          $(this).find('.move3').slideDown(); 
          $(this).find('.move2').fadeIn(500);; 
          $(this).find('.move4').slideDown(); 
          $(this).find('.move5').slideDown(); 
      },
          
        );
        $('.mycar').mouseleave(

          function() {
            $(this).find('.blurry-image').removeClass('blurred');
            $(this).find('.move').animate({
              left: '-100%' ,
             
            },500);
            $(this).find('.move2').animate({
              left: '-150%' ,
             
            },500);
            $(this).find('.move3').animate({
              left: '-100%' ,
             
            },500);
            $(this).find('.move4').animate({
              left: '-100%' ,
             
            },500);
            $(this).find('.move5').animate({
              left: '-100%' ,
             
            },500)
          }
          
        );
   
}

getData('popular');
document.getElementById('firsti').addEventListener('input', function(e) {
  search(e.target.value.trim().toLowerCase()); // Trim and convert input value to lowercase
});

// Function to filter and display movies based on search input
function search(val) {
  const movieTitles = document.querySelectorAll('.mycar h3');
  
  movieTitles.forEach(title => {
      const movieTitle = title.textContent.toLowerCase(); // Get text content of movie title

      // Check if the search value exists in the movie title
      if (movieTitle.includes(val)) {
          title.parentElement.parentElement.style.display = 'block'; // Show the movie if matched
      } else {
          title.parentElement.parentElement.style.display = 'none'; // Hide the movie if not matched
      }
  });
}

for(var i=0; i<myinputs.length; i++){
  
    myinputs[i].addEventListener('input',function(e){
        console.log('lop')
       validateinputs(e.target.id,e.target.value); 
    
});
}
function validateinputs(id,value){
    var el=document.getElementById(id);
var regex={
name: /^[A-Z][a-z0-9]{3,8}$/,
email:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
phone:/^(\d{11})$/,
age:/^([1][6-9])$/,
repassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
}
if(regex[id].test(value)==true||value==''){
    console.log('hiii')
    document.getElementById(`${id}note`).style.display="none";
    return true;
}
else{
    console.log('biii')
    document.getElementById(`${id}note`).style.display="block";
    return false;
}

}