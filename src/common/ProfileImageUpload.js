import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import apiList from '../lib/apiList';
import 'antd/dist/antd.css';
import React from 'react';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class ProfileImageUpload extends React.Component {
  state = {
    loading: false,
  };

  componentDidMount () {
    if (this.props.url) {
        this.setState({imageUrl: this.props.url }) 
    }
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    let { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="file"
        // listType="picture-card"
        // className="avatar-uploader"
        showUploadList={false}
        action={apiList.profileUpload}
        headers={{Authorization: `Bearer ${localStorage.getItem("token")}`,}}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
          <div className="canditate-des">
                      <p href="#">
                        <img
                          className="resume_img img-responsive"
                          alt=""
                          src={imageUrl ? imageUrl : this.props.url ? this.props.url : `images/girl_avtar.png`}
                        />
                        
                      </p>
                      <label for="file">
                        <i class="fas fa-camera img_pencil"></i>
                      </label>
                      <input type="file" id="file" style={{ display: "none" }} />
                    </div>
        {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
      </Upload>
    );
  }
}

export default ProfileImageUpload;
