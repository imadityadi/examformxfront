import React, { useRef, useEffect, useCallback, useState } from "react"
import styled from "styled-components"
import Jimp from "jimp"
import layer from "../assets/images/layer.jpg"
import IMGPLACE from "../assets/images/IMGPLACE.png"
import Compress from "compress.js"
import imageCompression from "browser-image-compression"
import canvasToImage from "canvas-to-image"
import * as htmlToImage from "html-to-image"
import Hello from '../assets/images/HELLO.gif'
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image"
import { MdClose } from "react-icons/md"
import ToggleButton from "react-toggle-button"
import PrimaryButton from "../components/PrimaryButton"
import Header from "../components/Header"
import Loader from "react-loader-spinner"


function ImageResize() {
    const [picSrc, setPicSrc] = useState("")
    const [signSrc, setSignSrc] = useState('')
    const [compressedPic, setCompressedPic] = useState("")
    const [compressedSign, setCompressedSign] = useState('')
    const [signDownloadLink, setsignDownloadLink] = useState('')
    const [downloadLink, setDownloadLink] = useState("")
    const [selectedImgWidth, setSelectedImgWidth] = useState(150)
    const [selectedImgHeight, setSelectedImgHeight] = useState(200)
    const [selectedImg, setSelectedImg] = useState("")
    const [selectedSign, setSelectedSign] = useState('')
    const [dateOfPhoto, setDateOfPhoto] = useState("")
    const [isAddDate, setIsAddDate] = useState("")
    const [reduceRate, setReduceRate] = useState(50)
    const [photoSize, setPhotoSize] = useState('')
    const [loading, setLoading] = useState(false)
    const [signCompressPrg, setSignCompressPrg] = useState(false)
    const [signReduceRate, setSignReduceRate] = useState(50)
    const [signSize, setSignSize] = useState('')

    // useEffects 
    useEffect(() => {
        if (picSrc.length != 0) {
          const tempSelImgUrl = URL.createObjectURL(picSrc[0])
          setSelectedImg(tempSelImgUrl)
          console.log(tempSelImgUrl)
        }
      }, [picSrc])
    
      useEffect(() => {
        if (signSrc.length != 0) {
          const tempSelSignUrl = URL.createObjectURL(signSrc[0])
          setSelectedSign(tempSelSignUrl)
        }
      }, [signSrc])
    
    // compressing functions
    const writetext = () => {
        htmlToImage
          .toJpeg(document.getElementById("imagebox"), { quality: reduceRate })
          .then(function (dataUrl) {
            // var link = document.createElement("a")
            // link.download = "my-image-name.jpeg"
            // link.href = dataUrl
            // link.click()
            setCompressedPic(dataUrl)
          })
      }
    
      const imgcheck = async () => {
        try {
          setLoading(true)
          if(isAddDate){
            writetext()
          }else{
          const imgUrl = URL.createObjectURL(picSrc[0])
          const image = await Jimp.read(imgUrl)
          await image.resize(150, 200)
          await image.quality(parseFloat(reduceRate))
          image.getBase64(Jimp.AUTO, (err, src) => {
            setCompressedPic(src)
            console.log(src)
            
            const buffer = Buffer.from(src, "base64")
            setPhotoSize(buffer.length/1000);
            setLoading(false)
          })}
        } catch (error) {
          setLoading(false)
          console.error(error)
        }
        
      }
    
      // sign image fun
      const handleCompressSign = async () => {
        try {
          setSignCompressPrg(true)
          const signUrl = URL.createObjectURL(signSrc[0])
          const image = await Jimp.read(signUrl)
          await image.resize(150, 60)
          await image.quality(parseFloat(signReduceRate))
          image.getBase64(Jimp.AUTO, (err, src) => {
            setCompressedSign(src)
            console.log(src)
            const buffer = Buffer.from(src, "base64")
            setSignSize(buffer.length/1000);
            setSignCompressPrg(false)
          })
        } catch (error) {
          setSignCompressPrg(false)
          console.log(error)
        }
       }
      


    return (
        <>
        <Header/>
        <IRWrapper>
            <ToolContainer>
                <Card>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                  {/* Image Box Don't Touch */}
                <div
                  style={{
                    display: "flex",
                    position: "relative",
                    textAlign: "center",
                    width: Number(selectedImgWidth),
                    height: Number(selectedImgHeight),
                  }}
                  id="imagebox"
                >
                  <img
                    style={{
                      width: Number(selectedImgWidth),
                      height: Number(selectedImgHeight),
                    }}
                    id="userImg"
                    src={selectedImg}
                  />
                  {!isAddDate ? null : (
                    <label
                      style={{
                        position: "absolute",
                        left: 10,
                        fontSize: 13,
                        textAlign: "center",
                        right: 50,
                        top: "85%",
                        width: "90%",
                        background: "#fff",
                        transition: "ease",
                      }}
                    >{`D.O.P:${dateOfPhoto}`}</label>
                  )}
                </div>
                {/* Image Box Ends */}
                  {
                    compressedPic != ""?
                    <a
                    style={{
                      textDecoration: 'none',
                      background: 'white',
                      border: '1.5px solid #754fdf',
                      padding: '5px 15px',
                      marginTop: '1rem',
                      borderRadius: '5px',
                      color: '#754fdf',
                      fontWeight: '500',
                      fontSize: 12
                    }}
                    download={picSrc[0] != null ? picSrc[0].name : ""}
                    href={compressedPic}
                    target="_blank"
                  >
                   {
                     isAddDate?
                     'Download':
                     `Download ${photoSize}KB`
                   }
                  </a>
                  :
                  null
                  }
                </div>

                  <ImageOptionContainer>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "102%",
                      justifyContent: "space-between",
                    }}
                  >
                    <label htmlFor="togglebtn">Add Date ?</label>
                    <ToggleButton
                      id="togglebtn"
                      value={isAddDate || false}
                      onToggle={() => {
                        setIsAddDate(!isAddDate)
                      }}
                    />
                  </div>

                  {/* Conditional Input Of Date */}

                  {!isAddDate ? null : (
                    <label htmlFor="dopinput">
                      Date of Photo
                      <SimpleInput
                        id="dopinput"
                        value={dateOfPhoto}
                        onChange={e => setDateOfPhoto(e.target.value)}
                      />
                    </label>
                  )}
                {/* Date Input Ends */}

                {/* Add Date Option */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "0.5rem 0rem",
                      width: "100%",
                      justifyContent: "space-between",
                      transition: "ease",
                    }}
                  >
                   
                    {
                      isAddDate?
                     null
                    : 
                    <div className="range-slidebox">
                    <label className="range-label" for="quality">{`Reduce By: ${reduceRate}%`}</label>
                    <input
                      type="range"
                      id="quality"
                      name="quality"
                      min="50"
                      max="100"
                      value={reduceRate}
                      onChange={(e) => setReduceRate(e.target.value) }
                      
                    />
                    </div>
                    }

                  </div>
                 
                 
                 
            
           
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', }}>
                <UploadBtnCont class="file-input">
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      className="file-input__input"
                      onChange={e => setPicSrc(e.target.files)}
                    />
                    <label class="file-input__label" for="file-input">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="upload"
                        class="svg-inline--fa fa-upload fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                        ></path>
                      </svg>
                      <span>Upload Photo</span>
                    </label>
                </UploadBtnCont>
                  <button className="resize-btn-image" onClick={imgcheck}>
                  {
                    !loading?
                    "Resize"
                    :
                    'Resizing...'
                  }
                    </button>
                </div>
                </ImageOptionContainer>
                </Card>
                   

            </ToolContainer>

              {/* sign tool begin */}
            <ImageContainer>
              <Card>

                {/* Sign Image Box  */}

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div id="sign">
                <img
                    style={{
                      width: '150px',
                      height: '60px',
                    }}
                    id="userSign"
                    src={selectedSign}
                  />
                </div>
                  {
                    compressedSign != ""?
                    <a
                    style={{
                      textDecoration: 'none',
                      background: 'white',
                      border: '1.5px solid #754fdf',
                      padding: '5px 15px',
                      marginTop: '1rem',
                      borderRadius: '5px',
                      color: '#754fdf',
                      fontWeight: '500',
                      fontSize: 12
                    }}
                    download={signSrc[0] != null ? `${signSrc[0].name}` : ""}
                    href={compressedSign}
                    target="_blank"
                  >
                   {
                     !signSize?
                     'Download':
                     `Download ${signSize}KB`
                   }
                  </a>
                  :
                  null
                  }
                </div>
                {/* Sign Box Ends */}
                
                {/* <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '50%',
                    justifyContent: 'space-evenly',
                    margin: '0rem 1rem'
                }}>
                    */}
               
                <SignOptionContainer>
                  <div className="range-slidebox">
                    <label className="range-label" for="signquality">{`Reduce By: ${signReduceRate}%`}</label>
                    <input
                      type="range"
                      id="signquality"
                      name="signquality"
                      min="50"
                      max="100"
                      value={signReduceRate}
                      onChange={(e) => setSignReduceRate(e.target.value) }
                      
                    />
                  </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', }} >    
                <SignUploadBtnCont class="sign-file-input">
                  <input
                    type="file"
                    name="sign-file-input"
                    id="sign-file-input"
                    class="sign-file-input__input"
                    onChange={e => setSignSrc(e.target.files)}
                  />
                  <label class="sign-file-input__label" htmlFor="sign-file-input">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="upload"
                      class="svg-inline--fa fa-upload fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      ></path>
                    </svg>
                    <span>Upload Sign</span>
                  </label>
                </SignUploadBtnCont> 
                <button className="resize-btn-image" onClick={handleCompressSign}>
                  {
                    !signCompressPrg?
                    "Resize"
                    :
                    'Resizing...'
                  }
                    </button>
                 </div>   
              
                </SignOptionContainer>
               
                {/* custom btn */}
               
               
                {/* </div>  */}
            </Card>
            </ImageContainer> 
        </IRWrapper>
        </>
    )
}

