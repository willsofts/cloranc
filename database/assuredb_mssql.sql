/*
 Navicat Premium Data Transfer

 Source Server         : iia2019
 Source Server Type    : SQL Server
 Source Server Version : 15002095 (15.00.2095)
 Source Host           : 10.22.20.7:1433
 Source Catalog        : assuredb
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 15002095 (15.00.2095)
 File Encoding         : 65001

 Date: 03/04/2025 18:25:30
*/


-- ----------------------------
-- Table structure for api_config
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[api_config]') AND type IN ('U'))
	DROP TABLE [dbo].[api_config]
GO

CREATE TABLE [dbo].[api_config] (
  [apiname] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [apiquery] text COLLATE Thai_CI_AS  NOT NULL,
  [apiparams] text COLLATE Thai_CI_AS  NULL,
  [apisection] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [createdate] date DEFAULT NULL NULL,
  [createtime] time(7) DEFAULT NULL NULL,
  [createuser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[api_config] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of api_config
-- ----------------------------
INSERT INTO [dbo].[api_config] ([apiname], [apiquery], [apiparams], [apisection], [inactive], [createdate], [createtime], [createuser], [editdate], [edittime], [edituser]) VALUES (N'api_languages', N'select * from kt_languages', NULL, NULL, N'0', N'2024-11-20', N'09:08:41.0000000', NULL, N'2024-11-20', N'09:08:41.0000000', NULL)
GO

INSERT INTO [dbo].[api_config] ([apiname], [apiquery], [apiparams], [apisection], [inactive], [createdate], [createtime], [createuser], [editdate], [edittime], [edituser]) VALUES (N'api_prod', N'select * from tprod', NULL, N'MYSQL', N'0', N'2023-03-24', N'18:04:23.0000000', NULL, N'2023-03-24', N'18:07:07.0000000', NULL)
GO

INSERT INTO [dbo].[api_config] ([apiname], [apiquery], [apiparams], [apisection], [inactive], [createdate], [createtime], [createuser], [editdate], [edittime], [edituser]) VALUES (N'api_prog', N'select * from tprog', NULL, NULL, N'0', N'2024-11-04', N'10:18:48.0000000', NULL, N'2024-11-04', N'10:18:49.0000000', NULL)
GO

INSERT INTO [dbo].[api_config] ([apiname], [apiquery], [apiparams], [apisection], [inactive], [createdate], [createtime], [createuser], [editdate], [edittime], [edituser]) VALUES (N'api_role', N'select * from trole where site=?site order by roleid', NULL, NULL, N'0', N'2023-03-24', N'18:00:20.0000000', NULL, N'2024-11-20', N'08:50:02.0000000', NULL)
GO


-- ----------------------------
-- Table structure for tactivate
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tactivate]') AND type IN ('U'))
	DROP TABLE [dbo].[tactivate]
GO

CREATE TABLE [dbo].[tactivate] (
  [activatekey] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [activateuser] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [transtime] bigint DEFAULT NULL NULL,
  [expiretime] bigint DEFAULT NULL NULL,
  [senddate] date DEFAULT NULL NULL,
  [sendtime] time(7) DEFAULT NULL NULL,
  [expiredate] date DEFAULT NULL NULL,
  [activatedate] date DEFAULT NULL NULL,
  [activatetime] time(7) DEFAULT NULL NULL,
  [activatecount] int DEFAULT NULL NULL,
  [activatetimes] int DEFAULT NULL NULL,
  [activatestatus] char(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatecategory] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatelink] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatepage] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activateremark] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activateparameter] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatemessage] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatecontents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tactivate] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tactivate
-- ----------------------------

-- ----------------------------
-- Table structure for tactivatehistory
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tactivatehistory]') AND type IN ('U'))
	DROP TABLE [dbo].[tactivatehistory]
GO

CREATE TABLE [dbo].[tactivatehistory] (
  [activatekey] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [activateuser] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [transtime] bigint DEFAULT NULL NULL,
  [expiretime] bigint DEFAULT NULL NULL,
  [senddate] date DEFAULT NULL NULL,
  [sendtime] time(7) DEFAULT NULL NULL,
  [expiredate] date DEFAULT NULL NULL,
  [activatedate] date DEFAULT NULL NULL,
  [activatetime] time(7) DEFAULT NULL NULL,
  [activatecount] int DEFAULT NULL NULL,
  [activatetimes] int DEFAULT NULL NULL,
  [activatestatus] char(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatecategory] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatelink] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatepage] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activateremark] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activateparameter] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatemessage] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activatecontents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tactivatehistory] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tactivatehistory
-- ----------------------------

-- ----------------------------
-- Table structure for tattachfile
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tattachfile]') AND type IN ('U'))
	DROP TABLE [dbo].[tattachfile]
GO

