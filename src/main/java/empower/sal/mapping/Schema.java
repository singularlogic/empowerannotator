package empower.sal.mapping;  

import empower.sal.xml.xsd.XSDParser;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

public class Schema {
	private String id = "";

	private ArrayList<MappingElement> roots = new ArrayList<MappingElement>();
	private HashMap<String, MappingElement> map = new HashMap<String, MappingElement>();
	
	public Schema() {
	}
	
	public void addRoot(MappingElement root) {
		this.roots.add(root);
		this.addElementsToMap(roots);
	}
	
	private void addElementsToMap(ArrayList<MappingElement> root) {
		String key = null;
		for(MappingElement e: root) {
			key = "tree_" + this.getId() + "_node_" + map.size();
			map.put(key, e);
			e.setId(key);
			
			addElementsToMap(e.getAttributes());
			addElementsToMap(e.getChildren());
		}
	}
	
	public void setId(String id) { this.id = id; }
	public String getId() { return id;	}
	
	public MappingElement getMappingElement(String name) {
		MappingElement e = this.map.get(name);
		return e;
	}
	
	public String printTree() {
		return printTree(false);
	}
	
	public String printTree(boolean simple) {
		StringBuffer out = new StringBuffer();
				
		out.append("<div id=\"treemenu_" + this.getId() + "\">\n");
		out.append("<ul>\n");
		for(MappingElement e: roots) {
			e.printTree(out, simple);
		}
		out.append("</ul>\n");
		out.append("</div>");
		
		return out.toString();
	}
	
    public Map<String, MappingElement> getMap() {
        return this.map;
    }
    
    public Map<String, String> getNamespaces() {
        return null;
    }
}
