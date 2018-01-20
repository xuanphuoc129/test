import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Users{
  username: string;
  password: string;
}
@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {
  user: Users = {
    username: "",
    password: ""
  };
  constructor(
    private mViewController: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
      this.user = {
        username: "",
        password: ""
      };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  pop(){
    this.mViewController.dismiss();
  }

  save(){
    console.log(this.user);
    
    this.mViewController.dismiss(this.user);
  }
}
