let player1 = "X";
let player2 = "O";
let copy = 0;
let getid;
let cbtn = document.getElementById("cbtn");
cbtn.disabled = true;
let container2 = document.getElementById("container2");
var size;

let obj = [
  {
    id: 0,
    count: 0,
    arr: [],
    Digx: 0,
    Digo: 0,
    Dig2x: 0,
    Dig2o: 0,
    player1: "X",
    player2: "O",
  },
];

//  local storage

let data = JSON.parse(localStorage.getItem("myobj"));
if (data) {
  data.forEach((element) => {
    obj.push(element);
    game(element);
    
    
  });

}


///   start the game
function onStart() {
  size = document.getElementById("input").value;
  for (let i = 0; i < size; i++) {
    obj[0].arr[i] = [];
  }
  game(obj[0]);
}
handleDelete = (ev, id, x) => {
  // obj = obj.filter((m) => m.id !== id);

  // obj.splice(id, 1);
  const a = document.getElementById(`_inner${id}`);
  a.remove();
  ev.target.remove();
  // console.log(obj);
  x.remove();

  localStorage.setItem("myobj", JSON.stringify(obj));
};

function game(curr) {
  // console.log(curr);
  cbtn.disabled = false;
  document.getElementById("btn").disabled = true;

  size = document.getElementById("input").value;
  let container = document.createElement("div");
  container.setAttribute("id", `_inner${curr.id}`);
  container2.appendChild(container);
  // let x = document.createElement("p");
  // x.setAttribute("id", `in${curr.id}`);
  // container2.append(x);
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", (ev) => {
    handleDelete(ev, curr.id, x);
  });
  delBtn.innerText = "Delete";
  container2.appendChild(delBtn);

  //
  let x = document.createElement("p");
  x.setAttribute("id", `in${curr.id}`);
  container2.append(x);
  //

  let i = document.getElementById(`_inner${curr.id}`);
  i.style.display = "flex";
  i.style.justifyContent = "center";
  i.style.marginTop = "10px";

  /***create multidiamensional arr */
  // for (let i = 0; i < size; i++) {
  //   curr.arr[i] = [];
  // }

  /******** */
  for (let i = 0; i < size; i++) {
    var a = document.createElement("div");
    container.appendChild(a);
    /*************/
    for (let j = 0; j < size; j++) {
      var c = document.createElement("div");
      c.classList.add("box2");

      // print array after refresh
      if (curr.arr[j][i]){ 
      c.innerHTML = curr.arr[j][i];
    
    }


      a.appendChild(c);
      //********* */
      c.setAttribute("id", `div_${curr.id + "_" + j + "" + "_" + i}`);

      c.onclick = function () {
        getid = document.getElementById(this.id);
        if (getid.innerHTML == "" && x.innerHTML == "") {
          if (obj[curr.id].count % 2 == 0) {
            getid.innerHTML = player1;
            obj[curr.id].count++;
            stokePlayer(curr, x, obj[curr.id].player1, j, i, obj[curr.id].count);
          } else {
            getid.innerHTML = player2;
            obj[curr.id].count++;
            stokePlayer(curr, x, obj[curr.id].player2, j, i, obj[curr.id].count);
          }
          if (x.innerHTML != "") {
            document.getElementById("cbtn").disabled = true;
          }
        }
      };
    }
  }
}

//adding player1 and  player2 in multidimensional array
function stokePlayer(curr, x, player, j, i, count) {
  obj[curr.id].arr[j][i] = player;

  // localStorage.setItem("myobj", JSON.stringify(obj));
  console.log(obj);
  // Digonal 1
  if (j == i && obj[curr.id].arr[j][i] == player1) {
    obj[curr.id].Digx++;
    if (obj[curr.id].Digx == size) {
      x.innerHTML = `${player1} has won`;
    }
  }
  if (j == i && obj[curr.id].arr[j][i] == player2) {
    obj[curr.id].Digo++;
    if (obj[curr.id].Digo == size) {
      x.innerHTML = `${player2} has won`;
    }
  }
  //  Digonal 2

  if (j + i == size - 1 && obj[curr.id].arr[j][i] == player1) {
    obj[curr.id].Dig2x++;
    if (obj[curr.id].Dig2x == size) {
      x.innerHTML = `${player1} has won`;
    }
  }
  if (j + i == size - 1 && obj[curr.id].arr[j][i] == player2) {
    obj[curr.id].Dig2o++;
    if (obj[curr.id].Dig2o == size) {
      x.innerHTML = `${player2} has won`;
    }
  }

  for (let m = 0; m < size; m++) {
    let Rowx = 0;
    let Rowo = 0;
    let Colx = 0;
    let Colo = 0;
    for (let n = 0; n < size; n++) {
      /*******Row */
      if (obj[curr.id].arr[m][n] == player1) {
        Rowx++;
        if (Rowx == size) {
          x.innerHTML = `${player1} has won`;
        }
      }
      if (obj[curr.id].arr[m][n] == player2) {
        Rowo++;
        if (Rowo == size) {
          x.innerHTML = `${player2} has won`;
        }
      }
      /*******Column */

      if (obj[curr.id].arr[n][m] == player1) {
        Colx++;
        if (Colx == size) {
          x.innerHTML = `${player1} has won`;
        }
      } else if (obj[curr.id].arr[n][m] == player2) {
        Colo++;
        if (Colo == size) {
          x.innerHTML = `${player2} has won`;
        }
      }
      if (count === size * size && x.innerHTML == "") {
        x.innerHTML = "Game Tie";
      }
    }
  }
  localStorage.setItem("myobj", JSON.stringify(obj));
}
// copy the game
function copyGame() {
  copy++;
  let copyobj = {
    id: copy,
    count: 0,
    arr: [],
    Digx: 0,
    Digo: 0,
    Dig2x: 0,
    Dig2o: 0,
    player1: "X",
    player2: "O",
  };

    obj.push(copyobj);

  //  previous state copy
  obj[copy].count = obj[copy - 1].count;
  obj[copy].Digx = obj[copy - 1].Digx;
  obj[copy].Digo = obj[copy - 1].Digo;
  obj[copy].Dig2x = obj[copy - 1].Dig2x;
  obj[copy].Dig2o = obj[copy - 1].Dig2o;

  // size = document.getElementById("input").value;
  for (let i = 0; i < size; i++) {
    obj[copy].arr[i] = [];
  }

  game(obj[copy]);

  // get dat from localstorage
  let data1 = JSON.parse(localStorage.getItem("myobj"));

  for (let i = 0; i < obj[copy - 1].arr.length; i++) {
    for (let j = 0; j < obj[copy - 1].arr.length; j++) {
      if (obj[copy - 1].arr[j][i] != undefined) {
        let idc = document.getElementById(
          `div_${copy + "_" + j + "" + "_" + i}`
        );
        obj[copy].arr[j][i] = obj[copy - 1].arr[j][i];
        idc.innerHTML = obj[copy - 1].arr[j][i];
      }
    }
  }
  localStorage.setItem("myobj", JSON.stringify(obj));


}

