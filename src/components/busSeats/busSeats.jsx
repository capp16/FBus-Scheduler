import React, { useState } from 'react';
import './Bus.css';

const Bus = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [hoveredSeat, setHoveredSeat] = useState(null);

  const toggleSelectedSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((num) => num !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const isSeatSelected = (seatNumber) => selectedSeats.includes(seatNumber);
  const isWomenSeat = (seatNumber) => seatNumber % 8 === 1 || seatNumber % 8 === 2;
  const isOlderCitizenSeat = (seatNumber) => seatNumber % 6 === 0;

  const handleSeatHover = (seatNumber) => setHoveredSeat(seatNumber);
  const handleSeatLeave = () => setHoveredSeat(null);

  const renderSeat = (seatNumber) => {
    let className = 'bus-seat';
    let tooltipText = 'Available seat';
    if (isSeatSelected(seatNumber)) {
      className += ' bus-seat-selected';
      tooltipText = 'Selected seat';
    }
    if (isWomenSeat(seatNumber)) {
      className += ' bus-seat-women';
      tooltipText = 'Women only seat';
    }
    if (isOlderCitizenSeat(seatNumber)) {
      className += ' bus-seat-older-citizen';
      tooltipText = 'Seat for older citizens';
    }

    return (
      <div
        key={seatNumber}
        className={className}
        onClick={() => toggleSelectedSeat(seatNumber)}
        onMouseEnter={() => handleSeatHover(seatNumber)}
        onMouseLeave={handleSeatLeave}
      >
        {seatNumber}
        {hoveredSeat === seatNumber && <div className="bus-tooltip">{tooltipText}</div>}
      </div>
    );
  };

  const renderRow = (rowNumber) => {
    const seatsInRow = [];
    for (let i = 0; i < 5; i++) {
      const seatNumber = rowNumber * 5 + i + 1;
      seatsInRow.push(renderSeat(seatNumber));
    }
    return (
      <div key={rowNumber} className="bus-row">
        {seatsInRow.slice(0, 3)}
        <div className="bus-aisle" />
        {seatsInRow.slice(3)}
      </div>
    );
  };

  const numberOfRows = 12;
  const rows = Array(numberOfRows)
    .fill()
    .map((_, index) => renderRow(index));

  return (
    <div className="bus-container">
    <div className="bus-body">
      <div className="bus-driver">
        <div className="bus-seat bus-seat-driver">D</div>
      </div>
      <div className="bus">{rows}</div>
    </div>
  </div>
  );
};

export default Bus;
