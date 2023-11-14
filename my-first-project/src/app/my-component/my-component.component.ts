import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  phrase = {
    bomdia : 'bom dia',
    boatarde : 'boa tarde',
    boanoite: 'boa noite'
  }
  alunos = [
    {

    nome : 'Euclides',
    idade : 21,
    trabalho: 'Eldorado',
    salario: 'R$ 10000,00'

  },
  {
      
    nome : 'Linton',
    idade : 41,
    trabalho: 'Eldorado',
    salario: 'R$ 5000000,00'
  },
  {
      
    nome : 'ananias',
    idade : 71,
    trabalho: 'Eldorado',
    salario: 'R$ 2,00'

  },
]

}
