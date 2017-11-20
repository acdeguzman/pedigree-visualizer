#! /usr/bin/env node

console.log('This script populates swine data to your database.' +
 'Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

//Get arguments passed on command line
// var userArgs = process.argv.slice(2);
// if (!userArgs[0].startsWith('mongodb://')) {
//     console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
//     return
// }

var async = require('async')
var Swine = require('./models/swine')


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/swines', {

      useMongoClient: true
});
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var swines = []

function swineCreate(rnumber, fname, sbreed, ssex, byear, wadcol, aadcol, dreg, rby, sadgain, aadgain, sbthick, 
  abthick, sfeff, afeff, bweight, twbmale, twbfemale, stwborn, albalive, slbalive, parity, slaweaning, alaweaning, 
  laweaning, maternal, paternal, cb) {
  
  swinedetail = { registration_number: rnumber, farm_name: fname, swine_breed: sbreed, swine_sex: ssex, 
                  birthyear: byear, weight_at_data_collection: wadcol, age_at_data_collection: aadcol,
                  date_registered: dreg, registered_by: rby, standardized_ave_daily_gain: sadgain, 
                  actual_ave_daily_gain: aadgain, standardized_backfat_thickness: sbthick, 
                  actual_backfat_thickness: abthick, standardized_feed_efficiency: sfeff, 
                  actual_feed_efficiency: afeff, birth_weight: bweight, total_when_born_male: twbmale, 
                  total_when_born_female: twbfemale, standardized_total_when_born: stwborn, 
                  actual_littersize_born_alive: albalive, standardized_littersize_born_alive: slbalive, 
                  parity: parity, standardized_littersize_at_weaning: slaweaning, 
                  actual_littersize_at_weaning: alaweaning, litterweight_at_weaning: laweaning, 
                  maternal: maternal, paternal: paternal
                }

  
  var swine = new Swine(swinedetail);
       
  swine.save(function (err) {
    if (err) {
      //cb(err, null)
      return
    }
    console.log('New Swine: ' + swine);
    swines.push(swine)
    //cb(null, swine)
  }  );
}

