import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FieldsService } from '../services/fields.service';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html'
})
export class ConstruccionComponent {

  form: FormGroup;

  fields = [];
  formData;


  constructor( 
    private _fields : FieldsService
    ,private _builder: FormBuilder ) { 

      this.formData = this._fields.getFields();
      this.fields = this.formData.lstBloques[0].lstCamposDTO;
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
        console.log('Entra');

      } else {

        Object.defineProperty(objForm,field.nombre,{
          value:[field.value, Validators.required], 
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

  validate(nameFormControl) {
    
    if(this.form.get(nameFormControl).touched) {

      if(this.form.get(nameFormControl).hasError('required')){
        return 'Esta campo es requerido';
      }

    }
    
  }

  enviar(values){
    console.log(values);
  }

}
