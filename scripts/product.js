

append();
function append(){
   // console.log("yes");
    var getdata=JSON.parse(localStorage.getItem("data")) ||[];
    let container=document.getElementById("products_data");
    container.innerHTML=null;


   getdata.map(function(e,index){
    var box=document.createElement("div");
    var img=document.createElement("img")
    img.src=e.image;

    var name= document.createElement("p");
    name.innerText=e.name1;
    var unit=document.createElement("p");
    unit.innerText=e.unit1;
    var batch=document.createElement("p");
    batch.innerText=e.batch1;

    var student=document.createElement("p");
    student.innerText=e.studentid1;

    var remove=document.createElement("button");
    remove.innerText="remove";

    remove.addEventListener("click",function(){
        removeIteam(e,index);
    })
    box.append(img,name,unit,batch,student,remove);
    container.append(box);

    
  })

};

function removeIteam(e,index){
    // console.log(e,index);
    // getdata.splice(e,1);


    var getdata=JSON.parse(localStorage.getItem("data"))||[];
    getdata.splice(index,1);
    localStorage.setItem("data",JSON.stringify(getdata));
    window.location.reload();

    

    let newgetdata=getdata.filter(function(e,i){
        if(i===index){
            var trash=JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(e);

        

            localStorage.setItem("trash",JSON.stringify(trash));

        }else{
            return i!==index;
        }


    });
    console.log(newgetdata);
}