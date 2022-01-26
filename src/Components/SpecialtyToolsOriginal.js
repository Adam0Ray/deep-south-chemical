import { useCollection } from "../hooks/useCollection"
import SpecialtyToolsPhoto from "./SpecialtyToolsPhoto"
import SpecialtyToolsSpecs from "./SpecialtyToolsSpecs"


export default function SpecialtyTools() {
    const { isPending, error, documents } = useCollection('tools')
   
    return (  
        <div className="speciality-tools-container">
            <h1>Specialty Tools</h1>
            {isPending && <div>Loading Specialty tools...</div>}
            {error && <div>{error}</div>}
            <h4>Technical References</h4>
                <a target= "_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/Technical%20Briefs%2FBenefits%20of%20BOP%20Stack%20Cleaning.pdf?alt=media&token=f269987e-021f-4e4a-b2b3-a5e0f45091a5">Benefits of BOP Stack Cleaning</a>
                <a target= "_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/Technical%20Briefs%2FPrinciples%20of%20Mechanical%20Cleaning%20Tools.pdf?alt=media&token=5825190e-8c55-40c6-8527-b9e9cde3ab9a">Principles of Mechanical Cleaning Tools</a>
                <a target= "_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/Technical%20Briefs%2FUtilization%20of%20Mechanical%20Cleaning%20Tools.pdf?alt=media&token=ebc82193-d2b3-46e3-93fd-8499ff30e7a8">Utilization of Mechanical Cleaning Tools</a>
            <h4>Products</h4>    
                <ul>
                {documents && documents.map( tool => (
                    <div  className="tool-wrapper" key ={tool.id}>
                        {tool.photoURL !=undefined && <div className="tool-photo-content">
                        <SpecialtyToolsPhoto src={tool.photoURL} />
                        </div>}
                        <div className="tool-content">
                            <h3>{tool.name}</h3>
                            <h4>About</h4>
                            <p>{tool.about}</p>
                            {tool.benefit1 !=undefined && <h4>Benefits</h4>}
                                {tool.benefit1 !=undefined && <li>{tool.benefit1}</li>}
                                {tool.benefit2 !=undefined && <li>{tool.benefit2}</li>}
                                {tool.benefit3 !=undefined && <li>{tool.benefit3}</li>}
                                {tool.benefit4 !=undefined && <li>{tool.benefit4}</li>}
                                {tool.benefit5 !=undefined && <li>{tool.benefit5}</li>}
                            {tool.feature1 !=undefined && <h4>Features</h4>}
                                {tool.feature1 !=undefined && <li>{tool.feature1}</li>}
                                {tool.feature2 !=undefined && <li>{tool.feature1}</li>}
                                {tool.feature3 !=undefined && <li>{tool.feature1}</li>}
                                {tool.feature4 !=undefined && <li>{tool.feature1}</li>}
                                {tool.feature5 !=undefined && <li>{tool.feature1}</li>}
                                {tool.feature6 !=undefined && <li>{tool.feature1}</li>}
                                {tool.feature7 !=undefined && <li>{tool.feature1}</li>}
                        </div>
                        {tool.specURL !=undefined && <div className="tool-photo-content">
                            <SpecialtyToolsSpecs src={tool.specURL} />
                        </div>}
                    </div>
                ))}
                </ul>
        </div>
    );
}
 
