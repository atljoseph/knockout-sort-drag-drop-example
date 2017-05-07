
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// Knockout.js - Components Registration
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

// todo: seperate logic for static source list from dynamic sortable list
// this applies (in the least) to css & view models / classes
// SourceTask.clone() ==> map to new SortableTask() and push/splice into array
//////////////////////////////////////////////
// current task area view model
//////////////////////////////////////////////
ko.components.register('my-current-tasks', {
    viewModel: function (params) {
        var my = this;

        my.tasks = params.tasks;


        return my;
    },
    template: `

                <div class="panel panel-primary">
                    <div class="panel-heading">Current Tasks</div>
                    <div class="panel-body">
                        <div class="">
                             <div class="" data-bind="sortable: tasks">
                                <div class="dummy-element-for-jquery-ui-sortable">
                                    <my-current-task params="task: $data"></my-current-task>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

    `
});

//////////////////////////////////////////////
// current task item view model
//////////////////////////////////////////////
ko.components.register('my-current-task', {
    viewModel: function (params) {
        var my = this;

        my.task = params.task;
        // console.log(my.task);

        return my;
    },
    template: `
                <!-- ko if: true -->
    
                <div class="sortable-task-item">
                    <span data-bind="text: task.name"></span>   
                    <!-- ko template: {name: 'manage-task-buttons-template'} -->These templates appear at the root<!-- /ko -->                     
                </div>

                <!-- /ko -->
                
    `
});

//////////////////////////////////////////////
// new task area view model
//////////////////////////////////////////////
ko.components.register('my-new-tasks', {
    viewModel: function (params) {
        var my = this;

        my.newTasks = params.tasks;

        return my;
    },
    template: `
                <div class="panel panel-primary">
                    <div class="panel-heading">New Tasks</div>
                    <div class="panel-body">
                        <div class="">
                                <!-- ko foreach: newTasks --> 
                                    <!--
                                    <div class="sortable-task-item" data-bind="draggable: { data: $data, isEnabled: true }, click: function() { $root.addToCurrentTasks($data)}">
                                    <div class="sortable-task-item" data-bind="click: function() { $root.addToCurrentTasks($data)}">
                                    -->
                                    <div class="sortable-task-item" data-bind="draggable: { data: $data, isEnabled: true }, click: function() { $root.addToCurrentTasks($data)}">
                                        <span data-bind="text: name"></span>
                                    </div>
                                <!-- /ko -->
                        </div>
                    </div>
                </div>

    `
});