const InputField = document.getElementById("inputfield1");

const InputField2 = document.getElementById("inputfield2");

const Addition = document.getElementById("addition");

Addition.addEventListener("click" , function() {
    const InputValue = parseFloat(InputField.value);
    const InputValue2 = parseFloat(InputField2.value);
    if (isNaN(InputValue) || isNaN(InputValue2)) {
        alert("Not a Number")
    } else {
    const sum = InputValue + InputValue2;
    alert(sum);
    }
});
