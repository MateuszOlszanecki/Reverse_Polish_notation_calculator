let stack = []
let overrideStack1 = false
let actionClicked = false
let alertVisible = false
let maxNumberLength = 16

function getNumber(x){
    if(alertVisible){
        document.getElementById("stack1").innerHTML = ""
        alertVisible = false
    }
    if(actionClicked){
        addToStack()
        document.getElementById("stack1").innerHTML = x
        actionClicked = false
        overrideStack1 = false
    }
    else{
        if(overrideStack1 || document.getElementById("stack1").innerHTML == "0"){
            document.getElementById("stack1").innerHTML = ""
        }
        if(document.getElementById("stack1").innerHTML.length < maxNumberLength){
            document.getElementById("stack1").innerHTML += x
            overrideStack1 = false
        }
    }
}

function addToStack(){
    if(document.getElementById("stack1").innerHTML != "" & !alertVisible){
        stack.push(document.getElementById("stack1").innerHTML)
        overrideStack1 = true
        actionClicked = false
        updateStack()
    }
}

function updateStack(){
    if(stack.length == 0){
        document.getElementById("stack2").innerHTML = ""
        document.getElementById("stack3").innerHTML = ""
    }
    else if(stack.length == 1){
        document.getElementById("stack2").innerHTML = stack[0]
        document.getElementById("stack3").innerHTML = ""
    }
    else{
        document.getElementById("stack2").innerHTML = stack[stack.length - 1]
        document.getElementById("stack3").innerHTML = stack[stack.length - 2]
    }
    
}

function clearC(){
    document.getElementById("stack1").innerHTML = document.getElementById("stack2").innerHTML
    stack.pop()
    overrideStack1 = true
    actionClicked = true
    alertVisible = false
    updateStack()
}

function clearCC(){
    stack = []
    document.getElementById("stack1").innerHTML = ""
    overrideStack1 = true
    actionClicked = true
    alertVisible = false
    updateStack()
}

function addXY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            var z = parseInt(x) + parseInt(y)
            if(z > Number.MAX_SAFE_INTEGER){
                addToStack()
                document.getElementById("stack1").innerHTML = "Wynik&nbsp;jest&nbsp;za&nbsp;duży"
                alertVisible = true
                updateStack()
            }
            else{
                stack.pop()
                document.getElementById("stack1").innerHTML = z
                overrideStack1 = true
                actionClicked = true
                updateStack()
            }
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function substractXY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            var z = parseInt(x) - parseInt(y)
            if(z > 0){
                stack.pop()
                document.getElementById("stack1").innerHTML = z
                overrideStack1 = true
                actionClicked = true
                updateStack()
            }
            else{
                addToStack()
                document.getElementById("stack1").innerHTML = "Ujemny&nbsp;wynik"
                alertVisible = true
            }
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function multiplyXY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            var z = parseInt(x) * parseInt(y)
            if(z > Number.MAX_SAFE_INTEGER){
                addToStack()
                document.getElementById("stack1").innerHTML = "Wynik&nbsp;jest&nbsp;za&nbsp;duży"
                alertVisible = true
                updateStack()
            }
            else{
                stack.pop()
                document.getElementById("stack1").innerHTML = z
                overrideStack1 = true
                actionClicked = true
                updateStack()
            }
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function divideXY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            var z = parseInt(x) / parseInt(y)
            if(y == "0"){
                addToStack()
                document.getElementById("stack1").innerHTML = "Nie&nbsp;można&nbsp;dzielić&nbsp;przez&nbsp;0"
                alertVisible = true
            }
            else if(z%1 == "0"){
                stack.pop()
                document.getElementById("stack1").innerHTML = z
                overrideStack1 = true
                actionClicked = true
                updateStack()
            }
            else{
                addToStack()
                document.getElementById("stack1").innerHTML = "Wynik&nbsp;nie&nbsp;jest&nbsp;liczbą&nbsp;naturalną"
                alertVisible = true
            }
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function switchXY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            var tmp = stack[stack.length - 1]
            stack[stack.length - 1] = document.getElementById("stack1").innerHTML
            document.getElementById("stack1").innerHTML = tmp
            overrideStack1 = true
            actionClicked = true
            updateStack()
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function xPowerY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            var z = Math.pow(parseInt(x), parseInt(y))
            if(z > Number.MAX_SAFE_INTEGER){
                addToStack()
                document.getElementById("stack1").innerHTML = "Wynik&nbsp;jest&nbsp;za&nbsp;duży"
                alertVisible = true
                updateStack()
            }
            else{
                stack.pop()
                document.getElementById("stack1").innerHTML = z
                overrideStack1 = true
                actionClicked = true
                updateStack()
            }
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function eratosthenes(n) {
    var array = []
	var output = [];

    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    return output;
}

