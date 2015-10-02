/**
 * Files DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function FilesDataservice($q, $log) {
  var files = [
        {
          name: 'DSCN4827.jpg',
          modified: new Date(),
          img: 'delete',
          offline: true
        },
        {
          name: 'IMG_1639.JPG ',
          modified: new Date(),
          img: 'download'
        },
        {
          name: 'IMG_1733.JPG',
          modified: new Date(),
          img: 'folder'
        },
        {
          name: 'IMG_20140413_152058751.jpg',
          modified: new Date(),
          img: 'grid'
        },
        {
          name: 'IMG_2394.JPG',
          modified: new Date(),
          img: 'info'
        },
        {
          name: 'DSCN4954.jpg',
          modified: new Date(),
          img: 'list'
        },
        {
          name: 'IMG_1658.JPG',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_1741.JPG',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_2077.jpg',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_2758.JPG',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_1625.JPG',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_1681.JPG',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_1742.JPG',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_2379.JPG',
          modified: new Date(),
          img: 'camera'
        },
        {
          name: 'IMG_4230.JPG',
          modified: new Date(),
          img: 'camera'
        },
      ];

    $log = $log.getInstance( "FilesDataservice" );
    $log.debug( "instanceOf() ");

    // Promise-based API
    return {
      loadAll : function() {
        $log.debug("loadAll()");

        // Simulate async nature of real remote calls
        return $q.when(files);
      }
    };
}

export default [ '$q', '$log', FilesDataservice ];

