var Campground = require('./Mongospace/basic'),
  Comment = require('./Mongospace/liner'),
  User = require('./Mongospace/person');

var campgroundData = [
  {
    name: 'Location 1',
    image: 'https://farm6.staticflickr.com/5479/11694969344_42dff96680.jpg',
    description: "Welcome to Location 1, for more info select location 1"
    },
  {
    name: 'Location 2',
    image: 'https://farm5.staticflickr.com/4103/5088123249_5f24c3202c.jpg',
    description: "Welcome to Location 2, for more info select location 2"
    },
  {
    name: 'Location 3',
    image: 'https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg',
    description: 'Welcome to Location 3, for more info select location 3.'
    },
  {
    name: 'Location 4',
    image: 'https://farm7.staticflickr.com/6138/6042439726_9efecf8348.jpg',
    description: 'Welcome to Location 4, for more info select location 4.'
    }
];

var commentData1 = [
  {
    text: 'This place is great',
    author: 'Homer'
    },
  {
    text: '. . .',
    author: 'Maggie'
    },
  {
    text: '*plays sax*',
    author: 'Lisa'
    },
  {
    text: 'Cowabunga',
    author: 'Bart'
    }
];

var commentData2 = [
  {
    text: 'Fish for dinner!',
    author: 'Marge'
    },
  {
    text: '*falls on rock*',
    author: 'Grandpa Simpson'
    },
  {
    text: 'I found a bug!',
    author: 'Ralph'
    },
  {
    text: 'Too much water!',
    author: 'Apu'
    }
];

function seedDB() {
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Removed campgrounds!');
      Comment.remove({}, function(err) {
        if (err) {
          console.log(err);
        } else {
          campgroundData.forEach(function(seed, thisArg) {
            Campground.create(seed, function(err, campgroundResponse) {
              if (err) {
                console.log(err);
              } else {
                Comment.create(commentData1[thisArg], function(err, comment) {
                  if (err) {
                    console.log(err);
                  } else {
                    campgroundResponse.comments.push(comment);
                  }
                });
                Comment.create(commentData2[thisArg], function(err, comment2) {
                  if (err) {
                    console.log(err);
                  } else {
                    campgroundResponse.comments.push(comment2);
                    campgroundResponse.save();
                  }
                });
              }
            });
            console.log('Added campground');
          });
        }
      });
    }
  });
  User.remove({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User database cleared');
    }
  });

}

module.exports = seedDB;
