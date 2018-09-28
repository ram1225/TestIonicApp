import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage{
  private data: string = "title";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
    //this.data=this.isEmpty(this.navParams.get("data"))?this.data:this.navParams.get("data");
    if (!this.isEmpty(this.navParams.get("data")))
    {
      this.data = this.navParams.get("data");
      console.log('got data ',this.data);
    }
  }


  private isEmpty(str) {
    return (!str || 0 === str.length);
  }

  private goToHomeAgain(){
    this.navCtrl.popToRoot();
  }
}
