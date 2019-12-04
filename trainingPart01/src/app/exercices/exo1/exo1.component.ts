import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  template: `
    <article>
      <h2>Exercice N°1</h2>
      <p>Création d'un component permettant de me voir affiché.</p>
    </article>
  `,
  styles: []
})
export class Exo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
