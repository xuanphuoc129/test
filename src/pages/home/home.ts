import { Component} from '@angular/core';
import { NavController,AlertController,ModalController } from 'ionic-angular';
import { JsonControllerProvider } from '../../providers/json-controller/json-controller';
import { Users } from '../other/other';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  food: any;
  restaurant: string = "Bistro dancer";
  constructor(
    public modalCtrl : ModalController,
    public mAlertController: AlertController,
    public mJsonControllerProvider: JsonControllerProvider,
    public navCtrl: NavController) {
      this.food = {
        id: "BS-205",
        name: "Thịt bò áp chảo",
        img: "./assets/imgs/logo.png",
        price: 99000
      }
  }
  list: Array<Users> = [];
  ionViewDidLoad(){
  }
  
  showModal(){
    let modal = this.modalCtrl.create("OtherPage");
    modal.present();
    modal.onDidDismiss(data=>{
      if(data){
        this.list.push(data);
      }
    })
    console.log(this.list);
    
  }

  goToDetail(item){
    this.navCtrl.push("DetailPage",{user: item});
  }

}
