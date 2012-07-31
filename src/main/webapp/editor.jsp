
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%@page pageEncoding="UTF-8"%>
<%@page import="empower.sal.xml.*"%>


<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="images/browser_icon.ico" rel="shortcut icon" />
<link rel="stylesheet" type="text/css" media="screen"
	href="css/screen.css">
<!--  <title>Empower SAL Mapping Tool</title>-->
<title>Mapping Tool</title>

<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/reset-fonts-grids/reset-fonts-grids.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/resize/assets/skins/sam/resize.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/layout/assets/skins/sam/layout.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/button/assets/skins/sam/button.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/container/assets/skins/sam/container-skin.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/container/assets/skins/sam/container.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/assets/skins/sam/container.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/container/assets/skins/sam/container2.css">
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/tabview/assets/skins/sam/tabview.css">
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/treeview/assets/skins/sam/treeview.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/datatable/assets/skins/sam/datatable.css" />
<link rel="stylesheet" type="text/css" href="js/mapping/lib/yui/calendar/assets/skins/sam/calendar.css" />
<link rel="stylesheet" type="text/css" href="css/mapping/tool.css" />

<script type="text/javascript" src="js/mapping/lib/yui/yahoo/yahoo-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/event/event-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/dom/dom-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/treeview/treeview-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/element/element-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/dragdrop/dragdrop-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/resize/resize-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/animation/animation-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/layout/layout-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/button/button-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/container/container-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/connection/connection-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/json/json-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/datasource/datasource-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/datatable/datatable-min.js"></script>
<script type="text/javascript" src="js/mapping/lib/yui/tabview/tabview-min.js"></script> 
<script type="text/javascript" src="js/mapping/lib/yui/calendar/calendar-min.js"></script> 


<script type="text/javascript" src="js/htmlEscape.js"></script>
<script type="text/javascript" src="js/inPlaceEditing.js"></script>
<script type="text/javascript" src="js/mapping/DDSend.js"></script>
<script type="text/javascript" src="js/mapping/toolInit.js"></script>
<script type="text/javascript" src="js/mapping/toolelements.js"></script>
<script type="text/javascript" src="js/mapping/tool.js"></script>
<script type="text/javascript" src="js/mapping/conditioneditor.js"></script>
<script type="text/javascript" src="js/mapping/mappingAjax.js"></script>

<link type="text/css" rel="stylesheet" href="css/mapping/SyntaxHighlighter.css"/>
<link rel="stylesheet" type="text/css" href="css/screen.css" />




<style type="text/css">
.tdLabel {
	color: #333333;
	width: 90px;
}
</style>

<script language="javascript" src="js/mapping/lib/shCore.js"></script>
<script language="javascript" src="js/mapping/lib/shBrushXml.js"></script>
<script language="javascript">
	dp.SyntaxHighlighter.HighlightAll('code');
</script>
</head>
<body>
<span style="align:left;">
<h1>
</h1>
<br/>
<div id="logo"><h1>Mapping Tool</h1>
<!-- <img src="empower.png"/>-->
</div>
<hr/>
<div style="text-align:left; padding: 10px">
<h2>Annotation/Mapping Tool</h2>
<p>
The schema on the left represents the file to be annotated, while the schema in the middle represents the target where the file is going to be mapped.
Several mappings can be captured by dragging elements from the tree on the left to "unmapped" placeholders in the middle.<br/>
<br/>
* Set a constant value by double clicking on the "unmapped" placeholder.<br/>
* Apply a function to a specified mapping by clicking on the "f" icon.<br/>
* Apply a condition on a specified mapping by clicking on the "star" icon.<br/>
</p>
</div>
<hr/>
<div id="toolbar_buttons_container">
				<a class="button" href="#" onclick="javascript:previewTransform('<%= (String)request.getParameter("service_id") %>','<%= (String)request.getParameter("map_type") %>','<%= (String)request.getParameter("selections") %>');"><span>Annotate</span></a> 
				<a class="button" href="#" onclick="javascript:mappingSummary();"><span>Summary</span></a> 				
</div>
<br/>
<br/>
<div id="editor_container" style="width:1200px; height: 600px; position: relative;" class="yui-skin-sam">

	<div id="left1">
		<div id="sourceTree" style="width:300px;overflow-x:auto;"></div>
	</div>

	<div id="right1">
		<div style="width: 220px; height: 100%; overflow-x:hidden; overflow-y: hidden">
			<div id="template_groups_container"></div><br/>
			<div id="descriptive_groups_container"></div><br/>
			<div id="administrative_groups_container"></div>
		</div>
	</div>

	<div id="center1">
		<div id="mappings_container" style="height: 500px; overflow-y: auto"></div>
	</div>

	<script type="text/javascript">
		function onLoad() {
	        var layout = new YAHOO.widget.Layout("editor_container", {
    	        units: [
//                { position: 'top', height: 50, body: 'top1', gutter: '3px', collapse: false, resize: false },
//                { position: 'bottom', header: 'Bottom', height: 100, resize: true, body: 'bottom1', gutter: '5px', collapse: true },
            	    { position: 'left', header: 'Source Schema', width: 200, gutter: '3px', resize: true, body: 'left1', collapse: false, scroll: true},
        	        { position: 'right', header: 'Target Schema', gutter: '5px', width: 220, resize: false, gutter: '3px', collapse: false, scroll: true, body: 'right1'},
                	{ position: 'center', header: 'Mappings', body: 'center1', scroll: true, gutter: '5px' }
         	   ]
	        });

    	    layout.render();
			//    mappingEditorInit("<%= request.getAttribute("uploadId") %>", "<%= request.getAttribute("fileLoc") %>");
			//init("<%= request.getAttribute("uploadId") %>", "<%= request.getAttribute("mapid") %>", "<%= request.getAttribute("fileLoc") %>");
			//

                        init("<%= (String)request.getParameter("input") %>", "<%= (String)request.getParameter("inputType") %>", "<%= (String)request.getParameter("mapping") %>", "<%= (String)request.getParameter("output") %>", "<%= (String)request.getParameter("outputType") %>");
		}
		
		YAHOO.util.Event.addListener(window, "load", onLoad);
	</script>
</div>
</span>