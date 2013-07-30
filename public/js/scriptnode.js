ScriptNode ={
	Datas:[
	{
		"title":"Commands",
		Commands:[
			{
				"categoryId": "1",
				"categoryTitle": "FlowCommands", 
				CommandsAttr: [
						{
							"commandId": "1",
							"commandTitle": "Loop",
							"isContainer":"true",
							"Parameters":[
								{
									"name":"number",
									"label":"Number of Cycles :",
									 type:Strings
								}
							]
						}
    			]
			},
			{
			"categoryId": "2",
			"categoryTitle": "DataCommands",
			CommandsAttr: [
					{
						"commandId": "1",
						"commandTitle": "Set Variable",
						"isContainer":"false",
						"Parameters":[
								{
									"name":"variable",
									"label":"Variable Name :",
									 type:Variable
								},
								{
									"name":"value",
									"label":"New Value :",
									 type:Strings
								}
						]
					},
					{
						"commandId": "2",
						"commandTitle": "Clear List",
						"isContainer":"false",
						"Parameters":[
								{
								   "name":"list",
									"label":"List :",
 	             					type:List
								}
								
						]
					},
					{
						"commandId": "3",
						"commandTitle": "Clear Table",
						"isContainer":"false",
						"Parameters":[
								{
									"name":"table",
									"label":"Table :",
									type:Table
								}
						]
					}
					
				]
			},
			{
				"categoryId": "3",
				"categoryTitle": "ElementCommands",
				CommandsAttr: [
						{
							"commandId": "1",
							"commandTitle": "Set Property",
							"isContainer":"false",
							"Parameters":[
								{
									"name":"elementid",
									"label":"ElementId :",
									type:Strings
								},
								{
									"name":"property",
									"label":"Property :",
									type:Strings
								},
								{
									"name":"value",
									"label":"New Value :",
									 type:Strings
								}
							]
						}
				] 
			}
	],
	},
	{
	"title":"Functions",
	Commands:[
			{
				"categoryId": "1",
				"categoryTitle": "TextFunction",
				CommandsAttr: [
						{
							"functionId": "1",
							"commandTitle": "Random Text",
							"isContainer":"false",
							"Parameters":[
								{
									"name":"text",
									"label":"New Text :",
									 type:Strings
								}
							]
						},
						{
							"functionId": "2",
							"commandTitle": "Random Number",
							"isContainer":"false",
							"Parameters":[
								{
									"name":"minimum",
									"label":"Minimum Value :",
									 type:Strings
								},
								{
									"name":"maximum",
									"label":"Maximum Value :",
									type:Strings
								}
							]
						}
    			]
			},
			{
				"categoryId": "2",
				"categoryTitle": "ElementFunction",
				CommandsAttr: [
						{
							"functionId": "1",
							"commandTitle": "Get Property",
							"isContainer":"false",
							"Parameters":[
								{
									"name":"elementid",
									"label":"ElementId :",
									type:Strings
								},
								{
									"name":"property",
									"label":"Property :",
									type:Strings
								},
								{
									"name":"value",
									"label":"New Value :",
									 type:Strings
								}
							]
						}
				]
			}
	]
	}
]
};