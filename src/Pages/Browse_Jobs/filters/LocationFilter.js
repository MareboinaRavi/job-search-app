import axios from "axios";
import { useEffect } from "react";


import { Link } from "react-router-dom";


import { toast } from "react-toastify";
import apiList from "../../../lib/apiList";


import locations from '../../../lib/locations.json'

const LocationFilter = (props) => {
    // const [locations, setLocations] = useState([])

    // const fetchLocations = async () => {
    //     await axios.get(apiList.searchFilterList + '/cities?limit=5')
    //       .then((response) => {
    //         // setCompanies(response.data.companies)
    //       })
    //       .catch((err) => {
    //         console.log(err.response.data);
    //         toast.error(err.response.data.message)
    //       });
    //   }

    // useEffect(async () => {
    //     fetchLocations();


    //   }, [])

    const handleCheckboxChange = async (e) => {
        let locationsList = props.location;
        if (e.target.checked) {
            locationsList.push(e.target.value)
            await props.handleLocationAdd(locationsList)
        } else {
            let locationFilterList = []
            for (const locate of locationsList) {
                if (locate !== e.target.value) {
                    locationFilterList.push(locate)
                }
            }
            await props.handleLocationRemove(locationFilterList)
            // locationsList = await locationsList.filter( locate => locate !== e.target.value )
            // console.log('locationsList --->>>>',locationsList);
        }

    }


    return <>
        <div class="card" >
            <div class="card-header" id="headingThree">

                <h5
                    class=" collapsed accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                >
                    Location{" "}
                    <span className="float-right">
                        {/* <i className="fas fa-plus"></i> */}
                    </span>
                </h5>

            </div>
            <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            {locations.locations.map(location => {
                                return <div className="form-check my-1">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="flexcheckboxDefault"
                                        id="flexcheckboxDefault1"
                                        value={location.name}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        className="form-check-label pl-2"
                                        for="flexcheckboxDefault1"
                                    >
                                        {location.name}
                                    </label>
                                </div>
                            })}

                            <div className="more">
                                {props.from ?
                                    <Link
                                        to="/locationaljobs?from=student"
                                        className="more_inner float-right mr-4 py-1"
                                    >
                                        {" "}
                                        more...{" "}
                                    </Link> :

                                    <Link
                                        to="/locationaljobs"
                                        className="more_inner float-right mr-4 py-1"
                                    >
                                        {" "}
                                        more...{" "}
                                    </Link>
                                }

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default LocationFilter;