CREATE TABLE [dbo].[tattachfile] (
  [attachid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [attachno] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [attachtype] varchar(10) COLLATE Thai_CI_AS  NOT NULL,
  [attachfile] varchar(150) COLLATE Thai_CI_AS  NOT NULL,
  [sourcefile] varchar(150) COLLATE Thai_CI_AS  NOT NULL,
  [attachdate] date  NOT NULL,
  [attachtime] time(7)  NOT NULL,
  [attachmillis] bigint  NOT NULL,
  [attachuser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [attachremark] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [mimetype] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [attachgroup] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [attachpath] varchar(350) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [attachurl] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [attachsize] bigint DEFAULT NULL NULL,
  [attachstream] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tattachfile] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tattachfile
-- ----------------------------

-- ----------------------------
-- Table structure for tcaptcha
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tcaptcha]') AND type IN ('U'))
	DROP TABLE [dbo].[tcaptcha]
GO

CREATE TABLE [dbo].[tcaptcha] (
  [capid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [captext] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [capanswer] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [createdate] date  NOT NULL,
  [createtime] time(7)  NOT NULL,
  [createmillis] bigint DEFAULT '0' NOT NULL,
  [expiretimes] bigint DEFAULT '0' NOT NULL,
  [expiredate] date DEFAULT NULL NULL,
  [expiretime] time(7) DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tcaptcha] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tcaptcha
-- ----------------------------

-- ----------------------------
-- Table structure for tcomp
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tcomp]') AND type IN ('U'))
	DROP TABLE [dbo].[tcomp]
GO

CREATE TABLE [dbo].[tcomp] (
  [site] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [headsite] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [shortname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [nameen] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [nameth] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [addressen] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [addressth] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [address2] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [address3] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [district] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [districtname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [amphur] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [amphurname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [province] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [provincename] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [zipcode] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [country] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [telno1] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [telno2] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [faxno1] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [faxno2] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [email1] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [email2] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [telext1] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [telext2] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [website] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [taxid] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [logoimage] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [bgimage] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tcomp] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tcomp
-- ----------------------------
INSERT INTO [dbo].[tcomp] ([site], [headsite], [shortname], [nameen], [nameth], [addressen], [addressth], [address2], [address3], [district], [districtname], [amphur], [amphurname], [province], [provincename], [zipcode], [country], [telno1], [telno2], [faxno1], [faxno2], [email1], [email2], [telext1], [telext2], [website], [taxid], [logoimage], [bgimage], [inactive], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'FWG', N'FWS', N'Freewill Solutions Co.,Ltd.', N'ฟรีวิลโซลูชั่น จำกัด', N'1168/86-88  Lumpini Tower 29th Floor, Rama IV Road', N'เลขที่ 1168/86-88 ชั้น 29 อาคารลุมพินีทาวเวอร์ ถนนพระราม 4', NULL, NULL, N'102803', N'ทุ่งมหาเมฆ', N'1028', N'เขตสาทร', N'002', N'กรุงเทพมหานคร', N'10120', N'THA', N'026798556', NULL, N'', NULL, N'hr@freewillsolutions.com', NULL, NULL, NULL, N'https://www.freewillsolutions.com/', N'', NULL, NULL, N'0', NULL, NULL, N'fwgadmin')
GO


-- ----------------------------
-- Table structure for tcompbranch
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tcompbranch]') AND type IN ('U'))
	DROP TABLE [dbo].[tcompbranch]
GO

CREATE TABLE [dbo].[tcompbranch] (
  [site] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [branch] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [branchtype] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [nameen] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [nameth] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [addressen] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [addressth] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [district] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [districtname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [amphur] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [amphurname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [province] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [provincename] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [zipcode] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [country] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [telno1] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [telno2] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [faxno1] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [faxno2] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [email1] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [email2] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [bgimage] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [latitude] decimal(16,6) DEFAULT NULL NULL,
  [longitude] decimal(16,6) DEFAULT NULL NULL,
  [distances] decimal(16,6) DEFAULT NULL NULL,
  [gpsflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [effectdate] date DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tcompbranch] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tcompbranch
-- ----------------------------
INSERT INTO [dbo].[tcompbranch] ([site], [branch], [branchtype], [nameen], [nameth], [addressen], [addressth], [district], [districtname], [amphur], [amphurname], [province], [provincename], [zipcode], [country], [telno1], [telno2], [faxno1], [faxno2], [email1], [email2], [bgimage], [latitude], [longitude], [distances], [gpsflag], [inactive], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'00', N'HB', N'BKK', N'กรุงเทพ', N'BKK', N'BKK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tcompbranch] ([site], [branch], [branchtype], [nameen], [nameth], [addressen], [addressth], [district], [districtname], [amphur], [amphurname], [province], [provincename], [zipcode], [country], [telno1], [telno2], [faxno1], [faxno2], [email1], [email2], [bgimage], [latitude], [longitude], [distances], [gpsflag], [inactive], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'01', N'SB', N'KKN', N'ขอนแก่น', N'KKN', N'KKN', N'400101', N'ในเมือง', N'4001', N'เมืองขอนแก่น', N'006', N'ขอนแก่น', N'40000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'13.827150', N'100.569426', N'1500.000000', N'0', N'0', N'2018-10-12', N'2018-10-12', N'09:21:58.0000000', N'tso')
GO


-- ----------------------------
-- Table structure for tconfig
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tconfig]') AND type IN ('U'))
	DROP TABLE [dbo].[tconfig]
GO

CREATE TABLE [dbo].[tconfig] (
  [category] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [colname] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [colvalue] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [colflag] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [seqno] int DEFAULT '0' NULL,
  [remarks] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tconfig] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tconfig
-- ----------------------------
INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'2FA', N'FACTORISSUER', N'AssureSystem', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'2FA', N'FACTORVERIFY', N'false', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'CONFIGMAIL', N'MAIL_FROM', N'ezprompt@gmail.com', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'CONFIGMAIL', N'MAIL_PASSWORD', N'nzazlorszucrhrbb', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'CONFIGMAIL', N'MAIL_PORT', N'465', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'CONFIGMAIL', N'MAIL_SERVER', N'smtp.gmail.com', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'CONFIGMAIL', N'MAIL_TITLE', N'System Management', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'CONFIGMAIL', N'MAIL_TO', N'tassan_oro@freewillsolutions.com', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'CONFIGMAIL', N'MAIL_USER', N'ezprompt', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'ENVIRONMENT', N'EXPIRE_TIMES', N'2880000', NULL, N'0', N'values in milliseconds')
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'FORGOTPASSWORDMAIL', N'MAIL_FROM', N'ezprompt', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'FORGOTPASSWORDMAIL', N'MAIL_PASSWORD', N'nzazlorszucrhrbb', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'FORGOTPASSWORDMAIL', N'MAIL_SERVER', N'smtp.gmail.com', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'FORGOTPASSWORDMAIL', N'MAIL_TITLE', N'System Management', NULL, N'0', NULL)
GO

INSERT INTO [dbo].[tconfig] ([category], [colname], [colvalue], [colflag], [seqno], [remarks]) VALUES (N'FORGOTPASSWORDMAIL', N'MAIL_USER', N'ezprompt', NULL, N'0', NULL)
GO


-- ----------------------------
-- Table structure for tconstant
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tconstant]') AND type IN ('U'))
	DROP TABLE [dbo].[tconstant]
GO

CREATE TABLE [dbo].[tconstant] (
  [typename] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [typeid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [nameen] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [nameth] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [seqno] int DEFAULT NULL NULL,
  [iconfile] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tconstant] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tconstant
-- ----------------------------
INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tactive', N'0', N'Active', N'ใช้งาน', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tactive', N'1', N'Inactive', N'ไม่ใช้งาน', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tappstype', N'M', N'Mobile', N'Mobile', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tappstype', N'S', N'SPA', N'SPA', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tappstype', N'W', N'Web', N'Web', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tbranchtype', N'HB', N'Head Branch', N'สำนักงานใหญ่', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tbranchtype', N'SB', N'Sub Branch', N'สำนักงานสาขาย่อย', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tbranchtype', N'VB', N'Service Branch', N'สำนักงานบริการ', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tdomainappstype', N'S', N'Single Page Application', N'Single Page Application', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tdomainappstype', N'W', N'WEB', N'WEB', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tdomaintype', N'B', N'B2C', N'B2C', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tdomaintype', N'D', N'Directory', N'Directory', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tdomaintype', N'S', N'SAML', N'SAML', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'texpire', N'0', N'Expired', N'หมดอายุ', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'texpire', N'1', N'Never Expired', N'ไม่หมดอายุ', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tgroupmobile', N'DASHBOARD', N'Dash Board', N'Dash Board', N'1', N'dashboard.png')
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tgroupmobile', N'HISTORY', N'History', N'History', N'2', N'history.png')
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tgroupmobile', N'REPORT', N'Report', N'Report', N'3', N'report.png')
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tgroupmobile', N'WORKLIST', N'Work List', N'Work List', N'4', N'worklist.png')
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tlanguage', N'EN', N'English', N'อังกฤษ', N'1', N'EN.png')
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tlanguage', N'TH', N'Thai', N'ไทย', N'2', N'TH.png')
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'all', N'Alls', N'ทั้งหมด', N'7', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'delete', N'Delete', N'ลบ', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'export', N'Export', N'นำออก', N'6', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'import', N'Import', N'นำเข้า', N'5', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'insert', N'Insert', N'เพิ่ม', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'print', N'Print', N'พิมพ์', N'8', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'retrieve', N'Retrieve', N'ค้นหา', N'4', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tpermit', N'update', N'Update', N'แก้ไข', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogsystem', N'A', N'Admin', N'Admin', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogsystem', N'F', N'Reference', N'Reference', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'C', N'Script', N'สคริปส์', N'11', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'E', N'Entry', N'กรอกข้อมูล', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'F', N'Reference', N'ข้อมูลหลัก', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'G', N'Generate', N'สร้างหน้าจอ', N'13', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'I', N'Plugin', N'ปลั๊กอิน', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'M', N'Import', N'นำเข้าข้อมูล', N'5', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'N', N'Internal', N'ใช้ภายใน', N'4', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'O', N'Store Procedure', N'โปรซีเดอร์', N'12', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'P', N'Post', N'โพส', N'7', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'Q', N'Enquiry', N'ค้นหาข้อมูล', N'8', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'R', N'Report', N'รายงาน', N'9', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'U', N'Utility', N'เครื่องมือ', N'10', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tprogtype', N'X', N'Export', N'นำออกข้อมูล', N'6', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'trxstatus', N'C', N'Completed', N'Completed', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'trxstatus', N'E', N'Error', N'Error', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'trxstatus', N'N', N'Not Complete', N'Not Complete', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'trxstatus', N'R', N'Response', N'Response', N'4', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tsystemtype', N'A', N'Android', N'Android', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tsystemtype', N'I', N'iOS', N'iOS', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tsystemtype', N'W', N'Web', N'Web', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tuserstatus', N'A', N'Activated', N'ใช้งาน', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tuserstatus', N'C', N'Closed', N'ปิดการใช้งาน', N'2', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tuserstatus', N'P', N'Pending', N'ระงับการใช้งาน', N'3', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'A', N'Admin', N'เจ้าหน้าที่บริหาร', N'30', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'C', N'Super Coach', N'เจ้าหน้าที่ระดับสูง', N'50', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'D', N'Director', N'ผู้อำนวยการ', N'70', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'E', N'Employee', N'พนักงาน', N'10', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'M', N'Manager', N'ผู้จัดการ', N'40', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'O', N'Operator', N'เจ้าหน้าที่ปฏิบัติการ', N'15', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'P', N'President', N'ประธาน', N'90', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'S', N'Supervisor', N'ผู้ควบคุมดูแล', N'20', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'T', N'Assistance Manager', N'ผู้ช่วยผู้จัดการ', N'35', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'V', N'Vice President', N'รองประธาน', N'80', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'X', N'Executive', N'ผู้บริหาร', N'60', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tusertype', N'Z', N'Client', N'ลูกค้า', N'5', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tvisible', N'0', N'Visible', N'มองเห็น', N'1', NULL)
GO

INSERT INTO [dbo].[tconstant] ([typename], [typeid], [nameen], [nameth], [seqno], [iconfile]) VALUES (N'tvisible', N'1', N'Invisible', N'มองไม่เห็น', N'2', NULL)
GO


-- ----------------------------
-- Table structure for tcpwd
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tcpwd]') AND type IN ('U'))
	DROP TABLE [dbo].[tcpwd]
GO

CREATE TABLE [dbo].[tcpwd] (
  [userid] varchar(60) COLLATE Thai_CI_AS  NOT NULL,
  [category] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [contents] varchar(150) COLLATE Thai_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[tcpwd] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tcpwd
-- ----------------------------

-- ----------------------------
-- Table structure for tdirectory
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tdirectory]') AND type IN ('U'))
	DROP TABLE [dbo].[tdirectory]
GO

CREATE TABLE [dbo].[tdirectory] (
  [domainid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [domainname] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [description] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [applicationid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [tenanturl] varchar(200) COLLATE Thai_CI_AS  NOT NULL,
  [basedn] varchar(200) COLLATE Thai_CI_AS  NOT NULL,
  [secretkey] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [systemtype] varchar(1) COLLATE Thai_CI_AS DEFAULT 'W' NOT NULL,
  [appstype] varchar(1) COLLATE Thai_CI_AS DEFAULT 'W' NOT NULL,
  [domaintype] varchar(1) COLLATE Thai_CI_AS DEFAULT 'S' NOT NULL,
  [domainurl] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NOT NULL,
  [invisible] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NOT NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tdirectory] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tdirectory
-- ----------------------------

-- ----------------------------
-- Table structure for tfavor
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tfavor]') AND type IN ('U'))
	DROP TABLE [dbo].[tfavor]
GO

CREATE TABLE [dbo].[tfavor] (
  [userid] varchar(60) COLLATE Thai_CI_AS  NOT NULL,
  [programid] varchar(20) COLLATE Thai_CI_AS  NOT NULL,
  [seqno] int DEFAULT '0' NOT NULL
)
GO

ALTER TABLE [dbo].[tfavor] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tfavor
-- ----------------------------
INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'adminis', N'sfte002', N'1')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'adminis', N'sfte005', N'2')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'adminis', N'sfte007', N'3')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'adminis', N'sfte012', N'4')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'adminis', N'sfte013', N'5')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'centre', N'sfte001', N'1')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'centre', N'sfte002', N'2')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'centre', N'sftq001', N'3')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'tso', N'sfte001', N'1')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'tso', N'sfte002', N'2')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'tso', N'sfte005', N'3')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'tso', N'sfte007', N'4')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'tso', N'sfte012', N'5')
GO

INSERT INTO [dbo].[tfavor] ([userid], [programid], [seqno]) VALUES (N'tso', N'sfte013', N'6')
GO


-- ----------------------------
-- Table structure for tgroup
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tgroup]') AND type IN ('U'))
	DROP TABLE [dbo].[tgroup]
GO

CREATE TABLE [dbo].[tgroup] (
  [groupname] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [supergroup] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NULL,
  [nameen] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [nameth] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [seqno] int DEFAULT '0' NULL,
  [iconstyle] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [privateflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [usertype] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [mobilegroup] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [xmltext] text COLLATE Thai_CI_AS  NULL,
  [menutext] text COLLATE Thai_CI_AS  NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tgroup] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tgroup
-- ----------------------------
INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'ADMIN', N'MD', N'Administrator', N'ผู้ดูแลระบบ', N'1', N'fa fa-globe', N'0', N'A', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'CENTER', N'MD', N'Center Administrator', N'ผู้บริหารระบบส่วนกลาง', N'5', N'fa fa-tasks', N'1', N'A', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'DIRECTOR', NULL, N'Director', N'ผู้อำนวยการ', N'7', NULL, N'0', N'D', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'EMPLOYEE', NULL, N'Employee', N'พนักงาน', N'8', NULL, N'0', N'E', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'EXECUTIVE', NULL, N'Executive', N'ผู้บริหาร', N'9', NULL, N'0', N'X', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'MANAGER', NULL, N'Manager', N'ผู้จัดการ', N'10', NULL, N'0', N'M', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'OPERATOR', N'ADMIN', N'Operator', N'เจ้าหน้าที่ปฏิบัติการ', N'11', N'fa fa-cogs', N'0', N'O', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'SUPERVISOR', NULL, N'Supervisor', N'ผู้ควบคุม', N'12', NULL, N'0', N'S', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tgroup] ([groupname], [supergroup], [nameen], [nameth], [seqno], [iconstyle], [privateflag], [usertype], [mobilegroup], [xmltext], [menutext], [editdate], [edittime], [edituser]) VALUES (N'TESTER', N'ADMIN', N'Tester', N'ผู้ทดสอบ', N'13', N'fa fa-desktop', N'0', N'O', NULL, NULL, NULL, NULL, NULL, NULL)
GO


