const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const choose = $("#choose");
const pEl = $("p");

const cursos = {

php: "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor",
javascript: "JavaScript é uma linguagem de programação interpretada estruturada, de script em lto nível.",
css: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
html5: "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet.",
react: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
vuejs: "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",

};

const change = () => pEl.innerHTML = cursos[choose.value];

// function change(){
//   var p = $("p");
//   p.innerHTML = cursos[choose.value];

  /*if (choose.value == "php"){
  	p.innerHTML = "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor";
  } else if (choose.value == "javascript"){
		p.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em lto nível.";
	} else if (choose.value == "css"){
  p.innerHTML = "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.";
  } else if (choose.value == "html5"){
  p.innerHTML = "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet.";
  } else if (choose.value == "react"){
	p.innerHTML = "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
	} else if (choose.value == "vuejs"){
  p.innerHTML = "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.";
  } else {
  p.innerHTML = "";
  }*/

// }



