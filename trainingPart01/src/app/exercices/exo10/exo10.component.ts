import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo10',
  template: `
    <article>
      <h2>Exercice N°10</h2>
      <p>
        Utilisation à nouveau de la boucle ngFor pour afficher une liste actuellement vide.<br />
        Je la remplirais avec un petit formulaire.
      </p>
      <input type="text" [(ngModel)]="newItem" /><button type="button" (click)="addListe(newItem)">Ajouter</button>
      <ul *ngFor="let tache of taches let iteration = index">
        <li>{{ iteration + 1 }} - {{ tache }}</li>
      </ul>
    </article>
  `,
  styles: []
})
export class Exo10Component implements OnInit {

  newItem: string = '';
  taches: string[] = [];
  
  addListe(item: string) {
    this.taches.push(item);
  }

  constructor() { }

  ngOnInit() {
  }

}