-- ----------------------------
-- Table structure for tlabel
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tlabel]') AND type IN ('U'))
	DROP TABLE [dbo].[tlabel]
GO

CREATE TABLE [dbo].[tlabel] (
  [labelid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [langcode] varchar(10) COLLATE Thai_CI_AS  NOT NULL,
  [labelname] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [labelvalue] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tlabel] SET (LOCK_ESCALATION = TABLE)
GO

CREATE TABLE [dbo].[tmessage] (
  [msgcode] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [langcode] varchar(10) COLLATE Thai_CI_AS  NOT NULL,
  [msgtext] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

-- ----------------------------
-- Records of tlabel
-- ----------------------------

-- ----------------------------
-- Table structure for tnpwd
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tnpwd]') AND type IN ('U'))
	DROP TABLE [dbo].[tnpwd]
GO

CREATE TABLE [dbo].[tnpwd] (
  [reservenum] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [remarks] varchar(150) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tnpwd] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tnpwd
-- ----------------------------
INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'060', N'TrueMove, TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'061', N'AIS, DTAC, TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'062', N'AIS, DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'068', N'TOT')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0800', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0801', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0802', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0803', N'TrueMove')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0804', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0805', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0810', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0811', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0812', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0813', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0814', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0815', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0816', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0817', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0818', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0819', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'082', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'083', N'TrueMove')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'084', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'085', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'086', N'TrueMove')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0871', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0872', NULL)
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0873', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0874', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0875', N'DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'0876', NULL)
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'088', N'my by CAT')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'089', N'AIS, DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'090', N'AIS, TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'091', N'AIS, DTAC, TrueMoveH, TOT')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'092', N'AIS, DTAC')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'093', N'AIS, TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'094', N'DTAC, TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'095', N'AIS, DTAC, TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'096', N'TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'097', N'AIS, TrueMoveH')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'098', N'AIS')
GO

INSERT INTO [dbo].[tnpwd] ([reservenum], [remarks]) VALUES (N'099', N'AIS, TrueMoveH')
GO


-- ----------------------------
-- Table structure for tpasskey
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tpasskey]') AND type IN ('U'))
	DROP TABLE [dbo].[tpasskey]
GO

CREATE TABLE [dbo].[tpasskey] (
  [keyid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [keypass] varchar(250) COLLATE Thai_CI_AS  NOT NULL,
  [site] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [keyname] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [createdate] date  NOT NULL,
  [createtime] time(7)  NOT NULL,
  [createmillis] bigint DEFAULT '0' NOT NULL,
  [createuser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [expireflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [expireday] int DEFAULT '0' NULL,
  [expiredate] date DEFAULT NULL NULL,
  [expiretime] time(7) DEFAULT NULL NULL,
  [expiretimes] bigint DEFAULT '0' NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tpasskey] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tpasskey
-- ----------------------------

-- ----------------------------
-- Table structure for tpperm
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tpperm]') AND type IN ('U'))
	DROP TABLE [dbo].[tpperm]
GO

CREATE TABLE [dbo].[tpperm] (
  [groupid] varchar(15) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [progid] varchar(20) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [permname] varchar(10) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [permvalue] varchar(10) COLLATE Thai_CI_AS DEFAULT '0' NULL
)
GO

ALTER TABLE [dbo].[tpperm] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tpperm
-- ----------------------------
INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte001', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte001', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte001', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte001', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte001', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte001', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte001', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte002', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte002', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte002', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte002', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte002', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte002', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte002', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte005', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte005', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte005', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte005', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte005', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte005', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte005', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte007', N'all', N'false')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte007', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte007', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte007', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte007', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte007', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sfte007', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'print', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'printl', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'prints', N'false')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'OPERATOR', N'sftq001', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'print', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'printl', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'prints', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte007', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'print', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'printl', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'prints', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte012', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'print', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'printl', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'prints', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sfte013', N'update', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'all', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'delete', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'export', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'import', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'insert', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'print', N'false')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'retrieve', N'true')
GO

INSERT INTO [dbo].[tpperm] ([groupid], [progid], [permname], [permvalue]) VALUES (N'TESTER', N'sftq001', N'update', N'true')
GO


-- ----------------------------
-- Table structure for tppwd
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tppwd]') AND type IN ('U'))
	DROP TABLE [dbo].[tppwd]
GO

CREATE TABLE [dbo].[tppwd] (
  [userid] varchar(60) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [checkreservepwd] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [checkpersonal] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [checkmatchpattern] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [checkmatchnumber] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [timenotusedoldpwd] int DEFAULT '0' NULL,
  [alertbeforeexpire] int DEFAULT '0' NULL,
  [pwdexpireday] int DEFAULT '0' NULL,
  [notloginafterday] int DEFAULT '0' NULL,
  [notchgpwduntilday] int DEFAULT '0' NULL,
  [minpwdlength] int DEFAULT '0' NULL,
  [alphainpwd] int DEFAULT '0' NULL,
  [otherinpwd] int DEFAULT '0' NULL,
  [maxsamechar] int DEFAULT '0' NULL,
  [mindiffchar] int DEFAULT '0' NULL,
  [maxarrangechar] int DEFAULT '0' NULL,
  [loginfailtime] int DEFAULT NULL NULL,
  [fromip] varchar(15) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [toip] varchar(15) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [starttime] time(7) DEFAULT NULL NULL,
  [endtime] time(7) DEFAULT NULL NULL,
  [groupflag] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [maxloginfailtime] int DEFAULT NULL NULL,
  [checkdictpwd] int DEFAULT NULL NULL,
  [maxpwdlength] int DEFAULT NULL NULL,
  [digitinpwd] int DEFAULT NULL NULL,
  [upperinpwd] int DEFAULT NULL NULL,
  [lowerinpwd] int DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tppwd] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tppwd
-- ----------------------------
INSERT INTO [dbo].[tppwd] ([userid], [checkreservepwd], [checkpersonal], [checkmatchpattern], [checkmatchnumber], [timenotusedoldpwd], [alertbeforeexpire], [pwdexpireday], [notloginafterday], [notchgpwduntilday], [minpwdlength], [alphainpwd], [otherinpwd], [maxsamechar], [mindiffchar], [maxarrangechar], [loginfailtime], [fromip], [toip], [starttime], [endtime], [groupflag], [maxloginfailtime], [checkdictpwd], [maxpwdlength], [digitinpwd], [upperinpwd], [lowerinpwd]) VALUES (N'DEFAULT', N'1', N'0', N'0', N'0', N'0', N'0', N'120', N'0', N'7', N'3', N'0', N'1', N'0', N'0', N'0', N'0', NULL, NULL, NULL, NULL, N'1', N'0', N'0', N'0', N'1', N'1', N'1')
GO


-- ----------------------------
-- Table structure for tprod
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tprod]') AND type IN ('U'))
	DROP TABLE [dbo].[tprod]
GO

CREATE TABLE [dbo].[tprod] (
  [product] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [nameen] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [nameth] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [seqno] int DEFAULT '0' NULL,
  [serialid] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [startdate] date DEFAULT NULL NULL,
  [url] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [capital] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [verified] varchar(1) COLLATE Thai_CI_AS DEFAULT '1' NULL,
  [centerflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [iconfile] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tprod] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tprod
-- ----------------------------
INSERT INTO [dbo].[tprod] ([product], [nameen], [nameth], [seqno], [serialid], [startdate], [url], [capital], [verified], [centerflag], [iconfile], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'Prompt Module', N'Prompt Module', N'99', NULL, NULL, NULL, NULL, N'0', N'1', N'prompt.png', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprod] ([product], [nameen], [nameth], [seqno], [serialid], [startdate], [url], [capital], [verified], [centerflag], [iconfile], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'Vue Application', N'Vue Application', N'98', NULL, NULL, NULL, NULL, N'0', N'1', NULL, NULL, NULL, NULL)
GO


-- ----------------------------
-- Table structure for tprog
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tprog]') AND type IN ('U'))
	DROP TABLE [dbo].[tprog]
GO

