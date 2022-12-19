
        "use strict";
        
        const tempCelsius = +prompt("Введите значение температуры в градусах \
Цельсия: ");
        const tempFahrenheit = (9 / 5) * tempCelsius + 32;
        alert('Температура ' + tempCelsius + ' градусов по Цельсию в градусах \
по Фаренгейту равна: ' + Math.round(tempFahrenheit * 100) / 100)
