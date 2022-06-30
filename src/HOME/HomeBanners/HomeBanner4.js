import React, { useState } from 'react';
import axios from "axios";

const Result = () => {
  return (
    <p style={{margin:"auto"}}>
      <h5>
        <b style={{ color: "white", textAlign: "center",fontSize:'20px' }}>Thank You ! <i className="far fa-smile" style={{fontSize:"22px",paddingLeft:"5px"}}></i><br/> we will contact you soon.......</b>
      </h5>
    </p>
  );
};

const HomeBanner4 = () => {



  const [result, showResult] = useState(false);

  const [phone, setphone] = useState()

  const [hireandtraindetails, setHireandtraindetails] = useState({

    phone: "",
  });

  const [errors, setErrors] = useState({

    phone: "",

  });

  const validate = (name, value) => {
    switch (name) {

      case "phone":
        if (!value || value.trim() === "") {
          return "*Contact Number is Required";
        } else if (isNaN(value)) {
          return "*Only enter Numbers";
        } else if (!value.match(/^[6-9]/)) {
          return "*Mobile Number Must be start With 6 or 7 or 8 or 9 ";
        } else if (value.length < 10) {
          return "*MobileNumber must be 10 numbers";
        }
        else {
          return "";
        }

      default: {
        return " ";
      }
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    Object.keys(hireandtraindetails).forEach((name) => {
      const error = validate(name, hireandtraindetails[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    showResult(true);

    const data = {
      PhoneNumbar: phone,
    }

    console.log(data)

    axios.post("https://sheet.best/api/sheets/1aa71103-9f91-49c4-bd3c-3afb630614e7", data).then((res) => {
      console.log(res);
      setphone('');
    })
      .catch((err) => {
        console.log(err)
      })
  }


  const formHandling = (e) => {
    setHireandtraindetails({
      ...hireandtraindetails,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
  };


  return (
    <div>
      <div className='container home_banner4'>
        <form onSubmit={handleSubmit}>
          <div className="row ">


            <div className="col-sm-12">
              <div className="row B_serach">
                <div className="col-sm-6">
                  <h6 className="B_ftext">Find Better & Faster with PAB jobs Career Services
                    Call : 1800 833 9448 now! (Toll-free)</h6>
                </div>
                <div className="col-sm-6 m-auto">
                  {result ? null: (
                  <div className="B_input-group input-group">
                    <input type="text" maxLength={10} className="form-control" name="phone" placeholder="Enter your Mobile no" onChange={(e) => {
                      setphone(e.target.value);
                      formHandling(e);
                    }} value={phone} />
                    <div className="input-group-append">
                      <button className="btn-warning B_btn-warning " type="submit" >Get a Call Back</button>
                    </div>
                  </div>
                  )
}

                  <div className="text-danger error">
                    {errors.phone}
                  </div>

                  <div className="row">
                    {result ? <Result /> : null}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default HomeBanner4
