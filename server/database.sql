CREATE DATABASE hostel;

CREATE TABLE hostel_details(
    hostel_id VARCHAR(10) PRIMARY KEY,
    hostel_name VARCHAR(30),
    hostel_address VARCHAR(50),
    hostel_image VARCHAR(100)
);

CREATE TABLE notice (
    notice_id SERIAL PRIMARY KEY,
    notice_headline VARCHAR(100),
    hostel_id VARCHAR(10),
    notice_file VARCHAR(200) NOT NULL,
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
);

CREATE TABLE complain_applications (
    application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enrollment_no VARCHAR(10),
    app_reason VARCHAR(200) NOT NULL,
    application_status BOOLEAN DEFAULT false,
    PRIMARY KEY(application_date,enrollment_no),
    CONSTRAINT fk_enrollment FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
);

CREATE TABLE leave_application(
    application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enrollment_no VARCHAR(10),
    address_ VARCHAR(80) NOT NULL,
    reason VARCHAR(100) NOT NULL,
    leave_date DATE NOT NULL,
    arrival_date DATE NOT NULL,
    application_status BOOLEAN DEFAULT false,
    PRIMARY KEY(application_date, enrollment_no),
    CONSTRAINT fk_enrollment FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
);

-- CREATE TABLE student_attendance(
--     enrollment_no PRIMARY KEY,
--     hostel_id VARCHAR(10),
--     attend_days INT NOT NULL,
--     CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
-- );

CREATE TABLE attendance(
    attend_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enrollment_no VARCHAR(10),
    PRIMARY KEY(attend_date, enrollment_no),
    CONSTRAINT fk_Sid FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
);

CREATE TABLE faculty(
    faculty_id VARCHAR(10) PRIMARY KEY,
    hostel_id VARCHAR(10) NOT NULL,
    designation VARCHAR(30) NOT NULL,
    fac_photo VARCHAR(30),
    fac_email VARCHAR(30) NOT NULL,
    fac_name VARCHAR(30) NOT NULL,
    fac_contactNo BIGINT NOT NULL,
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
);

CREATE TABLE proctor_team(
    enrollment_no VARCHAR(10),
    hostel_id VARCHAR(10) NOT NULL,
    designation VARCHAR(30) NOT NULL,
    fac_photo VARCHAR(200) UNIQUE NOT NULL,
    fac_email VARCHAR(30) UNIQUE,
    fac_name VARCHAR(30) NOT NULL,
    fac_contactNo BIGINT NOT NULL UNIQUE,
    PRIMARY KEY(enrollment_no,hostel_id),
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id),
    CONSTRAINT fk_Sid FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no),
    CONSTRAINT fk_photo FOREIGN KEY(fac_photo) REFERENCES hostel_resident(resident_image),
    CONSTRAINT fk_email FOREIGN KEY(fac_email) REFERENCES hostel_resident(email),
    CONSTRAINT fk_contactno FOREIGN KEY(fac_contactNo) REFERENCES hostel_resident(contact)
);

CREATE TABLE hostel_resident(
    enrollment_no VARCHAR(10) PRIMARY KEY,
    course VARCHAR(30),
    faculty_no VARCHAR(10) UNIQUE,
    hostel_id VARCHAR(10) NOT NULL,
    resident_name VARCHAR(30) NOT NULL,
    resident_address VARCHAR(80) NOT NULL,
    resident_image VARCHAR(200) NOT NULL UNIQUE,
    resident_room INT NOT NULL,
    contact BIGINT UNIQUE NOT NULL,
    email VARCHAR(30) UNIQUE,
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
);

CREATE DATABASE users;

CREATE TABLE user_data (
    enrollment_no VARCHAR(10) PRIMARY KEY,
    password VARCHAR(100) 
);

INSERT INTO hostel_details VALUES('BAN101','Begum Azeezun Nisha','Aligarh 202001','https://api.amu.ac.in/storage//images/10268/slider/1608205913_b2.jpg');
INSERT INTO notice(notice_headline,hostel_id,notice_file) VALUES('Holiday Regarding Deshahra 2021','BAN101','https://api.amu.ac.in/storage//file/10106/notice-and-circular/1634021083.pdf');
INSERT INTO notice(notice_headline,hostel_id,notice_file) VALUES('Holiday Regarding Deepavali 2021','BAN101','https://api.amu.ac.in/storage//file/10106/notice-and-circular/1635487773.pdf');
INSERT INTO hostel_resident VALUES('GH4567','physics','20PHB409','BAN101','sanam','Luckhnow','https://www.teahub.io/photos/full/301-3011066_11-111594-indian-beautiful-girl-images-wallpaper-pictures.jpg','23','7634512879','sanam.malik@gmai.com');
INSERT INTO leave_application(address_,reason,leave_date,arrival_date) VALUES('Rifa Palace','Deepavali','2021-11-01','2021-11-15');
INSERT INTO complain_applications(app_reason) VALUES(' My room is out of the range of wifi connection. So hereby I am requesting the staff committe of the hostel to take a look into this issue.');
INSERT INTO faculty VALUES('SR3421','BAN101','provost','','test@test.com','dhanush','4588568821');
INSERT INTO proctor_team VALUES('GH4567','BAN101','headgirl','https://www.teahub.io/photos/full/301-3011066_11-111594-indian-beautiful-girl-images-wallpaper-pictures.jpg','sanam.malik@gmai.com','sanam','7634512879');
INSERT INTO attendance(enrollment_no) VALUES('GH4567');

-- <!DOCTYPE html>
-- <html>
-- <body>

-- <?php>

-- <form action='' method='POST'>
--   Name:<input type="text" name="name" value="<?php echo $name;?>"><br>
-- Enrollment No.:<input type="text" name="en_no" value="<?php echo $en_no;?>"><br>
-- Room No.: <input type="integer" name="room_no" value="<?php echo $room_no;?>"><br>
-- Hostel Name:<input type="text" name="hostel_name" value="<?php echo $hostel_name;?>"><br>
-- Ward Name:<input type="text" name="ward_name" value="<?php echo $ward_name;?>"><br>
-- Leave Date: <input type="text" name="leave_date" value="<?php echo $leave_date;?>"><br>
-- Time Duration: <input type="text" name="time_dura" value="<?php echo $time_dura;?>"><br>
-- Address: <textarea name="comment" rows="5" cols="40"><?php echo $add;?></textarea><br>
-- Reason: <textarea name="comment" rows="9" cols="60"><?php echo $reason;?></textarea><br>
-- <br>
-- <button type="submit" class="btn btn-primary">Submit</button>
-- </form>

-- </body>
-- </html>