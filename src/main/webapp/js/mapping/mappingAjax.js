var ajaxRequestURL = 'mappingAjax.jsp';

function ajaxInitMappings(input, inputType, mapping, output, outputType) {
    var command = "init";
    loadingPanel.setHeader("Loading, please wait...");
    loadingPanel.show();
    

  
    if (input=='null' && output=='null'){
        alert("Welcome to annotator! Please use the Empower Tool so as to choose the Schemas and Services you are interested in Annotating!");
        location = "http://127.0.0.1:8080/empower/signin.jsp";
     }else{
        YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
        {
            success: function(o) {
                if(o.responseText == null || o.responseText == "") {
                    alert("error executing " + command);
                    loadingPanel.hide();
                    return;
                }	
        
                try {
                    response = YAHOO.lang.JSON.parse(o.responseText);
                    initMappingsResponse(response);
                    loadingPanel.hide();
                } catch(e) {
                    loadingPanel.hide();
                    alert("Error: Could not initialise mapping tool\n" + e.name + ":" + e.message);
                }
            },
            
            failure: function(o) {
                alert("mapping async request failed: " + command);
                loadingPanel.hide();
            },
              
            argument: null
        }, "command=" + command +
        "&input=" + input + "&inputType=" + inputType + "&mapping=" + mapping + "&output=" + output + "&outputType=" + outputType);
    }
}

/*
function ajaxInitMappings(uploadId, mappingId, targetPath) {
    var command = "init";
    loadingPanel.setHeader("Loading, please wait...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
        { success: function(o) {
            if(o.responseText == null || o.responseText == "") {
        		alert("error executing " + command);
        		loadingPanel.hide();
        		return;
        	}	
        
            response = YAHOO.lang.JSON.parse(o.responseText);
            initMappingsResponse(response);
            loadingPanel.hide();
          },
            
          failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
          },
              
          argument: null
    }, "command=" + command +
       "&upload=" + uploadId + "&mapping=" + mappingId + "&output=" + targetPath);
}
*/


function ajaxReleaseLock(lockId,mapid) {
    var command = "init";
    
    YAHOO.util.Connect.asyncRequest('POST', 'LockRelease.action',
    {
        success: function(o) {
            window.document.location.href='ImportSummary';
          
        },
            
        failure: function(o) {
        	
            alert("failed to release lock");
        },
              
        argument: null
    }, "lockId=" + lockId+"&mapping="+mapid);
}

function ajaxSetXPathMapping(source, target, index) {
    var command = "setXPathMapping";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setXPathMappingResponse(response);
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + 
    "&source=" + source + "&target=" + target + "&index=" + index);
}

function ajaxRemoveMappings(target, index) {
    var command = "removeMappings";
    loadingPanel.setHeader("Removing mappings...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                removeMappingsResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&target=" + target + "&index=" + index);
}

function ajaxAddCondition(target) {
    var command = "addCondition";
    loadingPanel.setHeader("Adding optional condition...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                addConditionResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&target=" + target);
}

function ajaxRemoveCondition(target) {
    var command = "removeCondition";
    loadingPanel.setHeader("Removing optional condition...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
            
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                removeConditionResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&target=" + target);
}

function ajaxSetConditionValue(target, value) {
    var command = "setConditionValue";
    loadingPanel.setHeader("Setting condition value...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setConditionValueResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&target=" + target + "&value=" + urlescape(value));
}

function ajaxRemoveConditionValue(target) {
    var command = "removeConditionValue";
    loadingPanel.setHeader("Removing condition value...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                removeConditionValueResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&target=" + target);
}

function ajaxSetConditionXPath(target, value) {
    var command = "setConditionXPath";
    loadingPanel.setHeader("Setting condition xpath...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setConditionXPathResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&target=" + target + "&value=" + value);
}


function ajaxRemoveConditionXPath(target) {
    var command = "removeConditionXPath";
    loadingPanel.setHeader("Removing condition xpath...");
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                removeConditionXPathResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&target=" + target);
}

function ajaxGetElementDescription(element) {
    var command = "getElementDescription";
    loadingPanel.show();
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                loadingPanel.hide();
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                getElementDescriptionResponse(response);
                loadingPanel.hide();
            } catch(e) {
                loadingPanel.hide();
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
            loadingPanel.hide();
        },
              
        argument: null
    }, "command=" + command + "&element=" + element);
}


