/** @type {{ items: Activity[] }} */
const data = require("../data/activities.json")
const { getConnection } = require("./supabase")
const conn = getConnection()

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
    const { data, error, count } = await conn
      .from("activities")
      .select("*", { count: "estimated" })
    return {
      isSuccess: !error,
      message: error?.message,
      data: data,
      total: count,
    }
}

/**
 * Get an activity by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Activity>>}
 */
async function get(id) {
  const { data, error } = await conn
    .from("activities")
    .select("*")
    .eq("id", id)
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  }
}

/**
 * Add a new activity
 * @param {Activity} activity
 * @returns {Promise<DataEnvelope<Activity>>}
 */
async function add(activity) {
  const { data, error } = await conn
    .from("activities")
    .insert([
      {
        poster_name: activity.posterName,
        poster_icon: activity.posterIcon,
        title: activity.title,
        distance: activity.distance,
        duration: activity.duration
      },
    ])
    .select("*")
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  }
}

async function seed() {
  for (const activity of data.items) {
      await add(activity)
  }
}

/**
 * Update an activity
 * @param {number} id
 * @param {Activity} activity
 * @returns {Promise<DataEnvelope<Activity>>}
 */
async function update(id, activity) {
  const { data, error } = await conn
  .from("activities")
  .update({
    poster_name: activity.posterName,
    poster_icon: activity.posterIcon,
    title: activity.title,
    distance: activity.distance,
    duration: activity.duration
  })
  .eq("id", id)
  .select("*")
  .single()
    return {
      isSuccess: !error,
      message: error?.message,
      data: data,
    }
}

/**
 * Remove an activity
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
  const { data, error } = await conn
    .from("activities")
    .delete()
    .eq("id", id)
    .select("*")
    .single()
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
  }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
    seed
}