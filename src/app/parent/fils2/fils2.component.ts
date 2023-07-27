import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Voiture } from 'src/app/shared/voiture.model';
import { Pilote } from 'src/app/shared/pilote.model';

@Component({
  selector: 'app-fils2',
  templateUrl: './fils2.component.html',
  styleUrls: ['./fils2.component.css']
})
export class Fils2Component {
  @Input() pilote:Pilote = new Pilote("Verstappen", "Max", "Red Bull");

  @Output() NewCarEvent:EventEmitter<Voiture> = new EventEmitter<Voiture>();

  Ajout_Voiture()
  {
    this.NewCarEvent.emit(new Voiture('RB14','Red Bull'));
  }
}
