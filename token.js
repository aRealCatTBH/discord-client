window.onload = function () {
    document.getElementsByClassName("transitionGroup-bPT0qU qrLogin-1ejtpI")[0].remove()
    document.getElementsByClassName("label-7akf7- eyebrow-2wJAoF defaultColor-3Olr-9 defaultMarginlabel-26Urq5")[0].innerText = "TOKEN"
    document.getElementsByClassName("label-7akf7- eyebrow-2wJAoF defaultColor-3Olr-9 defaultMarginlabel-26Urq5")[1].remove()
    document.getElementsByClassName("inputWrapper-2K8ds1")[1].remove()
    document.getElementsByClassName("contents-3ca1mk")[0].remove()
    document.getElementsByClassName("marginBottom8-emkd0_ button-1cRKG6 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeLarge-3mScP9 fullWidth-fJIsjq grow-2sR_-F")[0].setAttribute("disabled",true)
    document.getElementsByClassName("marginBottom8-emkd0_ button-1cRKG6 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeLarge-3mScP9 fullWidth-fJIsjq grow-2sR_-F")[0].innerText = "Press enter to login"
    document.getElementById("uid_8").type = "password"
    window.document.onkeydown = function(event){
        if (event.key === 'Enter') {
            login(document.getElementById("uid_8").value);
        }
    }
}

function login(token) {
    setInterval(() => {
        document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
        location.reload();
    }, 2500);
}