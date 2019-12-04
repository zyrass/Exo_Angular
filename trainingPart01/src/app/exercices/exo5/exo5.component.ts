import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo5',
  template: `
    <article>
      <h2>Exercice N°5</h2>
      <p>Dans cet exercice je vais changer l'image au clic sur un bouton</p>
      <figure>
        <img [src]="imgSrc" [alt]="imgAlt" [width]="imgWidth" [height]="imgHeight" />
        <figcaption>{{ imgAlt }}</figcaption>
      </figure>
      <button (click)="changerImage()">Changé l'image</button>
    </article>
  `,
  styles: []
})
export class Exo5Component implements OnInit {

  public images: any[] = [
    {image: "./assets/images/image1.jpg", desc: "Je suis l'image 1"},
    {image: "./assets/images/image2.jpg", desc: "Je suis l'image 2"},
    {image: "./assets/images/image3.jpg", desc: "Je suis l'image 3"}
  ];
  public imgSrc: string = this.images[0].image;
  public imgAlt: string = this.images[0].desc;
  public imgWidth: string = "400";
  public imgHeight: string = "266";

  index = this.images.length - this.images.length;
  
  changerImage() {

    // IF - Si je ne connais pas le nombre d'élément dans mon tableau
    if (this.index < this.images.length - 1) {
      this.index++;
      this.imgSrc = this.images[this.index].image;
      this.imgAlt = this.images[this.index].desc;
    } else { 
      this.index = 0;
      this.imgSrc = this.images[this.index].image;
      this.imgAlt = this.images[this.index].desc;
    }

    // --------------------------------------------------------------

    // SWITCH - Si je connais le nombre d'élément dans mon tableau.

    // switch ( this.index ) {
    //   case 0 :
    //     this.imgSrc = this.images[this.index].image;
    //     this.imgAlt = this.images[this.index].desc;
    //     this.index++;
    //     break
    //   case 1 :
    //     this.imgSrc = this.images[this.index].image;
    //     this.imgAlt = this.images[this.index].desc;
    //     this.index++;
    //     break
    //   case 2 :
    //     this.imgSrc = this.images[this.index].image;
    //     this.imgAlt = this.images[this.index].desc;
    //     this.index = 0;
    //     break
    // }

  }

  constructor() { }

  ngOnInit() {
  }

}
