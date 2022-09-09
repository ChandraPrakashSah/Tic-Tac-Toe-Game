// let X = document.getElementById("Player1");
// let O = document.getElementById("Player2");
// let Go=document.getElementById('Go');
// let TieCount=0;
// let TopStart=0;
// var Count = 0;
// var Player1 = "X";
// var Player2 = "O";
// var  Size = document.getElementById("input").value;


// function copyGame() {
//     var  Size = document.getElementById("input").value;
     
   
//    if(TopStart==0){
    
//   /***creation of array */
//   let array = [];
//   for (let i = 0; i < Size; i++) {
//     array[i] = [];
//   }
//   /******** */
//   for (let i = 0; i < Size; i++) {
//     var A = document.createElement("div");
//     var B = document.getElementById("outer");
//     B.appendChild(A);
//     /*************/
//     for (let j = 0; j < Size; j++) {
//       var C = document.createElement("div");
//       C.classList.add("box2");
//       A.appendChild(C);
//       //********* */
//       C.setAttribute("id", "div_@" + i + "_" + j);
       
//       C.onclick = function () {
//         // console.log(this.id);
//         var getid = document.getElementById(this.id);
//         // console.log(getid);
//         //***** */
       
//         if (getid.innerHTML == ""  && Go.innerHTML=="") {
//           if (Count % 2 == 0) {
//             getid.innerHTML = Player1;
//             Count++;
//             StokePlayer(Size, array, Player1, j, i);
//           } else {
//             getid.innerHTML = Player2;
//             Count++;
//             StokePlayer(Size, array, Player2, j, i);
//           }
//           //
          
//         }
//       };
//     }
//   }
//   TopStart++;
// }
// }




// //adding Player1 and  Player2 in multidimensional array
// function StokePlayer(Size, array, Player, j, i) {
//   array[j][i] = Player;
//     // console.log(array);
//     //
//   let Digarray1=[];
//   let Digarray2=[];
//   let Digarray3=[];
//   let Digarray4=[];
//   let Digx=0;  
//   let Digo=0;
//   let Dig2x=0;
//   let Dig2o=0;
 
//   for (let m = 0; m < Size; m++) {
//     let Rowx=0;
//     let Rowo=0;
//     let Colx=0;
//     let Colo=0;
//         for (let n = 0; n < Size; n++) {
//                 /*******Row */
//                 // console.log(array[m][n]);
//                  if(array[m][n]==Player1){
//                       Rowx++;
//                       if(Rowx==Size){
//                         X.innerHTML=`${Player1} has won`;
//                      } 
//                  }
//                  else if(array[m][n]==Player2){
//                      Rowo++;
//                      if(Rowo==Size){
//                       O.innerHTML=`${Player2} has won`;  
//                       }  
//                  }
//                  /*******Column */

//                 if(array[n][m]==Player1){
//                     Colx++;
//                     if(Colx==Size){
//                       X.innerHTML=`${Player1} has won`;
//                     }
                    
//                 }else if(array[n][m]==Player2){
//                     Colo++;
//                     if(Colo==Size){
//                       O.innerHTML=`${Player2} has won`;
//                     }
//                 }
//                 // Digonal 1

//                  if(m==n && array[m][n]==Player1){
//                       Digarray1[Digx++]=Player1;
//                      if(Digarray1.length==Size){
//                          X.innerHTML=`${Player1} has won`;
//                        }     
//                  }
//                  else if(m==n && array[m][n]==Player2){
//                         Digarray2[Digo++]=Player2;
//                         if(Digarray2.length==Size){
//                             O.innerHTML=`${Player2} has won`;
//                         } 
//                    }

//                 //  Digonal 2

//                  if ((m + n) == (Size - 1)  && array[m][n]==Player1) {
//                       Digarray3[Dig2x++]=Player1;
//                         if(Digarray3.length==Size){
//                             X.innerHTML=`${Player1} has won`;
//                       }
//                  }
//                  else if((m + n) == (Size - 1)  && array[m][n]==Player2){
//                       Digarray4[Dig2o++]=Player2;
//                         if(Digarray4.length==Size){
//                           O.innerHTML=`${Player2} has won`;
//                         } 
//                  }
//                  if((Rowo==Size || Rowx==Size)  ||  (Colx==Size  || Colo==Size)  || (Digarray1.length==Size) ||      (Digarray2.length==Size)  ||  (Digarray3.length==Size)  || (Digarray4.length==Size)){
//                        Go.innerHTML="Game Over";
                         
//                  }
//                  //conditon for Tie the game
//                  else if(Rowo!=Size || Rowx!=Size  ||  Colx!=Size  || Colo!=Size  || Digarray1.length!=Size ||      Digarray2.length!=Size ||  Digarray3.length!=Size  || Digarray4.length!=Size){
//                         if(m==Size-1 && n==Size-1){
//                             TieCount++;
//                             // console.log(TieCount);
//                             if(TieCount==Size*Size){
//                               // console.log("tie");
//                               document.getElementById('Tie').innerHTML="Game Tie";
//                             }
//                         }    
//                  }     

//           }
//      }
// }


  
 
        
 
      
   
  
   
    
    
    
  

 

