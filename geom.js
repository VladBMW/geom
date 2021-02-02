

let B = Number(document.getElementById('input1').value)
let C = Number(document.getElementById('input2').value)
let x1
let x2
let D
let vm = new Vue({
    el: "#plot" ,
    data: {
        D:0,
        x1: 0,
        x2: 0,
        B:5,
        C:2,

    
    },
    computed:{
        schet:function(){
            D = Math.pow(this.B,2) - 4 * this.C
            return D
            
        },
        schet2:function(){
            
            if(D>0){
               x1 = (-this.B-Math.sqrt(D))/2
              x2 = (-this.B+Math.sqrt(D))/2
            }else if(D<0){
                alert("решений нет")
            }else if(D === 0){
                x1 = -(this.B/2)
                alert("решение одно")
            }
            return x1,x2
        }
        
        
    }
    
    })
    console.log(D)
        console.log(x1)
        console.log(x2)

    functionPlot({
        target:"#plot",
        data:[{
            fn:"x^2 + (b) * x + (c)",
            scope:{
                b:B,
                c:C,
    
            },
        },
    ],
    grid:true,
    })