import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";



import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  InfoOutlined,
  Close,
  ExpandMoreOutlined,
  PeopleAltOutlined,
  Search,
} from "@mui/icons-material";
import { Avatar, Button, Input } from "@mui/material";
import "./css/QuoraHeader.css";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"
                                                                                                                                                                                                                                                                                                          
function QuoraHeader() {

  const [inputUrl , setInputUrl] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question ,setQuestion] = useState("");

  const Close = <CloseIcon />;

  const handleSubmit = async () => {
    if(question !== "" ){

      const config = {
        headers : {
          "Content-type" : "application/json"
        }
      }

        const body = {
            questionName : question,
            questionUrl : inputUrl
      }
        await axios.post('/api/questions', body, config).then((res)=>{
          console.log(res.data)
          alert(res.data.message)
          window.location.href = "/";
        }).catch((e)=>{
          console.log(e)
          alert('Error in adding question')
        });
    }
  }
  const navigate = useNavigate();

  const InfoBtn = () => {
    // console.log(navigation);
    navigate("/about");
  };

  const HomeBtn=()=>{
    navigate("/");
  }

  const RegisterBtn = () =>{
    navigate("/signin")
  }



  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://moein.video/wp-content/uploads/2021/12/QA-GIF-Quastion-and-Answer-Royalty-Free-Animated-Icon-350px-after-effects-project.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon  onClick={HomeBtn}/>
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          {/* <div className="qHeader__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div> */}
          <div className="qHeader__icon">
            <PeopleAltOutlinedIcon onClick={RegisterBtn}/>
          </div>
          {/* <div className="qHeader__icon">
            <NotificationsNoneOutlinedIcon />
          </div> */}
          <div className="qHeader__icon">
            <InfoOutlined onClick={InfoBtn} />
          </div>
        </div>

        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search question" />
        </div>

        <div className="qHeader__Rem">
          <Avatar />
        </div>

        <Button

          style={{backgroundColor:"black" , color : "white"}} //first commit -- color change
          className="add"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add Question
        </Button>

        <Modal
          open={isModalOpen}
          CloseIcon={Close}
          onClose={() => {
            setIsModalOpen(false);
          }}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Questions</h5>
            <h5>Share Link</h5>
          </div>

          <div className="modal__info">
            <Avatar className="avatar"></Avatar>

            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMoreOutlined></ExpandMoreOutlined>
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={question}
              onChange = {(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Start your question with What, Why, How, etc"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"

                value={inputUrl}
                onChange = {(e)=> setInputUrl(e.target.value)}

                style={{
                  margin:"5px 0",
                  border:"1px solid lightgray",
                  padding:"10px",
                  outline:"2px solid #000"
                }}
                placeholder="optional: include a link that gives context"
              />
              {
                inputUrl !== "" && <img style={{
                  height:"40vh",
                  objectFit:"contain"
                }} src={inputUrl} alt='display Image'/>
              }
              
            </div>
          </div>

          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>

            <button
              onClick ={handleSubmit}
              type="submit"
              className="add"
            >
              ADD Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;
