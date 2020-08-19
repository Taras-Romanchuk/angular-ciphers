import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ciphers';
  inputText: string;
  outputText: string;
  shift: number;

  encrypt(formValues){
    this.inputText = formValues.inputText;
    this.shift = formValues.shift;
    this.outputText = '';
    for (var i = 0; i < this.inputText.length; i++){
      if (this.inputText[i] === ' '){
        this.outputText += ' ';
      }
      else{
        var newCharCode = Number(this.inputText[i].charCodeAt(0)) + this.shift;
        if (newCharCode < 97 || newCharCode > 122) {
          newCharCode -= 26;
        }
        this.outputText += String.fromCharCode(newCharCode);
      }
    }
  }
}
