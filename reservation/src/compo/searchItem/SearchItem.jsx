import "./searchItem.css"
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img className="siImg"src="https://img.freepik.com/free-photo/vacation-brown-youth-room-sleeping_1253-770.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubTitle">Studio Apartment with Air Conditioning</span>
            <span className="siFeatures">Entire studio + 1 bathroom + 21m<sup>2</sup> 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="CancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See Availability</button>
            </div>
        </div>
    </div>
    
  )
}

export default SearchItem
