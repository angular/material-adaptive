// Simple service holding static item data.
class SharingService {
  constructor() {
    this.sharingOptions = [
      { 
        label: 'Share on Twitter',
        icon: 'twitter',
      },
      { 
        label: 'Share via Email',
        icon: 'email',
      },
      { 
        label: 'Share via Message',
        icon: 'message',
      },
      { 
        label: 'Share on Facebook',
        icon: 'facebook',
      },
    ]
  }
}

SharingService.$inject = [];
export default SharingService;

