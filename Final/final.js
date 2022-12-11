const $ = document.querySelector.bind(document);

shownnow=1;

function Button(){
    console.log('#D'+shownnow);
    console.log($('#D'+shownnow));
    $('#D'+shownnow).className='hidden';
    shownnow++; 
    if(shownnow>2){
        shownnow=1;
    }
    $('#D'+shownnow).className='';

}