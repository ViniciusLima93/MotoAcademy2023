// function fn2 () {
//     console.log('oi')
// }

// fn2()

// let idade = 18

// if (idade >= 18) {
//     console.log('vc é maior de idade')
// }else {
//     console.log('voce n é maior de idade')
// }

// const list = [1,2,3,4, 'COISO', true,  {objeto: 1}]

// console.log(list.splice(1,2,6,7))


// const Humano  = {
//     nome: '',
//     idade: 0,
//     likes: [''],
//     acao: function () {
        
//         console.log(this.likes[1])
//     }

// }

// Humano.nome = "Vinicius"
// Humano.idade = 30
// Humano.likes = ['correr', 'programação', 'séries','pizza']

// console.log(Humano)


// Humano['Conta bancária'] = -100

// Humano.acao()



// const num = [1,2,3,4]

// for(let i = 0; i<num.length; i++) {
//     if(num[i] > 2 ) {
//         (num[i] ** 2)
//     }
//     console.log(num[i]);
// }

let funcionario = [
    {
      nome: 'Euclides',
      idade: 21,
      cargo: 'Analista de sistemas',
      tecnoglogia: 'Node',
    },
    {
      nome: 'Linton',
      idade: 30,
      cargo: 'Analista de sistemas',
      tecnoglogia: 'Tudo',
    },
  ];


  funcionario.push ({
      nome: 'Livia',
      idade: 18,
      cargo: 'Analista de requesitos',
      tecnoglogia: 'C#, Java',
  })

  const IsColab = funcionario.map((li) => {
    if (li.nome === 'Livia')
    return {
        nome : li.nome,
        idade: li.idade,
        cargo: li.cargo,
        tecnologia: li.tecnoglogia
    }
  })

  console.log(IsColab)


  for (const colab of funcionario) {
    if (colab.nome === 'Euclides')
    console.log(colab)
  }

  const isTec = funcionario.filter((li, index)  => {
    if (index === 0) {
        li.tecnoglogia = ['C', 'C#','.Net', 'Javascript']
    }
    return li
  })

  console.log(isTec)


  console.log(funcionario.map((res) => {
    res.tecnoglogia = ['Python', 'Ruby','C++']
    return res
  }))

  console.log(funcionario.map((res) => {
    res.tecnoglogia = res.tecnoglogia.reverse();
    return res;
  }))

  console.log(funcionario.map((_, index) => {
     if (typeof _.tecnoglogia === 'string') {
        _.tecnoglogia = ['abc', 'def', 'xyz']
     }
     return _
    
  }))