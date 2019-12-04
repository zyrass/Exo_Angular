import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo6',
  template: `
    <article>
      <h2>Exercice N°6</h2>
      <p>Conception d'un input qui permettra d'éditer un titre.</p>
      <input type="text" placeholder="saisir un texte ici..." [(ngModel)]="titre"  /><button (click)="reset()">Reset</button>
      <h3>{{ titre }}</h3>
    </article>
  `,
  styles: []
})
export class Exo6Component implements OnInit {

  public titre: string = 'Titre démonstratif';
  reset() {
    this.titre = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
