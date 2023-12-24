document.querySelector(".b1").addEventListener("click",function(){
    document.querySelector(".b2").classList.remove("chosen");
    document.querySelector(".b3").classList.remove("chosen");
    document.querySelector(".b4").classList.remove("chosen");
    document.querySelector(".b5").classList.remove("chosen");
    
    document.querySelector(".b1").classList.toggle("chosen");
    
    document.querySelector(".wrapper p").textContent = "1";
});

document.querySelector(".b2").addEventListener("click",function(){
    document.querySelector(".b1").classList.remove("chosen");
    document.querySelector(".b3").classList.remove("chosen");
    document.querySelector(".b4").classList.remove("chosen");
    document.querySelector(".b5").classList.remove("chosen");
    
    document.querySelector(".b2").classList.toggle("chosen");

    document.querySelector(".wrapper p").textContent = "2";
});

document.querySelector(".b3").addEventListener("click",function(){
    document.querySelector(".b1").classList.remove("chosen");
    document.querySelector(".b2").classList.remove("chosen");
    document.querySelector(".b4").classList.remove("chosen");
    document.querySelector(".b5").classList.remove("chosen");
    
    document.querySelector(".b3").classList.toggle("chosen");

    document.querySelector(".wrapper p").textContent = "3";
});

document.querySelector(".b4").addEventListener("click",function(){
    document.querySelector(".b1").classList.remove("chosen");
    document.querySelector(".b2").classList.remove("chosen");
    document.querySelector(".b3").classList.remove("chosen");
    document.querySelector(".b5").classList.remove("chosen");
    
    document.querySelector(".b4").classList.toggle("chosen");

    document.querySelector(".wrapper p").textContent = "4";
});

document.querySelector(".b5").addEventListener("click",function(){
    document.querySelector(".b1").classList.remove("chosen");
    document.querySelector(".b2").classList.remove("chosen");
    document.querySelector(".b3").classList.remove("chosen");
    document.querySelector(".b4").classList.remove("chosen");
   
    document.querySelector(".b5").classList.toggle("chosen");

    document.querySelector(".wrapper p").textContent = "5";
});


document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector("#starbox").style.display="none";
    document.querySelector(".titleText").style.display="none";
    document.querySelector(".para").style.display="none";
    document.querySelector(".buttongroup").style.display="none";
    document.querySelector(".btn").style.display="none";

    document.querySelector(".thanksImage").style.display="block";
    document.querySelector(".score_report").style.display="inline-block";
    document.querySelector(".score_report p").textContent="You selected " + document.querySelector(".wrapper p").textContent + " out of 5";
    document.querySelector(".thankYou").style.display="inline-block";
    document.querySelector(".conclusionPara").style.display="block";
});