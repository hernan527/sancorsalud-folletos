import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../home/home-products/home-products.component';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-clinicas-list-group',
  templateUrl: './clinicas-list-group.component.html',
  styleUrls: ['./clinicas-list-group.component.css']
})
export class ClinicasListGroupComponent implements OnInit {
  selectedUsers: any;
  matTabLabels = ['TODAS','CABA', 'GBA-Sur', 'GBA-Norte', 'GBA-Oeste','La Plata'];
  
  Users: USERS[] = this.data.clinicas;
  

  // Users = {
  //   users: [
  //     {
  //       id: 'person1',
  //       first_name: 'Mike',
  //       last_name: 'Patty',
  //       city: 'LA'
  //     },
  //     {
  //       id: 'person2',
  //       first_name: 'Mike2',
  //       last_name: 'Patty2',
  //       city: 'LA'
  //     },
  //     {
  //       id: 'person3',
  //       first_name: 'Mike3',
  //       last_name: 'Patty3',
  //       city: 'SF'
  //     },
  //     {
  //       id: 'person4',
  //       first_name: 'Mike4',
  //       last_name: 'Patty4',
  //       city: 'SF'
  //     }
  //   ]
  // };

  constructor(public dialogRef: MatDialogRef<ClinicasListGroupComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
// console.log(this.Users);
}


  ngOnInit() {
    this.selectedUsers = this.data.clinicas;
    console.log(this.data.name),
    console.log(this.data.price),
    console.log(this.data.category),
    console.log(this.data.rating),
    console.log(this.data.clinicas),
    console.log(this.data.clinicasArrayObjets),
    console.log(this.data.clinicasmap),
    console.log(this.data.entidades),
    console.log(this.data.producto)
  }

  tabChanged(event: any) {
    console.log(event);
    if (event.index != 0) {
      const filterText = event.tab.textLabel;
      this.selectedUsers = this.data.clinicas.filter((clinicas: any) => {
        return clinicas.region === filterText;
      });
      console.log(this.selectedUsers);
    } else {
      this.selectedUsers = this.data.clinicas;
    }
  }
}
