var button = document.querySelector('button');
var box = document.getElementById('box');
var buttonArr = document.querySelectorAll('button');
var displaytext = document.querySelector('label');

var hasOperation= false;
var operationVal = "";
var x = "";
var y ="";

button.onclick = function ChangeMe(){
    console.log('clicked');
}
buttonArr.forEach(btn => {
    var val = btn.innerHTML;
    btn.onclick = function Change(){
        if(val === "AC")
        {
         window.location.reload();
        }else if(val === "+"||val === "-"||val === "x"||val === "÷")
        {
         
                hasOperation = true;
                operationVal = val;
            
        }
        else if(!hasOperation && val !== "=")
        {
            if(val === "+/-")//toggle
            {
                x = -1 * x;
            }else if(val === "%")
            {
                x/=100;
            }else if(val ===".")
            {
                if(x.includes(val))
                    x = x;
                else
                x += val.toString();
            }
            else
                x += val.toString();
            displaytext.textContent = x;
            console.log(x);

        }else if(hasOperation && val !== "=")
        {
            y += val.toString();
            console.log(y);
            displaytext.textContent = y;


        }else if(hasOperation && val =="=")
        {
            switch(operationVal)
            {
                case "+":
                    x+=y;
                    break;
                case "-":
                    x-=y;
                    break;
                case "x":
                    x*=y;
                    break;
                case "÷":
                    x/=y;
                    break;

            }
            y="";
            hasOperation = false;
            console.log(x);
            displaytext.textContent = x;

        }
    }
    
});







// ANOTHER WAY OF DOING THIS USING FOR LOOP
// for(let i =0;i<buttonArr.length;i++)
// {
//     buttonArr[i].onclick = function Calc(){
//     console.log(buttonArr[i].innerHTML);
// }
// }