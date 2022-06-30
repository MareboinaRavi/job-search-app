import React from 'react'

const ApplicationFilter = ({ application, setApplication }) => {
    return (
        <div class="card">
            <div class="card-header" id="headingOne">
                <h5
                    className="accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Applicant
                </h5>
            </div>

            <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
            >
                <div class="card-body">
                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault2"
                                    onChange={e => setApplication(e.target.value)}
                                    value=""
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault2"
                                >
                                    Profiles
                                </label>
                            </div>
                            <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault1"
                                    onChange={e => setApplication(e.target.value)}
                                    value="resume"
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault1"
                                >
                                    Profiles + Resume
                                </label>
                            </div>

                            <div className=" my-1 ml-4 mr-3">
                                <span
                                    style={{ color: "green", fontSize: "12px" }}
                                >
                                    Now search in candidate's resume to get more
                                    results
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationFilter