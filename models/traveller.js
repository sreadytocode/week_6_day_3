const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyByTransport = this.journeys.filter((journey) => {
    return transport == journey.transport;
  })
  return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance 
  }, 0)
    
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transport = this.journeys.map((journey) => {
    return journey.transport;
  });
  return transport.filter((journey, index) => 
    transport.indexOf(journey) === index);
};


module.exports = Traveller;
