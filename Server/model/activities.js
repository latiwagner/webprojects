/** @type {{ items: Activity[] }} */
const data = require("../data/activities.json")

/**
 * @typedef {import("../../Client/src/models/activities").Activity} Activity
 */

/**
 * Get all activities
 * @returns {Activity[]}
 */
function getAll() {
    return data.items
}

/**
 * Get an activity by id
 * @param {number} id
 * @returns {Activity}
 */
function get(id) {
    return data.items.find((activity) => activity.id == id)
}

/**
 * Add a new activity
 * @param {Activity} activity
 * @returns {Activity}
 */
function add(activity) {
    activity.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(activity)
    return activity
}

/**
 * Update an activity
 * @param {number} id
 * @param {Activity} activity
 * @returns {Activity}
 */
function update(id, activity) {
    const activityToUpdate = get(id)
    Object.assign(activityToUpdate, activity)
    return activityToUpdate
}

/**
 * Remove an activity
 * @param {number} id
 * @returns {{ success: boolean, message: string, id: number }}
 */
function remove(id) {
    const itemIndex = data.items.findIndex((user) => user.id == id)
    data.items.splice(itemIndex, 1)
    return { success: true, message: "Item deleted", id: id }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}