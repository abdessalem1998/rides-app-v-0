export const distance = (stations, goal) => {
  const nStation = stations.reduce((prev, curr) => {
    const minDistance = Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
    return minDistance;
  });
  return Math.abs(nStation - goal);
};

const matchdate = (date, tense) => {
  const rideDate = new Date(date).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);
  switch (tense) {
    case 'future':
      return (rideDate > today);

    case 'past':
      return (rideDate < today);

    default:
      return (rideDate === today);
  }
};

/* eslint-disable */ 
export const sortResult = (data, user, tens) => {
  const sData = data.filter((singleRide) => matchdate(singleRide.date, tens)).map((singleRide) =>
  {
    return { ...singleRide, distance: distance(singleRide.station_path, user.station_code) };
  }).sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

  return sData;
};
