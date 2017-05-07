# knockout-sort-drag-drop-example
Example implementation of rniemeyer's knockout-sortable library

# CURRENT FEATURES:
- Can drag/drop from list on left or right into the center list.  
- Center list is sortable
- Important: .clone() function for Task() - is used by all methods adding any item to the central list
- .clone() of Task() also assigns a new GUID every time a clone is made, which guarantees that any identical items will not be inadvertently deleted when clicking the red X
- can also click on a source item to add it to the end of the list
- click the plus to duplicate to the end of the list

# TO RUN LOCALLY:
Do one of the following:
- In VS Code, run "npm start".
- In IIS, extract these files to a folder

# TODO:
- add view change when editing and appropriate observable properties and functions
