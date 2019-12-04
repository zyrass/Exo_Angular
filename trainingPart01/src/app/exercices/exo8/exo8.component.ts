import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo8',
  template: `
    <article>
      <h2>Exercice N°8</h2>
      <p>Conception de 2 boutons permettant d'incrémenter ou de décrémenter un nombre.</p>
      <ul>
        <li>Au départ 10</li>
        <li>1 Mini</li>
        <li>25 Maxi</li>
      </ul>
      <button type="button" (click)="incrementer()" >+</button>
      &nbsp;
      <span><strong>{{ nombre }}</strong></span>
      &nbsp;
      <button type="button" (click)="decrementer()" >-</button>
    </article>
  `,
  styles: []
})
export class Exo8Component implements OnInit {

  public nombre: number = 10;

  incrementer() {
    if ( this.nombre >= 1 && this.nombre < 25 ) {
      this.nombre++;
    } else if ( this.nombre == 25 ){
      this.nombre = 25;
    }
    return this.nombre;
  }

  decrementer() {
    if ( this.nombre <= 25 && this.nombre >= 2 ) {
      this.nombre--;
    } else if ( this.nombre == 1 ){
      this.nombre = 1;
    }

    return this.nombre;
  }

  constructor() { }

  ngOnInit() {
  }

}
