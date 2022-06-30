import { Link } from "react-router-dom";
import data from '../../../lib/industryType.json'

const IndustryFilter = (props) => {

    const handleCheckboxChange = async (e) => {
        let industryTypesList = props.industryType;
        if (e.target.checked) {
            industryTypesList.push(e.target.value)
            await props.handleIndustryTypeAdd(industryTypesList)
        } else {
            let industryTypeFilterList = []
            for (const industry of industryTypesList) {
                if (industry !== e.target.value) {
                    industryTypeFilterList.push(industry)
                }
            }
            await props.handleIndustryTypeRemove(industryTypeFilterList)
            // locationsList = await locationsList.filter( industry => industry !== e.target.value )
            // console.log('locationsList --->>>>',locationsList);
        }

    }

    return <>
        <div class="card">
            <div class="card-header" id="headingThree">

                <h5
                    class=" collapsed accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                >
                    Industry{" "}
                    {/* <span className="float-right">
                        <i className="fas fa-plus"></i>
                    </span> */}
                </h5>

            </div>
            <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            {data.industryTypes.map(industry => {
                                return <div className="form-check my-1">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="flexcheckboxDefault"
                                        id="flexcheckboxDefault1"
                                        value={industry.name}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        className="form-check-label pl-2"
                                        for="flexcheckboxDefault1"
                                    >
                                        {industry.name}
                                    </label>
                                </div>
                            })}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default IndustryFilter;