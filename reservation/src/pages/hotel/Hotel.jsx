import "./hotel.css"
import Navbar from "../../compo/navbar/Navbar"
import Header from "../../compo/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../compo/mailList/MailList"
import { useState } from "react"
export const Hotel = () => {
    const[slideNumber,setSlideNumber]=useState(0);
    const[open,setOpen]=useState(false);
    const photos = [
        {
            src: "https://img.freepik.com/premium-photo/bedroom-with-bed-large-window-with-view-sea_534373-3354.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=ais"
        },
        {
            src: "https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr"
        },
        {
            src: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr"
        },
        {
            src: "https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2064.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr"
        },
        {
            src: "https://img.freepik.com/free-photo/bedroom-with-bed-chair-front-sliding-glass-door_1340-25294.jpg?size=626&ext=jpg&ga=GA1.2.1681159899.1672509043&semt=ais"
        },
        {
            src: "https://img.freepik.com/free-photo/interior-design-bedroom-with-modern-decoration_181624-46706.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr"
        },
    ];
    const handleOpen =(i)=>{
        setSlideNumber(i);
        setOpen(true);
    }
    const handleMove=(direction)=>{
        let newSlideNumber;
        if(direction==="l"){
            newSlideNumber= slideNumber===0 ? 5 : slideNumber-1
        }
        else{
            newSlideNumber= slideNumber===5 ? 0 : slideNumber+1
        }
        setSlideNumber(newSlideNumber);
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img className="sliderImg" src={photos[slideNumber].src} alt="" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("l")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 Nweyork</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPricehighLight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} className="hotelImg" src={photo.src} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Kraakow</h1>
                            <p className="hotelDesc">
                                Architecturally stunning, unmistakably Nepali in style, and with a magnificent view of the Himalayas,
                                The Soaltee Kathmandu is Nepal’s premier 5 Star Deluxe hotel. An exceptional blend of resort-like setting
                                and traditional elegance, the hotel is set in lush green 12 acres of the landscaped area featuring 285 beautifully appointed rooms,
                                eclectic fine dining options, and brilliantly designed meeting spaces making it an ideal destination for business, leisure, and all celebrations.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>in the heart of Kraakow, with a magnificent view of the Himalayas</span>
                            <h2><b>$945</b>(9 nights)</h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
            </div>
        </div>
    )
}