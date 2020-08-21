import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html'
})
export class ConstruccionComponent {

  form: FormGroup;

  // fields = [{
  //   "campoId": "nombre",
  //   "tipoCampoId" : "input",
  //   "descripcion": "campo donde va el combre"
  // },{
  //   "campoId": "email",
  //   "tipoCampoId" : "input",
  //   "descripcion": "campo donde va el email"
  // }];

  fields = [];
  formData = {
    "activo": true,
    "descripcion": "string",
    "formularioId": 0,
    "lstBloques": [
      {
        "lstCampos": [
          {
            "campoId": '01',
            "click": "string",
            "descripcion": "string",
            "extension": "",
            "help": "Esta campo es tipo texto",
            "icon": "string",
            "items": "string",
            "label": "Nombre: ",
            "nombre": "nombre",
            "nombreDocumento": "string",
            "objToDisplay": "test=si",
            "orden": 0,
            "placeholder": "Nombre del titurlar",
            "time": "string",
            "tipoCampoId": {
              "descripcion": "string",
              "tipoCampoId": 0
            },
            "tipoDatoId": {
              "descripcion": "string",
              "sinonimo": "string",
              "tipoDatoId": 0
            },
            "tipoSeleccionId": {
              "descripcion": "string",
              "tipoSeleccionId": 0
            },
            "value": ""
          },
          {
            "campoId": '02',
            "click": "string",
            "descripcion": "string",
            "extension": "",
            "help": "Esta campo test",
            "icon": "string",
            "items": "string",
            "label": "Test: ",
            "nombre": "test",
            "nombreDocumento": "string",
            "objToDisplay": "",
            "orden": 0,
            "placeholder": "Nombre del titurlar",
            "time": "string",
            "tipoCampoId": {
              "descripcion": "string",
              "tipoCampoId": 0
            },
            "tipoDatoId": {
              "descripcion": "string",
              "sinonimo": "string",
              "tipoDatoId": 0
            },
            "tipoSeleccionId": {
              "descripcion": "string",
              "tipoSeleccionId": 0
            },
            "value": ""
          }
        ],
        "nombre": "string",
        "nombreTabla": "string"
      }
    ],
    "nombre": "Formulario Vivienda"
  };


  constructor( private _builder: FormBuilder ) { 

      this.fields = this.formData.lstBloques[0].lstCampos;
      this. generateObjetFrom();
    	// this.form = this._builder.group({
      //   nombre: ['', Validators.required],
      //   email: ['', Validators.compose([Validators.email, Validators.required])],
      //   password: ['', Validators.required]
      // });

  }

  generateObjetFrom() {

    var objForm = {};
    this.fields.forEach( field => {
      Object.defineProperty(objForm,field.nombre,{
        value:field.value, 
        writable : true,
        enumerable : true
      });
    });
    console.log('generateObjetFrom', objForm)
    this.form = this._builder.group(objForm);
  }


  validateField( idField ) {

    var field = this.searchField(idField);

    if(field.objToDisplay != "") {

      var conditions = field.objToDisplay.split(",");
      var response = false;

      conditions.forEach(condition => {

        var keyValue = condition.split("=");
        
        if(this.form.get(keyValue[0]).value == keyValue[1]) {
          console.log('entra',this.form.get(keyValue[0]).value,keyValue[1]);
          response =  true;
        }

        console.log(keyValue);

      });

      return response;
    }

    return true;

  }
 
  searchField(idField) {

    var fieldFound = null;

    this.fields.forEach(field => {

      if(field.campoId == idField) { fieldFound = field;}

    });

    return fieldFound;

  }

  enviar(values){
    console.log(values);
  }

}
