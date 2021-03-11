import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  @Output() cursoAdicionado = new EventEmitter();

  adicionar(nome, cargaHoraria) {
    const curso = { nome, cargaHoraria };
    this.cursoAdicionado.emit(curso);
  }
}
