import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo9',
  template: `
    <article>
      <h2>Exercice N°9</h2>
      <p>Utilisation de la boucle ngFor pour afficher une liste issu d'un tableau.</p>
      <ul *ngFor="let resultat of tableau let iteration = index">
        <li>{{ iteration + 1 }} - {{ resultat }}</li>
      </ul>
    </article>
  `,
  styles: []
})
export class Exo9Component implements OnInit {

  public tableau: string[] = [
    'Playstation 4',
    'Nintendo Switch',
    'Xbox One S',
    'Super Nintendo',
    'Playstation 5'
  ]

  constructor() { }

  ngOnInit() {
  }

}
