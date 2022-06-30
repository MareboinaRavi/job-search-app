import { toast } from "react-toastify";

const initialState = {
  data: null,
  selectedCategories: [],
  selectedCompanies: [],
  selectedSkills: [],
  skill: false,
  isItFromMain: false,
  company: false,
  location: false,
  designation: false,
  selectedLocations: [],
  selectedDesignations: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        data: action.payload,
      };
    case "CLEAR":
      return {
        ...state,
        data: null,
      };
    case "NEW_CLEAR": {
      return {
        ...state,
        selectedCategories: [],
        isItFromMain: false,
      };
    }
    case "FROM_MAIN_COMPANY":
      return {
        ...state,
        company: true,
      };
    case "FROM_MAIN_COMPANY_CLEAR":
      return {
        ...state,
        selectedCompanies: [],
        company: false,
      };
    case "FROM_MAIN_LOCATION_CLEAR":
      return {
        ...state,
        location: false,
        selectedLocations: [],
      };
    case "FROM_MAIN_LOCATION":
      return {
        ...state,
        location: true,
      };

    case "FROM_MAIN":
      return {
        ...state,
        isItFromMain: true,
      };
    case "FROM_MAIN_CLEAR":
      return {
        ...state,
        isItFromMain: false,
      };
    case "FROM_MAIN_SKILL":
      return {
        ...state,
        skill: true,
      };
    case "FROM_MAIN_SKILL_CLEAR":
      return {
        ...state,
        skill: false,
        selectedSkills: [],
      };

    case "SELECTED_SKILLS":
      let prevSelectedSkills = [...state.selectedSkills];
      // let index = prevSelected.indexOf(action.payload);
      // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%")
      const index4 = prevSelectedSkills.findIndex(
        (item) => item.value == action.payload
      );
      if (prevSelectedSkills.length == 5 && index4 == -1) {
        toast("you can select only 5 skills", {
          type: "warning",
          autoClose: 3000,
          theme: "dark",
          hideProgressBar: false,
          closeButton: false,
          closeOnClick: true,
        });
        return {
          ...state,
          selectedSkills: prevSelectedSkills,
        };
      }
      if (index4 === -1) {
        // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%")
        let obj = {
          //genarate a random number between 0 and 100000
          key: Math.floor(Math.random() * 1000000),
          value: action.payload,
        };
        prevSelectedSkills.push(obj);
        // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%",prevSelectedLoc)
      } else {
        prevSelectedSkills.splice(index4, 1);
      }
      return {
        ...state,
        selectedSkills: prevSelectedSkills,
      };

    case "SELECTED_DESIGNATIONS":
      let prevSelectedDes = [...state.selectedDesignations];
      // let index = prevSelected.indexOf(action.payload);
      // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%")
      const index3 = prevSelectedDes.findIndex(
        (item) => item.value == action.payload
      );
      if (prevSelectedDes.length == 5 && index3 == -1) {
        toast("you can select only 5 categories", {
          type: "warning",
          autoClose: 3000,
          theme: "dark",
          hideProgressBar: false,
          closeButton: false,
          closeOnClick: true,
        });
        return {
          ...state,
          selectedDesignations: prevSelectedDes,
        };
      }
      if (index3 === -1) {
        // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%")
        let obj = {
          //genarate a random number between 0 and 100000
          key: Math.floor(Math.random() * 1000000),
          value: action.payload,
        };
        prevSelectedDes.push(obj);
        // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%",prevSelectedLoc)
      } else {
        prevSelectedDes.splice(index3, 1);
      }
      return {
        ...state,
        selectedDesignations: prevSelectedDes,
      };
    case "FROM_MAIN_DES":
      return {
        ...state,
        designation: true,
      };
    case "FROM_MAIN_DES_CLEAR":
      return {
        ...state,
        designation: false,
        selectedDesignations: [],
      };

    case "SELECTED_COMPANIES":
      // alert("sdfads")
      let selectedCompanies = [...state.selectedCompanies];
      let index1;
      if (!!action.payload._id) {
        index1 = selectedCompanies.findIndex(
          (item) => item.key == action.payload.userId
        );
      } else {
        index1 = selectedCompanies.findIndex(
          (item) => item.key == action.payload.key
        );
      }
      if (selectedCompanies.length == 5 && index1 == -1) {
        toast("you can select only 5 categories", {
          type: "warning",
          autoClose: 3000,
          theme: "dark",
          hideProgressBar: false,
          closeButton: false,
          closeOnClick: true,
        });
        return {
          ...state,
          selectedCompanies: selectedCompanies,
        };
      }
      if (index1 === -1) {
        let obj = {
          //genarate a random number between 0 and 100000
          // key: Math.floor(Math.random() * 1000000),
          key: action.payload?.userId,
          value: action.payload?.companyname,
        };
        selectedCompanies = [...selectedCompanies, obj];
        // selectedCompanies.push(obj);
      } else {
        // alert("splice")
        // let selected = [...state.selectedCompanies]
        //    selectedCompanies = selected.splice(index1,1);
        selectedCompanies.splice(index1, 1);
        console.log(selectedCompanies, "%%%%%%%%%%%%%%%%%%%%%%%%%");
      }
      return {
        ...state,
        selectedCompanies: selectedCompanies,
      };

    case "SELECTED_LOCATIONS":
      let prevSelectedLoc = [...state.selectedLocations];
      // let index = prevSelected.indexOf(action.payload);
      // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%")
      const index2 = prevSelectedLoc.findIndex(
        (item) => item.value == action.payload
      );
      if (prevSelectedLoc.length == 5 && index2 == -1) {
        toast("you can select only 5 Locations", {
          type: "warning",
          autoClose: 3000,
          theme: "dark",
          hideProgressBar: false,
          closeButton: false,
          closeOnClick: true,
        });
        return {
          ...state,
          selectedLocations: prevSelectedLoc,
        };
      }
      if (index2 === -1) {
        // console.log(action.payload,"%%%%%%%%%%%%%%%%%%%%%%%%%")
        let obj = {
          //genarate a random number between 0 and 100000
          key: Math.floor(Math.random() * 1000000),
          value: action.payload,
        };
        prevSelectedLoc.push(obj);
        console.log(
          action.payload,
          "%%%%%%%%%%%%%%%%%%%%%%%%%",
          prevSelectedLoc
        );
      } else {
        prevSelectedLoc.splice(index2, 1);
      }
      return {
        ...state,
        selectedLocations: prevSelectedLoc,
      };

    case "SELECTED_CATEGORIES":
      let prevSelected = [...state.selectedCategories];
      // let index = prevSelected.indexOf(action.payload);
      const index = prevSelected.findIndex(
        (item) => item.value == action.payload
      );
      if (prevSelected.length == 5 && index == -1) {
        toast("you can select only 5 categories", {
          type: "warning",
          autoClose: 3000,
          theme: "dark",
          hideProgressBar: false,
          closeButton: false,
          closeOnClick: true,
        });
        return {
          ...state,
          selectedCategories: prevSelected,
        };
      }

      if (index === -1) {
        let obj = {
          //genarate a random number between 0 and 100000
          key: Math.floor(Math.random() * 1000000),
          value: action.payload,
        };
        prevSelected.push(obj);
      } else {
        prevSelected.splice(index, 1);
      }
      return {
        ...state,
        selectedCategories: prevSelected,
      };

    default:
      return state;
  }
};
export default userReducer;
