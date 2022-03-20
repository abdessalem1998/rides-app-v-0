import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/user/user';

const Nav = () => {
  /* fetch user info form its globle state */
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const URL = 'https://assessment.api.vweb.app/user';

  // fetch data from IPA
  const fetchData = async () => {
    const response = await fetch(`${URL}`, {
      method: 'GET',
    });
    const jsonRespnse = await response.json();
    dispatch(fetchUser(jsonRespnse));
  };

  // Render if the date is fetched
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav className="navbar navbar-dark" style={{ backgroundColor: '#101010' }}>
      <div className="container-fluid mx-3">
        <a className="navbar-brand fs-3" href="/"><b>Edvora</b></a>
        <div className="d-flex">
          <p className="text-white my-auto p-2"><b>{user.name}</b></p>
          <img className="rounded-circle m-2" src={user.url} alt="user" style={{ width: '40px' }} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
