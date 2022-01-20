import goldflushImage from '../images/gold-flush-front.gif'

const Home = () => {
    return (  
        <div className="homeContainer">
            <h1>Our History</h1>
                <p>
                    Deep South Chemical, Inc. was formed in 1988 to meet the increasing specialty wellbore cleaning needs of our customers. We set the standards for World Class Customer Service. DSC employees all agree that our first priority is customer satisfaction. DSC Customer Service Representatives always respond to our customers on a timely basis with accurate information. We work hard everyday to improve our customer service to the level of satisfaction our customers deserve and have come to expect. Personalized attention is what we provide. Understanding your questions and solving any problems as quickly as possible is of great importance to us. Our customer service department is available 24 hours a day, 7 days a week, 365 days a year.
                </p>
                <h2>
                    Our Mission Statement
                </h2>
                    <p>
                        Our Vision is to be the industry's preferred chemical company dedicated to providing the highest quality products and services to our customers.

                        Our mission is to create superior value for our customers. We wish to only provide products and services that will give our customers the value they deserve through efficient research and development and marketing of the highest quality products available.

                        Total Customer Satisfaction and Responsible Care® drive our effort. Every product that we sell meets our rigid quality assurance program designed to monitor for performance and quality with respect to the environment, safety and our laws.

                        Our Focus is on providing Value Added Products and Services. We create value-added product through our extensive knowledge of the industry and technology. we will capitalize on our ability to infuse new technology and renew existing product lines together with our expertise to implement them in the field.

                        Our enduring principals in the company's history and heritage reflect our long term goal. We are committed to maintaining a culture in which the highest ethics, principles and values are practiced daily in everything we do.

                        We will achieve our long time goal of becoming a leader in our industry because we know success begins and ends with our customers. We have learned to listen to them and to learn about their current and future needs. By focusing on the customers needs we can identify and eliminate existing problems and isolate the root cause. By focusing on the right way to address the customers needs we improve the quality and value of our products and services. This leads us to improved customer satisfaction and places us on the glide path towards being the best.
                    </p>
                <img className="img-goldflush" src={goldflushImage} alt="gold flush image"/>  
        </div>
    );
}
 
export default Home;