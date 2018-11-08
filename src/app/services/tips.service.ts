import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TipsPage } from '../modal/tips/tips.page';
import { modalAlertEnter, modalAlertLeave } from '../modal/modal.style';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  constructor(private modalController: ModalController) {}

  async alert(message) {
    const modal = await this.modalController.create({
      component: TipsPage,
      enterAnimation: modalAlertEnter,
      leaveAnimation: modalAlertLeave,
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        message: message
      }
    });
    return await modal.present();
  }
}