const palavras = ["python", "java", "javascript", "html", "css", "programacao"];

const temMaisDe5Caracteres = palavra => palavra.length > 5;

const palavrasLongas = palavras.filter(temMaisDe5Caracteres);

console.log(palavrasLongas);
