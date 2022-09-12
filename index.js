
let tiecount=0;
var tie=document.getElementById('tie');
var count = 0;
let player1="X";
let player2 ="O";
let copy=0;
let idco=0;
let arr;
let getid;
// let x=document.getElementById('win');
let container2=document.getElementById('container2');
var size;
// console.log(arr);
let obj=[{
       count:0,
       arr:[],
       size:0,
       copy:0
}]

function onStart() {
    document.getElementById('btn').disabled = true;
   
    
   

    size = document.getElementById("input").value;
    let container=document.createElement('div');
    container.setAttribute('id',`_inner${copy}`);
    container2.appendChild(container);
    let x=document.createElement('p');
    // let delbtn=document.createElement('button');
    // container2.appendChild(delbtn);
    // delbtn.classList.add("dlbtn");
    //  delbtn.innerHTML="delete";


   container2.append(x);
   


    let i=document.getElementById(`_inner${copy}`);
    i.style.display="flex";
    i.style.justifyContent="center";
    i.style.marginTop="50px";
    
    
    // delbtn.onclick=function(){
    //   let i=document.getElementById(`_inner${copy}`);
    //   i.style.display="none";
      
    // }


  /***creation of arr */
     obj[copy].arr = [];
   for (let i = 0; i < size; i++) {
       obj[copy].arr[i] = [];
   }
  /******** */
  for (let i = 0; i < size; i++) {
    var a = document.createElement("div");
    // var b = document.getElementById("inner");
    container.appendChild(a);
    /*************/
    for (let j = 0; j < size; j++) {
      var c = document.createElement("div");
      c.classList.add("box2");
      a.appendChild(c);
      //********* */
      c.setAttribute("id", `div_${copy+'_'+j+''+'_'+i}`);
      
      c.onclick = function () {
        // console.log(this.id);
        getid = document.getElementById(this.id);
         
       
        //***** */
        
          
        if (getid.innerHTML == "" && x.innerHTML=="") {
          if (obj[copy].count % 2 == 0) {
            getid.innerHTML = player1;
            obj[copy].count++;
           stokePlayer(x,player1, j, i);
          
          } else {
            getid.innerHTML = player2;
            obj[copy].count++;
           stokePlayer(x,player2, j, i);
          }
          //
          if(x.innerHTML!=""){
            document.getElementById('cbtn').disabled=true;
          }
        }
      };
    }
  }
  
}


//adding player1 and  player2 in multidimensional array
function stokePlayer(x,player, j, i) {
  obj[copy].arr[j][i] = player;
  console.log(obj);
    // console.log(obj[copy].arr);
   
   
   
  let Digarr1=[];
  let Digarr2=[];
  let Digarr3=[];
  let Digarr4=[];
  let Digx=0;  
  let Digo=0;
  let Dig2x=0;
  let Dig2o=0;
 
  for (let m = 0; m < size; m++) {
    let Rowx=0;
    let Rowo=0;
    let Colx=0;
    let Colo=0;
        for (let n = 0; n < size; n++) {
                /*******Row */
                // console.log(arr[m][n]);
                 if(obj[copy].arr[m][n]==player1){
                      Rowx++;
                      if(Rowx==size){
                        x.innerHTML=`${player1} has won`;
                        
                     } 
                 }
                 else if(obj[copy].arr[m][n]==player2){
                     Rowo++;
                     if(Rowo==size){
                      x.innerHTML=`${player2} has won`;  
                      }  
                 }
                 /*******Column */

                if(obj[copy].arr[n][m]==player1){
                    Colx++;
                    if(Colx==size){
                      x.innerHTML=`${player1} has won`;
                    }
                    
                }else if(obj[copy].arr[n][m]==player2){
                    Colo++;
                    if(Colo==size){
                      x.innerHTML=`${player2} has won`;
                      
                    }
                }
                // Digonal 1

                 if(m==n && obj[copy].arr[m][n]==player1){
                      Digarr1[Digx++]=player1;
                     if(Digarr1.length==size){
                         x.innerHTML=`${player1} has won`;
                       }     
                 }
                 else if(m==n && obj[copy].arr[m][n]==player2){
                        Digarr2[Digo++]=player2;
                        if(Digarr2.length==size){
                            x.innerHTML=`${player2} has won`;
                        } 
                   }

                //  Digonal 2

                 if ((m + n) == (size - 1)  && obj[copy].arr[m][n]==player1) {
                      Digarr3[Dig2x++]=player1;
                        if(Digarr3.length==size){
                            x.innerHTML=`${player1} has won`;
                      }
                 }
                 else if((m + n) == (size - 1)  && obj[copy].arr[m][n]==player2){
                      Digarr4[Dig2o++]=player2;
                        if(Digarr4.length==size){
                          x.innerHTML=`${player2} has won`;
                        } 
                 }
                //  if((Rowo==size || Rowx==size)  ||  (Colx==size  || Colo==size)  || (Digarr1.length==size) ||      (Digarr2.length==size)  ||  (Digarr3.length==size)  || (Digarr4.length==size)){
                //        x.innerHTML="Game over";
                         
                //  }
                 //conditon for Tie the game
                //  if(Rowo!=size || Rowx!=size  ||  Colx!=size  || Colo!=size  || Digarr1.length!=size ||      Digarr2.length!=size ||  Digarr3.length!=size  || Digarr4.length!=size){
                //         if(m==size-1 && n==size-1){
                //             tiecount++;
                //             // console.log(tiecount);
                //             if(tiecount==size*size){
                //               // console.log("tie");
                //               x.innerHTML="Game Tie";
                //             }
                //         }    
                //  }   
                 
                //  if(x.innerHTML!="" || o.innerHTML!="" || tie.innerHTML!="" ){
                //      document.getElementById('copy').disabled=true;
                //  }

          }
     }
}


// copy the game



   function copyGame(){
    copy++;
   

 
       let copyobj={
        id:copy,
        count:0,
        arr:[],
        size:0
       }
       
       obj.push(copyobj);
       obj[copy].count=obj[0].count;
       obj[copy].size=obj[0].size;
       obj[copy].stopstart=obj[0].stopstart;

       
      //  for(let i=0;i<obj[0].arr.length;i++){
      //   obj[copy].arr[i]=[];
      //  }

       onStart();
        
      for(let i=0;i<obj[copy].arr.length;i++){
        for(let j=0;j<obj[copy].arr.length;j++){
          if(obj[copy-1].arr[j][i]!=undefined){
          const diff = document.getElementById(`div_${copy+'_'+j+''+'_'+i}`);
          
          obj[copy].arr[j][i]=obj[copy-1].arr[j][i] ;  
          diff.innerHTML = obj[copy].arr[j][i];
          
        }
      }
      }
      
}
   
      
       

    
    



  

 

