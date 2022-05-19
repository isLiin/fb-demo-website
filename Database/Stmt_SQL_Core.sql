create database Project_04122021

use Project_04122021

create table account (
	id_account		int identity(1,1) PRIMARY KEY,
	name_account	varchar(255) unique not null,
	pass_account	varchar(255) not null,
);

create table infor(
	id_infor		int identity(1,1) PRIMARY KEY,
	name_account	varchar(255) unique not null,
	name_user		varchar(255),
	gender_user		bit,
	birth_user		date,
	email_user		varchar(255)
);

ALTER TABLE infor ADD FOREIGN KEY (name_account) REFERENCES account(name_account);

/* =================================== */
select * from account;
select * from infor;


insert into account(name_account, pass_account) values
	('admin','123')
insert into infor(name_account, name_user,gender_user, birth_user, email_user) values
	('admin','Ho Ngoc Khanh', 1, '2001/06/14', 'hongockhanh.it@gmail.com')
