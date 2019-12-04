import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo3',
  template: `
    <article>
      <h2>Exercice N°3</h2>
      <p>Création d'un data binding sur une image.</p>
      <figure>
        <img [src]="imgSrc" alt="{{ imgAlt }}" title="{{ imgAlt }}" [width]="imgWidth" height="{{ imgHeight }}" />
        <figcaption>{{ imgLegend }}</figcaption>
      </figure>
    </article>
  `,
  styles: []
})
export class Exo3Component implements OnInit {

  public imgSrc: string = "./assets/images/image4.jpg";
  public imgAlt: string = "Je suis la description de l'image au cas où si elle ne s'affiche pas.";
  public imgWidth: string = "400";
  public imgHeight: string = "266";
  public imgLegend: string = "Je suis la legende de l'image interpolé";

  constructor() { }

  ngOnInit() {
  }

}
