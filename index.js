let x = document.getElementById("player1");
let o = document.getElementById("player2");
var count = 0;
var player1 = "X";
var player2 = "O";
function onStart() {
  var size = document.getElementById("input").value;
  /***creation of array */
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
  }
  //  console.log(arr);
  /******** */
  for (let i = 0; i < size; i++) {
    var a = document.createElement("div");
    var b = document.getElementById("inner");
    b.appendChild(a);
    /*************/
    for (let j = 0; j < size; j++) {
      var c = document.createElement("div");
      c.classList.add("box1");
      a.appendChild(c);
      //********* */
      c.setAttribute("id", "div_" + i + "_" + j);
      c.onclick = function () {
        // console.log(this.id);
        var getid = document.getElementById(this.id);
        // console.log(getid);
        //***** */
        if (getid.innerHTML == "") {
          if (count % 2 == 0) {
            getid.innerHTML = player1;
            count++;
            stokePlayer(size, arr, player1, j, i);
          } else {
            getid.innerHTML = player2;
            count++;
            // console.log(player2);
            stokePlayer(size, arr, player2, j, i);
          }
        }
      };
    }
  }
}
//adding player1 and  player2 in multidimensional array
function stokePlayer(size, arr, player, j, i) {
  arr[j][i] = player;

    
  for (let m = 0; m < size; m++) {
        var rcount1=0;
        var rcount2=0;
        var ccount1=0;
        var ccount2=0;

        for (let n = 0; n < size; n++) {
                /*******row */
                 if(arr[m][n]==player1){
                      rcount1++;

                 }
                 else if(arr[m][n]==player2){
                     rcount2++;
                 }

                 if(rcount1==size){
                    console.log("X is winner");
                 }
                 if(rcount2==size){
                    console.log("o is winnwer");
                 }
                 ///*******column */

                if(arr[n][m]==player1){
                    ccount1++;
                }else if(arr[n][m]==player2){
                    ccount2++;
                }

                if(ccount1==size){
                    console.log("x is winner");
                }

                if(ccount2==size){
                    console.log("o is winner");
                }

               }
          }
     }
      
    
  

 

