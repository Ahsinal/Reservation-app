import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img className="img fpImg" src="https://img.freepik.com/free-photo/laempromthep-coast-twiilight_1150-11144.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
                <span className="fpNam">Narayani Beach</span>
                <span className="fpCity">Bharatpur</span>
                <span className="fpPrice">Starting from 1200</span>
                <div className="fpRating">
                    <button>7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="img fpImg" src="https://img.freepik.com/free-photo/pair-african-elephants-walking-land-with-dust-greenery_181624-27263.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
                <span className="fpNam">National Park</span>
                <span className="fpCity">Chitwan </span>
                <span className="fpPrice">Starting from 4000</span>
                <div className="fpRating">
                    <button>8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="img fpImg" src="https://img.freepik.com/free-photo/happy-friends-kayaking-river-with-sunset-background_155003-44413.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
                <span className="fpNam">Sukute Resort</span>
                <span className="fpCity">Trishuli</span>
                <span className="fpPrice">Starting from 9000</span>
                <div className="fpRating">
                    <button>9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="img fpImg" src="https://img.freepik.com/free-photo/travelling-iran_8327-274.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
                <span className="fpNam">Royale Palce</span>
                <span className="fpCity">Pokhara</span>
                <span className="fpPrice">Starting from 12000</span>
                <div className="fpRating">
                    <button>9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
