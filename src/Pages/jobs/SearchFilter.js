import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const SearchFilter = ()=>{
    const [keyword, setKeyword] = useState("");
    const [qlocation, setQLocation] = useState("");
    const [keywordError, setKeywordError] = useState("");
    const [locationError, setLocationError] = useState("");
    const navigate = useNavigate();


    const handleSearch = () => {
        let haveError = false
        if (keyword == '') {
            console.log('eee');
            haveError = true
            setKeywordError('Keyword is required!')
        }
        if (qlocation == '') {
            haveError = true
            setLocationError('Location is required!')
        }
        if (!haveError) {
            navigate(`/browsefilterlist?keyword=${keyword}&qlocation=${qlocation}`)
            // toast.error('All fields are required');
        }
        
    }
    console.log('keywordError', keywordError);
return(<>
<div className="home1">
                    <div className="browse_joblocation_list-search_box">
                    <form className="form-control">
                        <div className="row">
                            <div className="col-lg-5 col-md-5" id="input1_joblocation">
                                <input type="text" className="form-control" id="search_box_input_joblocation"
                                    placeholder="Job Title, Keywords, or Phrase" name='keyword' value={keyword} onChange={(e) => {setKeyword(e.target.value); setKeywordError("")}} />
                                {keywordError != '' && <small style={{color: 'red'}}>{keywordError}</small>}
                            </div>
                            <div className="col-lg-5 col-md-5" id="input2_joblocation">
                                <input type="text" className="form-control" id="search_box_input_joblocation"
                                    placeholder="City ,Province or Region" name='qlocation' value={qlocation} onChange={(e) => {setQLocation(e.target.value); setLocationError("")}}  />
                                {locationError != '' && <small style={{color: 'red'}}>{locationError}</small>}
                            </div>
                            <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                id="input_btn_joblocation">
                                    {/* <Link to={`/browsefilterlist?keyword=${keyword}&qlocation=${qlocation}`} > */}
                                    <a>
                                    <button type='button' id="search_box_btn_joblocation" className="btn-block" onClick={handleSearch} >
                                    Search</button>
                                    </a>
                                    {/* </Link> */}
                            </div>

                        </div>
                    </form>
                </div>
                </div>
</>)

}
export default SearchFilter