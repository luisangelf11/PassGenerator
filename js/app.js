//My global vars and consts
const d = document,
      $form = d.getElementById("generator"),
      $password = d.getElementById("pass"),
      charactersLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "o" ,"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      charactersUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      numbers = [0,1,2,3,4,5,6,7,8,9],
      simbols = ["@", ".", "-", "$"],
      characters = [...simbols, ...numbers, ...charactersLowers, ...charactersUppers];
let  $length = d.getElementById("size"),
     positionArray =0,
     passText="";

//console.log(characters);

//Create random position with Math.Random()
function randomPosition(){
    return positionArray = Math.floor(Math.random() * (0-66) + 66);
}


//Event Submit of form
d.addEventListener("submit", (e)=>{
    if(e.target === $form){
        e.preventDefault();
        if($length.value != ""){
            //Value of length
            for(let i=1; i<=$length.value;i++){
                randomPosition();
                passText += characters[positionArray].toString();
            }
            //console.log($length.value);
            //console.log(passText);
            $password.value = passText;
        }else{
            //console.log("WIIII");
            alert("Change the length of password!");
        }
    }
});

//Event click for copy text
d.addEventListener("click", (e)=>{
    if(e.target.matches("#copy")){
       let content = d.getElementById("pass");
       content.select(); 
       d.execCommand("copy");
       alert("Copied password!");
    }
});