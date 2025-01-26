let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let body = document.querySelector("body")
let login = prompt("Login kiriting") // MaRS
let parol = prompt("Parol kiriting") // IT SCHOOL


if(login.toLowerCase() === "mars" && parol.toLowerCase() === "it school"){
    h1.textContent = "Siz muofiqiyatli royhatga olindingiz"
    h2.textContent = ""
    body.style = "background-color: green; display: flex; aligh-items: center; height: 100vh; width: 100vw; justify-content: center;"
    h1.style = "color: white; font-size: 150px; text-align: center;"
    
}else {
    h1.textContent = "Login yoki parol notogri terilgan"
    h2.textContent = ""
    body.style = "background-color: red; display: flex; aligh-items: center; height: 100vh; width: 100vw; justify-content: center;"
    h1.style = "display:flex; color: black; font-size: 150px; text-align: center;;"
}
    