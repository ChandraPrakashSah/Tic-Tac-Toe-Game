
 function onStart(){
    var count=0;
    var player1="X";
    var player2="O";
    var size=document.getElementById("input").value;
    for(var i=0;i<size;i++){
        var a=document.createElement('div');
        var b=document.getElementById('inner');  
        b.appendChild(a);
        /*************/
        for(var j=0;j<size;j++){
          
            var c=document.createElement('div');
            c.classList.add('box1');
         
               a.appendChild(c); 
        
          
          /********** */
            c.setAttribute('id',"div_"+i+"_"+j);
            c.onclick = function(){
                console.log(this.id);
               var getid= document.getElementById(this.id);
               console.log(getid);
               if(count%2==0){
                    getid.innerHTML=player1;
                    count++;
               }
               else{
                    getid.innerHTML=player2;
                    count++;
               }
            //    var array=[[]];
            //    for(var k=0;size;k++){
            //       for(var l=0;l<size;l++){
            //              array.push(i,j);
            //       }
            //    }
            //    console.log(array);
              

            }  
        }                             
} 
 }  
            
    


