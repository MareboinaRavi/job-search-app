import { Link } from "react-router-dom";
import Skillsdata from '../../../lib/skills.json'

const SkillFilter = (props) => {

    const handleCheckboxChange = async (e) => {
        let skillsList = props.skill;
        if (e.target.checked) {
            skillsList.push(e.target.value)
            await props.handleSkillAdd(skillsList)
        } else {
            let skillFilterList = []
            for (const educate of skillsList) {
                if (educate !== e.target.value) {
                    skillFilterList.push(educate)
                }
            }
            await props.handleSkillRemove(skillFilterList)
            // skillsList = await skillsList.filter( educate => educate !== e.target.value )
            // console.log('skillsList --->>>>',skillsList);
        }

    }

    return <>
        <div class="card">
            <div class="card-header" id="headingEight">

                <h5
                    class="accordionItemHeading collapsed"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                >
                    Skills
                    <span className="float-right">
                        {/* <i className="fas fa-plus"></i> */}
                    </span>
                </h5>

            </div>
            <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            {Skillsdata.skills.map(skill => {
                                return <div className="form-check my-1">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="flexcheckboxDefault"
                                        id="flexcheckboxDefault1"
                                        value={skill.name}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        className="form-check-label pl-2"
                                        for="flexcheckboxDefault1"
                                    >
                                        {skill.name}
                                    </label>
                                </div>
                            })}

                            <div className="more">
                                {props.from ?
                                    <Link
                                        to="/skilljobs?from=student"
                                        className="more_inner float-right mr-4 py-1"
                                    >
                                        {" "}
                                        more...{" "}
                                    </Link>
                                    :

                                    <Link
                                        to="/skilljobs"
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

export default SkillFilter;