export default ImageResize

const IRWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 768px) {
      flex-direction: column;
    }
    
`
const ToolContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
    @media(max-width: 768px) {
      width: 100vw;
      justify-content: space-between;
      height: unset;

    }
`
const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    /* align-items: center; */
    justify-content: space-evenly;
    height: 80vh;
    @media(max-width: 768px) {
      width: 100vw;
      height: unset;
      justify-content: center;
      padding-bottom: 2rem;

      
    }
`

const ImageOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-between;
  padding: 0rem 1rem;

  .range-slidebox {
    display: flex;
    justify-content: space-between;
    width: 18rem;
  }
  .range-label {
    font-size: 1rem;
  }

  .resize-btn-image {
    cursor: pointer;
    display: flex;
    display: inline-flex;
    border: none;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    padding: 10px 12px;
    background-color: #754fdf;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);

  }
`
const SimpleInput = styled.input`
  border: 2px solid #754fdf;
  border-radius: 10px;
  height: 45;
  padding: 10px 15px;
  :focus {
    outline: none;
  }
`
const UploadBtnCont = styled.div`
  .file-input__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .file-input__label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    padding: 10px 12px;
    background-color: #754fdf;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  }

  .file-input__label svg {
    height: 16px;
    margin-right: 4px;
  }
  
`

