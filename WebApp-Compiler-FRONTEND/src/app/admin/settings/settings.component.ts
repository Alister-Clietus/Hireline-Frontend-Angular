import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  theme: string = 'light';
  fontSize: number = 16;
  fontFamily: string = 'Arial, sans-serif';
  selectedColor: string = '#4CAF50';
  language: string = 'en';
  notificationsEnabled: boolean = true;
  privacyPublic: boolean = true;
  timeZone: string = 'UTC';
  dateFormat: string = 'DD-MM-YYYY';
  autoLogoutTime: number = 15;

  colorThemes = [
    { name: 'Green', value: '#4CAF50' },
    { name: 'Blue', value: '#2196F3' },
    { name: 'Red', value: '#F44336' },
    { name: 'Purple', value: '#9C27B0' }
  ];

  fontFamilies = [
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Times New Roman', value: '"Times New Roman", serif' },
    { name: 'Courier New', value: '"Courier New", monospace' },
    { name: 'Verdana', value: 'Verdana, sans-serif' }
  ];

  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' }
  ];

  timeZones = [
    'UTC', 'GMT', 'PST', 'EST', 'IST', 'CST'
  ];

  dateFormats = [
    'DD-MM-YYYY', 'MM-DD-YYYY', 'YYYY-MM-DD'
  ];

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.className = this.theme;
  }

  changeFontSize(event: any) {
    this.fontSize = event.target.value;
    document.documentElement.style.setProperty('--font-size', `${this.fontSize}px`);
  }

  changeFontFamily(event: any) {
    this.fontFamily = event.target.value;
    document.documentElement.style.setProperty('--font-family', this.fontFamily);
  }

  changeColorScheme(color: string) {
    this.selectedColor = color;
    document.documentElement.style.setProperty('--primary-color', this.selectedColor);
  }

  changeLanguage(event: any) {
    this.language = event.target.value;
    console.log('Language changed to:', this.language);
  }

  toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;
  }

  togglePrivacy() {
    this.privacyPublic = !this.privacyPublic;
  }

  changeAutoLogout(event: any) {
    this.autoLogoutTime = event.target.value;
  }
}
