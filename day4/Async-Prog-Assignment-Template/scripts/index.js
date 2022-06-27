let arr=["https://www.bing.com/th?id=OIP.0tnXdtIp9N52nEwMSS7gIwHgFo&w=288&h=162&c=7&rs=1&o=6&dpr=1.1&pid=SANGAM",
"https://images.ottplay.com/images/jugjugg-jeeyo-721.jpg","https://img.huffingtonpost.com/asset/5cd630992100002f0073bc0d.jpeg?ops=scalefit_720_noupscale","https://static.toiimg.com/photo/4716418.cms?imgsize=25137"]

let i=0;
let id;
    function resume(){
    var cont=document.querySelector("#slideshow")
     id=setInterval(function(){
        if(i==arr.length)
    {i=0;}
    
        cont.innerHTML=""
    
    var img=document.createElement("img")
    
    img.setAttribute("src",arr[i])
    img.setAttribute("id","row");
     cont.append(img)
    i++
    
    },4000)}
    
    resume()
    function pause(){
    clearInterval(id)
    
    }
  // pause()
  function movies(){
let arr2=["https://media2.bollywoodhungama.in/wp-content/uploads/2022/06/Jugjugg-Jeeyo-2-10.jpg",
"https://www.pakistanlounge.pk/wp-content/uploads/2022/06/varun-dhawan-kiara-advani-starrer-jugjugg-jeeyo-leaked-online-0001.jpg",
"https://media2.bollywoodhungama.in/wp-content/uploads/2022/06/Jugjugg-Jeeyofg-3.jpg",
"https://video.newsserve.net/v/20220626/1337713024-JugJugg-Jeeyo-Box-Office-Collection-day-Shows_hires.jpg",
"https://gumlet.assettype.com/nationalherald%2F2022-06%2Fe8ec2e0c-72ab-475d-951e-6f29b9452580%2F_Jugjugg_Jeeyo__director_Raj_Mehta__Entertainment__is_the_signature_of_my_cinema.jpg?rect=0%2C7%2C1200%2C675&auto=format%2Ccompress&fmt=webp&w=1200",
"https://c.ndtvimg.com/2022-06/gn8dp84_jugjugg-jeeyo_625x300_24_June_22.jpg",
"https://www.iwmbuzz.com/wp-content/uploads/2022/06/karan-johar-adds-song-to-jugjugg-jeeyo-at-the-last-minute.jpeg",
"https://www.timesofgeorgia.co.nz/wp-content/uploads/2022/06/Jugjugg-Jeeyo-actress-Kiara-Advani-asked-if-the-film-will.jpg",
"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/jugjugg_jeeyo_bo_0_1200x768.jpeg?LroJaLARsPJ5DYMC5U8isHIHRD0sClNO&size=770:433"];
arr2.forEach(function(el){
    var div=document.createElement("div")
    var tr1=document.createElement("h3");
    tr1.innerText="latest"
    var tr2=document.createElement("h3")
    tr2.innerText="9**"
    var tr3=document.createElement("img")
    tr3.setAttribute("src",el)
    tr3.setAttribute("id","myimg")
    
    var tr4=document.createElement("h3")
    tr4.innerText="25-06-2022"

    var tr5=document.createElement("h3")
    tr5.innerText="4.0"

    var tr6=document.createElement("h3")
    tr6.innerText="sold";
 div.append( tr2,tr1,tr3,tr4,tr5,tr6)
 document.querySelector("#movies").append(div)
localStorage.setItem("movies",JSON.stringify(arr2))
})
  }
  movies()