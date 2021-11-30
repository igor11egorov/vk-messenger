import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Оля Сухова',
      img: 'https://sun1-22.userapi.com/s/v1/ig2/PtkgQc0lN0RUYjuhJVtTP_jh1Md0sJiuyFw16rnbFNpIrgBgIoYqukFarZbm4fyIXwdft2kKCdV3I0ShNJfftK4i.jpg?size=100x100&quality=96&crop=0,182,1585,1585&ava=1',
    },
    {
      id: 2,
      name: 'Андрей Забазнов',
      img: 'https://sun1-90.userapi.com/s/v1/ig2/OphvniDoqR_pAhHvRoMMBpHrMNcwBqNnfu2eLH6w-MB_DhTaFOnIDVq7UbZvG161mNAzzrDPgkg1Jw9QAGgLX4DG.jpg?size=100x100&quality=95&crop=76,255,359,359&ava=1',
    },
    {
      id: 3,
      name: 'Никита Сухов',
      img: 'https://sun1-55.userapi.com/s/v1/if1/sXi2h3yD4rEs3djVLBMgapSM5sFuenH_0_Ac6YH867RtVPAD8bNeYlZPw_h-wCO7aPEohP6h.jpg?size=100x100&quality=96&crop=2,0,1611,1611&ava=1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
