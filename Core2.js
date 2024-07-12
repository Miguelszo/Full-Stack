function sumarLike(elemento){
    var numLikes = parseInt(elemento.closest(".likes").querySelector(".like").innerHTML);
    numLikes++;
    elemento.closest(".likes").querySelector(".like").innerHTML = numLikes;
}