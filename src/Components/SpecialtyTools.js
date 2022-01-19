import { useCollection } from "../hooks/useCollection"
import SpecialtyToolsPhoto from "./SpecialtyToolsPhoto";



export default function SpecialtyTools() {
    const { isPending, error, documents } = useCollection('tools')
    
    return (  
        <div className="speciality-tools-container">
            <h1>Specialty Tools</h1>
            {isPending && <div>Loading Specialty tools...</div>}
            {error && <div>{error}</div>}
            
                <ul>
                {documents && documents.map( tool => (
                    <div  className="tool-wrapper" key ={tool.id}>
                        <SpecialtyToolsPhoto src={tool.photoURL} />
                        <div className="tool-content">
                            <h3>{tool.name}</h3>
                            <p>{tool.about}</p>
                            <h4>Benefits</h4>
                            <li>{tool.benefit1}</li>
                            <li>{tool.benefit2}</li>
                            <li>{tool.benefit3}</li>
                            <li>{tool.benefit4}</li>
                            <li>{tool.benefit5}</li>
                            <h4>Features</h4>
                            <li>{tool.feature1}</li>
                            <li>{tool.feature2}</li>
                            <li>{tool.feature3}</li>
                            <li>{tool.feature4}</li>
                            <li>{tool.feature5}</li>
                            <li>{tool.feature6}</li>
                            <li>{tool.feature7}</li>
                        </div>
                    </div>
                ))}
                </ul>
        </div>
    );
}
 
