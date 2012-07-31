package empower.sal.example;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;
import empower.sal.mapping.AbstractMappingManager;
import empower.sal.mapping.Schema;
import empower.sal.mapping.TargetDefinitionFactory;
import empower.sal.xml.xsd.XSDParser;
import empower.sal.xml.xsd.XSDSchema;
import java.util.Iterator;
import net.sf.json.JSONArray;
import java.util.HashMap;

public class ExampleMappingManager extends AbstractMappingManager {
        public XSDParser inputParser  = null;
	/*
	private String filePath = "";
	
	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	*/

	/**
	 * loads input xsd
	 * 
	 * @param input xsd filename
	 */
	public Schema loadInputSchema(String input, String inputType) {
		XSDParser parser = new XSDParser(input);
		XSDSchema schema = new XSDSchema(parser, inputType, (inputType == null));
		schema.setId("1");
                inputParser = parser;
		return schema;
	}
	
	/**
	 *  loads output xsd
	 *  
	 *  @param output xsd filename
	 */	
	public JSONObject loadOutputTarget(String output, String type) {
		XSDParser parser = new XSDParser(output);
		this.setXSDParser(parser);
                //HashMap<String, String> hm = new HashMap<String, String>();
                //System.out.println("input parser namespaces: " + inputParser.getNamespaces());
                //for(String key: inputParser.getNamespaces().keySet()) {
                //    hm.put(inputParser.getNamespaces().get(key), key);
                //}
                //System.out.println("hm namespaces: " + hm);
                parser.setNamespaces((HashMap<String, String>) inputParser.getNamespaces());
		JSONObject target = TargetDefinitionFactory.buildFromXSD(parser, type);
		target.element("xsd", output);
		
		return target;
	}
	
	public JSONObject loadSavedMapping(String mapping) {
		/*
		 * initialize result from mapping string
		 */
		JSONObject result = null;
		
                if(mapping!=null)
                    if(!mapping.equals("") && !mapping.equals("null"))
                    {
        		//String json = "{\"version\":\"1.0\",\"groups\":[{\"name\":\"RealizeInvoice\",\"element\":\"RealizeInvoice\",\"contents\":{\"name\":\"RealizeInvoice\",\"id\":\"11\",\"type\":\"anyType\",\"attributes\":[],\"children\":[{\"name\":\"InvoiceNumber\",\"type\":\"string\",\"id\":\"12\",\"mappings\":[{\"type\":\"xpath\",\"value\":\"/LogoInvoice/DocumentNumber\"}],\"maxOccurs\":1,\"minOccurs\":1},{\"name\":\"AccountingYear\",\"type\":\"string\",\"id\":\"13\",\"mappings\":[],\"maxOccurs\":1,\"minOccurs\":1},{\"name\":\"AccountingMonth\",\"type\":\"string\",\"id\":\"14\",\"mappings\":[],\"maxOccurs\":1,\"minOccurs\":1},{\"name\":\"DeliveryDate\",\"type\":\"string\",\"id\":\"15\",\"mappings\":[{\"type\":\"xpath\",\"value\":\"/LogoInvoice/InvoiceDate\"}],\"maxOccurs\":1,\"minOccurs\":1,\"warning\":\"date\"},{\"name\":\"city\",\"type\":\"string\",\"id\":\"16\",\"mappings\":[],\"maxOccurs\":1,\"minOccurs\":0},{\"name\":\"zip\",\"type\":\"string\",\"id\":\"17\",\"mappings\":[],\"maxOccurs\":1,\"minOccurs\":0},{\"name\":\"street\",\"type\":\"string\",\"id\":\"18\",\"mappings\":[],\"maxOccurs\":1,\"minOccurs\":0}],\"mappings\":[]}}],\"namespaces\":{\"pr0\":\"\"},\"item\":{\"element\":\"RealizeInvoice\"},\"xsd\":\"D:\\\\ontology.xsd\",\"template\":{\"mappings\":[],\"id\":\"20\",\"name\":\"RealizeInvoice\",\"type\":\"group\"}}";
                        System.out.println("json= " + mapping);
                	result = (JSONObject) JSONSerializer.toJSON(mapping);    
                    }    

		/*
		 * if result is null mapping will be ignored and mapping manager will create a new mapping
		 */
		return result;
	}
	
	public void saveMappings() {
		System.out.println("save mappings: " + this.getTargetDefinition().toString());
	/*
		if(this.mappingId != null) {
			DB.getSession().beginTransaction();
			String targetDefinitionString = this.getTargetDefinition().toString();
			Mapping map = DB.getMappingDAO().getById(Long.parseLong(this.mappingId), false);
			
			if(map == null) {
				log.error("No mapping object loaded!");
			} else {			
				map.setJsonString(targetDefinitionString);
			}
			
			DB.commit();
			log.debug("Mapping definition saved");
		}
		*/
	}
/*
        public JSONObject getTargetDefinition()
        {
                String element;
		JSONArray groups = this.targetDefinition.getJSONArray("groups");
                
                System.out.println(" Start getTargetDef: " + groups.toString());
		Iterator i = groups.iterator();
                
		while(i.hasNext()) {
			JSONObject item = (JSONObject) i.next();
                        if(readMapping)   
                            element = item.getString("contents");
                        else
                            element = item.getString("element");
                        
                        System.out.println(" ---- DEBUG " + element);
			item.put("contents", this.getElementDescription(element));
		}
                
                System.out.println("\n\n ++++++ what template oeo " + this.targetDefinition.getJSONObject("item").getString("element"));

		if(!this.targetDefinition.has("template") || this.targetDefinition.getJSONObject("template").isEmpty()) {
			JSONObject template = this.buildTemplate(this.targetDefinition.getJSONObject("item").getString("element"));
                        
                        System.out.println("\n\n what template oeo " + this.targetDefinition.getJSONObject("item").getString("element"));
			this.templateCache = template;
			this.cacheElements(this.templateCache);
		}

		this.targetDefinition.put("template", this.templateCache);

                //this.templateCache = this.buildTemplate(this.targetDefinition.getJSONObject("item").getString("element"));
                //this.cacheElements(this.targetDefinition);
                System.out.println("\n\n" + this.targetDefinition + "\n");

                return this.targetDefinition;
	}        
         * 
         */
}
