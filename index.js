console.log('hello world');


let counter=2;
function createTextBox()
{
    console.log('function calling when  button pressed');
    let getInput=document.getElementById("field1").value;
    document.getElementById("field1").value='';
    
    console.log(getInput);
    //put this value to the field2,field3,field4,field5
  
    
    
    let fieldnumber="field"+counter;
    document.getElementById(fieldnumber).value=getInput;
    ++counter;
}