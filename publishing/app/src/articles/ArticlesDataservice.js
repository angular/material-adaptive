/**
 * Articles DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function ArticlesDataservice($q, $log) {

  var articles = [{
          id: 'tooling_up',
          title: 'Tooling Up',
          name: 'Amber Bravo',
          author: 'amber_bravo',
          categories: [ 'Art', 'Photography', 'Projects', 'Contact' ],
          date: new Date('14 June 2015'),
          summary: 'How a new generation of prototyping tools at Google will help designers build better software.',
          content: 'The road from design to production is often hard-won, filled with well-intended design detours, steep learning curves, and the occasional road block. Here’s a common scenario: A team of designers begins building wireframes for a new product. Several weeks, revisions, and pin-ups later, they emerge with a “final,” “shippable” file, which they hand off to the development team. The engineers poke holes in the design, deeming several elements “unbuildable,” and begin rendering out some semblance of the design in code. Several weeks later, they deliver a staging site. The designers are thrilled—this is the first time they’ve seen their design IRL—but are quickly deflated when they realize how much of the design has been lost in translation. The typography is wonky. The animations and interactive elements need to be re-tuned. A volley of annotated emails with screenshots ensues, until finally, the designer and developer sit side-by-side, and visually adjust the design directly in code.',
          color: 'rgb(53, 72, 82)',
          rowspan: 4,
          colspan: 8
        }, {
          id: 'pixate',
          title: 'Pixate and Form 1.3',
          name: 'Google Design',
          author: 'trevor_hansen',
          categories: [ 'Film', 'Projects', 'Studio Visits' ],
          date: new Date('24 July 2015'),
          summary: 'Discover the latest features and start designing native prototypes on your device.',
          content: 'We’re thrilled to announce that Pixate has joined Google! Pixate adds to our ongoing effort to develop new design and prototyping tools, including Form 1.3. Explore the latest features of both products below, and check out our roundtable conversation with Matias Duarte, VP Design at Google, and the the founders of Pixate and Form.',
          color: 'rgb(139, 139, 139)'
        }, {
          id: 'imagery',
          title: 'Google Imagery',
          name: 'Google Design',
          author: 'trevor_hansen',
          summary: 'Imagery is more than decoration.',
          categories: [ 'Film', 'Photography', 'Top Ten', 'A Day in the Life' ],
          date: new Date('14 February 2013'),
          content: 'It’s a powerful tool to help you communicate and differentiate your product. Bold, graphic, and intentional imagery helps to engage the user. Whether the mood is subdued and muted or bright and colorful, the following principles and best practices can help you successfully incorporate imagery and bring your apps to life, no matter what the visual brand.',
          color: 'rgb(255, 166, 78)'
        }, {
          id: 'iosandroid',
          title: 'From iOS to Android',
          name: 'Matias Duarte',
          author: 'matias_duarte',
          categories: [ 'Top Ten', 'A Day in the Life', 'Studio Visits' ],
          summary: 'Design from iOS to Android (and Back Again)',
          date: new Date('19 February 2013'),
          content: 'Designing and developing between platforms is a lot like traveling through different countries. You go through the same motions — sleeping, eating, sightseeing, regardless of where you are — but the customs of the country you’re visiting dictate how you go about doing them. In some countries, it’s ok to push people into the train, or eat a burger with a knife and fork.',
          color: 'rgb(48, 63, 159)'
        }, {
          id: 'smartpaper',
          title: 'Smart Paper',
          name: 'Matias Duarte and Jon Wiley',
          author: 'matias_duarte',
          categories: [ 'Film', 'Photography', 'Design', 'Projects' ],
          summary: 'Matias Duarte and Jon Wiley discuss the material metaphor',
          date: new Date('9 April 2014'),
          content: 'Following today’s announcements of the Android M, Android Pay and plethora of other great products at Google I/O 2015 conference , Google Design has launched a redesigned website with a brand-new interface, features and resources.',
          color: '#3E2723'
        }, {
          id: 'brand',
          title: 'Expressing Brand in Material',
          name: 'Sebastian Gabriel',
          author: 'sebastian_gabriel',
          categories: [ 'Art', 'Projects', 'Studio Visits', 'Misc'],
          summary: 'Material design offers a system for designing functional and elegant software. How does your brand fit into the framework? We’ve created a step-by-step guide to staying on-brand while going material.',
          date: new Date('1 June 2013'),
          content: 'Nobody knows your brand better than you do. This is why when we set out to create the framework for material design, we were sensitive to the ways in which third-party developers might leverage the system. We wanted material design to give comprehensive guidance for designing effective and elegant UIs — taking a strong position on motion, dimensionality, color, and graphic hierarchy — but with enough latitude to allow for various levels of engagement. You don’t have to adopt every element of the material design system in order for it to be beneficial to your identity system.',
          color: '#202226',
          rowspan: 4,
          colspan: 8
        }, {
          id: 'demystify',
          title: 'Demystify Density',
          name: 'Sebastian Gabriel',
          author: 'sebastian_gabriel',
          categories: [ 'Photography', 'Design', 'Top Ten', 'Misc' ],
          summary: 'Sebastien Gabriel takes one for the team with his exhaustive guide to DPI & PPI.',
          date: new Date('14 February 2012'),
          content: 'Dots Per Inch and Pixels Per Inch, DPI and PPI respectively, are units for measuring the tiny bits of color that come together to form a printed image or an image on a screen. The higher the density of those dots or pixels, the higher the resolution. For most, a rudimentary understanding of DPI or PPI amounts to knowing whether or not an image is clear but small enough to print, email, or post to social media. However, for designers, understanding screen density and ratio is essential to delivering delightful user experiences across devices. Designing for phones, tablets, laptops, watches, and hybrids without a proper knowledge of dpi and ratio is a lot like building a house using the wrong measurement — things are going to look very weird very quickly (and good luck getting through the door!).',
          color: '#607D8B'
        }, {
          id: 'joined',
          title: 'How I Joined Google',
          name: 'Sebastian Gabriel',
          author: 'sebastian_gabriel',
          categories: [ 'Studio Visits', 'Misc', 'Contact' ],
          summary: 'Personal story and experience.',
          date: new Date('11 May 2013'),
          content: 'When I joined Google a little more than 2 years ago, I was asked by a few people to tell the story of how I got there and what my experience was.  I promised I would but I never actually did. Maybe I was shy, maybe I did not have the time or maybe I simply thought, probably wrongly, that it wasn’t interesting enough.  I decided to finally honor that promise and write about it.',
          color: '#0097A7'
        }, {
          id: 'spacerace',
          title: 'The space race',
          name: 'Amber Bravo',
          author: 'amber_bravo',
          categories: [ 'Art', 'Film', 'Photography', 'Design', 'Top Ten', 'Studio Visits' ],
          summary: 'The space race is on: first Google Lunar XPRIZE team headed to the moon',
          date: new Date('18 July 2013'),
          content: 'For the last eight years, teams from around the world have been racing to win a global competition to land an unmanned spacecraft on the moon successfully. It’s called the Google Lunar XPRIZE, and it’s been going on in labs and universities from Brazil to Japan to Carnegie Mellon. With 16 remaining teams of scientists, explorers and adventurers hard at work designing and fundraising, the race is on to be the first privately-funded moon landing (and to take home a share of the $30 million prize purse that comes with it).',
          color: '#5C6BC0'
        }, {
          id: 'crafting',
          title: 'Crafting Material',
          name: 'Google Design',
          author: 'trevor_hansen',
          categories: [ 'Design' , 'Contact'],
          summary: 'Explore how analogue studies helped define the look and feel of material design.',
          date: new Date('19 March 2013'),
          content: 'We are a community of passionate designers & developers who love to share Material Design inspiration, feedback and resources. Explore how analogue studies helped define the look and feel for material design. Find out more about material design at www.google.com/design.',
          color: '#A1887F'
        }, {
          id: 'smore',
          title: 'Love across your screens',
          name: 'Matias Duarte',
          author: 'matias_duarte',
          categories: [ 'Film', 'Photography', 'A Day in the Life', 'Projects' ],
          summary: 'S’more to love across all your screens',
          date: new Date('29 September 2015'),
          content: 'From your watch to your phone to your TV, we want to help you stay connected, entertained and informed across all your screens. Today we’re introducing a few new things that do just that: two Nexus phones, a tablet for work and play, updates to Chromecast and features for some of your favorite apps—all working together to make your day a little bit easier and more fun.',
          color: '#FBC02D',
          rowspan: 4,
          colspan: 8
        }
      ];

    $log = $log.getInstance( "ArticlesDataservice" );
    $log.debug( "instanceOf() ");

    // Promise-based API
    return {
      loadAll : function() {
        $log.debug("loadAll()");

        // Simulate async nature of real remote calls
        return $q.when(articles);
      },
      loadByAuthor : function(author) {
        var result = articles.filter(article => article.author == author);
        return $q.when(result);
      },
      loadByCategory : function(category) {
        var result = articles.filter(article => article.categories.indexOf(category) != -1);
        return $q.when(result);
      },
      get : function(id) {
        var result = articles.find(article => article.id == id);
        return $q.when(result);
      }
    };
}

export default [ '$q', '$log', ArticlesDataservice ];