function ajaxGetTooltip(element) {
    var command = "getTooltip";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                getTooltipResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&element=" + element);
}

function ajaxDuplicateNode(id) {
    var command = "duplicateNode";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
        
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                duplicateNodeResponse(id, response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + id);
}

function ajaxRemoveNode(id) {
    var command = "removeNode";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                removeNodeResponse(id, response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + id);
}

function ajaxSetConstantValue(id, index, value) {
    var command = "setConstantValueMapping";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setConstantValueResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + id + "&value=" + value + "&index=" + index);
}

function ajaxSetEnumerationValue(id, value) {
    var command = "setEnumerationValueMapping";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setEnumerationValueResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + id + "&value=" + urlescape(value));
}

function ajaxAdditionalMappings(id, index) {
    var command = "additionalMappings";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                additionalMappingsResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + id + "&index=" + index);
}

function ajaxPreviewTransform(service_id, map_type,selections) {
    var command = "previewTransform";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                previewTransformResponse(response, service_id, map_type,selections);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command);
}

function ajaxMappingSummary() {
    var command = "mappingSummary";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                mappingSummaryResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command);
}

function ajaxTargetDefinition() {
    var command = "getTargetDefinition";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command);
}

function ajaxGetHighlightedElements() {
    var command = "getHighlightedElements";
    return;
    
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                getHighlightedElementsResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command);
}

function ajaxGetDocumentation(id) {
    var command = "getDocumentation";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                getDocumentationResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + id);
}

function ajaxInitComplexCondition(item) {
    var command = "initComplexCondition";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                initComplexConditionResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + item.id);
}

function ajaxAddConditionClause(id, path, complex) {
    var command = "addConditionClause";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	

            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                addConditionClauseResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }

        },
            
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
              
        argument: null
    }, "command=" + command + "&id=" + id + "&path=" + path + ((complex != "false")?"&complex=true":""));
}

function ajaxRemoveConditionClause(id, path) {
    var command = "removeConditionClause";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
		
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                removeConditionClauseResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
		
        },
	
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
	
        argument: null
    }, "command=" + command + "&id=" + id + "&path=" + path);
}

function ajaxSetConditionClauseKey(id, path, key, value) {
    var command = "setConditionClauseKey";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
		
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setConditionClauseKeyResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
		
        },
	
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
	
        argument: null
    }, "command=" + command + "&id=" + id + "&path=" + path + "&key=" + key + "&value=" + value);
}

function ajaxSetConditionClauseXPath(id, path, source) {
    var command = "setConditionClauseXPath";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
		
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setConditionClauseKeyResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
		
        },
	
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
	
        argument: null
    }, "command=" + command + "&id=" + id + "&path=" + path + "&source=" + source);
}

function ajaxRemoveConditionClauseKey(id, path, key) {
    var command = "removeConditionClauseKey";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
		
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                removeConditionClauseKeyResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
		
        },
	
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
	
        argument: null
    }, "command=" + command + "&id=" + id + "&path=" + path + "&key=" + key);
}

function ajaxClearXPathFunction(id, index) {
    var command = "clearXPathFunction";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
		
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                clearXPathFunctionResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
		
        },
	
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
	
        argument: null
    }, "command=" + command + "&id=" + id + "&index=" + index);
}

function ajaxSetXPathFunction(id, index, data) {
    var command = "setXPathFunction";
    YAHOO.util.Connect.asyncRequest('POST', ajaxRequestURL,
    {
        success: function(o) {
            if(o.responseText == null || o.responseText == "") {
                alert("error executing " + command);
                return;
            }	
		
            try {
                response = YAHOO.lang.JSON.parse(o.responseText);
                setXPathFunctionResponse(response);
            } catch(e) {
                alert("Error executing " + command + "\n" + e.name + ":" + e.message);
            }
		
        },
	
        failure: function(o) {
            alert("mapping async request failed: " + command);
        },
	
        argument: null
    }, "command=" + command + "&id=" + id + "&index=" + index + "&data=" + data);
}