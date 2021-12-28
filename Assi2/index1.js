function showData(){
    let data = JSON.parse(localStorage.getItem("comic"))
    let arr = data.data.results
    let count = 1
    let mainShow = document.getElementById("datas");
    for(const element of arr){
       let div =  document.createElement("div")
       let p = document.createElement("p")
       let btn = document.createElement("button")
       btn.innerText="Show More"
       let s = document.createElement("div")
       p.innerText = element.title;
       s.append(p,btn)
       let div1 = document.createElement("div")
       let char = document.createElement("h1")
       char.innerHTML="characters"
       for(const ele of element.characters.items){
           let p1 = document.createElement("p")
           p1.innerText= ele.name
           div1.append(p1)
       }
       div.append(s,char,div1);
       btn.addEventListener("click",(()=>{count%2!==0?div.style.height="200px":div.style.height="100px";count+=1;div.style.overflow="scroll"}))
       mainShow.append(div)
    }

}

showData()