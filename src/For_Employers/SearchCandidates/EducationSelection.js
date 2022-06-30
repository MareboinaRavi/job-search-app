// import "./styles.css";
import React from "react";
export default function EducationSelection({ edu, setEdu }) {
  const handleValues = (id, parentId) => {
    let value = [...edu];
    // eslint-disable-next-line array-callback-return
    value.map((item) => {
      if (parentId > 0) {
        // eslint-disable-next-line eqeqeq
        if (parentId == item.id) {
          let childss = item.childs;
          // eslint-disable-next-line array-callback-return
          childss.map((gh) => {
            // eslint-disable-next-line eqeqeq
            if (gh.id == id) {
              gh.value = !gh.value;
            }
          });
          item.childs = childss;
        }
      } else {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          item.value = !item.value;
        }
      }
    });
    setEdu([...value]);
  };
  console.log(edu, "values");

  return (
    <div className="row Roll_Scroll">
      {edu &&
        edu?.map((item, index) => (
          <div className="col-md-6 ">
            <div key={index}>
              <input
                type="radio"
                id={item.name}
                name={item.name}
                value={item.name}
                checked={item.value}
                onClick={(e) => handleValues(item.id, 0)}
              />
              <label className="search_label_size" for={item.name}>
                {item.name}
              </label>
              {item.value && (
                <div>
                  <div className="search_sub_names">
                    {item?.childs?.map((i, inn) => (
                      <div key={inn}>
                        <input
                          type="checkbox"
                          id={i.name}
                          name={i.name}
                          value={i.value}
                          checked={i.value}
                          onChange={() => handleValues(i.id, item.id)}
                        />
                        <label className="search_label_size" for="Finance">
                          {i.name}
                        </label>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
