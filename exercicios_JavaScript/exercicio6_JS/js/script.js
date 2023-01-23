console.log(!(2000 % 100 === 0) || 2000 % 400 === 0)

for(let i = 1004; i <= 2023; i += 4){
    if(!(i % 100 === 0) || i % 400 ===0 ){
        document.write(`${i} <br>`)
    } else {
        document.write(`${i} não é bissexto <br>`)
    }
}