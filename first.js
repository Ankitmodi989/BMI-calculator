const button=document.querySelector('button');
button.addEventListener('click',()=>{
    const num1=document.getElementById("Height");
    const number1=Number(num1.value);
    const num2=document.getElementById("Weight");
    const number2=Number(num2.value);
    const result = number2/(number1*number1);
    const re=document.getElementById('result');
    console.log(result);
    if(result<18)
    re.innerHTML="underweight";
   else if(result<18.5)
    re.innerHTML="thin for height"
   else if(result>=18.6 && result<=24.9)
    re.innerHTML="heighty weight";
   else if(result>=25 && result<=29.9)
    re.innerHTML="overweight";
   else if(result>=30 )
    re.innerHTML="obesity";
})