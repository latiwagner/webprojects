require("dotenv").config()
const { createClient } = require("@supabase/supabase-js")


/**
 * @typedef {import('../../Client/src/models/supabase').Database } ActivityUserDatabase
 * @typedef {import('@supabase/supabase-js').SupabaseClient<ActivityUserDatabase>} ActivityUserClient
 */
module.exports = {
    /**
     * @returns {ActivityUserClient}
     */
    getConnection() {
        return createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_SECRET_KEY
        )
    },
}