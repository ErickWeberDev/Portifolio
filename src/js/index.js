const botaoSobreMim = document.querySelector(".botao-1");
const minhasRedes = document.querySelector(".botao-2");
const sobreMin = document.querySelector(".sobre-mim");
const redes = document.querySelector(".redes");

botaoSobreMim.addEventListener("click", () => { 
    sobreMinSelecionado(); 
    blocoSobreMim(); 
});

minhasRedes.addEventListener("click", () => { 
    minhasRedesSelecionada(); 
    blocoRedes(); 
});

function blocoRedes() { 
    sobreMin.style.display = "none"; 
    redes.style.display = "block"; 
}

function blocoSobreMim() { 
    redes.style.display = "none"; 
    sobreMin.style.display = "block"; 
}

function sobreMinSelecionado() { 
    botaoSobreMim.classList.remove("selecionado"); 
    botaoSobreMim.classList.add("selecionado"); 
    minhasRedes.classList.remove("selecionado"); 
}

function minhasRedesSelecionada() { 
    minhasRedes.classList.remove("selecionado"); 
    minhasRedes.classList.add("selecionado"); 
    botaoSobreMim.classList.remove("selecionado"); 
}
