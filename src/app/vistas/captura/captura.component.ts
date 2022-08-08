import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { prospectoUnitario } from 'src/app/modelos/prospectoUnitario.interface';
import { config } from 'rxjs';

@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css']
})
export class CapturaComponent implements OnInit {

  constructor(private apiService:ApiService, private router:Router) { }

  DatosCapturados = new FormGroup<any>({
    nombre: new FormControl('', Validators.required),
    apellidoMaterno: new FormControl(''),
    apellidoPaterno: new FormControl('', Validators.required),
    calle: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    colonia: new FormControl('', Validators.required),
    codigoPostal: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    rfc: new FormControl('', Validators.required),
    estatus: new FormControl('Enviado')
  })

  documentoCapturado = new FormGroup<any>({
    documento: new FormControl('')
  })

  public archivos: any = []

  ngOnInit(): void {
  }

  postProspecto(form:prospectoUnitario){
    this.apiService.postProspecto(form).subscribe((resp:any)=>{
      console.log(resp)
    })
  }

  capturarFile(event:any){
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)
  }

  captura(){
    if(confirm('Datos capturados')){
      this.router.navigate(['lista']);
    }
  }

  salir(){
    if(confirm('Se perderá toda la captura, desea salir?')){
      this.router.navigate(['lista']);
    }
  }
}
