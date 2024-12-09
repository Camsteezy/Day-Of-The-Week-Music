document.querySelector('#getWeekday').addEventListener('click',findMusic)

function findMusic(){
const weekday =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const d = new Date('November 2,2024')// insert date her to test anyday
let day = weekday[d.getDay()]
document.querySelector('#todayIs').innerText= 'Today is' + ' '+ `${day}`
switch (d.getDay()){
    case 0:
    document.querySelector('#sunday').classList.toggle('hidden');
    document.body.style.backgroundImage = 'url(https://t4.ftcdn.net/jpg/05/87/29/77/360_F_587297775_Fb3sd8Caflgn9YUv8dPUpG8LUw1axRyL.jpg)';
    document.body.style.color= 'gold'
    break;
    case 1:
        document.querySelector('#monday').classList.toggle('hidden');
        document.body.style.backgroundImage = 'url(https://wallpapers.com/images/hd/yu-yu-hakusho-background-84vtyqsnzync615e.jpg)';
        document.body.style.color= 'green'

    break;
     case 2:
    document.querySelector('#tuesday').classList.toggle('hidden');
    document.body.style.backgroundImage = 'url(https://twistedgorilla.com/cdn/shop/products/its-taco-tuesday-sticker-117229_1024x.jpg?v=1656917963)';
    document.body.style.color = 'red'

         break;
    case 3:
        document.querySelector('#wednesday').classList.toggle('hidden');
document.body.style.backgroundImage = 'url(https://wallpapercat.com/w/full/a/8/5/980523-1920x1080-desktop-1080p-survivor-tv-series-wallpaper.jpg)';
document.body.style.color= 'white'

        break;
    case 4:
        document.querySelector('#thursday').classList.toggle('hidden');
        document.body.style.backgroundImage = 'url(https://i.pinimg.com/736x/09/ca/b2/09cab2cb4b2a6800dd13a0ce1a962a63.jpg)';
        document.body.style.color= 'white'

        break;
        case 5:
            document.querySelector('#friday').classList.toggle('hidden');
            document.body.style.backgroundImage = 'url(https://lh3.googleusercontent.com/proxy/xmvoHBNupp-OQYBCh2F_DLKOBAP-Je0tWAShkPgN8Th7ISa4vzZBUeCtg5VYE4RDXRAwkr5SF-t9-VYVnuRaKiZsDUuqpqhadzEKP7Ol_J1lyZc2TA)'
            document.body.style.color='orange'
            break;
            case 6:
                document.querySelector('#saturday').classList.toggle('hidden');
                document.body.style.backgroundImage = 'url(https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8818865_p_v8_as.jpg)'
                document.body.style.color= 'white'
break;
}
}

