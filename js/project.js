var topic = ["Stone Paper Siser Game",
            "Class Room Tool",
            "Notepad Compiler",
            "Google translator",
            "Train-Ticket-Registration"]
var img = ["images/sps.png","images/classroom.jpg","images/notepad.webp","images/trans.webp","images/rtr.jpg"]
var contant = ["This is StonePaperSessorGame <br> this is made using python <h2>Modules</h2><li>tkinter</li><li>inbuild moduls</li>",
              "this Ai and Ml Project<h1>Study Kit</h1>This is made using python.it's a solution for online class<h3>Moduls</h3><li>flask</li><li>gtts</li><li>mamooth</li><li>google_image_searching</li><li>googletrans</li><li>butysope</li><li>Etc.</li>",
              "This is NotePade Compiler it's eble to compile python codes.it's made with python<br>Modules used<li>pyqt5</li><li>buildin modules</li>",
              "This is Google translator,it's made with python and using google 'googletrans' API.<br>Modules used<li>googletrans</li><li>buildin modules</li>",
               "This is Train-Ticket-Registration using C language.it's just terminal program.2nd sem mini project"]
var links = ["https://github.com/NagiPragalathan/StonePaperSessorGame",
             "https://github.com/NagiPragalathan/ClassRoomTools",
             "https://github.com/NagiPragalathan/NotePad_Compiler",
             "https://github.com/NagiPragalathan/google-translator",
             "https://github.com/NagiPragalathan/Train-Ticket-Registration"]

var code ="<div class='container' onmouseover='change()' onmouseout='change1()'><div class='blur'><div class='box'><!-- Small Tag -->            <div class='imgtag'></div>                        <!-- Paragraph Tag -->            <div class='para'>                <p style='margin-left: 11px;'>"+"</p>            </div>                            <!-- Button Tag -->            <button class='btn' style='color: aqua;'>Visite</button>        </div>    </div>                        <!-- Before hover tag -->    <h1 class='heading' id='heading'>"+"Topic-of-the-contant</h1>    <div class='bgimg' id='bg' onmouseover='change()'></div></div>"
// document.getElementById("pack").innerHTML
let str=""
for(let i=0;i<topic.length;i++){
    str = str+"<div class='container' onmouseover='change("+i+")' onmouseout='change1("+i+")'><div class='blur'><div class='box'><!-- Small Tag -->            <div class='imgtag' style = 'width: 72px;background-image:url("+img[i]+");height: 68px;background-size: cover;border: 2px solid;background-position-x: -15px;border-radius: 44px;' ></div>                        <!-- Paragraph Tag -->            <div class='para'>                <p style='margin-left: 11px;'>"+contant[i]+"</p>            </div>                            <!-- Button Tag -->            <button class='btn' style='color: aqua;'><a style='text-decoration: none;color: azure;' href = ' "+links[i]+" '>Visite</a></button>        </div>    </div>                        <!-- Before hover tag -->    <h1 class='heading' id='heading"+i+"'>"+topic[i]+"</h1>    <div class='"+"bgimg"+i+"' id='bg"+i+"' onmouseover='change("+i+")' style = 'width: 245px;background-image: url("+img[i]+");background-size: cover;background-color: #605f5f;position: absolute;box-shadow: 1px 1px 20px 20px #4a4a4aa6;top: 154px;transition: 2s;border-radius: 27px;height: 169px;' '></div></div>"
}
document.getElementById("pack").innerHTML=str


function change(num){
    var img = document.getElementById("bg"+num);
    var heading = document.getElementById("heading"+num);
    console.log(num)
    img.style.display = "none";
    heading.style.display = "none";
}
function change1(num){
    var img = document.getElementById("bg"+num);
    var heading = document.getElementById("heading"+num);

    img.style.display = "block";
    heading.style.display = "block";
    heading.style.transition="1s";
    img.style.transition="1s";

}