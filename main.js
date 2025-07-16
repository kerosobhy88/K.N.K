var back = document.getElementById("back");

if(back) {
    back.addEventListener("click", function() {
        window.location.href = "index.html";
    }); 
}


//   ------===============----------------=======================
let btnaddnote = document.getElementById("btnaddnote");
let title1 = document.getElementById("title1");
let textarea1 = document.getElementById("textarea1");
let displaynote=document.getElementById("displaynote").innerHTML;
let temp;
ubdatefaleg=false;

let countenar = [];

btnaddnote.addEventListener("click", addnote);

function addnote() {
    let object1 = {
        titleob: title1.value,
        textareaob: textarea1.value,
    };
    if(title1.value==""&textarea1.value==""){
        return;
    }
    if(ubdatefaleg==false){
        countenar.push(object1);
    }else{
        document.getElementById("btnaddnote").innerHTML="add Note "
    document.getElementById("btnaddnote").style.backgroundColor=''
    countenar[temp]=object1
    ubdatefaleg=false
    }
    console.log(countenar);
    display()
    localStorage.setItem("countenar","countenar1")
    title1.value=""
    textarea1.value=""
}

if (localStorage.getItem("countenar")=="countenar1") {
      if(ubdatefaleg==false){
        countenar.push(object1);
    }else{
        document.getElementById("btnaddnote").innerHTML="add Note "
    document.getElementById("btnaddnote").style.backgroundColor=''
    countenar[temp]=object1
    ubdatefaleg=false
    }
}

function display(){
    var cartonaa=""
    for (let i = 0; i < countenar.length; i++){
        cartonaa+=`
        <div class="display1">
        <h6 class="text-center" style="color: rgb(255, 101, 45); font-weight: 800;">
          ${countenar[i].titleob}
      </h6>
      <li class="float-start"> ${countenar[i].textareaob}  </li>
      <div class="d-flex justify-content-end align-items-center ">
          <button  class="totate" onclick="ubdate1note(${i})"><i class="fa-solid fa-rotate"></i></button>
          <button class="delete" onclick="delet1note(${i})"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  
    `
    }
    document.getElementById("displaynote").innerHTML=cartonaa
};

function delet1note(i){
countenar.splice(i,1)
display()
}

function ubdate1note(i){
    document.getElementById("btnaddnote").innerHTML=`<i class="fa-solid fa-rotate"></i>`
    document.getElementById("btnaddnote").style.backgroundColor='green'
    title1.value=countenar[i].titleob
    textarea1.value=countenar[i].textareaob
    temp=i
    ubdatefaleg=true
}

// ===========================to do list==============================


let btntodolist = document.getElementById("btntodolist");
let datetodo=document.getElementById("datetodo")
let title2 = document.getElementById("title2");
let textarea2 = document.getElementById("textarea2");
let displatodolistht=document.getElementById("displatodolistht").innerHTML
let temp2;
ubdatefalegtodo=false;

let countenar2 = [];

btntodolist.addEventListener("click", addtodolist55);

function addtodolist55() {
    let object2 = {
        datetodo11:datetodo.value,
        title22: title2.value,
        textarea22: textarea2.value,
    };
    if(title2.value==""&textarea2.value==""){
        return;
    }
    if(ubdatefalegtodo==false){
        countenar2.push(object2);
    }else{
        document.getElementById("btntodolist").innerHTML=`<i class="fa-solid fa-plus" ></i>`
    document.getElementById("btntodolist").style.backgroundColor=''
    countenar2[temp2]=object2
    ubdatefalegtodo=false
    }
    console.log(countenar2);
    displaytodolist1()
    datetodo.value=""
    title2.value=""
    textarea2.value=""
}


function displaytodolist1(){
    var cartonaacartona=""
    for (let i = 0; i < countenar2.length; i++){
        cartonaacartona+=`
        <div class="displaytodolist d-flex justify-content-between " id="divtodolist">
        <div>
          <h6>${countenar2[i].datetodo11}</h6>
          <h2>${countenar2[i].textarea22}</h2>
         </div>
         <div>
         <h6>${countenar2[i].title22}</h6>
         <input type="checkbox" class="checkboxtodo" data-index="${i}" onclick="toggleButtons(${i})">
         </div> </div>
         <div class="justify-content-center my-buttons" id="myDiv${i}" style="display: none; width: 100%;">
         <button class="buton totate" onclick="ubdate1todo2(${i})"><i class="fa-solid fa-rotate"></i></button>
         <button class="buton delete" onclick="delet1todo2(${i})"><i class="fa-solid fa-trash"></i></button>
     </div>
     
    `
    }
    document.getElementById("displatodolistht").innerHTML=cartonaacartona
};
function delet1todo2(i){
countenar2.splice(i,1)
displaytodolist1()
}

