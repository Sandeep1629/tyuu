import React, { useState } from "react";
import { Card, Typography } from "@mui/material";


const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>
        <center>

            <div className="sandy">
                <div className="col text-center">
                <Typography class="logy" variant='inherit'>
Find My location and ip
             </Typography>
                    <p className="mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={getUserGeolocationDetails}
                        >
                            Find my details
                        </button>

                        <div className="row justify-content-center mt-3">
                            <div className="col-lg-6 text-center text-dark">
                                {details && (
                                    <ul className="list-group">

                                            Location :{" "}
                                            {`${details.city}, ${details.country_name}(${details.country_code})`}
                                        <br></br>
                                    
                                            IP: {details.IPv4}
                                       
                                    </ul>
                                )}
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            </center>
        </>
    );
};

export default GeoLocation;