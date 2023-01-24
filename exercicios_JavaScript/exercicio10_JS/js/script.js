let arr = [25, 30, 45, 28, 0, 12, 78, 64, 2]
let somaPares = arr.filter(number => number % 2 === 0).reduce((acc, currentValue) => acc + currentValue, 0)


alert(`O valor da soma dos números pares é ${somaPares}`)