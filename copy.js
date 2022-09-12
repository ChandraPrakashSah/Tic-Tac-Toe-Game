// let X = document.getElementById("Player1");
// let O = document.getElementById("Player2");
// let Go=document.getElementById('Go');
// let TieCount=0;
// let stopcopy=0;
// var Count = 0;
// var Player1 = "X";
// var Player2 = "O";
// var co=0;
// var ac=0;
// let arr1; 
// let key=0;

// let obj=[];

//    function copyGame(){
      
//         arr1 = [];
//         for (let i = 0; i < size; i++) {
//             arr1[i] = [];
//           }
//           arr1=arr;
//         let copyobj={};
//         copyobj.board=arr1;
//         obj.push(copyobj);
//         console.log(obj);

      
      
//     //   console.log(obj);
//       for (let i = 0; i < size; i++) {
//         var a = document.createElement("div");
        
//            b=document.getElementById("outer");
          
//         b.appendChild(a);
//         /*************/

        
//         for (let j = 0; j < size; j++) {
//           var c = document.createElement("div");
//           c.classList.add("box2");
//           a.appendChild(c);
//           //********* */

//           c.setAttribute("id", `div_${co},` + i + "_" + j);
          
//           var id1=document.getElementById(`div_${co},` + i + "_" + j);
//           // console.log(id1);
//             // arr1[i][j]=arr[i][j];
            

//             //
              
            
//              if(id1.innerHTML!=undefined){
//                 id1.innerHTML=arr1[i][j];
//                 if(arr1[i][j]==undefined){
//                     id1.innerHTML="";
//                   }
//                }

             
//              c.onclick = function () {
//                 var Getid=document.getElementById(this.id);
//                 // console.log(Getid);
//                 if(Getid.innerHTML==""  && Go.innerHTML==""){
//                 if(Count%2==0){
//                      Getid.innerHTML=Player1;
//                      Count++;
//                    stokePlayer1(i,j,Player1);
//                 }
//                 else{
//                     Getid.innerHTML=Player2;
//                     Count++;
//                     stokePlayer1(i,j,Player2);
//                 }
//               }

//             }; 
           
                      
//         }
       
//     }
//      // ///
     
//          var  div1= document.createElement('div');
//          var out=document.getElementById('outer');
//          div1.classList.add('box3');
//          out.appendChild(div1);
    
//     /// 
//     co++;  
//     ac++;    
//       key++;
//   }




// function stokePlayer1(i,j,Player){
//         arr1[i][j]=Player; 
        
//   let digarr1=[];
//   let digarr2=[];
//   let digarr3=[];
//   let digarr4=[];
//   let digx=0;  
//   let digo=0;
//   let dig2x=0;
//   let dig2o=0;
 
//   for (let m = 0; m < size; m++) {
//     let rowx=0;
//     let rowo=0;
//     let colx=0;
//     let colo=0;
//         for (let n = 0; n < size; n++) {
//                 /*******Row */
//                 // console.log(arr[m][n]);
//                  if(arr1[m][n]==Player1){
//                       rowx++;
//                       if(rowx==size){
//                         X.innerHTML=`${Player1} has won`;
//                      } 
//                  }
//                  else if(arr1[m][n]==Player2){
//                      rowo++;
//                      if(rowo==size){
//                       O.innerHTML=`${Player2} has won`;  
//                       }  
//                  }
//                  /*******Column */

//                 if(arr1[n][m]==Player1){
//                     colx++;
//                     if(colx==size){
//                       X.innerHTML=`${Player1} has won`;
//                     }
                    
//                 }else if(arr1[n][m]==Player2){
//                     colo++;
//                     if(colo==size){
//                       O.innerHTML=`${Player2} has won`;
                      
//                     }
//                 }
//                 // Digonal 1

//                  if(m==n && arr1[m][n]==Player1){
//                       digarr1[digx++]=Player1;
//                      if(digarr1.length==size){
//                          X.innerHTML=`${Player1} has won`;
//                        }     
//                  }
//                  else if(m==n && arr1[m][n]==Player2){
//                         digarr2[digo++]=Player2;
//                         if(digarr2.length==size){
//                             O.innerHTML=`${Player2} has won`;
//                         } 
//                    }

//                 //  Digonal 2

//                  if ((m + n) == (size - 1)  && arr1[m][n]==Player1) {
//                       digarr3[dig2x++]=Player1;
//                         if(digarr3.length==size){
//                             X.innerHTML=`${Player1} has won`;
//                       }
//                  }
//                  else if((m + n) == (size - 1)  && arr1[m][n]==player2){
//                       digarr4[dig2o++]=Player2;
//                         if(digarr4.length==size){
//                           O.innerHTML=`${Player2} has won`;
//                         } 
//                  }
//                  if((rowo==size || rowx==size)  ||  (colx==size  || colo==size)  || (digarr1.length==size) ||      (digarr2.length==size)  ||  (digarr3.length==size)  || (digarr4.length==size)){
//                        Go.innerHTML="Game over";
                         
//                  }
//                  //conditon for Tie the game
//                  else if(rowo!=size || rowx!=size  ||  colx!=size  || colo!=size  || digarr1.length!=size ||      digarr2.length!=size ||  digarr3.length!=size  || digarr4.length!=size){
//                         if(m==size-1 && n==size-1){
//                             TieCount++;
//                             // console.log(tiecount);
//                             if(TieCount==size*size){
//                               // console.log("tie");
//                               document.getElementById('Tie').innerHTML="Game Tie";
//                             }
//                         }    
//                  }     
//           }
//      }
// }





      