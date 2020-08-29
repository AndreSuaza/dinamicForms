import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  fields = {
    "formularioId": 1,
    "nombre": "Formulario de Solicitud de Crédito Hipotecario",
    "descripcion": "Dentro del Formulario de Solicitud de Crédito Hipotecario, se almacenara toda la información de cotizantes",
    "href": null,
    "activo": true,
    "tramiteId": {
        "tramiteId": 1,
        "descripcion": "Solicitud de Crédito Hipotecario"
    },
    "lstBloques": [{
            "bloqueId": 1,
            "nombre": "Datos Vivienda",
            "nombreTabla": "DatosVivienda",
            "lstCamposDTO": [{
                    "campoId": 1,
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
                    "help": "",
                    "time": "",
                    "orden": 0,
                    "tipoDatoId": {
                        "tipoDatoId": 1,
                        "descripcion": "INT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMTipoCatalogo",
                        "activo": true,
                        "descripcion": "Tabla para almacenar los tipos de productos",
                        "camposTablaMaestra": null,
                        "lstValoresTablaMaestra": null,
                        "lstRegValoresTablaMaestraDTO": [{
                                "id": 1,
                                "codigo": "VN",
                                "descripcion": "Vivienda Nueva",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 3,
                                "codigo": "VU",
                                "descripcion": "Vivienda Usada",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    },
                    "lstReglasValidacion": null
                }, {
                    "campoId": 2,
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
                    "help": "",
                    "time": "",
                    "orden": 1,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 3,
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
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 4,
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
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }
            ],
            "lstCampos": null
        }, {
            "bloqueId": 2,
            "nombre": "Datos Personales",
            "nombreTabla": "DatosPersonales",
            "lstCamposDTO": [{
                    "campoId": 5,
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
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMTipoIdentificacion",
                        "activo": true,
                        "descripcion": "Tabla para almacenar los tipos de documentos de identificación",
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
                    },
                    "lstReglasValidacion": null
                }, {
                    "campoId": 6,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 7,
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
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMGenero",
                        "activo": true,
                        "descripcion": null,
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
                    },
                    "lstReglasValidacion": null
                }, {
                    "campoId": 8,
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
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMEstadoCivil",
                        "activo": true,
                        "descripcion": null,
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
                    },
                    "lstReglasValidacion": null
                }, {
                    "campoId": 9,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 10,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 11,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 12,
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
                        "sinonimo": "datetime-local"
                    },
                    "cantidadCaracteresCampo": 6,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 13,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 14,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 15,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 16,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 17,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 18,
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }
            ],
            "lstCampos": null
        }, {
            "bloqueId": 3,
            "nombre": "Datos Laborales",
            "nombreTabla": "DatosLaborales",
            "lstCamposDTO": [{
                    "campoId": 19,
                    "nombre": "ingreso",
                    "descripcion": "Ingresos",
                    "label": "Ingresos ",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Ingresos",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 0,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 20,
                    "nombre": "empresaDondeLabora",
                    "descripcion": "Empresa Donde Labora",
                    "label": "Empresa Donde Labora",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Empresa Donde Labora",
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 500,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 21,
                    "nombre": "tipoEmpresa",
                    "descripcion": "Tipo de empresa",
                    "label": "Tipo de empresa",
                    "tipoCampoId": {
                        "tipoCampoId": 4,
                        "descripcion": "Radio Button"
                    },
                    "placeholder": "Tipo de empresa",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "TMTipoEmpresa",
                    "objToDisplay": "descripcion",
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
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": {
                        "nombreTabla": "TMTipoEmpresa",
                        "activo": true,
                        "descripcion": "Tabla para almacenar los tipos de empresa",
                        "camposTablaMaestra": null,
                        "lstValoresTablaMaestra": null,
                        "lstRegValoresTablaMaestraDTO": [{
                                "id": 1,
                                "codigo": "EP",
                                "descripcion": "Empresa Privada",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 2,
                                "codigo": "G",
                                "descripcion": "Gobierno",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 3,
                                "codigo": "D",
                                "descripcion": "Docente",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 4,
                                "codigo": "PB",
                                "descripcion": "Personal de Blanco",
                                "activo": true,
                                "tramiteId": 1
                            }, {
                                "id": 5,
                                "codigo": "J",
                                "descripcion": "Jubilado",
                                "activo": true,
                                "tramiteId": 1
                            }
                        ],
                    },
                    "lstReglasValidacion": null
                }
            ],
            "lstCampos": null
        }, {
            "bloqueId": 4,
            "nombre": "Datos Financiamiento",
            "nombreTabla": "DatosFinanciamiento",
            "lstCamposDTO": [{
                    "campoId": 22,
                    "nombre": "formaPago",
                    "descripcion": "Forma de Pago",
                    "label": "Forma de Pago",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Forma de Pago",
                    "value": "Descuento Directo",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 0,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 23,
                    "nombre": "seguros",
                    "descripcion": "Seguros",
                    "label": "Seguros",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Seguros",
                    "value": "Colectivos",
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 500,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 24,
                    "nombre": "montoFinanciar",
                    "descripcion": "Monto a Financiar",
                    "label": "Monto a Financiar",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Monto a Financiar",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 2,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 25,
                    "nombre": "abonoWS",
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
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 26,
                    "nombre": "plazo",
                    "descripcion": "Plazo",
                    "label": "Plazo",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Plazo",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 4,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 27,
                    "nombre": "numeroSolicitud",
                    "descripcion": "Numero de Solicitud",
                    "label": "Numero de Solicitud",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Numero de Solicitud",
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 100,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 28,
                    "nombre": "capitalInteres",
                    "descripcion": "Capital + Interés",
                    "label": "Capital + Interés",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Capital + Interés",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 5,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 29,
                    "nombre": "mensualidad",
                    "descripcion": "Mensualidad",
                    "label": "Mensualidad",
                    "tipoCampoId": {
                        "tipoCampoId": 1,
                        "descripcion": "Input"
                    },
                    "placeholder": "Mensualidad",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 6,
                    "tipoDatoId": {
                        "tipoDatoId": 6,
                        "descripcion": "FLOAT",
                        "sinonimo": "number"
                    },
                    "cantidadCaracteresCampo": 10,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": "",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }
            ],
            "lstCampos": null
        }, {
            "bloqueId": 5,
            "nombre": "Documentación Requerida",
            "nombreTabla": "Documentacion",
            "lstCamposDTO": [{
                    "campoId": 30,
                    "nombre": "docEvidenciaIngresos",
                    "descripcion": "Doc Adjuntos - Evidencia de Ingresos",
                    "label": "Doc Adjuntos - Evidencia de Ingresos",
                    "tipoCampoId": {
                        "tipoCampoId": 3,
                        "descripcion": "Documento"
                    },
                    "placeholder": "Doc Adjuntos - Evidencia de Ingresos",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 0,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 500,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": ".pdf",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 31,
                    "nombre": "docAvaluo",
                    "descripcion": "Doc Adjuntos – Avaluo",
                    "label": "Doc Adjuntos – Avaluo",
                    "tipoCampoId": {
                        "tipoCampoId": 3,
                        "descripcion": "Documento"
                    },
                    "placeholder": "Doc Adjuntos – Avaluo",
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 500,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": ".pdf",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 32,
                    "nombre": "docProformaBrochure",
                    "descripcion": "Doc Adjuntos – Proforma o Brochure",
                    "label": "Doc Adjuntos – Proforma o Brochure",
                    "tipoCampoId": {
                        "tipoCampoId": 3,
                        "descripcion": "Documento"
                    },
                    "placeholder": "Doc Adjuntos – Proforma o Brochure",
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
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 500,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": ".pdf",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }, {
                    "campoId": 33,
                    "nombre": "docDIP",
                    "descripcion": "Doc Adjuntos – DIP",
                    "label": "Doc Adjuntos – DIP",
                    "tipoCampoId": {
                        "tipoCampoId": 3,
                        "descripcion": "Documento"
                    },
                    "placeholder": "Doc Adjuntos – DIP",
                    "value": "",
                    "icon": "",
                    "click": null,
                    "items": "",
                    "objToDisplay": "",
                    "help": "",
                    "time": "",
                    "orden": 2,
                    "tipoDatoId": {
                        "tipoDatoId": 2,
                        "descripcion": "VARCHAR",
                        "sinonimo": "text"
                    },
                    "cantidadCaracteresCampo": 500,
                    "tipoSeleccionId": null,
                    "campoURL": null,
                    "nombreDocumento": "",
                    "extension": ".pdf",
                    "tablaMaestra": null,
                    "lstReglasValidacion": null
                }
            ],
            "lstCampos": null
        }
    ],
};


  constructor( private http: HttpClient) {
    console.log('servicio listo para usar');
   }
   
   public getFields() {

    return this.fields;

   }


   public getTest(id) {

    return this.http.get(`http://localhost/comunicacionTiendasPau/serviciosMercadolibre/test/${id}`);

   }

   public data() {

    this.getTest(23).subscribe( resp => {
        console.log( 'resp', resp )
    });

   }

}
