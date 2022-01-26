import SpecialtyToolsPhoto from "./SpecialtyToolsPhoto"
import SpecialtyToolsSpecs
 from "./SpecialtyToolsSpecs"
export default function SpecialtyToolsList({tools}) {

    
    return (
        <div className="tool-list">
            {tools.length === 0 && <p>No Tools</p>}
            {tools && tools.map( tool => (
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
        </div>
    )   
}