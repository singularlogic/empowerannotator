package empower.sal.mapping;

import java.util.ArrayList;
import java.util.Iterator;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class MappingElement {
	private String id = "";
	
	private String parent = "";
	private String namespace = "";
	private String name = "";
	private String type = "";
	
	private ArrayList<MappingElement> children = new ArrayList<MappingElement>();
	private ArrayList<MappingElement> attributes = new ArrayList<MappingElement>();
	private boolean isattr = false;
	
	public MappingElement(JSONObject node) {
		this("", node, false);
	}
	
	public MappingElement(JSONObject node, boolean attribute) {
		this("", node, attribute);
	}
	
	public MappingElement(String parent, JSONObject node) {
		this(parent, node, false);
	}

	public MappingElement(String parent, JSONObject node, boolean attr) {		
		JSONArray json_attributes = null;
		JSONArray json_children = null;
		if(node.has("attributes")) { json_attributes = node.getJSONArray("attributes"); }
		if(node.has("children")) { json_children = node.getJSONArray("children"); }

		this.setAttribute(attr);
                if(node.has("prefix") && node.getString("prefix").length() > 0) this.setNamespace(node.getString("prefix"));
                else this.setNamespace("");
		this.setName(node.getString("name"));
		if(node.has("type")) { this.setType(node.getString("type")); }
		this.setParent(parent);
				
		if(json_attributes != null && json_attributes.size() > 0) {
			Iterator i = json_attributes.iterator();
			while(i.hasNext()) {
				JSONObject o = (JSONObject) i.next();
				MappingElement element = new MappingElement(this.getXPath(), o, true);
				attributes.add(element);
			}
		}

		if(json_children != null && json_children.size() > 0) {
			Iterator i = json_children.iterator();
			while(i.hasNext()) {
				JSONObject o = (JSONObject) i.next();
				MappingElement element = new MappingElement(this.getXPath(), o, false);
				children.add(element);
			}
		}
	}
	
	public void setParent(String parent) {
		this.parent = parent;
	}
	
	public String getParent() {
		return this.parent;
	}

	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}
	
	public String getNamespace() {
		return this.namespace;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getXPath() {
		return this.parent + "/" + ((this.namespace.length() > 0)?this.namespace + ":":"") + this.name;
	}
			
	public ArrayList<MappingElement> getChildren() { return this.children; }
	public MappingElement getChild(int index) { return this.children.get(index); }

	public ArrayList<MappingElement> getAttributes() { return this.attributes; }
	public MappingElement getAttribute(int index) { return this.attributes.get(index); }

	public void setAttribute(boolean isattr) { this.isattr = isattr; }
	public boolean isAttribute() { return isattr; }

	public void setId(String id) { this.id = id; }
	public String getId() { return id; }
	
	public void setType(String type) { this.type = type; }
	public String getType() { return type; }
	
	public void print(StringBuffer out, boolean simple) {
		String className = (this.isAttribute())?"xmlattribute":"xmlelement";
		
		out.append("<div id=\"" + this.getId() + "\" xsdtype=\"" + this.getType() + "\" xpath=\"" + this.getXPath() + "\" class=\"" + className + "\">");
/*
		if(!simple) {
			if(children.isEmpty()) {
				this.printIcon(out);
			} else {
				this.printIconDisabled(out);
			}
		}
*/
		out.append(this.getName() + "\n");
		out.append("</div>\n");
		
	}
	
	public void printIcon(StringBuffer out) {
		out.append("<img width=\"16\" heigh=\"16\" src=\"images/help.png\" onclick=\"javascript:showTooltip('" + this.getId() + "')\"/>\n");
	}
	
	public void printIconDisabled(StringBuffer out) {
		out.append("<img width=\"16\" heigh=\"16\" src=\"images/help_disabled.png\" onclick=\"javascript:showTooltip('" + this.getId() + "')\"/>\n");
	}
	
	public void printTree(StringBuffer out, boolean simple) {
		
		out.append("<li>\n");
		
		this.print(out, simple);

		if(!attributes.isEmpty() || !children.isEmpty()) {
			out.append("<ul>\n");
			for(MappingElement e: attributes) {
				e.printTree(out, simple);
			}			
			for(MappingElement e: children) {
				e.printTree(out, simple);
			}
			out.append("</ul>\n");
		}
		
		out.append("</li>\n");
	}
}
