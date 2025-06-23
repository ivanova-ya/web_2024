"use strict";
document. addEventListener("DOMContentLoaded", ( ) => {
    console.log('Скрипт отработал');

//3.2 Появление кнопки
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
    

    const scrollUpButton = document.querySelector('.scroll-up');

    if (scrollUpButton) {
        const windowHeight = document.documentElement.clientHeight; // Определяем высоту видимой части окна браузера
         console.log(windowHeight);
        // Показать кнопку при прокрутке вниз на высоту экрана
        document.addEventListener('scroll', () => {
            let scrollPageY = this.scrollY;

            if (scrollPageY >= windowHeight) {
                scrollUpButton.classList.add('scroll-up--show');
            } else {
                scrollUpButton.classList.remove('scroll-up--show');
            }
        });

        // Плавная прокрутка наверх при нажатии на кнопку
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    }
//3.4
const welcоmeButtonModal = document.querySelector(".nav__button");
const modalApplication = document.querySelector(".applications");
if (welcоmeButtonModal && modalApplication) {
    console.log('все есть');
    welcоmeButtonModal.addEventListener("click", () => {
        modalApplication.removeAttribute("hidden");
    });
}
window.addEventListener("click", (event) => {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});
const closeModalButton = document.querySelector(".application__close");
closeModalButton.addEventListener("click", () => {
    modalApplication.setAttribute("hidden", true);
});


// ИСПОЛЬЗОВАНИЕ LOCALSTORGE задание 3.7 
// Объявляем переменную formApplication и помещаем в нее элемент с id "formApplication"
const formApplication = document.querySelector("#form"); 
// Проверяем, существует ли элемент formApplication
if (formApplication) {  
// Добавляем обработчик события для отправки формы
   formApplication.addEventListener("submit", (event) => {
     event.preventDefault(); // Предотвращаем отправку формы
    // Объявляем переменные "username", "tel","email",   и помещаем в нее элементы с id из формы
     const username = formApplication.querySelector("#name").value;
     const tel = formApplication.querySelector("#phone").value;
    
// Объявляем переменную modalMessage и помещаем в нее элемент для отображения сообщений о статусе заявки
const modalMessage = modalApplication.querySelector("#application-message");
    
      // Проверка длины имени пользователя
      if (username.length < 3) {
         modalMessage.textContent = "Имя пользователя должно содержать не менее 3 символов";
         modalMessage.style.color = "black"; // Устанавливаем цвет сообщения об ошибке
         return;
      }
    
       // Проверка номера телефона
      if (!/^\d{10,}$/.test(tel)) {
          modalMessage.textContent = "Номер телефона должен содержать только цифры и быть не менее 10 символов";
          modalMessage.style.color = "black"; // Устанавливаем цвет сообщения
          return;
      }
    
      // Здесь можно добавить отправку данных на сервер
      modalMessage.textContent = "Заявка отправлена!";
      modalMessage.style.color = "green"; // Устанавливаем цвет сообщения для успешной отправки
    
      // Записываем данные в localStorage
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("tel", tel);
  
})};




//3.5
const nav = document.querySelector('.nav');
if (nav){
    const navLink = nav.querySelector('.nav__list');
    const menuData = {
        link1: {
            link: '#',
            title: 'Найти',
        },
        link2: {
            link: '#',
            title: 'О проекте',
        },
        link3: {
            link: '#',
            title: 'Источники',
        }
    }
    const createLink = (UrlLink, title) =>{
        const link = `
        <li class="nav__item"><a href="${UrlLink}" 
class="nav__link">${title}</a></li>
        `;
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.UrlLink, link.title);
        navLink.insertAdjacentHTML('beforeend', linkIndex);

    }
}

//3.6
const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }

//3.6.1 
const cardsCon = document.querySelector(".interesting_fact");
    if (cardsCon) {
        const cardList = cardsCon.querySelector(".fat__wrap");
 
        // Пример URL для получения данных с сервера
        const apiUrl = "data.json";

         // Функция для создания карточки
        const createCard = (
            title,
            text
        ) => {
            // Шаблонные строки и подстановки
            const card = `
                            <div class="fact_text_block">
                    <h3 class="section__subtitles">${title}</h3>
                    <p>${text}
                    </p>
                </div>
            `;
            return card;
        };
        // Загрузка данных с сервера
fetch(apiUrl)
.then((response) => response.json())
.then((data) => {
    console.log(data); // Данные
    console.log(typeof data); // Тип полученных данных

    data.forEach((item) => {
        const cardElement = createCard(
            item.title,
            item.text
        );
        cardList.insertAdjacentHTML("beforeend", cardElement);
    });
})
.catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
});
    }

// Слайдер
// объявляем переменную sliders,куда помещаем элемент с классом swiper
const sliders = document.querySelector('.swiper');
//проверяем существует ли элемент
    if (sliders) {
        const swiper1 = new Swiper (sliders, {
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
