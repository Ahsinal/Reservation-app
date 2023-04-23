import "./featured.css"
export const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img className="featuredImg" src="https://img.freepik.com/free-photo/old-hotel-sign_1101-890.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>1 Properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img className="featuredImg" src="https://img.freepik.com/free-photo/pillow-bed_74190-6244.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>2 Properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img className="featuredImg" src="https://img.freepik.com/free-photo/afternoon-tea-set-with-latte-coffee-hot-tea-table-near-chair-around-swimming-pool_74190-10018.jpg?size=626&ext=jpg&ga=GA1.1.1681159899.1672509043&semt=robertav1_2_sidr" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>3 Properties</h2>
                </div>
            </div>

        </div>
    )
}