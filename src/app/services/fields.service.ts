import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  fields = {
    "formularioId": 70,
    "nombre": "Formulario de Solicitud de Credito Hipotecario",
    "descripcion": "Dentro del Formulario de Solicitud de Credito Hipotecario, se almacenara toda la información de cotizantes",
    "href": null,
    "activo": true,
    "lstBloques": [{
            "bloqueId": 81,
            "nombre": "Datos Vivienda",
            "nombreTabla": "DatosVivienda",
            "lstCamposDTO": [
                {
                    "campoId": 202,
                    "nombre": "producto",
                    "descripcion": "producto",
                    "label": "Producto",
                    "tipoCampoId": {
                        "tipoCampoId": 4,
                        "descripcion": "Radio Button"
                    },
                    "placeholder": "Producto",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "TMTipoCatalogo",
                    "objToDisplay": "descripcion",
                    "help": "Por favor indique el producto",
                    "time": "",
                    "orden": 0,
                    "tipoDatoId": {
                        "tipoDatoId": 1,
                        "descripcion": "INT",
                        "sinonimo": "INT"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMTipoCatalogo",
                        "activo": true,
                        "descripcion": "Tipo Catalogo de productos del banco",
                        "camposTablaMaestra": null,
                        "lstValoresTablaMaestra": null,
                        "lstRegValoresTablaMaestraDTO": [{
                                "id": 1,
                                "codigo": "VN",
                                "descripcion": "Vivienda Nueva",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 2,
                                "codigo": "VU",
                                "descripcion": "Vivienda Usada",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    }
                }, {
                    "campoId": 203,
                    "nombre": "precioVenta",
                    "descripcion": "Precio de Venta del Inmueble",
                    "label": "Precio de Venta",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Precio de Venta",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "Por favor indique el Precio de Venta",
                    "time": "",
                    "orden": 1,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 204,
                    "nombre": "anosFinanciamiento",
                    "descripcion": "Años de Financiamiento",
                    "label": "Años de Financiamiento",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Años de Financiamiento",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 2,
                    "tipoDatoId": {
                        "tipoDatoId": 1,
                        "descripcion": "INT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 205,
                    "nombre": "abono",
                    "descripcion": "Abono",
                    "label": "Abono",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Abono",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 3,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "FLOAT"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }
            ],
            "lstCampos": null
        }, {
            "bloqueId": 82,
            "nombre": "Datos Personales",
            "nombreTabla": "DatosPersonales",
            "lstCamposDTO": [{
                    "campoId": 206,
                    "nombre": "TipoIdentificacion",
                    "descripcion": "Tipo de Identificación",
                    "label": "Tipo de Identificación",
                    "tipoCampoId": {
                        "tipoCampoId": 4,
                        "descripcion": "Radio Button"
                    },
                    "placeholder": "Tipo de Identificación",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "TMTipoIdentificacion",
                    "objToDisplay": "descripcion",
                    "help": "",
                    "time": "",
                    "orden": 0,
                    "tipoDatoId": {
                        "tipoDatoId": 1,
                        "descripcion": "INT",
                        "sinonimo": "INT"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMTipoIdentificacion",
                        "activo": true,
                        "descripcion": "Tipo Identificación",
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
                                "codigo": "P",
                                "descripcion": "Pasaporte",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    }
                }, {
                    "campoId": 207,
                    "nombre": "numeroIdentificacion",
                    "descripcion": "Número de Documento de Identidad Personal",
                    "label": "Número de Documento de Identidad Personal",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Número de Documento de Identidad Personal",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 1,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 208,
                    "nombre": "sexo",
                    "descripcion": "Sexo",
                    "label": "Sexo",
                    "tipoCampoId": {
                        "tipoCampoId": 4,
                        "descripcion": "Radio Button"
                    },
                    "placeholder": "Sexo",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "TMGenero",
                    "objToDisplay": "descripcion",
                    "help": "",
                    "time": "",
                    "orden": 2,
                    "tipoDatoId": {
                        "tipoDatoId": 1,
                        "descripcion": "INT",
                        "sinonimo": "INT"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMGenero",
                        "activo": true,
                        "descripcion": "Genero",
                        "camposTablaMaestra": null,
                        "lstValoresTablaMaestra": null,
                        "lstRegValoresTablaMaestraDTO": [{
                                "id": 1,
                                "codigo": "M",
                                "descripcion": "Masculino",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 2,
                                "codigo": "F",
                                "descripcion": "Femenino",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    }
                }, {
                    "campoId": 209,
                    "nombre": "estadoCivil",
                    "descripcion": "Estado Civil",
                    "label": "Estado Civil",
                    "tipoCampoId": {
                        "tipoCampoId": 4,
                        "descripcion": "Radio Button"
                    },
                    "placeholder": "Estado Civil",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "TMEstadoCivil",
                    "objToDisplay": "descripcion",
                    "help": "",
                    "time": "",
                    "orden": 3,
                    "tipoDatoId": {
                        "tipoDatoId": 1,
                        "descripcion": "INT",
                        "sinonimo": "INT"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMEstadoCivil",
                        "activo": true,
                        "descripcion": "Estado Civil",
                        "camposTablaMaestra": null,
                        "lstValoresTablaMaestra": null,
                        "lstRegValoresTablaMaestraDTO": [{
                                "id": 1,
                                "codigo": "S",
                                "descripcion": "Soltero (a)",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 2,
                                "codigo": "C",
                                "descripcion": "Casado (a)",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 3,
                                "codigo": "D",
                                "descripcion": "Divorciado (a)",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 4,
                                "codigo": "V",
                                "descripcion": "Viudo (a)",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    }
                }, {
                    "campoId": 210,
                    "nombre": "primerNombre",
                    "descripcion": "Primer Nombre",
                    "label": "Primer Nombre",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Primer Nombre",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 4,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 211,
                    "nombre": "primerApellido",
                    "descripcion": "Primer Apellido",
                    "label": "Primer Apellido",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Primer Apellido",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 5,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 212,
                    "nombre": "apellidoCasada",
                    "descripcion": "Apellido de Casada",
                    "label": "Apellido de Casada",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Apellido de Casada",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 6,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 213,
                    "nombre": "fechaNacimiento",
                    "descripcion": "Fecha de Nacimiento",
                    "label": "Fecha de Nacimiento",
                    "tipoCampoId": {
                        "tipoCampoId": 6,
                        "descripcion": "Datapicker"
                    },
                    "placeholder": "Fecha de Nacimiento",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 7,
                    "tipoDatoId": {
                        "tipoDatoId": 4,
                        "descripcion": "DATETIME",
                        "sinonimo": "date"
                    },
                    "cantidadCaracteresCampo": 6,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 214,
                    "nombre": "telefonoResidencial",
                    "descripcion": "Teléfono Residencial",
                    "label": "Teléfono Residencial",
                    "tipoCampoId": {
                        "tipoCampoId": 9,
                        "descripcion": "Telefono"
                    },
                    "placeholder": "Teléfono Residencial",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 8,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 215,
                    "nombre": "telefonoOficina",
                    "descripcion": "Teléfono Oficina",
                    "label": "Teléfono Oficina",
                    "tipoCampoId": {
                        "tipoCampoId": 9,
                        "descripcion": "Telefono"
                    },
                    "placeholder": "Teléfono Oficina",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 9,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 216,
                    "nombre": "telefonoPersonal",
                    "descripcion": "Teléfono Personal",
                    "label": "Teléfono Personal",
                    "tipoCampoId": {
                        "tipoCampoId": 9,
                        "descripcion": "Telefono"
                    },
                    "placeholder": "Teléfono Personal",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 10,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 217,
                    "nombre": "telefonoFamiliar",
                    "descripcion": "Teléfono Familiar",
                    "label": "Teléfono Familiar",
                    "tipoCampoId": {
                        "tipoCampoId": 9,
                        "descripcion": "Telefono"
                    },
                    "placeholder": "Teléfono Familiar",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 11,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 218,
                    "nombre": "correoElectronicoPrincipal",
                    "descripcion": "Correo Electrónico Principal",
                    "label": "Correo Electrónico Principal",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Correo Electrónico Principal",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 12,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
                }, {
                    "campoId": 219,
                    "nombre": "correoElectronicoSecundario",
                    "descripcion": "Correo Electrónico Secundario",
                    "label": "Correo Electrónico Secundario",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Correo Electrónico Secundario",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 13,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "VARCHAR"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": "",
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null
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
