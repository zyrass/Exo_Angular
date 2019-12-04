import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  template: `
    <article>
      <h2>Exercice N°2</h2>
      <p>Création d'une interpolation avec les moustaches</p>
      <p>{{ description }}</p>
    </article>
  `,
  styles: []
})
export class Exo2Component implements OnInit {

  public description: string = "Je suis une interpolation";

  constructor() { }

  ngOnInit() {
  }

}
