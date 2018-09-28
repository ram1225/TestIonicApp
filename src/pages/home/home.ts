import { BuyoutPage } from './../buyout/buyout';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   goToBuyOutPage(data: string){
    
    this.navCtrl.push(BuyoutPage,{data: data},{
     
      duration: 500,
      easing: 'ease-in'
    });
  }

}
