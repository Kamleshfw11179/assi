const link = ""
async function getStar(name){
    let res = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=9a96393437d5480d497ca85d5fff33e9&hash=066200bdc2e34ba04d6ad1974e8195b7`)
    let res1 = await res.json();
    if(res.status==200){append(res1.data.results)}
} 
var timerId;
function append(data){
    var arr = data;
    let space = document.getElementById("data");
    space.innerHTML=null;
    for(const element of arr){
        // let {description,properties:{birth_year,eye_color,gender,height,name,skin_color,homeworld}}=element;
        // var b_y = document.createElement("p")
        // b_y.innerText=birth_year;
        // b_y.setAttribute("class","by")
        // let g = document.createElement("p");
        // g.innerText=gender;
        // let n = document.createElement("p");
        // n.innerText=name
        // let div = document.createElement("div");
        // let div1 = document.createElement("div");
        // div1.setAttribute("id","div1")
        // div1.append(n,g);
        // div.append(div1,b_y)
        // space.append(div);
        let {name,id} = element;
        var b_y = document.createElement("p")
        var button = document.createElement("button")
        button.innerHTML="Comics"
        button.addEventListener("click",()=>{setData(id)})
        button.style.backgroundColor="red"
        button.style.color="white"
        button.style.width="80px"
        button.style.marginLeft="50px"
        button.style.height="30px"
        button.style.marginTop="13px"
        b_y.innerHTML=name;
        let div = document.createElement("div");
        div.append(b_y,button)
        space.append(div);
    };
}
function alertx(){
    console.log("alert")
}
async function main(){
    let name = document.getElementById("name").value;
    let data = await getStar(name);
    if(data!==undefined){
        append(data)
    }
}
function debounce(func,delay){
    let name = document.getElementById("name").value;
    if(name.length<3){
        return false;
    }
    if(timerId){
        clearInterval(timerId)
    }
    timerId=setTimeout(()=>{
        func()
    },delay)
}
// setInterval(()=>{
//     var div = document.createElement("div");
//     div.setAttribute("class","ball");
//     document.body.append(div);
// },100);
function changeC(){
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor="black"
        document.getElementById("data").style.color="white"
    } else{
        document.body.style.backgroundColor="white"
        document.getElementById("data").style.color="black"
    }

}



async function getComic(name){
    let res = await fetch(`https://gateway.marvel.com/v1/public/characters/${name}/comics?ts=1&apikey=9a96393437d5480d497ca85d5fff33e9&hash=066200bdc2e34ba04d6ad1974e8195b7`)
    let res1 = await res.json();
    // if(res.status==200){append(res1.data.results)}
    localStorage.setItem("comic",JSON.stringify(res1))
    cData = res1
    if(cData){
        window.location.href="./comic.html"
    }
}
function setData(id){
getComic(id)
}

