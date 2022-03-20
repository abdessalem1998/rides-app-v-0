import { useSelector } from 'react-redux';
import { sortResult } from '../logic';
import SingleRide from '../../singleRide/SingleRide';

const NearestRides = (rides) => {
  const ridesData = rides;

  const user = useSelector((state) => state.userReducer);

  const sortedData = sortResult(ridesData.data, user, 'today');

  return (
    <div>
      {
        sortedData.map((singleRide) => (
          <SingleRide
            key={singleRide.id}
            data={singleRide}
          />
        ))
      }
    </div>
  );
};

export default NearestRides;
