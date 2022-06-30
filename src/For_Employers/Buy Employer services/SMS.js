import React from "react";

const SMS = () => {
  return (
    <div>
      <div className="sms_top">
        {/* <div className="C1_topline">
        <em>Job Posting Solutions - Find the right skilled candidates</em>
      </div> */}

        <div className="container c1_border">
          <div className="row">
            <div className="col-md-3 C1_box">
              <img src="images/pabjobs.png" className="sms_img1" />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12 mt-3 sms_notification">
                  <div>
                    {" "}
                    <span className="sms_icon">
                      <i class="fas fa-info"></i>{" "}
                    </span>
                    <b>Note: </b>Database access is mandatory to use Xpresshire
                  </div>
                </div>

                <div className="col-md-8">
                  {/* <p className="text-center mt-4"><b>No.of Jobs</b></p> */}
                  <label className="mt-3">
                    <b>SMS Product</b>
                  </label>

                  <select className="form_control mr-sm-2" name="jobType">
                    <option value="500 SMS contacts with Free SMS Inbox - 1 Months">
                      500 SMS contacts with Free SMS Inbox - 1 Months
                    </option>
                    <option value="1000 SMS contacts with Free SMS Inbox - 3 Months ">
                      1000 SMS contacts with Free SMS Inbox - 3 Months{" "}
                    </option>
                    <option value="2500 SMS contacts with Free SMS Inbox - 6 Months ">
                      2500 SMS contacts with Free SMS Inbox - 6 Months{" "}
                    </option>
                    <option value="5000 SMS contacts with Free SMS Inbox - 12 Months">
                      5000 SMS contacts with Free SMS Inbox - 12 Months{" "}
                    </option>
                    <option value="10000 SMS contacts with Free SMS Inbox - 12 Months">
                      10000 SMS contacts with Free SMS Inbox - 12 Months
                    </option>
                    <option value="15000 SMS contacts with Free SMS Inbox - 12 Months">
                      15000 SMS contacts with Free SMS Inbox - 12 Months
                    </option>
                    <option value="30000 SMS contacts with Free SMS Inbox - 12 Months">
                      30000 SMS contacts with Free SMS Inbox - 12 Months
                    </option>
                    <option value="50000 SMS contacts with Free SMS Inbox - 12 Months">
                      50000 SMS contacts with Free SMS Inbox - 12 Months
                    </option>
                    <option value="100000 SMS contacts with Free SMS Inbox - 12 Months">
                      100000 SMS contacts with Free SMS Inbox - 12 Months
                    </option>
                  </select>
                </div>
                {/* <div className="col-md-3">
                {/* <p className="text-center"><b>Validity</b></p> *
                <label className="mt-3">
                  <b>Validity</b>
                </label>
                <select className="form_control mr-sm-2" name="jobType">
                  <option value="1 month">1 Month</option>
                </select>
              </div> */}
                <div className="col-md-2">
                  <p className="mt-3 ">
                    <b>
                      Price(INR)<sup style={{ color: "red" }}>*</sup>
                    </b>
                  </p>
                  <p className="mt-3 ">
                    <b>Rs. 1180.0</b>
                  </p>
                </div>
                {/* <div className="col-md-1"></div> */}
                <div className="col-md-2">
                  <button className=" c1_buynow mt-3">Buy Now</button>
                  <em>*Prices Inclusive of all taxes</em>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mt-5">
                  <h1 className="sms_description">DESCRIPTIONS :</h1>
                  <span style={{ color: "#7f7f7f" }}>
                    With TimesJobs XpressHire Premia, you can reach out to a
                    larger audience in a shorter span of time thus making the
                    recruitment process more economical.
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h1 className="sms_description mt-5">KEY FEATURES :</h1>
                  <ul className="sms_lists">
                    <li>
                      Two way messaging allows you to receive candidate
                      responses in your inbox.
                    </li>
                    <li>Multiple Contacts Upload from text or excel file.</li>
                    <li>Multiple delivery routes to ensure faster delivery.</li>
                    <li>Flexibility to schedule SMS for future date & time.</li>
                    <li>Detailed SMS status report.</li>
                    <li>Credit back for undelivered SMS.</li>
                    <li>SMS campaign performance tracking.</li>
                  </ul>
                </div>
              </div>
              <div className="text-right">
              <b className="sms_footer">READ OUR CLIENT TESTIMONIALS</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMS;