CREATE TABLE [dbo].[tprog] (
  [product] varchar(30) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [programid] varchar(20) COLLATE Thai_CI_AS  NOT NULL,
  [progname] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [prognameth] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [progtype] varchar(2) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [appstype] varchar(2) COLLATE Thai_CI_AS DEFAULT 'W' NULL,
  [description] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [parameters] varchar(80) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [progsystem] varchar(10) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [iconfile] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [iconstyle] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [shortname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [shortnameth] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [progpath] varchar(150) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [newflag] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [openmethod] varchar(10) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tprog] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tprog
-- ----------------------------
INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte001', N'Program Information', N'ข้อมูลโปรแกรม', N'F', N'W', N'Program Information', N'', N'A', N'sfte001.png', NULL, N'Program', N'โปรแกรม', N'/gui/sfte001', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte002', N'Group Information', N'กลุ่มผู้ใช้งาน', N'F', N'W', N'Group Information', NULL, N'A', N'sfte002.png', NULL, N'Group', N'กลู่มผู้ใช้', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte003', N'Product Information', N'ข้อมูลผลิตภัณท์', N'F', N'W', N'Product Information', NULL, N'A', N'sfte003.png', NULL, N'Product', N'ผลิตภัณท์', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte004', N'Role Information', N'ข้อมูลบทบาท', N'F', N'W', N'Role Information', NULL, N'A', N'sfte004.png', NULL, N'Role', N'บทบาท', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte005', N'User Information', N'ข้อมูลผู้ใช้', N'F', N'W', N'User Information', NULL, N'A', N'sfte005.png', NULL, N'User', N'ผู้ใช้งาน', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte007', N'User Privilege', N'สิทธิผู้ใช้', N'F', N'W', N'User Privilege', NULL, N'A', N'sfte007.png', NULL, N'Privilege', N'สิทธิผู้ใช้', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte008', N'Menu Administration', N'จัดตั้งระบบเมนู', N'F', N'W', N'Menu Administration', NULL, N'A', N'sfte008.png', NULL, N'Menu', N'ตั้งค่าเมนู', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte009', N'Active Directory', N'ข้อมูลโครงสร้าง', N'F', N'W', N'Active Directory', NULL, N'A', N'sfte009.png', NULL, N'Active Directory', N'โครงสร้าง', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte010', N'Password Policy Setting', N'นโยบายจัดตั้งรหัสผ่าน', N'F', N'W', N'Password Policy Setting', NULL, N'A', N'sfte010.png', NULL, N'Password Policy', N'นโยบายรหัสผ่าน', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte011', N'Password Policy', N'Password Policy', N'F', N'W', N'Password Policy', NULL, N'A', N'sfte011.png', NULL, N'Password Policy', N'Password Policy', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte012', N'Configuration Setting', N'ตั้งค่าเบื้องต้น', N'F', N'W', N'Configuration Setting', NULL, N'A', N'sfte012.png', NULL, N'Configure', N'ตั้งค่าเบื้องต้น', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte013', N'Mail Template Setting', N'ตั้งค่าต้นแบบเมล', N'F', N'W', N'Mail Template Setting', NULL, N'A', N'sfte013.png', NULL, N'Mail Template', N'ตั้งค่าเมล', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte014', N'Label Setting', N'ตั้งค่าป้าย', N'F', N'W', N'Label Setting', NULL, N'A', N'sfte014.png', NULL, N'Label', N'ตั้งค่าป้าย', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte016', N'Account Information', N'ข้อมูลผู้ใช้', N'F', N'W', N'Account', NULL, N'A', N'sfte016.png', NULL, N'User', N'ผู้ใช้งาน', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte017', N'Two Factor Authentication', N'Two Factor Authentication', N'F', N'W', N'Two Factor Authentication', NULL, N'A', N'sfte017.png', NULL, N'2Factor', N'2Factor', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte018', N'Tenant Setting', N'Tenant Setting', N'F', N'W', N'Tenant', NULL, N'A', N'sfte018.png', NULL, N'Tenant', N'Tenant', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sfte019', N'Branch Information', N'ข้อมูลสาขา', N'F', N'W', N'Branch Information', NULL, N'A', N'sfte019.png', NULL, N'Branch', N'สาขา', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sftq001', N'Tracking', N'การตรวจสอบ', N'F', N'W', N'Tracking', NULL, N'A', N'sftq001.png', NULL, N'Tracking', N'ตรวจสอบ', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sftq003', N'Mail Tracking', N'Mail Tracking', N'Q', N'W', N'Mail Tracking', NULL, N'A', N'sftq003.png', NULL, N'Mail Tracking', N'Mail Tracking', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sftu003', N'API Configuration', N'กำหนดค่า API', N'F', N'W', N'API Configuration', NULL, N'A', N'sftu003.png', NULL, N'API Config', N'กำหนดค่า API', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'PROMPT', N'sftu004', N'Access Token', N'กำหนด Token', N'F', N'W', N'Access Token', NULL, N'A', N'sftu004.png', NULL, N'Token', N'กำหนด Token', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte001', N'Program Information', N'ข้อมูลโปรแกรม', N'F', N'W', N'Program Information', NULL, N'A', N'sfte001.png', NULL, N'Program', N'โปรแกรม', N'/show/vfte001', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte002', N'Group Information', N'กลุ่มผู้ใช้งาน', N'F', N'W', N'Group Information', NULL, N'A', N'sfte002.png', NULL, N'Group', N'กลุ่มผู้ใช้', N'/show/vfte002', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte003', N'Product Information', N'ข้อมูลผลิตภัณฑ์', N'F', N'W', N'Product Information', NULL, N'A', N'sfte003.png', NULL, N'Product', N'ผลิตภัณฑ์', N'/show/vfte003', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte004', N'Role Information', N'ข้อมูลบทบาท', N'F', N'W', N'Role Information', NULL, N'A', N'sfte004.png', NULL, N'Role', N'บทบาท', N'/show/vfte004', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte005', N'User Information', N'ข้อมูลผู้ใช้', N'F', N'W', N'User Information', NULL, N'A', N'sfte005.png', NULL, N'User', N'ผู้ใช้งาน', N'/show/vfte005', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte007', N'User Privilege', N'สิทธิผู้ใช้', N'F', N'W', N'User Privilege', NULL, N'A', N'sfte007.png', NULL, N'Privilege', N'สิทธิผู้ใช้', N'/show/vfte007', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte008', N'Menu Administration', N'ตั้งระบบเมนู', N'F', N'W', N'Menu Administration', NULL, N'A', N'sfte008.png', NULL, N'Menu', N'เมนู', N'/show/vfte008', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte009', N'Active Directory', N'ข้อมูลโครงสร้าง', N'F', N'W', N'Active Directory', NULL, N'A', N'sfte009.png', NULL, N'Active Directory', N'โครงสร้าง', N'/show/vfte009', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte010', N'Password Policy Setting', N'นโยบายจัดตั้งรหัสผ่าน', N'F', N'W', N'Password Policy Setting', NULL, N'A', N'sfte010.png', NULL, N'Password Policy', N'นโยบายรหัสผ่าน', N'/show/vfte010', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte011', N'Password Policy', N'Password Policy', N'F', N'W', N'Password Policy', NULL, N'A', N'sfte011.png', NULL, N'Password Policy', N'Password Policy', N'/show/vfte011', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte012', N'Configuration Setting', N'ตั้งค่าเบื้องต้น', N'F', N'W', N'Configuration Setting', NULL, N'A', N'sfte012.png', NULL, N'Configure', N'ตั้งค่าเบื้องต้น', N'/show/vfte012', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte013', N'Mail Template Setting', N'ตั้งค่าต้นแบบเมล', N'F', N'W', N'Mail Template Setting', NULL, N'A', N'sfte013.png', NULL, N'Mail Template', N'ตั้งค่าเมล', N'/show/vfte013', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte014', N'Label Setting', N'ตั้งค่าป้าย', N'F', N'W', N'Label Setting', NULL, N'A', N'sfte014.png', NULL, N'Label', N'ตั้งค่าป้าย', N'/show/vfte014', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte016', N'Account Information', N'ข้อมูลผู้ใช้', N'F', N'W', N'Account Information', NULL, N'A', N'sfte016.png', NULL, N'User', N'ผู้ใช้งาน', N'/show/vfte016', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte017', N'Two Factor Authentication', N'Two Factor Authentication', N'F', N'W', N'Two Factor Authentication', NULL, N'A', N'sfte017.png', NULL, N'2Factor', N'2Factor', N'/show/vfte017', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte018', N'Tenant Setting', N'Tenant Setting', N'F', N'W', N'Tenant Setting', NULL, N'A', N'sfte018.png', NULL, N'Tenant', N'Tenant', N'/show/vfte018', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vfte019', N'Branch Information', N'ข้อมูลสาขา', N'F', N'W', N'Branch Information', NULL, N'A', N'sfte019.png', NULL, N'Branch', N'สาขา', N'/show/vfte019', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vftq001', N'Tracking Information', N'การตรวจสอบ', N'F', N'W', N'Tracking Information', NULL, N'A', N'sftq001.png', NULL, N'Tracking', N'ตรวจสอบ', N'/show/vftq001', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vftq003', N'Mail Tracking', N'Mail Tracking', N'F', N'W', N'Mail Tracking', NULL, N'A', N'sftq003.png', NULL, N'Mail Tracking', N'Mail Tracking', N'/show/vftq003', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vftu003', N'API Configuration', N'กำหนดค่า API', N'F', N'W', N'API Configuration', NULL, N'A', N'sftu003.png', NULL, N'API Config', N'กำหนดค่า API', N'/show/vftu003', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tprog] ([product], [programid], [progname], [prognameth], [progtype], [appstype], [description], [parameters], [progsystem], [iconfile], [iconstyle], [shortname], [shortnameth], [progpath], [editdate], [edittime], [edituser]) VALUES (N'VUE', N'vftu004', N'Access Token', N'กำหนด Token', N'F', N'W', N'Access Token', NULL, N'A', N'sftu004.png', NULL, N'Token', N'กำหนด Token', N'/show/vftu004', NULL, NULL, NULL)
GO


-- ----------------------------
-- Table structure for tproggrp
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tproggrp]') AND type IN ('U'))
	DROP TABLE [dbo].[tproggrp]
GO

CREATE TABLE [dbo].[tproggrp] (
  [groupname] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [programid] varchar(20) COLLATE Thai_CI_AS  NOT NULL,
  [parameters] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [seqno] int DEFAULT '0' NULL
)
GO

ALTER TABLE [dbo].[tproggrp] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tproggrp
-- ----------------------------
INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte002', NULL, N'1')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte003', NULL, N'2')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte005', NULL, N'3')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte007', NULL, N'4')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte008', NULL, N'5')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte009', NULL, N'6')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte010', NULL, N'7')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte012', NULL, N'8')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte013', NULL, N'9')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte014', NULL, N'10')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte016', NULL, N'11')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte017', NULL, N'12')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sfte018', NULL, N'13')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sftq001', NULL, N'14')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sftq003', NULL, N'15')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sftu003', NULL, N'16')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'ADMIN', N'sftu004', NULL, N'17')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'CENTER', N'sfte001', NULL, N'1')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'CENTER', N'sfte002', NULL, N'3')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'CENTER', N'sfte003', NULL, N'2')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'CENTER', N'sfte005', NULL, N'4')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'CENTER', N'sfte007', NULL, N'5')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'CENTER', N'sftq001', NULL, N'6')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'OPERATOR', N'sfte001', NULL, N'1')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'OPERATOR', N'sfte012', NULL, N'2')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'OPERATOR', N'sfte013', NULL, N'3')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'OPERATOR', N'sfte016', NULL, N'4')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'OPERATOR', N'sftq001', NULL, N'5')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte001', NULL, N'1')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte002', NULL, N'2')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte003', NULL, N'3')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte004', NULL, N'4')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte005', NULL, N'5')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte007', NULL, N'6')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte008', NULL, N'7')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte009', NULL, N'8')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte010', NULL, N'9')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte011', NULL, N'10')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte012', NULL, N'11')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte013', NULL, N'12')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte014', NULL, N'13')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte016', NULL, N'14')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte017', NULL, N'15')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte018', NULL, N'16')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vfte019', NULL, N'17')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vftq001', NULL, N'18')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vftq003', NULL, N'19')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vftu003', NULL, N'20')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'QA', N'vftu004', NULL, N'21')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte001', NULL, N'1')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte002', NULL, N'2')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte003', NULL, N'3')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte004', NULL, N'4')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte005', NULL, N'5')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte007', NULL, N'6')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte008', NULL, N'7')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte009', NULL, N'8')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte010', NULL, N'9')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte011', NULL, N'10')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte012', NULL, N'11')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte013', NULL, N'12')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte014', NULL, N'13')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte016', NULL, N'14')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte017', NULL, N'15')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte018', NULL, N'16')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sfte019', NULL, N'17')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sftq001', NULL, N'18')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sftq003', NULL, N'19')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sftu003', NULL, N'20')
GO

INSERT INTO [dbo].[tproggrp] ([groupname], [programid], [parameters], [seqno]) VALUES (N'TESTER', N'sftu004', NULL, N'21')
GO


-- ----------------------------
-- Table structure for trole
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[trole]') AND type IN ('U'))
	DROP TABLE [dbo].[trole]
GO

