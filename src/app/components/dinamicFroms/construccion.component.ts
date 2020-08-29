import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FieldsService } from '../../services/fields.service';
import { ValidationFieldsService } from 'src/app/services/validation-fields.service';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html'
})
export class ConstruccionComponent {

  form: FormGroup;
  fields = [];
  validations = [];
  formData: any;

  constructor( 
    private _fields : FieldsService
    ,private _validations: ValidationFieldsService
    ,private _builder: FormBuilder ) { 
      this.validations = this._validations.getValidations();
      this.formData = this._fields.getFields();
      this.formData.lstBloques.forEach( bloque => {
          bloque.lstCamposDTO.forEach( field => {
            this.fields.push(field);
          });
      });
      this. generateObjetFrom();

  }

  generateObjetFrom() {

    this._fields.data();

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
          value:[field.value, this.constructionValidations(field.campoId) ], 
          writable : true,
          enumerable : true
        });

      }

    });

    this.form = this._builder.group(objForm);
  }

  constructionValidations( idField ) {

    var validation:any = this.searchValidation(idField);
    var validations = [];

    if( validation.expresionRegular != null ) {
      validations.push( Validators.pattern( validation.expresionRegular ) );
    }

    if( validation.maxCaracter != null ) {
      validations.push( Validators.maxLength(validation.maxCaracter) );
    }

    if( validation.minCaracter != null ) {
      validations.push( Validators.minLength(validation.maxCaracter) );
    }

    if( validation.requerido != null ) {
      if( validation.requerido == "true") {
        validations.push( Validators.required );
      }  
    }

    if(validations.length > 1) {

      return Validators.compose(validations);

    } else {

      return validations[0];

    }

  }

  validateConditionField( condition ) {

      var conditions = condition.split("AND");
      
      var response = true;
      console.log(this.form.get('producto').value);
      conditions.forEach(condition => {
        
        var keyValue = condition.split("=");
        
        // if(this.form.get(keyValue[0].trim()).value != keyValue[1].trim()) {
        //   response =  false;
        // }

      });

      return response;

  }
 
  searchField(idField) {

    var fieldFound = null;
    this.fields.forEach(field => {
      if(field.campoId == idField) { fieldFound = field;}
    });
    return fieldFound;

  }
  
  searchValidation(idField) {

    var validationFound = {};

    this.validations.forEach(validation => {
      if(validation.campoId == idField) {
        validationFound = validation;
     
      }
    });

    return validationFound;

  } 

  invalidate(nameFormControl:any) {
    
    var responseValidare = {"value": false, "message": "" };
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
