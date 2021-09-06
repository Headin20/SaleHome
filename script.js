function openTab(num) {
    var content = document.getElementsByClassName('content');
    var tab = document.getElementsByClassName('tab');

    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        tab[i].classList.remove('active');
    }


    content[num].classList.add('active');
    tab[num].classList.add('active');

}

var acc = document.getElementsByClassName('accordion');
for (let i = 0; i < acc.length; i++){
	acc[i].onclick = function () {
		this.classList.toggle('active');
		this.nextElementSibling.classList.toggle('show');
	}
}

let name, email, tel, coment;
function ok(){
    let a = document.getElementsByTagName("input");
    let count = 0;

    name = document.getElementsByTagName("input")[0].value;
    email = document.getElementsByTagName("input")[1].value;
    tel = document.getElementsByTagName("input")[2].value;
    coment = document.getElementsByTagName("textarea")[0].value;

    let rename = /[A-Z-А-Я][a-z-а-я]+$/;
    let reemail = /\S{1,}@\S{1,}/;
    let retel = /0[0-9]{9}/;

    for(let i = 0; i < a.length; i++){
        if (a[i].value.length != 0){
            a[i].classList.remove('error');
        }
    }

    let oname = name.match(rename);
    if (oname != name){
        a[0].classList.add('error');
    }

    let oemail = email.match(reemail);
    if (oemail != email){
        a[1].classList.add('error');
    }

    let otel = tel.match(retel);
    if (otel != tel){
        a[2].classList.add('error');
    }
    

    for(let i = 0; i < a.length; i++){
        if (a[i].value.length == 0){
            a[i].classList.add('error');
        }
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i].classList.contains('error') == 0)
            count++;
    }
    

    if (count == a.length){
        alert('Ваши даные отправлены');
        let chek = document.getElementsByClassName('chek');
        chek[0].classList.add('chek_active')
    }
}