CREATE TABLE [dbo].[trole] (
  [site] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [roleid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [nameen] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [nameth] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [headroleid] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [actionflag] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [approveflag] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [effectdate] date DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[trole] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of trole
-- ----------------------------
INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R01', N'Programmer', N'โปรแกรมเมอร์', NULL, N'0', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R02', N'System Engineer', N'วิศวกรระบบ', NULL, N'0', NULL, N'1', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R03', N'System Analysis', N'นักวิเคราะห์ระบบ', NULL, N'0', NULL, N'1', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R04', N'System Software', N'นักพัฒนาซอฟแวร์', NULL, N'0', NULL, N'1', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R05', N'Designer', N'นักออกแบบ', NULL, N'0', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R06', N'Architecture', N'สถาปัตยกรรมระบบ', NULL, N'0', NULL, N'1', NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R07', N'Tester', N'ผู้ทดสอบ', NULL, N'0', NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[trole] ([site], [roleid], [nameen], [nameth], [headroleid], [inactive], [actionflag], [approveflag], [effectdate], [editdate], [edittime], [edituser]) VALUES (N'FWS', N'R08', N'Consultant', N'ที่ปรึกษา', NULL, N'0', NULL, N'1', NULL, NULL, NULL, NULL)
GO


-- ----------------------------
-- Table structure for trpwd
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[trpwd]') AND type IN ('U'))
	DROP TABLE [dbo].[trpwd]
GO

CREATE TABLE [dbo].[trpwd] (
  [reservepwd] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL
)
GO

ALTER TABLE [dbo].[trpwd] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of trpwd
-- ----------------------------
INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw0rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw1rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw2rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw3rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw4rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw5rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw6rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw7rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw8rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssw9rd')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'P@ssword')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password0')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password1')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password2')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password3')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password4')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password5')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password6')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password7')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password8')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Password9')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Qaz123wsx')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Qaz12wsx')
GO

INSERT INTO [dbo].[trpwd] ([reservepwd]) VALUES (N'Qwerty123')
GO


-- ----------------------------
-- Table structure for trxlog
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[trxlog]') AND type IN ('U'))
	DROP TABLE [dbo].[trxlog]
GO

CREATE TABLE [dbo].[trxlog] (
  [keyid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [curtime] bigint DEFAULT NULL NULL,
  [trxtime] bigint DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [transtime] datetime DEFAULT NULL NULL,
  [caller] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [sender] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [owner] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [processtype] varchar(15) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [trxstatus] char(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [attachs] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [refer] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [note] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [package] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [action] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [quotable] varchar(150) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [grouper] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [remark] text COLLATE Thai_CI_AS  NULL,
  [contents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[trxlog] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of trxlog
-- ----------------------------

-- ----------------------------
-- Table structure for trxres
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[trxres]') AND type IN ('U'))
	DROP TABLE [dbo].[trxres]
GO

CREATE TABLE [dbo].[trxres] (
  [keyid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [curtime] bigint DEFAULT NULL NULL,
  [trxtime] bigint DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] datetime DEFAULT NULL NULL,
  [transtime] datetime DEFAULT NULL NULL,
  [caller] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [sender] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [owner] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [processtype] varchar(15) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [trxstatus] char(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [remark] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [attachs] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [refer] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [note] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [package] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [action] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [quotable] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [grouper] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [contents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[trxres] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of trxres
-- ----------------------------

-- ----------------------------
-- Table structure for tstyle
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tstyle]') AND type IN ('U'))
	DROP TABLE [dbo].[tstyle]
GO

CREATE TABLE [dbo].[tstyle] (
  [styleid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [styletext] varchar(50) COLLATE Thai_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[tstyle] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tstyle
-- ----------------------------
INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-align-justify', N'fa fa-align-justify')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-archive', N'fa fa-archive')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-balance-scale', N'fa fa-balance-scale')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bank', N'fa fa-bank')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bar-chart', N'fa fa-bar-chart')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-barcode', N'fa fa-barcode')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bell-o', N'fa fa-bell-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bitcoin', N'fa fa-bitcoin')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bold', N'fa fa-bold')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bolt', N'fa fa-bolt')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-book', N'fa fa-book')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bookmark-o', N'fa fa-bookmark-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-briefcase', N'fa fa-briefcase')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-building-o', N'fa fa-building-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bullhorn', N'fa fa-bullhorn')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-bullseye', N'fa fa-bullseye')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-calculator', N'fa fa-calculator')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-calendar', N'fa fa-calendar')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-calendar-check-o', N'fa fa-calendar-check-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-calendar-minus-o', N'fa fa-calendar-minus-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-calendar-o', N'fa fa-calendar-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-calendar-plus-o', N'fa fa-calendar-plus-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-calendar-times-o', N'fa fa-calendar-times-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cart-plus', N'fa fa-cart-plus')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-chain', N'fa fa-chain')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-chain-broken', N'fa fa-chain-broken')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-chevron-circle-up', N'fa fa-chevron-circle-up')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-clipboard', N'fa fa-clipboard')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-clone', N'fa fa-clone')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cloud-download', N'fa fa-cloud-download')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cloud-upload', N'fa fa-cloud-upload')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cog', N'fa fa-cog')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cogs', N'fa fa-cogs')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-columns', N'fa fa-columns')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-commenting-o', N'fa fa-commenting-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-comment-o', N'fa fa-comment-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-comments-o', N'fa fa-comments-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-compass', N'fa fa-compass')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-copy', N'fa fa-copy')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-credit-card', N'fa fa-credit-card')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cube', N'fa fa-cube')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cubes', N'fa fa-cubes')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-cut', N'fa fa-cut')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-dashboard', N'fa fa-dashboard')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-database', N'fa fa-database')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-dedent', N'fa fa-dedent')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-desktop', N'fa fa-desktop')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-edit', N'fa fa-edit')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-envelope-o', N'fa fa-envelope-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-eraser', N'fa fa-eraser')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-exchange', N'fa fa-exchange')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-external-link', N'fa fa-external-link')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-eye', N'fa fa-eye')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-file-o', N'fa fa-file-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-files-o', N'fa fa-files-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-file-text-o', N'fa fa-file-text-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-font', N'fa fa-font')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-gears', N'fa fa-gears')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-gift', N'fa fa-gift')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-globe', N'fa fa-globe')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-header', N'fa fa-header')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-history', N'fa fa-history')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-home', N'fa fa-home')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-h-square', N'fa fa-h-square')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-image', N'fa fa-image')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-inbox', N'fa fa-inbox')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-laptop', N'fa fa-laptop')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-line-chart', N'fa fa-line-chart')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-link', N'fa fa-link')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-list', N'fa fa-list')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-list-alt', N'fa fa-list-alt')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-minus-circle', N'fa fa-minus-circle')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-money', N'fa fa-money')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-newspaper-o', N'fa fa-newspaper-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-paperclip', N'fa fa-paperclip')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-paste', N'fa fa-paste')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-paw', N'fa fa-paw')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-pencil-square-o', N'fa fa-pencil-square-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-pie-chart', N'fa fa-pie-chart')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-plus-circle', N'fa fa-plus-circle')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-print', N'fa fa-print')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-puzzle-piece', N'fa fa-puzzle-piece')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-qrcode', N'fa fa-qrcode')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-server', N'fa fa-server')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-share-alt', N'fa fa-share-alt')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-sitemap', N'fa fa-sitemap')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-square-o', N'fa fa-square-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-star-o', N'fa fa-star-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-table', N'fa fa-table')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-tablet', N'fa fa-tablet')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-tags', N'fa fa-tags')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-tasks', N'fa fa-tasks')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-th', N'fa fa-th')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-th-large', N'fa fa-th-large')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-th-list', N'fa fa-th-list')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-ticket', N'fa fa-ticket')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-trash-o', N'fa fa-trash-o')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-undo', N'fa fa-undo')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-user', N'fa fa-user')
GO

INSERT INTO [dbo].[tstyle] ([styleid], [styletext]) VALUES (N'fa fa-users', N'fa fa-users')
GO


-- ----------------------------
-- Table structure for ttemplate
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[ttemplate]') AND type IN ('U'))
	DROP TABLE [dbo].[ttemplate]
GO

