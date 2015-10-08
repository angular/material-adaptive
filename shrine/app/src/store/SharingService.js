// Simple service holding static item data.
class SharingService {
  constructor($state) {
    this.sharingOptions = [
      { 
        label: () => `Share via Twitter`,
        icon: 'twitter',
      },
      { 
        label: () => `Email ${$state.params.detail}`,
        icon: 'email',
      },
      { 
        label: () => `Share via Message`,
        icon: 'message',
      },
      { 
        label: () => `Share on Facebook`,
        icon: 'facebook',
      },
    ]
  }
}

SharingService.$inject = ['$state'];
export default SharingService;

