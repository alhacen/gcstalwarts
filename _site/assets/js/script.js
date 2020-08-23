img=document.querySelectorAll('[lazy_load="true"]');
function load(img,i,img_count){
console.log(i)
    objImg = new Image();
    objImg.index=i;
    objImg.src = img[i].src.replace("_thumb",""); 
    objImg.onload = function () { 
        img[objImg.index].src=img[objImg.index].src.replace("_thumb","");
        if(img_count!=i+1){load(img,++i,img_count)} 
    }
}
load(img,0,img.length)