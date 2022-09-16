import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/characters.model';
import { CharactersService } from '../services/characters.service';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {


  @Input()
  newCharacter!: Character;
submitted=false;


  constructor(private api: CharactersService) { }

  ngOnInit(): void {
  }

  saveCharacter() {
    const data = {
      name: this.newCharacter.name,
      status: this.newCharacter.status,
      species: this.newCharacter.species,
      origin: this.newCharacter.origin
    };

    this.api.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

}
