var familia=["Mamá", "Papá", "Hermana", "Hermano", "Abuela", "Abuelo", "Tío", "Tía", "Prima", "Primo", "Familia perruna"];
var imagen=["https://static.guiainfantil.com/uploads/ocio/mama-gigio.jpg", "https://img.freepik.com/vector-premium/feliz-linda-chica-abrazando-papa-amor_97632-1368.jpg?w=2000","https://previews.123rf.com/images/colorfuelstudio/colorfuelstudio2106/colorfuelstudio210600093/171371129-linda-ni%C3%B1a-saluda-a-su-hermana-menor.jpg", "https://previews.123rf.com/images/colorfuelstudio/colorfuelstudio2106/colorfuelstudio210600101/170974496-lindo-ni%C3%B1o-saluda-a-su-hermano-menor.jpg", "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-personaje-lindo-abuela_339032-372.jpg", "https://img.freepik.com/vector-premium/abuelo-feliz-baston-dandonos-bienvenida_546897-242.jpg?w=2000", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-jSDjXsdx6TC3Y7FzsxzEmrV8xejt-MPoQ&usqp=CAU", "https://png.pngtree.com/png-clipart/20190120/ourlarge/pngtree-aunty-aunt-happy-female-hand-drawn-aunt-illustration-happy-aunt-png-image_494121.jpg", "https://www.psicoactiva.com/wp-content/uploads/puzzleclopedia/la-edad-de-mi-prima.png", "https://img.remediosdigitales.com/ce2324/ninos/840_560.jpg", "https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/styles/noticias_principal_317x317/public/imagenes/perros%20famosos%20del%20mundo%20.png"];
var i=0;
function next(){
    if(i<11){
        document.getElementById("foto").src=imagen[i];
        document.getElementById("desc").innerHTML=familia[i];
        i++;
    } else{i=0;}
    
}
