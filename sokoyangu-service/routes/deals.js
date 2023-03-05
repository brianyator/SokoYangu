var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      { imageName: 'offer1', title: '10% Off On All Smochas', cols: 2, rows: 1 },
      { imageName: 'offer2', title: 'Laptop Of Your Dreams Now 50% Off', cols: 2, rows: 1 },
      { imageName: 'offer3', title: 'Document Your Life With Ease', cols: 2, rows: 1 },
      { imageName: 'offer4', title: 'Best Discount On Quality Headphones', cols: 2, rows: 1 }
    ],
    "deskCards": [
      { imageName: 'offer1', title: '10% Off On All Smochas', cols: 2, rows: 1 },
      { imageName: 'offer2', title: 'Laptop Of Your Dreams Now 50% Off', cols: 1, rows: 1 },
      { imageName: 'offer3', title: 'Document Your Life With Ease', cols: 1, rows: 2 },
      { imageName: 'offer4', title: 'Best Discount On Quality Headphones', cols: 1, rows: 1 }
    ]
    

  };
  
  res.json(jsonResponse);
});

module.exports = router;
