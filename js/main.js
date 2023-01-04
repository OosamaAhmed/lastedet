
function get() {
  // fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
  // fetch("https://fakestoreapi.com/products").then((res) =>
  fetch("https://api.escuelajs.co/api/v1/products").
  then((res) => res.json().
  
  then(users));
}

get();
let div
function users(pdata){

     pdata.forEach( data1=>  {
        div = document.getElementById("mydiv");
        div.innerHTML += `<div style=" background-color:#ffffff ;justify-content:center;padding : 10px ; width:180px;margin:15px auto;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ">
             <img src=${data1.images} style="width:180px ; max-height:130px">
              <h3>${data1.title}</h3>
         <p> Price : ${data1.price} $ </p>
        <div style="display:inline ;flex:1">
         <button style="background-color:#13211f;color: white; font-size: 19px; border: none;padding:6px;cursor: pointer;border-radius: 5px;
         ;"><a  style="text-decoration:none; color:white;font-waight:bold" href="#">GO To Pruduct</a>
         </button>
       
         </div>
         </div>`;
      }
    );  
}



// end of nav 1
// slider in home page
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function changeImg() {
  myInterval = setInterval(function () {
    showSlides(slideIndex);
    slideIndex = slideIndex + 1;
  }, 2000);
}
window.onload = changeImg;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


//search section


searchBar = document.getElementById("searchbar");
searBtn = document.getElementById("srchbtn");
let searchBarValue
    // searchBar.addEventListener("focus", function () { 
    //     searchBarValue = document.getElementById("searchbar")    
    // });

    searBtn.addEventListener('click',(e)=>{
      e.preventDefault()
      searchBarValue = document.getElementById("searchbar")
      console.log(searchBarValue.value);
      fetch("https://api.escuelajs.co/api/v1/products?title="+searchBarValue.value, {
                
            }).then(res => res.json())
            .then(ressearch)
    })
    
        function ressearch(data) {
            data.forEach(function (data2) {    
              div.innerHTML = ''    
                div.innerHTML += `<div style=" background-color:#ffffff ;justify-content:center;padding : 10px ; width:180px;margin:15px auto;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ">
                <img src=${data2.images} style="width:180px ; max-height:130px">
                 <h3>${data2.title}</h3>
            <p> Price : ${data2.price} $ </p>
           <div style="display:inline ;flex:1">
            <button style="background-color:#13211f;color: white; font-size: 19px; border: none;padding:6px;cursor: pointer;border-radius: 5px;
            ;"><a  style="text-decoration:none; color:white;font-waight:bold" href="#">GO To Pruduct</a>
            </button>
          
            </div>
            </div>`
            })
        }