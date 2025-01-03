import Image from "next/image";
import IconsImage from "@/app/components/Images/icons8-arrow-right-50.png";
import Img1 from "@/app/components/Images/Group 94.png";
import Img2 from "@/app/components/Images/Group 96.png";
import Img3 from "@/app/components/Images/Group 97.png";
import Img4 from "@/app/components/Images/Group 98.png";
import BigImage from "@/app/components/Images/Group 95.png";
import OneImage from "@/app/components/Images/Group 107.png";
import TwoImage from "@/app/components/Images/Group 106.png";
import SlytherineImage from "@/app/components/Images/syltherine.png";
import LeviosaImage from "@/app/components/Images/leviosa.png";
import LolitoImage from "@/app/components/Images/lolito.png";
import RespiraImage from "@/app/components/Images/respira.png";

export default function SingleProduct(){
    return(
        <div className="w-[1440px] h-[3107px]">
            <div className="container w-1440 h-100 flex">
            <div className="main">
{ /*--------------------------- top info ---------------------------*/}        
            <div className="filter-section-2 w-1440 h-100">
            <p className="h">Home</p>
            <div className="arrow-icon">
            <Image src={IconsImage} alt="" width={20} height={16} ></Image>
            </div>
            <p className="s">Shop</p>
            <div className="arrow-icon">
            <Image src={IconsImage} alt="" width={20} height={16} ></Image>
            </div>
            <p className="line">|</p>
            <h5 className="A">Asgaard sofa</h5>
                </div>
            </div>
{ /*---------------------------part-1---------------------------*/}        
{ /*---------------------------Images---------------------------*/}        
        <div className="card-r w-1440 h-820">
        <div className="child-card-r1 w-76 h-416">
        <Image src={Img1} alt="" width={76} height={80}></Image>
        <br />
        <Image src={Img2} alt="" width={76} height={80}></Image>
        <br />
        <Image src={Img3} alt="" width={76} height={80}></Image>
        <br />
        <Image src={Img4} alt="" width={76} height={80}></Image>
    </div>
{ /*---------------------------main image---------------------------*/}        
<div className="child-card-r2">
    <Image src={BigImage} alt="" width={481} height={500}></Image>
</div>
{ /*---------------------------product info---------------------------*/}        
<div className="child-card-r3">
    <h2 className="product-name-h2"> Asgaard sofa</h2>
    <p className="p-price-r">Rs. 250,000.00</p>
    <div className="icons-r">
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-half"></i>
    </div>
    <p className="line-r">| </p>
    <p className="r-review"> 5 Customer Review</p>
    <p className="r-d">Setting the bar as one of the loudest speakers in its class, the <br />Kilburn is a compact, stout-hearted hero with a well-balanced  <br /> audio which boasts a clear midrange and extended highs for a <br /> sound.</p>
</div>
{ /*---------------------------Size options---------------------------*/}        
<div className="child-card-r4">
    <p className="r-s">Size</p>
    <div className="btns-4">
    <button className="btns-1"> L </button>
    <button className="btns"> XL </button>
    <button className="btns"> XS </button>
</div>
{ /*---------------------------Colors options---------------------------*/}        
<div className="child-card-r5">
    <p className="r-c">Color</p>
    <div className="r-btns">
    <button className="r-1"></button>
    <button className="r-2"></button>
    <button className="r-3"></button>
    </div>
{ /*---------------------------shop options---------------------------*/}        
<svg className="rect-1" width="200" height="130" xmlns="http://www.w3.org/2000/svg">
<rect width="120" height="64" x="10" y="10" rx="10" ry="10" fill="#FFFFFF" stroke='#9F9F9F' />
</svg>
<svg className='rect-2' width="250" height="130" xmlns="http://www.w3.org/2000/svg">
<rect width="195" height="64" x="10" y="10" rx="10" ry="10" fill="#FFFFFF" stroke='#000000' />
</svg>
<svg className='rect-3' width="250" height="130" xmlns="http://www.w3.org/2000/svg">
<rect width="195" height="64" x="10" y="10" rx="10" ry="10" fill="#FFFFFF" stroke='#000000' />
</svg>

<p className="rr-1">-</p>
<p className="rr-2">1</p>
<p className="rr-3">+</p>
<p className="rr-4">Add To Cart</p>
<p className="rr-5">+</p>
<p className="rr-6">Compare</p>

    </div>
{ /*---------------------------line---------------------------*/}        
    <div className="b-line">
        <hr />
    </div>
{ /*---------------------------end text---------------------------*/}        
<div>
    <p className="r-info">SKU <br />
        <br />
        Category <br />
        <br />
        Tags <br />
        <br />
        Share
    </p>
    
    <p className="r-info-2"> : <br />
    <br />
     : <br />
    <br />
     : <br />
    <br />
     :
    </p>

    <p className="r-info-3"> SS001 <br />
    <br />
     Sofas <br />
    <br />
     Sofa, Chair, Home, Shop
    </p>
</div>
{ /*---------------------------share icons---------------------------*/}        
<div className="share-icons">
<i className="bi bi-facebook"></i>
<i className="bi bi-linkedin"></i>
<i className="bi bi-twitter"></i>
</div>
{ /*---------------------------part-1 end line---------------------------*/}        
</div>
<br /><br /><br />
<hr />
</div>
{ /*---------------------------part-1 end---------------------------*/}
{ /*---------------------------part-2 starts---------------------------*/}        
            <div className="card-p-2 w-1440 h-744">
                <p className="p-d">Description</p>
                <p className="p-a">Additional Information</p>
                <p className="p-r">Reviews [5]</p>
             </div>
             <div>
<p className="p-2-desc1">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road.</p>
<br />
<br />
<p className="p-2-desc2">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
{ /*---------------------------images---------------------------*/}        
<div className="single-p-images">
<Image src={OneImage} alt="" width={550} height={340}></Image>
<Image src={TwoImage} alt="" width={550} height={340} color="#F9F1E7"></Image>
</div>
{ /*---------------------------end Line---------------------------*/} 
<br /><br /><hr /> <br /> <br />
{ /*---------------------------part-2 ends---------------------------*/} 
{ /*---------------------------part-3 starts---------------------------*/} 
    <h2 className="p3-h3">Related Products</h2>
{/* ------------------------products-------------------------------- */}
<div className="images">
        { /*--------------------------- product 1 ---------------------------*/}
              <div className="card-image">
              <Image src={SlytherineImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
              <div className="card-info">
                <p className="p-info">-30%</p>
                </div>
              <div className="child-card">
                <h3 className="product-name">Syltherine</h3>
                <p className="p-description">Stylish cafe chair</p>
                <p className="p-price">Rp 2.500.000 <s className="s">Rp 3.500.000</s></p>
                <br />
                </div>  
                </div>
        { /*--------------------------- product 2 ---------------------------*/}
                <div className="card-image">  
                <Image src={LeviosaImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="child-card2-new">
                <h3 className="product-name2">Leviosa</h3>
                <p className="p-description2">Stylish cafe chair</p>
                <p className="p-price2">Rp 2.500.000 </p>
                  <br />
                </div>
                </div>
        { /*--------------------------- product 3 ---------------------------*/}
                <div className="card-image">
                <Image src={LolitoImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="card-info">
                <p className="p-info">-50%</p>
                </div>
                <div className="child-card">
                <h3 className="product-name">Lolito</h3>
                <p className="p-description">Luxury big sofa</p>
                <p className="p-price">Rp .000.000 <s className="s">Rp 14.000.000</s></p>
                <br />
                </div>  
                </div>
        { /*--------------------------- product 4 ---------------------------*/}        
                <div className="card-image">
                <Image src={RespiraImage} alt="" width={285} height={301} objectFit="cover" className="object-cover"></Image>
                <div className="card-new">
                <p className="p-info">New</p>
                </div>
                <div className="child-card">
                <h3 className="product-name">Respira</h3>
                <p className="p-description">Outdoor bar table and stool</p>
                <p className="p-price">Rp 500.000</p>
                <br />
                </div>  
                </div>                
        </div>
{ /*--------------------------- show more button ---------------------------*/}       
            <div className="btn-more">
            <button className="more">Show More</button>
            </div>
           
            

</div>
        </div>
    )
}