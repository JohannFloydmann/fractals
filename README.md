# 1 - Простая **рекурсия** (ветка ```main```)
![alt text](https://github.com/JohannFloydmann/fractals/blob/3881873cb98b96e383f9af340bec84bde8a6835f/Recording%202024-04-24%20213655.gif "Logo Title Text 1")\
Данный способ использует рекурсивную функцию ```branch()```, которая отрисовывает линию *(ветку)*, начало которой находится в координате ```(0, 0)```, переносит начало координат на конец отрисованной ветки и снова вызывает саму себя *(принцип рекурсии)*
```
function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
```
