import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  datos:any = null;

  constructor(private activatedRoute: ActivatedRoute, private datosService: DatosService) { }

  ngOnInit(): void {
    let idCharacter = this.activatedRoute.snapshot.paramMap.get("id"); //recogemos el parametro dentro de la url (id)
    this.datosService.funCharacter(idCharacter) //funCharacter (fun de funcion) es idCharacter
    .subscribe(result => this.datos=result)

  }

}
