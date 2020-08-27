import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html'
})
export class ConstruccionComponent {

  form: FormGroup;
  fields = [];
  formData: any;

  constructor( 
    private _fields : FieldsService
    ,private _builder: FormBuilder ) { 

      this.formData = this._fields.getFields();
      this.formData.lstBloques.forEach( bloque => {
          bloque.lstCamposDTO.forEach( field => {
            this.fields.push(field);
          });
      });
      this. generateObjetFrom();

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

      } else {

        Object.defineProperty(objForm,field.nombre,{
          value:[field.value], 
          writable : true,
          enumerable : true
        });

      }

    });

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
          response =  true;
        }

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

  invalidate(nameFormControl:any) {
    
    var responseValidare = {"value": false, "message": "h" };

    if(this.form.get(nameFormControl).touched) {

      if(this.form.get(nameFormControl).hasError('required')){
        responseValidare.value = true;
        responseValidare.message = 'Esta campo es requerido';
        
      }

    }
    return responseValidare; 
  }

  enviar(values){
    console.log(values);
  }

}
