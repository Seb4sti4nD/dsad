Claro, aquí tienes un ejemplo práctico con un ejercicio usando el algoritmo de bisección (interpolación de Bolzano) para encontrar una raíz de la siguiente función:

f(x)=x3−2x−5
Queremos encontrar una raíz de esta función en el intervalo [1,3].

Paso 1: Verificar que la función cambia de signo en el intervalo
Primero, evaluamos la función en los extremos del intervalo:

f(1)=13−2(1)−5=1−2−5=−6 f(3)=33−2(3)−5=27−6−5=16
Como f(1)=−6 y f(3)=16, vemos que los valores de la función en los extremos del intervalo tienen signos opuestos (−6 y 16). Esto confirma que, según el teorema de Bolzano, existe al menos una raíz en el intervalo [1,3].

Paso 2: Aplicar el algoritmo de bisección
Ahora aplicamos el algoritmo de bisección para encontrar la raíz de manera aproximada.

Iteración 1:
El intervalo inicial es [1,3].
Calculamos el punto medio m: m=21+3=2
Evaluamos la función en m=2: f(2)=23−2(2)−5=8−4−5=−1
Como f(1)=−6 y f(2)=−1 tienen el mismo signo, la raíz debe estar en el intervalo [2,3].
Actualizamos el intervalo a [2,3].
Iteración 2:
El nuevo intervalo es [2,3].
Calculamos el nuevo punto medio m: m=22+3=2.5
Evaluamos la función en m=2.5: f(2.5)=(2.5)3−2(2.5)−5=15.625−5−5=5.625
Como f(2)=−1 y f(2.5)=5.625 tienen signos opuestos, la raíz debe estar en el intervalo [2,2.5].
Actualizamos el intervalo a [2,2.5].
Iteración 3:
El nuevo intervalo es [2,2.5].
Calculamos el punto medio m: m=22+2.5=2.25
Evaluamos la función en m=2.25: f(2.25)=(2.25)3−2(2.25)−5=11.390625−4.5−5=1.890625
Como f(2)=−1 y f(2.25)=1.890625 tienen signos opuestos, la raíz debe estar en el intervalo [2,2.25].
Actualizamos el intervalo a [2,2.25].
Iteración 4:
El nuevo intervalo es [2,2.25].
Calculamos el punto medio m: m=22+2.25=2.125
Evaluamos la función en m=2.125: f(2.125)=(2.125)3−2(2.125)−5=9.54443359375−4.25−5=0.29443359375
Como f(2)=−1 y f(2.125)=0.29443359375 tienen signos opuestos, la raíz debe estar en el intervalo [2,2.125].
Actualizamos el intervalo a [2,2.125].
Paso 3: Continuar hasta alcanzar la tolerancia deseada
El proceso se repite, reduciendo gradualmente el intervalo. En cada iteración, la longitud del intervalo se reduce a la mitad, lo que mejora la aproximación de la raíz.

Resultado final:
En este ejemplo, después de varias iteraciones, obtendremos una aproximación de la raíz de la ecuación f(x)=x3−2x−5 con la precisión deseada. Si continuamos hasta que la longitud del intervalo sea menor que una tolerancia predefinida, como ∣b−a∣<0.001, la raíz aproximada sería:

x≈2.094
Resumen:
Usamos el método de bisección (interpolación de Bolzano) para encontrar una raíz de f(x)=x3−2x−5 en el intervalo [1,3].
A través de iteraciones sucesivas, actualizamos el intervalo y calculamos el punto medio hasta que alcanzamos una raíz aproximada con la precisión deseada.
Este es un ejemplo de cómo el algoritmo de bisección puede encontrar la raíz de una función continua en un intervalo dado.

