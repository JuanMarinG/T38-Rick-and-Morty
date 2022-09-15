import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  datos:any = null;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.retonar()
    .subscribe(result => this.datos=result)
  }
  }
