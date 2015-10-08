// Simple service holding static item data.
class SharingService {
  constructor() {
    this.sharingOptions = [
      { 
        label: "Tweet Recipe",
        icon: "twitter",
      },
      { 
        label: "Email Recipe",
        icon: "email",
      },
      { 
        label: "Message Recipe",
        icon: "message",
      },
      { 
        label: "Share on Facebook",
        icon: "facebook",
      },
    ]
  }
}

SharingService.$inject = [];
export default SharingService;

