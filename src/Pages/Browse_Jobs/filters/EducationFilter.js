import { Link } from "react-router-dom";
import educations from '../../../lib/educations.json'

const EducationFilter = (props) => {

    const handleCheckboxChange = async (e) => {
        let educationsList = props.education;
        if (e.target.checked) {
            educationsList.push(e.target.value)
            await props.handleEducationAdd(educationsList)
        } else {
            let educationFilterList = []
            for (const educate of educationsList) {
                if (educate !== e.target.value) {
                    educationFilterList.push(educate)
                }
            }
            await props.handleEducationRemove(educationFilterList)
            // educationsList = await educationsList.filter( educate => educate !== e.target.value )
            // console.log('educationsList --->>>>',educationsList);
        }

    }

    return <>
        <div class="card">
            <div class="card-header" id="headingSix">

                <h5
                    class="accordionItemHeading collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                >
                    Education
                    <span className="float-right">
                        {/* <i className="fas fa-plus"></i> */}
                    </span>
                </h5>

            </div>
            <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            {educations.educations.map(education => {
                                return <div className="form-check my-1">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="flexcheckboxDefault"
                                        id="flexcheckboxDefault1"
                                        value={education.name}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        className="form-check-label pl-2"
                                        for="flexcheckboxDefault1"
                                    >
                                        {education.name}
                                    </label>
                                </div>
                            })}

                            <div className="more">
                                {props.from ?
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

export default EducationFilter;