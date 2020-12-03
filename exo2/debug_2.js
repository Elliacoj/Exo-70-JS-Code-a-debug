let main = document.getElementById("main");

main.id = "test";

main.style.display = "hidden";

document.getElementById('test').innerHTML = "Mon nouveau texte !";

let html = main.innerHTML;

alert(html);

if(html !== main.innerHTML) {
    console.log(html);
}
else {
    let test = document.getElementById('test').innerHTML = "Mdr";
    alert(test);
}

main.style.display = "block";


