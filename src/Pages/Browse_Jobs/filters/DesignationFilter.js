import { Link } from "react-router-dom";
import data from '../../../lib/designations.json'

const DesignationFilter = (props) => {

    const handleCheckboxChange = async (e) => {
        let DesignationList = props.designation;
        if (e.target.checked) {
            DesignationList.push(e.target.value)
            await props.handleDesignationAdd(DesignationList)
        } else {
            let designationTypeFilterList = []
            for (const designate of DesignationList) {
                if (designate !== e.target.value) {
                    designationTypeFilterList.push(designate)
                }
            }
            await props.handleDesignationRemove(designationTypeFilterList)
            // locationsList = await locationsList.filter( designate => designate !== e.target.value )
            // console.log('locationsList --->>>>',locationsList);
        }

    }

    return <>
        <div class="card">
            <div class="card-header" id="headingFive">

                <h5
                    class=" collapsed accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                >
                    Designation{" "}
                    {/* <span className="float-right">
                        <i className="fas fa-plus"></i>
                    </span> */}
                </h5>

            </div>
            <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            {data.designations.map(designation => {
                                return <div className="form-check my-1">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="flexcheckboxDefault"
                                        id="flexcheckboxDefault1"
                                        value={designation.name}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        className="form-check-label pl-2"
                                        for="flexcheckboxDefault1"
                                    >
                                        {designation.name}
                                    </label>
                                </div>
                            })}

                            <div className="more">
                                {
                                    props.from ?
                                        <Link
                                            to="/designationjobs?from=student"
                                            className="more_inner float-right mr-4 py-1"
                                        >
                                            {" "}
                                            more...{" "}
                                        </Link>
                                        :
                                        <Link
                                            to="/designationjobs"
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

export default DesignationFilter;