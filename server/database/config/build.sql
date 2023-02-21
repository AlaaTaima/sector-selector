

BEGIN;

DROP TABLE IF EXISTS sectors,user_sectors
CASCADE;

CREATE TABLE sectors (
    id SERIAL PRIMARY KEY,
    list text ARRAY
);
CREATE TABLE user_sectors (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    saved_list text ARRAY,
    term_condition BOOLEAN DEFAULT false
);

COMMIT;