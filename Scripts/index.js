// Esta función actualiza el elemento HTML con la ecuación ingresada por el usuario
function actualizarEcuacion() {
    var a0 = document.getElementById("a0").value;
    var a1 = document.getElementById("a1").value;
    var expoa1 = document.getElementById("expoa1").value;
    var g = document.getElementById("g").value;
    var expog = document.getElementById("expog").value;

    var ecuacion = document.getElementById("ecuacion");

    // Se construye la ecuación y se establece como el contenido del elemento HTML
    ecuacion.innerHTML = a0 + "y' + " + a1 + "x<sup>" + expoa1 + "</sup>y = " + g + "x<sup>" + expog + "</sup>";
}

// Esta función calcula la solución de la ecuación diferencial ingresada por el usuario
function calcular() {
    var a0 = document.getElementById("a0").value;
    var a1 = document.getElementById("a1").value;
    var expoa1 = document.getElementById("expoa1").value;
    var g = document.getElementById("g").value;
    var expog = document.getElementById("expog").value;

    var resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Se limpia el contenido del elemento HTML

    // Se verifica si se han ingresado todos los campos necesarios
    if (a0 && a1 && expoa1 && g && expog) {
        // Se muestra la ecuación ingresada por el usuario
        resultado.innerHTML += "Ecuación digitada: <br>";
        resultado.innerHTML += a0 + "y' + " + a1 + "x<sup>" + expoa1 + "</sup>y = " + g + "x<sup>" + expog + "</sup><br><br>";

        // Aquí comienza el nuevo código para normalizar y resolver la ecuación
        if (a0 !== "1") { // Se verifica si a0 es distinto de 1
            // Se realiza la normalización de la ecuación
            var nuevoa0 = "1";
            var nuevoa1 = a1 + "/" + a0;
            var nuevoa1numerador = parseInt(a1);
            var nuevoa1denominador = parseInt(a0);
            var nuevog = g + "/" + a0;

            if (a1 === a0) {
                nuevoa1 = "1";
            }
            if (g === a0) {
                nuevog = "1";
            }

            // Se muestra la ecuación normalizada
            resultado.innerHTML += "Ecuación Actualizada normalizada: <br>";
            resultado.innerHTML += "y' +" + nuevoa1 + "x<sup>" + expoa1 + "</sup>y = " + nuevog + "x<sup>" + expog + "</sup><br><br>";
            resultado.innerHTML += "Encontrando miu: <br><br>";

            var miu1 = "e<sup>(<sup>" + nuevoa1numerador + "x<sup>" + (parseInt(expoa1) + 1) + "</sup>/" + (nuevoa1denominador * (parseInt(expoa1) + 1)) + ")</sup></sup>";

            if ((nuevoa1denominador * (parseInt(expoa1) + 1)) % nuevoa1numerador === 0) {
                miu1 = "e^((x^" + (parseInt(expoa1) + 1) + ")/" + ((nuevoa1denominador * (parseInt(expoa1) + 1)) / nuevoa1numerador) + ")";
            }

            // Se muestra el valor de miu
            resultado.innerHTML += "Miu: " + miu1 + "<br><br>";
            resultado.innerHTML += "Multiplicar miu por toda la ecuación diferencial y usar la igualdad <br>";
            resultado.innerHTML += "miu(y'+py)=(miu*y)' <br>";
            resultado.innerHTML += "Entonces, completamos la igualdad: <br>";
            resultado.innerHTML += "(" + miu1 + "y)' = " + miu1 + "" + nuevog + "x<sup>" + expog + "</sup><br><br>";
            resultado.innerHTML += "Integramos: <br>";
            resultado.innerHTML += "Integral: ∫ <br>";
            resultado.innerHTML += "∫ (" + miu1 + "y)' dx = ∫ " + miu1 + " " + nuevog + "x<sup>" + expog + " </sup>dx <br>";
            resultado.innerHTML += "Se cancela la integral con la derivada <br>";
            resultado.innerHTML += miu1 + "y = ∫ " + miu1 + " " + nuevog + "x<sup>" + expog + " </sup>dx <br><br>";

            // Se añade la función auxiliar para calcular la integral
            var solucionIntegral = calcularIntegral(miu1, nuevog, expog);

            // Se muestra la solución de la integral
            resultado.innerHTML += "Solución de la integral: <br>";
            resultado.innerHTML += miu1 + "y = " + solucionIntegral + " + C<br><br>";

            // Se despeja y para obtener la solución general de la ecuación diferencial
            var solucionGeneral = "(" + solucionIntegral + " + C) / " + miu1;
            resultado.innerHTML += "Solución general de la ecuación diferencial: <br>";
            resultado.innerHTML += "y = " + solucionGeneral;
        }
    } else {
        resultado.innerHTML = "Por favor, complete todos los campos."; // Se muestra un mensaje si no se han completado todos los campos
    }
}

// Función auxiliar para calcular la integral
function calcularIntegral(miu, g, expo) {
    // Aquí se implementaría el método de integración
    // Por ejemplo, se podría usar la regla de la potencia para integrar polinomios
    // Esta es una implementación simplificada y debería ser ajustada según la ecuación específica
    var nuevoExpo = parseInt(expo) + 1;
    var coeficiente = g + "/" + nuevoExpo;
    return coeficiente + "x^" + nuevoExpo;
}
