const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(function(journey){
    return journey.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(journey){
    return journey.endLocation
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(function(journey){
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(function(journey){
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(function(total, journey){
    return total += journey.distance
  },0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map(function(journey){
    return journey.transport;
  }) // ['train', 'train', 'aeroplane', 'car', 'ferry']
    .filter((transport, index, arr) => {
      return arr.indexOf(transport) === index;
      //true ['train'] index = 0, first instance of match index = 0
      //false ['train'] index = 1, first instance of match index = 0
      //true ['train', 'aeroplane'] index = 2, first instance of month index =2
    })
};


module.exports = Traveller;
