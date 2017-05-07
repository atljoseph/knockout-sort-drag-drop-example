
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// Knockout.js - Sortable + Draggable Lists
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

//////////////////////////////////////////////
// generate a unique id
//////////////////////////////////////////////
var generateGUID = function () { 
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

//////////////////////////////////////////////
// task view model
//////////////////////////////////////////////
var Task = function (name, guid) {
    
    // defaults
    name = name || 'New Task (Unknown)'
    guid = guid || null;

    // initialized properties
    this.name = ko.observable(name);
    this.guid = guid;

    // when the knockout sortable plugin "drops" a new item 
    // onto the observable TaskList array, 
    // define how the item should be added
    // Addition of GUID here is VERY IMPORTANT!!!
    // prevents unwanted deletion of identical list items
    this.clone = function () {
        return new Task(this.name(), generateGUID());
    };
};

//////////////////////////////////////////////
// main page view model
//////////////////////////////////////////////
var viewModel = function () {
    var that = this;

    that.currentTasks = ko.observableArray();
    // hook into the clone function above for consistency
    that.addToCurrentTasks = function (newTask) {

        if (!$.isArray(newTask)) {
            newTask = [newTask];
        }
        ko.utils.arrayForEach(newTask, function (task) {
            that.currentTasks.push(task.clone());
        });
    }
    // delete by unique id prevents unwanted multiple delete for identical elements
    that.deleteTaskByGUID = function (guid) {
        that.currentTasks.remove(function (task) {
            return task.guid == guid;
        });
    };

    // initialize the default tasks in the list
    var tasks = [
        new Task("Get dog food"),
        new Task("Mow lawn"),
        new Task("Fix car"),
        new Task("Fix fence"),
        new Task("Walk dog"),
        new Task("Read book")
    ];
    that.addToCurrentTasks(tasks);

    // initalize the sources for dragging into the task list
    that.newTasks1 = [new Task("New Task 1"), new Task("New Task 2")];
    that.newTasks2 = [new Task("New Task 3"), new Task("New Task 4")];

    return that;
}

//////////////////////////////////////////////
// apply bindings
//////////////////////////////////////////////
ko.applyBindings(viewModel);