import { Component, OnInit } from '@angular/core';
import { listaProspectos } from 'src/app/modelos/listaProspectos.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private apiService: ApiService, private router:Router) { }

  listadeProspectos:listaProspectos[] = [];

  ngOnInit(): void {
    this.apiService.getAll().subscribe((resp: any) => {
      this.listadeProspectos = resp
    })
  }

  verProspecto(id:any){
    this.router.navigate(['mostrar', id])
  }

  capturarProspecto(){
    this.router.navigate(['captura']);
  }

}
