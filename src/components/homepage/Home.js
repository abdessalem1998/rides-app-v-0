import {
  NavLink,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import NearestRides from './screens/nearestRides/NearestRides';
import UpComingRides from './screens/upComingRides/UpComingRides';
import PastRides from './screens/pastRides/PastRides';
import { fetchRides } from '../../redux/rides/rides';

const Home = () => {
  const dispatch = useDispatch();
  const URL = 'https://assessment.api.vweb.app/rides';

  const fetchData = async () => {
    const response = await fetch(`${URL}`, {
      method: 'GET',
    });
    const jsonRespnse = await response.json();
    dispatch(fetchRides(jsonRespnse));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ridesData = useSelector((state) => state.ridesReducer);
  /* eslint-disable prefer-const */
  let [filteredRidesData, setFilteredRidesData] = useState(ridesData);

  const [selectedState, setSelectedState] = useState('none');
  const [selectedCity, setSelectedCity] = useState('none');

  const states = [];
  const cities = [];

  ridesData.map((singleRide) => {
    states.push(singleRide.state);
    cities.push(singleRide.city);
    return 0;
  });

  const handleFilterState = (e) => {
    setSelectedState(e.target.value);
  };

  const handleFilterCity = (e) => {
    setSelectedCity(e.target.value);
  };

  const filterData = (state, city) => {
    filteredRidesData = ridesData;
    if (state !== 'none' || city !== 'none') {
      if (state !== 'none') {
        filteredRidesData = filteredRidesData.filter((el) => el.state === state);
        setFilteredRidesData(filteredRidesData);
      }
      if (city !== 'none') {
        filteredRidesData = filteredRidesData.filter((el) => el.city === city);
        setFilteredRidesData(filteredRidesData);
      }
    } else {
      setFilteredRidesData(filteredRidesData);
    }
  };

  useEffect(() => { setFilteredRidesData(ridesData); }, [ridesData]);
  useEffect(() => { filterData(selectedState, selectedCity); }, [selectedState, selectedCity]);

  return (
    <BrowserRouter>
      <div>
        <header className="d-flex m-4 justify-content-between">
          <div className="d-flex">
            <div className="text-white m-1 me-4">
              <NavLink
                to="/"
                className="fw-bold"
                activeclassname="active"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Nearest rides
              </NavLink>
            </div>
            <div className="text-white m-1 me-4">
              <NavLink
                to="/upcoming-rides"
                className="fw-bold"
                activeclassname="active"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Upcoming rides (4)
              </NavLink>
            </div>
            <div className="text-white m-1 me-4">
              <NavLink
                to="/past-rides"
                className="fw-bold"
                activeclassname="active"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Past rides (2)
              </NavLink>
            </div>
          </div>
          <div className="btn-group">
            <button className="filter btn text-white fw-bold" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              <BsFilterLeft className="m-1" />
              Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside" style={{ backgroundColor: '#171717' }}>
              <li className="text-white border-bottom mx-4 pb-2">Filter</li>
              <li className="mx-4 mt-2">
                <div className="btn-group">
                  <select className="filter rounded dropdown-toggle border-0 btn-group text-white p-2" aria-label="Default select example" style={{ backgroundColor: '#292929' }} onChange={handleFilterState}>
                    <option value="none">State</option>
                    {
                      /* eslint-disable react/no-array-index-key */
                      [...new Set(states)].map((state, index) => (
                        <option key={index} vlaue={state}>{state}</option>
                      ))
                    }
                  </select>
                </div>
              </li>
              <li className="mx-4 mt-3 mb-3">
                <div className="btn-group">
                  <select className="filter rounded dropdown-toggle border-0 btn-group text-white p-2" aria-label="Default select example" style={{ backgroundColor: '#292929' }} onChange={handleFilterCity}>
                    <option value="none">City</option>
                    {
                      [...new Set(cities)].map((city, index) => (
                        <option key={index} vlaue={city}>{city}</option>
                      ))
                    }
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<NearestRides data={filteredRidesData} />} />
          <Route path="/upcoming-rides" element={<UpComingRides data={filteredRidesData} />} />
          <Route path="/past-rides" element={<PastRides data={filteredRidesData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Home;
