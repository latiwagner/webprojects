/** @type {{ items: User[] }} */
const data = require("../data/users.json")
const { getConnection } = require("./supabase")
const conn = getConnection()


/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/users").User} User
 */

/**
 * Get all users
* @returns {Promise<DataListEnvelope<User>>}
 */
async function getAll() {
  const { data, error, count } = await conn
    .from("users")
    .select("*", { count: "estimated" })
  return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    total: count,
}
}


/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<User>>}
 */
async function get(id) {
  const { data, error } = await conn
    .from("users")
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
 * Add a new user
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function add(user) {
  const { data, error } = await conn
  .from("users")
  .insert([
    {
      email: user.email,
      username: user.username,
      password: user.password,
      image: user.image,
      total_distance: user.totalDistance,
      total_duration: user.totalDuration,
      admin: user.admin
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
    for (const user of data.items) {
        await add(user)
    }
  }

/**
 * Update a user
 * @param {number} id
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function update(id, user) {
  const { data, error } = await conn
  .from("users")
  .update({
    email: user.email,
    username: user.username,
    password: user.password,
    image: user.image,
    total_distance: user.totalDistance,
    total_duration: user.totalDuration,
    admin: user.admin
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
 * Remove a user
 * @param {number} id
 * * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
  const { data, error } = await conn
    .from("users")
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