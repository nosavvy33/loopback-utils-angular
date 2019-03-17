  import { Component } from '@angular/core';
  import { LoopBackConfig } from '../../sdk/index';
  import { Owner } from '../../sdk/models/Owner';
  import { OwnerApi } from '../../sdk/services/custom/Owner';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'somethingfront';
    owner: Owner;

    constructor(private ownerApi: OwnerApi){
      LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
      LoopBackConfig.setApiVersion('api');
    }

    createOwner(){
      this.owner = new Owner();
      this.owner.name = "No";
      this.owner.surname = "Savvy";
      this.ownerApi.patchOrCreate(this.owner)
          .subscribe(res => console.log(JSON.stringify(res)));
    }

  }
