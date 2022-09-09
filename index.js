let stopstart=0;
let x = document.getElementById("player1");
let o = document.getElementById("player2");
let go=document.getElementById('go');
let tiecount=0;
var tie=document.getElementById('tie');
var count = 0;
var player1 = "X";
var player2 = "O";

let arr;
// let  size = document.getElementById("input").value;
var size;
// console.log(arr);
function onStart() {
    
   if(stopstart==0){
    
    size = document.getElementById("input").value;
 
  /***creation of arr */
  arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
  }
  /******** */
  for (let i = 0; i < size; i++) {
    var a = document.createElement("div");
    var b = document.getElementById("inner");
    b.appendChild(a);
    /*************/
    for (let j = 0; j < size; j++) {
      var c = document.createElement("div");
      c.classList.add("box2");
      a.appendChild(c);
      //********* */
      c.setAttribute("id", "div_" + i + "_" + j);
      
      c.onclick = function () {
        // console.log(this.id);
        var getid = document.getElementById(this.id);
         
       
        //***** */
       
        if (getid.innerHTML == ""  && go.innerHTML=="") {
          if (count % 2 == 0) {
            getid.innerHTML = player1;
            count++;
           stokePlayer(player1, j, i);
          
          } else {
            getid.innerHTML = player2;
            count++;
           stokePlayer(player2, j, i);
          }
          //
          
        }
      };
    }
  }
  stopstart++;
}
}

//adding player1 and  player2 in multidimensional array
function stokePlayer(player, j, i) {
  arr[i][j] = player;
    // console.log(arr);
    //
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
                 if(arr[m][n]==player1){
                      Rowx++;
                      if(Rowx==size){
                        x.innerHTML=`${player1} has won`;
                        tie.innerHTML="";
                     } 
                 }
                 else if(arr[m][n]==player2){
                     Rowo++;
                     if(Rowo==size){
                      o.innerHTML=`${player2} has won`;  
                      }  
                 }
                 /*******Column */

                if(arr[n][m]==player1){
                    Colx++;
                    if(Colx==size){
                      x.innerHTML=`${player1} has won`;
                    }
                    
                }else if(arr[n][m]==player2){
                    Colo++;
                    if(Colo==size){
                      o.innerHTML=`${player2} has won`;
                      
                    }
                }
                // Digonal 1

                 if(m==n && arr[m][n]==player1){
                      Digarr1[Digx++]=player1;
                     if(Digarr1.length==size){
                         x.innerHTML=`${player1} has won`;
                       }     
                 }
                 else if(m==n && arr[m][n]==player2){
                        Digarr2[Digo++]=player2;
                        if(Digarr2.length==size){
                            o.innerHTML=`${player2} has won`;
                        } 
                   }

                //  Digonal 2

                 if ((m + n) == (size - 1)  && arr[m][n]==player1) {
                      Digarr3[Dig2x++]=player1;
                        if(Digarr3.length==size){
                            x.innerHTML=`${player1} has won`;
                      }
                 }
                 else if((m + n) == (size - 1)  && arr[m][n]==player2){
                      Digarr4[Dig2o++]=player2;
                        if(Digarr4.length==size){
                          o.innerHTML=`${player2} has won`;
                        } 
                 }
                 if((Rowo==size || Rowx==size)  ||  (Colx==size  || Colo==size)  || (Digarr1.length==size) ||      (Digarr2.length==size)  ||  (Digarr3.length==size)  || (Digarr4.length==size)){
                       go.innerHTML="Game over";
                         
                 }
                 //conditon for Tie the game
                 else if(Rowo!=size || Rowx!=size  ||  Colx!=size  || Colo!=size  || Digarr1.length!=size ||      Digarr2.length!=size ||  Digarr3.length!=size  || Digarr4.length!=size){
                        if(m==size-1 && n==size-1){
                            tiecount++;
                            // console.log(tiecount);
                            if(tiecount==size*size){
                              // console.log("tie");
                              tie.innerHTML="Game Tie";
                            }
                        }    
                 }     

          }
     }
}


// copy the game

let X = document.getElementById("Player1");
let O = document.getElementById("Player2");
let Go=document.getElementById('Go');
let TieCount=0;
let stopcopy=0;
var Count = 0;
var Player1 = "X";
var Player2 = "O";
var co=0;
var ac=0;
var arr1;
var key=0;
var arr2=[];
for(let i=0;i<size;i++){
    arr2[i]=[];
}
let obj={};



// console.log(obj.arr1);