function twoPrimesSum(){
    if(!alertVisible){
        var x = document.getElementById("stack1").innerHTML
        if(x != ""){
            if(x > 4 & x%2 == 0){
                var primes = eratosthenes(parseInt(x))
                for(let i = 0; i < primes.length; i++){
                    for(let j = primes.length; j >= 0; j--){
                        if(primes[i] + primes[j] == x){
                            var z = "\\(" + x + " = " + primes[i] + " + " + primes[j] + "\\)"
                            document.getElementById("stack1").innerHTML = z
                            MathJax.typeset()
                            alertVisible = true
                            return 0
                        }
                    }
                }
            }
            else{
                addToStack()
                document.getElementById("stack1").innerHTML = "Tylko&nbsp;liczby&nbsp;parzyste&nbsp;>&nbsp;4"
                alertVisible = true
            }
        }
        else{
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;jednoargumentowa"
            alertVisible = true
        }
    }
}

function calcGCD(x, y){
    var tmpX = x
    var tmpY = y
    while(tmpY){
        var t = tmpY
        tmpY = tmpX % tmpY
        tmpX = t
    }
    return tmpX
}

function gcdXY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            if(x != 0 & y != 0){
                stack.pop()
                document.getElementById("stack1").innerHTML = calcGCD(x, y)
                overrideStack1 = true
                actionClicked = true
                updateStack()
            }
            else{
                addToStack()
                document.getElementById("stack1").innerHTML = "Nie&nbsp;można&nbsp;użyć&nbsp;0"
                alertVisible = true
            }
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function lcmXY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            if(x != 0 & y != 0){
                var z = Math.abs((x * y) / calcGCD(x, y))
                if(z > Number.MAX_SAFE_INTEGER){
                    addToStack()
                    document.getElementById("stack1").innerHTML = "Wynik&nbsp;jest&nbsp;za&nbsp;duży"
                    alertVisible = true
                    updateStack()
                }
                else{
                    stack.pop()
                    document.getElementById("stack1").innerHTML = z
                    overrideStack1 = true
                    actionClicked = true
                    updateStack()
                }
            }
            else{
                addToStack()
                document.getElementById("stack1").innerHTML = "Nie&nbsp;można&nbsp;użyć&nbsp;0"
                alertVisible = true
            }
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function xModY(){
    if(!alertVisible){
        var x = document.getElementById("stack2").innerHTML
        var y = document.getElementById("stack1").innerHTML
        if(x != "" & y != ""){
            if(y != 0){
                stack.pop()
                document.getElementById("stack1").innerHTML = x % y
            }
            else{
                addToStack()
                document.getElementById("stack1").innerHTML = "Nie&nbsp;można&nbsp;użyć&nbsp;0"
                alertVisible = true
            }
            overrideStack1 = true
            actionClicked = true
            updateStack()
        }
        else{
            addToStack()
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;dwuargumentowa"
            alertVisible = true
        }
    }
}

function primeFactorization(){
    if(!alertVisible){
        var x = document.getElementById("stack1").innerHTML
        if(x != ""){
            if(x != 0 & x != 1){
                var tmpX = parseInt(x)
                var factorization = []
                for(let i = 2; i <= tmpX; i++){
                    while(tmpX % i == 0){
                        factorization.push(i)
                        tmpX = tmpX / i
                    }
                }
                document.getElementById("stack1").innerHTML = "\\(" + x + " = " + factorizationShow(factorization) + "\\)"
                MathJax.typeset()
                alertVisible = true
            }
        }
        else{
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;jednoargumentowa"
            alertVisible = true
        }
    }
}

function factorizationShow(tab){
    var uniqueList = [...new Set(tab)]
    var uniqueCount = []
    var result = ""
    for(let i = 0; i < uniqueList.length; i++){
        uniqueCount.push(countX(uniqueList[i], tab))
    }
    for(let i = 0; i < uniqueList.length; i++){
        if(i != uniqueList.length - 1){
            result += uniqueList[i] + "^" + uniqueCount[i] + " \\cdot "
        }
        else{
            result += uniqueList[i] + "^" + uniqueCount[i]
        }
    }
    return result
}

function countX(x, tab){
    var counter = 0
    for(let i = 0; i < tab.length; i++){
        if(tab[i] == x){
            counter++
        }
    }
    return counter
}

function isPrime(x){
    if(x == 2){
        return true
    }
    else if(x == 1 || x == 0){
        return false
    }
    for(let i = 2; i <= Math.sqrt(x) + 1; i++){
        if(x % i == 0){
            return false
        }
    }
    return true
}

function checkPrime(){
    if(!alertVisible){
        var x = document.getElementById("stack1").innerHTML
        if(x != ""){
            if(isPrime(x)){
                document.getElementById("stack1").innerHTML = "\\(" + x + "\\in \\mathbb{P} \\)"
                MathJax.typeset()
            }
            else{
                document.getElementById("stack1").innerHTML = "\\(" + x + "\\not \\in \\mathbb{P} \\)"
                MathJax.typeset()
            }
            alertVisible = true
        }
        else{
            document.getElementById("stack1").innerHTML = "Operacja&nbsp;jednoargumentowa"
            alertVisible = true
        }
    }
}