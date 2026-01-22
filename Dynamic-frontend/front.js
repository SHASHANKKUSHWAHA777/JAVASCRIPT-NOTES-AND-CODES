function addtodo(){
    const title = document.getElementById("x").value
    const description = document.getElementById("y").value
    const exe = document.getElementById("container").innerHTML
    document.getElementById("container").innerHTML = exe + `<div>
        <div>${title}</div>
        <div>${description}</div>
        <button>mark as done</button>
    </div>`
}
