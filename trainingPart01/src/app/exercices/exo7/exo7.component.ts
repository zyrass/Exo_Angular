import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-exo7',
  template: `
    <article>
      <h2>Exercice N°7 - <small>{{ maDate | date: 'dd-MMM-yyyy à HH:mm:ss:SS' }}</small></h2>
      <p>Affichange de la date dans le titre de l'exercice sur le clic du bouton</p>
      <button type="button" (click)="showDate()">Afficher la date</button>
    </article>
  `,
  styles: []
})
export class Exo7Component implements OnInit {

  public maDate = new Date();

  showDate() {
    this.maDate = new Date();
  }

  constructor() { }

  ngOnInit() {
  }

}
