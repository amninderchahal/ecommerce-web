import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  private infoEmailAdress = 'info@ecommerce.com';
  private careerEmailAdress = 'career@ecommerce.com';
  private twitterLink = '#';
  private instagramLink = '#';
  private mediumLink = '#';
  private pinterestLink = '#';

  constructor() {}

  get() {
    return {
      infoEmail: this.infoEmailAdress,
      careerEmail: this.careerEmailAdress,
      twitter: this.twitterLink,
      instagram: this.instagramLink,
      medium: this.mediumLink,
      pinterest: this.pinterestLink
    };
  }
}
