import { Component, OnInit } from '@angular/core';
import { Characters } from '../models/characters.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

character: Characters ={
  name:'',
  status:'',
  species:'',
  origin:'',
  image:''

};

submitted=false;

  constructor(private api: CharactersService) { }

  ngOnInit(): void {
  }

  saveCharacter() {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      origin: this.character.origin
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

  newCharacter() {
    this.submitted = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      origin: ''
    }
  }

}
