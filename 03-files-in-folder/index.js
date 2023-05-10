// Метод fs.readdir() используется для асинхронного чтения содержимого данного каталога. 
// fs.readdir(путь, параметры, обратный вызов)

const fs = require('fs');
const path = require('path');

fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        const filePath = path.join('03-files-in-folder/secret-folder', file);

        // Метод fs.stat() используется для возврата информации о данном файле или каталоге. 
        // Он возвращает объект fs.Stat , который имеет несколько свойств и методов для 
        // получения сведений о файле или каталоге.


        fs.stat(filePath, (err, stats) => {
            if (err) throw err;
            // Метод stats.isFile () — это встроенный интерфейс прикладного программирования класса fs.Stats, 
            // который используется для проверки того, описывает ли объект fs.Stats файл или нет.
            if (stats.isFile()) {
                const name = path.parse(file).name;
                const extension = path.parse(file).ext.slice(1);
                const size = stats.size / 1024;
                console.log(`${name} - ${extension} - ${size.toFixed(3)}kb`);
            }
        });
    });
});

