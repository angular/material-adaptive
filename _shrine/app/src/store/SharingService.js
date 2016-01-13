// Simple service holding static item data.
class SharingService {
  constructor() {
    this.sharingOptions = [
      { 
        label: 'Share on Twitter',
        icon: 'http://www.gstatic.com/angular/material-adaptive/pesto/twitter.png',
        materialIcon: false
      },
      { 
        label: 'Share via Email',
        icon: 'email',
        materialIcon: true
      },
      { 
        label: 'Share via Message',
        icon: 'message',
        materialIcon: true
      },
      { 
        label: 'Share on Facebook',
        icon: 'http://www.gstatic.com/angular/material-adaptive/pesto/facebook.png',
        materialIcon: false
      }
    ]
  }
}

SharingService.$inject = [];
export default SharingService;

