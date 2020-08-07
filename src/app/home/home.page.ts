import { Component } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sim: Sim) {
    this.sim.hasReadPermission().then(
      (info) => alert('Has permission: ' + JSON.stringify(info))
    );
    // this.sim.requestReadPermission().then(
    //   () => alert('Permission granted'),
    //   () => alert('Permission denied')
    // );
    this.sim.requestReadPermission().then((data) => {
      alert(data);
      this.sim.getSimInfo().then(
        (info) => {
          const obj = JSON.parse(JSON.stringify(info));
          alert('Sim info: ' + obj.cards[0].simSerialNumber);
          // alert('Sim info: ' + JSON.stringify(info.deviceId));
          // obj.myNo = obj.deviceId;
          alert('Sim info: ' + obj.cards[0].simSerialNumber);
        },
        (err) => alert('Unable to get sim info: ' + err)
      );
    });
    // this.sim.getSimInfo().then(
    //   (info) => {
    //     const obj = JSON.parse(JSON.stringify(info));
    //     alert('Sim info: ' + obj.simSerialNumber);
    //     // alert('Sim info: ' + JSON.stringify(info.deviceId));
    //     obj.myNo = obj.deviceId;
    //     alert('Sim info: ' + obj.myNo + obj.simSerialNumber);
    //   },
    //   (err) => alert('Unable to get sim info: ' + err)
    // );
  }

}
