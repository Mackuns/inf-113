function fibonacci() {
    n = document.formulario.entrada.value;
    num = parseInt(n) - 2;  
    let a = 0;
    let b = 1;
    var f = 0;
    var res = a + " " + b;
    while (num > 0) {
        f = a + b;	    
        res += " " + f; 
        a = b;		    
        b = f;
        num--; 	        
    }
    document.formulario.resultado.value = res;

}

function serieBinaria() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    var m = 1, b = 0, res = 0, digito = 1, j = 1, aux = m;
    for (let i = 2; i <= num; i++) {
        while (aux != 0) {
            digito = aux % 2;
            aux = parseInt(aux / 2);
            b += digito * j;
            j *= 10;
        }
        m++;
        aux = m;
        res += " " + b;
        b = 0;
        j = 1;
    }
    document.formulario.resultado.value = res;
}

function serieFactorial() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    let f = 1;
    var res = "";
    let suma = 0;
    for (i = 1; i <= num; i++) {
        f = f * i;
        res += "+" + f;
        suma += f;
    }
    res += " =" + suma;
    document.formulario.resultado.value = res.substring(1, res.length);
}

function rotarpares() {
    num = document.formulario.entrada.value;
    n = parseInt(num);
    let y = 0, po = 1, n1 = n, res="";
    var d, w;
    if (n > 99999) {
        while (n != 0) {
            d = n % 10;
            n = parseInt(n / 10);
            if (d % 2 == 0) {
                y = d * po + y;
                po = po * 10;
            }
        }
        po = parseInt(po / 10);
        d = y % 10;
        y = parseInt(y / 10);
        w = d * po + y;
        n = n1;
        po = 1;
        y = 0;
        while (n != 0) {
            d = n % 10;
            n = parseInt(n / 10);
            if (d % 2 == 0) {
                d = w % 10;
                w = parseInt(w / 10);
            }
            y = d * po + y;
            po = po * 10;
        }
        res += y;
    } else {
        alert("El digito n debe tener como minimo 6 digitos")
    }
    document.formulario.resultado.value = res;
    
}
function digrepe(){
    num = document.formulario.entrada.value;
    n = parseInt(num);
    
    
    let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0,res="";
    var x;
    while (n != 0) {
    x = n % 10;
    n = parseInt(n / 10);
    if (x == 0) {
        j=j+1;
    } else {
        if (x == 1) {
            a=+1;
        } else {
            if (x == 2) {
                b =b+1;
            } else {
                if (x == 3) {
                    c = c+1;
                } else {
                    if (x == 4) {
                        d = d+1;
                    } else {
                        if (x == 5) {
                            e = e+1;
                        } else {
                            if (x == 6) {
                                f = f+1;
                            } else {
                                if (x == 7) {
                                    g = g+1;
                                } else {
                                    if (x == 8) {
                                        h = h+1;
                                    } else {
                                        if (x == 9) {
                                            i = i+1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
    document.formulario.resultado.value = " *0=*  " + j + " *1=*  " + a + " *2=*  " + b + " *3=*  " + c + " *4=*" + d + " *5=*" + e + " *6=*" + f + " *7=*" + g + " *8=*" + h + " *9=*  " + i;
	

}


function Capicua() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    var d, n1 = n, y = 0, res = "";
    while (n != 0) {
        d = n % 10;
        n = parseInt(n / 10);
        y = y * 10 + d;
    }
    if (n1 == y) {
        res = "es capicua";
    } else {
        res = "no es capicua";
    }
    document.formulario.resultado.value = res;
}
function esprimo() {
    num = document.formulario.entrada.value;
    n = parseInt(num);
    let c = 0, i = 1, res = "";

    for (i = 1; i <= n; i++) {
        if ((n % i) == 0) {
            c++;

        }
    }

    if (c == 2) {
        document.formulario.resultado.value = n+" si es primo"
    } else {
        document.formulario.resultado.value = n+" no es primo"
    }
    
}



function genprimo() {
    num = document.formulario.entrada.value;
    n = parseInt(num);
    let p = 2;
    let d = 2;
    let c = 1;
    let res = "";
    while (c <= n) {
        if (p % d == 0) {
            if (p == d) {
                res += p + ", ";
                document.formulario.resultado.value = res;
                c++;
            }
            d = 2;
            p++;
        }
        else
            d++;
    }

}
		
function vectofibo() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    let a = 0;
    let b = 1;
    var f = 0;
    let fibo = [];
    fibo[0] = a;
    fibo[1] = b;
    var i = 2;
    var res = "";
    while (num > 0) {
        f = a + b;
        a = b;
        b = f;
        num--;
        fibo[i] = f;
        i++;
    }
    for (let i = 0; i < fibo.length-2; i++){
        res += "f["+i+"]= "+ fibo[i] + ", ";
    }
    "f[0]=0, f[3]=2;"
   

    document.formulario.resultado.value = res;
}
function serieexpo() {
    
    const a = document.formulario.entrada1.value;
    const b = document.formulario.entrada2.value;
    let s = 0, res = "", lim = expo(a, b);
    function facto(n) {
        let f = 1;
        for (let i = 1; i <= n; i++) { f *= i }
        return f
    }
    function expo(n, x) {
        return r = n ** x
    }
    for (let i = 0; i <= lim; i++) {
        s = s + (expo(b, i) / facto(i));
        res += " " + s + " + ";
    }
    document.formulario.salida.value = res;
}
function espalindrome() {
    n = document.formulario.entrada.value;
    cad1 = n;
    var c = n.length;
    let d = c, cad2 = "", res = "";
    for (let i = 1; i <= c; i++) {
        l = n.substring(d, d - 1);
        cad2 += l;
        d--;
    }
    if (cad1 == cad2) {
        res = "es palindrome";
    } else {
        res = "no es palindrome";
    }
    document.formulario.resultado.value = res;
}
function invercadena() {
    n = document.formulario.entrada.value;
    var c = n.length;
    let d = c;
    let res = "";
    for (let i = 0; i < c; i++) {
        l = n.substring(d, d - 1);
        res += l;
        d--;
    }
    
    document.formulario.resultado.value = res;
}
function suma() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a + b;
    document.formulario.salida.value = res;
}
function resta() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a - b;
    document.formulario.salida.value = res;
}
function multiplicacion() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a * b;
    document.formulario.salida.value = res;
}
function division() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a / b;
    document.formulario.salida.value = res;
}
function fact() {
    num1 = document.formulario.entrada1.value;
    
    let f = 1;
    for (i = 1; i <= num1; i++) {
        f = f * i;
    }
    document.formulario.salida.value = f;

}
function potencia() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a ** b;
    document.formulario.salida.value = res;
}
function converroman() {
    let n = document.formulario.entrada.value;
    const x = n;
    var conv = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    var romano = '';
    for (i in conv) {
        while (n >= conv[i]) {
            romano += i;
            n -= conv[i];
        }
    }
    document.formulario.resultado.value = "El número " + x + " en romano es: " + romano;
}


function fibimpar() {
    num = document.formulario.entrada.value;
    n = parseInt(num);
    let a = 8, b = 1, res="";
    var c,i;
    for (i = 1; i <= n; i++) {
        c = a + b;
        a = c;
        b = b + 2;
        res += " "+c;
        document.formulario.resultado.value = res;
    }

}

function lottres() {
    num = document.formulario.entrada.value;
    n = parseInt(num);
    let a = 1, c = 0, res = "";
    var i;
    for (i = 1; i <= n; i++) {
        c = a + c;
        a = a + 1;
        res += " " + c;
        document.formulario.resultado.value = res;
    }

}

function evaluarexpremat() {
    n = document.formulario.entrada.value;
    num = parseInt(n);

}
let generarMatriz = function (n) {
  
    let a = [];
    for (let i = 0; i < n; i++) {
        let item = [];
        for (let j = 0; j < n; j++) {
            item.push(0);
        }
        a.push(item);
    }

    var espiral = function (a) {
       
        let n = a[0].length - 1;

        let c = 1, li = 0, ls = n;
        var i, j, k;

        
        for (k = 1; k <= n * n; k++) {
            
            i = li;
            for (j = li; j <= ls; j++) {
                a[i][j] = c;
                c = c + 1;
            }
            
            j = ls;
            for (i = li + 1; i <= ls; i++) {
                a[i][j] = c;
                c = c + 1;
            }
            
            i = ls;
            for (j = ls - 1; j >= li; j--) {
                a[i][j] = c;
                c = c + 1;
            }
          
            j = li;
            for (i = ls - 1; i >= li + 1; i--) {
                a[i][j] = c;
                c = c + 1;
            }
            li = li + 1;
            ls = ls - 1;
        }
        return a;
    };
    return espiral(a);
}

function matrizCaracol() {
    num = document.formulario.entrada.value;
    n = parseInt(num);

    var espiral = generarMatriz(n);
    let res = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += espiral[i][j] + "\t";
        }
        res += "\n";
    }
    document.formulario.resultado2.value = res;
}

function f(n) {
    let f = 1;
    for (i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}

function combinatoria(p, q) {
    return Math.round(parseInt(f(p) / (f(q) * f(p - q))));
}

function pascal() {
    num = document.formulario.entrada.value;
    n = parseInt(num);
    let a = [];
    for (let i = 1; i <= n; i++) {
        a[i] = [n];
        for (let j = 1; j <= i; j++) {
            a[i][j] = combinatoria(i - 1, j - 1);
        }
    }

    let res = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            res += a[i][j];
            res += " ";
        }
        res += "\n";
    }
    document.formulario.resultado2.value = res;
}

