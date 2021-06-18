let num = document.getElementById('fnumber')
let lista = document.getElementById('flista')
let analise = document.getElementById('analise')
let valores = []

function zeroCem(num) {
  if (Number(num) >= 1 && Number(num) <= 100) {
    return true
  } else {
    return false
  }
}

function verLista(num, valores) {
  if (valores.indexOf(Number(num)) == -1) {
    return true
  } else {
    return false
  }
}

function limpar() {
  num.innerHTML = "";
  lista.innerHTML = "";
  analise.innerHTML = "";
  valores = [];
  num.focus();
}

function adicionar() {
  if (zeroCem(num.value) && verLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
  } else if (verLista(num.value, valores) == false) {
    alert('Número já adicionado')
  } else {
    alert('Número inválido')
  }
  analise.innerHTML = "";
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert('Lista não possui valores inseridos')
  }
  let total = valores.length
  analise.innerHTML = `Itens inseridos: ${total}`

  let maior = valores[0];
  let menor = valores[0];
  let soma = 0;
  for (const x in valores) {
    soma += valores[x]
    if (valores[x] > maior) {
      maior = valores[x];
    }
    if (valores[x] < menor) {
      menor = valores[x];
    }
  }
  analise.innerHTML += `<p>Maior valor inserido: ${maior}</p>`
  analise.innerHTML += `<p>Menor valor inserido: ${menor}</p>`
  analise.innerHTML += `<p>Soma dos valores: ${soma}</p>`
  analise.innerHTML += `<p>Média dos valores informados: ${soma / total}</p>`
}