

setInterval(() => {
    const sec1=document.querySelector('.second');
    const min1=document.querySelector('.minute');
    const hour1=document.querySelector('.hour');

    const date=new Date();
    const sec=date.getSeconds();
    const min=date.getMinutes();
    const hour=date.getHours();
    
    const sRotation=6*sec;
    const mRotation=6*min;
    const hRotation=((30*hour)+(min*6))/12;
    
    sec1.style.transform=`rotate(${sRotation}deg)`;
    min1.style.transform=`rotate(${mRotation}deg)`;
    hour1.style.transform=`rotate(${hRotation}deg)`;
    
    
}, 1000);
    
