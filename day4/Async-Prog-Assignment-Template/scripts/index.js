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
     cont.append(img)
    i++
    
    },4000)}
    
    resume()
    function pause(){
    clearInterval(id)
    
    }
  // pause()