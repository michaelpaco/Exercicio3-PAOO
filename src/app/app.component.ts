import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos = [{ nome: "Gestão de RH", cargaHoraria: "200hs" }, { nome: "Direito Civil", cargaHoraria: "160hs" }, { nome: "Mecânica", cargaHoraria: "240hs" }, { nome: "ADS", cargaHoraria: "200hs" }];

  onAdicionarCurso(curso) {
    if (this.cursos.find((c) => c.nome === curso.nome)) return

    this.cursos = [curso, ...this.cursos];
  }
}