// console.log(arr1);`
   function copyGame(){

    if(stopcopy==0){
      arr1 = [];
      for (let i = 0; i < size; i++) {
          arr1[i] = [];
        }
        for(let k=0;k<arr.length;k++){
          for(let l=0;l<arr.length;l++){
               arr1[k][l]=arr[k][l];
          }
        }
      console.log(arr);



         
        //  arr1=[...arr];
         obj.array=arr1;
         
         console.log(obj);
        //  console.log(arr1);
      for (let i = 0; i < size; i++) {
        var a = document.createElement("div");
        
           b=document.getElementById("outer");
          
        b.appendChild(a);
        /*************/

        
        for (let j = 0; j < size; j++) {
          var c = document.createElement("div");
          c.classList.add("box2");
          a.appendChild(c);
          //********* */

          c.setAttribute("id", `div_${co},` + i + "_" + j);
          
          var id1=document.getElementById(`div_${co},` + i + "_" + j);
          // console.log(id1);
            // arr1[i][j]=arr[i][j];

            //
            
            
             if(id1.innerHTML!=undefined){
                id1.innerHTML=arr1[i][j];
                if(arr1[i][j]==undefined){
                    id1.innerHTML="";
                  }
               }
             
             c.onclick = function () {
                var Getid=document.getElementById(this.id);
                // console.log(Getid);
                if(Getid.innerHTML==""  && Go.innerHTML==""){
                if(Count%2==0){
                     Getid.innerHTML=Player1;
                     Count++;
                   stokePlayer1(i,j,Player1);
                }
                else{
                    Getid.innerHTML=Player2;
                    Count++;
                    stokePlayer1(i,j,Player2);
                }
              }

            }; 
           
                      
        }
       
    }
     // ///
     
         var  div1= document.createElement('div');
         var out=document.getElementById('outer');
         div1.classList.add('box3');
         out.appendChild(div1);
    
    ///   
      
  }
  co++;  
  ac++;  
  key++; 

}

function stokePlayer1(i,j,Player){
        arr1[i][j]=Player;
        // console.log(obj);
        //  console.log(arr1);
        
        
  let digarr1=[];
  let digarr2=[];
  let digarr3=[];
  let digarr4=[];
  let digx=0;  
  let digo=0;
  let dig2x=0;
  let dig2o=0;
 
  for (let m = 0; m < size; m++) {
    let rowx=0;
    let rowo=0;
    let colx=0;
    let colo=0;
        for (let n = 0; n < size; n++) {
                /*******Row */
                // console.log(arr[m][n]);
                 if(arr1[m][n]==Player1){
                      rowx++;
                      if(rowx==size){
                        X.innerHTML=`${Player1} has won`;
                     } 
                 }
                 else if(arr1[m][n]==Player2){
                     rowo++;
                     if(rowo==size){
                      O.innerHTML=`${Player2} has won`;  
                      }  
                 }
                 /*******Column */

                if(arr1[n][m]==Player1){
                    colx++;
                    if(colx==size){
                      X.innerHTML=`${Player1} has won`;
                    }
                    
                }else if(arr1[n][m]==Player2){
                    colo++;
                    if(colo==size){
                      O.innerHTML=`${Player2} has won`;
                      
                    }
                }
                // Digonal 1

                 if(m==n && arr1[m][n]==Player1){
                      digarr1[digx++]=Player1;
                     if(digarr1.length==size){
                         X.innerHTML=`${Player1} has won`;
                       }     
                 }
                 else if(m==n && arr1[m][n]==Player2){
                        digarr2[digo++]=Player2;
                        if(digarr2.length==size){
                            O.innerHTML=`${Player2} has won`;
                        } 
                   }

                //  Digonal 2

                 if ((m + n) == (size - 1)  && arr1[m][n]==Player1) {
                      digarr3[dig2x++]=Player1;
                        if(digarr3.length==size){
                            X.innerHTML=`${Player1} has won`;
                      }
                 }
                 else if((m + n) == (size - 1)  && arr1[m][n]==player2){
                      digarr4[dig2o++]=Player2;
                        if(digarr4.length==size){
                          O.innerHTML=`${Player2} has won`;
                        } 
                 }
                 if((rowo==size || rowx==size)  ||  (colx==size  || colo==size)  || (digarr1.length==size) ||      (digarr2.length==size)  ||  (digarr3.length==size)  || (digarr4.length==size)){
                       Go.innerHTML="Game over";
                         
                 }
                 //conditon for Tie the game
                 else if(rowo!=size || rowx!=size  ||  colx!=size  || colo!=size  || digarr1.length!=size ||      digarr2.length!=size ||  digarr3.length!=size  || digarr4.length!=size){
                        if(m==size-1 && n==size-1){
                            TieCount++;
                            // console.log(tiecount);
                            if(TieCount==size*size){
                              // console.log("tie");
                              document.getElementById('Tie').innerHTML="Game Tie";
                            }
                        }    
                 }     
          }
     }
}





      



    
  

    
    



  

 

