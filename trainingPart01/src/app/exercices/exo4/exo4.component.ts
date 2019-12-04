import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo4',
  template: `
    <article>
      <h2>Exercice N°4</h2>
      <p>Conception d'un event clic afin que quand j'ai cliquer dessus, j'affiche un message dans la console.</p>
      <button (click)="messageConsole()">Clic ici pour voir un message s'afficher dans la console.</button>
    </article>
  `,
  styles: []
})
export class Exo4Component implements OnInit {

  messageConsole() : void {
    console.log("Ce message est inscrit dans la console pour me permettre de valider mon évènement");
  }

  constructor() { }

  ngOnInit() {
  }

}
