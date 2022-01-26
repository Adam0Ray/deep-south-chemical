import ServicesNavbar from "./ServicesNavbar";

const ServicesPit = () => {
    return (  
        
        <div className="chemical-services-container">
            <ServicesNavbar/>
            <div className="pit-cleaning">
                <h2>Complete Pit Cleaning Systems</h2>
                <div className="pit-cleaning-contents">
                    <h4>Oil Based Mud</h4>
                        <li>DSC Blue Max
                                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/sds%2FDSC_Blue_Max.pdf?alt=media&token=e6f915fc-f774-4768-9f49-327ef41b4167">SDS</a>  
                                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/tds%2FBLUE%20MAX.pdf?alt=media&token=0f0c1a15-c6eb-4d83-8df8-32b11fa1b50e">TDS</a>                        
                        </li>
                    <h4>Synthetic Oil Based Mud</h4>
                        <li>DSC Gold Clean
                                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/tds%2Fgold%20clean.pdf?alt=media&token=c33cbb08-a202-43b1-ac17-073d026ef6d2">TDS</a>                         
                        </li>
                </div>
            </div>
        </div>
    );
}
 
export default ServicesPit;