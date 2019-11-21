function stat() {
    let str = document.getElementById("str").value
    let obj = {}
    str = str.split("").sort()
    console.log(str)
    for (let i = 0; i < str.length; ++i) {
        // console.log(str);
        let linshi = str[i]
        // console.log(obj[linshi] = 1)
        obj[linshi] = (obj[linshi] + 1) || 1;
        // console.log(obj[linshi])
    }
    document.getElementById("result").innerText = JSON.stringify(obj)
}