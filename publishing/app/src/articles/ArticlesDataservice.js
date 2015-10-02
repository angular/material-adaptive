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
          author: 'Amber Bravo',
          date: new Date('14 June 2015'),
          summary: 'How a new generation of prototyping tools at Google will help designers build better software.',
          content: 'The road from design to production is often hard-won, filled with well-intended design detours, steep learning curves, and the occasional road block. Here’s a common scenario: A team of designers begins building wireframes for a new product. Several weeks, revisions, and pin-ups later, they emerge with a “final,” “shippable” file, which they hand off to the development team. The engineers poke holes in the design, deeming several elements “unbuildable,” and begin rendering out some semblance of the design in code. Several weeks later, they deliver a staging site. The designers are thrilled—this is the first time they’ve seen their design IRL—but are quickly deflated when they realize how much of the design has been lost in translation. The typography is wonky. The animations and interactive elements need to be re-tuned. A volley of annotated emails with screenshots ensues, until finally, the designer and developer sit side-by-side, and visually adjust the design directly in code.',
          color: 'rgb(53, 72, 82)',
          rowspan: 2,
          colspan: 2
        }, {
          id: 'pixate',
          title: 'Pixate and Form 1.3',
          author: 'Google Design',
          date: new Date('24 July 2015'),
          summary: 'Discover the latest features and start designing native prototypes on your device.',
          content: 'We’re thrilled to announce that Pixate has joined Google! Pixate adds to our ongoing effort to develop new design and prototyping tools, including Form 1.3. Explore the latest features of both products below, and check out our roundtable conversation with Matias Duarte, VP Design at Google, and the the founders of Pixate and Form.',
          color: 'rgb(139, 139, 139)'
        }, {
          id: 'imagery',
          title: 'Google Imagery',
          author: 'Google Design',
          summary: 'Imagery is more than decoration.',
          date: new Date('14 February 2013'),
          content: 'It’s a powerful tool to help you communicate and differentiate your product. Bold, graphic, and intentional imagery helps to engage the user. Whether the mood is subdued and muted or bright and colorful, the following principles and best practices can help you successfully incorporate imagery and bring your apps to life, no matter what the visual brand.',
          color: 'rgb(255, 166, 78)'
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
      get : function(id) {
        var result = articles.find(article => article.id == id);
        return $q.when(result);
      }
    };
}

export default [ '$q', '$log', ArticlesDataservice ];