// Sign upload btn

const SignUploadBtnCont = styled.div`
  .sign-file-input__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .sign-file-input__label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    padding: 10px 12px;
    background-color: #754fdf;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  }

  .sign-file-input__label svg {
    height: 16px;
    margin-right: 4px;
  }
`
const SignOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
  padding: 0rem 1rem;

  .resize-btn-image {
    cursor: pointer;
    display: flex;
    display: inline-flex;
    border: none;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    padding: 10px 12px;
    background-color: #754fdf;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);

  }

  .range-slidebox {
    display: flex;
    justify-content: space-between;
    width: 18rem;
  }
  .range-label {
    font-size: 1rem;
  }


`

/* card */

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  justify-content: space-evenly;
  border-radius: 10px;
  border: 1.5px solid #754FDF;
  padding: 2rem 1rem;
  height: 80%;
  box-shadow: 0px 0px 38px -18px rgba(0,0,0,0.62);
-webkit-box-shadow: 0px 0px 38px -18px rgba(0,0,0,0.62);
-moz-box-shadow: 0px 0px 38px -18px rgba(0,0,0,0.62);

@media(max-width: 768px) {
      flex-direction: column;
      margin: 1rem;
      border-radius: 10px;

  height: 100%;
  box-shadow: unset;
-webkit-box-shadow: unset;
-moz-box-shadow: unset;
    }
`