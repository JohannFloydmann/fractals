# 2 - Множество Мандельброта (комплесные числа)
![alt text](https://github.com/JohannFloydmann/fractals/blob/acebabb73c8b0fe7af5741c19d77a128e73f4530/Recording%202024-04-24%20215320.gif "Mandelbrot set")\


В этом способе используется выражение комплексного числа ```f(z) = z2 + C```, где ```z``` — комплексная переменная, а ```C``` — комплексная константа. Далее вычисляются ```z1 = f(0)```, ```z2 = f(z1)```, ```z3 = f(z2)```, и так далее до какого-то выбранного предела. Набор тех констант ```C```, для которых последовательность ```z1, z2, z3, ...``` ограничена, т.е. не уходит в бесконечность, является множеством Мандельброта *(черный участок на графике ниже)*\
![Mandelbrot set](https://ncatlab.org/nlab/files/MandelbrotSet.png)


```
function branch(len) {
  function mandel(x,y) {
  var a=0; var b=0;
  for (i = 0; i<250; ++i) {
    // Complex z = z^2 + c
    var t = a*a - b*b;
    b = 2*a*b;
    a = t;
    a = a + x;
    b = b + y;
    var m = a*a + b*b;
    if (m > 10)  return i;
  }
  return 250;
}
```
