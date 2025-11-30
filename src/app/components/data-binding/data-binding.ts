import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  courseName="Angulaar v-21 Full Course";
  cityName="Sirajganj";
  className="primary";

  showWelcomeMessage(){
    alert("Welcome to Angular 21")
  }

//EventBinding
onStateChanged(){
  alert("State Changed");
}
changesCourseName(text:string){
  this.courseName=text;
}

}
