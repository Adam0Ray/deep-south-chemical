import ServicesNavbar from "./ServicesNavbar";

const ServicesLab = () => {
    return (  
        <div className="chemical-services-container">
            <ServicesNavbar/>
            <div className="laboratory-facilities">
                <h2>Laboratory Facilities</h2>
                    <h3>Goals</h3>
                        <p>The goal of the DSC surface cleaning lab is to assist Oil and Gas Companies and Service companies in evaluating DSC products and systems for safer and consistent results.</p>
                    <h3>Facilities</h3>
                        <p>The Surface Cleaning Laboratory at the Deep South Chemical, Inc. R & D facility evaluates and promotes their complete line of safer, environmentally friendlier alternatives to hazardous cleaning solvents. Located in the Deep South Chemical, Inc. Research and Development Center, Broussard, the laboratory is designed to meet oilfield testing needs, with a special focus on wellbore displacements and unique cement spacer designs utilizing state of the art aqueous and non-aqueous cleaners for synthetic and oil base drilling fluids. In full operation since 1993, DSC has already studied a wide range of synthetic and oil base drilling fluids and others - to determine the effectiveness of different wellbore displacement spacer configurations and their chemistries on a variety of solids loadings and substrate surfaces.
                        </p>
                    <h3>Cleanliness Testing</h3>
                        <p>DSC Lab contains state of the art equipment to conduct aqueous and non-aqueous wellbore displacement chemical testing.</p>
                        <p>DSC Lab is able to both quantitatively and qualitatively measure product effectiveness using:</p>
                        <li>Gravimetric analysis before and after cleaning</li>
                        <li>FT-IR spectrometry</li>
                        <li>Oil and Grease</li>
                        <li>Bucket Sheen Test</li>
                        <li>LC50 Toxicity Testing</li>
                        <li>Fluorescence/Black Light Examination</li>
                    <h3>Other Facilities</h3>
                        <li>Proprietary computer program with a database and equipped to simulate the cleaning process of wellbore tubulars and casing annulus in all types of drilling fluids and environments.</li>
                        <li>Proprietary flow model designed to simulate real time conditions in wellbore displacements. Our 30 foot clear acrylic model simulates spacer flow patterns and effectiveness of DSC aqueous and non-aqueous systems.</li>
             </div>

        </div>
    );
}
 
export default ServicesLab;