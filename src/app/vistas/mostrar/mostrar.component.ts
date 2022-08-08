import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { prospectoUnitario } from 'src/app/modelos/prospectoUnitario.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  constructor(private apiService:ApiService, private router:Router, private activerouter:ActivatedRoute) { }

  datosProspecto!:prospectoUnitario;

  DatosCapturados = new FormGroup<any>({
    nombre: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    calle: new FormControl(''),
    numero: new FormControl(''),
    colonia: new FormControl(''),
    codigoPostal: new FormControl(''),
    telefono: new FormControl(''),
    rfc: new FormControl(''),
    idprospecto: new FormControl(''),
    estatus: new FormControl('', Validators.required),
    observaciones: new FormControl('')
  })

  ngOnInit(): void {
    let i = 0;
    let idprospecto = this.activerouter.snapshot.paramMap.get('id');
    console.log(idprospecto);
    this.apiService.getSingleProspecto(idprospecto).subscribe((resp:any)=>{
      this.datosProspecto = resp[Number(idprospecto)-1],
      this.DatosCapturados.setValue({
        'nombre': this.datosProspecto.nombre,
        'apellidoMaterno': this.datosProspecto.apellidoMaterno,
        'apellidoPaterno': this.datosProspecto.apellidoPaterno,
        'calle': this.datosProspecto.calle,
        'numero': this.datosProspecto.numero,
        'colonia': this.datosProspecto.colonia,
        'codigoPostal': this.datosProspecto.codigoPostal,
        'telefono': this.datosProspecto.telefono,
        'rfc': this.datosProspecto.rfc,
        'idprospecto': idprospecto,
        'estatus': this.datosProspecto.estatus,
        'observaciones': this.datosProspecto.observaciones
      })
      console.log(this.DatosCapturados.value)
    })
  }

  putForm(form:prospectoUnitario){
    this.apiService.putProspecto(form).subscribe((resp:any)=>{
      console.log(resp)
    })
  }

  element = false;
  showData(){
    return (this.element = true)
  } 
  hideData(){
    return (this.element = false)
  }

  salir(){
    this.router.navigate(['lista']);
  }
  
}
