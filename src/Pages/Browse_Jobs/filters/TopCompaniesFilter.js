import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import apiList from "../../../lib/apiList";


const TopCompaniesFilter = (props) => {
    const [companies, setCompanies] = useState([])
    const [isReadMore, setIsReadMore] = useState(true);
console.log(companies)
    const fetchCompanies = async () => {
        await axios.get(apiList.listFiveCompanies)
          .then((response) => {
            setCompanies(response.data.companies.reverse())
          })
          .catch((err) => {
            console.log(err.response.data);
            toast.error(err.response.data.message)
          });
      }

    useEffect(async () => {
        fetchCompanies();
      }, [])

      const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };


    const handleCheckboxChange = async (e) => {
        let companiesList = props.topCompanies;
        if (e.target.checked) {
            companiesList.push(e.target.value)
            await props.handleTopCompaniesAdd(companiesList)
        }else{
            let companies = []
            for (const company of companiesList) {
                if (company !== e.target.value) {
                    companies.push(company)
                }
            }
            await props.handleTopCompaniesRemove(companies)
            // companiesList = await companiesList.filter( company => company !== e.target.value )
            // console.log('companiesList --->>>>',companiesList);
        }
        
    }
    return <>
        <div class="card">
            <div class="card-header" id="headingOne">
                <h5
                    className="accordionItemHeading"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >

                    Top Companies{" "}
                    <span className="float-right">
                        {/* <i className="fas fa-minus"></i> */}
                    </span>
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
                            {
                            isReadMore?
                            companies.slice(0,5).map(company => {
                                return <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="company"
                                    id="flexcheckboxDefault2"
                                    value={company.userId}
                                    onChange={handleCheckboxChange}
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault2"
                                >
                                    {company.companyname}
                                </label>
                            </div>
                            }): companies.map(company => {
                                return <div className="form-check my-1">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="company"
                                    id="flexcheckboxDefault2"
                                    value={company.userId}
                                    onChange={handleCheckboxChange}
                                />
                                <label
                                    className="form-check-label pl-2"
                                    for="flexcheckboxDefault2"
                                >
                                    {company.companyname}
                                </label>
                            </div>
                            })
                            }
                            

                            <div className="more">
                                {/* <Link
                                    to="/companyjobs"
                                    className="more_inner float-right mr-4 py-1"
                                >
                                    {" "}
                                    more...{" "}
                                </Link> */}
                                <span className="more_inner float-right mr-4 py-1" onClick={toggleReadMore}>{isReadMore ? "...more" : " show less"}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TopCompaniesFilter;