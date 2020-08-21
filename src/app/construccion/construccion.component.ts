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
    "formularioId": 51,
    "nombre": "Formulario de Solicitud de Credito Hipotecario",
    "descripcion": "Dentro del Formulario de Solicitud de Credito Hipotecario, se almacenara toda la información de cotizantes",
    "href": null,
    "activo": true,
    "lstBloques": [
      {
            "bloqueId": 51,
            "nombre": "Referencias Personales",
            "nombreTabla": "ReferenciasPersonales",
            "lstCamposDTO": [
              {
                "campoId": 31,
                "nombre": "nombre",
                "descripcion": "Nombre Usuario",
                "label": "Nombre",
                "tipoCampoId": {
                    "tipoCampoId": 1,
                    "descripcion": "Input"
                },
                "placeholder": null,
                "value": "",
                "icon": null,
                "click": null,
                "items": "TipoIdentificacion",
                "objToDisplay": "",
                "help": null,
                "time": null, 
                "orden": null,
                "tipoDatoId": {
                    "tipoDatoId": 2,
                    "descripcion": "VARCHAR",
                    "sinonimo": "VARCHAR"
                },
                "cantidadCaracteresCampo": 100,
                "tipoSeleccionId": {
                    "tipoSeleccionId": 2,
                    "descripcion": "Múltiple"
                },
                "campoURL": null,
                "nombreDocumento": null,
                "extension": null
              },
              {
                "campoId": 31,
                "nombre": "documento",
                "descripcion": "Nombre Usuario",
                "label": "Documento",
                "tipoCampoId": {
                    "tipoCampoId": 3,
                    "descripcion": "Documento"
                },
                "placeholder": null,
                "value": "",
                "icon": null,
                "click": null,
                "items": "TipoIdentificacion",
                "objToDisplay": "",
                "help": null,
                "time": null, 
                "orden": null,
                "tipoDatoId": {
                    "tipoDatoId": 2,
                    "descripcion": "VARCHAR",
                    "sinonimo": "VARCHAR"
                },
                "cantidadCaracteresCampo": 100,
                "tipoSeleccionId": {
                    "tipoSeleccionId": 2,
                    "descripcion": "Múltiple"
                },
                "campoURL": null,
                "nombreDocumento": null,
                "extension": null
              }
              ,
              {
                    "campoId": 32,
                    "nombre": "Cedula",
                    "descripcion": "Cedula del Solicitante",
                    "label": "Nombre Label",
                    "tipoCampoId": {
                        "tipoCampoId": 5,
                        "descripcion": "Checkbox"
                    },
                    "placeholder": null,
                    "value": null,
                    "icon": null,
                    "click": null,
                    "items": "TipoIdentificacion",
                    "objToDisplay": "",
                    "help": null,
                    "time": null, 
                    "orden": null,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": {
                        "tipoSeleccionId": 2,
                        "descripcion": "Múltiple"
                    },
                    "campoURL": null,
                    "nombreDocumento": null,
                    "extension": null,
                    "tablaMaestra": {
                        "nombreTabla": "TipoIdentificacion",
                        "activo": true,
                        "descripcion": "Tipo de Identificación",
                        "camposTablaMaestra": null,
                        "lstValoresTablaMaestra": null,
                        "lstRegValoresTablaMaestraDTO": [{
                                "id": 1,
                                "codigo": "C",
                                "descripcion": "Cédula",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 2,
                                "codigo": "p",
                                "descripcion": "Pasaporte",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    }
                }
                ,
                {
                    "campoId": 33,
                    "nombre": "ciudad",
                    "descripcion": "Ciudad actual",
                    "label": "Ciudad",
                    "tipoCampoId": {
                        "tipoCampoId": 2,
                        "descripcion": "Select"
                    },
                    "placeholder": null,
                    "value": null,
                    "icon": null,
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": null,
                    "time": null, 
                    "orden": null,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": {
                        "tipoSeleccionId": 2,
                        "descripcion": "Múltiple"
                    },
                    "campoURL": null,
                    "nombreDocumento": null,
                    "extension": null,
                    "tablaMaestra": {
                        "nombreTabla": "TipoIdentificacion",
                        "activo": true,
                        "descripcion": "Tipo de Identificación",
                        "camposTablaMaestra": null,
                        "lstValoresTablaMaestra": null,
                        "lstRegValoresTablaMaestraDTO": [{
                                "id": 1,
                                "codigo": "10001",
                                "descripcion": "Bogota",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 2,
                                "codigo": "10005",
                                "descripcion": "Cali",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    }
                }
                ,
                {
                  "campoId": 33,
                  "nombre": "estadiCivil",
                  "descripcion": "Estadi Civil",
                  "label": "Estadi Civil",
                  "tipoCampoId": {
                      "tipoCampoId": 4,
                      "descripcion": "Radio Button"
                  },
                  "placeholder": null,
                  "value": null,
                  "icon": null,
                  "click": null,
                  "items": "",
                  "objToDisplay": "",
                  "help": null,
                  "time": null, 
                  "orden": null,
                  "tipoDatoId": {
                      "tipoDatoId": 2,
                      "descripcion": "VARCHAR",
                      "sinonimo": "VARCHAR"
                  },
                  "cantidadCaracteresCampo": 100,
                  "tipoSeleccionId": {
                      "tipoSeleccionId": 2,
                      "descripcion": "Múltiple"
                  },
                  "campoURL": null,
                  "nombreDocumento": null,
                  "extension": null,
                  "tablaMaestra": {
                      "nombreTabla": "TipoIdentificacion",
                      "activo": true,
                      "descripcion": "Tipo de Identificación",
                      "camposTablaMaestra": null,
                      "lstValoresTablaMaestra": null,
                      "lstRegValoresTablaMaestraDTO": [{
                              "id": 1,
                              "codigo": "casado",
                              "descripcion": "Casado",
                              "activo": true,
                              "tramiteId": 1
                          }, {
                              "id": 2,
                              "codigo": "soltero",
                              "descripcion": "Soltero",
                              "activo": true,
                              "tramiteId": 1
                          }
                      ],
                  }
              }
            ],
            "lstCampos": null
        }
    ],
};


  constructor( private _builder: FormBuilder ) { 

      this.fields = this.formData.lstBloques[0].lstCamposDTO;
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

      if( field.tipoCampoId.tipoCampoId == "5") {

        field.tablaMaestra.lstRegValoresTablaMaestraDTO.forEach( internalField => {

          Object.defineProperty(objForm,internalField.codigo,{
            value: [''], 
            writable : true,
            enumerable : true
          });

        });
        console.log('Entra');

      } else {

        Object.defineProperty(objForm,field.nombre,{
          value:[field.value], 
          writable : true,
          enumerable : true
        });

      }

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

      return false;
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
