import apiManager from './apiManager.js'
import convert from './convert.js'
import dataManager from './dataManager.js'
import DOMManager from './DOMManager.js'
import eventListeners from './eventListeners.js'
import validate from './validate.js'

// TODO 
const tasks = {
    runIt(){
        DOMManager.createDivs();
        convert.runIt();
    }
}

// As a user who needs to track tasks, I should be able to enter in a task name, and an expected completion date, and be able to mark them as complete

// Acceptance Criteria
// Given a user wants to enter a task
// When the user clicks an affordance for entering a new task (i.e. button or hyperlink)
// Then a form should be presented to the user with a field to enter in the task name
// And a field to enter in the expected completion date

// Given a user wants to mark a task complete
// When the user is viewing their task list
// Then there should be a checkbox next to each task that, when clicked, should mark the task as complete in the database
// And prevent the task from being displayed in the list

// Given a user wants to edit a task name
// When the user clicks on the name of a task
// Then the user should be able to edit the name of the task
// And when the enter key is pressed, the new task name should be saved to the database
// And the task list should be updated to display the new task name

// Given a user is on the task list and wants to remove a task
// When when the user performs a gesture on the delete affordance
// Then the task should be removed from the database
// And the task should be removed from the task list



export default tasks;