CREATE TABLE [dbo].[ttemplate] (
  [template] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [templatetype] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [subjecttitle] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [contents] text COLLATE Thai_CI_AS  NOT NULL,
  [contexts] text COLLATE Thai_CI_AS  NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[ttemplate] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of ttemplate
-- ----------------------------
INSERT INTO [dbo].[ttemplate] ([template], [templatetype], [subjecttitle], [contents], [contexts], [editdate], [edittime], [edituser]) VALUES (N'USER_FORGOT', N'MAIL_NOTIFY', N'Confirm Password Changed', N'Dear, ${userfullname}.<br/>\r\nConfirm your password was changed.<br/>\r\nuser = ${username}<br>\r\npassword = ${userpassword}<br>\r\nyours sincerely,<br>		\r\nAdministrator<br/>', N'Dear, ${userfullname}.<br/>\r\nConfirm your password was changed.<br/>\r\nuser = ${username}<br>\r\npassword = ${userpassword}<br>\r\nyours sincerely,<br>		\r\nAdministrator<br/>', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[ttemplate] ([template], [templatetype], [subjecttitle], [contents], [contexts], [editdate], [edittime], [edituser]) VALUES (N'USER_INFO', N'MAIL_NOTIFY', N'Confirm New Account', N'Dear, ${userfullname}.<br/>\r\nNew account was created for access system.<br/>\r\nTo confirm, please kindly use information below.<br/>\r\nuser = ${username}<br>\r\npassword = ${userpassword}<br>\r\nyours sincerely,<br>	\r\nAdministrator<br/>', N'Dear, ${userfullname}.<br/>\r\nNew account was created for access system.<br/>\r\nTo confirm, please kindly use information below.<br/>\r\nuser = ${username}<br>\r\npassword = ${userpassword}<br>\r\nyours sincerely,<br>	\r\nAdministrator<br/>', NULL, NULL, NULL)
GO


-- ----------------------------
-- Table structure for ttemplatehistory
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[ttemplatehistory]') AND type IN ('U'))
	DROP TABLE [dbo].[ttemplatehistory]
GO

CREATE TABLE [dbo].[ttemplatehistory] (
  [template] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [templatetype] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [subjecttitle] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [contents] text COLLATE Thai_CI_AS  NOT NULL,
  [contexts] text COLLATE Thai_CI_AS  NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[ttemplatehistory] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of ttemplatehistory
-- ----------------------------

-- ----------------------------
-- Table structure for ttemplatetag
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[ttemplatetag]') AND type IN ('U'))
	DROP TABLE [dbo].[ttemplatetag]
GO

CREATE TABLE [dbo].[ttemplatetag] (
  [tagname] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [tagtitle] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [seqno] int DEFAULT '0' NOT NULL
)
GO

ALTER TABLE [dbo].[ttemplatetag] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of ttemplatetag
-- ----------------------------
INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${datacontents}', N'Data Info', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${datetime}', N'Date Time', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${description}', N'Description', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${enddate}', N'End Date', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${errorcontents}', N'Error Info', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${startdate}', N'Start Date', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${tablecontents}', N'Table Contents', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${textcontents}', N'Post Information', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${userfullname}', N'User Full Name', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${username}', N'User ID', N'0')
GO

INSERT INTO [dbo].[ttemplatetag] ([tagname], [tagtitle], [seqno]) VALUES (N'${userpassword}', N'User Password', N'0')
GO


-- ----------------------------
-- Table structure for ttenant
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[ttenant]') AND type IN ('U'))
	DROP TABLE [dbo].[ttenant]
GO

CREATE TABLE [dbo].[ttenant] (
  [tenantid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [tenantname] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [applicationid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NOT NULL,
  [privatekeys] text COLLATE Thai_CI_AS  NOT NULL,
  [publickeys] text COLLATE Thai_CI_AS  NOT NULL,
  [createdate] date  NOT NULL,
  [createtime] time(7)  NOT NULL,
  [createuser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[ttenant] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of ttenant
-- ----------------------------
INSERT INTO [dbo].[ttenant] ([tenantid], [tenantname], [applicationid], [inactive], [privatekeys], [publickeys], [createdate], [createtime], [createuser], [editdate], [edittime], [edituser]) VALUES (N'018048fe-709d-11ed-809e-98fa9bd6bd8e', N'Test', N'103d45ab-709d-11ed-809e-98fa9bd6bd8e', N'0', N'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAKgyQXpSjptg/3wwjX0CNVXNqj2UdD2/tzdX1hc7WuHDBAz3GgHTHsA6h02XdiSCzFJskYry57A6GOG8xBeZN/aLOZQ2XNKxzkRXDFRZWcueppueKLWQRUzymJqqXYxCwUX6XNkL82y+ZqY7nKJzJSIeS3zxpXU0aFu+c4zbvGNRAgMBAAECgYA3M49D2zaMjlArbS/ymDfy+jXmUgO4hGRYWI6eP0+7iqqYqryxXp3YDx16/Lu8jeULJDC8Pq6Fqvuhkrd020d/LFdl6yxwbjttlFhB004fElFwOzXqGyo0ndL7k7i+U8M3VtTgasbBsS5VI1MGq2FHBnCMN3BMBlAVWiRd/gPkQQJBAPAdpU4+/vuAs1sWkfhLws95rG/M4sPwDPpgbA4zv64Qj+zVNY07up4vCqPqpIKZzYAuamr20eX1yrC7EfAvzlkCQQCzUqfPLXWDAc/45zN9LgvZ2HWVJH/K78/RFylB9EmFnaqvlbc7jXM2cB1aKPbgfTW/Sh0VVVf4sT8bDeAYK825AkBR16j6jJpYmzuG9qB2Y0xZb32I9ertIisqRCdQh+7zo42LCfkg1JT9Scd0q4u7QDU9VZTMNKjCmw6lQn4QwhqxAkBnUmuwGtBHoMa08nofWWWoqmjtey9KvaxvHDpAb0Hhg/vx2YDPBmxo5GZ1KX89z8clJc3mGdtrRq1GqFMDelG5AkB2Fb96auaxmt2LdtEYFzm2IYvFU9sqrUsCVdRvQlDOp7eLuLgUn7odjJiJ7z7kLcw+/kgxpFwP/0reNvBdP56I', N'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCoMkF6Uo6bYP98MI19AjVVzao9lHQ9v7c3V9YXO1rhwwQM9xoB0x7AOodNl3YkgsxSbJGK8uewOhjhvMQXmTf2izmUNlzSsc5EVwxUWVnLnqabnii1kEVM8piaql2MQsFF+lzZC/NsvmamO5yicyUiHkt88aV1NGhbvnOM27xjUQIDAQAB', N'2022-11-30', N'17:52:38.0000000', N'tso', N'2022-11-30', N'17:52:42.0000000', N'tso')
GO

INSERT INTO [dbo].[ttenant] ([tenantid], [tenantname], [applicationid], [inactive], [privatekeys], [publickeys], [createdate], [createtime], [createuser], [editdate], [edittime], [edituser]) VALUES (N'382af958-8556-44c9-a3c7-76ff5e6a57f2', N'TAS Key', N'36ccafa6-1545-4d6b-b591-c5f51633cbb8', N'0', N'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJs/55FoUWC33k8Wwxe7aMBkAdkSPlemcefcPk4ihT0y7oudmiWSu3Dvo9BEUypOYSlJoG4zYAnuUoSrWWAICPfF0aUwQk5R59U+3UmMUxQaErbw6dAPPA8YWCWBkzRcJ3p6Pdywzqlqs/gvZ2D0klgIfbHkOfdF1M1jBmgIEkq3AgMBAAECgYB3P0+8dbdEJhchAqfZu77LQEXXGVc/df66DIbi90sGZe+q1+SGBb3qEnfuSfzjWw7warhKzTVwi1lgxEjDJYjUqzP8ufzKrYNQHOSmR2er1ZjWq3rr7w4P0gZQV8Pf0TnBaWC7yvsJW/U7kOQsfS7lOGkR0utEdoG6ZwyngnhKKQJBAOTfBfYCy85CQxe00eEmYcmZKT0YSHQQC0caPaGQtqNi0afdnqyCcPT1TESVag3VFNXosBrXYfzCUz72oPFT1GMCQQCtpt+e2jAH2Eu4+KhY0zSWuQeV4IO/EMhXfRtTKPmw40f+KA0tSbOUleINT74hPb2zfQRzl4bMRcUnRoAIh+6dAkAID2KiW07aILNELnYFu9hNxTsSj7xdegMrqdzpx7Lm5iAEDWX9JUrdFZZuA+UMP6jQL7Wj/FnTEPTljsH0PcOJAkBwH6uMGj2hExvxlzy7/cOa/mXTdGAc4m05cGJQU8jFWjuF875uW4REkHKhPbf6Jq9yUWqqaFB1XSdrsK3C1GJRAkAUWnE0ThH2zFp38D5Wji86zbhN8xML7a2Q+OIlV0V13Afk6T0Xmj2P0v5LMtAsyJmO/RGhaCLtT79a+g5S4zu3', N'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbP+eRaFFgt95PFsMXu2jAZAHZEj5XpnHn3D5OIoU9Mu6LnZolkrtw76PQRFMqTmEpSaBuM2AJ7lKEq1lgCAj3xdGlMEJOUefVPt1JjFMUGhK28OnQDzwPGFglgZM0XCd6ej3csM6parP4L2dg9JJYCH2x5Dn3RdTNYwZoCBJKtwIDAQAB', N'2022-12-06', N'16:12:36.0000000', N'tso', N'2022-12-06', N'16:12:36.0000000', N'tso')
GO

INSERT INTO [dbo].[ttenant] ([tenantid], [tenantname], [applicationid], [inactive], [privatekeys], [publickeys], [createdate], [createtime], [createuser], [editdate], [edittime], [edituser]) VALUES (N'fbe2464b-b4d4-4b18-a1f3-ceec595ca2e8', N'TSO Key', N'bb631b27-484b-4fcd-8b8f-b00f5344a928', N'0', N'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAIecqPNRqUG14i34dh45PWuKhaJ/iv8vDfbj6oqyMeWSY/fzSe5G0EXD9K+pdHS9Msq/SN2A1rQzzc11hNEfOMKTsdzodvIaSdIyn/JfVxhgvgfFZ9+DGGqOKFBI6SApzeT7jT2l+//wH5qlEE5XE/MRbEGroh/onBkY04kEelbbAgMBAAECgYAl+YiWGlf7PqOHm/v3mq/IXZHuXyjdLKAMcuZK0HuIfeXgmRAq2UmZP7ZVOm6SAikm/Um6PUniTF9lGXOH2+ZYrf9BFObYujuj6v2AdjmjOLoeOeUGdQEyiS0JqYY6UZEfbrFBHaJwtPrz1ULvVmKWc12tU2bOZmTKZb5gW8EZAQJBAL9rQ+qQ2bKHZQHfIOrd8QmgbaMY92al4TPmmXUL+AoFqrUqZZB2H7c2MEqAhDKAtGPNIHWPXZxnNWao7bSIoxkCQQC1XWA+SldUgQ6wLOfx/SajQscpoNAW++q+B2v3k3M7EzSyn8cjFobXqTyYvM9ek/VjdvIaVwe/xmYdn0Ab65wTAkBGoVfAF46cV2Un2aMVxqsH+FA8HBw9nfuI4Q/CppXxbMHeczRip5NwUOhktSMSV3c4VBokBrBt449KwA5lzP0RAkB/kp4HUt2ZCGrfi8bflhVek7NqWb7l2+/kGW5dqK9OZ5US7Ibz7H2PJ3EDcxRez661d06XLo653AGqZoF+4j1XAkArzqamCERTCsI8aHXOhbCHJvyWGcXcXfG3eEzvWSiuctDUlLo2WS513xzADXICckj2j0WWiHJ6L4QAVUj2ccxE', N'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHnKjzUalBteIt+HYeOT1rioWif4r/Lw324+qKsjHlkmP380nuRtBFw/SvqXR0vTLKv0jdgNa0M83NdYTRHzjCk7Hc6HbyGknSMp/yX1cYYL4HxWffgxhqjihQSOkgKc3k+409pfv/8B+apRBOVxPzEWxBq6If6JwZGNOJBHpW2wIDAQAB', N'2022-12-05', N'12:37:17.0000000', N'tso', N'2022-12-05', N'12:37:17.0000000', N'tso')
GO


-- ----------------------------
-- Table structure for tupwd
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tupwd]') AND type IN ('U'))
	DROP TABLE [dbo].[tupwd]
GO

CREATE TABLE [dbo].[tupwd] (
  [serverdatetime] datetime DEFAULT NULL NULL,
  [systemdate] date DEFAULT '0000-00-00' NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [userpassword] varchar(200) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [edituserid] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL
)
GO

ALTER TABLE [dbo].[tupwd] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tupwd
-- ----------------------------

-- ----------------------------
-- Table structure for tuser
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuser]') AND type IN ('U'))
	DROP TABLE [dbo].[tuser]
GO

CREATE TABLE [dbo].[tuser] (
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [username] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [site] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [startdate] date DEFAULT NULL NULL,
  [enddate] date DEFAULT NULL NULL,
  [status] varchar(1) COLLATE Thai_CI_AS DEFAULT 'A' NULL,
  [userpassword] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [passwordexpiredate] date DEFAULT NULL NULL,
  [passwordchangedate] date DEFAULT NULL NULL,
  [passwordchangetime] time(7) DEFAULT NULL NULL,
  [showphoto] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [adminflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [groupflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [theme] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [firstpage] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [loginfailtimes] tinyint DEFAULT '0' NULL,
  [failtime] bigint DEFAULT NULL NULL,
  [lockflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [usertype] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [iconfile] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [accessdate] date DEFAULT NULL NULL,
  [accesstime] time(7) DEFAULT NULL NULL,
  [accesshits] bigint DEFAULT '0' NULL,
  [siteflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [branchflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [approveflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [changeflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [newflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [activeflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [mistakens] tinyint DEFAULT '0' NULL,
  [mistakentime] bigint DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tuser] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuser
-- ----------------------------
INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'adminis', N'admin@freewill.com', N'FWS', NULL, NULL, N'A', N'$2a$10$MhzJQISuqFZSES0k00LPx.iMWUMGgp4P4oR5xlAYdzc2ydaVQgMnG', NULL, NULL, NULL, NULL, N'1', N'0', NULL, NULL, N'0', N'0', N'0', N'A', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'centre', N'center@freewill.com', N'FWS', NULL, NULL, N'A', N'$2a$10$fCARfKVL/xYrnJC6QS7c/O.u1WEKq.xS.qmlRV4sZo6PA1sJPW78C', NULL, NULL, NULL, NULL, N'1', N'0', NULL, NULL, N'0', N'0', N'0', N'A', NULL, NULL, NULL, N'0', N'1', N'1', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test1', N'test1@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test2', N'test2@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test3', N'test3@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test4', N'test4@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test5', N'test5@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test6', N'test6@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test7', N'test7@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test8', N'test8@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'test9', N'test9@test.com', N'FWS', NULL, NULL, N'A', N'$2a$10$g/5giEKKwQKm.9UNmL6CCOtSqN64tFi04QzCS/D.ECog88PsTAVC.', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'E', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'tester', N'tester@freewill.com', N'FWS', NULL, NULL, N'A', N'$2a$10$lDY.QbMZp./3KLS3uGpu3OHypOk4itewChD2.2jrtsgQmGaJ2BayS', NULL, NULL, NULL, NULL, N'0', N'0', NULL, NULL, N'0', N'0', N'0', N'O', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuser] ([userid], [username], [site], [startdate], [enddate], [status], [userpassword], [passwordexpiredate], [passwordchangedate], [passwordchangetime], [showphoto], [adminflag], [groupflag], [theme], [firstpage], [loginfailtimes], [failtime], [lockflag], [usertype], [iconfile], [accessdate], [accesstime], [accesshits], [siteflag], [branchflag], [approveflag], [changeflag], [newflag], [activeflag], [mistakens], [mistakentime], [editdate], [edittime], [edituser]) VALUES (N'tso', N'tso@freewill.com', N'FWS', NULL, NULL, N'A', N'$2a$10$XxaiWYBcRIglzgJ9MF3toO6ZpUh6dv/XDEFlPsPtkpS583Hiuqz/y', NULL, NULL, NULL, NULL, N'1', N'0', NULL, NULL, N'0', N'0', N'0', N'A', NULL, NULL, NULL, N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', N'0', NULL, NULL, NULL)
GO


-- ----------------------------
-- Table structure for tuserbranch
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserbranch]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserbranch]
GO

CREATE TABLE [dbo].[tuserbranch] (
  [site] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [branch] varchar(20) COLLATE Thai_CI_AS  NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[tuserbranch] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserbranch
-- ----------------------------
INSERT INTO [dbo].[tuserbranch] ([site], [branch], [userid]) VALUES (N'FWS', N'00', N'tso')
GO

INSERT INTO [dbo].[tuserbranch] ([site], [branch], [userid]) VALUES (N'FWS', N'00', N'ttso')
GO

INSERT INTO [dbo].[tuserbranch] ([site], [branch], [userid]) VALUES (N'FWS', N'01', N'tso')
GO

INSERT INTO [dbo].[tuserbranch] ([site], [branch], [userid]) VALUES (N'FWS', N'01', N'ttso')
GO


-- ----------------------------
-- Table structure for tuserfactor
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserfactor]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserfactor]
GO

CREATE TABLE [dbo].[tuserfactor] (
  [factorid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [factorkey] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [email] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [issuer] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [createdate] date  NOT NULL,
  [createtime] time(7)  NOT NULL,
  [createtranstime] bigint  NOT NULL,
  [factorflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NOT NULL,
  [factorurl] varchar(350) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [confirmdate] date DEFAULT NULL NULL,
  [confirmtime] time(7) DEFAULT NULL NULL,
  [confirmtranstime] bigint DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [factorremark] varchar(350) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tuserfactor] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserfactor
-- ----------------------------

-- ----------------------------
-- Table structure for tuserfactorhistory
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserfactorhistory]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserfactorhistory]
GO

CREATE TABLE [dbo].[tuserfactorhistory] (
  [factorid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [factorkey] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [email] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [issuer] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [createdate] date  NOT NULL,
  [createtime] time(7)  NOT NULL,
  [createtranstime] bigint  NOT NULL,
  [factorflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NOT NULL,
  [factorurl] varchar(350) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [confirmdate] date DEFAULT NULL NULL,
  [confirmtime] time(7) DEFAULT NULL NULL,
  [confirmtranstime] bigint DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [factorremark] varchar(350) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tuserfactorhistory] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserfactorhistory
-- ----------------------------

-- ----------------------------
-- Table structure for tusergrp
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tusergrp]') AND type IN ('U'))
	DROP TABLE [dbo].[tusergrp]
GO

CREATE TABLE [dbo].[tusergrp] (
  [userid] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [groupname] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [rolename] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tusergrp] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tusergrp
-- ----------------------------
INSERT INTO [dbo].[tusergrp] ([userid], [groupname], [rolename]) VALUES (N'adminis', N'ADMIN', NULL)
GO

INSERT INTO [dbo].[tusergrp] ([userid], [groupname], [rolename]) VALUES (N'centre', N'CENTER', NULL)
GO

INSERT INTO [dbo].[tusergrp] ([userid], [groupname], [rolename]) VALUES (N'tester', N'TESTER', NULL)
GO

INSERT INTO [dbo].[tusergrp] ([userid], [groupname], [rolename]) VALUES (N'tso', N'ADMIN', NULL)
GO

INSERT INTO [dbo].[tusergrp] ([userid], [groupname], [rolename]) VALUES (N'tso', N'QA', NULL)
GO

INSERT INTO [dbo].[tusergrp] ([userid], [groupname], [rolename]) VALUES (N'tso', N'TESTER', NULL)
GO


-- ----------------------------
-- Table structure for tuserinfo
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserinfo]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserinfo]
GO

CREATE TABLE [dbo].[tuserinfo] (
  [site] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [employeeid] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [userbranch] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [usertname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [usertsurname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [userename] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [useresurname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [displayname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activeflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [accessdate] date DEFAULT NULL NULL,
  [accesstime] time(7) DEFAULT NULL NULL,
  [photoimage] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [email] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [gender] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [lineid] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [mobile] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [langcode] varchar(10) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [birthday] date DEFAULT NULL NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [remarks] text COLLATE Thai_CI_AS  NULL,
  [usercontents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tuserinfo] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserinfo
-- ----------------------------
INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'adminis', N'adminis', N'00', N'FWS', N'Administrator', N'FWS', N'Administrator', N'FWS_Adm', N'0', NULL, NULL, NULL, N'admin@freewillsolutions.com', N'M', NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test1', N'test1', N'00', N'Test1', N'Test', N'Test1', N'Test', N'Test1_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test2', N'test2', N'00', N'Test2', N'Test', N'Test2', N'Test', N'Test2_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test3', N'test3', N'00', N'Test3', N'Test', N'Test3', N'Test', N'Test3_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test4', N'test4', N'00', N'Test4', N'Test', N'Test4', N'Test', N'Test4_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test5', N'test5', N'00', N'Test5', N'Test', N'Test5', N'Test', N'Test5_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test6', N'test6', N'00', N'Test6', N'Test', N'Test6', N'Test', N'Test6_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test7', N'test7', N'00', N'Test7', N'Test', N'Test7', N'Test', N'Test7_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test8', N'test8', N'00', N'Test8', N'Test', N'Test8', N'Test', N'Test8_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'test9', N'test9', N'00', N'Test9', N'Test', N'Test9', N'Test', N'Test9_Tes', N'0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'tester', N'tester', N'00', N'Tester', N'Test', N'Tester', N'Test', N'Tester_Tes', N'0', NULL, NULL, NULL, N'tester@gmail.com', N'M', NULL, NULL, NULL, NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[tuserinfo] ([site], [employeeid], [userid], [userbranch], [usertname], [usertsurname], [userename], [useresurname], [displayname], [activeflag], [accessdate], [accesstime], [photoimage], [email], [gender], [lineid], [mobile], [langcode], [birthday], [inactive], [editdate], [edittime], [edituser], [remarks], [usercontents]) VALUES (N'FWS', N'tso', N'tso', N'00', N'Tassan', N'Oros', N'Tassan', N'Oros', N'Tassan_Oro', N'0', NULL, NULL, NULL, N'tassun_oro@hotmail.com', N'M', NULL, NULL, N'TH', NULL, N'0', NULL, NULL, NULL, NULL, NULL)
GO


-- ----------------------------
-- Table structure for tuserinfohistory
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserinfohistory]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserinfohistory]
GO

CREATE TABLE [dbo].[tuserinfohistory] (
  [site] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [employeeid] varchar(50) COLLATE Thai_CI_AS DEFAULT '' NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [userbranch] varchar(20) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [usertname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [usertsurname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [userename] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [useresurname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [displayname] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [activeflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [accessdate] date DEFAULT NULL NULL,
  [accesstime] time(7) DEFAULT NULL NULL,
  [photoimage] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [email] varchar(100) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [gender] varchar(1) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [lineid] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [mobile] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [langcode] varchar(10) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [birthday] date DEFAULT NULL NULL,
  [inactive] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [edituser] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [remarks] text COLLATE Thai_CI_AS  NULL,
  [usercontents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tuserinfohistory] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserinfohistory
-- ----------------------------

-- ----------------------------
-- Table structure for tuserlog
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserlog]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserlog]
GO

CREATE TABLE [dbo].[tuserlog] (
  [seqno] bigint DEFAULT '0' NOT NULL,
  [curtime] datetime  NOT NULL,
  [useralias] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [site] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [progid] varchar(25) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [handler] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [action] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [remark] text COLLATE Thai_CI_AS  NULL,
  [token] varchar(350) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [address] varchar(200) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [paths] varchar(500) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [headers] text COLLATE Thai_CI_AS  NULL,
  [requests] text COLLATE Thai_CI_AS  NULL,
  [contents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tuserlog] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserlog
-- ----------------------------

-- ----------------------------
-- Table structure for tuserpwd
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserpwd]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserpwd]
GO

CREATE TABLE [dbo].[tuserpwd] (
  [trxid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userpassword] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [expiredate] datetime  NOT NULL,
  [transtime] bigint  NOT NULL,
  [passwordexpiredate] date  NOT NULL,
  [passwordchangedate] date  NOT NULL,
  [passwordchangetime] time(7)  NOT NULL,
  [expireflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [confirmdate] date DEFAULT NULL NULL,
  [confirmtime] time(7) DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL
)
GO

ALTER TABLE [dbo].[tuserpwd] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserpwd
-- ----------------------------

-- ----------------------------
-- Table structure for tuserpwdhistory
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserpwdhistory]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserpwdhistory]
GO

CREATE TABLE [dbo].[tuserpwdhistory] (
  [trxid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userpassword] varchar(100) COLLATE Thai_CI_AS  NOT NULL,
  [expiredate] datetime  NOT NULL,
  [transtime] bigint  NOT NULL,
  [passwordexpiredate] date  NOT NULL,
  [passwordchangedate] date  NOT NULL,
  [passwordchangetime] time(7)  NOT NULL,
  [expireflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL,
  [confirmdate] date DEFAULT NULL NULL,
  [confirmtime] time(7) DEFAULT NULL NULL,
  [editdate] date DEFAULT NULL NULL,
  [edittime] time(7) DEFAULT NULL NULL,
  [hisid] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [hisno] bigint DEFAULT NULL NULL,
  [hisflag] varchar(1) COLLATE Thai_CI_AS DEFAULT '0' NULL
)
GO

ALTER TABLE [dbo].[tuserpwdhistory] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserpwdhistory
-- ----------------------------

-- ----------------------------
-- Table structure for tuserrole
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tuserrole]') AND type IN ('U'))
	DROP TABLE [dbo].[tuserrole]
GO

CREATE TABLE [dbo].[tuserrole] (
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [roleid] varchar(50) COLLATE Thai_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[tuserrole] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tuserrole
-- ----------------------------

-- ----------------------------
-- Table structure for tusertoken
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[tusertoken]') AND type IN ('U'))
	DROP TABLE [dbo].[tusertoken]
GO

CREATE TABLE [dbo].[tusertoken] (
  [useruuid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [userid] varchar(50) COLLATE Thai_CI_AS  NOT NULL,
  [createdate] date  NOT NULL,
  [createtime] time(7)  NOT NULL,
  [createmillis] bigint  NOT NULL,
  [expiredate] date  NOT NULL,
  [expiretime] time(7)  NOT NULL,
  [expiretimes] bigint  NOT NULL,
  [site] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [code] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [state] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [nonce] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [authtoken] varchar(350) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [prime] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [generator] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [privatekey] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [publickey] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [sharedkey] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [otherkey] varchar(250) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [tokentype] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [tokenstatus] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [factorcode] varchar(50) COLLATE Thai_CI_AS DEFAULT NULL NULL,
  [outdate] date DEFAULT NULL NULL,
  [outtime] time(7) DEFAULT NULL NULL,
  [accesscontents] text COLLATE Thai_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[tusertoken] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of tusertoken
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table api_config
-- ----------------------------
ALTER TABLE [dbo].[api_config] ADD CONSTRAINT [PK__api_conf__3B7290E8BAA1E5E1] PRIMARY KEY CLUSTERED ([apiname])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tactivate
-- ----------------------------
ALTER TABLE [dbo].[tactivate] ADD CONSTRAINT [PK__tactivat__B5F2C0DE16FA78CF] PRIMARY KEY CLUSTERED ([activatekey], [activateuser])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tattachfile
-- ----------------------------
ALTER TABLE [dbo].[tattachfile] ADD CONSTRAINT [PK__tattachf__0B408D35AA9020AE] PRIMARY KEY CLUSTERED ([attachid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tcaptcha
-- ----------------------------
ALTER TABLE [dbo].[tcaptcha] ADD CONSTRAINT [PK__tcaptcha__14B1F978FE2FAA50] PRIMARY KEY CLUSTERED ([capid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tcomp
-- ----------------------------
ALTER TABLE [dbo].[tcomp] ADD CONSTRAINT [PK__tcomp__2F8309A8AF70B725] PRIMARY KEY CLUSTERED ([site])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tcompbranch
-- ----------------------------
ALTER TABLE [dbo].[tcompbranch] ADD CONSTRAINT [PK__tcompbra__7E7B4ABACF015AE6] PRIMARY KEY CLUSTERED ([site], [branch])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tconfig
-- ----------------------------
ALTER TABLE [dbo].[tconfig] ADD CONSTRAINT [PK__tconfig__F1804B41E478BF39] PRIMARY KEY CLUSTERED ([category], [colname])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tconstant
-- ----------------------------
ALTER TABLE [dbo].[tconstant] ADD CONSTRAINT [PK__tconstan__9941586CDAD4622C] PRIMARY KEY CLUSTERED ([typename], [typeid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tcpwd
-- ----------------------------
ALTER TABLE [dbo].[tcpwd] ADD CONSTRAINT [PK__tcpwd__E4DEE19BD1A893FD] PRIMARY KEY CLUSTERED ([userid], [category])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tdirectory
-- ----------------------------
ALTER TABLE [dbo].[tdirectory] ADD CONSTRAINT [PK__tdirecto__4A884FA9B669A620] PRIMARY KEY CLUSTERED ([domainid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tfavor
-- ----------------------------
ALTER TABLE [dbo].[tfavor] ADD CONSTRAINT [PK__tfavor__B8C7EF9B9F8426FC] PRIMARY KEY CLUSTERED ([userid], [programid], [seqno])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tgroup
-- ----------------------------
ALTER TABLE [dbo].[tgroup] ADD CONSTRAINT [PK__tgroup__ED1647CD4C6194A1] PRIMARY KEY CLUSTERED ([groupname])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tlabel
-- ----------------------------
ALTER TABLE [dbo].[tlabel] ADD CONSTRAINT [PK__tlabel__0509E39C9D610243] PRIMARY KEY CLUSTERED ([labelid], [langcode], [labelname])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tnpwd
-- ----------------------------
ALTER TABLE [dbo].[tnpwd] ADD CONSTRAINT [PK__tnpwd__BE759FE8FC099BA8] PRIMARY KEY CLUSTERED ([reservenum])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tpasskey
-- ----------------------------
ALTER TABLE [dbo].[tpasskey] ADD CONSTRAINT [PK__tpasskey__607AFDE09CFE6227] PRIMARY KEY CLUSTERED ([keyid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tpperm
-- ----------------------------
ALTER TABLE [dbo].[tpperm] ADD CONSTRAINT [PK__tpperm__5354AF06EF9356F9] PRIMARY KEY CLUSTERED ([groupid], [progid], [permname])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tppwd
-- ----------------------------
ALTER TABLE [dbo].[tppwd] ADD CONSTRAINT [PK__tppwd__CBA1B25728914974] PRIMARY KEY CLUSTERED ([userid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tprod
-- ----------------------------
ALTER TABLE [dbo].[tprod] ADD CONSTRAINT [PK__tprod__583517CEBD020EB3] PRIMARY KEY CLUSTERED ([product])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tprog
-- ----------------------------
ALTER TABLE [dbo].[tprog] ADD CONSTRAINT [PK__tprog__EB84E3639C563E0D] PRIMARY KEY CLUSTERED ([programid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tproggrp
-- ----------------------------
ALTER TABLE [dbo].[tproggrp] ADD CONSTRAINT [PK__tproggrp__C3AE09FBEBF35E79] PRIMARY KEY CLUSTERED ([groupname], [programid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table trole
-- ----------------------------
ALTER TABLE [dbo].[trole] ADD CONSTRAINT [PK__trole__CD994BF232069E25] PRIMARY KEY CLUSTERED ([roleid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table trpwd
-- ----------------------------
ALTER TABLE [dbo].[trpwd] ADD CONSTRAINT [PK__trpwd__B88A2BEAC1520BB7] PRIMARY KEY CLUSTERED ([reservepwd])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table trxlog
-- ----------------------------
ALTER TABLE [dbo].[trxlog] ADD CONSTRAINT [PK__trxlog__607AFDE048DDFFF7] PRIMARY KEY CLUSTERED ([keyid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tstyle
-- ----------------------------
ALTER TABLE [dbo].[tstyle] ADD CONSTRAINT [PK__tstyle__1F7AF13637631C87] PRIMARY KEY CLUSTERED ([styleid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table ttemplate
-- ----------------------------
ALTER TABLE [dbo].[ttemplate] ADD CONSTRAINT [PK__ttemplat__88301DA9FCE893F0] PRIMARY KEY CLUSTERED ([template], [templatetype])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table ttemplatetag
-- ----------------------------
ALTER TABLE [dbo].[ttemplatetag] ADD CONSTRAINT [PK__ttemplat__D48789A1AB66681C] PRIMARY KEY CLUSTERED ([tagname])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table ttenant
-- ----------------------------
ALTER TABLE [dbo].[ttenant] ADD CONSTRAINT [PK__ttenant__B4150F0C1AA5E049] PRIMARY KEY CLUSTERED ([tenantid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tuser
-- ----------------------------
ALTER TABLE [dbo].[tuser] ADD CONSTRAINT [PK__tuser__CBA1B2576D4F8875] PRIMARY KEY CLUSTERED ([userid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tuserbranch
-- ----------------------------
ALTER TABLE [dbo].[tuserbranch] ADD CONSTRAINT [PK__tuserbra__28B0EB08CDEEDB6D] PRIMARY KEY CLUSTERED ([site], [branch], [userid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tuserfactor
-- ----------------------------
ALTER TABLE [dbo].[tuserfactor] ADD CONSTRAINT [PK__tuserfac__3353B12B4AB0B25C] PRIMARY KEY CLUSTERED ([factorid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tusergrp
-- ----------------------------
ALTER TABLE [dbo].[tusergrp] ADD CONSTRAINT [PK__tusergrp__0570D62B1216D6F0] PRIMARY KEY CLUSTERED ([userid], [groupname])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tuserinfo
-- ----------------------------
ALTER TABLE [dbo].[tuserinfo] ADD CONSTRAINT [PK__tuserinf__A39056F6FB0F97C8] PRIMARY KEY CLUSTERED ([site], [employeeid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tuserpwd
-- ----------------------------
ALTER TABLE [dbo].[tuserpwd] ADD CONSTRAINT [PK__tuserpwd__FD502E4A6937AE4F] PRIMARY KEY CLUSTERED ([trxid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tuserrole
-- ----------------------------
ALTER TABLE [dbo].[tuserrole] ADD CONSTRAINT [PK__tuserrol__F77826E8190001BE] PRIMARY KEY CLUSTERED ([userid], [roleid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table tusertoken
-- ----------------------------
ALTER TABLE [dbo].[tusertoken] ADD CONSTRAINT [PK__tusertok__118FCF6B77768B80] PRIMARY KEY CLUSTERED ([useruuid])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

