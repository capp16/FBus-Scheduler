import React from 'react';
import "./BusStations.css"

const Station = ({ station, type }) => (
  <div className={`station ${type}`}>
    <div className="station-circle">
      <span className="station-code">{station.code}</span>
    </div>
    <div className="station-name">{type=='starting' && 'From:-'}{type=='destination' && 'To:-'} {station.name}</div>
  </div>
);

const TrainRoute = ({ stations }) => {
  if (!stations || stations.length === 0) {
    return <div>No stations found.</div>;
  }

  const startingStation = stations[0];
  const destinationStation = stations[stations.length - 1];
  const intermediateStations = stations.slice(1, stations.length - 1);

  return (
    <div className="train-route">
      <Station station={startingStation} type="starting" />
      <div className="route-line"></div>
      <div className="intermediate-stations">
        {intermediateStations.map((station, index) => (
          <Station key={index} station={station} type="intermediate" />
        ))}
      </div>
      <div className="route-line"></div>
      <Station station={destinationStation} type="destination" />
    </div>
  );
};

export default TrainRoute;

