import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  age: string="28 years old";
  address: string="East Islip, Ny";
  picture: string="https://marketplace.canva.com/Foblk/MAEItxFoblk/1/tl/canva-happy-man-icon-MAEItxFoblk.png";

  projectsBool: boolean=false;
  descriptionBool: boolean=false;
  experienceBool: boolean=false;

  image1: string="https://marketplace.canva.com/Foblk/MAEItxFoblk/1/tl/canva-happy-man-icon-MAEItxFoblk.png";
  backgroundImage: string="https://mixkit.imgix.net/videos/preview/mixkit-spectacular-fluorescent-colored-nebulae-in-universe-31596-0.jpg?q=80&auto=format%2Ccompress&w=460";

  link11: string= "http://34.238.32.159:8080/Intersteller/#/home";
  link12: string="https://github.com/Jamesferro76/FinalProject";

  link21: string= "https://github.com/Jamesferro76/EventTrackerProject";
  link22: string="http://34.238.32.159:8080/it3/#/home";

  link31: string= "https://github.com/Jamesferro76/MidtermProjectJames";
  link32: string="http://34.238.32.159:8080/InsideScoop/logout.do";

  link41: string= "https://github.com/Rift131/SpringMVCFilmCRUD";
  link42: string="http://34.238.32.159:8080/MVCFilmSite/Index.html";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  projectsToggle(){
    this.projectsBool=true;
    this.descriptionBool=false;
    this.experienceBool=false;
  }
  descriptionToggle(){
    this.projectsBool=false;
    this.descriptionBool=true;
    this.experienceBool=false;
  }
  experienceToggle(){
    this.projectsBool=false;
    this.descriptionBool=false;
    this.experienceBool=true;
  }



}
