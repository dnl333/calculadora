
function somar(){

    let a = document.getElementById("n1")
    let b = document.getElementById("n2")
    let res = document.getElementById("res")
    let r1 = Number(a.value)
    let r2 = Number(b.value)
    let s = r1 + r2
    res.innerHTML = `RESULTADO: ${s}`}
    
    function sub(){
    
    let c = document.getElementById("s1")
    let d = document.getElementById("s2")
    let res2 = document.getElementById("res2")
    let s1 = Number(c.value)
    let s2 = Number(d.value)
    let t = s1 - s2
    res2.innerHTML = `RESULTADO: ${t}`}
    
    function divi(){
        
    let e = document.getElementById("d1")
    let f = document.getElementById("d2")
    let res3 = document.getElementById("res3")
    let t1 = Number(e.value)
    let t2 = Number(f.value)
    let u = t1 / t2
    res3.innerHTML = `RESULTADO: ${u}`}
    
    
    function mult(){
        
    let g = document.getElementById("m1")
    let h = document.getElementById("m2")
    let res4 = document.getElementById("res4")
    let u1 = Number(g.value)
    let u2 = Number(h.value)
    let v = u1 * u2
    res4.innerHTML = `RESULTADO: ${v}`}