var button = document.querySelector('button');
var box = document.getElementById('box');
var buttonArr = document.querySelectorAll('button');
var displaytext = document.querySelector('label');
var displayTime = document.getElementById('time')

var hasOperation= false;
var operationVal = "";
var x = "";
var y ="";

//calculator
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
                    x= +x + +y; //so they know its a number not a string
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
                hasOperation = false;
                console.log(x);
                displaytext.textContent = x;
                y="";
                
            }
            
        }
        
    });
    
    
    function updateTime(){
        var now = new Date();
        var hour = now.getHours() % 12;
        var time = hour + ':' + now.getMinutes();
    
        displayTime.innerText =time;
        setTimeout(updateTime,1000);
        
    }
    updateTime();
    
    
    
    
