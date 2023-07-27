import { Component } from '@angular/core';
import { Voiture } from '../shared/voiture.model';
import { Pilote } from '../shared/pilote.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageDuParent:string = "Bienvenue à la formation angular";
  voiture:Voiture = new Voiture("404","Peugeot");


  AjoutVoiture(voiture:Voiture)
  {
    console.log(voiture);
    this.voiture = voiture;
  }
}