function createSwine(cb) {
    async.parallel([
      function(callback) { 
      swineCreate(1,'Mishixiang','Yorkshire','Male',2005,50,6,'12/19/2012','Egbert',9,4,7,8,6,2,3,4,9,9,7,7,10,2,7,3,105,435, callback);
      },
      function(callback) { 
      swineCreate(2,'Kisumu','Yorkshire','Male',2005,57,6,'11/20/2003','Ruttger',3,7,4,3,4,3,6,5,9,10,8,3,9,10,5,3,65,75, callback);
      },
      function(callback) { 
      swineCreate(3,'Lugu','Yorkshire','Female',2005,66,2,'11/19/2003','Xaviera',2,2,4,7,10,8,4,9,5,7,6,5,3,8,7,4,412,355, callback);
      },
      function(callback) { 
      swineCreate(4,'Jaworzyna Śląska','Yorkshire','Male',2005,66,6,'1/11/2012','Gale',8,3,3,6,4,2,10,5,2,6,5,6,7,8,10,2,472,267, callback);
      },
      function(callback) { 
      swineCreate(5,'Nangkaruka','Yorkshire','Female',2005,58,5,'3/6/2015','Windy',8,4,4,3,4,2,9,4,9,9,2,6,2,10,8,9,20,411, callback);
      },
      function(callback) { 
      swineCreate(6,'Dongjin','Yorkshire','Male',2005,51,3,'11/21/2003','Cesaro',4,3,5,7,5,4,2,8,8,5,6,8,4,10,2,9,207,373, callback);
      },
      function(callback) { 
      swineCreate(7,'Los Angeles','Yorkshire','Female',2005,72,3,'4/28/2002','Eleen',5,3,3,7,9,9,6,2,6,4,9,7,8,10,6,9,311,94, callback);
      },
      function(callback) { 
      swineCreate(8,'Tianjiazhuang','Yorkshire','Female',2005,67,3,'8/10/2001','Darcie',7,6,7,9,10,10,10,2,10,9,10,7,10,8,5,8,467,249, callback);
      },
      function(callback) { 
      swineCreate(9,'Oekuu','Yorkshire','Male',2005,72,6,'1/24/2002','Forster',5,8,7,7,9,9,6,3,4,5,7,3,8,7,8,8,170,379, callback);
      },
      function(callback) { 
      swineCreate(10,'Linköping','Yorkshire','Female',2005,73,5,'6/5/2006','Christiane',10,10,9,2,3,4,9,3,3,6,7,5,6,4,3,3,160,327, callback);
      },
      function(callback) { 
      swineCreate(11,'Antsirabe','Yorkshire','Female',2005,61,5,'4/29/2014','Lura',6,6,5,9,8,7,4,3,6,7,8,6,9,5,9,3,498,419, callback);
      },
      function(callback) { 
      swineCreate(12,'Chunjiang','Yorkshire','Female',2005,74,3,'5/27/2005','Roanne',5,6,7,9,7,10,10,8,5,6,2,3,6,2,3,5,346,380, callback);
      },
      function(callback) { 
      swineCreate(13,'Edsbyn','Yorkshire','Male',2005,69,6,'10/21/2016','Danny',3,3,10,3,7,8,9,3,9,3,4,5,5,5,10,10,66,232, callback);
      },
      function(callback) { 
      swineCreate(14,'Concepción','Yorkshire','Female',2005,58,3,'8/10/2011','Aleta',8,10,3,5,5,9,3,2,5,10,2,9,7,9,9,5,465,104, callback);
      },
      function(callback) { 
      swineCreate(15,'Piteå','Yorkshire','Female',2005,69,6,'9/11/2007','Eloise',5,9,7,7,2,8,8,9,10,10,3,3,8,7,10,4,457,239, callback);
      },
      function(callback) { 
      swineCreate(16,'Turze Pole','Yorkshire','Male',2005,73,3,'10/26/2013','Kelly',8,8,3,7,6,5,4,6,6,5,9,4,3,4,8,8,175,94, callback);
      },
      function(callback) { 
      swineCreate(17,'Baćkowice','Yorkshire','Female',2005,66,3,'1/26/2014','Biddie',2,7,4,4,9,10,2,9,5,2,8,6,8,5,10,5,459,23, callback);
      },
      function(callback) { 
      swineCreate(18,'Sann','Yorkshire','Female',2005,56,3,'12/2/2005','Barbra',8,9,8,4,9,10,3,8,6,10,10,3,9,6,3,6,460,413, callback);
      },
      function(callback) { 
      swineCreate(19,'Alcanena','Yorkshire','Male',2005,60,6,'5/16/2009','Shellysheldon',7,9,6,9,3,3,7,6,2,8,7,9,3,2,9,6,473,161, callback);
      },
      function(callback) { 
      swineCreate(20,'Mapusagafou','Yorkshire','Female',2005,70,5,'7/20/2008','Netty',4,7,3,5,4,9,5,3,5,8,6,8,8,4,9,6,489,148, callback);
      },
      function(callback) { 
      swineCreate(21,'Sacramento','Yorkshire','Male',2005,75,3,'12/12/2008','Wolfgang',2,2,6,8,2,6,8,6,3,9,4,10,4,4,6,6,17,167, callback);
      },
      function(callback) { 
      swineCreate(22,'Sanxi','Yorkshire','Male',2005,60,2,'11/9/2013','Jeth',4,9,3,3,7,5,6,6,5,7,5,6,9,2,6,6,136,44, callback);
      },
      function(callback) { 
      swineCreate(23,'Bradenton','Yorkshire','Female',2005,59,3,'7/20/2014','Gail',2,10,10,6,9,5,6,4,9,10,6,5,7,6,10,8,187,326, callback);
      },
      function(callback) { 
      swineCreate(24,'Henglin','Yorkshire','Male',2005,54,2,'1/24/2015','Vasili',10,5,4,7,9,8,3,10,5,9,6,8,6,8,9,10,425,335, callback);
      },
      function(callback) { 
      swineCreate(25,'Jatake','Yorkshire','Male',2005,71,3,'2/17/2001','Ruprecht',5,7,5,9,3,9,9,6,2,3,5,10,6,10,2,5,319,314, callback);
      },
      function(callback) { 
      swineCreate(26,'Shuangshipu','Yorkshire','Female',2005,58,3,'8/31/2006','Tamra',5,2,7,6,4,2,8,10,6,3,10,4,9,8,6,9,157,253, callback);
      },
      function(callback) { 
      swineCreate(27,'Fengshan','Yorkshire','Male',2005,54,4,'3/13/2005','Terencio',4,7,6,6,9,6,8,3,2,10,7,3,7,9,2,7,495,494, callback);
      },
      function(callback) { 
      swineCreate(28,'Pallasovka','Yorkshire','Female',2005,72,2,'5/29/2008','Emlynn',10,3,10,8,9,8,8,8,4,2,7,5,4,7,2,10,245,113, callback);
      },
      function(callback) { 
      swineCreate(29,'Lucé','Yorkshire','Male',2005,62,2,'2/24/2005','Fransisco',8,8,9,2,10,9,10,10,2,8,6,5,2,10,9,6,472,482, callback);
      },
      function(callback) { 
      swineCreate(30,'Abraham’s Bay','Yorkshire','Female',2005,62,6,'4/14/2006','Kettie',5,3,2,10,4,2,4,8,9,9,7,8,3,3,2,5,120,40, callback);
      },
      function(callback) { 
      swineCreate(31,'Gaotan','Yorkshire','Male',2005,70,5,'2/3/2009','Ravi',3,9,7,5,8,2,3,4,10,10,8,5,7,4,8,7,100,62, callback);
      },
      function(callback) { 
      swineCreate(32,'Lesnyye Polyany','Yorkshire','Female',2005,72,5,'12/15/2010','Sher',9,4,7,7,2,7,10,10,6,4,6,10,9,6,5,3,11,484, callback);
      },
      function(callback) { 
      swineCreate(33,'Mysove','Yorkshire','Male',2005,58,2,'4/29/2005','Sheppard',4,9,8,10,6,6,7,3,9,7,2,5,4,5,8,7,468,428, callback);
      },
      function(callback) { 
      swineCreate(34,'Parung','Yorkshire','Male',2005,64,5,'2/3/2003','Woody',6,5,10,10,4,3,10,10,3,6,9,3,5,3,4,4,194,12, callback);
      },
      function(callback) { 
      swineCreate(35,'Siennica Różana','Yorkshire','Female',2005,74,4,'1/1/2009','Leodora',9,10,2,5,5,5,2,6,9,5,5,3,9,6,2,7,122,461, callback);
      },
      function(callback) { 
      swineCreate(36,'Kolape','Yorkshire','Female',2005,69,6,'6/9/2016','Magdaia',4,10,2,10,5,2,3,5,6,9,9,4,6,2,8,8,297,323, callback);
      },
      function(callback) { 
      swineCreate(37,'Cikijing','Yorkshire','Male',2005,52,4,'12/31/2012','Hermy',9,7,5,9,2,8,8,2,5,6,3,6,7,3,8,9,118,364, callback);
      },
      function(callback) { 
      swineCreate(38,'Obiaruku Quarters','Yorkshire','Female',2005,53,5,'2/28/2005','Kelley',4,6,10,2,5,3,9,8,7,8,5,2,7,7,2,2,495,104, callback);
      },
      function(callback) { 
      swineCreate(39,'Saint Aubin','Yorkshire','Female',2005,50,5,'2/21/2017','Jeannine',10,2,5,8,2,5,2,5,6,6,3,6,2,6,6,6,343,296, callback);
      },
      function(callback) { 
      swineCreate(40,'Sulyukta','Yorkshire','Female',2005,70,6,'11/17/2012','Natassia',7,7,9,7,5,10,3,9,3,4,4,3,3,10,4,10,474,215, callback);
      },
      function(callback) { 
      swineCreate(41,'Carnot','Yorkshire','Female',2005,67,6,'2/25/2011','Galina',9,7,8,5,7,4,9,8,5,2,7,7,2,9,4,5,100,424, callback);
      },
      function(callback) { 
      swineCreate(42,'Namora','Yorkshire','Male',2005,62,5,'10/14/2010','Sanders',3,8,8,2,10,7,4,8,5,3,4,7,10,8,9,10,302,37, callback);
      },
      function(callback) { 
      swineCreate(43,'Bebedahan','Yorkshire','Female',2005,66,5,'9/27/2002','Clea',2,10,10,2,5,6,8,5,5,3,10,6,6,2,2,3,250,63, callback);
      },
      function(callback) { 
      swineCreate(44,'Dazaifu','Yorkshire','Female',2005,60,6,'5/25/2010','Kippie',10,8,6,5,8,10,10,3,7,7,7,4,5,10,2,7,495,288, callback);
      },
      function(callback) { 
      swineCreate(45,'Cambará','Yorkshire','Male',2005,73,6,'12/12/2000','Lloyd',5,3,10,3,2,7,9,2,4,2,8,7,3,6,3,9,286,453, callback);
      },
      function(callback) { 
      swineCreate(46,'Barranca','Yorkshire','Male',2005,73,3,'2/28/2016','Lorrie',9,8,4,8,6,2,9,5,9,5,3,7,2,3,7,4,453,277, callback);
      },
      function(callback) { 
      swineCreate(47,'Gavião','Yorkshire','Male',2005,52,3,'11/28/2001','Ruben',3,8,5,5,2,6,9,10,7,10,8,6,8,9,6,8,22,147, callback);
      },
      function(callback) { 
      swineCreate(48,'Picoto','Yorkshire','Male',2005,50,3,'12/22/2000','Feliks',3,7,9,4,7,3,3,3,3,2,4,10,4,3,6,9,230,192, callback);
      },
      function(callback) { 
      swineCreate(49,'Sokhumi','Yorkshire','Female',2005,74,5,'5/8/2006','Stefa',7,2,9,2,2,2,4,9,2,6,8,6,3,9,3,3,435,99, callback);
      },
      function(callback) { 
      swineCreate(50,'Weiyuan','Yorkshire','Male',2005,63,3,'1/9/2013','Stacee',10,8,9,5,5,3,2,4,8,8,3,7,8,5,3,4,113,471, callback);
      },
      function(callback) { 
      swineCreate(51,'Pankshin','Yorkshire','Female',2005,67,2,'7/5/2007','Edyth',10,6,4,7,7,6,8,10,4,2,2,10,10,3,3,8,47,483, callback);
      },
      function(callback) { 
      swineCreate(52,'Cianorte','Yorkshire','Female',2005,72,2,'7/30/2003','Delcine',9,9,7,3,9,2,3,8,5,2,6,10,7,3,10,7,73,498, callback);
      },
      function(callback) { 
      swineCreate(53,'Mufushan','Yorkshire','Male',2005,75,3,'3/10/2010','Farlee',3,8,8,4,9,3,5,8,6,4,10,2,2,2,4,9,427,94, callback);
      },
      function(callback) { 
      swineCreate(54,'Helong','Yorkshire','Female',2005,62,2,'10/2/2004','Delcina',8,6,2,3,8,5,3,10,10,4,9,10,4,10,7,6,17,237, callback);
      },
      function(callback) { 
      swineCreate(55,'Concepción Tutuapa','Yorkshire','Female',2005,69,6,'5/24/2015','Leslie',6,5,3,3,7,2,6,10,10,10,3,6,3,2,8,8,306,207, callback);
      },
      function(callback) { 
      swineCreate(56,'Cipari','Yorkshire','Female',2005,75,3,'8/23/2005','Nerti',8,8,3,10,2,6,7,8,6,5,2,7,7,2,2,4,166,4, callback);
      },
      function(callback) { 
      swineCreate(57,'Bal’shavik','Yorkshire','Female',2005,65,6,'12/20/2009','Ruthi',6,3,9,8,7,5,9,5,5,3,6,10,4,5,10,2,47,94, callback);
      },
      function(callback) { 
      swineCreate(58,'Gushikawa','Yorkshire','Female',2005,72,5,'10/28/2002','Tillie',5,10,2,9,2,6,10,7,8,7,10,10,9,7,3,9,77,8, callback);
      },
      function(callback) { 
      swineCreate(59,'San Lorenzo de Esmeraldas','Yorkshire','Male',2005,64,5,'8/31/2004','Barrie',10,4,3,5,9,5,7,7,10,4,4,4,6,10,4,6,258,279, callback);
      },
      function(callback) { 
      swineCreate(60,'Nymburk','Yorkshire','Female',2005,69,2,'11/8/2013','Marcelle',9,8,6,5,9,2,2,8,6,5,5,3,6,3,10,4,55,128, callback);
      },
      function(callback) { 
      swineCreate(61,'Perepravnaya','Yorkshire','Male',2005,60,4,'8/1/2004','Gabbie',2,3,3,5,3,5,10,8,8,8,2,10,2,3,3,10,176,228, callback);
      },
      function(callback) { 
      swineCreate(62,'Efkarpía','Yorkshire','Male',2005,66,6,'2/22/2009','Salomon',8,3,2,6,2,2,10,4,6,4,8,9,4,8,2,10,321,185, callback);
      },
      function(callback) { 
      swineCreate(63,'Lingkou','Yorkshire','Male',2005,53,4,'6/23/2013','Benjamen',10,2,9,10,9,2,8,5,8,3,2,10,7,3,3,7,300,317, callback);
      },
      function(callback) { 
      swineCreate(64,'Likupang','Yorkshire','Female',2005,72,5,'4/4/2014','Ardra',10,8,8,5,6,7,3,7,3,10,7,4,8,9,9,7,282,45, callback);
      },
      function(callback) { 
      swineCreate(65,'Arvika','Yorkshire','Female',2005,60,3,'1/13/2010','Ortensia',3,9,2,6,3,6,4,8,10,7,4,7,8,7,2,4,217,133, callback);
      },
      function(callback) { 
      swineCreate(66,'Meniko','Yorkshire','Male',2005,60,2,'8/14/2009','Rurik',7,6,9,3,8,9,6,7,9,4,10,4,3,2,7,5,222,321, callback);
      },
      function(callback) { 
      swineCreate(67,'Orange','Yorkshire','Female',2005,64,6,'7/13/2003','Alessandra',2,10,4,2,2,3,7,8,3,5,2,3,4,8,3,4,387,125, callback);
      },
      function(callback) { 
      swineCreate(68,'Horní Lideč','Yorkshire','Male',2005,53,6,'11/14/2009','Christoph',2,2,4,9,10,5,5,2,6,9,5,4,6,6,4,7,180,365, callback);
      },
      function(callback) { 
      swineCreate(69,'Long Beach','Yorkshire','Female',2005,60,3,'5/10/2010','Guillema',8,3,6,6,8,2,10,9,8,2,6,5,9,2,8,7,261,441, callback);
      },
      function(callback) { 
      swineCreate(70,'Sabana de Parra','Yorkshire','Male',2005,67,2,'3/6/2007','Kale',4,3,9,5,9,10,5,6,3,7,6,3,10,9,4,3,170,120, callback);
      },
      function(callback) { 
      swineCreate(71,'Kikinda','Yorkshire','Female',2005,54,3,'3/5/2011','Steffi',8,8,4,8,5,7,9,7,3,7,9,6,7,2,4,10,170,445, callback);
      },
      function(callback) { 
      swineCreate(72,'Hushi','Yorkshire','Female',2005,64,6,'6/15/2013','Nikaniki',3,10,2,10,8,8,5,2,10,7,3,7,3,5,2,10,370,350, callback);
      },
      function(callback) { 
      swineCreate(73,'Kristinehamn','Yorkshire','Female',2005,50,3,'10/29/2013','Susi',5,7,10,4,9,6,3,3,7,4,8,7,2,5,5,6,62,40, callback);
      },
      function(callback) { 
      swineCreate(74,'Emalgolin Mongolzuxiang','Yorkshire','Female',2005,68,4,'3/1/2017','Binny',6,4,4,7,7,8,6,2,8,5,2,7,2,4,5,4,200,396, callback);
      },
      function(callback) { 
      swineCreate(75,'Santol','Yorkshire','Female',2005,70,6,'6/1/2010','Cari',4,6,9,5,9,2,9,9,10,7,3,5,5,9,9,9,219,25, callback);
      },
      function(callback) { 
      swineCreate(76,'Dongmaku','Yorkshire','Male',2005,65,2,'5/14/2014','Vinson',7,7,9,8,6,5,3,2,9,8,9,6,4,6,2,6,21,357, callback);
      },
      function(callback) { 
      swineCreate(77,'Pereslavl’-Zalesskiy','Yorkshire','Female',2005,75,3,'10/14/2010','Olly',9,8,2,10,6,8,4,7,10,2,3,3,3,3,4,8,119,219, callback);
      },
      function(callback) { 
      swineCreate(78,'Albany','Yorkshire','Female',2005,67,3,'10/26/2002','Oralia',4,4,9,5,10,2,3,10,7,6,9,3,7,3,3,2,11,108, callback);
      },
      function(callback) { 
      swineCreate(79,'Gourcy','Yorkshire','Female',2005,65,5,'2/10/2004','Elladine',7,2,7,10,8,6,9,5,5,8,4,7,9,7,2,7,356,381, callback);
      },
      function(callback) { 
      swineCreate(80,'Serednye Vodyane','Yorkshire','Female',2005,59,4,'11/27/2005','Mareah',3,8,10,7,6,7,9,4,10,10,5,8,5,3,4,6,256,429, callback);
      },
      function(callback) { 
      swineCreate(81,'Kalayemule','Yorkshire','Female',2005,68,4,'5/11/2003','Lynnette',8,2,9,8,5,4,5,2,4,9,2,7,3,7,7,3,115,152, callback);
      },
      function(callback) { 
      swineCreate(82,'Donglinxi','Yorkshire','Female',2005,70,3,'3/3/2006','Arlie',2,6,5,5,10,2,2,4,4,6,10,5,5,7,10,6,93,195, callback);
      },
      function(callback) { 
      swineCreate(83,'Chang’an','Yorkshire','Male',2005,57,6,'3/15/2002','Sanford',2,10,6,8,3,2,5,2,9,9,2,10,7,2,7,10,90,2, callback);
      },
      function(callback) { 
      swineCreate(84,'Rezé','Yorkshire','Male',2005,66,2,'2/20/2004','Ripley',7,8,7,4,4,3,7,6,6,2,10,3,6,6,10,7,178,435, callback);
      },
      function(callback) { 
      swineCreate(85,'Júlio de Castilhos','Yorkshire','Female',2005,66,2,'3/25/2010','Davida',6,4,8,2,8,10,7,4,2,6,9,4,3,5,3,3,51,165, callback);
      },
      function(callback) { 
      swineCreate(86,'Shifo','Yorkshire','Female',2005,64,3,'8/3/2005','Jillane',2,3,6,2,7,9,9,3,2,2,5,8,3,5,5,4,398,381, callback);
      },
      function(callback) { 
      swineCreate(87,'Wenchang','Yorkshire','Male',2005,56,3,'4/5/2006','Eugenio',3,4,8,10,5,4,2,6,8,2,8,9,10,4,2,8,5,471, callback);
      },
      function(callback) { 
      swineCreate(88,'Angatel','Yorkshire','Female',2005,57,5,'1/12/2001','Glynda',7,10,4,7,7,2,6,3,7,6,4,6,6,10,3,5,290,279, callback);
      },
      function(callback) { 
      swineCreate(89,'Maní','Yorkshire','Male',2005,51,6,'10/12/2015','Mackenzie',5,10,6,7,7,2,8,10,6,7,4,3,3,8,9,3,51,84, callback);
      },
      function(callback) { 
      swineCreate(90,'Nam Som','Yorkshire','Male',2005,56,3,'2/15/2015','Ced',7,6,9,4,3,7,10,7,3,6,5,8,10,8,8,7,231,480, callback);
      },
      function(callback) { 
      swineCreate(91,'Oujiangcha','Yorkshire','Male',2005,66,6,'11/12/2000','Claudianus',4,7,6,10,7,9,10,5,10,9,2,8,6,6,3,3,437,292, callback);
      },
      function(callback) { 
      swineCreate(92,'Ambatondrazaka','Yorkshire','Male',2005,55,2,'1/14/2016','Hadlee',8,4,2,2,4,7,7,5,7,3,10,5,8,2,4,7,430,44, callback);
      },
      function(callback) { 
      swineCreate(93,'Saint-Sauveur','Yorkshire','Male',2005,53,4,'12/17/2011','Harman',2,5,3,4,4,7,3,2,6,5,3,6,7,10,3,5,61,469, callback);
      },
      function(callback) { 
      swineCreate(94,'Garmeh','Yorkshire','Male',2005,58,6,'10/29/2004','Wilt',8,8,6,8,4,7,2,6,8,2,3,5,5,10,9,3,475,432, callback);
      },
      function(callback) { 
      swineCreate(95,'Bardiyā','Yorkshire','Female',2005,74,5,'10/18/2002','Willow',9,4,8,7,5,6,6,2,7,8,9,9,6,9,7,8,51,480, callback);
      },
      function(callback) { 
      swineCreate(96,'Bungalaleng','Yorkshire','Female',2005,74,2,'9/13/2009','Malissia',7,2,6,9,3,10,4,3,5,4,7,6,2,10,4,3,488,36, callback);
      },
      function(callback) { 
      swineCreate(97,'Laval','Yorkshire','Male',2005,64,6,'1/2/2013','Winfield',2,8,7,9,6,2,8,3,10,8,2,7,9,6,3,9,216,169, callback);
      },
      function(callback) { 
      swineCreate(98,'Santa María de Caparo','Yorkshire','Male',2005,58,5,'2/28/2010','Rorke',6,7,8,2,8,7,8,5,8,7,5,10,8,6,2,10,372,132, callback);
      },
      function(callback) { 
      swineCreate(99,'Cihaur','Yorkshire','Male',2005,51,2,'7/14/2006','Che',2,4,5,7,9,5,3,7,9,4,4,4,8,3,8,4,384,381, callback);
      },
      function(callback) { 
      swineCreate(100,'Kano','Yorkshire','Male',2005,61,6,'8/2/2011','Torry',2,3,3,2,4,7,4,10,10,7,5,5,5,8,4,10,187,211, callback);
      },
      function(callback) { 
      swineCreate(101,'Paris La Défense','Yorkshire','Female',2005,55,3,'1/6/2015','Katharine',3,8,10,5,4,10,2,2,10,6,2,4,10,4,3,9,371,21, callback);
      },
      function(callback) { 
      swineCreate(102,'Hartford','Yorkshire','Female',2005,66,6,'11/10/2016','Tawsha',9,4,7,7,8,9,7,8,7,3,3,9,2,6,2,10,457,315, callback);
      },
      function(callback) { 
      swineCreate(103,'Falun','Yorkshire','Female',2005,62,2,'11/3/2007','Loleta',10,9,5,9,8,9,5,5,8,6,7,8,9,2,6,2,453,435, callback);
      },
      function(callback) { 
      swineCreate(104,'Handa','Yorkshire','Female',2005,53,6,'8/1/2015','Conny',6,9,4,10,6,5,4,10,3,9,8,2,5,2,4,8,254,255, callback);
      },
      function(callback) { 
      swineCreate(105,'Catayauan','Yorkshire','Male',2005,51,6,'8/30/2014','Lay',4,2,9,2,9,3,6,10,10,7,9,10,5,3,9,6,426,458, callback);
      },
      function(callback) { 
      swineCreate(106,'Sada','Yorkshire','Female',2005,71,6,'12/6/2002','Courtnay',2,2,8,8,10,3,6,7,5,5,2,2,5,8,5,4,460,408, callback);
      },
      function(callback) { 
      swineCreate(107,'Ilovlya','Yorkshire','Male',2005,73,2,'8/8/2007','Graehme',7,9,2,2,2,8,5,9,3,5,10,10,4,5,7,5,204,329, callback);
      },
      function(callback) { 
      swineCreate(108,'Maslovare','Yorkshire','Male',2005,73,6,'9/13/2005','Aldo',5,3,2,6,7,6,10,2,3,2,5,5,9,6,4,10,161,486, callback);
      },
      function(callback) { 
      swineCreate(109,'Dingcheng','Yorkshire','Female',2005,57,2,'8/2/2014','Davita',10,9,5,10,9,5,3,10,5,2,8,9,2,6,3,4,352,42, callback);
      },
      function(callback) { 
      swineCreate(110,'Steinfort','Yorkshire','Female',2005,51,5,'1/26/2008','Gilligan',3,10,9,4,3,4,7,9,9,7,10,5,5,4,2,10,498,380, callback);
      },
      function(callback) { 
      swineCreate(111,'Qingfeng','Yorkshire','Female',2005,52,6,'4/4/2014','Brenna',2,6,5,3,2,6,2,7,9,7,6,6,7,7,10,6,483,169, callback);
      },
      function(callback) { 
      swineCreate(112,'Fray Bentos','Yorkshire','Male',2005,65,6,'9/18/2017','Vick',2,9,7,4,4,6,6,3,3,3,4,3,7,8,2,6,329,299, callback);
      },
      function(callback) { 
      swineCreate(113,'Villa Elisa','Yorkshire','Female',2005,66,4,'10/13/2017','Aggi',4,10,9,8,3,10,10,2,5,5,5,5,4,5,9,7,50,126, callback);
      },
      function(callback) { 
      swineCreate(114,'Chigoré','Yorkshire','Female',2005,60,3,'4/5/2015','Caresse',5,8,5,9,7,2,4,4,10,9,5,7,2,5,7,2,48,33, callback);
      },
      function(callback) { 
      swineCreate(115,'Pingzhuang','Yorkshire','Male',2005,62,4,'8/22/2011','Jarret',7,10,8,6,2,4,3,3,5,10,9,7,10,7,7,10,485,286, callback);
      },
      function(callback) { 
      swineCreate(116,'Kolo','Yorkshire','Male',2005,71,2,'2/13/2011','Emile',6,2,5,8,4,5,10,7,8,6,9,2,2,8,5,5,350,132, callback);
      },
      function(callback) { 
      swineCreate(117,'Gjinkar','Yorkshire','Female',2005,54,5,'2/20/2014','Larisa',3,9,9,5,2,4,3,5,2,7,5,7,3,10,8,4,325,385, callback);
      },
      function(callback) { 
      swineCreate(118,'Rancamaya','Yorkshire','Male',2005,73,5,'6/25/2004','Augie',10,4,10,10,10,7,2,3,7,4,9,4,5,8,7,4,144,487, callback);
      },
      function(callback) { 
      swineCreate(119,'Las Palmas','Yorkshire','Male',2005,70,6,'6/11/2010','Tally',7,3,5,9,4,7,8,10,3,2,5,5,10,2,6,5,405,119, callback);
      },
      function(callback) { 
      swineCreate(120,'Norfolk','Yorkshire','Female',2005,60,6,'3/17/2003','Valaria',4,2,4,3,2,6,7,10,10,7,4,7,5,2,3,2,206,174, callback);
      },
      function(callback) { 
      swineCreate(121,'Robertsport','Yorkshire','Female',2005,60,5,'2/15/2014','Trula',6,9,3,10,4,9,3,4,10,10,2,3,4,5,3,3,137,258, callback);
      },
      function(callback) { 
      swineCreate(122,'Stuttgart','Yorkshire','Male',2005,74,4,'4/12/2017','Hobard',4,9,2,3,4,6,3,10,4,2,7,2,7,10,8,9,302,443, callback);
      },
      function(callback) { 
      swineCreate(123,'Cachoeirinha','Yorkshire','Male',2005,62,5,'10/1/2011','Wolfie',10,6,6,6,7,2,10,6,10,8,2,5,4,3,10,9,363,481, callback);
      },
      function(callback) { 
      swineCreate(124,'Magnitogorsk','Yorkshire','Male',2005,52,4,'10/17/2001','Heindrick',6,8,8,3,6,10,4,3,9,10,4,6,6,6,3,7,383,132, callback);
      },
      function(callback) { 
      swineCreate(125,'Wattegama','Yorkshire','Female',2005,60,4,'10/28/2016','Melly',3,8,5,10,7,2,4,10,8,7,9,8,10,9,4,7,91,386, callback);
      },
      function(callback) { 
      swineCreate(126,'Shinpokh','Yorkshire','Female',2005,52,2,'3/17/2003','Jacinthe',10,8,10,9,6,2,8,3,2,8,7,2,2,10,5,6,5,486, callback);
      },
      function(callback) { 
      swineCreate(127,'Taesal-li','Yorkshire','Male',2005,55,5,'4/16/2015','Romain',10,9,8,2,8,5,2,7,8,10,6,5,4,7,6,5,84,148, callback);
      },
      function(callback) { 
      swineCreate(128,'Limbuš','Yorkshire','Male',2005,62,2,'8/8/2001','Benedikt',9,7,4,6,8,5,9,7,7,4,2,9,7,7,4,10,462,41, callback);
      },
      function(callback) { 
      swineCreate(129,'Kajiki','Yorkshire','Male',2005,70,2,'7/19/2006','Olvan',8,10,6,2,7,3,8,3,6,5,9,7,6,3,9,2,9,228, callback);
      },
      function(callback) { 
      swineCreate(130,'Chicago','Yorkshire','Female',2005,75,4,'4/24/2004','Sacha',4,6,8,10,8,2,9,2,2,5,4,3,3,3,10,3,370,299, callback);
      },
      function(callback) { 
      swineCreate(131,'Ol Kalou','Yorkshire','Male',2005,69,5,'6/8/2017','Spence',4,8,7,8,5,6,9,3,5,5,5,4,10,3,6,8,261,144, callback);
      },
      function(callback) { 
      swineCreate(132,'Passo Fundo','Yorkshire','Female',2005,61,2,'12/6/2013','Charla',3,8,6,9,6,8,2,8,10,9,2,7,8,8,9,8,46,245, callback);
      },
      function(callback) { 
      swineCreate(133,'Shakhta','Yorkshire','Male',2005,70,3,'10/28/2008','Josh',3,5,9,10,10,5,8,4,2,7,2,10,4,9,9,4,440,241, callback);
      },
      function(callback) { 
      swineCreate(134,'Lesnikovo','Yorkshire','Female',2005,59,6,'1/25/2016','Tiphani',4,10,10,9,5,10,8,6,7,8,6,4,10,4,6,7,261,225, callback);
      },
      function(callback) { 
      swineCreate(135,'Fengmu','Yorkshire','Female',2005,60,3,'9/11/2005','Dotti',2,5,3,6,4,4,3,9,9,8,10,10,7,8,4,10,80,242, callback);
      },
      function(callback) { 
      swineCreate(136,'Wanlongshan','Yorkshire','Male',2005,50,2,'9/23/2012','Findlay',4,8,9,3,4,4,7,4,7,10,3,3,3,10,3,3,394,138, callback);
      },
      function(callback) { 
      swineCreate(137,'Rueil-Malmaison','Yorkshire','Female',2005,71,6,'6/3/2002','Mandi',10,9,4,2,10,2,4,10,7,4,3,9,10,8,4,2,176,28, callback);
      },
      function(callback) { 
      swineCreate(138,'Veselí nad Moravou','Yorkshire','Female',2005,74,2,'6/6/2016','Teresita',2,9,6,9,8,8,8,10,2,4,10,3,6,3,8,3,211,295, callback);
      },
      function(callback) { 
      swineCreate(139,'Damu','Yorkshire','Male',2005,62,6,'5/30/2013','Virgil',5,2,5,5,2,7,5,7,3,10,4,3,9,5,4,7,353,301, callback);
      },
      function(callback) { 
      swineCreate(140,'Papakura','Yorkshire','Female',2005,62,5,'4/4/2003','Winonah',9,6,3,8,5,3,9,3,6,10,10,4,3,8,10,5,234,486, callback);
      },
      function(callback) { 
      swineCreate(141,'Mirzec','Yorkshire','Male',2005,72,5,'6/22/2007','Egbert',5,2,9,2,8,5,4,4,4,3,10,5,7,2,4,8,307,440, callback);
      },
      function(callback) { 
      swineCreate(142,'Springfield','Yorkshire','Female',2005,72,3,'10/5/2007','Clovis',8,9,10,3,5,8,4,10,10,7,2,5,3,5,6,7,169,426, callback);
      },
      function(callback) { 
      swineCreate(143,'Pamplona/Iruña','Yorkshire','Male',2005,62,4,'6/26/2004','Sandy',4,7,8,3,4,4,10,3,4,3,2,5,10,8,2,9,341,179, callback);
      },
      function(callback) { 
      swineCreate(144,'Bagok','Yorkshire','Male',2005,69,3,'12/8/2013','Nick',9,6,9,5,10,3,7,3,6,6,7,8,3,7,2,7,202,360, callback);
      },
      function(callback) { 
      swineCreate(145,'Farkaždin','Yorkshire','Male',2005,62,5,'11/21/2010','Craggy',10,7,9,9,8,6,8,6,3,2,3,7,4,4,7,10,470,277, callback);
      },
      function(callback) { 
      swineCreate(146,'Mashtūl as Sūq','Yorkshire','Male',2005,55,6,'10/1/2001','Archambault',9,10,7,6,8,10,2,2,9,10,3,5,3,4,4,7,183,278, callback);
      },
      function(callback) { 
      swineCreate(147,'Seshcha','Yorkshire','Male',2005,54,2,'7/15/2009','Alfredo',4,4,10,4,6,8,8,8,10,3,8,6,8,4,4,8,105,242, callback);
      },
      function(callback) { 
      swineCreate(148,'Khairpur','Yorkshire','Male',2005,57,6,'10/1/2015','Jo',2,2,2,4,10,5,5,7,3,8,8,10,4,5,2,2,276,88, callback);
      },
      function(callback) { 
      swineCreate(149,'Vale','Yorkshire','Female',2005,52,5,'2/9/2016','Cinda',4,7,9,10,4,9,6,6,5,6,6,2,2,5,4,5,52,265, callback);
      },
      function(callback) { 
      swineCreate(150,'Nozdrzec','Yorkshire','Male',2005,63,2,'4/2/2014','Frederick',8,3,3,5,2,7,6,7,8,6,3,3,6,3,3,4,491,244, callback);
      },
      function(callback) { 
      swineCreate(151,'Dióni','Yorkshire','Female',2005,75,3,'7/9/2009','Cleo',3,4,5,7,2,7,5,9,6,6,9,5,4,3,7,3,333,301, callback);
      },
      function(callback) { 
      swineCreate(152,'Gedongmulyo','Yorkshire','Male',2005,65,6,'7/8/2008','Redd',8,7,7,5,3,10,3,3,8,8,10,9,9,7,9,2,346,494, callback);
      },
      function(callback) { 
      swineCreate(153,'Issy-les-Moulineaux','Yorkshire','Male',2005,53,6,'8/4/2017','Patrizius',4,6,10,5,2,3,2,6,3,10,5,4,2,5,9,7,257,78, callback);
      },
      function(callback) { 
      swineCreate(154,'Baishi','Yorkshire','Male',2005,55,2,'11/30/2003','Al',7,9,10,5,10,5,9,3,7,8,5,7,3,4,9,5,430,429, callback);
      },
      function(callback) { 
      swineCreate(155,'Insrom','Yorkshire','Male',2005,68,5,'1/28/2003','Michail',7,2,5,8,3,8,5,10,8,8,3,6,2,8,4,2,259,45, callback);
      },
      function(callback) { 
      swineCreate(156,'Pedro Leopoldo','Yorkshire','Male',2005,58,4,'1/13/2017','Goober',8,4,4,7,3,8,9,8,7,3,4,3,7,3,2,6,403,472, callback);
      },
      function(callback) { 
      swineCreate(157,'Jayapura','Yorkshire','Female',2005,71,6,'12/6/2001','Evvie',5,8,8,4,6,6,5,6,2,5,9,3,4,6,10,2,293,50, callback);
      },
      function(callback) { 
      swineCreate(158,'Arıqıran','Yorkshire','Female',2005,67,5,'10/31/2004','Madelena',3,7,3,4,9,4,7,9,6,9,9,7,9,5,3,10,342,44, callback);
      },
      function(callback) { 
      swineCreate(159,'Byala','Yorkshire','Male',2005,73,2,'4/15/2015','Jamil',4,9,6,4,2,6,2,3,2,10,8,6,9,6,9,4,292,351, callback);
      },
      function(callback) { 
      swineCreate(160,'Tumpakkepuh','Yorkshire','Male',2005,68,2,'3/11/2014','Roderigo',9,10,2,7,6,7,7,9,3,7,2,4,6,7,4,3,443,89, callback);
      },
      function(callback) { 
      swineCreate(161,'Basse-Terre','Yorkshire','Female',2005,54,2,'9/14/2011','Lynea',9,10,2,9,10,10,6,8,7,7,9,8,5,8,4,9,491,189, callback);
      },
      function(callback) { 
      swineCreate(162,'Bāfq','Yorkshire','Female',2005,63,4,'1/2/2017','Aili',9,9,7,4,8,4,4,9,3,8,8,5,10,10,8,2,277,183, callback);
      },
      function(callback) { 
      swineCreate(163,'Karlshamn','Yorkshire','Male',2005,59,5,'12/28/2006','Jodie',6,4,3,7,9,4,8,5,8,10,3,10,10,8,4,5,10,328, callback);
      },
      function(callback) { 
      swineCreate(164,'Ágios Pétros','Yorkshire','Female',2005,55,3,'8/13/2015','Lyda',5,9,10,5,4,10,8,8,4,2,7,9,2,8,6,5,496,268, callback);
      },
      function(callback) { 
      swineCreate(165,'Ijuí','Yorkshire','Male',2005,53,4,'1/10/2011','Zebulen',6,9,3,8,2,7,5,9,10,5,5,9,10,3,2,6,495,217, callback);
      },
      function(callback) { 
      swineCreate(166,'Yūki','Yorkshire','Male',2005,61,6,'6/25/2007','Fons',8,2,2,6,2,10,10,3,3,2,4,9,5,2,9,9,61,192, callback);
      },
      function(callback) { 
      swineCreate(167,'Distracción','Yorkshire','Male',2005,70,3,'5/5/2015','Kip',6,8,2,6,4,3,2,10,4,3,6,8,3,6,4,8,120,198, callback);
      },
      function(callback) { 
      swineCreate(168,'Manola','Yorkshire','Female',2005,68,4,'11/14/2008','Leela',2,5,2,5,3,10,7,9,3,2,4,10,4,7,5,4,302,194, callback);
      },
      function(callback) { 
      swineCreate(169,'Ush-Tyube','Yorkshire','Female',2005,58,4,'10/1/2011','Selma',2,8,6,9,6,4,7,4,6,7,5,8,8,6,2,3,332,62, callback);
      },
      function(callback) { 
      swineCreate(170,'Khemarat','Yorkshire','Male',2005,50,5,'6/27/2012','Buckie',7,5,10,2,9,9,3,4,7,3,9,8,2,3,2,9,467,288, callback);
      },
      function(callback) { 
      swineCreate(171,'Airuk','Yorkshire','Male',2005,67,3,'2/18/2012','Kippar',3,2,8,8,3,2,4,9,9,6,10,6,5,7,5,3,381,175, callback);
      },
      function(callback) { 
      swineCreate(172,'Lewopao','Yorkshire','Female',2005,59,5,'1/11/2017','Jacquetta',10,2,4,10,9,7,5,8,9,10,9,3,8,6,6,5,120,18, callback);
      },
      function(callback) { 
      swineCreate(173,'Butterworth','Yorkshire','Male',2005,58,6,'4/3/2010','Hugh',3,6,8,10,5,7,3,10,2,3,3,7,5,6,4,10,317,384, callback);
      },
      function(callback) { 
      swineCreate(174,'Silca','Yorkshire','Female',2005,74,3,'8/22/2015','Lanna',8,3,10,10,9,5,3,5,10,3,10,5,2,3,10,3,4,465, callback);
      },
      function(callback) { 
      swineCreate(175,'Toulouse','Yorkshire','Female',2005,65,3,'9/26/2011','Cicily',8,8,4,3,6,9,5,3,10,4,3,7,2,2,8,5,404,84, callback);
      },
      function(callback) { 
      swineCreate(176,'Miragaia','Yorkshire','Female',2005,59,6,'5/1/2002','Janeta',5,4,10,3,9,5,5,7,2,6,8,6,10,4,7,3,190,207, callback);
      },
      function(callback) { 
      swineCreate(177,'Passagem','Yorkshire','Male',2005,57,4,'11/17/2009','Timofei',7,6,10,5,6,10,6,8,2,10,7,5,2,2,9,6,272,370, callback);
      },
      function(callback) { 
      swineCreate(178,'Wuxi','Yorkshire','Female',2005,58,3,'9/17/2011','Debra',2,9,10,10,7,6,3,4,9,2,9,8,2,5,7,9,154,352, callback);
      },
      function(callback) { 
      swineCreate(179,'Nzega','Yorkshire','Female',2005,59,3,'8/26/2015','Dulcea',3,2,2,9,2,4,8,9,7,2,9,6,7,2,7,10,24,497, callback);
      },
      function(callback) { 
      swineCreate(180,'Xinkai','Yorkshire','Male',2005,53,2,'6/4/2006','Patsy',2,7,8,6,10,5,4,6,8,3,9,8,9,2,3,3,138,114, callback);
      },
      function(callback) { 
      swineCreate(181,'Núi Đối','Yorkshire','Female',2005,50,5,'3/7/2017','Addy',9,6,2,3,5,6,4,4,5,7,4,3,6,5,3,5,313,142, callback);
      },
      function(callback) { 
      swineCreate(182,'Khotynets','Yorkshire','Male',2005,54,2,'8/28/2007','Currey',7,2,6,9,9,2,6,7,9,8,10,2,7,4,6,3,56,434, callback);
      },
      function(callback) { 
      swineCreate(183,'Minggang','Yorkshire','Male',2005,67,2,'4/15/2015','Octavius',5,6,6,6,9,4,4,2,2,3,3,5,9,10,5,4,417,318, callback);
      },
      function(callback) { 
      swineCreate(184,'Masons Bay','Yorkshire','Female',2005,73,6,'8/26/2016','Margette',6,3,10,10,8,9,8,5,10,10,8,4,4,10,8,3,131,94, callback);
      },
      function(callback) { 
      swineCreate(185,'Makamba','Yorkshire','Male',2005,65,2,'5/11/2016','Mitch',10,7,6,6,5,4,7,7,8,6,8,2,2,7,7,5,143,141, callback);
      },
      function(callback) { 
      swineCreate(186,'Corona','Yorkshire','Female',2005,73,4,'9/11/2006','Janette',3,5,3,8,9,10,4,8,6,5,4,10,9,10,4,8,201,83, callback);
      },
      function(callback) { 
      swineCreate(187,'Santa Monica','Yorkshire','Male',2005,72,6,'7/21/2004','Tomlin',5,5,7,9,4,9,10,7,5,3,5,3,3,5,2,2,58,184, callback);
      },
      function(callback) { 
      swineCreate(188,'Bitkine','Yorkshire','Male',2005,56,2,'6/13/2003','Lindsey',10,4,10,6,7,5,6,5,5,3,7,7,10,2,2,7,367,115, callback);
      },
      function(callback) { 
      swineCreate(189,'Gorzów Śląski','Yorkshire','Male',2005,58,6,'2/8/2015','Krishna',7,9,7,8,6,5,9,3,2,3,2,6,6,4,6,6,51,338, callback);
      },
      function(callback) { 
      swineCreate(190,'Heka','Yorkshire','Female',2005,53,2,'6/26/2010','Etheline',6,2,6,3,4,7,2,3,8,2,5,9,10,2,4,3,211,7, callback);
      },
      function(callback) { 
      swineCreate(191,'Taihua','Yorkshire','Male',2005,68,3,'6/26/2005','Kilian',4,8,6,6,8,8,3,9,3,3,7,5,5,3,5,4,163,23, callback);
      },
      function(callback) { 
      swineCreate(192,'Cabalawan','Yorkshire','Male',2005,70,2,'5/3/2017','Kaleb',4,5,9,7,2,10,4,9,9,8,10,2,2,9,2,2,138,199, callback);
      },
      function(callback) { 
      swineCreate(193,'Quảng Ngãi','Yorkshire','Male',2005,56,4,'12/6/2013','Dani',6,2,6,10,6,6,9,6,4,5,4,8,4,9,2,6,42,360, callback);
      },
      function(callback) { 
      swineCreate(194,'Biny Selo','Yorkshire','Female',2005,75,6,'9/30/2001','Loni',6,6,8,9,4,5,6,8,7,2,9,6,8,5,3,8,119,167, callback);
      },
      function(callback) { 
      swineCreate(195,'Berthierville','Yorkshire','Male',2005,57,2,'3/1/2012','Heinrick',5,6,4,9,5,10,10,2,6,7,4,3,8,10,8,10,64,114, callback);
      },
      function(callback) { 
      swineCreate(196,'Jand','Yorkshire','Male',2005,52,5,'6/11/2003','Finn',5,10,7,5,5,7,8,3,6,9,2,4,5,7,2,8,104,64, callback);
      },
      function(callback) { 
      swineCreate(197,'Fada N gourma','Yorkshire','Male',2005,57,2,'6/14/2012','Lawton',8,10,3,2,8,8,4,7,6,6,8,10,8,3,4,6,239,234, callback);
      },
      function(callback) { 
      swineCreate(198,'San Miguel','Yorkshire','Male',2005,69,4,'10/17/2005','Cris',7,3,7,6,9,9,5,8,3,3,6,10,8,4,5,7,40,296, callback);
      },
      function(callback) { 
      swineCreate(199,'San Antonio','Yorkshire','Female',2005,61,3,'2/24/2017','Doti',9,7,3,7,7,8,8,6,8,3,4,10,8,8,7,3,446,184, callback);
      },
      function(callback) { 
      swineCreate(200,'Sanhui','Yorkshire','Female',2005,57,5,'7/15/2017','Adena',3,8,4,9,7,7,2,5,8,4,4,10,4,8,8,8,12,248, callback);
      },
      function(callback) { 
      swineCreate(201,'Prinza','Yorkshire','Female',2005,51,4,'1/21/2009','Clare',5,6,9,10,5,3,7,2,8,4,6,2,8,8,9,4,287,342, callback);
      },
      function(callback) { 
      swineCreate(202,'Cambuga','Yorkshire','Female',2005,58,5,'3/14/2003','Helena',2,10,9,9,7,2,8,3,4,4,4,7,9,3,2,4,227,492, callback);
      },
      function(callback) { 
      swineCreate(203,'Krebetkrajan','Yorkshire','Male',2005,66,6,'8/26/2007','Parker',10,6,2,6,6,8,5,7,8,2,7,5,5,6,4,3,119,469, callback);
      },
      function(callback) { 
      swineCreate(204,'Kaligutan','Yorkshire','Female',2005,56,3,'8/14/2006','Marjory',8,10,7,10,8,5,7,10,10,5,5,6,9,7,10,9,344,163, callback);
      },
      function(callback) { 
      swineCreate(205,'Kota Kinabalu','Yorkshire','Male',2005,53,5,'8/21/2006','Daryl',5,10,5,10,2,10,3,6,10,4,7,6,7,2,6,8,172,138, callback);
      },
      function(callback) { 
      swineCreate(206,'Kuala Lumpur','Yorkshire','Male',2005,74,2,'9/20/2011','Conant',5,6,5,2,4,7,5,4,9,10,2,6,4,5,3,10,403,301, callback);
      },
      function(callback) { 
      swineCreate(207,'Xilinji','Yorkshire','Male',2005,59,3,'12/24/2004','Merrick',7,4,6,4,7,10,7,10,4,9,4,9,7,4,5,3,226,366, callback);
      },
      function(callback) { 
      swineCreate(208,'Nevinnomyssk','Yorkshire','Male',2005,60,5,'1/27/2002','Alic',9,8,7,7,5,10,9,6,9,9,8,10,2,3,7,2,102,261, callback);
      },
      function(callback) { 
      swineCreate(209,'Uva','Yorkshire','Male',2005,61,4,'9/28/2012','Nevins',8,10,3,8,4,7,2,5,2,6,8,9,3,2,9,7,283,445, callback);
      },
      function(callback) { 
      swineCreate(210,'Krajan','Yorkshire','Male',2005,71,5,'11/18/2016','Reginald',8,3,3,2,3,5,4,8,8,8,3,8,10,5,10,3,129,152, callback);
      },
      function(callback) { 
      swineCreate(211,'Taghazout','Yorkshire','Female',2005,51,3,'8/24/2017','Zaneta',7,7,6,7,7,4,8,8,10,3,6,9,10,5,9,10,441,37, callback);
      },
      function(callback) { 
      swineCreate(212,'Dongle','Yorkshire','Female',2005,71,5,'7/18/2013','Celle',8,8,10,4,6,7,5,2,5,3,5,2,6,4,7,4,414,39, callback);
      },
      function(callback) { 
      swineCreate(213,'Bañga','Yorkshire','Female',2005,54,6,'12/16/2004','Shayla',7,10,4,8,4,5,7,5,5,9,3,10,5,6,5,8,153,231, callback);
      },
      function(callback) { 
      swineCreate(214,'Ngurensiti','Yorkshire','Male',2005,52,6,'11/30/2012','Stearne',5,9,10,10,6,5,9,3,4,7,3,4,10,5,6,9,25,121, callback);
      },
      function(callback) { 
      swineCreate(215,'Spytkowice','Yorkshire','Male',2005,52,3,'4/26/2003','Keven',10,4,2,6,3,7,4,8,5,9,2,8,4,2,2,8,127,423, callback);
      },
      function(callback) { 
      swineCreate(216,'Youyang','Yorkshire','Male',2005,72,6,'7/7/2008','Pryce',5,6,9,9,2,7,4,4,10,2,4,9,7,5,7,2,9,403, callback);
      },
      function(callback) { 
      swineCreate(217,'Nizhnekamsk','Yorkshire','Male',2005,51,5,'1/26/2014','Clementius',2,4,10,5,6,3,10,2,7,10,8,8,10,4,5,9,363,428, callback);
      },
      function(callback) { 
      swineCreate(218,'Xishui','Yorkshire','Male',2005,58,4,'9/18/2015','Ciro',10,6,6,3,4,4,5,2,9,6,4,3,8,6,3,6,439,183, callback);
      },
      function(callback) { 
      swineCreate(219,'Pravdinsk','Yorkshire','Female',2005,67,3,'1/17/2013','Tracy',4,9,10,9,7,7,9,6,6,6,3,9,5,3,5,4,123,314, callback);
      },
      function(callback) { 
      swineCreate(220,'"Palmas De Gran Canaria Las','Yorkshire','Male',2005,63,4,'7/17/2012','Kurt',7,2,2,10,6,8,3,9,3,9,5,7,10,10,7,6,362, callback);
      },
      function(callback) { 
      swineCreate(221,'Choszczno','Yorkshire','Male',2005,72,2,'6/10/2013','Welsh',4,5,5,4,5,10,6,6,10,7,6,8,8,9,3,4,114,224, callback);
      },
      function(callback) { 
      swineCreate(222,'Großklein','Yorkshire','Male',2005,53,4,'5/6/2015','Bryon',6,6,6,2,4,5,8,4,10,5,8,5,9,7,2,6,384,261, callback);
      },
      function(callback) { 
      swineCreate(223,'Cunday','Yorkshire','Male',2005,54,2,'3/9/2003','Kipp',6,9,8,10,7,4,5,7,7,6,6,10,5,7,2,7,368,2, callback);
      },
      function(callback) { 
      swineCreate(224,'Bestala','Yorkshire','Female',2005,72,6,'7/9/2005','Guillemette',5,5,4,2,3,5,2,3,5,7,7,3,6,6,8,3,360,391, callback);
      },
      function(callback) { 
      swineCreate(225,'Vamvakoú','Yorkshire','Male',2005,58,2,'9/4/2006','Merle',7,6,7,5,8,9,10,9,9,5,9,3,6,6,8,4,5,198, callback);
      },
      function(callback) { 
      swineCreate(226,'Sápes','Yorkshire','Female',2005,69,2,'5/26/2001','Ginnifer',6,4,2,5,9,10,2,7,8,3,4,4,6,3,6,4,329,240, callback);
      },
      function(callback) { 
      swineCreate(227,'Kansas City','Yorkshire','Male',2005,71,6,'11/22/2004','Rriocard',3,7,7,2,9,7,7,2,6,7,2,10,9,6,9,10,164,207, callback);
      },
      function(callback) { 
      swineCreate(228,'Novomyshastovskaya','Yorkshire','Male',2005,56,2,'2/4/2008','Othello',7,6,4,7,6,4,5,9,9,4,5,8,8,8,6,9,172,299, callback);
      },
      function(callback) { 
      swineCreate(229,'Sitampiky','Yorkshire','Male',2005,60,4,'1/13/2012','Alexandros',3,2,8,10,5,9,4,8,3,5,9,8,10,4,6,5,14,248, callback);
      },
      function(callback) { 
      swineCreate(230,'Cimanggu Wetan','Yorkshire','Female',2005,64,4,'10/18/2014','Pauletta',9,10,4,7,3,4,10,5,2,7,9,8,10,4,8,2,133,272, callback);
      },
      function(callback) { 
      swineCreate(231,'Pniewy','Yorkshire','Male',2005,74,3,'1/11/2017','Fax',4,7,5,7,3,7,3,2,3,9,10,6,10,3,9,9,175,20, callback);
      },
      function(callback) { 
      swineCreate(232,'San Bernardo','Yorkshire','Male',2005,61,6,'3/8/2010','Solomon',6,8,4,7,4,3,5,9,7,4,7,2,5,3,3,7,130,214, callback);
      },
      function(callback) { 
      swineCreate(233,'Jorong','Yorkshire','Male',2005,71,3,'1/15/2009','Julio',5,6,5,2,4,6,10,7,8,6,4,2,2,10,7,5,484,202, callback);
      },
      function(callback) { 
      swineCreate(234,'Daxinshao','Yorkshire','Male',2005,72,3,'3/9/2009','Hartley',10,6,6,2,3,6,6,5,3,9,7,10,3,4,9,9,145,227, callback);
      },
      function(callback) { 
      swineCreate(235,'Icononzo','Yorkshire','Male',2005,51,3,'8/5/2010','Zachery',7,9,5,10,2,4,5,9,3,8,6,3,7,3,8,6,214,332, callback);
      },
      function(callback) { 
      swineCreate(236,'Marbel','Yorkshire','Female',2005,72,3,'6/27/2007','Binnie',5,3,7,8,8,8,7,2,9,8,3,7,7,6,7,7,26,35, callback);
      },
      function(callback) { 
      swineCreate(237,'Si Wilai','Yorkshire','Female',2005,70,3,'5/29/2004','Gilligan',7,10,9,2,4,3,8,5,4,4,2,10,2,4,10,9,143,38, callback);
      },
      function(callback) { 
      swineCreate(238,'Rimpakgede','Yorkshire','Male',2005,54,4,'8/31/2014','Filippo',8,8,4,10,2,8,5,7,7,7,10,6,8,9,9,9,469,10, callback);
      },
      function(callback) { 
      swineCreate(239,'La Mula','Yorkshire','Male',2005,62,2,'11/30/2010','Verne',10,5,8,10,2,3,10,2,8,6,5,10,2,3,7,7,269,279, callback);
      },
      function(callback) { 
      swineCreate(240,'Lijia','Yorkshire','Female',2005,74,6,'7/3/2004','Amara',4,5,9,7,3,7,8,5,5,4,7,2,8,5,5,6,351,426, callback);
      },
      function(callback) { 
      swineCreate(241,'Aga','Yorkshire','Male',2005,61,3,'9/10/2016','Hugibert',9,2,3,7,8,4,7,4,5,10,2,3,9,5,9,4,463,395, callback);
      },
      function(callback) { 
      swineCreate(242,'Marechal Deodoro','Yorkshire','Male',2005,75,5,'5/5/2005','Ive',5,6,5,7,4,3,5,5,4,5,9,3,10,9,6,6,62,83, callback);
      },
      function(callback) { 
      swineCreate(243,'Lelystad','Yorkshire','Female',2005,75,5,'4/19/2014','Winonah',9,4,3,5,2,10,6,10,2,6,10,9,7,8,3,5,498,44, callback);
      },
      function(callback) { 
      swineCreate(244,'Léo','Yorkshire','Male',2005,66,4,'12/5/2006','Samuele',6,8,2,2,2,3,9,10,8,4,10,7,7,7,9,3,215,61, callback);
      },
      function(callback) { 
      swineCreate(245,'Dadus','Yorkshire','Female',2005,72,5,'11/18/2011','Almeta',5,2,3,5,8,5,6,5,6,5,6,8,7,6,3,6,149,478, callback);
      },
      function(callback) { 
      swineCreate(246,'Florida','Yorkshire','Male',2005,75,3,'12/22/2007','Kenneth',3,7,2,3,10,9,7,6,6,3,6,3,10,2,8,9,471,433, callback);
      },
      function(callback) { 
      swineCreate(247,'Järfälla','Yorkshire','Female',2005,55,6,'7/8/2017','Kim',10,2,7,6,7,4,2,8,6,5,3,8,6,7,8,8,345,478, callback);
      },
      function(callback) { 
      swineCreate(248,'Mejdan - Obilićevo','Yorkshire','Female',2005,50,3,'2/12/2001','Laura',6,2,8,3,10,8,6,5,7,4,8,5,7,7,9,9,15,385, callback);
      },
      function(callback) { 
      swineCreate(249,'Calceta','Yorkshire','Female',2005,66,2,'4/5/2004','Dena',2,6,3,6,9,7,6,9,9,4,8,8,8,3,7,2,174,132, callback);
      },
      function(callback) { 
      swineCreate(250,'Changning','Yorkshire','Male',2005,61,4,'5/9/2016','Orbadiah',2,6,7,6,2,6,4,6,9,10,7,7,5,3,2,9,487,159, callback);
      },
      function(callback) { 
      swineCreate(251,'Argasari','Yorkshire','Male',2005,57,3,'1/10/2003','Kienan',8,10,6,3,7,5,3,7,9,9,6,7,5,3,10,9,285,381, callback);
      },
      function(callback) { 
      swineCreate(252,'Sychëvo','Yorkshire','Male',2005,68,6,'8/24/2005','Loy',8,6,4,8,4,7,10,9,10,8,4,9,6,7,2,5,413,481, callback);
      },
      function(callback) { 
      swineCreate(253,'Brailiv','Yorkshire','Male',2005,50,3,'2/28/2014','Petr',10,7,7,10,5,10,6,4,7,9,7,5,2,6,10,6,236,499, callback);
      },
      function(callback) { 
      swineCreate(254,'Huasahuasi','Yorkshire','Female',2005,61,3,'6/30/2015','Merl',4,8,8,3,3,6,10,3,5,10,10,2,4,8,8,4,473,34, callback);
      },
      function(callback) { 
      swineCreate(255,'København','Yorkshire','Female',2005,52,4,'11/15/2013','Aviva',7,7,2,10,9,3,5,4,7,9,10,9,7,6,3,8,326,84, callback);
      },
      function(callback) { 
      swineCreate(256,'Lấp Vò','Yorkshire','Female',2005,58,4,'11/17/2000','Essa',6,9,8,10,10,7,2,9,9,10,3,5,6,8,6,5,334,92, callback);
      },
      function(callback) { 
      swineCreate(257,'Antwerpen','Yorkshire','Female',2005,54,6,'1/30/2017','Cherice',5,9,5,6,9,4,4,10,8,7,4,2,4,2,8,4,405,133, callback);
      },
      function(callback) { 
      swineCreate(258,'Gumawang','Yorkshire','Female',2005,59,6,'12/19/2010','Andrea',2,10,3,3,6,7,6,5,4,6,6,9,9,10,9,4,283,332, callback);
      },
      function(callback) { 
      swineCreate(259,'Kraljevica','Yorkshire','Male',2005,54,3,'8/15/2001','Cecilius',7,9,8,2,2,7,3,2,5,3,2,3,6,9,5,3,485,215, callback);
      },
      function(callback) { 
      swineCreate(260,'Guiniculalay','Yorkshire','Male',2005,52,4,'1/8/2001','Colver',8,5,5,6,8,8,9,4,7,3,9,4,3,4,3,2,133,106, callback);
      },
      function(callback) { 
      swineCreate(261,'Vagos','Yorkshire','Male',2005,70,3,'12/3/2002','Winnie',8,3,10,5,6,6,2,3,3,7,4,6,5,6,4,4,292,350, callback);
      },
      function(callback) { 
      swineCreate(262,'Huangni','Yorkshire','Male',2005,58,6,'9/16/2013','Blair',8,2,7,2,3,10,5,2,4,6,10,7,6,7,9,5,111,497, callback);
      },
      function(callback) { 
      swineCreate(263,'Nguru','Yorkshire','Male',2005,63,5,'5/22/2007','Temple',4,10,4,5,6,6,4,8,4,4,9,3,8,4,2,4,36,375, callback);
      },
      function(callback) { 
      swineCreate(264,'Enschede','Yorkshire','Female',2005,68,4,'8/31/2006','Meredith',9,10,4,5,2,6,7,3,5,10,3,2,8,8,9,5,105,97, callback);
      },
      function(callback) { 
      swineCreate(265,'Kyshtym','Yorkshire','Male',2005,60,4,'6/7/2008','Win',10,2,5,8,7,9,2,4,5,10,10,2,8,6,9,10,27,180, callback);
      },
      function(callback) { 
      swineCreate(266,'Cibenda','Yorkshire','Female',2005,69,3,'8/22/2004','Dani',4,3,4,7,9,3,2,10,7,3,9,3,8,4,7,3,325,202, callback);
      },
      function(callback) { 
      swineCreate(267,'Cibolek Kidul','Yorkshire','Male',2005,72,5,'11/3/2016','Mario',5,6,6,5,10,5,10,6,7,3,5,7,10,5,2,7,290,81, callback);
      },
      function(callback) { 
      swineCreate(268,'Kolobovo','Yorkshire','Male',2005,61,4,'5/23/2013','Kurt',9,10,7,4,6,2,8,2,6,4,10,6,3,6,9,3,145,481, callback);
      },
      function(callback) { 
      swineCreate(269,'Danyang','Yorkshire','Male',2005,67,2,'10/14/2015','Kurtis',10,4,2,6,2,2,3,9,4,9,10,7,6,5,3,6,487,249, callback);
      },
      function(callback) { 
      swineCreate(270,'Králův Dvůr','Yorkshire','Male',2005,64,5,'12/23/2014','Guillaume',6,8,4,10,4,9,4,9,5,8,9,9,4,9,9,8,329,440, callback);
      },
      function(callback) { 
      swineCreate(271,'Aguasay','Yorkshire','Female',2005,60,3,'12/12/2014','Anallese',10,10,5,6,7,6,5,4,10,5,4,5,8,4,7,9,341,362, callback);
      },
      function(callback) { 
      swineCreate(272,'Sabanagrande','Yorkshire','Male',2005,58,5,'9/24/2002','Saunderson',7,9,8,6,6,10,2,10,2,2,3,3,4,10,3,5,421,483, callback);
      },
      function(callback) { 
      swineCreate(273,'Niaohe','Yorkshire','Male',2005,71,2,'2/18/2015','Kalil',4,3,8,8,4,6,3,4,8,3,2,5,2,4,2,5,186,429, callback);
      },
      function(callback) { 
      swineCreate(274,'Pervomayskaya','Yorkshire','Female',2005,70,3,'4/23/2011','Rosalie',5,3,9,8,10,8,3,6,9,2,9,7,4,9,3,5,117,472, callback);
      },
      function(callback) { 
      swineCreate(275,'Živinice','Yorkshire','Female',2005,69,3,'9/19/2008','Petronilla',5,7,4,9,5,5,7,2,10,6,6,5,8,6,3,3,373,454, callback);
      },
      function(callback) { 
      swineCreate(276,'Kiiminki','Yorkshire','Male',2005,61,4,'11/29/2002','Sheffie',6,4,3,5,5,2,8,3,7,9,7,8,8,4,5,2,313,294, callback);
      },
      function(callback) { 
      swineCreate(277,'Tsyelyakhany','Yorkshire','Female',2005,70,4,'7/2/2004','Elga',3,4,5,5,10,7,3,7,2,5,6,5,7,6,9,7,171,37, callback);
      },
      function(callback) { 
      swineCreate(278,'Pagatan','Yorkshire','Male',2005,58,5,'5/16/2008','Sayres',9,9,4,7,6,4,4,5,5,3,5,6,2,7,8,9,220,38, callback);
      },
      function(callback) { 
      swineCreate(279,'Luobei','Yorkshire','Female',2005,53,6,'12/12/2012','Layla',4,6,2,8,5,4,9,4,7,10,10,5,2,4,4,9,6,1, callback);
      },
      function(callback) { 
      swineCreate(280,'Atap','Yorkshire','Female',2005,60,5,'6/8/2007','Amabel',6,3,9,4,8,9,3,5,5,3,2,4,5,4,8,3,195,397, callback);
      },
      function(callback) { 
      swineCreate(281,'Pregonero','Yorkshire','Male',2005,73,4,'2/22/2010','Don',8,2,7,8,7,3,4,5,2,2,3,6,9,8,9,6,273,28, callback);
      },
      function(callback) { 
      swineCreate(282,'Binonga','Yorkshire','Male',2005,67,2,'8/20/2010','Ezekiel',5,9,8,3,5,3,4,6,7,7,2,5,4,5,5,10,276,267, callback);
      },
      function(callback) { 
      swineCreate(283,'Peachland','Yorkshire','Female',2005,64,4,'4/7/2015','Giana',2,3,5,10,10,9,5,2,4,3,3,7,6,8,6,2,267,151, callback);
      },
      function(callback) { 
      swineCreate(284,'Magisterial','Yorkshire','Female',2005,68,3,'9/23/2016','Bell',5,2,5,10,5,4,5,6,3,4,3,5,6,2,2,8,146,140, callback);
      },
      function(callback) { 
      swineCreate(285,'Wujiabao','Yorkshire','Male',2005,60,5,'6/18/2017','Ralph',7,3,6,7,4,6,9,5,7,10,6,7,5,8,10,4,475,385, callback);
      },
      function(callback) { 
      swineCreate(286,'Charlestown','Yorkshire','Female',2005,53,6,'10/19/2015','Cornelle',5,4,7,5,3,3,6,6,2,9,2,4,10,9,5,10,31,406, callback);
      },
      function(callback) { 
      swineCreate(287,'Kalibunder','Yorkshire','Female',2005,72,4,'12/25/2004','Heath',5,3,2,3,7,9,2,2,7,8,5,6,2,8,4,6,454,37, callback);
      },
      function(callback) { 
      swineCreate(288,'Onguday','Yorkshire','Female',2005,52,4,'2/23/2004','Corliss',4,9,5,5,9,3,4,5,10,4,3,9,8,10,5,8,89,363, callback);
      },
      function(callback) { 
      swineCreate(289,'Yujiao','Yorkshire','Female',2005,54,5,'5/20/2005','Maurizia',3,6,9,6,2,9,4,10,8,9,2,9,4,6,6,9,304,131, callback);
      },
      function(callback) { 
      swineCreate(290,'Metz','Yorkshire','Female',2005,71,5,'3/30/2014','Naomi',5,10,6,3,6,4,6,5,10,5,5,7,6,3,9,10,434,435, callback);
      },
      function(callback) { 
      swineCreate(291,'Hengdian','Yorkshire','Female',2005,74,3,'12/7/2008','Gilli',9,10,8,4,2,2,8,2,5,8,9,5,2,9,6,10,260,218, callback);
      },
      function(callback) { 
      swineCreate(292,'Paty do Alferes','Yorkshire','Female',2005,63,6,'11/24/2007','Lenore',5,7,7,3,4,3,7,6,5,4,8,2,10,2,2,8,48,171, callback);
      },
      function(callback) { 
      swineCreate(293,'Roi Et','Yorkshire','Female',2005,75,6,'3/26/2013','Clemmy',5,3,9,10,9,6,3,7,4,9,4,6,7,5,7,9,65,147, callback);
      },
      function(callback) { 
      swineCreate(294,'Fort Lauderdale','Yorkshire','Female',2005,71,5,'5/13/2013','Caryl',3,8,9,8,4,2,2,9,9,9,5,9,6,5,10,3,499,197, callback);
      },
      function(callback) { 
      swineCreate(295,'Paccha','Yorkshire','Female',2005,53,4,'10/21/2001','Trixie',9,3,9,5,3,7,3,10,6,3,8,8,8,7,5,7,277,55, callback);
      },
      function(callback) { 
      swineCreate(296,'Napanee Downtown','Yorkshire','Male',2005,53,6,'4/27/2001','Adrien',6,5,7,10,7,10,3,3,9,7,8,5,8,2,4,6,229,393, callback);
      },
      function(callback) { 
      swineCreate(297,'Zhetian','Yorkshire','Male',2005,61,5,'6/2/2007','Pancho',5,7,6,4,10,9,3,9,5,3,3,7,10,2,4,3,412,292, callback);
      },
      function(callback) { 
      swineCreate(298,'Okinawa Número Uno','Yorkshire','Male',2005,65,2,'7/31/2005','Otis',7,4,8,10,6,6,5,7,9,8,7,4,5,6,8,4,9,208, callback);
      },
      function(callback) { 
      swineCreate(299,'Bojen Kulon','Yorkshire','Female',2005,63,2,'8/23/2010','Jeannette',10,7,3,10,9,2,4,7,9,6,8,4,7,4,3,4,474,205, callback);
      },
      function(callback) { 
      swineCreate(300,'Lebedyn','Yorkshire','Female',2005,56,3,'7/10/2012','Willamina',2,10,4,9,9,6,6,3,9,7,2,5,9,10,2,6,299,279, callback);
      },
      function(callback) { 
      swineCreate(301,'Minusinsk','Yorkshire','Female',2005,72,3,'4/27/2015','Fredia',3,10,6,5,5,5,2,9,7,10,10,3,6,4,6,8,472,320, callback);
      },
      function(callback) { 
      swineCreate(302,'Surgut','Yorkshire','Female',2005,72,4,'10/18/2001','Etheline',4,9,4,9,2,6,6,9,3,9,6,9,9,8,10,10,2,129, callback);
      },
      function(callback) { 
      swineCreate(303,'São Gabriel','Yorkshire','Female',2005,62,4,'8/18/2015','Gabbi',9,2,5,9,8,3,10,7,9,9,4,10,10,10,9,5,302,472, callback);
      },
      function(callback) { 
      swineCreate(304,'Banjar','Yorkshire','Female',2005,53,5,'2/8/2005','Sela',3,8,8,10,6,7,2,3,8,6,8,2,9,2,2,5,343,55, callback);
      },
      function(callback) { 
      swineCreate(305,'Bavorov','Yorkshire','Female',2005,54,5,'4/22/2005','Nina',9,7,8,3,6,4,5,3,7,5,8,2,7,10,6,7,102,392, callback);
      },
      function(callback) { 
      swineCreate(306,'Facatativá','Yorkshire','Male',2005,59,2,'3/24/2010','Joachim',10,8,2,3,7,8,6,4,3,5,5,2,3,3,10,7,457,318, callback);
      },
      function(callback) { 
      swineCreate(307,'Ozurgeti','Yorkshire','Male',2005,66,3,'9/21/2017','Renault',9,4,6,3,2,7,10,10,7,3,2,2,2,10,3,8,159,420, callback);
      },
      function(callback) { 
      swineCreate(308,'Huangzhuang','Yorkshire','Male',2005,70,5,'3/31/2017','Jacky',7,6,2,4,2,8,8,9,4,2,4,10,3,4,4,10,377,474, callback);
      },
      function(callback) { 
      swineCreate(309,'Bugo','Yorkshire','Male',2005,59,5,'3/18/2013','Caddric',2,10,8,6,6,4,9,8,2,5,6,8,6,5,7,5,453,178, callback);
      },
      function(callback) { 
      swineCreate(310,'Chiara','Yorkshire','Female',2005,60,3,'7/9/2003','Phyllida',3,2,2,6,3,7,4,3,4,2,5,2,3,6,9,2,337,14, callback);
      },
      function(callback) { 
      swineCreate(311,'Churubamba','Yorkshire','Male',2005,64,6,'6/30/2010','Guillaume',10,2,8,7,8,3,9,9,7,8,6,5,10,5,10,9,436,59, callback);
      },
      function(callback) { 
      swineCreate(312,'Sumberan','Yorkshire','Female',2005,64,5,'11/8/2013','Faith',4,7,4,9,5,8,6,5,7,2,10,4,9,2,6,7,366,147, callback);
      },
      function(callback) { 
      swineCreate(313,'Lomme','Yorkshire','Male',2005,67,6,'12/27/2016','Meryl',4,2,9,9,2,9,4,9,9,6,4,6,7,10,4,5,344,14, callback);
      },
      function(callback) { 
      swineCreate(314,'Wólka Pełkińska','Yorkshire','Female',2005,61,5,'11/5/2008','Maible',2,9,7,4,8,2,8,2,3,7,7,8,6,5,9,3,87,361, callback);
      },
      function(callback) { 
      swineCreate(315,'Sietesz','Yorkshire','Female',2005,70,3,'4/26/2005','Kizzee',7,4,9,5,4,10,5,3,7,7,5,9,8,7,3,5,418,80, callback);
      },
      function(callback) { 
      swineCreate(316,'Kuantan','Yorkshire','Female',2005,69,4,'12/12/2003','Kaitlyn',9,6,5,8,9,6,9,9,10,9,2,10,2,2,7,7,398,427, callback);
      },
      function(callback) { 
      swineCreate(317,'Dāngām','Yorkshire','Male',2005,64,6,'4/10/2010','Brade',5,8,9,8,6,4,4,3,8,7,3,9,8,7,6,9,330,47, callback);
      },
      function(callback) { 
      swineCreate(318,'Brodek u Přerova','Yorkshire','Female',2005,69,4,'3/24/2013','Evvy',2,8,5,10,5,5,8,10,3,10,5,6,6,4,8,8,351,321, callback);
      },
      function(callback) { 
      swineCreate(319,'Fómeque','Yorkshire','Male',2005,57,3,'5/23/2014','Dexter',10,5,9,9,2,2,9,8,3,7,8,9,8,3,4,4,467,327, callback);
      },
      function(callback) { 
      swineCreate(320,'Solna','Yorkshire','Male',2005,65,2,'8/1/2004','Dav',9,6,9,5,9,2,4,4,4,8,9,7,4,7,9,9,78,31, callback);
      },
      function(callback) { 
      swineCreate(321,'Quiruvilca','Yorkshire','Male',2005,54,4,'1/25/2007','Arte',10,5,2,8,10,4,2,7,10,8,3,10,3,10,10,4,232,369, callback);
      },
      function(callback) { 
      swineCreate(322,'San Francisco','Yorkshire','Female',2005,68,5,'11/24/2005','Randie',7,6,7,10,3,2,2,2,8,3,8,6,7,10,6,3,392,442, callback);
      },
      function(callback) { 
      swineCreate(323,'Gengqing','Yorkshire','Female',2005,64,2,'12/17/2011','Davita',5,4,9,3,5,4,2,10,2,10,7,6,3,10,10,6,110,111, callback);
      },
      function(callback) { 
      swineCreate(324,'Hallstahammar','Yorkshire','Female',2005,66,3,'1/30/2013','Ivy',7,10,4,10,9,9,7,7,9,3,2,10,2,6,8,9,86,473, callback);
      },
      function(callback) { 
      swineCreate(325,'Draginje','Yorkshire','Male',2005,70,2,'7/3/2005','Cart',6,2,10,6,10,2,10,3,5,3,10,2,10,7,4,7,112,131, callback);
      },
      function(callback) { 
      swineCreate(326,'Barão de Cocais','Yorkshire','Male',2005,72,5,'4/24/2003','Ripley',10,3,2,10,3,4,4,8,6,5,9,9,2,3,9,6,83,474, callback);
      },
      function(callback) { 
      swineCreate(327,'Ticrapo','Yorkshire','Male',2005,61,2,'11/8/2006','Steward',5,5,4,4,5,4,4,9,2,2,7,5,10,3,5,3,467,79, callback);
      },
      function(callback) { 
      swineCreate(328,'Rzhavki','Yorkshire','Female',2005,63,4,'6/11/2008','Daisi',7,8,5,4,8,5,6,10,3,8,8,5,8,9,2,7,122,456, callback);
      },
      function(callback) { 
      swineCreate(329,'Kalinovskoye','Yorkshire','Male',2005,67,2,'11/30/2006','Tye',6,2,6,8,6,3,10,2,8,10,4,2,6,7,9,5,170,65, callback);
      },
      function(callback) { 
      swineCreate(330,'Pavlodol’skaya','Yorkshire','Male',2005,65,3,'1/6/2014','Riccardo',4,8,9,8,9,9,10,2,7,3,10,6,8,6,4,10,261,174, callback);
      },
      function(callback) { 
      swineCreate(331,'Qinghaihu','Yorkshire','Male',2005,55,3,'5/7/2012','Vassily',10,5,6,5,5,10,8,8,5,4,10,3,3,6,5,7,245,332, callback);
      },
      function(callback) { 
      swineCreate(332,'San Miguel','Yorkshire','Male',2005,59,3,'12/1/2002','Harlin',3,5,8,4,9,9,7,7,4,8,8,4,8,4,8,6,349,198, callback);
      },
      function(callback) { 
      swineCreate(333,'Chipinge','Yorkshire','Female',2005,70,6,'5/17/2004','Britney',3,9,10,10,9,9,7,3,9,7,8,10,4,5,7,10,334,178, callback);
      },
      function(callback) { 
      swineCreate(334,'Jianxincun','Yorkshire','Female',2005,65,3,'7/18/2001','Brittni',8,6,5,10,7,4,10,10,3,7,2,7,6,8,9,7,435,290, callback);
      },
      function(callback) { 
      swineCreate(335,'Tertek','Yorkshire','Female',2005,60,3,'9/28/2012','Clare',9,9,2,5,3,4,7,2,5,9,7,6,3,7,9,9,31,75, callback);
      },
      function(callback) { 
      swineCreate(336,'Tierra Blanca','Yorkshire','Male',2005,61,4,'11/1/2000','Rafael',7,7,5,9,8,3,7,8,10,7,10,6,5,9,5,10,248,256, callback);
      },
      function(callback) { 
      swineCreate(337,'Piggs Peak','Yorkshire','Female',2005,70,2,'9/7/2010','Cathrine',9,10,6,9,10,5,4,10,9,3,7,2,2,2,2,10,147,104, callback);
      },
      function(callback) { 
      swineCreate(338,'Shilong','Yorkshire','Female',2005,64,4,'11/26/2007','Ricki',7,9,8,2,6,8,2,5,8,9,9,8,8,4,2,10,345,109, callback);
      },
      function(callback) { 
      swineCreate(339,'Heihe','Yorkshire','Female',2005,74,4,'4/19/2015','Harlie',8,6,9,3,8,3,9,2,8,10,4,6,2,6,4,9,146,269, callback);
      },
      function(callback) { 
      swineCreate(340,'Pampas','Yorkshire','Female',2005,56,4,'5/31/2010','Donella',8,9,8,3,6,9,9,3,5,7,5,7,6,7,9,2,181,246, callback);
      },
      function(callback) { 
      swineCreate(341,'Phon Phisai','Yorkshire','Female',2005,50,2,'12/5/2013','Norri',9,10,5,8,10,9,5,4,2,3,9,4,2,8,9,8,316,78, callback);
      },
      function(callback) { 
      swineCreate(342,'Karlskoga','Yorkshire','Male',2005,57,3,'5/12/2006','Loy',8,6,3,10,2,8,8,8,6,2,3,9,10,9,10,10,216,97, callback);
      },
      function(callback) { 
      swineCreate(343,'Thessaloníki','Yorkshire','Female',2005,53,4,'3/19/2011','Charity',8,8,8,2,7,6,4,4,4,10,2,8,6,7,9,5,309,83, callback);
      },
      function(callback) { 
      swineCreate(344,'Buritis','Yorkshire','Male',2005,74,4,'2/28/2016','Tobias',5,2,4,7,3,9,5,3,8,10,4,4,3,4,9,8,181,298, callback);
      },
      function(callback) { 
      swineCreate(345,'Anak','Yorkshire','Female',2005,59,2,'11/13/2000','Selia',10,5,6,8,3,7,2,3,8,9,4,5,3,5,5,5,40,99, callback);
      },
      function(callback) { 
      swineCreate(346,'Emiliano Zapata','Yorkshire','Female',2005,53,4,'3/18/2001','Lilas',2,10,4,6,9,8,10,4,5,9,4,3,7,10,3,3,11,303, callback);
      },
      function(callback) { 
      swineCreate(347,'Navegantes','Yorkshire','Male',2005,62,4,'7/14/2002','Seumas',5,5,9,9,4,5,3,7,6,4,6,9,7,2,9,3,26,151, callback);
      },
      function(callback) { 
      swineCreate(348,'Osby','Yorkshire','Female',2005,57,2,'1/2/2002','Hilde',2,3,9,3,3,10,3,2,6,4,3,10,5,3,4,9,215,309, callback);
      },
      function(callback) { 
      swineCreate(349,'Bahía Honda','Yorkshire','Female',2005,53,3,'6/19/2017','Bernadine',2,5,10,2,3,10,9,9,9,3,3,10,5,3,2,4,226,188, callback);
      },
      function(callback) { 
      swineCreate(350,'Muro','Yorkshire','Male',2005,54,3,'7/23/2014','Filippo',5,2,5,6,4,9,10,5,7,9,8,2,10,6,10,8,79,93, callback);
      },
      function(callback) { 
      swineCreate(351,'Escazú','Yorkshire','Male',2005,64,5,'5/13/2003','Jock',8,9,10,3,9,5,7,7,7,3,6,2,6,9,9,8,209,471, callback);
      },
      function(callback) { 
      swineCreate(352,'Mozhga','Yorkshire','Male',2005,61,3,'5/16/2004','Frederik',2,6,2,7,5,6,6,6,6,5,9,10,7,6,6,9,447,437, callback);
      },
      function(callback) { 
      swineCreate(353,'Krzęcin','Yorkshire','Female',2005,70,2,'7/8/2012','Lanni',5,2,6,8,8,4,7,5,8,10,4,10,4,7,6,5,365,19, callback);
      },
      function(callback) { 
      swineCreate(354,'Ainaro','Yorkshire','Female',2005,52,4,'9/11/2009','Wynny',8,6,7,3,8,9,3,5,7,8,10,7,3,10,8,9,366,9, callback);
      },
      function(callback) { 
      swineCreate(355,'Selajambe Satu','Yorkshire','Female',2005,56,4,'6/15/2017','Cora',8,8,8,9,6,10,3,9,10,3,9,4,10,2,10,5,429,56, callback);
      },
      function(callback) { 
      swineCreate(356,'Luzern','Yorkshire','Female',2005,60,2,'8/3/2008','Tedi',6,8,2,8,3,5,9,7,5,9,4,4,5,9,4,6,313,222, callback);
      },
      function(callback) { 
      swineCreate(357,'Gujba','Yorkshire','Male',2005,56,3,'6/3/2014','Wolfie',3,10,8,6,5,9,2,4,10,9,6,10,3,8,7,7,70,454, callback);
      },
      function(callback) { 
      swineCreate(358,'Cibeunying','Yorkshire','Male',2005,56,2,'6/8/2003','Jeramey',5,3,4,10,6,7,7,9,10,5,7,8,10,6,7,5,173,432, callback);
      },
      function(callback) { 
      swineCreate(359,'Semenivka','Yorkshire','Male',2005,60,6,'4/21/2007','Lynn',2,7,8,6,9,6,9,8,2,5,8,4,5,5,3,10,83,143, callback);
      },
      function(callback) { 
      swineCreate(360,'Panayagan','Yorkshire','Female',2005,54,2,'10/24/2015','Brooks',8,10,4,6,4,10,3,4,10,5,6,9,4,8,2,2,140,442, callback);
      },
      function(callback) { 
      swineCreate(361,'Changqi','Yorkshire','Male',2005,58,3,'8/3/2007','Quint',6,10,9,5,9,5,8,8,2,2,2,6,5,9,3,5,395,322, callback);
      },
      function(callback) { 
      swineCreate(362,'Kalate','Yorkshire','Female',2005,54,4,'12/12/2004','Jacquenette',5,3,3,5,8,4,8,2,3,8,9,6,5,4,2,10,316,179, callback);
      },
      function(callback) { 
      swineCreate(363,'Míthymna','Yorkshire','Male',2005,62,3,'11/3/2000','Emery',7,3,2,8,9,9,7,10,8,6,10,9,5,10,7,10,152,51, callback);
      },
      function(callback) { 
      swineCreate(364,'Merkezköy','Yorkshire','Male',2005,69,5,'2/1/2007','Hewe',6,8,7,3,10,3,3,9,4,8,7,3,8,7,4,9,442,337, callback);
      },
      function(callback) { 
      swineCreate(365,'Lons-le-Saunier','Yorkshire','Female',2005,65,4,'8/31/2011','Demetris',4,4,6,2,5,3,10,7,7,3,6,4,8,3,4,9,478,309, callback);
      },
      function(callback) { 
      swineCreate(366,'Banturkrajan','Yorkshire','Female',2005,50,3,'8/23/2006','Colleen',2,4,9,8,2,3,2,5,5,8,10,3,3,6,9,8,127,401, callback);
      },
      function(callback) { 
      swineCreate(367,'Huansheng','Yorkshire','Female',2005,71,3,'1/9/2007','Lauralee',9,6,5,7,6,4,8,9,7,5,4,6,7,10,9,6,361,282, callback);
      },
      function(callback) { 
      swineCreate(368,'Sinchao','Yorkshire','Male',2005,68,5,'6/9/2016','Saunders',2,10,9,8,8,9,2,3,7,6,10,9,3,5,9,5,388,482, callback);
      },
      function(callback) { 
      swineCreate(369,'Pangpang','Yorkshire','Female',2005,62,3,'5/21/2015','Retha',8,5,4,5,4,6,2,10,8,2,9,10,4,9,6,10,267,255, callback);
      },
      function(callback) { 
      swineCreate(370,'Lanlongkou','Yorkshire','Female',2005,72,3,'9/2/2004','Sabine',6,10,7,3,10,4,6,8,10,10,9,8,5,6,3,9,471,215, callback);
      },
      function(callback) { 
      swineCreate(371,'Benito Juarez','Yorkshire','Male',2005,53,4,'8/26/2008','Ulric',4,9,3,6,7,10,4,2,8,7,8,9,10,7,2,6,79,454, callback);
      },
      function(callback) { 
      swineCreate(372,'Jiumen','Yorkshire','Male',2005,52,5,'4/19/2010','Holmes',10,4,3,3,8,5,9,9,8,8,3,8,4,9,9,10,470,241, callback);
      },
      function(callback) { 
      swineCreate(373,'Lebedyn','Yorkshire','Female',2005,67,2,'7/18/2002','Shoshana',10,8,6,8,5,9,3,2,10,5,5,2,6,8,2,9,453,8, callback);
      },
      function(callback) { 
      swineCreate(374,'Dodu Dua','Yorkshire','Male',2005,65,2,'4/7/2017','Mario',9,4,6,10,5,6,6,5,8,8,10,9,4,6,8,2,293,292, callback);
      },
      function(callback) { 
      swineCreate(375,'São Torcato','Yorkshire','Female',2005,61,2,'1/11/2012','Roana',8,7,7,2,7,4,8,5,6,7,5,5,8,2,10,10,160,43, callback);
      },
      function(callback) { 
      swineCreate(376,'Longxi','Yorkshire','Male',2005,65,4,'12/24/2009','Mervin',6,3,2,10,10,9,10,6,10,10,4,6,2,8,10,4,485,418, callback);
      },
      function(callback) { 
      swineCreate(377,'Minbu','Yorkshire','Male',2005,64,4,'6/17/2012','Kevin',7,7,5,7,7,6,4,10,9,7,2,6,8,5,10,5,78,230, callback);
      },
      function(callback) { 
      swineCreate(378,'San José de Jáchal','Yorkshire','Male',2005,66,2,'10/26/2001','Paddy',3,10,5,4,9,7,2,10,7,5,9,2,10,4,10,6,271,351, callback);
      },
      function(callback) { 
      swineCreate(379,'Jaguariaíva','Yorkshire','Female',2005,50,4,'1/22/2006','Oralee',5,6,7,10,9,2,10,4,10,4,8,10,2,8,9,3,327,348, callback);
      },
      function(callback) { 
      swineCreate(380,'Yūki','Yorkshire','Male',2005,64,6,'4/10/2005','Donalt',9,6,2,2,9,10,3,7,3,8,10,10,5,5,4,7,168,255, callback);
      },
      function(callback) { 
      swineCreate(381,'Kopashnovo','Yorkshire','Female',2005,75,6,'11/24/2006','Dael',4,9,7,10,4,2,4,7,4,8,9,8,2,2,8,3,29,336, callback);
      },
      function(callback) { 
      swineCreate(382,'San Buenaventura','Yorkshire','Female',2005,54,5,'3/28/2004','Babb',2,5,10,3,2,9,3,3,3,8,9,8,9,7,9,2,427,264, callback);
      },
      function(callback) { 
      swineCreate(383,'Anguil','Yorkshire','Male',2005,75,2,'11/10/2001','Abbe',5,3,5,6,2,10,9,8,4,6,10,4,6,10,4,9,111,426, callback);
      },
      function(callback) { 
      swineCreate(384,'Tianyu','Yorkshire','Male',2005,62,4,'7/21/2008','Forrest',3,2,3,8,9,5,2,2,7,6,10,5,3,9,6,7,286,338, callback);
      },
      function(callback) { 
      swineCreate(385,'Comal','Yorkshire','Male',2005,63,6,'2/13/2002','Thadeus',3,8,6,10,6,6,5,3,8,7,7,4,3,10,5,4,290,321, callback);
      },
      function(callback) { 
      swineCreate(386,'Nevesinje','Yorkshire','Male',2005,66,4,'3/24/2004','Jamill',10,10,3,9,10,6,6,10,10,2,2,8,5,4,7,3,200,132, callback);
      },
      function(callback) { 
      swineCreate(387,'Neklyudovo','Yorkshire','Female',2005,53,3,'3/13/2014','Hendrika',7,4,4,5,3,9,4,3,6,4,8,9,7,9,10,5,491,52, callback);
      },
      function(callback) { 
      swineCreate(388,'Dorowa Mining Lease','Yorkshire','Female',2005,58,2,'12/15/2003','Marcelle',8,3,2,3,3,8,2,9,4,2,3,10,9,10,4,10,143,478, callback);
      },
      function(callback) { 
      swineCreate(389,'Mount Ayliff','Yorkshire','Female',2005,51,2,'11/28/2010','Zorana',5,6,5,3,2,4,4,6,8,4,4,7,4,6,8,6,369,119, callback);
      },
      function(callback) { 
      swineCreate(390,'Orléans','Yorkshire','Female',2005,67,5,'12/5/2014','Krissie',6,5,5,2,8,6,4,7,5,5,10,3,8,5,7,2,325,24, callback);
      },
      function(callback) { 
      swineCreate(391,'Temorlorong','Yorkshire','Female',2005,50,3,'11/13/2004','Benedikta',2,4,2,8,5,5,5,8,7,9,7,3,6,10,8,4,158,345, callback);
      },
      function(callback) { 
      swineCreate(392,'Karavan','Yorkshire','Female',2005,74,5,'8/4/2012','Adele',7,9,9,2,2,3,2,5,10,5,9,6,4,8,5,3,498,445, callback);
      },
      function(callback) { 
      swineCreate(393,'Sarirejo Satu','Yorkshire','Female',2005,58,3,'5/6/2006','Lorie',7,7,9,8,3,3,6,3,10,9,9,10,5,4,9,4,121,415, callback);
      },
      function(callback) { 
      swineCreate(394,'Dajabón','Yorkshire','Male',2005,53,3,'6/13/2006','Ken',7,9,6,7,3,6,2,5,10,10,5,3,9,3,10,10,224,417, callback);
      },
      function(callback) { 
      swineCreate(395,'Telmin Suma','Yorkshire','Female',2005,52,3,'9/22/2002','Odelinda',3,10,10,2,4,8,2,6,8,6,8,4,6,2,3,9,145,375, callback);
      },
      function(callback) { 
      swineCreate(396,'Devitsa','Yorkshire','Male',2005,62,5,'6/14/2013','Bordy',9,5,5,5,5,5,6,8,9,8,10,9,9,10,2,10,41,379, callback);
      },
      function(callback) { 
      swineCreate(397,'Cergy-Pontoise','Yorkshire','Male',2005,63,2,'6/28/2010','Virgie',3,4,9,4,7,3,3,10,5,10,9,2,9,2,4,6,352,45, callback);
      },
      function(callback) { 
      swineCreate(398,'Donji Dobrić','Yorkshire','Male',2005,66,5,'11/17/2001','Franzen',10,2,8,10,2,4,3,8,6,5,7,2,10,4,10,10,382,409, callback);
      },
      function(callback) { 
      swineCreate(399,'Xialaxiu','Yorkshire','Female',2005,75,2,'6/22/2015','Abigail',8,2,4,6,7,7,10,4,7,10,7,2,6,10,6,9,379,314, callback);
      },
      function(callback) { 
      swineCreate(400,'Kretinga','Yorkshire','Female',2005,50,3,'9/8/2007','Viv',4,8,4,3,2,10,5,6,6,4,4,5,7,2,5,3,192,88, callback);
      },
      function(callback) { 
      swineCreate(401,'Huangmei','Yorkshire','Female',2005,69,2,'10/12/2008','Honoria',9,3,6,4,7,7,9,4,10,8,2,10,10,9,6,8,45,487, callback);
      },
      function(callback) { 
      swineCreate(402,'Xianshuigu','Yorkshire','Male',2005,69,6,'12/17/2009','Ken',3,2,4,9,4,5,5,6,4,6,8,4,7,10,7,6,90,425, callback);
      },
      function(callback) { 
      swineCreate(403,'Fusheng','Yorkshire','Male',2005,54,4,'10/21/2013','Garrek',10,3,9,5,7,8,4,10,8,4,7,7,5,5,5,6,23,108, callback);
      },
      function(callback) { 
      swineCreate(404,'Creighton','Yorkshire','Female',2005,64,5,'7/7/2009','Elyn',7,2,7,8,6,9,8,9,3,10,9,8,6,3,9,4,126,307, callback);
      },
      function(callback) { 
      swineCreate(405,'Dungarvan','Yorkshire','Male',2005,62,4,'5/13/2001','Johnny',4,10,3,6,3,5,4,8,8,9,3,2,8,6,2,10,127,445, callback);
      },
      function(callback) { 
      swineCreate(406,'Siraway','Yorkshire','Male',2005,62,5,'9/4/2008','Bernie',9,5,10,10,9,9,6,8,10,6,6,10,3,10,3,10,260,462, callback);
      },
      function(callback) { 
      swineCreate(407,'Cotton Ground','Yorkshire','Female',2005,56,3,'5/14/2004','Elisha',9,2,5,8,7,10,9,6,8,5,3,9,9,8,5,7,193,394, callback);
      },
      function(callback) { 
      swineCreate(408,'Cabatuan','Yorkshire','Male',2005,75,2,'5/22/2002','Guthry',8,6,3,5,5,5,4,3,8,4,2,10,3,6,6,6,443,107, callback);
      },
      function(callback) { 
      swineCreate(409,'Dimayon','Yorkshire','Male',2005,53,3,'7/4/2004','Pincus',10,9,7,5,9,7,8,8,7,7,3,9,5,6,6,5,225,373, callback);
      },
      function(callback) { 
      swineCreate(410,'El Crucero','Yorkshire','Male',2005,57,4,'9/30/2010','Mendy',2,8,9,10,2,9,8,6,2,4,9,5,4,5,8,2,146,166, callback);
      },
      function(callback) { 
      swineCreate(411,'Jutrosin','Yorkshire','Male',2005,50,5,'6/22/2017','Brose',2,6,2,6,8,4,2,5,5,2,10,6,8,4,4,3,277,102, callback);
      },
      function(callback) { 
      swineCreate(412,'Tatou','Yorkshire','Female',2005,59,5,'5/13/2009','Belicia',3,2,3,6,4,4,4,7,9,2,10,5,7,6,4,5,410,319, callback);
      },
      function(callback) { 
      swineCreate(413,'Nazarje','Yorkshire','Male',2005,74,2,'5/14/2007','Danya',7,2,8,7,7,9,5,3,5,8,2,4,4,7,10,4,24,298, callback);
      },
      function(callback) { 
      swineCreate(414,'Pokhvistnevo','Yorkshire','Female',2005,64,3,'4/30/2007','Xylia',4,8,6,8,6,5,6,6,9,10,3,8,7,4,9,3,294,422, callback);
      },
      function(callback) { 
      swineCreate(415,'Los Cóndores','Yorkshire','Female',2005,53,5,'3/13/2003','Kania',2,8,10,6,4,7,10,8,8,5,8,4,6,3,9,10,99,261, callback);
      },
      function(callback) { 
      swineCreate(416,'Minle','Yorkshire','Female',2005,75,2,'1/5/2001','Gaby',5,5,10,9,4,8,5,4,5,6,7,9,8,6,3,7,97,19, callback);
      },
      function(callback) { 
      swineCreate(417,'Xiejiatan','Yorkshire','Female',2005,53,5,'1/31/2010','Tabitha',5,2,5,6,7,3,10,2,4,5,6,5,6,10,6,2,266,138, callback);
      },
      function(callback) { 
      swineCreate(418,'Bergen','Yorkshire','Male',2005,55,4,'10/3/2002','Thatcher',8,5,3,5,7,10,8,9,3,2,7,7,8,5,8,2,482,195, callback);
      },
      function(callback) { 
      swineCreate(419,'Patani','Yorkshire','Male',2005,58,2,'2/29/2004','Michail',6,5,7,8,10,9,7,7,6,3,4,7,10,3,7,10,89,450, callback);
      },
      function(callback) { 
      swineCreate(420,'Kowala','Yorkshire','Female',2005,58,6,'4/25/2013','De',2,3,8,8,3,4,4,3,3,2,10,3,7,10,10,8,150,236, callback);
      },
      function(callback) { 
      swineCreate(421,'Yilan','Yorkshire','Male',2005,58,3,'1/12/2011','Thayne',10,2,2,8,7,5,6,6,10,6,8,3,3,10,7,6,23,166, callback);
      },
      function(callback) { 
      swineCreate(422,'Messina','Yorkshire','Male',2005,64,3,'8/10/2010','Loy',5,9,2,7,2,10,8,2,4,5,4,3,2,6,2,9,383,138, callback);
      },
      function(callback) { 
      swineCreate(423,'Esmeraldas','Yorkshire','Male',2005,56,3,'7/31/2007','Boothe',6,10,10,5,7,7,8,4,3,5,7,2,2,6,2,7,225,48, callback);
      },
      function(callback) { 
      swineCreate(424,'Yantianhe','Yorkshire','Male',2005,64,3,'8/29/2009','Shanan',8,6,6,4,7,5,7,5,7,2,4,9,9,5,3,7,221,94, callback);
      },
      function(callback) { 
      swineCreate(425,'Amagbagan','Yorkshire','Female',2005,67,6,'4/11/2007','Selina',6,10,9,7,6,2,7,7,3,7,5,7,6,6,3,10,326,437, callback);
      },
      function(callback) { 
      swineCreate(426,'Renliu','Yorkshire','Male',2005,64,5,'2/16/2010','Terrill',8,10,10,7,3,5,6,2,5,6,6,5,6,10,4,6,270,365, callback);
      },
      function(callback) { 
      swineCreate(427,'Anyama','Yorkshire','Male',2005,63,4,'9/23/2005','Delmor',4,8,9,2,5,2,5,3,8,4,5,6,10,4,2,3,204,169, callback);
      },
      function(callback) { 
      swineCreate(428,'Luofang','Yorkshire','Female',2005,74,6,'2/22/2011','Eula',8,6,2,9,3,5,8,2,4,3,2,4,5,6,2,7,267,283, callback);
      },
      function(callback) { 
      swineCreate(429,'Bacungan','Yorkshire','Female',2005,56,6,'6/28/2009','Bambi',5,8,4,6,10,8,5,9,5,9,9,4,2,4,7,3,474,33, callback);
      },
      function(callback) { 
      swineCreate(430,'Rosthern','Yorkshire','Male',2005,58,6,'7/13/2017','Konstantine',10,9,10,6,10,7,8,9,6,5,2,5,4,3,3,5,30,211, callback);
      },
      function(callback) { 
      swineCreate(431,'Chortkiv','Yorkshire','Female',2005,70,5,'4/19/2016','Arabelle',4,5,7,2,4,3,4,10,7,2,5,6,2,6,4,10,237,215, callback);
      },
      function(callback) { 
      swineCreate(432,'Aquin','Yorkshire','Male',2005,68,3,'7/4/2015','Ber',7,5,6,10,10,10,10,2,7,3,4,8,8,7,9,7,415,119, callback);
      },
      function(callback) { 
      swineCreate(433,'Wates','Yorkshire','Female',2005,53,3,'5/20/2001','Marissa',10,4,10,6,8,3,7,10,7,7,8,4,7,4,8,9,432,36, callback);
      },
      function(callback) { 
      swineCreate(434,'Quitilipi','Yorkshire','Female',2005,52,3,'2/19/2014','Beverly',5,4,9,6,6,3,8,7,2,2,8,5,6,10,2,4,349,425, callback);
      },
      function(callback) { 
      swineCreate(435,'Santo Domingo','Yorkshire','Female',2005,74,4,'6/6/2004','Malvina',6,10,10,8,4,9,4,4,5,9,3,6,5,9,7,9,156,152, callback);
      },
      function(callback) { 
      swineCreate(436,'Zaječar','Yorkshire','Male',2005,56,4,'4/1/2016','Wilton',3,3,7,8,10,4,10,6,10,5,7,7,6,7,7,6,195,193, callback);
      },
      function(callback) { 
      swineCreate(437,'Randu','Yorkshire','Male',2005,60,2,'8/23/2016','Thom',10,9,10,6,5,5,6,4,3,4,6,9,6,8,7,3,483,416, callback);
      },
      function(callback) { 
      swineCreate(438,'Czarna','Yorkshire','Female',2005,65,6,'2/24/2017','Devin',7,8,4,9,5,2,2,7,10,6,8,2,6,5,6,10,346,75, callback);
      },
      function(callback) { 
      swineCreate(439,'Tanqiao','Yorkshire','Female',2005,57,5,'6/2/2011','Lonna',7,3,3,3,4,10,4,6,9,6,8,10,9,8,6,4,125,371, callback);
      },
      function(callback) { 
      swineCreate(440,'Bāglung','Yorkshire','Female',2005,52,3,'11/30/2007','Coleen',7,4,3,7,9,8,2,3,7,8,3,5,6,4,9,4,239,290, callback);
      },
      function(callback) { 
      swineCreate(441,'Holguín','Yorkshire','Female',2005,63,3,'1/3/2009','Jonis',8,10,3,10,7,9,7,4,3,9,8,10,5,4,9,10,279,141, callback);
      },
      function(callback) { 
      swineCreate(442,'Bibai','Yorkshire','Male',2005,74,2,'3/22/2010','Townsend',10,8,6,2,6,5,9,8,2,6,6,9,8,2,7,2,387,431, callback);
      },
      function(callback) { 
      swineCreate(443,'Tân An','Yorkshire','Female',2005,66,5,'1/15/2016','Sean',6,2,2,7,8,8,9,8,3,3,5,3,6,6,2,10,413,3, callback);
      },
      function(callback) { 
      swineCreate(444,'Jiangkou','Yorkshire','Male',2005,56,6,'12/20/2012','Onfre',7,4,4,7,4,2,2,10,5,7,5,2,8,8,5,5,442,481, callback);
      },
      function(callback) { 
      swineCreate(445,'São Cristóvão','Yorkshire','Female',2005,55,2,'11/28/2011','Kimmie',4,4,5,2,9,6,4,9,3,2,3,7,6,10,10,4,410,401, callback);
      },
      function(callback) { 
      swineCreate(446,'Benito Juarez','Yorkshire','Female',2005,66,2,'3/25/2005','Hildagarde',5,4,6,9,10,4,10,9,3,2,8,5,2,5,5,6,226,312, callback);
      },
      function(callback) { 
      swineCreate(447,'Poço Verde','Yorkshire','Female',2005,59,4,'8/1/2009','Ashla',3,2,7,10,6,5,5,8,3,10,3,3,5,7,9,5,216,206, callback);
      },
      function(callback) { 
      swineCreate(448,'Kota Ternate','Yorkshire','Female',2005,68,5,'5/24/2005','Fanchon',4,7,6,5,9,9,4,9,2,5,6,3,5,4,9,7,387,442, callback);
      },
      function(callback) { 
      swineCreate(449,'Wenquan','Yorkshire','Male',2005,72,2,'5/9/2001','Mel',5,3,5,6,6,7,10,3,2,8,2,10,9,9,8,9,352,48, callback);
      },
      function(callback) { 
      swineCreate(450,'Karanggedang','Yorkshire','Female',2005,63,4,'11/27/2003','Kamila',9,2,3,7,6,10,2,3,5,9,7,8,8,5,4,3,10,79, callback);
      },
      function(callback) { 
      swineCreate(451,'San Jose','Yorkshire','Male',2005,61,5,'10/20/2013','Norry',2,5,2,4,9,8,2,3,4,7,7,6,5,7,4,3,206,115, callback);
      },
      function(callback) { 
      swineCreate(452,'Pule','Yorkshire','Male',2005,60,2,'9/10/2005','Newton',5,4,10,2,6,7,10,10,9,5,6,6,4,3,3,9,494,405, callback);
      },
      function(callback) { 
      swineCreate(453,'Shāhdādkot','Yorkshire','Female',2005,69,3,'8/3/2005','Peggie',8,7,7,9,7,2,4,4,4,6,3,10,3,3,7,3,492,166, callback);
      },
      function(callback) { 
      swineCreate(454,'Carazinho','Yorkshire','Female',2005,54,3,'9/19/2014','Annabell',6,5,3,7,4,4,4,8,3,6,2,6,9,7,9,8,419,264, callback);
      },
      function(callback) { 
      swineCreate(455,'Yug','Yorkshire','Female',2005,58,5,'7/10/2010','Joyann',6,7,9,3,10,6,4,5,7,3,7,10,4,9,2,5,454,213, callback);
      },
      function(callback) { 
      swineCreate(456,'Francisco I Madero','Yorkshire','Female',2005,75,4,'7/7/2007','Sada',5,6,4,4,8,10,8,10,7,8,9,10,6,9,10,10,467,471, callback);
      },
      function(callback) { 
      swineCreate(457,'Chinchero','Yorkshire','Male',2005,66,3,'5/15/2002','Creighton',3,2,2,6,5,6,3,6,5,7,10,9,10,7,10,7,111,355, callback);
      },
      function(callback) { 
      swineCreate(458,'Claveria','Yorkshire','Female',2005,75,4,'2/21/2012','Eustacia',6,4,4,10,8,8,7,9,5,6,2,5,7,4,6,7,250,252, callback);
      },
      function(callback) { 
      swineCreate(459,'Wunat','Yorkshire','Male',2005,72,4,'9/30/2008','Carter',10,8,7,4,8,3,9,9,10,4,3,3,5,6,2,10,51,114, callback);
      },
      function(callback) { 
      swineCreate(460,'Jiatou','Yorkshire','Female',2005,67,4,'3/19/2009','Sisely',3,7,6,6,3,2,3,6,4,10,2,7,7,4,3,7,116,341, callback);
      },
      function(callback) { 
      swineCreate(461,'San Juan Nepomuceno','Yorkshire','Female',2005,68,3,'9/23/2013','Atalanta',8,7,5,9,10,7,6,4,8,9,4,4,4,9,8,8,366,493, callback);
      },
      function(callback) { 
      swineCreate(462,'Dallas','Yorkshire','Male',2005,67,5,'8/6/2011','Connor',5,6,9,7,6,7,9,10,6,4,5,10,10,9,4,10,58,268, callback);
      },
      function(callback) { 
      swineCreate(463,'Skhodnya','Yorkshire','Female',2005,72,4,'5/25/2009','Kiersten',2,8,9,6,6,5,10,2,5,5,6,6,3,6,9,10,158,456, callback);
      },
      function(callback) { 
      swineCreate(464,'Novoye Leushino','Yorkshire','Male',2005,62,6,'7/29/2017','Pebrook',8,9,7,2,9,7,9,9,5,10,10,4,3,4,9,5,21,229, callback);
      },
      function(callback) { 
      swineCreate(465,'Thị Trấn Tam Sơn','Yorkshire','Female',2005,55,3,'11/8/2004','Brett',8,2,3,3,3,8,7,3,3,5,7,5,2,9,3,4,478,415, callback);
      },
      function(callback) { 
      swineCreate(466,'Jiaoba','Yorkshire','Female',2005,64,6,'2/21/2011','Kessia',5,6,8,8,8,9,8,7,2,6,5,9,2,5,10,2,500,403, callback);
      },
      function(callback) { 
      swineCreate(467,'São Roque','Yorkshire','Female',2005,69,3,'1/26/2006','Esmeralda',5,6,8,10,8,3,2,8,8,6,6,4,8,2,4,4,255,69, callback);
      },
      function(callback) { 
      swineCreate(468,'Lantapan','Yorkshire','Male',2005,56,4,'1/23/2017','Rodolph',8,4,6,5,3,4,6,8,4,4,9,8,6,6,10,9,172,211, callback);
      },
      function(callback) { 
      swineCreate(469,'Runting','Yorkshire','Male',2005,59,3,'11/22/2009','Fremont',6,5,2,7,9,5,2,2,7,3,6,9,5,3,9,7,200,119, callback);
      },
      function(callback) { 
      swineCreate(470,'Manaus','Yorkshire','Female',2005,71,3,'5/25/2001','Katharine',3,7,7,5,4,10,6,9,7,8,2,6,5,8,8,10,184,235, callback);
      },
      function(callback) { 
      swineCreate(471,'Grand Forks','Yorkshire','Male',2005,51,5,'2/13/2002','Jules',6,9,4,7,9,6,3,2,9,10,10,5,4,4,10,5,362,471, callback);
      },
      function(callback) { 
      swineCreate(472,'Kolochava','Yorkshire','Female',2005,52,5,'5/7/2009','Abra',7,6,8,9,9,5,8,9,8,10,4,2,8,2,2,10,403,98, callback);
      },
      function(callback) { 
      swineCreate(473,'Cirompang','Yorkshire','Female',2005,62,5,'6/21/2010','Analise',5,7,2,10,9,4,2,8,4,6,9,8,6,5,2,3,21,32, callback);
      },
      function(callback) { 
      swineCreate(474,'Mojolampir','Yorkshire','Male',2005,65,6,'5/16/2001','Caryl',3,9,10,8,5,5,6,6,3,2,2,5,5,5,4,8,178,46, callback);
      },
      function(callback) { 
      swineCreate(475,'Balykchy','Yorkshire','Female',2005,73,3,'4/30/2014','Athena',6,7,5,7,2,5,3,10,9,10,7,7,7,3,3,2,255,134, callback);
      },
      function(callback) { 
      swineCreate(476,'Charlotte','Yorkshire','Male',2005,66,3,'5/4/2006','Burch',9,5,4,3,2,9,4,4,3,6,8,9,4,5,10,8,261,338, callback);
      },
      function(callback) { 
      swineCreate(477,'Nkurenkuru','Yorkshire','Female',2005,60,3,'1/22/2001','Marlyn',5,4,10,9,9,7,6,4,6,10,4,7,2,4,8,3,268,482, callback);
      },
      function(callback) { 
      swineCreate(478,'Káto Asítai','Yorkshire','Male',2005,58,3,'8/29/2005','Bogart',9,6,5,10,4,6,4,8,8,2,4,5,4,5,9,9,9,428, callback);
      },
      function(callback) { 
      swineCreate(479,'Al Ghāriyah','Yorkshire','Female',2005,64,3,'5/29/2008','Beverly',4,4,7,3,5,7,10,6,2,2,9,5,6,5,9,5,475,386, callback);
      },
      function(callback) { 
      swineCreate(480,'Unquillo','Yorkshire','Female',2005,74,3,'1/2/2005','Maryellen',10,9,10,8,9,10,3,9,9,3,3,4,2,10,8,5,456,76, callback);
      },
      function(callback) { 
      swineCreate(481,'Cabaret','Yorkshire','Male',2005,75,5,'6/1/2008','Zackariah',3,9,6,6,8,4,10,5,10,2,10,10,3,3,4,9,333,295, callback);
      },
      function(callback) { 
      swineCreate(482,'Bebedouro','Yorkshire','Male',2005,53,4,'3/21/2008','Felix',9,9,5,6,10,6,10,6,3,7,5,7,3,6,4,3,155,281, callback);
      },
      function(callback) { 
      swineCreate(483,'Izyum','Yorkshire','Male',2005,65,3,'9/27/2004','Brendon',6,6,7,5,6,5,7,9,9,9,4,4,6,7,10,3,396,442, callback);
      },
      function(callback) { 
      swineCreate(484,'Sakaidechō','Yorkshire','Male',2005,52,2,'6/27/2016','Farr',8,3,4,7,2,5,6,5,2,3,7,8,2,8,10,4,458,347, callback);
      },
      function(callback) { 
      swineCreate(485,'Bollène','Yorkshire','Male',2005,54,3,'10/23/2007','Olivier',7,4,9,8,9,4,8,2,3,8,2,5,2,5,3,9,331,208, callback);
      },
      function(callback) { 
      swineCreate(486,'Ždánice','Yorkshire','Female',2005,67,5,'3/26/2002','Marje',7,8,8,5,7,4,3,3,10,7,2,5,10,6,2,7,91,432, callback);
      },
      function(callback) { 
      swineCreate(487,'Lewin Kłodzki','Yorkshire','Female',2005,55,6,'3/29/2004','Cristy',5,4,6,7,7,9,7,6,8,10,10,2,8,10,4,3,271,177, callback);
      },
      function(callback) { 
      swineCreate(488,'Calancuasan Norte','Yorkshire','Female',2005,67,5,'4/17/2004','Talyah',4,3,7,7,5,8,6,4,2,9,4,10,3,2,8,5,41,46, callback);
      },
      function(callback) { 
      swineCreate(489,'Iwatsuki','Yorkshire','Male',2005,58,4,'12/6/2014','Dermot',8,9,9,5,8,10,6,7,9,5,3,7,10,6,8,8,254,445, callback);
      },
      function(callback) { 
      swineCreate(490,'Kose','Yorkshire','Female',2005,72,4,'6/17/2015','Kynthia',6,8,5,7,7,7,8,8,6,5,3,7,9,10,6,6,10,351, callback);
      },
      function(callback) { 
      swineCreate(491,'Shangxian','Yorkshire','Male',2005,62,3,'1/26/2006','Tadio',9,7,5,7,5,4,2,5,3,2,3,10,10,2,9,8,221,475, callback);
      },
      function(callback) { 
      swineCreate(492,'Katsuyama','Yorkshire','Female',2005,51,6,'6/18/2008','Leeanne',7,7,9,9,9,2,5,9,7,10,5,4,9,8,9,7,41,401, callback);
      },
      function(callback) { 
      swineCreate(493,'Nowe','Yorkshire','Female',2005,57,2,'12/22/2014','Bernita',5,8,3,2,8,10,9,3,9,8,3,3,10,5,4,4,82,145, callback);
      },
      function(callback) { 
      swineCreate(494,'Zainsk','Yorkshire','Male',2005,50,5,'10/2/2003','Jackie',6,9,5,7,7,2,4,4,8,10,2,10,9,4,6,9,143,164, callback);
      },
      function(callback) { 
      swineCreate(495,'Strasbourg','Yorkshire','Male',2005,61,4,'5/26/2002','Dur',7,6,4,2,2,8,4,10,4,3,10,4,8,5,9,5,460,247, callback);
      },
      function(callback) { 
      swineCreate(496,'Paringin','Yorkshire','Male',2005,61,5,'10/27/2004','Max',2,6,10,9,9,5,2,5,3,8,4,2,6,9,3,4,292,405, callback);
      },
      function(callback) { 
      swineCreate(497,'Chengfeng','Yorkshire','Female',2005,61,3,'5/7/2005','Gwenore',9,8,7,8,8,3,3,6,10,2,2,4,4,2,5,4,342,451, callback);
      },
      function(callback) { 
      swineCreate(498,'Carepa','Yorkshire','Male',2005,55,2,'2/14/2006','Northrop',4,6,2,9,4,2,9,7,9,2,8,8,3,8,2,7,369,116, callback);
      },
      function(callback) { 
      swineCreate(499,'El Bolsón','Yorkshire','Female',2005,50,5,'6/9/2012','Henrie',2,8,9,6,8,8,10,4,10,6,2,4,6,3,3,5,376,391, callback);
      },
      function(callback) { 
      swineCreate(500,'Faraulep','Yorkshire','Male',2005,54,2,'9/16/2007','Dino',6,4,6,6,8,8,10,6,6,4,3,7,9,2,4,3,416,405, callback);
      }
      ],
      // optional callback
      cb);
}

async.series([
    createSwine
],
// optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log("DONE!");
        
    }
    //All done, disconnect from database
    mongoose.connection.close();
});