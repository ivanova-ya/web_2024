"use strict";
document. addEventListener("DOMContentLoaded", ( ) => {
    console.log('Скрипт отработал')
});
//3.2 Появление
    //     1. Начало.
    //     2. Доходим до конца страницы, получаем высоту
    //     3. Если дошли
    //            3.1. Да: 
    //                3.1.1 повляется кновка вверх
    //                    3.1.1.1. Если нажата 
    //                    3.1.1.2. При нажатии переходим вверх
    //            3.2. Нет: Конец
    //       4. Конец
    //      
    //        Блок-схема: /images/block-schema.png
const header__logo = document.querySelector(".header__logo");
header__logo.addEventListener('mouseenter', () => {
    console.log('Мышка наведена на изображение, показываем текст');
});
