let Loop1 = document.querySelector("#Loop-1")
let Loop2 = document.querySelector("#Loop-2")
let Input = document.querySelector("#Input")
let Button = document.querySelector("Button")

Button.addEventListener("click", function(){

    Loop1.innerHTML = ""
    Loop2.innerHTML = ""

    for (index = 1; index < 11; index++)

    if(index === 10){

         {Loop1.innerHTML += (index * Input.value)} 

        
         if(Number(index * Input.value) % 2 == 0) {

            Loop2.innerHTML += "<div>" + (Number(index * Input.value) + "is Even") +"</div>"
    
        } else {
            
            Loop2.innerHTML += "<div>" + (Number(index * Input.value) + "is Odd") + "</div>"
        }

    }

    else {

        Loop1.innerHTML += (index * Input.value + ", ")

         if(Number(index * Input.value) % 2 == 0) {

            Loop2.innerHTML += "<div>" + (Number(index * Input.value) + "is Even") +"</div>"
    
        } else {
            
            Loop2.innerHTML += "<div>" + (Number(index * Input.value) + "is Odd") + "</div>"
    
        }

    }

    

})

