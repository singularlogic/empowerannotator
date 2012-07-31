package empower.sal.xml.xsd;

import net.sf.json.JSONObject;
import empower.sal.mapping.MappingElement;
import empower.sal.mapping.Schema;
import java.util.Map;

public class XSDSchema extends Schema {
        public XSDParser parser;
	public XSDSchema(XSDParser parser, String root, boolean rootIsElement) {
		JSONObject o = null;
                this.parser = parser;
		
		if(root == null) {
			o = parser.getRootElementDescription();
		} else if(rootIsElement) {
			o = parser.getElementDescription(root);
		} else {
			o = parser.getComplexTypeDescription(root);
		}
		
		if(o != null) {
			System.out.println(o);
			MappingElement element = new MappingElement(o);
			this.addRoot(element);
		}
	}
		
	public XSDSchema(XSDParser parser) {
		this(parser, null, true);
	}
        
        public Map<String, String> getNamespaces() {
            return this.parser.getNamespaces();
        }
}
