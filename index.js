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
    result: "",
    copy: 0,
  },
];

// console.log(obj)
//  local storage

let data = JSON.parse(localStorage.getItem("myobj"));
//clear local storage
var clear = document.getElementById("rs");
clear.style.display = "none";
clear.onclick = function () {
  localStorage.removeItem("myobj");
  localStorage.removeItem("copy");
  location.reload();
};
if (data != null) {
  data.forEach((element) => {
    obj.push(element);
    game(element);
    clear.style.display = "";
  });
}
if (data) {
  obj.splice(0, 1);
}

///   start the game
function onStart() {
  size = document.getElementById("input").value;
  for (let i = 0; i < size; i++) {
    obj[0].arr[i] = [];
  }
  game(obj[0]);
  localStorage.setItem("myobj", JSON.stringify(obj));
}
handleDelete = (ev, id, x) => {
  obj = obj.filter((m) => m.id !== id);

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
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", (ev) => {
    handleDelete(ev, curr.id, x);
  });
  delBtn.innerText = "Delete";
  container2.appendChild(delBtn);

  // p tag for winner
  let x = document.createElement("p");
  x.setAttribute("id", `in${curr.id}`);
  container2.append(x);
  //

  document.getElementById(`_inner${curr.id}`).style.cssText = `
    display :flex;
    justifyContent :center;
     marginTop :10px";
  `;

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
      if (curr.arr[j][i]) {
        c.innerHTML = curr.arr[j][i];
      }
      x.innerHTML = curr.result;
      if (curr.result != "") {
        cbtn.disabled = true;
      }
      a.appendChild(c);
      //********* */
      c.setAttribute("id", `div_${curr.id + "_" + j + "" + "_" + i}`);

      c.onclick = function () {
        getid = document.getElementById(this.id);
        if (getid.innerHTML == "" && x.innerHTML == "") {
          if (curr.count % 2 == 0) {
            getid.innerHTML = player1;
            curr.count++;
            stokePlayer(
              curr,
              x,
              curr.player1,
              j,
              i,
             curr.count
            );
          } else {
            getid.innerHTML = player2;
            curr.count++;
            stokePlayer(
              curr,
              x,
              curr.player2,
              j,
              i,
              curr.count
            );
          }
          // if (curr.result != "") {
          //   document.getElementById("cbtn").disabled = true;
          // }
        }
      };
    }
  }
}

//adding player1 and  player2 in multidimensional array
function stokePlayer(curr, x, player, j, i, count) {
 curr.arr[j][i] = player;

  // localStorage.setItem("myobj", JSON.stringify(obj));
  console.log(obj);
  // Digonal 1
  if (j == i && curr.arr[j][i] == player1) {
    curr.Digx++;
    if (curr.Digx == size) {
      curr.result = `${player1} has won`;
      x.innerHTML = curr.result;
    }
  }
  if (j == i && curr.arr[j][i] == player2) {
   curr.Digo++;
    if (curr.Digo == size) {
      curr.result = `${player2} has won`;
      x.innerHTML = curr.result;
    }
  }
  //  Digonal 2

  if (j + i == size - 1 && curr.arr[j][i] == player1) {
    curr.Dig2x++;
    if (curr.Dig2x == size) {
      curr.result = `${player1} has won`;
      x.innerHTML = curr.result;
    }
  }
  if (j + i == size - 1 && curr.arr[j][i] == player2) {
    curr.Dig2o++;
    if (curr.Dig2o == size) {
     curr.result = `${player2} has won`;
      x.innerHTML = curr.result;
    }
  }

  for (let m = 0; m < size; m++) {
    let Rowx = 0;
    let Rowo = 0;
    let Colx = 0;
    let Colo = 0;
    for (let n = 0; n < size; n++) {
      /*******Row */
      if (curr.arr[m][n] == player1) {
        Rowx++;
        if (Rowx == size) {
          curr.result = `${player1} has won`;
          x.innerHTML = curr.result;
        }
      }
      if (curr.arr[m][n] == player2) {
        Rowo++;
        if (Rowo == size) {
          curr.result = `${player2} has won`;
          x.innerHTML = curr.result;
        }
      }
      /*******Column */

      if (curr.arr[n][m] == player1) {
        Colx++;
        if (Colx == size) {
          obj[curr.id].result = `${player1} has won`;
          x.innerHTML = curr.result;
        }
      } else if (curr.arr[n][m] == player2) {
        Colo++;
        if (Colo == size) {
          curr.result = `${player2} has won`;
          x.innerHTML = curr.result;
        }
      }
      if (count === size * size && x.innerHTML == "") {
        curr.result = "Game Tie";
        x.innerHTML = curr.result;
      }
    }
  }

  localStorage.setItem("myobj", JSON.stringify(obj));
  if (curr.result != "") {
    document.getElementById("cbtn").disabled = true;
  }
}

///////////////////////copy the game//////////////////////////
function copyGame() {
  let copy = JSON.parse(localStorage.getItem("copy"));
  copy++;

  localStorage.setItem("copy", JSON.stringify(copy));
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
    result: "",
    copy: 0,
  };
  let n = obj.length;
  obj.push(copyobj);

  console.log(copy);
  //  previous state copy

  obj[n].count = obj[n - 1].count;
  obj[n].Digx = obj[n - 1].Digx;
  obj[n].Digo = obj[n - 1].Digo;
  obj[n].Dig2x = obj[n - 1].Dig2x;
  obj[n].Dig2o = obj[n - 1].Dig2o;

  for (let i = 0; i < size; i++) {
    obj[n].arr[i] = [];
  }

  game(obj[n]);

  for (let i = 0; i < obj[n - 1].arr.length; i++) {
    for (let j = 0; j < obj[n - 1].arr.length; j++) {
      if (obj[n - 1].arr[j][i] != undefined) {
        let idc = document.getElementById(`div_${n + "_" + j + "" + "_" + i}`);
        obj[n].arr[j][i] = obj[n - 1].arr[j][i];
        idc.innerHTML = obj[n - 1].arr[j][i];
      }
    }
  }

  localStorage.setItem("myobj", JSON.stringify(obj));
}
