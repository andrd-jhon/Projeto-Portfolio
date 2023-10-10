function calcular(){
    let inNum = document.getElementById('inNum')
    let inNum2 = document.getElementById('inNum2')

    let num = Number(inNum.value)
    let num2 = Number(inNum2.value)

    alert(`O resultado da soma é ${num + num2}`)
}