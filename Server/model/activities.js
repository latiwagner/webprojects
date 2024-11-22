/** @type {{ items: Activity[] }} */
const data = require("../data/activities.json")

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/activities").Activity} Activity
 */

/**
 * Get all activities
 * @returns {Promise<DataListEnvelope<Activity>>}
 */
async function getAll() {
    return {
        isSuccess: true,
        data: data.items,
        total: data.items.length,
    }
}

/**
 * Get an activity by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Activity>>}
 */
async function get(id) {
    const item = data.items.find((activity) => activity.id == id)
    return {
        isSuccess: !!item,
        data: item,
    }
}

/**
 * Add a new activity
 * @param {Activity} activity
 * @returns {Promise<DataEnvelope<Activity>>}
 */
async function add(activity) {
    activity.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(activity)
    return {
        isSuccess: true,
        data: activity,
    }
}

/**
 * Update an activity
 * @param {number} id
 * @param {Activity} activity
 * @returns {Promise<DataEnvelope<Activity>>}
 */
async function update(id, activity) {
    const activityToUpdate = get(id)
    Object.assign(activityToUpdate, activity)
    return {
        isSuccess: true,
        data: activityToUpdate,
    }
}

/**
 * Remove an activity
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const itemIndex = data.items.findIndex((activity) => activity.id == id)
    if (itemIndex === -1)
        throw { isSuccess: false, message: "Item not found", data: id }
    data.items.splice(itemIndex, 1)
    return { isSuccess: true, message: "Item deleted", data: id }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}