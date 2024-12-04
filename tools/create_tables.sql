CREATE TABLE "activities" (
    id SERIAL PRIMARY KEY,       -- Auto-incrementing ID for each activity
    poster_name VARCHAR(255),    -- Name of the poster (string)
    poster_icon VARCHAR(255),    -- URL or path to poster icon (string)
    title VARCHAR(255),          -- Title of the activity (string)
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,              -- Date of the activity (timestamp)
    distance NUMERIC,            -- Distance of the activity (numeric)
    duration NUMERIC             -- Duration of the activity in minutes (numeric)
);

CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,           -- Auto-incrementing ID for each user
    email VARCHAR(255) UNIQUE NOT NULL,  -- Email address (unique and not null)
    username VARCHAR(255) UNIQUE NOT NULL, -- Username (unique and not null)
    password VARCHAR(255) NOT NULL,    -- Password (hashed value, not null)
    image VARCHAR(255),                -- Image URL or path for the user's profile picture (optional)
    total_distance NUMERIC DEFAULT 0,  -- Total distance traveled (default to 0)
    total_duration NUMERIC DEFAULT 0,  -- Total duration of activities (default to 0)
    admin BOOLEAN DEFAULT FALSE       -- Boolean to define if the user is an admin (default to FALSE)
);