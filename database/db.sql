 CREATE TABLE IF NOT EXISTS contact (
        contact_id serial PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        message VARCHAR(50)
      );