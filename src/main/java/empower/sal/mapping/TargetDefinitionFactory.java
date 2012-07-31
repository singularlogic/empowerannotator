package empower.sal.mapping;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import empower.sal.xml.xsd.XSDParser;

public class TargetDefinitionFactory {
	private static final String TARGET_DEFINITION_VERSION = "1.0";

	public TargetDefinitionFactory() {
		
	}
	
	public static JSONObject buildFromXSD(String file) {
		XSDParser parser = new XSDParser(file);
		JSONObject target = TargetDefinitionFactory.buildFromXSD(parser);
		target.element("xsd", file);
		return target;
	}
	
	public static JSONObject buildFromXSD(XSDParser parser) {
		return TargetDefinitionFactory.buildFromXSD(parser, null);
	}
	
	public static JSONObject buildFromXSD(XSDParser parser, String type) {
		JSONObject target = new JSONObject();
		
		// basic structure
		target.element("version", TARGET_DEFINITION_VERSION);
		target.element("groups", new JSONArray());
		
		// set item level
		
		JSONObject root;
		if(type == null) {
			root = parser.getRootElementDescription();
		} else {
                        System.out.println("Going getComplexTypeDescription");
			root = parser.getComplexTypeDescription(type);
		}
                
                System.out.println("final namespaces: " + parser.getNamespaces());
		// namespaces
		JSONObject namespaces = new JSONObject();
		Map<String, String> map = parser.getNamespaces();
		Iterator<String> i = map.keySet().iterator();
		while(i.hasNext()) {
			String key = i.next();
			String value = map.get(key);
			
			namespaces.element(key, value);
		}
		
                System.out.println("target namespaces: " + namespaces);
		target.element("namespaces", namespaces);
                
		if(root != null) {
			JSONObject item = new JSONObject();
			
			item.element("element", root.getString("name"));
			if(root.has("prefix")) {
				item.element("prefix", root.getString("prefix"));
			}
				
			target.element("item", item);
		}
		
		//set default group
		
		JSONObject group = new JSONObject();
		group.element("name", root.getString("name"));
		group.element("element", root.getString("name"));
		if(type != null) {
			group.element("contents", root);
		}
		
		target.getJSONArray("groups").add(group);
		
		return target;
	}
}
