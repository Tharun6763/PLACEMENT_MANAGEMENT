create table user(
    id int primary key auto_increment,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE(email)
);

insert into user(name,contactNumber,email,password,status,role)values('Admin','762483199','mtharun@gmail.com','123123','true','admin');

create table depertment(
    id int not null auto_increment,
    dep_name varchar(250),
    primary key(id)
)

router.get("/companiesByType", (req, res) => {
  const query =
    "SELECT type, COUNT(comp_name) as company_count FROM
     (SELECT type, comp_name FROM companies) AS subquery GROUP BY type ORDER BY type ASC";

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(results);
  });
});


SELECT type, COUNT(comp_name) as company_count
FROM (
    SELECT type, comp_name
    FROM companies
) AS subquery
GROUP BY type
ORDER BY type ASC;

create table companies(
    comp_id int not null auto_increment,
    comp_name varchar(250),
    company_salary varchar(50),
    comp_email varchar(250),
    status varchar(50),
    primary key(comp_id)
)

insert into companies ( comp_id,comp_name,company_salary,comp_email,comp_type,location,link)values()

table for the faculty advisors
create table faculty(
    id int primary key auto_increment,
    name varchar(250),
    dept_name varchar(250),
    contactNumber varchar(20),
    email varchar(50), 
    status varchar(20),
    UNIQUE(email)
);

insert into faculty(name,dept_name,contactNumber,email,status)values('db_mam','cse','762483199','mtharun12@gmail.com','true');



create table student (
    id int primary key auto_increment,
    student_name varchar(250),
    contactNumber varchar(20),
    student_department varchar(250),
    faculty_advisor varchar(250),
    CGPA varchar(250),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE(email)
);


INSERT INTO department (dep_name, dept_code)
VALUES
  ('COMPUTER SCIENCE', 'CSE'),
  ('ELECTRONICS AND COMMUNICATION', 'EC'),
  ('MECH', 'MECH'),
  ('MECHATRONICS', 'MECHA'),
  ('EEE', 'EEE');

UPDATE department
SET dep_name = 'MECHANICAL'
WHERE dept_code = 'MECH';

UPDATE department
SET dep_name = 'Electrical and Electronics Engineering'
WHERE dept_code = 'EEE';


INSERT INTO faculty (name, dept_name, contactNumber, email, status) VALUES
('John Smith', 'CSE', '1234567890', 'john.smith@example.com', 'Active'),
('Emily Johnson', 'EC', '2345678901', 'emily.johnson@example.com', 'Inactive'),
('Michael Davis', 'MECH', '3456789012', 'michael.davis@example.com', 'Active'),
('Sophia Miller', 'MECHA', '4567890123', 'sophia.miller@example.com', 'Inactive'),
('Daniel Wilson', 'EEE', '5678901234', 'daniel.wilson@example.com', 'Active'),
('Olivia Anderson', 'CSE', '6789012345', 'olivia.anderson@example.com', 'Active'),
('Liam Martinez', 'EC', '7890123456', 'liam.martinez@example.com', 'Inactive'),
('Ava Taylor', 'MECH', '8901234567', 'ava.taylor@example.com', 'Active'),
('Noah Brown', 'MECHA', '9012345678', 'noah.brown@example.com', 'Inactive'),
('Emma Clark', 'EEE', '0123456789', 'emma.clark@example.com', 'Active');

INSERT INTO companies (comp_name, company_salary, comp_email, status, type, link, required_cgpa, department)
VALUES
    ('ABC Limited', 80000, 'abc@example.com', 'Active', 'Limited liability', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 8.0, 'CSE'),
    ('XYZ Bank', 60000, 'xyz@example.com', 'Active', 'BANKING FINANCE', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 7.0, 'CSE'),
    ('Tech Solutions', 90000, 'tech@example.com', 'Active', 'IT INDUSTRT', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 9.0, 'CSE'),
    ('ABC Manufacturing', 70000, 'abc_manufacturing@example.com', 'Active', 'MANUFACTURING', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 7.2, 'CSE'),
    ('Telecom Innovations', 80000, 'telecom@example.com', 'Active', 'TELECOMMUNICATION', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 8.0, 'CSE'),
    ('E-Shop Express', 80000, 'eshop@example.com', 'Active', 'E-COMMERCE', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 8.4, 'CSE'),
    ('DEF Limited', 60000, 'def@example.com', 'Active', 'Limited liability', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 7.1, 'CSE'),
    ('Finance Pro', 80000, 'financepro@example.com', 'Active', 'BANKING FINANCE', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 8.6, 'CSE'),
    ('Tech Innovators', 80000, 'techinnovators@example.com', 'Active', 'IT INDUSTRT', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 9.0, 'CSE'),
    ('GHI Manufacturing', 70000, 'ghi_manufacturing@example.com', 'Active', 'MANUFACTURING', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 7.3, 'CSE'),
    ('Telecom Solutions', 80000, 'telecomsolutions@example.com', 'Active', 'TELECOMMUNICATION', 'https://docs.google.com/forms/d/e/1FAIpQLScBC6IjCg3RPeMuSs3HyF_sygq6AftdEJpSoP8mUkBtwYdG3Q/viewform?vc=0&c=0&w=1&flr=0', 8.0, 'CSE');

//procedure
DELIMITER //

CREATE PROCEDURE GetStudentsByFacultyId(IN facultyId INT)
BEGIN
    SELECT s.student_name, s.contactNumber,s.CGPA,s.email,s.student_department, f.name AS faculty_name
    FROM student s
    JOIN faculty f ON s.faculty_id = f.id
    WHERE f.id = facultyId;
END //

DELIMITER ;


DELIMITER //
CREATE TRIGGER SetDefaultValuesBeforeInsert
BEFORE INSERT ON companies
FOR EACH ROW
BEGIN
    IF NEW.status IS NULL THEN
        SET NEW.status = 'Active';
    END IF;
    
    IF NEW.required_cgpa IS NULL THEN
        SET NEW.required_cgpa = 8;
    END IF;
    -- Add more conditions for other columns if needed
END;
//
DELIMITER ;
