import './Homepage.css'
import medicine from './images/medicine.jpg'
export default function Homepage(){

return(
    
    <div className="homepg" name='home'>
        <div className='homeleft'>
            <img src={medicine} alt="image" />
        </div>
        <div className='homeright'>
            <h1>Welcome to Vasan medical shop</h1>
            <p>Your Trusted Partner in Health and Wellness</p>
            <p>Discover a comprehensive range of pharmaceuticals, healthcare products, and expert guidance right here at Vasan Medical Shop Name. We're committed to serving our community with high-quality medications, health essentials, and personalized care.</p>
             <h1>What We Offer:</h1>
            <p>Medications: Find a wide selection of prescription and over-the-counter medicines.</p>
            <p>Healthcare Essentials: Browse through our collection of healthcare products, including first aid supplies, vitamins, and more.</p>
        </div>

    </div>
    
)
}