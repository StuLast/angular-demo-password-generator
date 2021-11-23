import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  passwordLength = 0;
  useLetters = true;
  useNumbers =  false;
  useSymbols = false;

  private generatePassword = ():string => {
    console.log(this.passwordLength)
    let newPassword = '';

    for(let i = 0; i < this.passwordLength; i++) {
      console.log(this.generateCharacter());
      newPassword = newPassword + this.generateCharacter();
    }

    return newPassword;
  }

  private generateCharacter = (): string => {
    
    return "a";
  }

  onButtonClick = ():void =>  {
    this.password = this.generatePassword();
    console.log(this.password)
  }
}
