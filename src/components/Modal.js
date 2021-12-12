import React, { useRef, useEffect, useCallback, useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import Jimp from "jimp"
import Compress from "compress.js"
import imageCompression from "browser-image-compression"
import * as htmlToImage from "html-to-image"
import { MdClose } from "react-icons/md"
import ToggleButton from "react-toggle-button"
import PrimaryButton from "./PrimaryButton"

const compress = new Compress()

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()
  const [picSrc, setPicSrc] = useState("")
  const [signSrc, setSignSrc] = useState('')
  const [compressedPic, setCompressedPic] = useState("")
  const [compressedSign, setCompressedSign] = useState('')
  // const [signDownloadLink, setsignDownloadLink] = useState('')
  const [downloadLink, setDownloadLink] = useState("")
  const [selectedImgWidth, setSelectedImgWidth] = useState(150)
  const [selectedImgHeight, setSelectedImgHeight] = useState(200)
  const [selectedImg, setSelectedImg] = useState("")
  const [selectedSign, setSelectedSign] = useState('')
  const [dateOfPhoto, setDateOfPhoto] = useState("")
  const [isAddDate, setIsAddDate] = useState("")
  const [reduceRate, setReduceRate] = useState(50)
  const [photoSize, setPhotoSize] = useState('')
  const [signReduceRate, setSignReduceRate] = useState(50)
  const [signSize, setSignSize] = useState('')
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  console.log(picSrc)
  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false)
        console.log("I pressed")
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])
  console.log(picSrc)

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

  // write text on image

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
  
    })}
  }

  // sign image fun
  const handleCompressSign = async () => {
    const signUrl = URL.createObjectURL(signSrc[0])
    const image = await Jimp.read(signUrl)
    await image.resize(150, 60)
    await image.quality(parseFloat(signReduceRate))
    image.getBase64(Jimp.AUTO, (err, src) => {
      setCompressedSign(src)
      console.log(src)
      const buffer = Buffer.from(src, "base64")
      setSignSize(buffer.length/1000);
    })}
  
  

  console.log(picSrc)
  const files = [...picSrc]
  const resizeImg = () => {
    compress
      .compress(files, {
        size: 4, // the max size in MB, defaults to 2MB
        quality: 0.75, // the quality of the image, max is 1,
        maxWidth: 1920, // the max width of the output image, defaults to 1920px
        maxHeight: 1920, // the max height of the output image, defaults to 1920px
        resize: true, // defaults to true, set false if you do not want to resize the image width and height
        rotate: false, // See the rotation section below
      })
      .then(data => setCompressedPic(data[0].data))
      .then(() => setDownloadLink(URL.createObjectURL(compressedPic)))
  }

  async function handleImageUpload() {
    const imageFile = picSrc[0]
    console.log("originalFile instanceof Blob", imageFile instanceof Blob) // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`)

    const options = {
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(imageFile, options)
      console.log(
        "compressedFile instanceof Blob",
        compressedFile instanceof Blob
      ) // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`) // smaller than maxSizeMB
      console.log(compressedFile)

      const downloadL = URL.createObjectURL(compressedFile)
      setDownloadLink(downloadL)
      console.log(downloadLink)

      // await uploadToServer(compressedFile); // write your own logic
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(selectedImgWidth)
  // text vars
  // console.log(compressedPic)
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                      onToggle={value => {
                        setIsAddDate(!isAddDate)
                      }}
                    />
                  </div>

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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "0.5rem 0rem",
                      width: "102%",
                      justifyContent: "space-between",
                      transition: "ease",
                    }}
                  >
                   
                    {
                      isAddDate?
                     null
                    : 
                    <div>
                    <label for="quality">{`Reduce By: ${reduceRate}%`}</label>
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
                  <PrimaryButton btnLabel="Resize" handleBtn={imgcheck} />
                 
                </ImageOptionContainer>
              </ModalContent>

              <ModalContent>
                <div>
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
                     signSize?
                     'Download':
                     `Download ${signSize}KB`
                   }
                  </a>
                  :
                  null
                  }
                </div>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '50%',
                    justifyContent: 'space-evenly',
                    margin: '0rem 1rem'
                }}>
                    <div>
                    <label for="signquality">{`Reduce By: ${signReduceRate}%`}</label>
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
               
                <SignOptionContainer>
              
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
                </SignOptionContainer>
                <PrimaryButton btnLabel="Resize" handleBtn={handleCompressSign} />

                {/* custom btn */}
               
               
                </div>  
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
                  
}
const Background = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 50rem;
  height: 30rem;
  justify-content: space-evenly;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #f1f1f1;
  color: #000;
  display: flex;
  position: relative;
  z-index: 1000;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`

const ModalContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.8;
  padding: 0rem 1rem;
  /* border-radius: 20px; */
  color: #141414;
  background-color: #f1f1f1;
  border-right: 1.5px solid black;
  p {
    margin-bottom: 1rem;
  }
  /* button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  } */

  /* div {
    position: relative;
  }
  div > img {
    width: 150px;
    height: 200px;
  }

   */
  div > canvas {
    position: absolute;
    /* top: 8rem;
    left: 1rem; */
    background-color: white;
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
    padding: 10px 2.3rem;
    background-color: #754fdf;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  }

  .sign-file-input__label svg {
    height: 16px;
    margin-right: 4px;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

const ImageOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-evenly;
  padding: 0rem 1rem;
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

const ImgDimensionInput = styled.input`
  width: 80px;
  height: 30px;
  border: 2px solid #754fdf;
  border-radius: 10px;
  padding-left: 0.5rem;

  :focus {
    outline: none;
  }
`
const SignOptionContainer = styled.div`
 display: flex;
 flex-direction: column
`
