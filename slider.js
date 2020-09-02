let imagSlid = document.querySelector('#image-slider');
let photos = ["girl-746522_1280.jpg","model-429242_1280.jpg", "one-3075749_1280.jpg", "portrait-3083403_1280.jpg",  "tango-190026_1280.jpg", 
 "woman-3075704_1280.jpg"];

 let i = 0; //comment par 0 l'index

 //definir les function
 function previous(){

    if(i <= 0) i = photos.length;
     i--;
        return setImg();
 
        
    
 }


 function next(){
     if(i >= photos.length-1) i = -1;
     i++;
     return setImg();

 }

 function setImg(){
     return imagSlid.setAttribute('src', 'images/' + photos[i]);
 }