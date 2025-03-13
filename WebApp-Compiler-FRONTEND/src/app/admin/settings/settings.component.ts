import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  theme: string = 'light';
  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' }
  ];
  colorThemes = [
    { name: 'Blue', value: '#007bff' },
    { name: 'Green', value: '#28a745' },
    { name: 'Red', value: '#dc3545' },
    { name: 'Purple', value: '#6f42c1' }
  ];
  fontSize: number = 16;
  privacyPublic: boolean = true;
  timeZones: string[] = ['UTC', 'GMT', 'EST', 'PST', 'IST'];
  timeZone: string = 'UTC';
  fontFamilies = [
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Verdana', value: 'Verdana, sans-serif' },
    { name: 'Times New Roman', value: '"Times New Roman", serif' },
    { name: 'Courier New', value: '"Courier New", monospace' }
  ];
  notificationsEnabled: boolean = true;
  dateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'];
  dateFormat: string = 'MM/DD/YYYY';
  autoLogoutTime: number = 15;
  twoFactorAuthEnabled: boolean = false;

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
  }

  changeLanguage(event: any) {
    const selectedLang = event.target.value;
    console.log(`Language changed to: ${selectedLang}`);
  }

  changeColorScheme(color: string) {
    document.documentElement.style.setProperty('--theme-color', color);
    console.log(`Color scheme changed to: ${color}`);
  }

  changeFontSize(event: any) {
    this.fontSize = event.target.value;
    document.body.style.fontSize = `${this.fontSize}px`;
    console.log(`Font size changed to: ${this.fontSize}px`);
  }

  togglePrivacy() {
    this.privacyPublic = !this.privacyPublic;
    console.log(`Profile Visibility: ${this.privacyPublic ? 'Public' : 'Private'}`);
  }

  changeFontFamily(event: any) {
    const selectedFont = event.target.value;
    document.body.style.fontFamily = selectedFont;
    console.log(`Font family changed to: ${selectedFont}`);
  }

  toggleTwoFactorAuth() {
    this.twoFactorAuthEnabled = !this.twoFactorAuthEnabled;
    console.log(`Two-Factor Authentication: ${this.twoFactorAuthEnabled ? 'Enabled' : 'Disabled'}`);
  }

  backupData() {
    console.log('Data backup initiated...');
    alert('Your data is being backed up.');
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Account deletion initiated.');
      alert('Your account has been deleted.');
    }
  }

  resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      this.theme = 'light';
      this.fontSize = 16;
      this.privacyPublic = true;
      this.notificationsEnabled = true;
      this.dateFormat = 'MM/DD/YYYY';
      this.autoLogoutTime = 15;
      this.twoFactorAuthEnabled = false;
      console.log('Settings reset to default.');
      alert('All settings have been reset to default.');
    }
  }
}
