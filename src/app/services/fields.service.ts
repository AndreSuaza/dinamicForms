import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  fields = {
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
                "icon": null, //Pendiente
                "click": null, 
                "items": "TipoIdentificacion",
                "objToDisplay": "", //??
                "help": "en este campo va el nombre",
                "time": null, 
                "orden": null,
                "tipoDatoId": {
                    "tipoDatoId": 2,
                    "descripcion": "VARCHAR",
                    "sinonimo": "text"
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
                                "codigo": "cedula",
                                "descripcion": "Cédula",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 2,
                                "codigo": "pasaporte",
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
                    "value": "10005", //el value va la opcion predeterminada
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
                  "value": "casado",
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

  constructor() {
    console.log('servicio listo para usar');
   }
   
   public getFields() {

    return this.fields;

   }


}
