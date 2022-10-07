const btn = document.getElementById("calculator");

btn.addEventListener('click', function(){

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if (height == '' || weight == '') {
        alert("Please fill the inputs");
        return;
    }
    if (height < 0 || weight < 0) {
        alert("Please input a positive number");
        return;        
    }

    // BMI = Weight(KG) * (Height(m) * Height(m))

    height = height / 100;

    let BMI = weight / (height * height);

    BMI = BMI.toFixed(2);

    document.querySelector("#result").innerHTML = BMI;

    let status = " ";

    if (BMI < 18.5) {
        status = "Overweight";
    }
    if (BMI >= 18.5 && BMI < 25) {
        status = "Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
        status = "Overweight";
    }
    if (BMI >= 30){
        status = "Obese";
    }

    document.querySelector(".comment").innerHTML = `<p class="comment">Comment : You are <span id="comment">${status}</span></p>`;
})