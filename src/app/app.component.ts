import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  
  passwordLength = 0;
  useLetters = false;
  useNumbers =  false;
  useSymbols = false;
  password = ''
  errMessage = '';
 
  private generatePassword = ():string  => {
    if(!this.useLetters && !this.useNumbers && !this.useSymbols) {
      this.errMessage = "Please select one or more from Letters, Numbers and Symbols";
      return '';
    }

    if(!this.passwordLength || this.passwordLength < 1) {
      this.errMessage = 'Please enter a password length greater than 0'
      return ''
    }

    this.errMessage = '';
    let newPassword = '';
    const lexicon = this.buildLexicon()

    for(let i = 0; i < this.passwordLength; i++) {
      newPassword = newPassword + this.generateCharacter(lexicon);
    }

    return newPassword;
  }

  private buildLexicon = (): string => {
    const numbers = '1234567890';
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!£$%^&*@~#()";
    let pickList: string = ''
    if(this.useLetters) {
      pickList += letters;
    }
    if(this.useNumbers) {
      pickList += numbers;
    }
    if(this.useSymbols) {
      pickList += symbols;
    }
    return pickList;
  }

  private generateCharacter = (lexicon: string):string => {

    this.errMessage = '';
    const index = Math.floor(Math.random() * lexicon.length)
    return lexicon[index];
  }

  onChangeUseLetters = ():void => {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers = ():void => {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols = ():void => {
    this.useSymbols = !this.useSymbols
  }

  onChangePasswordLength = (event: EventTarget | null):void => {
    if(!event) {
      return;
    }
    const value: number = parseInt((event as HTMLInputElement).value)
    if(typeof value === 'number') {
      this.passwordLength = value;
    }
  }

  onButtonClick = ():void =>  {
    this.password = this.generatePassword();
  }

  isDisabled = ():boolean => {
   return !(this.passwordLength > 0 && (this.useLetters || this.useNumbers || this.useSymbols));
  }
}
