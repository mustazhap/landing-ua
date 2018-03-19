 $(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});


  var lis = document.getElementsByClassName('li1');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    if (window.innerWidth > 1000){
    var width = 226;
  var count = 5;}
    else if (window.innerWidth > 780){
    var width = 226;
  var count = 5;}
    else if (window.innerWidth > 278){
    var width = 225;
    var count = 1;
  }

     // ширина изображения
     // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };





  var lis2 = document.getElementsByClassName('li2');
    for (var r = 0; r < lis2.length; r++) {
      lis2[r].style.position = 'relative';
      var span2 = document.createElement('span2');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span2.style.cssText = 'position:absolute;left:0;top:0';
      span2.innerHTML = r + 1;
      lis2[r].appendChild(span2);
    }
    var carousel2 = document.getElementById('carousel2');
    if (window.innerWidth > 1125){
    var width2 = 1000;}
    else if (window.innerWidth > 1000){
    var width2 = 900;}
    else if (window.innerWidth > 780){
    var width2 = 703;}
    else if (window.innerWidth > 378){
    var width2 = 266;}

    var count2 = 1; // количество изображений

    var carousel2 = document.getElementById('carousel2');
    var list2 = carousel2.querySelector('ul');
    var listElems2 = carousel2.querySelectorAll('li');

    var position2 = 0; // текущий сдвиг влево

    carousel2.querySelector('.prev2').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position2 = Math.min(position2 + width2 * count2, 0)
      list2.style.marginLeft = position2 + 'px';
    };

    carousel2.querySelector('.next2').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position2 = Math.max(position2 - width2 * count2, -width2 * (listElems2.length - count2));
      list2.style.marginLeft = position2 + 'px';
    };

