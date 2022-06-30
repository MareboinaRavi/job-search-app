import { Link } from "react-router-dom";

const salaryFilterList = [
    {
        name: "0 - 10k",
        salaryMin: 0,
        salaryMax: 10000
    },
    {
        name: "10k - 20k",
        salaryMin: 10000,
        salaryMax: 20000
    },
    {
        name: "20k - 30k",
        salaryMin: 20000,
        salaryMax: 30000
    },
    {
        name: "30k - 40k",
        salaryMin: 30000,
        salaryMax: 40000
    },
    {
        name: "40k - 60k",
        salaryMin: 40000,
        salaryMax: 60000
    },
    {
        name: "60k - 100k++",
        salaryMin: 60000,
        salaryMax: 100000
    }
]

const SalaryFilter = (props) => {

    const handleChange = (e) => {
        console.log('eeee', e.target.value);
        let {salaryMin, salaryMax} = salaryFilterList.find(item => item.name === e.target.value)
        
        props.setSalary({salaryMin, salaryMax})
    }

    return <>
        <div class="card">
            <div class="card-header" id="headingSeven">

                <h5
                    class="accordionItemHeading collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                >
                    Salary{" "}
                    <span className="float-right">
                        {/* <i className="fas fa-plus"></i> */}
                    </span>
                </h5>

            </div>
            <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordion"
            >
                <div class="card-body">

                    <div className="accordionItemContent">
                        <form action="#" className="acc_form">
                            {salaryFilterList.map( item => {
                                return <div className="form-check  my-1">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexcheckboxDefault"
                                    id="flexcheckboxDefault2"
                                    onChange={handleChange}
                                    value={item.name}
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault2"
                                >
                                    {item.name}
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

export default SalaryFilter;