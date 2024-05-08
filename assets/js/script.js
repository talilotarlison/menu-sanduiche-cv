// adicionar botao hamburguer
var $botao = document.getElementById("btn");
var $menu = document.getElementById("menu");

$botao.addEventListener("click", ()=>{
    var $disp = $menu.style.display;
  $menu.style.display = $disp === "none"? "block":"none";
})