function read(){
    document.write('Имя клиента: ' + name + '<br>');
    document.write('Маил: ' + email + '<br>');
    document.write('Телефон: ' + tel + '<br>');
    document.write('Коментарий: ' + coment + '<br>');
}

            var canvas = document.getElementById("myCanvas");
            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");
                var x = 0, y = 0;
                var stepx = 0;
                var stepy = 0;               
                ctx.beginPath(); 
                               
                var timer;
                function draw(x,y,x2, y2){
                    timer = setInterval(function(){
                        ctx.moveTo(x, y);

                        stepx = (x2 - x)/15;
                        stepy = (y2 - y)/15;

                        if (x2 - x == 1 && y2 - y == 1){
                            clearInterval(timer);
                            return;
                        }

                        x = x + stepx;
                        y = y + stepy;
                        
                        ctx.lineTo(x, y);
                        ctx.stroke();
                    }, 5) 
                }
                //фундамент
                draw(144,585,0, 468);
                draw(0, 468, 0, 430);
                draw(0, 430,84, 425);                
                draw(84, 454,205, 515);
                draw(205, 515,474, 500);
                draw(474, 500,521, 510);
                draw(521, 510,763, 492);
                draw(763, 492,807, 502);
                draw(807, 502,1061, 473);
                draw(1061, 473,1060, 465);
                draw(1060, 465,810, 493);
                draw(810, 493,762, 483);
                draw(762, 483,762, 492);
                draw(774, 484,772, 472);
                draw(772, 472,777, 472);
                draw(777, 472, 810, 480);
                draw(810, 480, 1033,460);
                draw(1033,460,1033,466);
                draw(1080,463,884,443);
                draw(896, 341, 892, 336);
                //колона
                draw(883, 341, 883, 454);
                draw(868, 341, 869, 458);
                draw(852, 341, 855, 455);
                draw(869, 458, 855, 455);
                draw(869, 458, 883, 454);
                //стены
                draw(854, 441, 783, 431);
                draw(783, 431, 783, 342);
                draw(776, 342, 896, 342);
                draw(776, 327, 778, 473);
                draw(776, 335, 893, 335);
                draw(893, 335, 893, 326);
                draw(893, 326, 519, 329);
                draw(519, 304, 519, 510);
                draw(470, 303, 470, 500);
                draw(206, 338, 205, 516);
                draw(84, 341, 84, 454);
                draw(84, 444, 205, 495);
                draw(205, 495, 472, 479);
                draw(472, 479, 520, 491);
                draw(520, 491, 766, 474);
                draw(519, 327, 470, 327);
                draw(470, 327, 207, 324);
                draw(207, 324, 79, 326);
                draw(79, 326, 79, 341);
                draw(79, 341, 206, 338);
                draw(889, 325, 889, 306);
                //крыша
                draw(943, 309, 780, 307);
                draw(936, 302, 776, 298);
                draw(936, 295, 182, 279);
                draw(936, 295,748, 125);
                draw(748, 125, 673, 117);
                draw(558, 104, 111, 55);
                draw(182, 279, 111, 55);
                draw(638, 80, 501, 120);
                draw(638, 80, 467, 215);
                draw(638, 80, 786, 232);
                draw(418, 228, 501, 120);
                draw(418, 228, 467, 215);
                draw(418, 228, 428, 241);
                draw(467, 232,428, 241);
                draw(467, 232,467, 215);
                draw(467, 232,635,95); 
                draw(786, 247,635,95);
                draw(786, 247,786,232);
                draw(634, 107, 769, 244);
                draw(634, 107, 482, 234);
                draw(482, 234, 482, 280); 
                draw(482, 234, 437, 243);
                draw(434, 240, 437, 243);
                draw(455, 240, 484, 285);
                draw(734, 227, 734, 243);
                draw(734, 227, 619, 120);
                draw(531, 237, 769, 244);
                draw(531, 237, 483, 242);
                draw(531, 237, 532, 286);
                draw(621, 240, 621, 288);
                draw(703, 242, 704, 290);
                draw(775, 237, 776, 305);
                draw(768, 252, 710, 249);
                draw(693, 248, 626, 246);
                draw(612, 246, 536, 245);
                draw(524, 247, 488, 248);
                draw(679, 183, 619, 180);
                draw(679, 183, 679, 242);
                draw(550, 177,619, 180);
                draw(550, 177, 550, 237);
                draw(619, 180, 619, 240);
                draw(559, 186, 559, 238);
                draw(559, 186, 613, 189);
                draw(611, 195, 559, 192);
                draw(611, 195, 611, 238);
                draw(611, 188, 611, 238);
                draw(587, 227, 587, 193);
                draw(587, 227, 559, 226);
                draw(587, 227, 610, 226);
                draw(671, 194, 671, 241);
                draw(671, 194, 624, 191);
                draw(624, 191, 624, 240);
                draw(624, 196, 671, 199);
                draw(647, 229, 647, 197);
                draw(647, 229, 623, 228);
                draw(647, 229, 671, 230);
                draw(111, 55, 53, 308);
                draw(86, 307, 53, 308);
                draw(86, 296, 86, 327);
                draw(85, 296, 125, 134);
                draw(107, 75, 178, 298);
                draw(181, 289, 110, 65);
                draw(181, 289, 776, 298);
                draw(181, 298, 776, 306);
                draw(110, 194, 143, 189);
                draw(110, 194, 110, 284);
                draw(162, 279, 110, 284);
                draw(162, 279, 162, 250);
                draw(110, 275, 162, 270);
                draw(147, 199, 110, 202);
                draw(122, 201, 122, 274);
                draw(127, 274, 127, 201);
                draw(143, 198, 143, 272);
                draw(149, 271, 149, 202);
                draw(152, 218, 152, 271);
                draw(206, 299, 206, 324);
                draw(779, 306, 779, 327);
                draw(942, 308, 932, 302);
                draw(938, 302, 930, 295);
                //окна
                draw(97, 424, 97, 340);
                draw(97, 424, 116, 430);
                draw(116, 420, 97, 414);
                draw(116, 420, 116, 430);
                draw(116, 420, 116, 341);
                draw(116, 350, 97, 348);
                draw(110, 411, 97, 414);
                draw(110, 411, 116, 412);
                draw(110, 411, 110, 349);

                draw(145, 350, 145, 339);
                draw(145, 350, 145, 440);
                draw(145, 350, 176, 350);
                draw(176, 448, 145, 440);
                draw(176, 448, 176, 339);
                draw(161, 423, 144, 428);
                draw(161, 423, 161, 350);
                draw(161, 423, 174, 426);
                draw(176, 437, 144, 428);

                draw(206, 338, 471, 340);

                draw(289, 453, 289, 338);
                draw(289, 453, 401, 449);
                draw(401, 449, 289, 453);
                draw(401, 449, 401, 339);
                draw(302, 353, 302, 439);
                draw(302, 353, 386, 352);
                draw(386, 437, 302, 439);
                draw(386, 437, 386, 352);
                draw(302, 358, 380, 357);
                draw(345, 397, 345, 358);
                draw(345, 397, 302, 397);
                draw(345, 401, 302, 401);
                draw(345, 401, 345, 431);
                draw(381, 431, 302, 433);
                draw(350, 401, 380, 401);
                draw(350, 401, 350, 430);
                draw(350, 397, 350, 356);
                draw(350, 397, 380, 397);
                draw(380, 357, 380, 428);

                draw(533, 350, 533, 492);
                draw(533, 350, 765, 346);
                draw(765, 473, 765, 346);
                draw(544, 362, 544, 489);
                draw(544, 362, 586, 361);
                draw(586, 483, 586, 361);
                draw(586, 483, 544, 484);
                draw(544, 439, 586, 438);
                draw(586, 398, 544, 399);
                draw(565, 362, 565, 483);

                draw(595, 362, 595, 485);
                draw(595, 362, 646, 361);
                draw(646, 477, 646, 361);
                draw(646, 477, 595, 481);
                draw(595, 436, 646, 434);
                draw(646, 395, 595, 397);
                draw(621, 478, 621, 362);

                draw(664, 362, 664, 475);
                draw(664, 362, 701, 361);
                draw(701, 473, 701, 361);
                draw(701, 473, 664, 475);
                draw(664, 432, 701, 430);
                draw(701, 394, 664, 395);
                draw(682, 361, 682, 474);

                draw(712, 361, 746, 360);
                draw(712, 361, 712, 471);
                draw(746, 470, 712, 471);
                draw(746, 470, 746, 360);
                draw(712, 432, 746, 431);
                draw(746, 393, 712, 394);
                draw(728, 361, 728, 471);
            }