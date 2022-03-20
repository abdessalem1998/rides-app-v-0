const SingleProfile = (singledata) => {
  const ride = singledata;

  const stationPath = (origin, path, dest) => (
    ` [${origin},${path.join(',')},${dest}]`
  );

  return (
    <div className="card text-white rounded rounded-3 m-4 my-2" style={{ backgroundColor: '#171717' }}>
      <div className="row g-0">
        <div className="col-md-3">
          <img src={ride.data.map_url} className="img-fluid rounded m-3" style={{ height: '130px', width: '280px' }} alt="ride" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text fw-lighter m-0">
              Ride Id:
              <span className="fw-normal">
                {` ${ride.data.id}`}
              </span>
            </p>
            <p className="card-text fw-lighter m-0">
              Origin Station:
              <span className="fw-normal">
                {` ${ride.data.origin_station_code}`}
              </span>
            </p>
            <p className="card-text fw-lighter m-0">
              station_path:
              <span className="fw-normal">
                {
                  stationPath(ride.data.origin_station_code,
                    ride.data.station_path,
                    ride.data.destination_station_code)
                }
              </span>
            </p>
            <p className="card-text fw-lighter m-0">
              Date:
              <span className="fw-normal">
                {` ${ride.data.date}`}
              </span>
            </p>
            <p className="card-text fw-lighter m-0">
              Distance:
              <span className="fw-normal">
                {` ${ride.data.distance}`}
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-3 pt-3 d-flex justify-content-center align-items-start">
          <span className="badge rounded-pill m-3" style={{ backgroundColor: 'black' }}>{ride.data.city}</span>
          <span className="badge rounded-pill m-3" style={{ backgroundColor: 'black' }}>{ride.data.state}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
