import { Link } from "react-router-dom";


const ExperienceFilter = (props) => {
    const handleChange = (e) => {
        console.log('eeee', e.target.value);
        props.setExperience([e.target.value])
    }

    return <>
        <div class="card">
            <div class="card-header" id="headingTwo">

                <h5
                    class="collapsed accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                >
                    Experience{" "}
                    <span className="float-right">
                        {/* <i className="fas fa-plus"></i> */}
                    </span>
                </h5>

            </div>
            <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
            >
                <div class="card-body">
                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="experience"
                                    id="experience1"
                                    onChange={handleChange}
                                    value="0-2 years"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience1"
                                >
                                    00 - 02 years 
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="experience"
                                    id="experience2"
                                    onChange={handleChange}
                                    value="2-5 years"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience2"
                                >
                                    02 - 05 years 
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="experience"
                                    onChange={handleChange}
                                    id="experience3"
                                    value="5-10 years"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience3"
                                >
                                    05 - 10 years 
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="experience"
                                    onChange={handleChange}
                                    id="experience4"
                                    value="10-15 years"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience4"
                                >
                                    10 - 15 years
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="experience"
                                    onChange={handleChange}
                                    id="experience5"
                                    value="15+ years"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience5"
                                >
                                    15 + years
                                </label>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ExperienceFilter;