function ubdate1todo2(i){
    document.getElementById("btntodolist").innerHTML=`<i class="fa-solid fa-rotate"></i>`
    document.getElementById("btntodolist").style.backgroundColor='green'
    title2.value = countenar2[i].title22;
    textarea2.value = countenar2[i].textarea22;
        temp2=i
    ubdatefalegtodo=true
}


let displaytodolist=document.getElementById("displaytodolist")
function toggleButtons(index) {
    let myDiv = document.getElementById(`myDiv${index}`);
    let checkbox = document.querySelector(`input[data-index='${index}']`);
    if (checkbox.checked) {
        myDiv.style.display = "flex"; // يظهر الزرين
    } else {
        myDiv.style.display = "none"; // يخفي الزرين
    }
}

// -----------------imges------------------------------


let btnAddImg = document.getElementById('btnaddimges');
let inputImg = document.getElementById('imges');
let output = document.getElementById('output');

btnAddImg.addEventListener('click', function(e) {
  e.preventDefault(); // منع الريفريش
  let file = inputImg.files[0];
  if(file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      // إنشاء container للصورة وزرار الدليت
      let container = document.createElement('div');
      container.style.position = 'relative';
      container.style.display = 'inline-block';

      // عنصر الصورة
      let imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.style.width = '200px';
      imgElement.style.height = '200px';
      imgElement.style.objectFit = 'cover';
      imgElement.style.borderRadius = '10px';
      imgElement.style.margin = '10px';

      // زرار الدليت
      let deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '❌';
      deleteBtn.style.position = 'absolute';
      deleteBtn.style.top = '5px';
      deleteBtn.style.right = '5px';
      deleteBtn.style.backgroundColor = 'red';
      deleteBtn.style.color = 'white';
      deleteBtn.style.border = 'none';
      deleteBtn.style.borderRadius = '50%';
      deleteBtn.style.width = '25px';
      deleteBtn.style.height = '25px';
      deleteBtn.style.cursor = 'pointer';

      // وظيفة زرار الدليت
      deleteBtn.addEventListener('click', function() {
        container.remove();
      });

      // أضف الصورة والزرار داخل الـ container
      container.appendChild(imgElement);
      container.appendChild(deleteBtn);

      // أضف الـ container للـ output
      output.appendChild(container);
    }
    reader.readAsDataURL(file);
  }
});

// -----------------drobdwen------------------------------
let dropdownnote=document.getElementById("dropdownnote");
let dropdowntodo=document.getElementById("dropdowntodo");
let dropdownimge=document.getElementById("dropdownimge");
let note=document.getElementById("note")
let todolist=document.getElementById("todolist")
let addimge=document.getElementById("addimge")

dropdownnote.addEventListener("click",function(){
    document.getElementById("note").classList.replace("note2","note")
    document.getElementById("todolist").classList.replace("todolist2","todolist")
    document.getElementById("addimge").classList.replace("addimges2","addimges")
    localStorage.setItem("drob1","drob1")
})
dropdowntodo.addEventListener("click",function(){
    document.getElementById("note").classList.replace("note","note2")
    document.getElementById("todolist").classList.replace("todolist","todolist2")
    document.getElementById("addimge").classList.replace("addimges2","addimges")
        localStorage.setItem("drob1","drob2")

})
dropdownimge.addEventListener("click",function(){
    document.getElementById("addimge").classList.replace("addimges","addimges2")
    document.getElementById("note").classList.replace("note","note2")
    document.getElementById("todolist").classList.replace("todolist2","todolist")
        localStorage.setItem("drob1","drob3")

})

if (localStorage.getItem("drob1")=="drob1") {
   document.getElementById("note").classList.replace("note2","note")
    document.getElementById("todolist").classList.replace("todolist2","todolist")
    document.getElementById("addimge").classList.replace("addimges2","addimges")
}else if(localStorage.getItem("drob1")=="drob2"){
     document.getElementById("note").classList.replace("note","note2")
    document.getElementById("todolist").classList.replace("todolist","todolist2")
    document.getElementById("addimge").classList.replace("addimges2","addimges")
}
else{
      document.getElementById("addimge").classList.replace("addimges","addimges2")
    document.getElementById("note").classList.replace("note","note2")
    document.getElementById("todolist").classList.replace("todolist2","todolist")
}