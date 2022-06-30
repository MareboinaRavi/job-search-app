import { useState, useContext, useEffect } from "react";
import { Grid, Button, TextField, LinearProgress } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import Axios from "axios";
import {toast} from "react-toastify"


const FileUploadInput = (props) => {
  const { uploadTo,handleUpdate, identifier, handleInput,profile,setProfile } = props;
  const [file, setFile] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const filetype=["application/pdf"]
  const Imagefiletype=["image/jpg","image/jpeg","image/png"]

  useEffect(()=>{
    if(identifier ==="resume"){
        if(filetype.includes(file.type)){
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset","Test_post");
          data.append("cloud_name","dipak1243");
          Axios.post("https://api.cloudinary.com/v1_1/dipak1243/image/upload", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              setUploadPercentage(
                parseInt(
                  Math.round((progressEvent.loaded * 100) / progressEvent.total)
                )
              );
            },
          })
            .then((response) => {
              console.log(response.data)
            
              setProfile({
                ...profile,
                resume:{
                    ...profile.resume,
                    filename:response.data.original_filename,
                    url:response.data.url
                }
              })
            })
            .catch((err) => {
              console.log(err.response);
            });
          }else{
           console.log("Please Select Only PDF")
        }
      }else if(identifier === "profile"){
        if(Imagefiletype.includes(file.type)){ 
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset","Test_post");
        data.append("cloud_name","dipak1243");
        Axios.post("https://api.cloudinary.com/v1_1/dipak1243/image/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          },
        })
          .then((response) => {
            console.log(response)
            handleInput(identifier, response.data.url);
            toast.success("File uploaded successfully")
          })
          .catch((err) => {
            console.log(err.response);
            toast.error("Error while uploading")
          });
        }else{
  
          toast.error("Please Select Only JPG/JPEG/PNG")
         
      }
        
      }
      
  },[file])
    
 

  return (
    <Grid container item xs={12} direction="column" className={props.className}>
      <Grid container item xs={12} spacing={0}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            component="label"
            style={{ width: "100%", height: "100%" }}
          >
            {props.icon}
            <input
              type="file"
              style={{ display: "none" }}
              name="resume"
              onChange={(event) => {
                setUploadPercentage(50);
                setFile(event.target.files[0])               
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={props.label}
            value={file ? file.name || "" : ""}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%", height: "100%" }}
            onClick={(e) => handleUpdate(e)}
            disabled={file ? false : true}
          >
            <CloudUpload />
          </Button>
        </Grid>
      </Grid>
      {uploadPercentage !== 0 ? (
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <LinearProgress variant="determinate" value={uploadPercentage} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FileUploadInput;