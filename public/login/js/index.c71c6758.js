/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 477:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 505:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(6587);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./node_modules/jquery-ui-dist/jquery-ui.js
var jquery_ui = __webpack_require__(9827);
;// ./src/assets/json/program_message.json
var program_message_namespaceObject = /*#__PURE__*/JSON.parse('[{"code":"QS0001","TH":"คุณต้องการลบรายการนี้ใช่หรือไม่ %s","EN":"Do you want to delete this transaction? %s"},{"code":"QS0002","TH":"คุณต้องการบันทึกรายการนี้ใช่หรือไม่","EN":"Do you want to save this transaction?"},{"code":"QS0003","TH":"คุณต้องการยกเลิกรายการนี้ใช่หรือไม่","EN":"Do you want to cancel this transaction?"},{"code":"QS0004","TH":"บันทึกรายการเรียบร้อยแล้ว %s","EN":"Process Success %s"},{"code":"QS0005","TH":"ท่านต้องการลบรายการนี้ใช่หรือไม่ %s","EN":"Do you want to delete this record? %s"},{"code":"QS0006","TH":"คุณต้องการส่งรายการนี้ใช่หรือไม่","EN":"Do you want to send this transaction?"},{"code":"QS0007","TH":"คุณต้องการปรับปรุงรายการนี้ใช่หรือไม่","EN":"Do you want to update this transaction?"},{"code":"QS0008","TH":"คุณต้องการล้างรายการนี้ใช่หรือไม่","EN":"Do you want to clear this?"},{"code":"QS0009","TH":"คุณต้องการดำเนินการ รายการนี้ใช่หรือไม่","EN":"Do you want to process this transaction?"},{"code":"QS0010","TH":"คุณต้องการบันทึกเป็นรายการนี้ใช่หรือไม่","EN":"Do you want to save as this transaction ?"},{"code":"QS0011","TH":"คุณต้องการยืนยันการรับรายการนี้ใช่หรือไม่","EN":"Do you want to receive this transaction?"},{"code":"QS0012","TH":"คุณต้องการล้างและเริ่มใหม่รายการนี้ใช่หรือไม่","EN":"Do you want to reset this transaction?"},{"code":"QS0013","TH":"คุณต้องการลบ %s รายการใช่หรือไม่","EN":"Do you want to delete %s row(s)?"},{"code":"QS0014","TH":"คุณต้องการยืนยันการอนุมัติ  %s รายการนี้ใช่หรือไม่","EN":"Are you sure to confirm approve the %s request?"},{"code":"QS0015","TH":"คุณต้องการยืนยันการปฏิเสธ  %s รายการนี้ใช่หรือไม่","EN":"Are you sure to reject %s?"},{"code":"QS0016","TH":"คุณต้องการยืนยันการสร้างใบคำร้องใช่หรือไม่","EN":"Do you want to create this request?"},{"code":"QS0017","TH":"คุณต้องการนำเข้ารายการนี้ใช่หรือไม่","EN":"Do you want to import this transaction?"},{"code":"QS0018","TH":"คุณต้องการนำออกรายการนี้ใช่หรือไม่","EN":"Do you want to export this transaction?"},{"code":"QS0019","TH":"คุณต้องการส่งรายการนี้ใหม่ใช่หรือไม่?","EN":"Do you want to resend this transaction?"},{"code":"QS0020","TH":"คุณต้องการยืนยันการแก้ไขใหม่  %s รายการนี้ใช่หรือไม่","EN":"Are you sure to revise %s?"},{"code":"QS0035","TH":"คุณต้องการเปิดหน้ารายการนี้ใช่หรือไม่? <br/>โปรดระวังงานปัจจุบันอาจยังไม่ได้บันทึก","EN":"Do you want to open this transaction? <br/>Becareful all current work will be lose."},{"code":"fsconfirmbtn","TH":"ตกลง","EN":"OK"},{"code":"fscancelbtn","TH":"ยกเลิก","EN":"Cancel"},{"code":"fssavebtn","TH":"บันทึก","EN":"Save"},{"code":"fsclosebtn","TH":"ปิด","EN":"Close"},{"code":"fsokbtn","TH":"ตกลง","EN":"OK"},{"code":"fsmessagetitle","TH":"ข้อความ","EN":"Message"},{"code":"fsaccepttitle","TH":"ยืนยัน","EN":"Confirm"},{"code":"fssuccessmsg","TH":"การดำเนินการสำเร็จ","EN":"Process success"},{"code":"fsfailmsg","TH":"การดำเนินการไม่สำเร็จ","EN":"Process fail"},{"code":"fsalert","TH":"คำเตือน","EN":"Alert"},{"code":"fswarn","TH":"คำเตือน","EN":"Warning"},{"code":"fsconfirm","TH":"ยืนยัน","EN":"Confirmation"},{"code":"fsinfo","TH":"ข้อความ","EN":"Information"},{"code":"QS8021","TH":"ท่านไม่มีสิทธิ์ดูรายการนี้","EN":"No permission to retrieve this transaction"},{"code":"QS8022","TH":"ท่านไม่มีสิทธิ์แก้ไขรายการนี้","EN":"No permission to edit this transaction"},{"code":"QS8023","TH":"ท่านไม่มีสิทธิ์ลบรายการนี้","EN":"No permission to delete this transaction"},{"code":"QS8024","TH":"ท่านไม่มีสิทธิ์สร้างรายการนี้","EN":"No permission to add this transaction"},{"code":"QS8025","TH":"ท่านไม่มีสิทธิ์นำเข้ารายการนี้","EN":"No permission to import this transaction"},{"code":"QS8026","TH":"ท่านไม่มีสิทธิ์นำออกรายการนี้","EN":"No permission to export this transaction"},{"code":"QS0101","TH":"ไม่พบข้อมูลที่ต้องการ โปรดกรุณาระบุและค้นหาใหม่","EN":"Record not found"},{"code":"QS0102","TH":"นำเข้าข้อมูลไม่ถูกต้อง","EN":"Invalid input"},{"code":"QS0103","TH":"ข้อมูลไม่ได้ระบุ","EN":"Value is undefined"},{"code":"QS0104","TH":"ปรับปรุงข้อมูลเรียบร้อย","EN":"Update success"},{"code":"QS0105","TH":"นำเข้าข้อมูลซ้ำซ้อน","EN":"Duplicate record"},{"code":"QS0201","TH":"Reset password success, Please verify your email for new password changed","EN":"Reset password success, Please verify your email for new password changed"},{"code":"QS0202","TH":"Reset Two Factor Success","EN":"Reset Two Factor Success"},{"code":"BCUN0039","TH":"รายการนี้ถูกทำรายการเสร็จสิ้นเรียบร้อยแล้ว","EN":"This transaction is already complete."}]');
;// ./src/assets/json/default_label.json
var default_label_namespaceObject = /*#__PURE__*/JSON.parse('[{"language":"TH","label":[{"name":"EN_lang","value":"อังกฤษ"},{"name":"TH_lang","value":"ไทย"},{"name":"VN_lang","value":"เวียดนาม"},{"name":"CN_lang","value":"จีน"},{"name":"LA_lang","value":"ลาว"},{"name":"KM_lang","value":"กัมพูชา"},{"name":"JP_lang","value":"ญี่ปุ่น"},{"name":"english_lang","value":"อังกฤษ"},{"name":"thai_lang","value":"ไทย"},{"name":"title_new","value":"สร้างใหม่"},{"name":"title_edit","value":"แก้ไข"},{"name":"title_view","value":"มอง"},{"name":"save_button","value":"บันทึก"},{"name":"delete_button","value":"ลบ"},{"name":"retrieve_button","value":"เรียกดู"},{"name":"search_button","value":"ค้นหา"},{"name":"saveas_button","value":"บันทึกเป็น"},{"name":"submit_button","value":"ส่งข้อมูล"},{"name":"cancel_button","value":"ยกเลิก"},{"name":"clear_button","value":"ล้าง"},{"name":"reset_button","value":"ล้าง"},{"name":"update_button","value":"ปรับปรุง"},{"name":"close_button","value":"ปิด"},{"name":"send_button","value":"ส่ง"},{"name":"complete_button","value":"สำเร็จ"},{"name":"download_button","value":"ดาวน์โหลด"},{"name":"insert_button","value":"เพิ่ม"},{"name":"executebutton","value":"ปฏิบัติการ"},{"name":"ok_button","value":"ตกลง"},{"name":"import_button","value":"นำเข้า"},{"name":"export_button","value":"นำออก"},{"name":"remove_button","value":"ลบ"},{"name":"upload_button","value":"อัพโหลด"},{"name":"consend_button","value":"ส่งแบบสอบถาม"},{"name":"version_label","value":"รุ่น"},{"name":"action_label","value":" "},{"name":"active_label","value":"ใช้งาน"},{"name":"inactive_label","value":"ไม่ใช้งาน"},{"name":"all_label","value":"ทั้งหมด"},{"name":"seqno_label","value":"ลำดับที่"},{"name":"page_notfound","value":"ไม่พบหน้าใช้งาน"},{"name":"record_notfound","value":"ไม่พบรายการ"},{"name":"trx_notfound","value":"ไม่พบรายการ"},{"name":"invalid_alert","value":"กรอกข้อมูลไม่ถูกต้อง"},{"name":"empty_alert","value":"กรุณากรอกข้อมูล"},{"name":"email_alert","value":"อีเมลไม่ถูกต้อง"}]},{"language":"EN","label":[{"name":"EN_lang","value":"English"},{"name":"TH_lang","value":"Thai"},{"name":"VN_lang","value":"Vietnam"},{"name":"CN_lang","value":"China"},{"name":"LA_lang","value":"Laos"},{"name":"KM_lang","value":"Cambodia"},{"name":"JP_lang","value":"Japan"},{"name":"english_lang","value":"English"},{"name":"thai_lang","value":"Thai"},{"name":"title_new","value":"Add New"},{"name":"title_edit","value":"Edit"},{"name":"title_view","value":"View"},{"name":"save_button","value":"Save"},{"name":"delete_button","value":"Delete"},{"name":"retrieve_button","value":"Retrieve"},{"name":"search_button","value":"Search"},{"name":"saveas_button","value":"Save As"},{"name":"submit_button","value":"Submit"},{"name":"cancel_button","value":"Cancel"},{"name":"clear_button","value":"Clear"},{"name":"reset_button","value":"Clear"},{"name":"close_button","value":"Close"},{"name":"update_button","value":"Update"},{"name":"send_button","value":"Send"},{"name":"complete_button","value":"Complete"},{"name":"download_button","value":"Down Load"},{"name":"insert_button","value":"Insert"},{"name":"execute_button","value":"Execute"},{"name":"ok_button","value":"OK"},{"name":"import_button","value":"Import"},{"name":"export_button","value":"Export"},{"name":"remove_button","value":"Remove"},{"name":"upload_button","value":"Upload"},{"name":"consend_button","value":"Send"},{"name":"version_label","value":"Version"},{"name":"action_label","value":" "},{"name":"active_label","value":"Active"},{"name":"inactive_label","value":"Inactive"},{"name":"all_label","value":"All"},{"name":"seqno_label","value":"No."},{"name":"page_notfound","value":"Page not found"},{"name":"record_notfound","value":"Record not found"},{"name":"trx_notfound","value":"Transaction not found"},{"name":"invalid_alert","value":"Invalid input"},{"name":"empty_alert","value":"This cannot be empty"},{"name":"email_alert","value":"Invalid email address"}]}]');
;// ./src/assets/json/program_label.json
var program_label_namespaceObject = /*#__PURE__*/JSON.parse('[{"language":"TH","label":[{"name":"system_label","value":"Assure"},{"name":"login_label","value":"ยินดีต้อนรับ"},{"name":"username_label","value":"บัญชีผู้ใช้"},{"name":"password_label","value":"รหัสผ่าน"},{"name":"forgot_label","value":"ลืมรหัสผ่าน"},{"name":"signin_label","value":"เข้าสู่ระบบ"},{"name":"profile_label","value":"ข้อมูลส่วนตัว"},{"name":"changepwd_label","value":"เปลี่ยนรหัสผ่าน"},{"name":"logout_label","value":"ออกจากระบบ"},{"name":"profile_caption","value":"ข้อมูลส่วนตัว"},{"name":"profilenotfound_label","value":"ไม่พบข้อมูลผู้ใช้งาน"},{"name":"usertname_label","value":"ชื่อ(ไทย)"},{"name":"usertsurname_label","value":"นามสกุล(ไทย)"},{"name":"userename_label","value":"ชื่อ(อังกฤษ)"},{"name":"useresurname_label","value":"นามสกุล(อังกฤษ)"},{"name":"displayname_label","value":"ชื่อที่ใช้แสดง"},{"name":"email_label","value":"อีเมล"},{"name":"mobile_label","value":"โทรศัพท์"},{"name":"lineid_label","value":"ไอดีไลน์"},{"name":"langcode_label","value":"แสดงภาษา"},{"name":"changepassword_caption","value":"เปลี่ยนรหัสผ่าน"},{"name":"oldpassword_label","value":"รหัสผ่านเก่า"},{"name":"userpassword_label","value":"รหัสผ่านใหม่"},{"name":"confirmpassword_label","value":"ยืนยันรหัสผ่าน"},{"name":"matchpassword_alert","value":"รหัสผ่านใหม่กับยืนยันรหัสผ่านไม่ตรงกัน"},{"name":"passwordforce_label","value":"ระบบบังคับให้ท่านต้องทำการเปลี่ยนรหัสผ่านใหม่ โปรดระบุรหัสผ่านใหม่ของท่าน"},{"name":"passwordexpire_label","value":"รหัสผ่านของท่านหมดอายุการใช้งาน โปรดระบุรหัสผ่านใหม่ของท่าน"},{"name":"forgot_caption","value":"ลืมรหัสผ่าน"},{"name":"securecode_label","value":"คำตอบลับจากภาพ"},{"name":"resetpwd_label","value":"การตั้งรหัสผ่านใหม่สำเร็จ"},{"name":"requestmsg_label","value":"โปรดตรวจสอบ  ระบบได้ส่งการยืนยันคำร้องไปยังอีเมล์ของท่าน"},{"name":"resetmsg_label","value":"โปรดตรวจสอบ  ระบบได้ส่งรหัสผ่านใหม่ไปยังอีเมล์ของท่าน"},{"name":"requestpwd_label","value":"คำร้องการขอตั้งรหัสผ่านใหม่สำเร็จ"},{"name":"resetlogin_label","value":"เข้าสู่ระบบ"},{"name":"securecode_info","value":"โปรดระบุผลลัพธ์จากการบวกเลขทั้งสองจำนวนตามภาพที่กำหนด"},{"name":"forgotpassword_info","value":"โปรดระบุรหัสผู้ใช้งานกับที่อยู่อีเมล์พร้อมรหัสลับจากภาพที่กำหนด"},{"name":"factor_caption","value":"การตรวจสอบ"},{"name":"factor_label","value":"เพิ่ม 2FA"},{"name":"factorcode_label","value":"รหัสตรวจสอบ"},{"name":"submit_button","value":"ยอมรับ"},{"name":"sso_label","value":"ลงชื่อเข้าใช้ระบบแบบครั้งเดียว"},{"name":"rememberme_label","value":"จดจำฉัน"},{"name":"searchtext_label","value":"ค้นหา"},{"name":"homepage_title","value":"หนัาหลัก"},{"name":"notification_title","value":"Notifications"},{"name":"newnotifications","value":"new notifications"},{"name":"lastest_title","value":"Lastest"},{"name":"weekly_title","value":"Weeks"},{"name":"monthly_title","value":"Months"},{"name":"favorite_title","value":"Short Cut Menu"},{"name":"greet_menu","value":"Hi,"},{"name":"change_menu","value":"Change Password"},{"name":"profile_menu","value":"User Profile"},{"name":"logout_menu","value":"Log Out"},{"name":"newfavorite_title","value":"New Farorite"},{"name":"lastaccess_label","value":"เข้าใช้งานล่าสุด"}]},{"language":"EN","label":[{"name":"system_label","value":"Assure"},{"name":"login_label","value":"Welcome"},{"name":"username_label","value":"User name"},{"name":"password_label","value":"Password"},{"name":"forgot_label","value":"Forgot Password"},{"name":"signin_label","value":"Sign In"},{"name":"profile_label","value":"Profile"},{"name":"changepwd_label","value":"Change Password"},{"name":"logout_label","value":"Log Out"},{"name":"profile_caption","value":"User Profile"},{"name":"profilenotfound_label","value":"Profile not found"},{"name":"usertname_label","value":"First Name(Thai)"},{"name":"usertsurname_label","value":"Last Name(Thai)"},{"name":"userename_label","value":"First Name(English)"},{"name":"useresurname_label","value":"Last Name(English)"},{"name":"displayname_label","value":"Display Name"},{"name":"email_label","value":"Email"},{"name":"mobile_label","value":"Mobile"},{"name":"lineid_label","value":"Line ID"},{"name":"langcode_label","value":"Display Language"},{"name":"changepassword_caption","value":"Change Password"},{"name":"oldpassword_label","value":"Old Password"},{"name":"userpassword_label","value":"New Password"},{"name":"confirmpassword_label","value":"Confirm Password"},{"name":"matchpassword_alert","value":"New Password does not match to Confirm Password"},{"name":"passwordforce_label","value":"The system force you to change password, please specify your new password."},{"name":"passwordexpire_label","value":"Your password was expired, please specify your new password."},{"name":"forgot_caption","value":"Forgot Password"},{"name":"securecode_label","value":"Answer Code"},{"name":"resetpwd_label","value":"Reset password success"},{"name":"requestmsg_label","value":"Please verify your email for request and activation changed"},{"name":"resetmsg_label","value":"Please verify your email for new password changed"},{"name":"requestpwd_label","value":"Request reset password success"},{"name":"resetlogin_label","value":"Log In"},{"name":"securecode_info","value":"Please specify the result of two value operate from image"},{"name":"forgotpassword_info","value":"Please identify your email address with secure code from image"},{"name":"factor_caption","value":"Verification"},{"name":"factor_label","value":"Add 2FA"},{"name":"factorcode_label","value":"Verify Code"},{"name":"submit_button","value":"Submit"},{"name":"sso_label","value":"Login via Single Sign-On"},{"name":"rememberme_label","value":"Remember Me"},{"name":"searchtext_label","value":"Search"},{"name":"homepage_title","value":"Home"},{"name":"notification_title","value":"Notifications"},{"name":"newnotifications","value":"new notifications"},{"name":"lastest_title","value":"Lastest"},{"name":"weekly_title","value":"Weeks"},{"name":"monthly_title","value":"Months"},{"name":"favorite_title","value":"Short Cut Menu"},{"name":"greet_menu","value":"Hi,"},{"name":"change_menu","value":"Change Password"},{"name":"profile_menu","value":"User Profile"},{"name":"logout_menu","value":"Log Out"},{"name":"newfavorite_title","value":"New Farorite"},{"name":"lastaccess_label","value":"Last Access"}]}]');
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(8111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.find.js
var es_iterator_find = __webpack_require__(116);
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm/index.js + 28 modules
var esm = __webpack_require__(1714);
// EXTERNAL MODULE: ./node_modules/@willsofts/will-app/index.js
var will_app = __webpack_require__(4122);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__(1701);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.some.js
var es_iterator_some = __webpack_require__(3579);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(144);
;// ./src/assets/js/accessor.js


const accessor = (0,reactivity_esm_bundler/* ref */.KR)({
  lang: (0,will_app/* getDefaultLanguage */.i5)(),
  info: {},
  reset() {
    this.info = {};
  },
  setInfo(value) {
    this.info = {
      ...value
    };
  }
});
;// ./src/assets/js/favorite.js

const favorite = (0,reactivity_esm_bundler/* ref */.KR)({
  proglists: [],
  favorlists: [],
  recentlists: [],
  reset() {
    this.proglists = [];
    this.favorlists = [];
    this.recentlists = [];
  },
  setProgLists(value) {
    this.proglists = value;
  },
  setFavorLists(value) {
    this.favorlists = value;
  },
  setRecentLists(value) {
    this.recentlists = value;
  }
});
;// ./src/assets/js/sider.js

const progmap = (0,reactivity_esm_bundler/* ref */.KR)({});
const menulists = (0,reactivity_esm_bundler/* ref */.KR)([]);
const loaded = (0,reactivity_esm_bundler/* ref */.KR)({
  htmlloaded: false,
  itemloaded: false,
  reset() {
    this.htmlloaded = false;
    this.itemloaded = false;
  },
  success() {
    return this.htmlloaded && this.itemloaded;
  }
});
;// ./src/assets/js/login.util.js














function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
function openApp(appid) {
  if (appid && appid.trim().length > 0) {
    let prog = menulists.find(item => item.element.programid == appid);
    if (prog) {
      let treepath = null;
      let pages = jquery_default()("a[data-pid=" + appid + "]", jquery_default()("#sidebarlayer"));
      if (pages && pages.length > 0) {
        treepath = pages.eq(0).attr("data-tree");
      }
      let tree = {
        caption: (0,will_app/* getDefaultLanguage */.i5)() == "TH" ? prog.element.prognameth : prog.element.progname,
        treepath: treepath
      };
      openPage(prog.element, accessor, favorite, tree);
    }
  }
}
function openPage(app, accessor, favorite, tree, callback) {
  if (tree && tree.caption && tree.caption.trim().length > 0) {
    showSubHeader(app.programid, tree.caption, tree.treepath);
  }
  return openProgram(app, accessor, favorite, tree, callback);
}
const except_apps = ["page_profile", "page_change", "page_first", "page_login", "page_work", "page_forgot", "factor", "page_register"];
function openProgram(app, accessor, favorite, tree, callback) {
  console.log("openProgram:", app);
  let fs_newwindows = "1" == accessor?.info?.newflag || "1" == app.newflag;
  let appid = app.programid;
  let url = app.url;
  let params = app.parameters;
  let apath = app.progpath;
  let appurl = (0,will_app/* getBaseUrl */.$_)() + "/gui/" + appid;
  let html = false;
  if (apath && apath.trim().length > 0) {
    appurl = (0,will_app/* getBaseUrl */.$_)() + apath;
    if (isValidUrl(apath)) {
      appurl = apath;
    }
    html = apath.indexOf(".html") > 0;
  }
  if (url && url.trim().length > 0) {
    //appurl = getBaseUrl()+"/load/"+appid; 
    appurl = url + "/" + appid;
    if (apath && apath.trim().length > 0) {
      if (isValidUrl(apath)) {
        appurl = apath;
      } else {
        appurl = url + apath;
      }
    }
  }
  let deflang = (0,will_app/* getDefaultLanguage */.i5)();
  let culture = getDefaultCulture();
  console.log("openProgram: app url", appurl, ", language", deflang, ", culture", culture);
  html = app.openmethod == "GET" ? "GET" : html;
  let authtoken = (0,will_app/* getAccessorToken */.fD)();
  let awin;
  if (fs_newwindows) {
    awin = (0,will_app/* openNewWindow */.zL)({
      method: html ? "GET" : "POST",
      url: appurl,
      windowName: "fs_window_" + appid,
      params: "seed=" + Math.random() + "&authtoken=" + authtoken + "&culture=" + culture + "&language=" + deflang + (params ? "&" + params : "")
    });
    awin.focus();
  } else {
    jquery_default()("#pagecontainer").hide();
    jquery_default()("#workingframe").show();
    (0,will_app/* submitWindow */.P1)({
      method: html ? "GET" : "POST",
      url: appurl,
      windowName: "workingframe",
      params: "seed=" + Math.random() + "&authtoken=" + authtoken + "&culture=" + culture + "&language=" + deflang + (params ? "&" + params : "")
    });
    (0,will_app/* startWaiting */.eF)();
  }
  jquery_default()(window).trigger("resize");
  (0,will_app/* setCurrentWindow */._I)(awin);
  recentApplication(app, favorite);
  if (callback) callback(awin);
  return awin;
}
function recentApplication(app, favorite) {
  if (!favorite) return;
  let appid = app.programid;
  if (favorite.recentlists.length > 12) return;
  if (except_apps.some(item => item.programid == appid)) return;
  if (favorite.recentlists.some(item => item.programid == appid)) return;
  favorite.recentlists.push({
    ...app
  });
}
function showSubHeader(itemname, nameprogram, treepath) {
  console.log("showSubHeader: ", itemname, ", ", nameprogram, ", ", treepath);
  jquery_default()("#kt_content").removeClass("no-subheader");
  jquery_default()("#kt_subheader").removeClass("dp-none");
  let subheraderlink = '<span class="icon-subheader"><i class="flaticon2-shelter"></i></span>';
  if (treepath && treepath.trim().length > 0) {
    let cuttree = treepath.split("#CUT#");
    let spans = cuttree.map(item => {
      if (item.trim().length > 0) {
        return '<span class="kt-subheader__breadcrumbs-separator"></span><span class="text-subheader">' + item + '</span>';
      }
      return "";
    });
    subheraderlink += spans.join("");
  }
  subheraderlink += '<span class="kt-subheader__breadcrumbs-separator"></span>' + '<span class="text-subheader">' + nameprogram + ' </span>';
  jquery_default()("#subheader_link").html(subheraderlink);
  jquery_default()("#subheader_wrapper").html('<span style="width: 100px;"><span class="btn btn-bold btn-sm btn-font-sm  btn-label-brand">' + itemname + '</span></span>');
  let x = window.matchMedia("(max-width: 1024px)");
  if (x.matches) {
    jquery_default()(".kt-content").css("padding", "40px 0px 0px 0px");
    jquery_default()("#kt_subheader").addClass("subheader-display");
  } else {
    jquery_default()(".kt-content").css("padding", "40px 0px 0px 0px");
    jquery_default()("#kt_subheader").addClass("dp-flex");
    jquery_default()("#kt_subheader").show();
  }
}
function clearSubHeader() {
  jquery_default()("#kt_subheader").removeClass("dp-none");
  jquery_default()("#subheader_link").empty();
  jquery_default()("#subheader_wrapper").empty();
}
function getDefaultCulture() {
  let deflang = (0,will_app/* getDefaultLanguage */.i5)();
  let record = undefined;
  let langs = (0,will_app/* getStorage */.c7)("tklanguage");
  if (langs) {
    record = langs.find(item => item.typeid == deflang);
  }
  return record ? record.typestyle || deflang : deflang;
}
function fetchMoreInfo() {
  fetchLanguages();
}
function fetchLanguages() {
  if ((0,will_app/* getStorage */.c7)("tklanguage")) return;
  let authtoken = (0,will_app/* getAccessorToken */.fD)();
  jquery_default().ajax({
    url: (0,will_app/* getApiUrl */.e9)() + "/api/category/lists",
    data: JSON.stringify({
      names: "tklanguage"
    }),
    headers: {
      "authtoken": authtoken
    },
    type: "POST",
    dataType: "json",
    contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
    error: function (transport, status, errorThrown) {
      console.error(errorThrown);
    },
    success: function (data) {
      console.log("fetchLanguages:", data);
      if (data.body) {
        let rows = data.body[0].resultset.rows;
        if (rows) {
          (0,will_app/* setStorage */.cT)("tklanguage", rows);
        }
      }
    }
  });
}
function hideWorkSpace() {
  jquery_default()("#workingframe").hide();
  window.open("./blank.html", "workingframe");
  clearSubHeader();
}
function hideWorkingFrame() {
  hideWorkSpace();
}
function forceLogout(info) {
  let useruuid = info?.useruuid;
  let authtoken = (0,will_app/* getAccessorToken */.fD)();
  console.log("useruuid=" + useruuid + ", authtoken=" + authtoken);
  jquery_default().ajax({
    url: (0,will_app/* getApiUrl */.e9)() + "/api/sign/signout",
    data: {
      useruuid: useruuid
    },
    headers: {
      "authtoken": authtoken
    },
    type: "POST"
  });
}
function logOut(info) {
  forceLogout(info);
  doLogout();
}
function doLogout() {
  (0,will_app/* removeAccessorInfo */.Or)();
  doLogin();
  clearAvatar();
  (0,will_app/* closeChildWindows */.Mx)();
}
function clearAvatar() {
  jquery_default()("#avatarimage").addClass("img-avatar");
}
function loggingIn() {
  hideWorkingFrame();
  jquery_default()("#page_login").show();
}
function doLogin() {
  loggingIn();
  hideWorkSpace();
  jquery_default()("#languagemenuitem").addClass("language-menu-item").show();
  jquery_default()("#recentmenulist").empty();
}
function refreshScreen() {
  jquery_default()(window).trigger("resize");
}
function validAccessToken(callback) {
  let json = (0,will_app/* getAccessorInfo */._M)();
  if (json && json.authtoken) {
    doAccessToken(json.authtoken, callback, json.info);
    return;
  }
  if (callback) callback(false);
}
function doAccessToken(token, callback, info) {
  if (token && token.trim().length > 0) {
    let requestid = (0,will_app/* getRequestID */.Ro)();
    jquery_default().ajax({
      url: (0,will_app/* getApiUrl */.e9)() + "/api/sign/accesstoken",
      headers: {
        "authtoken": token,
        "x-request-id": requestid
      },
      type: "POST",
      contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
      dataType: "html",
      error: function () {
        if (callback) callback(false);
      },
      success: function (data) {
        accessSuccess(data, callback, info);
      }
    });
    return;
  }
  if (callback) callback(false);
}
function accessSuccess(data, callback, info) {
  console.log("accessSuccess : ", data);
  try {
    let json = JSON.parse(data);
    if (json && json.head.errorflag == "N") {
      if (info) json.body.info = info;
      console.log("accessSuccess: body", json.body);
      (0,will_app/* saveAccessorInfo */.dz)(json.body);
      let accessToken = (0,will_app/* getStorage */.c7)("access_token");
      if (accessToken) (0,will_app/* setupDiffie */.LM)(json);
      (0,will_app/* removeStorage */.Od)("access_token");
      if (callback) callback(true, json);
      return;
    }
  } catch (ex) {
    console.error(ex);
  }
  if (callback) callback(false);
}
function verifyAfterLogin(json, callback, accessor, favorite) {
  $("#fsworkinglayer").addClass("working-control-class");
  if (json.body.factorverify && json.body.factorid != "" && (json.body.factorcode == undefined || json.body.factorcode == "")) {
    $("#fsworkinglayer").removeClass("working-control-class");
    openPage({
      programid: "factor",
      parameters: "factorid=" + json.body.factorid
    }, accessor, favorite);
  } else {
    if (json.body.changeflag && json.body.changeflag == "1") {
      $("#fsworkinglayer").removeClass("working-control-class");
      openPage({
        programid: "page_change",
        parameters: "changed=force"
      }, accessor, favorite);
    } else if (json.body.expireflag && json.body.expireflag == "1") {
      $("#fsworkinglayer").removeClass("working-control-class");
      openPage({
        programid: "page_change",
        parameters: "changed=expire"
      }, accessor, favorite);
    } else {
      doAfterLogin(json, callback);
    }
  }
}
function doAfterLogin(json, callback) {
  if (json) {
    let avatar = json.body.avatar;
    if (avatar && avatar.trim().length > 0) {
      $("#avatarimage").removeClass("img-avatar").attr("src", avatar);
    }
  }
  if (callback) callback();
}
function loadAppConfig() {
  fetch("app.config.json").then(response => response.json()).then(data => {
    console.log("app.config.json", data);
    assignAppConfig(data);
  }).catch(err => console.error(err));
}
function assignAppConfig(data, callback) {
  console.log("appConfig: data", data);
  if (!data) return;
  if (data.TOKEN_KEY !== undefined) (0,will_app/* setTokenKey */.Xs)(data.TOKEN_KEY);
  if (data.API_URL !== undefined) (0,will_app/* setApiUrl */.My)(data.API_URL);
  if (data.BASE_URL !== undefined) (0,will_app/* setBaseUrl */.pf)(data.BASE_URL);
  if (data.CDN_URL !== undefined) (0,will_app/* setCdnUrl */.vi)(data.CDN_URL);
  if (data.IMG_URL !== undefined) (0,will_app/* setImgUrl */.bK)(data.IMG_URL);
  if (data.DEFAULT_LANGUAGE !== undefined) (0,will_app/* setDefaultLanguage */.Qq)(data.DEFAULT_LANGUAGE);
  if (data.API_TOKEN !== undefined) (0,will_app/* setApiToken */.at)(data.API_TOKEN);
  if (data.BASE_STORAGE !== undefined) (0,will_app/* setBaseStorage */.TM)(data.BASE_STORAGE);
  if (data.SECURE_STORAGE !== undefined) (0,will_app/* setSecureStorage */.Zl)(data.SECURE_STORAGE);
  if (data.BASE_CSS !== undefined) (0,will_app/* setBaseCss */.rX)(data.BASE_CSS);
  if (data.CHAT_URL !== undefined) (0,will_app/* setChatUrl */.eL)(data.CHAT_URL);
  if (data.MULTI_LANGUAGES !== undefined) (0,will_app/* setMultiLanguages */.TS)(data.MULTI_LANGUAGES);
  if (data.DEFAULT_RAW_PARAMETERS !== undefined) (0,will_app/* setDefaultRawParameters */.Me)(data.DEFAULT_RAW_PARAMETERS);
  if (data.META_INFO !== undefined) (0,will_app/* setMetaInfo */.uX)(data.META_INFO);
  console.info("appConfig: DEFAULT_LANGUAGE=" + (0,will_app/* getDefaultLanguage */.i5)(), ", BASE_STORAGE=" + (0,will_app/* getBaseStorage */.dh)(), ", DEFAULT_RAW_PARAMETERS=" + (0,will_app/* getDefaultRawParameters */.e1)(), ", SECURE_STORAGE=" + (0,will_app/* isSecureStorage */.zV)());
  console.info("appConfig: API_URL=" + (0,will_app/* getApiUrl */.e9)(), ", BASE_URL=" + (0,will_app/* getBaseUrl */.$_)(), ", CDN_URL=" + (0,will_app/* getCdnUrl */.rG)(), ", IMG_URL=" + (0,will_app/* getImgUrl */.xn)() + ", BASE_CSS=" + (0,will_app/* getBaseCss */.NY)() + ", CHAT_URL=" + (0,will_app/* getChatUrl */.eh)() + ", MULTI_LANGUAGES=" + (0,will_app/* getMultiLanguages */.z8)());
  console.info("appConfig: META_INFO", (0,will_app/* getMetaInfo */.Ch)());
  (0,will_app/* createLinkStyle */.Mi)((0,will_app/* getBaseCss */.NY)());
  if (callback) callback(data);
}
function initAppConfig(callback) {
  try {
    assignAppConfig(window.getAppConfigs(), callback);
  } catch (ex) {
    console.error(ex);
  }
}
;// ./src/assets/js/bc.js






let socket = null;
function startReceiveBroadcast(chat_url) {
  if (!chat_url) chat_url = (0,will_app/* getChatUrl */.eh)();
  console.log("start receive bc: ", chat_url);
  if (chat_url && chat_url.trim().length > 0) {
    socket = (0,esm/* default */.Ay)(chat_url);
    socket.on('broadcast-message', function (msg) {
      console.log("broadcast-message:", msg);
      if (msg.type == "bc") {
        let div = jquery_default()("<div class='bc-layer'></div>");
        let link = jquery_default()("<a href=\"javascript:void(0)\" class=\"bc-close\" aria-label=\"close\"></a>").html("<em class='fa fa-close'></em>");
        link.on("click", () => {
          div.remove();
        });
        let span = jquery_default()("<span></span>").html(msg.message);
        let body = jquery_default()("body");
        let isz = body.find("div.bc-layer").length;
        if (isz > 0 && isz < 10) {
          let bottom = isz * 50;
          div.css({
            bottom: bottom
          });
        }
        div.append(link).append(span).appendTo(body);
      } else if (msg.type == "app" && msg.app) {
        //try support open app directly
        //app info = { programid: "?", url: "?", parameters: "?", progpath: "?" }
        let div = jquery_default()("<div class='bc-layer'></div>");
        let link = jquery_default()("<a href=\"javascript:void(0)\" class=\"bc-close\" aria-label=\"close\"></a>").html("<em class='fa fa-close'></em>");
        link.on("click", () => {
          div.remove();
        });
        let alink = jquery_default()("<a href=\"javascript:void(0)\" class=\"app-text\"></a>").html(msg.message);
        alink.on("click", () => {
          openApp(msg.app);
          link.trigger("click");
        });
        let span = jquery_default()("<span></span>").append(alink);
        let body = jquery_default()("body");
        let isz = body.find("div.bc-layer").length;
        if (isz > 0 && isz < 10) {
          let bottom = isz * 50;
          div.css({
            bottom: bottom
          });
        }
        div.append(link).append(span).appendTo(body);
        if (!(String((0,will_app/* getMetaInfo */.Ch)().BC_AUTO_HIDE) == "false")) {
          let interval = (0,will_app/* getMetaInfo */.Ch)().BC_AUTO_HIDE_INTERVAL || 3000;
          setTimeout(function () {
            div.hide(1000, function () {
              div.remove();
            });
          }, interval);
        }
      }
    });
  }
}
function stopReceiveBroadcast() {
  if (socket) socket.disconnect();
}
function openChatRoom(roomname, callback) {
  console.log("bc: openChatRoom", roomname);
  if (roomname && roomname.trim().length > 0) {
    let chatingframe = document.getElementById("chatingframe");
    let chatingwindow = chatingframe.contentWindow;
    if (chatingwindow) {
      try {
        chatingwindow.openChatRoom(roomname);
        jquery_default()("#fschatinglayer").show();
        if (callback) callback();
      } catch (ex) {
        console.error(ex);
      }
    }
  }
}
function createChatRoom(roomname, callback) {
  console.log("bc: createChatRoom", roomname);
  if (roomname && roomname.trim().length > 0) {
    let chatingframe = document.getElementById("chatingframe");
    let chatingwindow = chatingframe.contentWindow;
    if (chatingwindow) {
      try {
        chatingwindow.createChatRoom(roomname, callback);
      } catch (ex) {
        console.error(ex);
      }
    }
  }
}
function handleIncommingMessage(payload) {
  if (payload.archetype == "willsofts" && payload.type == "chat") {
    if (payload.method == "openChatRoom") {
      openChatRoom(payload.roomname, () => {
        if (payload.callback) {
          (0,will_app/* sendMessageToFrame */.G0)({
            ...payload
          });
        }
      });
    } else if (payload.method == "createChatRoom") {
      createChatRoom(payload.roomname, () => {
        if (payload.callback) {
          (0,will_app/* sendMessageToFrame */.G0)({
            ...payload
          });
        }
      });
    }
  }
}
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6768);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(5130);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/VueSure.vue?vue&type=template&id=928c6888

const _hoisted_1 = {
  id: "mainlayer",
  ref: "mainlayer"
};
const _hoisted_2 = {
  id: "aside_header",
  class: "kt-grid kt-grid--hor kt-grid--root"
};
const _hoisted_3 = {
  class: "kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page"
};
const _hoisted_4 = {
  class: "kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper",
  id: "kt_wrapper"
};
const _hoisted_5 = {
  class: "kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor mt-3 pt-5",
  id: "kt_content"
};
const _hoisted_6 = {
  id: "forcelayer",
  ref: "forcelayer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MetroHeaderBarMobile = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroHeaderBarMobile");
  const _component_MetroSiderBar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroSiderBar");
  const _component_MetroHeaderBar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroHeaderBar");
  const _component_MetroSubHeaderBar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroSubHeaderBar");
  const _component_WorkerFrame = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("WorkerFrame");
  const _component_LoginForm = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("LoginForm");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [_cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "fswaitlayer",
    class: "fa fa-spinner fa-spin"
  }, null, -1)), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_MetroHeaderBarMobile, {
    ref: "headerBarMobile",
    visible: $setup.menuVisible,
    labels: $setup.labels
  }, null, 8, ["visible", "labels"]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_MetroSiderBar, {
    ref: "siderBar",
    visible: $setup.menuVisible,
    labels: $setup.labels,
    onMenuSelected: $options.menuSelected
  }, null, 8, ["visible", "labels", "onMenuSelected"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_MetroHeaderBar, {
    ref: "headerBar",
    visible: $setup.menuVisible,
    labels: $setup.labels,
    onLanguageChanged: $options.changeLanguage,
    onMenuSelected: $options.menuSelected,
    onOpenChat: $options.openChat,
    chatEnable: $setup.chatEnable,
    notifyEnable: $setup.notifyEnable,
    languageEnable: $setup.languageEnable
  }, null, 8, ["visible", "labels", "onLanguageChanged", "onMenuSelected", "onOpenChat", "chatEnable", "notifyEnable", "languageEnable"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_MetroSubHeaderBar, {
    ref: "subHeaderBar",
    visible: $setup.menuVisible,
    labels: $setup.labels
  }, null, 8, ["visible", "labels"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_WorkerFrame, {
    ref: "workerFrame",
    visible: $setup.workingVisible,
    labels: $setup.labels
  }, null, 8, ["visible", "labels"])])])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.menuVisible]]), _cache[0] || (_cache[0] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "nn_alert_container",
    class: "nn-alert-container first-push"
  }, null, -1)), _cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "kt_alert_container",
    class: "kt-alert-continer first-push"
  }, null, -1)), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_LoginForm, {
    ref: "loginForm",
    visible: $setup.loginVisible,
    labels: $setup.labels,
    version: $setup.programVersion,
    onSuccess: $options.loginSuccess,
    onForgot: $options.forgotPassword
  }, null, 8, ["visible", "labels", "version", "onSuccess", "onForgot"]), _cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "fschatinglayer",
    class: "chating-class chating-control-class"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("iframe", {
    id: "chatingframe",
    name: "chatingframe",
    width: "100%",
    class: "chating-frame",
    title: "Chating"
  })], -1)), _cache[3] || (_cache[3] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "fsnotifylayer",
    class: "notify-class notify-control-class"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("iframe", {
    id: "notifyframe",
    name: "notifyframe",
    width: "100%",
    class: "notify-frame",
    title: "Notify"
  })], -1))], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.isShowing == true]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(runtime_core_esm_bundler/* KeepAlive */.PR, null, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.$y)($setup.currentForcePage), {
    ref: "forceComponent",
    labels: $setup.labels,
    onActivated: $options.componentActivated,
    onSuccess: $options.processSuccess
  }, null, 40, ["labels", "onActivated", "onSuccess"]))], 1024))], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.isShowing == false]])], 64);
}
;// ./src/VueSure.vue?vue&type=template&id=928c6888

// EXTERNAL MODULE: ./node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs + 109 modules
var PublicClientApplication = __webpack_require__(6718);
// EXTERNAL MODULE: ./node_modules/@azure/msal-common/dist/logger/Logger.mjs
var Logger = __webpack_require__(5767);
;// ./src/assets/js/auth.js




var ssoCallback;
var sso_current_domainid;
function setSSOCallback(callback) {
  ssoCallback = callback;
}
function startSSO(domainid, callback) {
  sso_current_domainid = domainid;
  setSSOCallback(callback);
  (0,will_app/* startWaiting */.eF)();
  jquery_default().ajax({
    url: (0,will_app/* getBaseUrl */.$_)() + "/auth/config/" + domainid,
    type: "POST",
    data: JSON.stringify({
      ajax: true
    }),
    dataType: "json",
    contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
    error: function (transport, status, errorThrown) {
      (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
    },
    success: async function (data, status, xhr) {
      console.log("success : " + xhr.responseText);
      (0,will_app/* stopWaiting */.Sk)();
      trySSOLogin(data);
    }
  });
}
async function trySSOLogin(data) {
  msalConfig.auth = {
    ...data.body.config.auth,
    authType: data.body.type,
    navigateToLoginRequestUrl: true
  };
  console.log("auth config", msalConfig.auth);
  delete msalConfig.auth.clientSecret;
  msalObject = new PublicClientApplication/* PublicClientApplication */.vq(msalConfig);
  await msalObject.initialize();
  msalObject.handleRedirectPromise().then(ssoHandleResponse).catch(error => {
    console.error(error);
  });
  ssoSignIn();
}
const msalConfig = {
  auth: {
    clientId: "",
    authority: "",
    redirectUri: ""
  },
  cache: {
    cacheLocation: "sessionStorage",
    // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case Logger/* LogLevel */.$.Error:
            console.error(message);
            return;
          case Logger/* LogLevel */.$.Info:
            console.info(message);
            return;
          case Logger/* LogLevel */.$.Verbose:
            console.debug(message);
            return;
          case Logger/* LogLevel */.$.Warning:
            console.warn(message);
            return;
        }
      }
    }
  }
};
const loginRequest = {
  scopes: ["openid"]
};
let msalObject = null;
let username = "";
let ssoSignedIn = false;
function isSSOSignedIn() {
  return ssoSignedIn;
}
function ssoSelectAccount(response) {
  if (!msalObject) return;
  const currentAccounts = msalObject.getAllAccounts();
  if (currentAccounts.length === 0) {
    return;
  } else if (currentAccounts.length > 1) {
    console.warn("Multiple accounts detected.");
  } else if (currentAccounts.length === 1) {
    ssoSignedIn = true;
    let acct = currentAccounts[0];
    username = acct.username;
    if (!username || username == "") {
      if (response) username = response.account.idTokenClaims.given_name;
    }
    tryLogIn(username, acct.tenantId);
  }
}
function ssoHandleResponse(response) {
  console.log("handleResponse", response);
  if (response !== null) {
    ssoSignedIn = true;
    username = response.account.username;
    if (!username || username == "") {
      username = response.account.idTokenClaims.given_name;
    }
    tryLogIn(username, response.tenantId, response.accessToken);
  } else {
    ssoSelectAccount(response);
  }
}
async function ssoSignIn() {
  if (!msalObject) return;
  try {
    let response = await msalObject.loginPopup(loginRequest);
    ssoHandleResponse(response);
  } catch (error) {
    console.error(error);
    (0,will_app/* alertDialog */.T3)(error.description);
  }
}
function ssoSignOut() {
  if (!msalObject) throw new Error("Configuration not found");
  if (!ssoSignedIn) throw new Error("Account does not signed in");
  let homeurl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + "/login";
  console.log("homeurl", homeurl);
  const logoutRequest = {
    account: msalObject.getAccountByUsername(username),
    postLogoutRedirectUri: homeurl,
    //msalConfig.auth.redirectUri || homeurl,
    mainWindowRedirectUri: homeurl //msalConfig.auth.redirectUri || homeurl
  };
  console.log("logoutRequest", logoutRequest);
  msalObject.logoutPopup(logoutRequest).then(() => {
    ssoSignedIn = false;
    username = "";
  });
  return true;
}
function getTokenPopup(request) {
  request.account = msalObject.getAccountByUsername(username);
  return msalObject.acquireTokenSilent(request).catch(error => {
    console.warn("silent token acquisition fails. acquiring token using popup");
    if (error instanceof InteractionRequiredAuthError) {
      return msalObject.acquireTokenPopup(request).then(tokenResponse => {
        console.log(tokenResponse);
        return tokenResponse;
      }).catch(error => {
        console.error(error);
      });
    } else {
      console.warn(error);
    }
  });
}
function tryLogIn(username, tenant, token) {
  console.log("tryLogin: username=" + username + ", domainid=" + sso_current_domainid + ", tenant=" + tenant + ", token=" + token);
  (0,will_app/* startWaiting */.eF)();
  jquery_default().ajax({
    url: (0,will_app/* getApiUrl */.e9)() + "/api/sign/access",
    type: "POST",
    data: JSON.stringify({
      username: username,
      domainid: sso_current_domainid,
      accesstoken: token
    }),
    dataType: "json",
    contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
    error: function (transport, status, errorThrown) {
      (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
    },
    success: function (data, status, xhr) {
      console.log("success : " + xhr.responseText);
      (0,will_app/* stopWaiting */.Sk)();
      //loginSuccess(data);
      if (ssoCallback) ssoCallback(data);
    }
  });
}
function doSSOLogout() {
  ssoSignOut();
}
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(4232);
;// ./src/assets/img/app_logo_title.png
var app_logo_title_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAZCAYAAAD9ovZ9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QMQChgNbNls7AAAGHFJREFUaN7tenl0VFW2/nfOvbfmIZWqjIQKIQMkIcwyg0ZxAEFRUBQVtfWhPqf2adsObb/WJ9p2v3Zon61ta3eLLSIooCIiDswgUwgEQkACZKxMVZWq1HyH/f5IggkmEfz91ltvrddnrbOq6t465+y9zz7fHs4G/tn+2QCw/62EERFkhSAK35PIGMAY+z+/aUQ08Kb+BBmJ/S2iEeDxqThWLyMY0eC0cRQMkpCWJPS5YDShgQHwhzQQAUlmDlUjWE3CT2a0okbG2FydA0CiLaiGXTYBRNQvo1FZA2PAx0dDON6WAGfdqk5gABwmjklZJhSm6KHvUrAfExoR4cWyGszNScFXdV7oBOAytwv14Rgmpzt+ML6b9nKfFztbm2GRRFycPgjHgn5ckp7V53pEBLZiEQ7PeQm7A7XINibhkuR8EADe4/89FcAjt+Mvrd/g39+eD2wG8K/AstLNmGMfByICgcDAzlkpxLMXaQ9rcFgWgmhVuiSg0G7mmToJotXIE5LA6gAcY+xQayxRgife8WHp4l7CMDOGYQA4gOMAC/4UDW9pV5GaJLAspzDj1U+DT1uMvPH2mZZnLAtqqlrec3cySp0I0XMzeedHktsuXW3VcTtj6JqYAAaYJAaLjjfrBbYPwCkAFE6oMEm8X4ERgJnuZNj04ogip7lUYEwzS+JXWRbjsYF4skm6C4uTHKN1Alftku6rPKu9Kign+lXkv01/GDZRP3GYOWVSkmhoA7AWQLhbPloXK+v9hzDbMTJJx8Txs+yjJ13wwIGsxP2yYOK6RKpkP6lj4i4AB04lmqNDdekDHpwfKIKmdS7CZp8Crc8pXrdn2W2P/tU3++ApeYjHpxgTCphRxyjTKYRHD9VVf11esFYvsb+Nz9fXdBN6rEGGXmKlz68M/D0S18RH59sfbG5X3+lv4Uj8ewSpqpdRVS/jmiX1oEMFJpOBj1yzK3LTh9vDN3y2N+qyGBnKqxMXrPt12jsmPfsIQPXlTzUlfnldErJTBDT7FaQmCeiIa+AMBe+WB1/dfCpiZYxAABgjgBEkDrjMXB2TYaibnW9996IhlpckgflljQZU0JEuq3F5lWfpX47UX6UTgH8d6V529dC0OwAo/QhaKvd7H3nrRNUczgk3Dsn96qYhBYsIaO1PHrdnjceG1mN3/rVh750TkrKaiy3p+wGqIiL4lTDMXA8dF42Fpszr3mvbuaQscnpMbaLVFNKiIKZB5Ax20Yih+tTABabcrdPNxS8D2ASAVFIhsIGRWdQ06j5Z0oH/GnT7g2/6Hv/428iQhjYFSRaOtCQBZgNTogkSd1XFLRvLoqM+2hEZtXCG+eo7LrM8CWA9AERiBBAs+0/Ek4MRjYXjZGsNaAM7JwxWzjFOEph5ULKQsfrPWQW/XRUYV3YiPmZnVdzR4FXBGBCIAH9aH8z7qjz6H5OG6+8ZlaPb99A8+wGnlVeLAmvjHD4AZQBkAnhrWEVTSMX0bEPcpGPxbkRIqBqv70hY3jnoH7KnMfzUz2MpWfOG2x8AEOrv5NR1xGCWhCnf1PlKj/vD4FzD5gbv7FlDUkZHZHVfkl7qk7+wovDGSBhRLYGVtSdmZputj05LyXgMgNrXWkSEtc1HuCceRECOsS5URUiNQ2IidFzM+Lr96NJP/GU3VUTrdDrOkW1wqoVShl/iQjROCUuj4kvaEzluL4uemFsRq5lytW3iCyMM2a9y8NiPIYPY9U7cdiT2yPOrAr/eWBY15GVIuH+u7fik4fqvh6aL+/US80XilPJdozxpR2X8ks/2Rty/+zAwuqZFeeex6+wPFt5at/zgW1nd8EwC71xyIESqqpdh1LOL/vOjwPLKWlnfHtEkb1BDe0iDKACjc3W4dooZy74OIRjRoGlAZa2Mo3VyptnArnLahKuSLZzMBqZcOMLQ8JubHFcw4Fi3kiUZOB6Y7Pjo4qGmlxIqCQAoKmvSd77E5BVH2u9/r8LnfrvcuzjPqdu5pyHy1s9GO/tEg8FWg7D2ROste5uD1rGpNsikYleT37Wt0XfTJVmufQMpOmcMbrMFteEOfFB7/G632bJvV5vng4Xugj4hmzHW1b9/Zhb0YIDzM1/Fa8tad17TLLdjsi03ON1WsL7YOOgTt951hAEdMqmOU4nm8RXR09dvDlfM+CZ00NmmBpYudlxsHGPIfa4bvfpzLsUnl/mx6CLLwt9/FPjVF/ujhivGGUMPXmV77bKxxtcZYzWf7A4jLUlAXZuCm0stf7m51FK4arvh4Zc/Dt6yclvYZTGwF1tWZ9d5fOq283EIA2ENAHfs/S5hOXgygXH5OswcbcCIbB0mDtNjXJ4Op5sVvL8ldGYM591mhRBqUVDTDAaVJJdNcKgamXszB0Rlanp+i2/fQ1MdZ+z9J8eCOx6ZnHKyPhh/Z3tdyLKjLrzgrrGu9wBEf0BjXIFZEkZtrvfP6kiomJ+XfjSiyNKL5dV5Wxra5l2S5Xo9rmrH+zttGhEuTs9S2uUofdF02pJjsT7zb8PGHvEmYoetotSPR9JTmRgA8F3Bk4++37rnmja5Awuc46sWuib8MkWyrj8SrVdkUiCAQyH1lEf2l81PmrKixJh9+6rA9n8vj1U7NocPPe6WUsojWvyTwVKKAMDYNX0cgHwGEZYudhQ89nf/45/vi5pmjjZGn73F8eSYXN1/qRq0nho0oUAPANQR1Sqvm2a+z2UTTu45Hp9lM3EWiVN2JE7b9NK5hy2ySlA1gAhwWDheu8eJicP0Zwmy831frTsi0MBABNK65jr7kD2xpgmPX5gMxhiICM+UpgHAV+MyTYc313RMOuGL5wFwEqH+7DWSDBK+qvEt2tUYSB3mMNGEdPsrEUWxZduMv9vR5Buyp9m/4Nd7qp7bMHfyAJ4wPItzhm86FvLd/HFjdUGOxfrsNYPybwUQ6BMVenwPKjGAYdoG/5F/ORVrwzzX6Lo70mYs2R86vS1FsqLYmHXmRBMRppqHA0CwQD/oldsdM2tq5VFTBcYBoLUiVoOYJv+sPHbydoVUjDBkf11iGPI0AAUA+JbDsTs+2R0pTnMIWHKFZfmYXN3rADTOe0LV992k5wAQLR1peO6XC+yX3zPbell2qrjCbDi/2FWjzhNDIDAOmPQ/PT9APfo5xtcRq463CJwhLKsGAHq1h8YRERIqgYjyNtf5r22OJHBhlqOyKNn8yfhU++ppGcmnajsi2Orx3rBh7uSM/mJ7xgCZNLnYnvzSwsH5G1TS8EHdsbn7/c0PnAls+88JkP29fOwN1ty0t6PGkWdMpSsdJa88dHLFtmm2/F6mpPu7xL/PBtTIrWufaH7nF3/xb/hFnORdV554FDVyy+gV7Vsnv+vfNPl4vGEKAKGbBr7raPza6kYZF44wtF09yfRGe1iTiXrHrz2bwHvJP9zVFUU7v82TBAaRM01gjEjr++Rzfm4ZL85BnIPYWSeLnWXzte8XSWqLKNmKRrDrhTCAiHAWv7d+fhR7PMH52xoCOW6rATOyHB/M+6TcwxirnjHIuSbFqMM2T1vxUX/H3DWnGhFT1f58BQ6gZcHg/CfnZOacOh7y8ZUNVQ+1xiOzvvU14qXqPf1H1bfWuY5GPFMDShRjzO4TRabMlW/k3TJg/qP7+WTTcHyT8zzezHxAzBSdNhrzjVVioqiSBhUahE5MtXV1k1hZJw8FA0bm6CpEgVUmmdlPylqVVcfPSxGSLRx6Hesw6JgaV0isrJWhlxhU7XslONGonPk9UDPqWNwgsYhK1BsVGLT7Zjqx7ngIDEAwruLGErtU5onevrUmXGSSOIpSjBUA2rrZ6j6h788pSv/93tobawJRLC5Or5uSkbRm7VWjha4/rPqi1rn405pG1zZP281LinI+6Ib6fpqwqbWu/LqsgqdPRwKvb2qtceSYbUvvzhlzrMSeUt2Pn0AaUUZjIpChYwKyDcmHADSeSxKs+/2awC4U6gffsD185IEoJbSIFs+OkwyNNByMnR7TqPg+U4lQbHDXiy3tKtdLDC4br+92mP4n0rgZTgECZ16HhccjMRLve8MLSey9rqISOqKdmqCpfUAvZ2AccFp5EEBHt60EAFUD4gqNuGO8/TZZJQ6AnCZufv9w+7QPK9vnHmiKSlfmW8MXui3Lvm0Iy5MGdfqaCZXwxWkf8pKMV26pC5SInMNhEI3/qPK8oGiaxhhBJzDRZdSJKhG2NbVNmOVOu8Qfl1eXOO39IthladkAsHzh4GHjGmKB+9d4jo0eYrb95orU3LsARPpChIiWMMQ0WZS4AAOTmtgfmUoP0DnLeFPoEJyCdfiGjrIL2tRgF0p2Urg5XJHEgAsABgINESWx014rKqQuNCX8DzSHhUMSWEOWS/CCwezr6P/oJ1s5Lh1jhF5iZ0yIqhG+PhiDP6QhyyXWAfB3Qz9jgD+m4jeb2i43iLgcjMAZoEFDW0RBTFVxWa41smSca6nbrlvvtut6ocHcXKftjfLGW456IzyuqXi1vM4lcJrNuAbGCIxr0KBBIUKFr12/o7lt8Q257vUAYgPxrJAml6a4n6+JBEa/WVM2fWVD5Q1uo21f8UePv4Lb38ba5sO9kY5LCT2XVIU0yKQ66QHiAM7ZCKeKduiZJKeJSdAxETKp8KkdIBCcghUG3sm3TTApYpZTjMdl0jf51RwA1v682f/fTerM9XuK3LpKs565o4m+9U/TAHeqiNfucSLZyjszhQCqPQp2VDYhxcZR7Jb2MVdlNNAwvDvNDM4Au57LegkyZ2CekGysCcSR59ThnvEphy4aYl6al6xfDUDpzukTESpaw3AYxNLNdYGJAgduGpbebNVzL4FYd4aSdXZqTyRS19U2uLZ6WktnDc6YFFGUzRkmY7/hYEs8grCS8MwfNOyJmmj7yk+bj2V86Kl8LHjzawdsqfatZ7s+AuMtLsnsTWiKo0kOFABIAuA71/1ZYJ8Gh2BZ9bPkS5sYGGrlloVv+TaWJkjBtfYph0cYst+IaQnVJdp8YpFbOiwJbFz5yURhIKyNDsVoS7pDOO+brwPVifNWhudXBmIXjTSszx8kXVFenTiTJziX69LVO8M43azg6kmm0IQC/YaTRwrOyJ4ISDIIeGyGc83oDP1rRBB21Ib/5fntrTe2x1QA6MhL1m9ViRQGBs6+56skxaxfXtly64HmkGFChi3yxMTs++168Zs+LuiUhnD0mtOh0J/2tfps25tab77SnbkNgNof7ZkGSycP7/58++F5Tz5XG/O/uLG1On2Iyf4czf7D9WtbjmhnsdqcZ0wp13MxrzLiKWyRgzMCSnStS7IOuD81cgtSBDtCWhQq1MqwFqt8ofVD3OucU8zBShkAA5PqRhqGvP5pcI8mMQF8SqFhVZFb0rZXxmwffxu5d5BTMAm8E3rP3nQiQlymnvcUzq6uF8//khEPX2vD5OH6tbPHGw/rJXbONmn3sTheW9cBp41j7kTjxtQkYXdOmviDPAMBda/vbt+qEm26foT90dvHOHaoGuGN/d6pHx8LLBUYM/EeB6spnEAwrk7cVBu4WNEIpe6kHXa9uB6AF0DzWd07yGxcc2Gm60CHLGNbU8scIioJycqPOnF0y8sotqa8fV1m0XKrqMPqpsqpO/21Txq4aOwhA1Yb92ljLINXDzelyxXheuM3gaqH8o1p6UYuoSkR6HN/AEAAh4nrMxnYNAJNLTa4Uz8L7oPIBG4TTLALZkhM5ADEubYJGGvKAx+Xp3vvmsmmfaEo4c8bOuZtORx7GIAuGqczk3d3AAhGNACwrt0VWXrPa97NT7zj33qkVl7c5FfPrxCCMehEhmdXtNfdMMP8/MwxhvBA1+zdG7b3eBz3ve5Fg1fBwunmmuummX97skmJ9nVvxAD+7LpmtEUUHG2L198x1vHwwhH2mrpAAm+WeRfvbYzc1zPKTDfr+Ja6wM3fNnbYR6SYlRlZSe9urm0Pa11Q3LMDwMsVx73T0l3v5dot+LalLW1bc+uN1jsf6g1djH7At0qEsCpHr0jNe3pe+vADLYkQVngO3SYwXko9MiJufTLc+uTPZjqGb9RxAWu8ZTO+bD/yBwOXMlqVYJ/78377VmRJrpKVgW3Ll7au+OKDwJYNIS165da836JAl/npncmXvXJ38qw/Fhncf+2VWVy3J1J/c6nl6aN18rIVW8LOX/+j/ckH5toGzZ9qehnA8T991qHlpImorJPx8DU2MdkqjF72TejRl9cG5x+plfmSKyx16Q7hkHrWTogCU4/WyZj7dFOfNv/eOTZ8fTCGX92QBAAfPDTPnhuX6VffHIzpzs4QMgCtQRUrtobxu48CaPAqWHSRpfX+ubZHFzzXsnfjs+kDKt3YjE67/chGz+67xyc/3tgh/3lDdcD6Zlnb4xmW9ONbakNr5w2zwywJIzbVBuYE4iouGpxUnu8wfp7vMPY77/0j8iEwtnZaeso9fz9ePXxbU8t8eufVPwOoGcjnFhjDas9RDLMkn7o2o/CJmpj/vU2+E8nEVJPWYxyB0JQIBmc7Sp5qTLTnrfbtG/ZWy5ZFLUogu9Re+Ao6KxF8bBFTaTmJADLGG/PmvuH9/MENoX0FnDFMMxd/7ZZSN2SIyfi8Y/8Xd9W/9kVEi+OtwfcjV/e93MQ5E0wAsP4X8+2PaYTffbQj4jjd7L3rywPRWVMK9ZtLhkhlOpF5x+fpUt/e2DFh6+H4RRv2R9PCMQ23zbQ0PDTPfu/Db/l2PzTPdkbj47KGE43y5SOyJWuxWzrb8jOTnql2E/uUM6FSI4AzqJeMMrxg1DmCg5wdT67bE0nxBrWuiiSgtlXBwt+2ouJ0AunJAh68yl61ZJbl0fxM3ad0JlJgCMTUsyJy6pVV+s/LMgDggyXjnMM84cRTn50IJGXZxBd+NT3j9L0bT5XfUOi6YXt9R0a+w4ALB9v/sXRXbduTk919OmbdoSp76a3aHYvmrfqyofGpnS0tuWVe3zVjnckvD1T/1TPMBbBhQUbxi/Xx9md2tddwxns7ghk6O9b7Kw7cmDLhLpGx19e1lxf+rXXr1N3h7y4oMg06liHZj376+j7/6vZvUxsU74jDsdO51QkPz9Q5MM82adO1tqn3tigBj56JuMo2EVcXTwIAXI+VfRemjMrRvf3sLQ5vbob4zOodkRF/+yrk/mBbeLHLxhfrREYxmVhrQEVCBorcEhbOsO26bablifRFtZtpfU63s8iIiJ9qUnDfG96rRM6u6iu1nJMu4vc/c8Sr6uXKIrcOikoQOBJTCvWv5GeKByYW6H++bm/k0v0nEpbWgAp/SINRp+K66eaWqyeZPlo43fzHl9YGq3oqQS97wCEKHOBgvNum9BC+Nt1t/sOSsc6CF3Y237jyqL8gyyb94Y3Lhz71m+1117eEZczNSz0+Ns2ydlSq+UdNXPj+22ASxRVT01LuWFtbk7mzpeWWsc7klQyMCYyBgwl9qURPZRhry3x1flrxWG9D6No2uaN7zJk221GCL9srt9yZNmOh25D81Obg0VlHY/WWw7G6EomzEoExqEyBBg0O0YRSy0hvqaVk2RRT4e+bFL/ny9AB3JJ08Y9dQ58hiL48EF3zHzc7Dlw62njjlsOxuQdPJoZ7fKolLpPgsHB5Qr4+OGqorrJ0pGHNxGH6FTuPxptofQ4AwG7m0Ilov3SM0ZOTLulYP9hIBJbm4LCZeHtmstBtRs4IpTWobb3nSuueKycYp289HLtu33eJGUYdi04u1H9xUYlhlc3ED3iDmtYTgbqbTmBgQOu1RZavpmcbXUMc0oGXF2T0Wj+hEmKK1nF9keMJgTF+OhB3O02iFpG1gmKX6dgvJma2TM2yLWfsphqi9340TDOJIgBUzXUP+uMgs3FettXkA2AutCftuDu/KDnPaqsC0NEfMsRVBR1qPHiZK/9XAmdCS6IjNceUXA/Aj65SMyLCpUlF8CqhillJI2+daBk69VCk9urqRPMEr9KRloAsGrgYT5eS6vP06TtHGXI+NnLdXoVUlYP/qBL8wOMkIsQSGkof84CI7PGENrbaI8+pOB2fX+2RZ2sajSQi6yNve6FqhLpW+cwGdo03EFEhEY0kopIBejERWfvyehOKBiLC4dNxEBEnogwicgGb0eBVOu8M+ohoznKcDERk7hrf679EhN0NYXhCCRCRjogsRGQiIqHrs89xPya3rvEWIjJ6IhFGRGLXb/1AcxERFh18H4c7mrrpthCRoSzY8AO6NeqUTV3c2/3MTkTZRJRLRFlEZEH5lfAqwR84keddxdxzYEdUQ6NXRUdMg83IkeUSe90S9tSy7nI3onNLTZ5J/HA2YK6i+2sv9O+vvnCAwovzqQI+n2rgc53rp9B9LrR33t+iV/r4/6Wa+Z/t/3j7b5ppLhaCbZ9oAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTE2VDEwOjI0OjAwKzAwOjAwoF3e8QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMy0xNlQxMDoyNDowMCswMDowMNEAZk0AAAAASUVORK5CYII=";
;// ./src/assets/img/app_logo_short.png
var app_logo_short_namespaceObject = __webpack_require__.p + "img/app_logo_short.9a39e333.png";
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSiderBar.vue?vue&type=template&id=b8dd2e86



const MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_1 = {
  class: "kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop",
  id: "kt_aside"
};
const MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_2 = {
  class: "kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid",
  id: "kt_aside_menu_wrapper"
};
const MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_3 = {
  id: "kt_aside_menu",
  class: "kt-aside-menu",
  "data-ktmenu-vertical": "1",
  "data-ktmenu-scroll": "1",
  "data-ktmenu-dropdown-timeout": "500"
};
const MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_4 = {
  class: "kt-menu__nav py-0"
};
const MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_5 = {
  id: "sidebar-home",
  class: "kt-menu__item kt-menu__item--active",
  "aria-haspopup": "true"
};
const MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_6 = {
  class: "kt-menu__link-text"
};
const _hoisted_7 = {
  ref: "sidebarlayer",
  id: "sidebarlayer"
};
const _hoisted_8 = {
  ref: "sidebarlayertree",
  id: "sidebarlayertree"
};
const _hoisted_9 = {
  class: "spanbuildversion",
  id: "spanbuildversion"
};
function MetroSiderBarvue_type_template_id_b8dd2e86_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MetroSiderMenu = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroSiderMenu");
  return (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_1, [_cache[3] || (_cache[3] = (0,runtime_core_esm_bundler/* createStaticVNode */.Fv)("<div class=\"kt-aside__brand kt-grid__item\" id=\"kt_aside_brand\"><div class=\"kt-aside__brand-logo\"><a href=\"/home\" class=\"homer-page-linker\" id=\"logobrandlinker\"><img id=\"imagelogobrand\" alt=\"Logo\" src=\"" + app_logo_title_namespaceObject + "\"></a></div><div class=\"kt-adside_brand-logo-short\"><a href=\"/home\" class=\"homer-page-linker\" id=\"logoshortlinker\"><img id=\"imagelogobrandshort\" alt=\"Logo\" src=\"" + app_logo_short_namespaceObject + "\"></a></div><div class=\"kt-aside__brand-tools\"><button class=\"kt-aside__brand-aside-toggler\" id=\"kt_aside_toggler\"><span><i class=\"la la-angle-double-left\"></i></span><span><i class=\"la la-angle-double-right\"></i></span></button></div></div>", 1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_4, [_cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createStaticVNode */.Fv)("<li class=\"kt-menu__item\" aria-haspopup=\"true\"><span id=\"menulinkspaner\" class=\"kt-menu__link\"><span class=\"kt-menu__link-text\"><div id=\"sidebarheader\" class=\"sidebar-header\"><div class=\"input-group-search has-search\"><span id=\"searchspan\" class=\"fa fa-search form-control-search\" aria-hidden=\"true\"></span><input type=\"text\" id=\"sidemenusearchtext\" class=\"form-control2 form-control-input-search input-md\" placeholder=\"Search\"></div></div></span></span></li>", 1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    onClick: _cache[0] || (_cache[0] = $event => $options.menuSelected('home')),
    class: "kt-menu__link home-page-linker",
    id: "homepagelinker"
  }, [_cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "kt-menu__link-icon"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "fa fa-home"
  })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroSiderBarvue_type_template_id_b8dd2e86_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.homepage_title), 1)])])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_7, null, 512), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_MetroSiderMenu, {
    ref: "siderMenu",
    lang: $setup.accessor.lang,
    menus: $setup.menus,
    metas: $setup.menuMetas,
    onItemMenuSelected: $options.itemMenuSelected,
    onGroupMenuSelected: $options.groupMenuSelected
  }, null, 8, ["lang", "menus", "metas", "onItemMenuSelected", "onGroupMenuSelected"])], 512), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_9, " Build : " + (0,shared_esm_bundler/* toDisplayString */.v_)($setup.buildVersion), 1)])])], 512)), [[runtime_dom_esm_bundler/* vShow */.aG, $props.visible]]);
}
;// ./src/components/menu/MetroSiderBar.vue?vue&type=template&id=b8dd2e86

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(2489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.to-array.js
var es_iterator_to_array = __webpack_require__(1806);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSiderMenu.vue?vue&type=template&id=3a7419d6

const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_1 = {
  id: "menuitemlist",
  class: "kt-menu__nav nav flex-column sidebar-nav navbar-nav list-sidebar bg-default",
  role: "menu"
};
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_2 = {
  key: 0,
  class: "kt-menu__item kt-menu__item--submenu",
  "aria-haspopup": "true",
  "data-ktmenu-submenu-toggle": "hover"
};
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_3 = ["onClick", "data-target"];
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_4 = {
  class: "kt-menu__link-icon"
};
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_5 = {
  class: "kt-menu__link-text"
};
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_6 = {
  class: "kt-menu__submenu"
};
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_7 = ["id"];
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_8 = {
  key: 1,
  class: "kt-menu__item kt-menu__item--submenu"
};
const MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_9 = ["onClick", "data-target"];
const _hoisted_10 = {
  class: "kt-menu__link-icon"
};
const _hoisted_11 = {
  class: "kt-menu__link-text"
};
const _hoisted_12 = {
  class: "kt-menu__submenu"
};
const _hoisted_13 = ["id"];
const _hoisted_14 = ["onClick", "data-pid", "data-url", "title", "data-tree"];
const _hoisted_15 = {
  class: "kt-menu__link-text"
};
function MetroSiderMenuvue_type_template_id_3a7419d6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MetroSiderMenuTree = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroSiderMenuTree");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("ul", MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_1, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($props.menus.sidemap, (value, key, counter) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
      key: key
    }, [$options.hasMenuTree(value) ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
      onClick: $event => _ctx.$emit('group-menu-selected', value),
      class: "kt-menu__link kt-menu__toggle",
      "data-toggle": "collapse",
      "data-target": '#submenu_' + counter,
      href: "javascript:void(0);"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)($options.getDisplayGroupStyle(value))
    }, _cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, null, -1)]), 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_5, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayGroupName(value)), 1), _cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
      class: "kt-menu__ver-arrow la la-angle-right"
    }, null, -1))], 8, MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_3), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_6, [_cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
      class: "kt-menu__arrow"
    }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", {
      id: 'submenu_' + counter,
      class: "kt-menu__subnav collapse",
      role: "menu"
    }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(value.jsonmenu.items, (menu, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_MetroSiderMenuTree, {
        key: index,
        menu: menu,
        onMenuSelected: $options.menuSelected,
        menuId: $options.getMenuId(),
        lang: $props.lang,
        treePath: $options.getTreePath(value)
      }, null, 8, ["menu", "onMenuSelected", "menuId", "lang", "treePath"]);
    }), 128))], 8, MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_7)])])) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_8, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
      onClick: $event => _ctx.$emit('group-menu-selected', value),
      class: "kt-menu__link kt-menu__toggle",
      "data-toggle": "collapse",
      "data-target": '#submenu_' + counter,
      href: "javascript:void(0);"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_10, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)($options.getDisplayGroupStyle(value))
    }, _cache[3] || (_cache[3] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, null, -1)]), 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_11, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayGroupName(value)), 1), _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
      class: "kt-menu__ver-arrow la la-angle-right"
    }, null, -1))], 8, MetroSiderMenuvue_type_template_id_3a7419d6_hoisted_9), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_12, [_cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
      class: "kt-menu__arrow"
    }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", {
      id: 'submenu_' + counter,
      class: "kt-menu__subnav collapse",
      role: "menu"
    }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($props.menus.sidelist[key], (item, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", {
        key: index,
        class: "kt-menu__item",
        "aria-haspopup": "true"
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
        href: "javascript:void(0);",
        onClick: $event => $options.itemMenuSelected(item),
        class: "fa-link-menu-tree kt-menu__link fa-link-menu-item menu-desktop",
        "data-pid": item.programid,
        "data-url": item.url,
        title: item.programid,
        "data-tree": $options.getTreePath(item)
      }, [_cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
        class: "kt-menu__link-bullet kt-menu__link-bullet--dot"
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span")], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_15, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayProgramName(item)), 1)], 8, _hoisted_14)]);
    }), 128))], 8, _hoisted_13)])]))], 64);
  }), 128))]);
}
;// ./src/components/menu/MetroSiderMenu.vue?vue&type=template&id=3a7419d6

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSiderMenuTree.vue?vue&type=template&id=249d08d3

const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_1 = {
  key: 0,
  class: "kt-menu__item",
  "aria-haspopup": "true"
};
const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_2 = ["data-pid", "title", "data-tree"];
const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_3 = {
  class: "kt-menu__link-text"
};
const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_4 = {
  key: 1,
  class: "dropdown kt-menu__item kt-menu__item--submenu",
  "aria-haspopup": "true",
  "data-ktmenu-submenu-toggle": "hover"
};
const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_5 = ["data-target"];
const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_6 = {
  class: "kt-menu__link-text"
};
const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_7 = {
  key: 0,
  class: "kt-menu__submenu"
};
const MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_8 = ["id"];
function MetroSiderMenuTreevue_type_template_id_249d08d3_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MetroSiderMenuTree = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroSiderMenuTree", true);
  return $options.hasProg ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0);",
    onClick: _cache[0] || (_cache[0] = $event => $options.menuClick($props.menu)),
    class: "fa-link-menu-tree kt-menu__link fa-link-menu-item menu-desktop",
    "data-pid": $props.menu.itemname,
    title: $props.menu.itemname,
    "data-tree": $props.treePath
  }, [_cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "kt-menu__link-bullet kt-menu__link-bullet--dot"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span")], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayMenuName($props.menu)), 1)], 8, MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_2)])) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    onClick: _cache[1] || (_cache[1] = $event => $options.groupClick($props.menu)),
    class: "kt-menu__link kt-menu__toggle",
    "data-toggle": "collapse",
    "data-target": '#submenu_' + $props.menuId,
    href: "javascript:void(0);"
  }, [_cache[3] || (_cache[3] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "kt-menu__link-icon"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-list-alt"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span")])], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)($props.menu.text), 1), _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "kt-menu__ver-arrow la la-angle-right"
  }, null, -1))], 8, MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_5), $options.hasItems ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_7, [_cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "kt-menu__arrow"
  }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", {
    id: 'submenu_' + $props.menuId,
    class: "sub-menu panel-collapse collapse",
    role: "menu"
  }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($props.menu.items, (item, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_MetroSiderMenuTree, {
      key: index,
      menu: item,
      menuId: $options.getMenuId(),
      onMenuSelected: $options.menuSelected,
      onGroupSelected: $options.groupSelected,
      lang: $props.lang,
      treePath: $options.getTreePath($props.menu)
    }, null, 8, ["menu", "menuId", "onMenuSelected", "onGroupSelected", "lang", "treePath"]);
  }), 128))], 8, MetroSiderMenuTreevue_type_template_id_249d08d3_hoisted_8)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]));
}
;// ./src/components/menu/MetroSiderMenuTree.vue?vue&type=template&id=249d08d3

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSiderMenuTree.vue?vue&type=script&lang=js


/* harmony default export */ var MetroSiderMenuTreevue_type_script_lang_js = ({
  name: 'MetroSiderMenuTree',
  props: {
    menu: Object,
    menuId: String,
    lang: String,
    treePath: String
  },
  setup() {
    return {
      progmap: progmap
    };
  },
  computed: {
    prog() {
      return this.progmap[this.menu.itemname];
    },
    hasItems() {
      return this.menu.items && this.menu.items.length > 0;
    },
    hasProg() {
      return this.menu.itemname && this.menu.itemname.trim().length > 0;
    }
  },
  methods: {
    getMenuId() {
      return (0,will_app/* randomNumber */.RZ)() + "_" + new Date().getTime();
    },
    getDisplayMenuName(item) {
      return this.$props.lang === 'TH' ? item.caption || item.text : item.text;
    },
    getTreePath(item) {
      return (this.$props.treePath ? this.$props.treePath : "") + this.getDisplayMenuName(item) + "#CUT#";
    },
    menuClick(item) {
      let prog = this.progmap[item.itemname];
      let tree = {
        caption: this.getDisplayMenuName(item),
        treepath: this.$props.treePath ? this.$props.treePath : ""
      };
      console.log("menu click", item, "prog", prog, "treepath", tree);
      this.$emit("menu-selected", prog, tree);
    },
    menuSelected(item, tree) {
      if (!tree) tree = {
        caption: this.getDisplayMenuName(item),
        treepath: this.$props.treePath ? this.$props.treePath : ""
      };
      console.log("menu selected", item, ", tree", tree);
      this.$emit("menu-selected", item, tree);
    },
    groupClick(item) {
      console.log("group click", item);
      this.$emit('group-selected', item);
    },
    groupSelected(item) {
      console.log("group selected", item);
      this.$emit('group-selected', item);
    }
  }
});
;// ./src/components/menu/MetroSiderMenuTree.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1241);
;// ./src/components/menu/MetroSiderMenuTree.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroSiderMenuTreevue_type_script_lang_js, [['render',MetroSiderMenuTreevue_type_template_id_249d08d3_render]])

/* harmony default export */ var MetroSiderMenuTree = (__exports__);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSiderMenu.vue?vue&type=script&lang=js


/* harmony default export */ var MetroSiderMenuvue_type_script_lang_js = ({
  components: {
    MetroSiderMenuTree: MetroSiderMenuTree
  },
  props: {
    menus: Object,
    metas: Object,
    lang: String
  },
  emits: ["group-menu-selected", "item-menu-selected"],
  methods: {
    getDisplayGroupStyle(item) {
      return item.groupstyle && item.groupstyle.trim().length > 0 ? item.groupstyle : "fa fa-tasks";
    },
    getDisplayGroupName(item) {
      return this.$props.lang === 'TH' ? item.nameth : item.nameen;
    },
    getDisplayProgramName(item) {
      return this.$props.lang === 'TH' ? item.prognameth : item.progname;
    },
    getTreePath(item) {
      return this.getDisplayGroupName(item) + "#CUT#";
    },
    itemMenuSelected(item) {
      let tree = {
        caption: this.getDisplayProgramName(item),
        treepath: this.getTreePath(item)
      };
      console.log("menu item selected", item, ", tree", tree);
      this.$emit("item-menu-selected", item, tree);
    },
    getMenuId() {
      return (0,will_app/* randomNumber */.RZ)() + "_" + new Date().getTime();
    },
    isMenuTree() {
      return this.$props.metas.MENU_TREE;
    },
    hasMenuTree(item) {
      return this.isMenuTree() && item.jsonmenu !== undefined;
    },
    getMenuTree(item) {
      let jsonmenu = undefined;
      if (item.menutext && item.menutext.trim().length > 0) {
        try {
          jsonmenu = JSON.parse(item.menutext);
        } catch (ex) {
          console.error(ex);
        }
      }
      return jsonmenu;
    },
    menuSelected(item, tree) {
      console.log("menu selected", item, ", tree", tree);
      this.$emit("item-menu-selected", item, tree);
    }
  }
});
;// ./src/components/menu/MetroSiderMenu.vue?vue&type=script&lang=js
 
;// ./src/components/menu/MetroSiderMenu.vue




;
const MetroSiderMenu_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroSiderMenuvue_type_script_lang_js, [['render',MetroSiderMenuvue_type_template_id_3a7419d6_render]])

/* harmony default export */ var MetroSiderMenu = (MetroSiderMenu_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSiderBar.vue?vue&type=script&lang=js














const buildVersion = "1.0.6";
const menuData = {
  sidemap: {},
  sidelist: {}
};
const metaData = {
  MENU_TREE: true
};
/* harmony default export */ var MetroSiderBarvue_type_script_lang_js = ({
  components: {
    MetroSiderMenu: MetroSiderMenu
  },
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: true
    }
  },
  setup() {
    const menus = (0,reactivity_esm_bundler/* ref */.KR)({
      ...menuData
    });
    const menuItems = (0,reactivity_esm_bundler/* ref */.KR)({
      ...menuData
    });
    const menuMetas = (0,reactivity_esm_bundler/* ref */.KR)({
      ...metaData
    });
    const searchingVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuFlip = (0,reactivity_esm_bundler/* ref */.KR)(true);
    return {
      buildVersion,
      accessor: accessor,
      favorite: favorite,
      menus,
      menuItems,
      menuMetas,
      searchingVisible,
      menuFlip,
      progmap: progmap,
      menulists: menulists,
      loaded: loaded
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initialize();
    });
  },
  methods: {
    reset() {
      console.log("SiderBar.vue: reset ...");
      this.menuItems = {
        ...menuData
      };
      this.menuMetas = {
        ...metaData
      };
      this.progmap = {};
    },
    initialize() {
      console.log("SiderBar: initialize ...");
      jquery_default()("#sidemenusearchtext").autocomplete({
        delay: 500,
        //delay keystroke to be search from server
        select: (event, ui) => {
          console.log("side menu search selected", JSON.stringify(ui.item));
          jquery_default()(ui.item["element"]).trigger("click");
          //let tree = {caption: this.$refs.siderMenu.getDisplayProgramName(ui.item.element), treepath: "Search Program#CUT#"};
          //this.itemMenuSelected(ui.item.element,tree);
        }
      });
    },
    menuSelected(menu) {
      this.$emit("menu-selected", menu);
    },
    displaySideBarMenu() {
      this.menuFlip = !this.menuFlip;
      this.searchingVisible = !this.searchingVisible;
    },
    collapseSideBarMenu() {
      this.searchingVisible = false;
      this.menuFlip = true;
    },
    setting(callback) {
      console.log("setting", this.accessor);
      this.loadSideBarMenu(callback);
    },
    show() {
      this.searchingVisible = false;
      this.menuFlip = true;
    },
    changeLanguage(lang) {
      console.log("SiderBar.vue: language changed", lang);
      this.changeSiderMenuLanguage(lang);
      this.buildSearching();
    },
    initSearching(lang) {
      let jsAry = Object.values(this.menuItems.sidelist).flat().map(item => {
        return {
          label: lang == "EN" ? item.progname : item.prognameth,
          element: item
        };
      });
      return jsAry;
    },
    initMenuItems(dataset) {
      if (!dataset) return;
      let sidelist = {};
      let progmap = {};
      for (let k in dataset.sidelist) {
        let ary = dataset.sidelist[k];
        for (let p of ary) {
          if (!progmap[p.programid]) {
            progmap[p.programid] = p;
          }
        }
      }
      //try to remove plugin program (progtype=I)
      for (let p in dataset.sidelist) {
        let ary = dataset.sidelist[p];
        let items = ary.filter(item => item.progtype != 'I');
        if (items.length == 0) {
          let it = dataset.sidemap[p];
          if (it) items = [it];
        }
        sidelist[p] = items;
      }
      for (let g in dataset.sidemap) {
        let item = dataset.sidemap[g];
        let jsonmenu = undefined;
        if (item.menutext && item.menutext.trim().length > 0) {
          try {
            jsonmenu = JSON.parse(item.menutext);
          } catch (ex) {
            console.error(ex);
          }
        }
        item.jsonmenu = jsonmenu;
      }
      this.progmap = progmap;
      this.menuItems = {
        sidemap: dataset.sidemap,
        sidelist: sidelist
      };
      console.log("initMenuItems: menu items", this.menuItems);
    },
    itemMenuSelected(item, tree) {
      if (!tree) {
        tree = {
          caption: this.$refs.siderMenu.getDisplayProgramName(item),
          treepath: this.$refs.siderMenu.getTreePath(item)
        };
      }
      openPage(item, this.accessor, this.favorite, tree);
    },
    groupMenuSelected(group) {
      console.log("grup-menu-selected", group);
    },
    loadSideBarMenu(callback) {
      this.loaded.reset();
      console.log("loadSideBarMenu: accessor", this.accessor, "callback", callback);
      let access_user = this.accessor.info?.userid;
      if (!access_user || access_user.trim().length == 0) return;
      let requestid = (0,will_app/* getRequestID */.Ro)();
      let language = this.accessor.lang;
      let params = {
        userid: access_user,
        language: language
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(params);
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/menuside/html",
        data: formdata.jsondata,
        headers: {
          ...formdata.headers,
          "x-request-id": requestid
        },
        type: "POST",
        dataType: "html",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        success: data => {
          jquery_default()("#sidebarlayer").html(data);
          this.bindingHtmlMenus();
          this.loaded.htmlloaded = true;
          if (callback) callback(this.loaded.success());
        }
      });
      this.loadSideBarMenuItem(callback);
    },
    loadSideBarMenuItem(callback) {
      console.log("loadSideBarMenuItem: accessor", this.accessor);
      let access_user = this.accessor.info?.userid;
      if (!access_user || access_user.trim().length == 0) return;
      let requestid = (0,will_app/* getRequestID */.Ro)();
      let language = this.accessor.lang;
      let params = {
        userid: access_user,
        language: language
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(params);
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/menu/side",
        data: formdata.jsondata,
        headers: {
          ...formdata.headers,
          "x-request-id": requestid
        },
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        success: data => {
          console.log("loadSideBarMenuItem: success", data);
          if (data.body?.dataset) {
            this.menuMetas = {
              ...metaData,
              ...data.body?.meta
            };
            this.initMenuItems(data.body.dataset);
            this.menulists = this.initSearching(language);
            this.loaded.itemloaded = true;
            if (callback) callback(this.loaded.success(), this.menulists);
          }
        }
      });
    },
    bindingHtmlMenus() {
      this.buildSearching();
      jquery_default()("#sidebarlayer").find("a.fa-link-menu-item").each((index, element) => {
        let $e = jquery_default()(element);
        $e.on("click", () => {
          let pid = $e.attr("data-pid");
          let item = this.progmap[pid];
          console.log("menu item click: ", pid, ":", item);
          if (item) {
            let tree = {
              caption: this.$refs.siderMenu.getDisplayProgramName(item),
              treepath: $e.attr("data-tree")
            };
            this.itemMenuSelected(item, tree);
          }
        });
      });
    },
    buildSearching() {
      let jsAry = jquery_default().map(jquery_default()("#sidebarlayer").find("a.menu-desktop").toArray(), function (element) {
        let e = jquery_default()(element);
        return {
          label: e.text().trim(),
          element: e
        };
      });
      jquery_default()("#sidemenusearchtext").autocomplete("option", "source", jsAry);
      return jsAry;
    },
    changeSiderMenuLanguage(lang) {
      lang = lang.toLowerCase();
      jquery_default()("#sidebarlayer").find("span.span-menu-label").each(function (index, element) {
        let e = jquery_default()(element);
        let text = e.attr("data-" + lang);
        if (text) e.html(text);
      });
    },
    openFirstPage(success, menulists) {
      let page = this.accessor.info?.firstpage || "worklist";
      console.log("openFirstPage:", page, "success", success);
      if (!success) return false;
      if (!menulists) menulists = this.menulists;
      if (menulists && page && page.trim().length > 0) {
        let prog = menulists.find(item => item.element.programid == page);
        console.log("openFirstPage: prog", prog);
        if (prog) {
          let treepath = null;
          let pages = jquery_default()("a[data-pid=" + page + "]", jquery_default()("#sidebarlayer"));
          if (pages && pages.length > 0) {
            treepath = pages.eq(0).attr("data-tree");
          }
          let tree = {
            caption: this.$refs.siderMenu.getDisplayProgramName(prog.element),
            treepath: treepath
          };
          openPage(prog.element, this.accessor, this.favorite, tree);
          if (!(String((0,will_app/* getMetaInfo */.Ch)().DISPLAY_WORKLIST_SUBHEADER) == "true")) {
            jquery_default()("#kt_subheader").addClass("dp-none");
            jquery_default()("#kt_content").addClass("no-subheader");
          }
          return true;
        }
      }
      return false;
    }
  }
});
;// ./src/components/menu/MetroSiderBar.vue?vue&type=script&lang=js
 
;// ./src/components/menu/MetroSiderBar.vue




;
const MetroSiderBar_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroSiderBarvue_type_script_lang_js, [['render',MetroSiderBarvue_type_template_id_b8dd2e86_render]])

/* harmony default export */ var MetroSiderBar = (MetroSiderBar_exports_);
;// ./src/assets/img/avatar.png
var avatar_namespaceObject = __webpack_require__.p + "img/avatar.8af1a754.png";
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroHeaderBar.vue?vue&type=template&id=c5dc49b4


const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_1 = {
  id: "kt_header",
  class: "kt-header kt-grid__item kt-header--fixed"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_2 = {
  class: "kt-header__topbar"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_3 = {
  class: "kt-header__topbar-item dropdown"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_4 = {
  class: "kt-header__topbar-wrapper",
  "data-toggle": "dropdown",
  "data-offset": "50px,0px",
  "aria-expanded": "false",
  id: "chat_select",
  title: "Chat"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_5 = {
  class: "kt-header__topbar-item dropdown",
  id: "notificationheader"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_6 = {
  class: "dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_7 = {
  class: "kt-header__topbar-item dropdown"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_8 = {
  class: "dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_9 = {
  class: "kt-header__topbar-item kt-header__topbar-item--langs"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_10 = {
  class: "kt-header__topbar-wrapper",
  "data-toggle": "dropdown",
  "data-offset": "10px,0px",
  title: "Language"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_11 = {
  class: "kt-header__topbar-icon"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_12 = {
  class: "dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_13 = {
  class: "kt-nav kt-margin-t-10 kt-margin-b-10"
};
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_14 = ["onClick"];
const MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_15 = {
  class: "kt-nav__link-icon"
};
const _hoisted_16 = {
  class: "kt-nav__link-text font-size-custom-h-14 lang-word"
};
const _hoisted_17 = {
  class: "kt-header__topbar-item kt-header__topbar-item--user"
};
const _hoisted_18 = {
  class: "kt-header__topbar-wrapper",
  "data-toggle": "dropdown",
  "data-offset": "0px,0px",
  title: "Menu"
};
const _hoisted_19 = {
  class: "kt-header__topbar-user"
};
const _hoisted_20 = {
  class: "kt-header__topbar-welcome kt-hidden-mobile font-size-custom-h2"
};
const _hoisted_21 = {
  class: "kt-header__topbar-username kt-hidden-mobile font-size-custom-d2",
  id: "accessor_label"
};
const _hoisted_22 = {
  class: "dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg"
};
const _hoisted_23 = {
  id: "user_card_cover_layer",
  class: "kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x"
};
const _hoisted_24 = {
  class: "kt-user-card__name kt-notification__item-details"
};
const _hoisted_25 = {
  class: "kt-notification__item-title kt-font-bold font-size-custom-h2",
  id: "name_profile"
};
const _hoisted_26 = ["title"];
const _hoisted_27 = {
  id: "last_access_label"
};
const _hoisted_28 = {
  class: "kt-notification"
};
const _hoisted_29 = {
  class: "kt-notification__item-details"
};
const _hoisted_30 = {
  class: "kt-notification__item-title kt-font-bold font-size-custom-h-14"
};
const _hoisted_31 = {
  class: "kt-notification__item-details"
};
const _hoisted_32 = {
  class: "kt-notification__item-title kt-font-bold font-size-custom-h-14"
};
const _hoisted_33 = {
  class: "kt-notification__custom kt-space-between"
};
function MetroHeaderBarvue_type_template_id_c5dc49b4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MetroNotifyMenu = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroNotifyMenu");
  const _component_MetroFavorMenu = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("MetroFavorMenu");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_1, [_cache[13] || (_cache[13] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-header-menu-wrapper",
    id: "kt_header_menu_wrapper"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "kt_header_menu",
    class: "kt-header-menu kt-header-menu-mobile kt-header-menu--layout-default"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", {
    class: "kt-menu__nav"
  })])], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_2, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.openChat && $options.openChat(...args)),
    id: "chatmenuitemlink",
    class: "kt-header__topbar-icon kt-pulse kt-pulse--brand flaticon2-talk"
  })]), _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg"
  }, null, -1))], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $props.chatEnable]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_5, [_cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-header__topbar-wrapper",
    "data-toggle": "dropdown",
    "data-offset": "30px,0px",
    "aria-expanded": "false",
    id: "noti_select",
    title: "Notification"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "kt-header__topbar-icon kt-pulse kt-pulse--brand flaticon2-notification"
  }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "kt-badge kt-badge--danger noti-number",
    id: "noti_number"
  })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("form", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_MetroNotifyMenu, {
    ref: "notifyMenu",
    visible: $setup.notifyVisible,
    labels: $props.labels
  }, null, 8, ["visible", "labels"])])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $props.notifyEnable]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_7, [_cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "favor_menu_id",
    class: "kt-header__topbar-wrapper",
    "data-toggle": "dropdown",
    "data-offset": "30px,0px",
    "aria-expanded": "true",
    title: "Favorite"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "kt-header__topbar-icon flaticon2-menu-4"
  })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_8, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("form", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_MetroFavorMenu, {
    ref: "favorMenu",
    visible: $setup.favorVisible,
    labels: $props.labels
  }, null, 8, ["visible", "labels"])])])]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_10, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
    id: "languageimage",
    alt: "Language",
    title: "Language",
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["img-lang", 'img-lang-' + $options.getCurrentLanguage()])
  }, null, 2)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_13, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.multiLanguages, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", {
      key: item.lang,
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["li-lang kt-nav__item", $options.isLanguage(item.lang) ? 'kt-nav__item--active' : ''])
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
      href: "javascript:void(0)",
      onClick: $event => $options.changeLanguage(item.lang),
      class: "kt-nav__link lang-linker"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_15, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["img-lang", 'img-lang-' + item.lang])
    }, null, 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_16, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels[item.label]), 1)], 8, MetroHeaderBarvue_type_template_id_c5dc49b4_hoisted_14)], 2);
  }), 128))])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $props.languageEnable]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_17, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_18, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_19, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_20, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.greet_menu), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_21, (0,shared_esm_bundler/* toDisplayString */.v_)($options.accessorFullName), 1), _cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
    alt: "Avatar",
    src: avatar_namespaceObject,
    id: "fs_image_profile_select"
  }, null, -1))])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_22, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_23, [_cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-user-card__avatar"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
    alt: "Avatar",
    src: avatar_namespaceObject,
    id: "fs_image_profile"
  })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_24, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_25, (0,shared_esm_bundler/* toDisplayString */.v_)($options.accessorFullName), 1), _cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-notification__item-time font-size-custom-d2",
    id: "rolename_profile"
  }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-notification__item-time font-size-custom-d2",
    title: $props.labels.lastaccess_label
  }, [_cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    id: "lastclock",
    class: "fa fa-clock-o fas fa-clock"
  }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_27, (0,shared_esm_bundler/* toDisplayString */.v_)($options.lastAccessTime), 1)], 8, _hoisted_26)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_28, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    onClick: _cache[1] || (_cache[1] = $event => $options.menuSelected('changepassword')),
    class: "kt-notification__item",
    id: "accessor_change_link"
  }, [_cache[11] || (_cache[11] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-notification__item-icon"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "fa fa-lock kt-font-danger"
  })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_29, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_30, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.changepwd_label), 1)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    onClick: _cache[2] || (_cache[2] = $event => $options.menuSelected('profile')),
    class: "kt-notification__item",
    id: "accessor_profile_link"
  }, [_cache[12] || (_cache[12] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-notification__item-icon"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "fa fa-cog"
  })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_31, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_32, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.profile_label), 1)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_33, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    onClick: _cache[3] || (_cache[3] = $event => $options.menuSelected('logout')),
    id: "accessor_logout_link",
    class: "btn btn-label btn-label-brand btn-sm btn-bold font-size-custom-h-14"
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.logout_label), 1)])])])])])]);
}
;// ./src/components/menu/MetroHeaderBar.vue?vue&type=template&id=c5dc49b4

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroFavorMenu.vue?vue&type=template&id=6cbf93b2

const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_1 = {
  id: "header_cover_layer",
  class: "kt-head kt-head--skin-dark"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_2 = {
  class: "kt-head__title font-size-custom-h2"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_3 = {
  id: "favornewitemlayer"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_4 = ["value"];
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_5 = {
  id: "favorbarmenu",
  class: "kt-grid-nav kt-grid-nav--skin-light"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_6 = ["onClick", "seqno"];
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_7 = {
  class: "kt-grid-nav__title font-size-custom-h-14"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_8 = ["onClick", "seqno"];
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_9 = {
  class: "kt-grid-nav__icon"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_10 = ["src"];
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_11 = {
  class: "kt-grid-nav__title font-size-custom-h-14"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_12 = {
  class: "todo-span"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_13 = {
  class: "todo"
};
const MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_14 = ["onClick"];
function MetroFavorMenuvue_type_template_id_6cbf93b2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_2, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.favorite_title) + " ", 1), _cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "kt-space-15"
  }, null, -1)), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    onClick: _cache[0] || (_cache[0] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.cancelNewFavorClick && $options.cancelNewFavorClick(...args), ["stop"])),
    id: "favorcancelitem",
    class: "btn btn-danger btn-icon",
    title: "Close New Favorite"
  }, _cache[4] || (_cache[4] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-times-circle"
  }, null, -1)])), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("select", {
    id: "favorprogitem",
    class: "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.favorProg = $event),
    onClick: _cache[2] || (_cache[2] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)(() => {}, ["stop"]))
  }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.favorite.proglists, (item, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("option", {
      key: index,
      value: item.programid
    }, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayProgramName(item)), 9, MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_4);
  }), 128))], 512), [[runtime_dom_esm_bundler/* vModelSelect */.u1, $setup.favorProg]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    onClick: _cache[3] || (_cache[3] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.addFavorItemClick && $options.addFavorItemClick(...args), ["stop"])),
    id: "favornewitem",
    class: "btn btn-success btn-icon",
    title: "Add New Favorite"
  }, _cache[5] || (_cache[5] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-plus"
  }, null, -1)]))], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.newFavorVisible]])])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_5, [!$options.isFavorEmpty() ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
    key: 0
  }, (0,runtime_core_esm_bundler/* renderList */.pI)(3, jdx => {
    return (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      class: "kt-grid-nav__row",
      key: jdx
    }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(3, idx => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
        key: (jdx - 1) * 3 + (idx - 1)
      }, [$options.isNewFavorByIndex((jdx - 1) * 3 + (idx - 1)) ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("a", {
        key: 0,
        href: "javascript:void(0)",
        onClick: (0,runtime_dom_esm_bundler/* withModifiers */.D$)($event => $options.newFavorItemClickByIndex((jdx - 1) * 3 + (idx - 1)), ["stop"]),
        class: "kt-grid-nav__item tile fa-box-title fav-blank",
        title: "New Favorite",
        seqno: $options.getFavorSeqnoByIndex((jdx - 1) * 3 + (idx - 1))
      }, [_cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
        class: "kt-grid-nav__icon"
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
        class: "fa fa-app-image img-favor-icon",
        alt: ""
      })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.newfavorite_title), 1)], 8, MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_6)) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("a", {
        key: 1,
        href: "javascript:void(0)",
        onClick: $event => $options.openFavorItemClickByIndex((jdx - 1) * 3 + (idx - 1)),
        class: "kt-grid-nav__item tile fa-box-title fav-app",
        seqno: $options.getFavorSeqnoByIndex((jdx - 1) * 3 + (idx - 1))
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
        class: "fa fa-app-image",
        src: $options.getFavorIconByIndex((jdx - 1) * 3 + (idx - 1)),
        alt: ""
      }, null, 8, MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_10), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_11, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayFavorNameByIndex((jdx - 1) * 3 + (idx - 1))), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_13, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", {
        onClick: (0,runtime_dom_esm_bundler/* withModifiers */.D$)($event => $options.deleteFavorItemClickByIndex((jdx - 1) * 3 + (idx - 1)), ["stop"])
      }, _cache[8] || (_cache[8] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
        class: "img-delete-icon",
        title: "Delete",
        width: "25px",
        height: "25px"
      }, null, -1)]), 8, MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_14)])])], 8, MetroFavorMenuvue_type_template_id_6cbf93b2_hoisted_8))], 64);
    }), 64))]);
  }), 64)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])], 64);
}
;// ./src/components/menu/MetroFavorMenu.vue?vue&type=template&id=6cbf93b2

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroFavorMenu.vue?vue&type=script&lang=js










/* harmony default export */ var MetroFavorMenuvue_type_script_lang_js = ({
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: true
    }
  },
  setup() {
    const newFavorVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const favorProg = (0,reactivity_esm_bundler/* ref */.KR)(null);
    const currentFavor = (0,reactivity_esm_bundler/* ref */.KR)(null);
    return {
      accessor: accessor,
      favorite: favorite,
      newFavorVisible,
      favorProg,
      currentFavor
    };
  },
  methods: {
    reset() {
      console.log("FavorMenu.vue: reset ...");
      this.favorite.reset();
    },
    isFavorEmpty() {
      return this.favorite.favorlists.length == 0;
    },
    getFavorItem(index) {
      return this.favorite.favorlists[index];
    },
    getFavorIcon(item) {
      return item.iconfile && item.iconfile.trim().length > 0 ? (0,will_app/* getImgUrl */.xn)() + "/img/apps/" + item.iconfile : this.getDefaultFavorIcon(item);
    },
    getFavorSeqno(item, index) {
      return item.seqno ? item.seqno : index;
    },
    getDefaultFavorIcon(item) {
      return item.type == 'new' ? (0,will_app/* getImgUrl */.xn)() + "/img/apps/favorite.png" : (0,will_app/* getImgUrl */.xn)() + "/img/apps/application.png";
    },
    getDisplayFavorName(item) {
      return this.accessor.lang === 'TH' ? item.shortnameth : item.shortname;
    },
    getDisplayProgramName(item) {
      return this.accessor.lang === 'TH' ? item.shortnameth : item.shortname;
    },
    setting() {
      console.log("FavorMenu: setting, accessor", this.accessor);
      this.loadFavorMenu();
      this.loadProgramItems();
    },
    loadFavorMenu() {
      console.log("loadFavorMenu: accessor", this.accessor);
      let info = this.accessor.info;
      let access_user = info?.userid;
      if (!access_user || access_user.trim().length == 0) return;
      let requestid = (0,will_app/* getRequestID */.Ro)();
      let language = this.accessor.lang;
      let params = {
        userid: access_user,
        language: language
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(params);
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/menu/favor",
        data: formdata.jsondata,
        headers: {
          ...formdata.headers,
          "x-request-id": requestid
        },
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        success: data => {
          console.log("loadFavorMenu: success", data);
          let dataset = data.body?.dataset;
          if (dataset) {
            let rows = dataset.rows;
            if (rows) {
              for (let idx = rows.length + 1; idx <= 9; idx++) {
                rows.push({
                  type: "new",
                  seqno: idx
                });
              }
              this.favorite.setFavorLists(rows);
            }
          }
        }
      });
    },
    loadProgramItems() {
      console.log("loadProgramItems: accessor", this.accessor);
      let requestid = (0,will_app/* getRequestID */.Ro)();
      let access_user = this.accessor.info?.userid;
      if (!access_user || access_user.trim().length == 0) return;
      let formdata = (0,will_app/* serializeParameters */.L3)({
        userid: access_user
      });
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/menu/favorprog",
        data: formdata.jsondata,
        headers: {
          ...formdata.headers,
          "x-request-id": requestid
        },
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        success: data => {
          console.log("loadProgramItems: success", data);
          if (data.body?.rows) {
            this.favorite.setProgLists(data.body.rows);
          }
        }
      });
    },
    cancelNewFavorClick() {
      this.newFavorVisible = false;
    },
    addFavorItemClick() {
      console.log("addFavorItem: current favor", this.currentFavor);
      console.log("addFavorItem: favor prog", this.favorProg);
      if (this.currentFavor && this.favorProg) {
        let prog = this.favorite.proglists.find(item => item.programid == this.favorProg);
        console.log("addFavorItem: prog item", prog);
        if (!prog) return;
        let fs_user = this.accessor.info?.userid;
        let fs_prog = prog.programid;
        let fs_seqno = this.currentFavor.seqno;
        let params = {
          userid: fs_user,
          programid: fs_prog,
          seqno: fs_seqno
        };
        let formdata = (0,will_app/* serializeParameters */.L3)(params);
        jquery_default().ajax({
          url: (0,will_app/* getApiUrl */.e9)() + "/api/menu/insert",
          data: formdata.jsondata,
          headers: formdata.headers,
          type: "POST",
          dataType: "html",
          contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
          error: function (transport, status, errorThrown) {
            (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
          },
          success: () => {
            Object.assign(this.currentFavor, prog);
            this.currentFavor.type = "add";
            this.newFavorVisible = false;
          }
        });
      }
    },
    newFavorItemClick(item) {
      console.log("newFavorItem: item", item);
      this.currentFavor = item;
      this.newFavorVisible = true;
    },
    openFavorItemClick(item) {
      console.log("openFavorItem: item", item);
      openPage(item, this.accessor, this.favorite, {
        caption: this.getDisplayProgramName(item),
        treepath: "Shortcut Program#CUT#"
      });
    },
    deleteFavorItemClick(item, index) {
      console.log("deleteFavorItem: item", item);
      let fs_user = this.accessor.info?.userid;
      let fs_seqno = item.seqno ? item.seqno : index;
      let params = {
        userid: fs_user,
        programid: item.programid,
        seqno: fs_seqno
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(params);
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/menu/remove",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "html",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: () => {
          item.type = "new";
        }
      });
    },
    newFavorItemClickByIndex(index) {
      this.newFavorItemClick(this.getFavorItem(index));
    },
    getFavorSeqnoByIndex(index) {
      return this.getFavorSeqno(this.getFavorItem(index), index);
    },
    openFavorItemClickByIndex(index) {
      this.openFavorItemClick(this.getFavorItem(index));
    },
    getFavorIconByIndex(index) {
      return this.getFavorIcon(this.getFavorItem(index));
    },
    deleteFavorItemClickByIndex(index) {
      this.deleteFavorItemClick(this.getFavorItem(index), index);
    },
    getDisplayFavorNameByIndex(index) {
      return this.getDisplayFavorName(this.getFavorItem(index));
    },
    isNewFavorByIndex(index) {
      let item = this.getFavorItem(index);
      return item?.type == 'new';
    }
  }
});
;// ./src/components/menu/MetroFavorMenu.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroFavorMenu.vue?vue&type=style&index=0&id=6cbf93b2&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/menu/MetroFavorMenu.vue?vue&type=style&index=0&id=6cbf93b2&lang=css

;// ./src/components/menu/MetroFavorMenu.vue




;


const MetroFavorMenu_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroFavorMenuvue_type_script_lang_js, [['render',MetroFavorMenuvue_type_template_id_6cbf93b2_render]])

/* harmony default export */ var MetroFavorMenu = (MetroFavorMenu_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroNotifyMenu.vue?vue&type=template&id=3606cbce

const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_1 = {
  id: "noti_cover_layer",
  class: "kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_2 = {
  class: "kt-head__title font-size-custom-h2"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_3 = {
  class: "btn btn-success btn-sm btn-bold btn-font-md font-size-custom-h2"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_4 = {
  id: "tabitemlisting",
  class: "nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x",
  role: "tablist"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_5 = {
  class: "nav-item"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_6 = {
  class: "nav-link active show font-size-custom-h-14",
  "data-toggle": "tab",
  href: "#topbar_notifications_notifications",
  role: "tab",
  "aria-selected": "true",
  id: "noti_tab_lastest"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_7 = {
  class: "nav-item"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_8 = {
  class: "nav-link font-size-custom-h-14",
  "data-toggle": "tab",
  href: "#topbar_notifications_events",
  role: "tab",
  "aria-selected": "false",
  id: "noti_tab_weeks"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_9 = {
  class: "nav-item"
};
const MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_10 = {
  class: "nav-link font-size-custom-h-14",
  "data-toggle": "tab",
  href: "#topbar_notifications_logs",
  role: "tab",
  "aria-selected": "false",
  id: "noti_tab_months"
};
function MetroNotifyMenuvue_type_template_id_3606cbce_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_2, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.notification_title) + " ", 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_3, [_cache[0] || (_cache[0] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    id: "noti_numberlist"
  }, "0", -1)), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" " + (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.newnotifications), 1)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.lastest_title), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_8, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.weekly_title), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", MetroNotifyMenuvue_type_template_id_3606cbce_hoisted_10, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.monthly_title), 1)])])]), _cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "tab-content"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "tab-pane active show",
    id: "topbar_notifications_notifications",
    role: "tabpanel"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll",
    "data-scroll": "true",
    "data-height": "300",
    "data-mobile-height": "200",
    id: "noti_lastest"
  })]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "tab-pane",
    id: "topbar_notifications_events",
    role: "tabpanel"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll",
    "data-scroll": "true",
    "data-height": "300",
    "data-mobile-height": "200",
    id: "noti_weeks"
  })]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "tab-pane",
    id: "topbar_notifications_logs",
    role: "tabpanel"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll",
    "data-scroll": "true",
    "data-height": "300",
    "data-mobile-height": "200",
    id: "noti_months"
  })])], -1))], 64);
}
;// ./src/components/menu/MetroNotifyMenu.vue?vue&type=template&id=3606cbce

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroNotifyMenu.vue?vue&type=script&lang=js
/* harmony default export */ var MetroNotifyMenuvue_type_script_lang_js = ({
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: true
    }
  }
});
;// ./src/components/menu/MetroNotifyMenu.vue?vue&type=script&lang=js
 
;// ./src/components/menu/MetroNotifyMenu.vue




;
const MetroNotifyMenu_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroNotifyMenuvue_type_script_lang_js, [['render',MetroNotifyMenuvue_type_template_id_3606cbce_render]])

/* harmony default export */ var MetroNotifyMenu = (MetroNotifyMenu_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroHeaderBar.vue?vue&type=script&lang=js







/* harmony default export */ var MetroHeaderBarvue_type_script_lang_js = ({
  components: {
    MetroFavorMenu: MetroFavorMenu,
    MetroNotifyMenu: MetroNotifyMenu
  },
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: true
    },
    chatEnable: {
      type: [String, Boolean],
      default: false
    },
    notifyEnable: {
      type: [String, Boolean],
      default: false
    },
    languageEnable: {
      type: [String, Boolean],
      default: true
    }
  },
  emits: ["language-changed", "menu-selected"],
  setup() {
    const languageVisible = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const favorVisible = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const notifyVisible = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const multiLanguages = (0,reactivity_esm_bundler/* ref */.KR)((0,will_app/* getMultiLanguagesModel */.Hx)());
    return {
      accessor: accessor,
      languageVisible,
      favorVisible,
      notifyVisible,
      multiLanguages
    };
  },
  created() {
    (0,will_app/* registerNotification */.jU)((action, data) => {
      console.log("registerNotification: " + action, data);
      if ("multi-languages" == action) {
        this.multiLanguages = (0,will_app/* getMultiLanguagesModel */.Hx)(data);
      }
    });
  },
  computed: {
    accessorFullName() {
      if (this.accessor.info?.displayname && this.accessor.info?.displayname.trim().length > 0) return this.accessor.info?.displayname;
      if (this.accessor.info?.name && this.accessor.info?.surname) return this.accessor.info?.name + " " + this.accessor.info?.surname;
      return this.accessor.info?.username ? this.accessor.info?.username : "";
    },
    lastAccessTime() {
      return this.accessor.info?.accessdate && this.accessor.info?.accesstime ? this.accessor.info?.accessdate + " " + this.accessor.info?.accesstime : "";
    }
  },
  methods: {
    isLanguage(lang) {
      return lang == accessor.lang || lang == (0,will_app/* getDefaultLanguage */.i5)();
    },
    getCurrentLanguage() {
      return accessor.lang || (0,will_app/* getDefaultLanguage */.i5)();
    },
    reset() {
      console.log("HeaderBar: reset ...");
      this.$refs.favorMenu.reset();
      this.clearAvatar();
    },
    menuSelected(menu) {
      this.$emit("menu-selected", menu);
    },
    changeLanguage(lang) {
      console.log("change language: ", lang);
      (0,will_app/* setDefaultLanguage */.Qq)(lang);
      this.accessor.lang = lang;
      this.$emit('language-changed', lang);
      (0,will_app/* sendMessageToFrame */.G0)({
        type: "language",
        language: lang
      });
    },
    setting(callback) {
      console.log("HeaderBar: setting, accessor", this.accessor, "callback", callback);
      let avatar = this.accessor.info?.avatar;
      if (avatar && avatar.trim().length > 0) {
        this.showAvatar(avatar);
      } else {
        this.fetchAvatar(this.accessor.info?.userid, this.accessor.info?.photoimage);
      }
      this.$refs.favorMenu.setting();
    },
    showLanguage() {
      this.languageVisible = true;
    },
    hideLanguage() {
      this.languageVisible = false;
    },
    showFavorite() {
      this.favorVisible = true;
    },
    hideFavorite() {
      this.favorVisible = false;
    },
    displaySideBar() {
      console.log("displaySideBar ...");
    },
    collapseSideBar() {
      console.log("collapseSideBar ...");
    },
    openChat() {
      this.$emit('open-chat');
    },
    clearAvatar() {
      this.showAvatar((0,will_app/* getImgUrl */.xn)() + "/img/avatar.png");
    },
    showAvatar(avatar) {
      if (!avatar || avatar.trim().length == 0) return;
      let data = avatar.indexOf("data:") >= 0;
      avatar = data ? avatar : (0,will_app/* getImgUrl */.xn)() + avatar;
      jquery_default()("#fs_image_profile_select").attr("src", avatar);
      jquery_default()("#fs_image_profile").attr("src", avatar);
    },
    fetchAvatar(userid, photoimage) {
      let authtoken = (0,will_app/* getAccessorToken */.fD)();
      console.log("fetchAvatar: userid=" + userid);
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/avatar/image",
        data: JSON.stringify({
          userid: userid,
          photoimage: photoimage
        }),
        headers: {
          "authtoken": authtoken
        },
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        success: data => {
          this.showAvatar(data?.avatar);
        }
      });
    }
  }
});
;// ./src/components/menu/MetroHeaderBar.vue?vue&type=script&lang=js
 
;// ./src/components/menu/MetroHeaderBar.vue




;
const MetroHeaderBar_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroHeaderBarvue_type_script_lang_js, [['render',MetroHeaderBarvue_type_template_id_c5dc49b4_render]])

/* harmony default export */ var MetroHeaderBar = (MetroHeaderBar_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroHeaderBarMobile.vue?vue&type=template&id=566ff935


const MetroHeaderBarMobilevue_type_template_id_566ff935_hoisted_1 = {
  id: "kt_header_mobile",
  class: "kt-header-mobile kt-header-mobile--fixed"
};
const MetroHeaderBarMobilevue_type_template_id_566ff935_hoisted_2 = {
  class: "kt-header-mobile__toolbar"
};
function MetroHeaderBarMobilevue_type_template_id_566ff935_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", MetroHeaderBarMobilevue_type_template_id_566ff935_hoisted_1, [_cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "kt-header-mobile__logo"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    class: "home-page-linker",
    id: "mobilehomepagelinker"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
    alt: "Logo",
    src: app_logo_title_namespaceObject,
    id: "applogotitle"
  })])], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", MetroHeaderBarMobilevue_type_template_id_566ff935_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    class: "kt-header-mobile__topbar-toggler",
    id: "kt_header_mobile_subheader_toggler",
    onClick: _cache[0] || (_cache[0] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.toggleSubHeaderClick && $options.toggleSubHeaderClick(...args), ["stop"]))
  }, _cache[1] || (_cache[1] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "flaticon-exclamation-2"
  }, null, -1)])), _cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    class: "kt-header-mobile__toggler kt-header-mobile__toggler--left",
    id: "kt_aside_mobile_toggler"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span")], -1)), _cache[3] || (_cache[3] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    class: "kt-header-mobile__topbar-toggler",
    id: "kt_header_mobile_topbar_toggler"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "flaticon-more"
  })], -1))])], 512)), [[runtime_dom_esm_bundler/* vShow */.aG, $props.visible]]);
}
;// ./src/components/menu/MetroHeaderBarMobile.vue?vue&type=template&id=566ff935

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroHeaderBarMobile.vue?vue&type=script&lang=js

/* harmony default export */ var MetroHeaderBarMobilevue_type_script_lang_js = ({
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: true
    }
  },
  methods: {
    toggleSubHeaderClick() {
      jquery_default()("#kt_subheader").toggleClass("dp-flex-togger");
    }
  }
});
;// ./src/components/menu/MetroHeaderBarMobile.vue?vue&type=script&lang=js
 
;// ./src/components/menu/MetroHeaderBarMobile.vue




;
const MetroHeaderBarMobile_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroHeaderBarMobilevue_type_script_lang_js, [['render',MetroHeaderBarMobilevue_type_template_id_566ff935_render]])

/* harmony default export */ var MetroHeaderBarMobile = (MetroHeaderBarMobile_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSubHeaderBar.vue?vue&type=template&id=6478c06c

const MetroSubHeaderBarvue_type_template_id_6478c06c_hoisted_1 = {
  id: "kt_subheader",
  class: "kt-subheader kt-grid__item"
};
function MetroSubHeaderBarvue_type_template_id_6478c06c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", MetroSubHeaderBarvue_type_template_id_6478c06c_hoisted_1, _cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createStaticVNode */.Fv)("<div id=\"kt_subheader_container\" class=\"kt-container kt-container--fluid\"><div class=\"kt-subheader__main\"><span class=\"kt-subheader__separator kt-hidden\"></span><div class=\"kt-subheader__breadcrumbs\" id=\"subheader_link\"></div></div><div id=\"kt_subheader_wrapper\" class=\"kt-subheader__toolbar\"><div class=\"kt-subheader__wrapper\" id=\"subheader_wrapper\"></div></div></div>", 1)]));
}
;// ./src/components/menu/MetroSubHeaderBar.vue?vue&type=template&id=6478c06c

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/MetroSubHeaderBar.vue?vue&type=script&lang=js
/* harmony default export */ var MetroSubHeaderBarvue_type_script_lang_js = ({
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: true
    }
  }
});
;// ./src/components/menu/MetroSubHeaderBar.vue?vue&type=script&lang=js
 
;// ./src/components/menu/MetroSubHeaderBar.vue




;
const MetroSubHeaderBar_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MetroSubHeaderBarvue_type_script_lang_js, [['render',MetroSubHeaderBarvue_type_template_id_6478c06c_render]])

/* harmony default export */ var MetroSubHeaderBar = (MetroSubHeaderBar_exports_);
;// ./src/assets/img/page_login.png
var page_login_namespaceObject = __webpack_require__.p + "img/page_login.4e5b5af1.png";
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/LoginForm.vue?vue&type=template&id=b191861c


const LoginFormvue_type_template_id_b191861c_hoisted_1 = {
  id: "page_login"
};
const LoginFormvue_type_template_id_b191861c_hoisted_2 = {
  id: "div-login-container"
};
const LoginFormvue_type_template_id_b191861c_hoisted_3 = {
  id: "div-login-input"
};
const LoginFormvue_type_template_id_b191861c_hoisted_4 = {
  id: "pager_login",
  class: "pt-page pt-page-current"
};
const LoginFormvue_type_template_id_b191861c_hoisted_5 = {
  id: "page_login_area"
};
const LoginFormvue_type_template_id_b191861c_hoisted_6 = {
  id: "page_login_entry",
  class: "page-login-entry"
};
const LoginFormvue_type_template_id_b191861c_hoisted_7 = {
  class: "main-form",
  id: "main_form",
  name: "main_form"
};
const LoginFormvue_type_template_id_b191861c_hoisted_8 = {
  id: "loginformlayer",
  class: "login_form login-portal-area"
};
const LoginFormvue_type_template_id_b191861c_hoisted_9 = {
  id: "login_label",
  class: "login-label"
};
const LoginFormvue_type_template_id_b191861c_hoisted_10 = {
  id: "login_user_label",
  class: "login-label"
};
const LoginFormvue_type_template_id_b191861c_hoisted_11 = {
  key: 0,
  class: "has-error span-error"
};
const LoginFormvue_type_template_id_b191861c_hoisted_12 = {
  id: "login_password_label",
  class: "login-label"
};
const LoginFormvue_type_template_id_b191861c_hoisted_13 = {
  key: 1,
  class: "has-error span-error"
};
const LoginFormvue_type_template_id_b191861c_hoisted_14 = {
  id: "rememberlayer"
};
const LoginFormvue_type_template_id_b191861c_hoisted_15 = {
  class: "row"
};
const LoginFormvue_type_template_id_b191861c_hoisted_16 = {
  class: "input-remember-me col-md form-group form-check"
};
const LoginFormvue_type_template_id_b191861c_hoisted_17 = {
  id: "remembermelabel",
  class: "form-check-label",
  for: "rememberme"
};
const LoginFormvue_type_template_id_b191861c_hoisted_18 = {
  class: "input-group-forgot col-md text-right"
};
const LoginFormvue_type_template_id_b191861c_hoisted_19 = {
  id: "login_button_layer",
  class: "login_button_layer"
};
const LoginFormvue_type_template_id_b191861c_hoisted_20 = {
  class: "row"
};
const LoginFormvue_type_template_id_b191861c_hoisted_21 = {
  class: "col-md-12 text-center"
};
const LoginFormvue_type_template_id_b191861c_hoisted_22 = {
  class: "login-label"
};
const LoginFormvue_type_template_id_b191861c_hoisted_23 = {
  id: "loginfooterlayer"
};
const LoginFormvue_type_template_id_b191861c_hoisted_24 = {
  id: "buildversionlabel"
};
function LoginFormvue_type_template_id_b191861c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SSOPanel = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("SSOPanel");
  return (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", LoginFormvue_type_template_id_b191861c_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_2, [_cache[15] || (_cache[15] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "div-login-left div-login-column"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "div-login-image"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
    id: "imagepagelogin",
    src: page_login_namespaceObject,
    alt: "Login Page"
  })])], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["div-login-right div-login-column", {
      'div-login-right-center': !$setup.hasSSO
    }])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_6, [_cache[14] || (_cache[14] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    type: "hidden",
    id: "main_useruuid"
  }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_8, [_cache[11] || (_cache[11] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", LoginFormvue_type_template_id_b191861c_hoisted_9, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.login_label), 1), _cache[12] || (_cache[12] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["input-group-name login-input-field has-validation", {
      'has-error': $setup.v$.username.$error
    }])
  }, [_cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "fa fa-user login-icon"
  }, null, -1)), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "main_username",
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.localData.username = $event),
    id: "main_username",
    name: "username",
    class: "form-control input-md",
    maxlength: "60",
    required: ""
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.username]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", LoginFormvue_type_template_id_b191861c_hoisted_10, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.username_label), 1)], 2), $setup.v$.username.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", LoginFormvue_type_template_id_b191861c_hoisted_11, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.username.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["input-group-password login-input-field has-validation", {
      'has-error': $setup.v$.password.$error
    }])
  }, [_cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "fa fa-lock login-icon"
  }, null, -1)), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "main_pass",
    type: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.localData.password = $event),
    id: "main_pass",
    name: "password",
    class: "form-control input-md",
    autocomplete: "off",
    required: ""
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.password]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", LoginFormvue_type_template_id_b191861c_hoisted_12, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.password_label), 1)], 2), $setup.v$.password.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", LoginFormvue_type_template_id_b191861c_hoisted_13, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.password.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_14, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_15, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_16, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "rememberme",
    type: "checkbox",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.localData.rememberme = $event),
    "true-value": 1,
    "false-value": 0,
    id: "rememberme",
    class: "form-control input-md form-check-input"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelCheckbox */.lH, $setup.localData.rememberme]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", LoginFormvue_type_template_id_b191861c_hoisted_17, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.rememberme_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_18, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    id: "forgot_password",
    class: "enter-class login-label",
    title: "Forgot Password",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.$emit('forgot'))
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.forgot_label), 1)])])]), _cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_19, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    id: "main_button",
    class: "form-control input-md",
    onClick: _cache[4] || (_cache[4] = (...args) => $options.loginClick && $options.loginClick(...args))
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.signin_label), 1)]), _cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1))], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.visibleLogin]]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_SSOPanel, {
    ref: "ssoPanel",
    labels: $props.labels,
    onSsoSelected: $options.ssoSelected,
    onSsoSetting: $options.ssoSetting
  }, null, 8, ["labels", "onSsoSelected", "onSsoSetting"]), _cache[13] || (_cache[13] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_20, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_21, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", LoginFormvue_type_template_id_b191861c_hoisted_22, "v" + (0,shared_esm_bundler/* toDisplayString */.v_)($props.version), 1)])])])])])])])])], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", LoginFormvue_type_template_id_b191861c_hoisted_23, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", LoginFormvue_type_template_id_b191861c_hoisted_24, "Build: " + (0,shared_esm_bundler/* toDisplayString */.v_)($setup.buildVersion), 1)])], 512)), [[runtime_dom_esm_bundler/* vShow */.aG, $props.visible]]);
}
;// ./src/components/form/LoginForm.vue?vue&type=template&id=b191861c

// EXTERNAL MODULE: ./node_modules/@vuelidate/core/dist/index.mjs
var dist = __webpack_require__(7760);
// EXTERNAL MODULE: ./node_modules/@vuelidate/validators/dist/index.mjs
var validators_dist = __webpack_require__(9428);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/SSOPanel.vue?vue&type=template&id=4e381828&scoped=true

const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_1 = {
  id: "ssologinlayer"
};
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_2 = {
  class: "loading-layer"
};
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_3 = {
  key: 0,
  id: "login_button_layer_label",
  class: "login_button_layer"
};
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_4 = {
  class: "login-field-set"
};
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_5 = {
  class: "login-legend"
};
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_6 = {
  class: "login-label"
};
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_7 = {
  class: "link-button-cover"
};
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_8 = ["data-domain", "onClick"];
const SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_9 = {
  class: "sso-span"
};
function SSOPanelvue_type_template_id_4e381828_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_2, _cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "loading-span"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-spinner fa-spin"
  })], -1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)]), 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.loadingVisible]]), $setup.ssolists.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("fieldset", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("legend", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.sso_label), 1)])])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.ssolists, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
      class: "login_button_layer",
      key: item.domainid
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
      class: "link-button form-control input-md fa-link-sso-biz link-button",
      href: "javascript:void(0)",
      "data-domain": item.domainid,
      onClick: $event => _ctx.$emit('sso-selected', item)
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_9, (0,shared_esm_bundler/* toDisplayString */.v_)(item.description), 1)], 8, SSOPanelvue_type_template_id_4e381828_scoped_true_hoisted_8)])]);
  }), 128))]);
}
;// ./src/components/form/SSOPanel.vue?vue&type=template&id=4e381828&scoped=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/SSOPanel.vue?vue&type=script&lang=js



/* harmony default export */ var SSOPanelvue_type_script_lang_js = ({
  props: {
    labels: Object
  },
  emits: ["sso-selected", "sso-setting"],
  setup() {
    const ssolists = (0,reactivity_esm_bundler/* ref */.KR)([]);
    const loadingVisible = (0,reactivity_esm_bundler/* ref */.KR)(true);
    return {
      ssolists,
      loadingVisible
    };
  },
  mounted() {
    console.log("SSOPanel.vue mounted ...");
    this.$nextTick(() => {
      this.setting();
    });
  },
  methods: {
    enableSSO() {
      try {
        let appcfg = window.getAppConfigs();
        if (appcfg) return String(appcfg.ALLOW_AUTHEN_SAML) == "true";
      } catch (ex) {
        console.error(ex);
      }
      return false;
    },
    setting() {
      console.log("SSOPanel.vue: setting ...");
      if (!this.enableSSO()) {
        this.loadingVisible = false;
        this.$emit("sso-setting", this.ssolists);
        return;
      }
      this.loadSettings();
    },
    loadSettings() {
      console.log("SSOPanel.vue loadSettings ...");
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/auth/directory/retrieve",
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: () => {
          this.loadingVisible = false;
          this.$emit("sso-setting", this.ssolists);
        },
        success: (data, status, transport) => {
          this.loadingVisible = false;
          console.log("loadSettings: success", transport.responseText);
          if (data.body?.rows) {
            this.ssolists = data.body.rows;
            this.$emit("sso-setting", this.ssolists);
          }
        }
      });
    }
  }
});
;// ./src/components/form/SSOPanel.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/SSOPanel.vue?vue&type=style&index=0&id=4e381828&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/form/SSOPanel.vue?vue&type=style&index=0&id=4e381828&scoped=true&lang=css

;// ./src/components/form/SSOPanel.vue




;


const SSOPanel_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(SSOPanelvue_type_script_lang_js, [['render',SSOPanelvue_type_template_id_4e381828_scoped_true_render],['__scopeId',"data-v-4e381828"]])

/* harmony default export */ var SSOPanel = (SSOPanel_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/LoginForm.vue?vue&type=script&lang=js









const LoginFormvue_type_script_lang_js_buildVersion = "20250708-161702";
const formData = {
  username: '',
  password: '',
  rememberme: "0"
};
/* harmony default export */ var LoginFormvue_type_script_lang_js = ({
  components: {
    SSOPanel: SSOPanel
  },
  props: {
    labels: Object,
    version: {
      type: String,
      required: false,
      default: "1.0.0"
    },
    visible: {
      type: [String, Boolean],
      default: true
    }
  },
  emits: ["success", "forgot"],
  setup(props) {
    let localInfo = (0,reactivity_esm_bundler/* ref */.KR)({});
    let localData = (0,reactivity_esm_bundler/* ref */.KR)({
      ...formData
    });
    const reqalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.empty_alert);
    const requiredMessage = () => {
      return validators_dist/* helpers */._$.withMessage(reqalert, validators_dist/* required */.mw);
    };
    const validateRules = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return {
        username: {
          required: requiredMessage()
        },
        password: {
          required: requiredMessage()
        }
      };
    });
    const v$ = (0,dist/* useVuelidate */.fG)(validateRules, localData, {
      $lazy: true,
      $autoDirty: true
    });
    const hasSSO = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const visibleLogin = (0,reactivity_esm_bundler/* ref */.KR)(true);
    return {
      buildVersion: LoginFormvue_type_script_lang_js_buildVersion,
      v$,
      localInfo,
      localData,
      reqalert,
      hasSSO,
      visibleLogin
    };
  },
  mounted() {
    this.$nextTick(() => {
      jquery_default()(this.$refs.main_pass).on("keydown", e => {
        if (e.which == 13) {
          this.connectServer();
        }
      });
      this.displayRememberUser();
    });
  },
  methods: {
    isSAMLOnly() {
      try {
        let appcfg = window.getAppConfigs();
        if (appcfg) return String(appcfg.ALLOW_AUTHEN_SAML_ONLY) == "true";
      } catch (ex) {
        console.error(ex);
      }
      return false;
    },
    reset() {
      this.localData = {
        ...formData
      };
      this.v$.$reset();
      this.displayRememberUser();
    },
    focus() {
      this.$refs.main_username.focus();
    },
    success() {
      this.$emit('success', this.localInfo);
    },
    async validateForm(focusing = true) {
      const valid = await this.v$.$validate();
      if (!valid) {
        if (focusing) {
          this.focusFirstError();
        }
        return false;
      }
      return true;
    },
    focusFirstError() {
      if (this.v$.$errors && this.v$.$errors.length > 0) {
        let input = this.v$.$errors[0].$property;
        let el = this.$refs[input];
        if (el) el.focus();
      }
    },
    loginClick() {
      this.connectServer();
    },
    async connectServer() {
      let valid = await this.validateForm();
      if (!valid) return;
      this.startLogin();
    },
    startLogin() {
      let requestid = (0,will_app/* getRequestID */.Ro)();
      let params = {
        ...this.localData
      };
      console.log("startLogin: params", params);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/sign/signin",
        type: "POST",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        data: JSON.stringify(params),
        headers: {
          "x-request-id": requestid
        },
        dataType: "json",
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: (data, status, xhr) => {
          console.log("startLogin: responseText", xhr.responseText);
          (0,will_app/* stopWaiting */.Sk)();
          this.rememberUser();
          this.loginSuccess(data);
        }
      });
    },
    rememberUser() {
      if (this.localData.rememberme == "1") {
        localStorage.setItem("will-remember-me", "1");
        localStorage.setItem("will-remember-username", this.localData.username);
      } else {
        localStorage.removeItem("will-remember-me");
        localStorage.removeItem("will-remember-username");
      }
    },
    displayRememberUser() {
      let rememberme = localStorage.getItem("will-remember-me");
      if (rememberme) this.localData.rememberme = rememberme;
      let rememberuser = localStorage.getItem("will-remember-username");
      if (rememberuser) this.localData.username = rememberuser;
    },
    loginSuccess(data) {
      console.log("loginSuccess: data", data);
      if (data.head?.errorflag == "Y") {
        (0,will_app/* alertbox */.Cb)(data.head.errordesc);
      } else {
        this.localInfo = {
          ...data.body
        };
        (0,will_app/* saveAccessorInfo */.dz)(data.body);
        (0,will_app/* setupDiffie */.LM)(data);
        this.success();
      }
    },
    ssoSelected(item) {
      console.log("LoginForm.vue: sso-seleced", item);
      startSSO(item.domainid, data => {
        console.log("SSO: data", data);
        this.loginSuccess(data);
      });
    },
    ssoSetting(lists) {
      this.hasSSO = lists.length > 0;
      if (this.isSAMLOnly() && this.hasSSO) {
        this.visibleLogin = false;
      }
    }
  }
});
;// ./src/components/form/LoginForm.vue?vue&type=script&lang=js
 
;// ./src/components/form/LoginForm.vue




;
const LoginForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(LoginFormvue_type_script_lang_js, [['render',LoginFormvue_type_template_id_b191861c_render]])

/* harmony default export */ var LoginForm = (LoginForm_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WorkerFrame.vue?vue&type=template&id=427e9718

const WorkerFramevue_type_template_id_427e9718_hoisted_1 = {
  id: "fsworkinglayer",
  class: "working-class working-control-class"
};
const WorkerFramevue_type_template_id_427e9718_hoisted_2 = {
  ref: "pagecontainer",
  id: "pagecontainer",
  class: "pt-pager"
};
const WorkerFramevue_type_template_id_427e9718_hoisted_3 = {
  id: "workingframe",
  name: "workingframe",
  width: "100%",
  class: "working-frame",
  title: "Working"
};
function WorkerFramevue_type_template_id_427e9718_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", WorkerFramevue_type_template_id_427e9718_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", WorkerFramevue_type_template_id_427e9718_hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(runtime_core_esm_bundler/* KeepAlive */.PR, null, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.$y)($setup.currentComponent), {
    visible: $setup.componentVisible,
    labels: $props.labels,
    ref: "viewComponent",
    onActivated: $options.componentActivated,
    onSuccess: $options.processSuccess,
    visibleHeader: "false"
  }, null, 40, ["visible", "labels", "onActivated", "onSuccess"]))], 1024))], 512), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("iframe", WorkerFramevue_type_template_id_427e9718_hoisted_3, null, 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.workingVisible]])]);
}
;// ./src/components/WorkerFrame.vue?vue&type=template&id=427e9718

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/WorkerMenu.vue?vue&type=template&id=1c9f8937

const WorkerMenuvue_type_template_id_1c9f8937_hoisted_1 = {
  id: "page_first_sub",
  class: "panel-body pt-page-body",
  align: "center"
};
const WorkerMenuvue_type_template_id_1c9f8937_hoisted_2 = {
  class: "favor-navbox-tiles"
};
const WorkerMenuvue_type_template_id_1c9f8937_hoisted_3 = ["onClick", "data-pid", "data-url", "title"];
const WorkerMenuvue_type_template_id_1c9f8937_hoisted_4 = {
  class: "icon"
};
const WorkerMenuvue_type_template_id_1c9f8937_hoisted_5 = ["src"];
const WorkerMenuvue_type_template_id_1c9f8937_hoisted_6 = {
  class: "title"
};
function WorkerMenuvue_type_template_id_1c9f8937_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
    id: "page_first",
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["pt-page", $props.visible ? 'pt-page-current pt-page-moveFromRight' : 'pt-page-moveToRightFade'])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", WorkerMenuvue_type_template_id_1c9f8937_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", WorkerMenuvue_type_template_id_1c9f8937_hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.favorite.favorlists, (item, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
      key: index
    }, [item.type != 'new' ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("a", {
      key: 0,
      href: "javascript:void(0)",
      onClick: (0,runtime_dom_esm_bundler/* withModifiers */.D$)($event => $options.openAppClick(item), ["stop"]),
      class: "tile fa-box-title fav-app fa-link-app",
      "data-pid": item.programid,
      "data-url": item.url,
      title: item.programid
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", WorkerMenuvue_type_template_id_1c9f8937_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
      class: "fa fa-app-image",
      src: $options.getAppIcon(item),
      alt: ""
    }, null, 8, WorkerMenuvue_type_template_id_1c9f8937_hoisted_5)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", WorkerMenuvue_type_template_id_1c9f8937_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayAppName(item)), 1)], 8, WorkerMenuvue_type_template_id_1c9f8937_hoisted_3)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 64);
  }), 128))])])], 2);
}
;// ./src/components/menu/WorkerMenu.vue?vue&type=template&id=1c9f8937

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu/WorkerMenu.vue?vue&type=script&lang=js





/* harmony default export */ var WorkerMenuvue_type_script_lang_js = ({
  props: {
    visible: {
      type: [String, Boolean],
      default: false
    },
    animate: {
      type: [String, Boolean],
      default: true
    }
  },
  setup(props, context) {
    const onactivated = (0,runtime_core_esm_bundler/* onActivated */.n)(() => {
      console.log("WorkerMenu.vue: onActivated ... ");
      context.emit("activated", "menu");
    });
    return {
      accessor: accessor,
      favorite: favorite,
      onactivated
    };
  },
  mounted() {
    console.log("WorkerMenu.vue mounted ...");
  },
  methods: {
    getAppIcon(item) {
      return item.iconfile && item.iconfile.trim().length > 0 ? (0,will_app/* getImgUrl */.xn)() + "/img/apps/" + item.iconfile : this.getDefaultAppIcon();
    },
    getDefaultAppIcon() {
      return (0,will_app/* getImgUrl */.xn)() + "/img/apps/application.png";
    },
    getDisplayAppName(item) {
      return this.accessor.lang === 'TH' ? item.shortnameth : item.shortname;
    },
    openAppClick(item) {
      openPage(item, this.accessor, this.favorite, {
        caption: this.getDisplayAppName(item),
        treepath: "Shortcut Program#CUT#"
      });
    }
  }
});
;// ./src/components/menu/WorkerMenu.vue?vue&type=script&lang=js
 
;// ./src/components/menu/WorkerMenu.vue




;
const WorkerMenu_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(WorkerMenuvue_type_script_lang_js, [['render',WorkerMenuvue_type_template_id_1c9f8937_render]])

/* harmony default export */ var WorkerMenu = (WorkerMenu_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ProfileForm.vue?vue&type=template&id=0e9b05bc

const ProfileFormvue_type_template_id_0e9b05bc_hoisted_1 = {
  id: "page_profile",
  class: "pt-page pt-page-current pt-page-controller"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_2 = {
  id: "profile_entrypanel"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_3 = {
  id: "profile_entrylayer",
  class: "entry-layer"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_4 = {
  class: "portal-area sub-entry-layer"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_5 = {
  class: "row row-height"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_6 = {
  class: "col-md-3 col-height col-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_7 = {
  id: "usertname_label",
  class: "control-label",
  required: "true"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_8 = ["placeholder"];
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_9 = {
  key: 0,
  class: "has-error"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_10 = {
  class: "row row-height"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_11 = {
  class: "col-md-3 col-height col-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_12 = {
  id: "usertsurname_label",
  class: "control-label",
  required: "true"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_13 = ["placeholder"];
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_14 = {
  key: 0,
  class: "has-error"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_15 = {
  class: "row row-height"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_16 = {
  class: "col-md-3 col-height col-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_17 = {
  id: "userename_label",
  class: "control-label",
  required: "true"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_18 = ["placeholder"];
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_19 = {
  key: 0,
  class: "has-error"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_20 = {
  class: "row row-height"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_21 = {
  class: "col-md-3 col-height col-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_22 = {
  id: "useresurname_label",
  class: "control-label",
  required: "true"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_23 = ["placeholder"];
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_24 = {
  key: 0,
  class: "has-error"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_25 = {
  class: "row row-height"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_26 = {
  class: "col-md-3 col-height col-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_27 = {
  id: "displayname_label",
  class: "control-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_28 = {
  key: 0,
  class: "has-error"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_29 = {
  class: "row row-height"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_30 = {
  class: "col-md-3 col-height col-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_31 = {
  id: "email_label",
  class: "control-label"
};
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_32 = ["placeholder"];
const ProfileFormvue_type_template_id_0e9b05bc_hoisted_33 = {
  key: 0,
  class: "has-error"
};
const _hoisted_34 = {
  class: "row row-height"
};
const _hoisted_35 = {
  class: "col-md-3 col-height col-label"
};
const _hoisted_36 = {
  id: "mobile_label",
  class: "control-label"
};
const _hoisted_37 = {
  class: "col-md-3 col-height"
};
const _hoisted_38 = ["placeholder"];
const _hoisted_39 = {
  class: "row row-height"
};
const _hoisted_40 = {
  class: "col-md-3 col-height col-label"
};
const _hoisted_41 = {
  id: "lineid_label",
  class: "control-label"
};
const _hoisted_42 = {
  class: "col-md-3 col-height"
};
const _hoisted_43 = ["placeholder"];
const _hoisted_44 = {
  class: "row row-height"
};
const _hoisted_45 = {
  class: "col-md-3 col-height col-label"
};
const _hoisted_46 = {
  id: "langcode_label",
  class: "control-label"
};
const _hoisted_47 = {
  class: "col-md-3 col-height"
};
const _hoisted_48 = ["value"];
const _hoisted_49 = {
  class: "row row-height"
};
const _hoisted_50 = {
  class: "col-md-12 float-right pull-right text-right btn-ctrl-cover",
  id: "buttoncoverlayer"
};
function ProfileFormvue_type_template_id_0e9b05bc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LoadingPage = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("LoadingPage");
  return (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_1, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", {
    class: "page-header-title",
    title: "page_profile"
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.profile_caption), 513), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.visibleHeader]]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_LoadingPage, {
    visible: $setup.loadVisible
  }, null, 8, ["visible"]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_2, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ProfileFormvue_type_template_id_0e9b05bc_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.usertname_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-5 col-height", {
      'has-error': $setup.v$.usertname.$error
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "usertname",
    class: "form-control input-md alert-input",
    id: "usertname",
    name: "usertname",
    placeholder: $props.labels.usertname_label,
    autocomplete: "off",
    size: "50",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.localData.usertname = $event)
  }, null, 8, ProfileFormvue_type_template_id_0e9b05bc_hoisted_8), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.usertname]]), $setup.v$.usertname.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ProfileFormvue_type_template_id_0e9b05bc_hoisted_9, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.usertname.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_10, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ProfileFormvue_type_template_id_0e9b05bc_hoisted_12, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.usertsurname_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-5 col-height", {
      'has-error': $setup.v$.usertsurname.$error
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "usertsurname",
    class: "form-control input-md alert-input",
    id: "usertsurname",
    name: "usertsurname",
    placeholder: $props.labels.usertsurname_label,
    autocomplete: "off",
    size: "50",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.localData.usertsurname = $event)
  }, null, 8, ProfileFormvue_type_template_id_0e9b05bc_hoisted_13), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.usertsurname]]), $setup.v$.usertsurname.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ProfileFormvue_type_template_id_0e9b05bc_hoisted_14, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.usertsurname.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_15, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_16, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ProfileFormvue_type_template_id_0e9b05bc_hoisted_17, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.userename_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-5 col-height", {
      'has-error': $setup.v$.userename.$error
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "userename",
    class: "form-control input-md alert-input",
    id: "userename",
    name: "userename",
    placeholder: $props.labels.userename_label,
    autocomplete: "off",
    size: "50",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.localData.userename = $event)
  }, null, 8, ProfileFormvue_type_template_id_0e9b05bc_hoisted_18), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.userename]]), $setup.v$.userename.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ProfileFormvue_type_template_id_0e9b05bc_hoisted_19, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.userename.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_20, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_21, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ProfileFormvue_type_template_id_0e9b05bc_hoisted_22, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.useresurname_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-5 col-height", {
      'has-error': $setup.v$.useresurname.$error
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "useresurname",
    class: "form-control input-md alert-input",
    id: "useresurname",
    name: "useresurname",
    placeholder: $props.labels.useresurname_label,
    autocomplete: "off",
    size: "50",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.localData.useresurname = $event)
  }, null, 8, ProfileFormvue_type_template_id_0e9b05bc_hoisted_23), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.useresurname]]), $setup.v$.useresurname.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ProfileFormvue_type_template_id_0e9b05bc_hoisted_24, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.useresurname.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_25, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_26, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ProfileFormvue_type_template_id_0e9b05bc_hoisted_27, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.displayname_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-3 col-height", {
      'has-error': $setup.v$.displayname.$error
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "displayname",
    class: "form-control input-md alert-input",
    id: "displayname",
    name: "displayname",
    autocomplete: "off",
    size: "50",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.localData.displayname = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.displayname]]), $setup.v$.displayname.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ProfileFormvue_type_template_id_0e9b05bc_hoisted_28, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.displayname.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_29, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProfileFormvue_type_template_id_0e9b05bc_hoisted_30, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ProfileFormvue_type_template_id_0e9b05bc_hoisted_31, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.email_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-3 col-height", {
      'has-error': $setup.v$.email.$error
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "email",
    class: "form-control input-md alert-input",
    id: "email",
    name: "email",
    placeholder: $props.labels.email_label,
    autocomplete: "off",
    size: "30",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.localData.email = $event)
  }, null, 8, ProfileFormvue_type_template_id_0e9b05bc_hoisted_32), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.email]]), $setup.v$.email.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ProfileFormvue_type_template_id_0e9b05bc_hoisted_33, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.email.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_34, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_35, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", _hoisted_36, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.mobile_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_37, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "mobile",
    class: "form-control input-md",
    id: "mobile",
    name: "mobile",
    placeholder: $props.labels.mobile_label,
    autocomplete: "off",
    size: "20",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.localData.mobile = $event)
  }, null, 8, _hoisted_38), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.mobile]])])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_39, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_40, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", _hoisted_41, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.lineid_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_42, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "lineid",
    class: "form-control input-md",
    id: "lineid",
    name: "lineid",
    placeholder: $props.labels.lineid_label,
    autocomplete: "off",
    size: "50",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $setup.localData.lineid = $event)
  }, null, 8, _hoisted_43), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.lineid]])])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_44, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_45, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", _hoisted_46, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.langcode_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_47, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("select", {
    ref: "langcode",
    class: "form-control input-md",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $setup.localData.langcode = $event)
  }, [_cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("option", {
    value: ""
  }, null, -1)), ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.langlists, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("option", {
      key: item.typeid,
      value: item.typeid
    }, (0,shared_esm_bundler/* toDisplayString */.v_)($options.getDisplayLanguageName(item)), 9, _hoisted_48);
  }), 128))], 512), [[runtime_dom_esm_bundler/* vModelSelect */.u1, $setup.localData.langcode]])])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_49, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_50, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    id: "savebutton",
    class: "btn btn-dark btn-sm save-button",
    onClick: _cache[9] || (_cache[9] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.saveClick && $options.saveClick(...args), ["stop"]))
  }, [_cache[11] || (_cache[11] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-save fa-btn-icon"
  }, null, -1)), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" " + (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.save_button), 1)])])])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.infoVisible]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "entry-layer entry-not-found"
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.profilenotfound_label), 513), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.notfoundVisible]])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.loadVisible == false]])], 512)), [[runtime_dom_esm_bundler/* vShow */.aG, $props.visible]]);
}
;// ./src/components/form/ProfileForm.vue?vue&type=template&id=0e9b05bc

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/controls/LoadingPage.vue?vue&type=template&id=844669f2&scoped=true

const LoadingPagevue_type_template_id_844669f2_scoped_true_hoisted_1 = {
  class: "loading-layer"
};
const LoadingPagevue_type_template_id_844669f2_scoped_true_hoisted_2 = {
  class: "loading-span"
};
function LoadingPagevue_type_template_id_844669f2_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", LoadingPagevue_type_template_id_844669f2_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", LoadingPagevue_type_template_id_844669f2_scoped_true_hoisted_2, _cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-spinner fa-spin"
  }, null, -1)]), 512), [[runtime_dom_esm_bundler/* vShow */.aG, $props.animate]]), _cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), _cache[2] || (_cache[2] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "Loading ...", -1)), (0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default", {}, undefined, true)], 512)), [[runtime_dom_esm_bundler/* vShow */.aG, $props.visible]]);
}
;// ./src/controls/LoadingPage.vue?vue&type=template&id=844669f2&scoped=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/controls/LoadingPage.vue?vue&type=script&lang=js
/* harmony default export */ var LoadingPagevue_type_script_lang_js = ({
  props: {
    visible: {
      type: [String, Boolean],
      default: true
    },
    animate: {
      type: [String, Boolean],
      default: true
    }
  },
  setup() {}
});
;// ./src/controls/LoadingPage.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/controls/LoadingPage.vue?vue&type=style&index=0&id=844669f2&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/controls/LoadingPage.vue?vue&type=style&index=0&id=844669f2&scoped=true&lang=css

;// ./src/controls/LoadingPage.vue




;


const LoadingPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(LoadingPagevue_type_script_lang_js, [['render',LoadingPagevue_type_template_id_844669f2_scoped_true_render],['__scopeId',"data-v-844669f2"]])

/* harmony default export */ var LoadingPage = (LoadingPage_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ProfileForm.vue?vue&type=script&lang=js








const ProfileFormvue_type_script_lang_js_formData = {
  usertname: '',
  usertsurname: '',
  userename: '',
  useresurname: '',
  displayname: '',
  email: '',
  mobile: '',
  lineid: '',
  langcode: ''
};
/* harmony default export */ var ProfileFormvue_type_script_lang_js = ({
  components: {
    LoadingPage: LoadingPage
  },
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: false
    }
  },
  emits: ["success"],
  setup(props, context) {
    const localData = (0,reactivity_esm_bundler/* ref */.KR)({
      ...ProfileFormvue_type_script_lang_js_formData
    });
    const loadVisible = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const infoVisible = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const notfoundVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const visibleHeader = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const langlists = (0,reactivity_esm_bundler/* ref */.KR)([]);
    const reqalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.empty_alert);
    const emailalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.email_alert);
    const requiredMessage = () => {
      return validators_dist/* helpers */._$.withMessage(reqalert, validators_dist/* required */.mw);
    };
    const emailMessage = () => {
      return validators_dist/* helpers */._$.withMessage(emailalert, validators_dist/* email */.Rp);
    };
    const validateRules = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return {
        usertname: {
          required: requiredMessage()
        },
        usertsurname: {
          required: requiredMessage()
        },
        userename: {
          required: requiredMessage()
        },
        useresurname: {
          required: requiredMessage()
        },
        displayname: {
          required: requiredMessage()
        },
        email: {
          required: requiredMessage(),
          email: emailMessage()
        }
      };
    });
    const v$ = (0,dist/* useVuelidate */.fG)(validateRules, localData, {
      $lazy: true,
      $autoDirty: true
    });
    const onactivated = (0,runtime_core_esm_bundler/* onActivated */.n)(() => {
      console.log("ProfileForm.vue: onActivated ... ");
      context.emit("activated", "profile");
    });
    return {
      accessor: accessor,
      v$,
      localData,
      reqalert,
      emailalert,
      loadVisible,
      infoVisible,
      notfoundVisible,
      langlists,
      onactivated,
      visibleHeader
    };
  },
  created() {
    (0,runtime_core_esm_bundler/* watch */.wB)(this.$props, newProps => {
      this.reqalert = newProps.labels.empty_alert;
      this.emailalert = newProps.labels.email_alert;
    });
  },
  mounted() {
    console.log("ProfileForm.vue mounted ...");
    this.$nextTick(() => {
      this.setting();
    });
  },
  methods: {
    reset() {
      this.localData = {
        ...ProfileFormvue_type_script_lang_js_formData
      };
      this.v$.$reset();
      this.infoVisible = true;
      this.notfoundVisible = false;
    },
    setting() {
      console.log("ProfileForm.vue: setting ...");
      this.loadLanguages();
    },
    focus() {
      this.$refs.usertname.focus();
    },
    success() {
      this.$emit('success', "profile", this.localData);
    },
    async validateForm(focusing = true) {
      const valid = await this.v$.$validate();
      console.log("validate form: valid", valid);
      console.log("error:", this.v$.$errors);
      if (!valid) {
        if (focusing) {
          this.focusFirstError();
        }
        return false;
      }
      return true;
    },
    focusFirstError() {
      if (this.v$.$errors && this.v$.$errors.length > 0) {
        let input = this.v$.$errors[0].$property;
        let el = this.$refs[input];
        if (el) el.focus();else jquery_default()("#" + input).trigger("focus");
      }
    },
    loadLanguages() {
      console.log("ProfileForm.vue loadLanguages ...");
      let params = {
        names: "tklanguage"
      };
      let formdata = (0,will_app/* serializeParameters */.L3)({
        ajax: true
      }, params, true);
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/category/lists",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        success: (data, status, transport) => {
          console.log("loadLanguages: success", transport.responseText);
          if (data.body?.length > 0) {
            let ds = data.body[0];
            if (ds.resultset?.rows) {
              this.langlists = ds.resultset.rows;
            }
          }
        }
      });
    },
    getDisplayLanguageName(item) {
      return this.accessor.lang === 'TH' ? item.nameth : item.nameth;
    },
    async saveClick() {
      console.log("click: save");
      let valid = await this.validateForm();
      if (!valid) return;
      this.startSaveRecord();
    },
    startSaveRecord() {
      (0,will_app/* confirmSave */.ex)(() => {
        this.saveRecord(this.localData);
      });
    },
    saveRecord(dataRecord) {
      let jsondata = {
        ajax: true
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, dataRecord);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/profile/update",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: (data, status, xhr) => {
          console.log("saveRecord: success : ", xhr.responseText);
          (0,will_app/* stopWaiting */.Sk)();
          this.saveSuccess(data);
        }
      });
    },
    saveSuccess(data) {
      console.log("saveSuccess : ", data);
      if (data.head?.errorflag == "Y") {
        (0,will_app/* alertbox */.Cb)(data.head.errordesc);
      } else {
        (0,will_app/* successbox */.hM)(() => {
          this.success();
        });
      }
    },
    display(mode = "", visible = true) {
      console.log("display: mode", mode, ", visible", visible);
      this.visibleHeader = visible;
      this.reset();
      this.retrieve(show => {
        if (show) this.focus();
      });
    },
    retrieve(callback) {
      console.log("retrieve: info", this.accessor);
      if (this.accessor.info?.userid) {
        this.loadVisible = true;
        //try to get profile info
        let params = {
          userid: this.accessor.info?.userid
        };
        let jsondata = {
          ajax: true
        };
        let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, params);
        (0,will_app/* startWaiting */.eF)();
        jquery_default().ajax({
          url: (0,will_app/* getApiUrl */.e9)() + "/api/profile/get",
          data: formdata.jsondata,
          headers: formdata.headers,
          type: "POST",
          dataType: "json",
          contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
          error: function (transport, status, errorThrown) {
            (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
          },
          success: data => {
            (0,will_app/* stopWaiting */.Sk)();
            this.retrieveSuccess(data, callback);
          }
        });
      }
    },
    retrieveSuccess(data, callback) {
      console.log("ProfileForm.vue: retrieveSuccess", data);
      if (data.head?.errorflag == "Y") {
        (0,will_app/* alertbox */.Cb)(data.head.errordesc);
      } else {
        this.loadVisible = false;
        if (data.body?.rows?.length > 0) {
          this.localData = {
            ...data.body.rows[0]
          };
          this.infoVisible = true;
          this.notfoundVisible = false;
          if (callback) callback(true);
        } else {
          this.infoVisible = false;
          this.notfoundVisible = true;
          if (callback) callback(false);
        }
      }
    }
  }
});
;// ./src/components/form/ProfileForm.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ProfileForm.vue?vue&type=style&index=0&id=0e9b05bc&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/form/ProfileForm.vue?vue&type=style&index=0&id=0e9b05bc&lang=css

;// ./src/components/form/ProfileForm.vue




;


const ProfileForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ProfileFormvue_type_script_lang_js, [['render',ProfileFormvue_type_template_id_0e9b05bc_render]])

/* harmony default export */ var ProfileForm = (ProfileForm_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ChangeForm.vue?vue&type=template&id=06a5a5f2

const ChangeFormvue_type_template_id_06a5a5f2_hoisted_1 = {
  id: "change_entrypanel"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_2 = {
  id: "change_entrylayer",
  class: "entry-layer"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_3 = {
  class: "portal-area sub-entry-layer"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_4 = {
  class: "row row-height"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_5 = {
  class: "col-md-7 col-height"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_6 = {
  class: "row row-height"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_7 = {
  class: "col-md-3 col-height col-label"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_8 = {
  id: "oldpassword_label",
  class: "control-label",
  required: "true"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_9 = {
  class: "input-group"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_10 = ["placeholder"];
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_11 = {
  class: "input-group-append"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_12 = {
  class: "fa fa-eye-slash",
  ref: "oldeyeslash"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_13 = {
  key: 0,
  class: "has-error"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_14 = {
  class: "row row-height"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_15 = {
  class: "col-md-3 col-height col-label text-right"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_16 = {
  id: "userpassword_label",
  class: "control-label",
  required: "true"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_17 = {
  class: "input-group"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_18 = ["placeholder"];
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_19 = {
  class: "input-group-append"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_20 = {
  class: "fa fa-eye-slash",
  ref: "usereyeslash"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_21 = {
  key: 0,
  class: "has-error"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_22 = {
  class: "row row-height"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_23 = {
  class: "col-md-3 col-height col-label text-right"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_24 = {
  id: "confirmpassword_label",
  class: "control-label",
  required: "true"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_25 = {
  class: "input-group"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_26 = ["placeholder"];
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_27 = {
  class: "input-group-append"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_28 = {
  class: "fa fa-eye-slash",
  ref: "confirmeyeslash"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_29 = {
  key: 0,
  class: "has-error"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_30 = {
  class: "row row-height"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_31 = {
  class: "col-md-8 col-height",
  id: "fspolicylayer"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_32 = {
  class: "row row-height"
};
const ChangeFormvue_type_template_id_06a5a5f2_hoisted_33 = {
  class: "col-md-12 float-right pull-right text-right btn-ctrl-cover"
};
function ChangeFormvue_type_template_id_06a5a5f2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
    id: "page_change",
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["pt-page pt-page-current pt-page-controller", {
      'forcer-page': $options.isChanged
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", {
    class: "page-header-title",
    title: "page_change"
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.changepassword_caption), 513), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.visibleHeader]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_3, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_4, [_cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "col-md-3 col-height col-label"
  }, " ", -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_5, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.passwordforce_label), 513), [[runtime_dom_esm_bundler/* vShow */.aG, $options.isForced]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.passwordexpire_label), 513), [[runtime_dom_esm_bundler/* vShow */.aG, $options.isExpired]])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $options.isChanged]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ChangeFormvue_type_template_id_06a5a5f2_hoisted_8, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.oldpassword_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-4 col-height", {
      'has-error': $setup.v$.oldpassword.$error
    }])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_9, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.localData.oldpassword = $event),
    ref: "oldpassword",
    type: "password",
    class: "form-control input-md alert-input",
    id: "oldpassword",
    name: "oldpassword",
    placeholder: $props.labels.oldpassword_label,
    autocomplete: "off",
    size: "8"
  }, null, 8, ChangeFormvue_type_template_id_06a5a5f2_hoisted_10), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.oldpassword]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "#0",
    class: "btn btn-outline-secondarys btn-eye",
    ref: "toggleoldpasswordbutton",
    onClick: _cache[1] || (_cache[1] = $event => $options.togglePassword(_ctx.$refs.toggleoldpasswordbutton, _ctx.$refs.oldpassword, _ctx.$refs.oldeyeslash))
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", ChangeFormvue_type_template_id_06a5a5f2_hoisted_12, null, 512)], 512)])]), $setup.v$.oldpassword.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ChangeFormvue_type_template_id_06a5a5f2_hoisted_13, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.oldpassword.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_14, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_15, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ChangeFormvue_type_template_id_06a5a5f2_hoisted_16, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.userpassword_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-4 col-height", {
      'has-error': $setup.v$.userpassword.$error
    }])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_17, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.localData.userpassword = $event),
    ref: "userpassword",
    type: "password",
    class: "form-control input-md alert-input",
    id: "userpassword",
    name: "userpassword",
    placeholder: $props.labels.userpassword_label,
    autocomplete: "off",
    size: "8",
    "data-toggle": "tooltip",
    title: "Password can combine with alphabets and numeric sign not over 8 characters"
  }, null, 8, ChangeFormvue_type_template_id_06a5a5f2_hoisted_18), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.userpassword]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_19, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "#0",
    class: "btn btn-outline-secondarys btn-eye",
    ref: "toggleuserpasswordbutton",
    onClick: _cache[3] || (_cache[3] = $event => $options.togglePassword(_ctx.$refs.toggleuserpasswordbutton, _ctx.$refs.userpassword, _ctx.$refs.usereyeslash))
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", ChangeFormvue_type_template_id_06a5a5f2_hoisted_20, null, 512)], 512)])]), $setup.v$.userpassword.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ChangeFormvue_type_template_id_06a5a5f2_hoisted_21, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.userpassword.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_22, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_23, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ChangeFormvue_type_template_id_06a5a5f2_hoisted_24, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.confirmpassword_label), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["col-md-4 col-height", {
      'has-error': $setup.v$.confirmpassword.$error
    }])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_25, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.localData.confirmpassword = $event),
    ref: "confirmpassword",
    type: "password",
    class: "form-control input-md alert-input",
    id: "confirmpassword",
    name: "confirmpassword",
    placeholder: $props.labels.confirmpassword_label,
    autocomplete: "off",
    size: "8",
    "data-toggle": "tooltip",
    title: "Password can combine with alphabets and numeric sign not over 8 characters"
  }, null, 8, ChangeFormvue_type_template_id_06a5a5f2_hoisted_26), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.confirmpassword]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_27, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "#0",
    class: "btn btn-outline-secondarys btn-eye",
    ref: "toggleconfirmpasswordbutton",
    onClick: _cache[5] || (_cache[5] = $event => $options.togglePassword(_ctx.$refs.toggleconfirmpasswordbutton, _ctx.$refs.confirmpassword, _ctx.$refs.confirmeyeslash))
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", ChangeFormvue_type_template_id_06a5a5f2_hoisted_28, null, 512)], 512)])]), $setup.v$.confirmpassword.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ChangeFormvue_type_template_id_06a5a5f2_hoisted_29, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.confirmpassword.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_30, [_cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "col-md-3 col-height col-label text-right"
  }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_31, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($options.policyLists, (item, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
      key: index
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)(item), 1), _cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1))], 64);
  }), 128))])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_32, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ChangeFormvue_type_template_id_06a5a5f2_hoisted_33, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    id: "savebutton",
    class: "btn btn-dark btn-sm save-button",
    onClick: _cache[6] || (_cache[6] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.saveClick && $options.saveClick(...args), ["stop"]))
  }, [_cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-save fa-btn-icon"
  }, null, -1)), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" " + (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.save_button), 1)])])])])])])], 2);
}
;// ./src/components/form/ChangeForm.vue?vue&type=template&id=06a5a5f2

;// ./src/assets/js/policies.js

const policies = (0,reactivity_esm_bundler/* ref */.KR)({
  categories: {},
  reset() {
    this.categories = {};
  },
  isEmpty() {
    return Object.keys(this.categories).length == 0;
  },
  setCategories(value) {
    this.categories = value;
  },
  getCategory(key) {
    return this.categories[key];
  }
});
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ChangeForm.vue?vue&type=script&lang=js








const ChangeFormvue_type_script_lang_js_formData = {
  oldpassword: '',
  userpassword: '',
  confirmpassword: ''
};
/* harmony default export */ var ChangeFormvue_type_script_lang_js = ({
  props: {
    labels: Object,
    mode: {
      type: String,
      default: ""
    }
  },
  emits: ["success"],
  setup(props, context) {
    let localData = (0,reactivity_esm_bundler/* ref */.KR)({
      ...ChangeFormvue_type_script_lang_js_formData
    });
    const reqalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.empty_alert);
    const matchalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.matchpassword_alert);
    const requiredMessage = () => {
      return validators_dist/* helpers */._$.withMessage(reqalert, validators_dist/* required */.mw);
    };
    const matchMessage = matcher => {
      return validators_dist/* helpers */._$.withMessage(matchalert, (0,validators_dist/* sameAs */.f4)(matcher));
    };
    const validateRules = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return {
        oldpassword: {
          required: requiredMessage()
        },
        userpassword: {
          required: requiredMessage()
        },
        confirmpassword: {
          required: requiredMessage(),
          sameAs: matchMessage(localData.value.userpassword)
        }
      };
    });
    const v$ = (0,dist/* useVuelidate */.fG)(validateRules, localData, {
      $lazy: true,
      $autoDirty: true
    });
    const onactivated = (0,runtime_core_esm_bundler/* onActivated */.n)(() => {
      console.log("ChangeForm.vue: onActivated ... ");
      context.emit("activated", "changepassword");
    });
    const changedMode = (0,reactivity_esm_bundler/* ref */.KR)("");
    const visibleHeader = (0,reactivity_esm_bundler/* ref */.KR)(true);
    return {
      v$,
      accessor: accessor,
      policies: policies,
      localData,
      reqalert,
      matchalert,
      onactivated,
      changedMode,
      visibleHeader
    };
  },
  created() {
    (0,runtime_core_esm_bundler/* watch */.wB)(this.$props, newProps => {
      this.reqalert = newProps.labels.empty_alert;
      this.matchalert = newProps.labels.matchpassword_alert;
    });
  },
  mounted() {
    console.log("ChangeForm.vue mounted ...");
    this.$nextTick(() => {
      this.setting();
    });
  },
  computed: {
    isChanged() {
      return this.changedMode != "";
    },
    isForced() {
      return this.changedMode == 'force';
    },
    isExpired() {
      return this.changedMode == 'expire';
    },
    policyLists() {
      return this.policies.getCategory(this.accessor.lang ?? "EN");
    }
  },
  methods: {
    reset() {
      this.localData = {
        ...ChangeFormvue_type_script_lang_js_formData
      };
      this.v$.$reset();
    },
    setting() {
      console.log("ChangeForm.vue: setting ...");
      this.loadPolicies();
    },
    focus() {
      this.$refs.oldpassword.focus();
    },
    success() {
      this.$emit('success', 'changepassword', this.localData);
    },
    async validateForm(focusing = true) {
      const valid = await this.v$.$validate();
      if (!valid) {
        if (focusing) {
          this.focusFirstError();
        }
        return false;
      }
      return true;
    },
    focusFirstError() {
      if (this.v$.$errors && this.v$.$errors.length > 0) {
        let input = this.v$.$errors[0].$property;
        let el = this.$refs[input];
        if (el) el.focus();
      }
    },
    loadPolicies() {
      console.log("ChangeForm.vue loadPolicies ...");
      if (!this.policies.isEmpty()) return;
      let formdata = (0,will_app/* serializeParameters */.L3)({
        ajax: true
      }, null, true);
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/passwordpolicy/categories",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        success: (data, status, transport) => {
          console.log("loadPolicies: success", transport.responseText);
          if (data.body?.dataset) {
            this.policies.setCategories(data.body.dataset);
          }
        }
      });
    },
    async saveClick() {
      console.log("click: save");
      let valid = await this.validateForm();
      if (!valid) return;
      this.startSaveRecord();
    },
    startSaveRecord() {
      (0,will_app/* confirmSave */.ex)(() => {
        this.saveRecord(this.localData);
      });
    },
    saveRecord(dataRecord) {
      let jsondata = {
        ajax: true,
        useruuid: this.accessor.info?.useruuid,
        userid: this.accessor.info?.userid
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, dataRecord);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/password/change",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: (data, status, xhr) => {
          console.log("saveRecord: success : ", xhr.responseText);
          (0,will_app/* stopWaiting */.Sk)();
          this.saveSuccess(data);
        }
      });
    },
    saveSuccess(data) {
      console.log("saveSuccess : ", data);
      if (data.head?.errorflag == "Y") {
        (0,will_app/* alertbox */.Cb)(data.head.errordesc);
      } else {
        (0,will_app/* successbox */.hM)(() => {
          this.success();
        });
      }
    },
    display(mode = "", visible = true) {
      this.visibleHeader = visible;
      this.changedMode = mode;
      this.reset();
      this.focus();
      console.log("ChangeForm.vue: changedMode", this.changedMode);
    },
    togglePassword(toggleBtn, passwordField, icon) {
      if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
    }
  }
});
;// ./src/components/form/ChangeForm.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ChangeForm.vue?vue&type=style&index=0&id=06a5a5f2&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/form/ChangeForm.vue?vue&type=style&index=0&id=06a5a5f2&lang=css

;// ./src/components/form/ChangeForm.vue




;


const ChangeForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ChangeFormvue_type_script_lang_js, [['render',ChangeFormvue_type_template_id_06a5a5f2_render]])

/* harmony default export */ var ChangeForm = (ChangeForm_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/WorkerFrame.vue?vue&type=script&lang=js









/* harmony default export */ var WorkerFramevue_type_script_lang_js = ({
  components: {
    WorkerMenu: WorkerMenu,
    ProfileForm: ProfileForm,
    ChangeForm: ChangeForm
  },
  props: {
    labels: Object,
    visible: {
      type: [String, Boolean],
      default: false
    }
  },
  setup(props) {
    let componentVisible = (0,reactivity_esm_bundler/* ref */.KR)(props.visible);
    let workingVisible = (0,reactivity_esm_bundler/* ref */.KR)(props.visible);
    let currentComponent = (0,reactivity_esm_bundler/* ref */.KR)("WorkerMenu");
    return {
      accessor: accessor,
      componentVisible,
      workingVisible,
      currentComponent
    };
  },
  mounted() {
    this.$nextTick(() => {
      jquery_default()("#workingframe").on("load", () => {
        (0,will_app/* stopWaiting */.Sk)();
        refreshScreen();
        if (!(String((0,will_app/* getMetaInfo */.Ch)().AUTO_INJECT_INFO) == "false")) {
          (0,will_app/* sendMessageInterface */.V)("appinfo", document.getElementById('workingframe').contentWindow);
        }
      });
      jquery_default()(window).on("resize", function () {
        let wh = jquery_default()(window).height();
        let kh = 0;
        if (jquery_default()("#kt_header").is(":visible")) {
          kh = jquery_default()("#kt_header").height();
        }
        let ksh = 0;
        if (jquery_default()("#kt_subheader").is(":visible")) {
          ksh = jquery_default()("#kt_subheader").height();
        }
        let wfh = wh - kh - ksh - 7;
        jquery_default()("#workingframe").height(wfh);
      }).trigger("resize");
      window.startWaiting = will_app/* startWaiting */.eF;
      window.stopWaiting = will_app/* stopWaiting */.Sk;
      window.confirmDialogBox = will_app/* confirmDialogBox */.A3;
      window.alertDialog = will_app/* alertDialog */.T3;
      window.confirmDialog = will_app/* confirmDialog */.ZD;
      window.alertbox = will_app/* alertbox */.Cb;
      window.confirmbox = will_app/* confirmbox */.uI;
      window.alertmsg = will_app/* alertmsg */.iR;
      window.confirmmsg = will_app/* confirmmsg */.SY;
      window.successbox = will_app/* successbox */.hM;
      window.warningbox = will_app/* warningbox */.Y1;
      window.displayWorkingFrame = this.displayWorkingFrame;
    });
  },
  methods: {
    reset() {
      console.log("WorkerFrame.vue: reset ...");
      this.componentVisible = false;
      this.workingVisible = false;
      hideWorkSpace();
    },
    setting() {
      this.showWorkerMenu();
    },
    showWorkerMenu() {
      jquery_default()("#pagecontainer").show();
      this.componentVisible = true;
      this.workingVisible = false;
      this.currentComponent = "WorkerMenu";
      hideWorkSpace();
      showSubHeader("favorite", this.$props.labels.favorite_title);
    },
    hideWorkerMenu() {
      this.componentVisible = false;
    },
    showWorking() {
      this.workingVisible = true;
      this.componentVisible = false;
      jquery_default()("#pagecontainer").hide();
      jquery_default()("#workingframe").show();
    },
    hideWorking() {
      this.workingVisible = false;
      hideWorkSpace();
    },
    showProfile() {
      jquery_default()("#pagecontainer").show();
      this.workingVisible = false;
      this.componentVisible = true;
      this.currentComponent = "ProfileForm";
      hideWorkSpace();
      showSubHeader("page_profile", this.$props.labels.profile_label);
    },
    showChangePassword() {
      jquery_default()("#pagecontainer").show();
      this.workingVisible = false;
      this.componentVisible = true;
      this.currentComponent = "ChangeForm";
      hideWorkSpace();
      showSubHeader("page_change", this.$props.labels.changepwd_label);
    },
    componentActivated(name) {
      console.log("component activated: ", name);
      if ("profile" == name) this.$refs.viewComponent.display("", false);
      if ("changepassword" == name) this.$refs.viewComponent.display("", false);
    },
    processSuccess(action, info) {
      console.log("processSuccess: action", action, ", info", info);
      if ("profile" == action || "changepassword" == action) {
        this.showWorkerMenu();
      }
    },
    openWorkingFrame(url) {
      clearSubHeader();
      this.workingVisible = true;
      this.componentVisible = false;
      jquery_default()("#pagecontainer").hide();
      jquery_default()("#workingframe").attr("src", url).show();
      console.log("openWorkingFrame:", url);
    },
    displayWorkingFrame(url) {
      let canopen = true;
      let curpid = jquery_default()("#subheader_wrapper").text().trim();
      if (curpid && curpid.length > 0) {
        let screens = (0,will_app/* getMetaInfo */.Ch)().NOTIFY_UNCHECK_OPEN_SCREENS || ["favorite", "worklist"];
        if (!screens.includes(curpid)) {
          canopen = false;
        }
      }
      if (!canopen && !(String((0,will_app/* getMetaInfo */.Ch)().NOTIFY_CHECK_OPEN) == "false")) {
        (0,will_app/* confirmDialogBox */.A3)("QS0035", null, "Do you want to open this transaction? <br/>Becareful all current work will be lose", () => {
          this.openWorkingFrame(url);
        });
      } else {
        this.openWorkingFrame(url);
      }
    }
  }
});
;// ./src/components/WorkerFrame.vue?vue&type=script&lang=js
 
;// ./src/components/WorkerFrame.vue




;
const WorkerFrame_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(WorkerFramevue_type_script_lang_js, [['render',WorkerFramevue_type_template_id_427e9718_render]])

/* harmony default export */ var WorkerFrame = (WorkerFrame_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/BlankForm.vue?vue&type=template&id=35dc2bff

const BlankFormvue_type_template_id_35dc2bff_hoisted_1 = {
  id: "blanklayer"
};
function BlankFormvue_type_template_id_35dc2bff_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", BlankFormvue_type_template_id_35dc2bff_hoisted_1);
}
;// ./src/components/form/BlankForm.vue?vue&type=template&id=35dc2bff

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/BlankForm.vue?vue&type=script&lang=js

/* harmony default export */ var BlankFormvue_type_script_lang_js = ({
  props: {
    labels: Object
  },
  setup(props, context) {
    let onactivated = (0,runtime_core_esm_bundler/* onActivated */.n)(() => {
      console.log("BlankForm.vue: onActivated ... ");
      context.emit("activated", "blank");
    });
    return {
      onactivated
    };
  }
});
;// ./src/components/form/BlankForm.vue?vue&type=script&lang=js
 
;// ./src/components/form/BlankForm.vue




;
const BlankForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(BlankFormvue_type_script_lang_js, [['render',BlankFormvue_type_template_id_35dc2bff_render]])

/* harmony default export */ var BlankForm = (BlankForm_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ForgotForm.vue?vue&type=template&id=44b8420c

const ForgotFormvue_type_template_id_44b8420c_hoisted_1 = {
  class: "pt-page pt-page-current pt-page-controller"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_2 = {
  class: "page-header-title"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_3 = {
  id: "page_forgot",
  class: "entry-layer page-layer forgot-layer portal-area"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_4 = {
  class: "portal-area sub-entry-layer forgot-area"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_5 = {
  class: "row row-heighter center-block"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_6 = {
  class: "col-md-12"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_7 = {
  id: "forgotpassword_info"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_8 = {
  class: "row row-heighter center-block"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_9 = {
  class: "col-md-6 col-height form-group",
  id: "email_layer"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_10 = ["placeholder"];
const ForgotFormvue_type_template_id_44b8420c_hoisted_11 = {
  key: 0,
  class: "has-error"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_12 = {
  class: "row row-heighter center-block"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_13 = {
  class: "col-md-4 col-height form-group",
  id: "secureimage_layer"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_14 = {
  class: "btn-group mr-2",
  role: "group",
  id: "secureimage_ctrl_layer"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_15 = {
  class: "row row-heighter center-block"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_16 = {
  class: "col-md-12"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_17 = {
  id: "securecode_info"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_18 = {
  class: "row row-heighter center-block"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_19 = {
  class: "col-md-4 col-height form-group",
  id: "securecode_layer"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_20 = ["placeholder"];
const ForgotFormvue_type_template_id_44b8420c_hoisted_21 = {
  key: 0,
  class: "has-error"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_22 = {
  class: "row row-heighter"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_23 = {
  class: "col-md-12 col-height text-center button-control-layer"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_24 = {
  id: "page_forgot_success",
  class: "entry-layer page-layer forgot-layer portal-area"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_25 = {
  class: "row portal-area sub-entry-layer"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_26 = {
  width: "100%"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_27 = {
  class: "rclass"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_28 = {
  align: "center",
  height: "30"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_29 = {
  class: "lclass",
  id: "resetpwd_label",
  required: "false"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_30 = {
  align: "center",
  height: "30"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_31 = {
  class: "lclass",
  id: "resetmsg_label",
  required: "false"
};
const ForgotFormvue_type_template_id_44b8420c_hoisted_32 = {
  align: "center",
  height: "30"
};
function ForgotFormvue_type_template_id_44b8420c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", ForgotFormvue_type_template_id_44b8420c_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.forgot_caption), 1), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_4, [_cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ForgotFormvue_type_template_id_44b8420c_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.forgotpassword_info), 1)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_8, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["input-group", {
      'has-error': $setup.v$.email.$error
    }])
  }, [_cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "input-group-prepend"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "input-group-text",
    title: "Email"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "fas fa fa-envelope",
    "aria-hidden": "true"
  })])], -1)), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.localData.email = $event),
    type: "email",
    class: "form-control input-md my-input alert-input",
    id: "email",
    name: "email",
    placeholder: $props.labels.email_label
  }, null, 8, ForgotFormvue_type_template_id_44b8420c_hoisted_10), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.email]])], 2), $setup.v$.email.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ForgotFormvue_type_template_id_44b8420c_hoisted_11, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.email.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_13, [_cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "btn-group mr-2",
    role: "group"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
    id: "secureimage",
    alt: ""
  })], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_14, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    onClick: _cache[1] || (_cache[1] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.refreshClick && $options.refreshClick(...args), ["stop"])),
    id: "secureimage_ctrl",
    title: "Refresh",
    class: "btn btn-sm btn-base",
    tabIndex: "-1"
  }, _cache[7] || (_cache[7] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-refresh",
    "aria-hidden": "true"
  }, null, -1)]))])])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_15, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_16, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ForgotFormvue_type_template_id_44b8420c_hoisted_17, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.securecode_info), 1)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_18, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_19, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["input-group", {
      'has-error': $setup.v$.securecode.$error
    }])
  }, [_cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "input-group-prepend"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
    class: "input-group-text",
    title: "Answer Code"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
    class: "fa fa-unlock-alt",
    "aria-hidden": "true"
  })])], -1)), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "securecode",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.localData.securecode = $event),
    type: "text",
    class: "form-control input-md my-input alert-input",
    id: "securecode",
    name: "securecode",
    placeholder: $props.labels.securecode_label
  }, null, 8, ForgotFormvue_type_template_id_44b8420c_hoisted_20), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.securecode]])], 2), $setup.v$.securecode.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", ForgotFormvue_type_template_id_44b8420c_hoisted_21, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.securecode.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])])]), _cache[13] || (_cache[13] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("hr", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_22, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_23, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    onClick: _cache[3] || (_cache[3] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.sendClick && $options.sendClick(...args), ["stop"])),
    id: "sendbutton",
    class: "btn btn-dark btn-sm send-button"
  }, [_cache[11] || (_cache[11] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-send fa-btn-icon"
  }, null, -1)), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" " + (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.send_button), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    onClick: _cache[4] || (_cache[4] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.cancelClick && $options.cancelClick(...args), ["stop"])),
    id: "cancelbutton",
    class: "btn btn-dark btn-sm cancel-button"
  }, [_cache[12] || (_cache[12] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-close fa-btn-icon"
  }, null, -1)), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" " + (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.cancel_button), 1)])])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.successVisible == false]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_24, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ForgotFormvue_type_template_id_44b8420c_hoisted_25, [_cache[15] || (_cache[15] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("table", ForgotFormvue_type_template_id_44b8420c_hoisted_26, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("tbody", null, [_cache[14] || (_cache[14] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("tr", {
    class: "rclass"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("td", {
    height: "50"
  }, " ")], -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("tr", ForgotFormvue_type_template_id_44b8420c_hoisted_27, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("td", ForgotFormvue_type_template_id_44b8420c_hoisted_28, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ForgotFormvue_type_template_id_44b8420c_hoisted_29, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.resetpwd_label), 1)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("tr", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("td", ForgotFormvue_type_template_id_44b8420c_hoisted_30, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", ForgotFormvue_type_template_id_44b8420c_hoisted_31, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.resetmsg_label), 1)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("tr", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("td", ForgotFormvue_type_template_id_44b8420c_hoisted_32, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    id: "loginlink",
    onClick: _cache[5] || (_cache[5] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.loginClick && $options.loginClick(...args), ["stop"]))
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.resetlogin_label), 1)])])])])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.successVisible == true]])]);
}
;// ./src/components/form/ForgotForm.vue?vue&type=template&id=44b8420c

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ForgotForm.vue?vue&type=script&lang=js






const ForgotFormvue_type_script_lang_js_formData = {
  email: '',
  securecode: '',
  capid: ''
};
/* harmony default export */ var ForgotFormvue_type_script_lang_js = ({
  props: {
    labels: Object
  },
  setup(props, context) {
    const localData = (0,reactivity_esm_bundler/* ref */.KR)({
      ...ForgotFormvue_type_script_lang_js_formData
    });
    const successVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const reqalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.empty_alert);
    const emailalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.email_alert);
    const requiredMessage = () => {
      return validators_dist/* helpers */._$.withMessage(reqalert, validators_dist/* required */.mw);
    };
    const emailMessage = () => {
      return validators_dist/* helpers */._$.withMessage(emailalert, validators_dist/* email */.Rp);
    };
    const validateRules = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return {
        email: {
          required: requiredMessage(),
          email: emailMessage()
        },
        securecode: {
          required: requiredMessage()
        }
      };
    });
    const v$ = (0,dist/* useVuelidate */.fG)(validateRules, localData, {
      $lazy: true,
      $autoDirty: true
    });
    let onactivated = (0,runtime_core_esm_bundler/* onActivated */.n)(() => {
      console.log("ForgotForm.vue: onActivated ... ");
      context.emit("activated", "forgot");
    });
    return {
      v$,
      localData,
      reqalert,
      emailalert,
      successVisible,
      onactivated
    };
  },
  created() {
    (0,runtime_core_esm_bundler/* watch */.wB)(this.$props, newProps => {
      this.reqalert = newProps.labels.empty_alert;
      this.emailalert = newProps.labels.email_alert;
    });
  },
  mounted() {
    console.log("ForgotForm.vue mounted ...");
  },
  methods: {
    reset() {
      this.localData = {
        ...ForgotFormvue_type_script_lang_js_formData
      };
      this.v$.$reset();
      this.successVisible = false;
    },
    setting() {
      console.log("ForgotForm.vue: setting ...");
      this.loadSecureImage();
    },
    focus() {
      this.$refs.email.focus();
    },
    async validateForm(focusing = true) {
      console.log("validateForm: localData", this.localData);
      const valid = await this.v$.$validate();
      console.log("validate form: valid", valid);
      console.log("error:", this.v$.$errors);
      if (!valid) {
        if (focusing) {
          this.focusFirstError();
        }
        return false;
      }
      return true;
    },
    focusFirstError() {
      if (this.v$.$errors && this.v$.$errors.length > 0) {
        let input = this.v$.$errors[0].$property;
        let el = this.$refs[input];
        if (el) el.focus();else jquery_default()("#" + input).trigger("focus");
      }
    },
    loadSecureImage() {
      console.log("ForgotForm.vue loadSecureImage ...");
      let formdata = {
        capid: this.localData.capid
      };
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/captcha/create",
        data: JSON.stringify(formdata),
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: (data, status, transport) => {
          console.log("loadSecureImage: success", transport.responseText);
          if (data.body?.rows?.id && data.body?.rows?.src) {
            this.localData.capid = data.body.rows.id;
            jquery_default()("#secureimage").attr("src", data.body.rows.src);
          }
        }
      });
    },
    refreshClick() {
      this.loadSecureImage();
    },
    cancelClick() {
      this.$root.goLogIn();
    },
    async sendClick() {
      console.log("click: send");
      let valid = await this.validateForm();
      if (!valid) return;
      this.startSendRecord();
    },
    startSendRecord() {
      (0,will_app/* confirmSend */.h_)(() => {
        this.sendRecord(this.localData);
      });
    },
    sendRecord(dataRecord) {
      let jsondata = {
        ajax: true
      };
      let formdata = Object.assign(jsondata, dataRecord);
      console.log("sendRecord: formdata", formdata);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/forgot/password",
        data: JSON.stringify(formdata),
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: (data, status, xhr) => {
          console.log("sendRecord: success : ", xhr.responseText);
          (0,will_app/* stopWaiting */.Sk)();
          this.sendSuccess(data);
        }
      });
    },
    sendSuccess(data) {
      console.log("sendSuccess : ", data);
      if (data.head?.errorflag == "Y") {
        (0,will_app/* alertbox */.Cb)(data.head.errordesc);
      } else {
        this.successVisible = true;
      }
    },
    display() {
      this.reset();
      this.focus();
      this.refreshClick();
    },
    loginClick() {
      this.$root.goLogIn();
    }
  }
});
;// ./src/components/form/ForgotForm.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/ForgotForm.vue?vue&type=style&index=0&id=44b8420c&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/form/ForgotForm.vue?vue&type=style&index=0&id=44b8420c&lang=css

;// ./src/components/form/ForgotForm.vue




;


const ForgotForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ForgotFormvue_type_script_lang_js, [['render',ForgotFormvue_type_template_id_44b8420c_render]])

/* harmony default export */ var ForgotForm = (ForgotForm_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/FactorForm.vue?vue&type=template&id=495c940d

const FactorFormvue_type_template_id_495c940d_hoisted_1 = {
  id: "factor_verify",
  class: "pt-page pt-page-current pt-page-controller"
};
const FactorFormvue_type_template_id_495c940d_hoisted_2 = {
  class: "page-header-title",
  title: "2FA Verification"
};
const FactorFormvue_type_template_id_495c940d_hoisted_3 = {
  id: "factor_entrypanel"
};
const FactorFormvue_type_template_id_495c940d_hoisted_4 = {
  id: "factor_entrylayer",
  class: "entry-layer"
};
const FactorFormvue_type_template_id_495c940d_hoisted_5 = {
  class: "portal-area sub-entry-layer"
};
const FactorFormvue_type_template_id_495c940d_hoisted_6 = {
  class: "row row-height"
};
const FactorFormvue_type_template_id_495c940d_hoisted_7 = {
  class: "col-md-8 col-height"
};
const FactorFormvue_type_template_id_495c940d_hoisted_8 = {
  key: 0
};
const FactorFormvue_type_template_id_495c940d_hoisted_9 = {
  key: 0
};
const FactorFormvue_type_template_id_495c940d_hoisted_10 = {
  class: "row row-height"
};
const FactorFormvue_type_template_id_495c940d_hoisted_11 = {
  class: "col-height col-md-4 factor-code-layer"
};
const FactorFormvue_type_template_id_495c940d_hoisted_12 = {
  for: "factorcode",
  id: "factorcode_label",
  class: "control-label"
};
const FactorFormvue_type_template_id_495c940d_hoisted_13 = {
  key: 0,
  class: "has-error"
};
const FactorFormvue_type_template_id_495c940d_hoisted_14 = {
  class: "row row-height"
};
const FactorFormvue_type_template_id_495c940d_hoisted_15 = {
  class: "col-md-4 factor-link-layer"
};
function FactorFormvue_type_template_id_495c940d_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", FactorFormvue_type_template_id_495c940d_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.factor_caption), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_6, [_cache[12] || (_cache[12] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "col-md-3 col-height col-label text-right"
  }, " ", -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_7, [$options.isEnglish ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
    key: 0
  }, [_cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" The system force you to entry verification code, please specify your Google Authenticator code.")), _cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), !$options.isFactorRegistered ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", FactorFormvue_type_template_id_495c940d_hoisted_8, [_cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)("You can download mobile application Google Authenticator and add with QR Code via ")), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    title: "Add Google Authenticator",
    tabIndex: "-1",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.openFactorInfo && $options.openFactorInfo(...args))
  }, "Add 2FA")])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 64)) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
    key: 1
  }, [_cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" ระบบต้องการตรวจสอบเพิ่มเติม โปรดระบุรหัสจากโปรแกรมมือถือ Google Authenticator")), _cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1)), !$options.isFactorRegistered ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", FactorFormvue_type_template_id_495c940d_hoisted_9, [_cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)("สามารถดาวน์โหลดโปรแกรมมือถือ Google Authenticator และทำการเพิ่มได้ที่ ")), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    href: "javascript:void(0)",
    title: "Add Google Authenticator",
    tabIndex: "-1",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.openFactorInfo && $options.openFactorInfo(...args))
  }, "เพิ่ม 2FA")])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 64)), _cache[11] || (_cache[11] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1))])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_10, [_cache[13] || (_cache[13] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "col-md-4"
  }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", FactorFormvue_type_template_id_495c940d_hoisted_12, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.factorcode_label), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(["input-grouper", {
      'has-error': $setup.v$.factorcode.$error
    }])
  }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    ref: "factorcode",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.localData.factorcode = $event),
    type: "text",
    id: "factorcode",
    name: "factorcode",
    class: "form-control input-md irequired alert-input",
    maxlength: "8",
    placeholder: "Code"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.factorcode]])], 2), $setup.v$.factorcode.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", FactorFormvue_type_template_id_495c940d_hoisted_13, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.factorcode.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_14, [_cache[15] || (_cache[15] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "col-md-4"
  }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", FactorFormvue_type_template_id_495c940d_hoisted_15, [!$options.isFactorRegistered ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("a", {
    key: 0,
    href: "javascript:void(0)",
    id: "factorliker",
    class: "factor-linker",
    title: "Add Google Authenticator",
    tabIndex: "-1",
    onClick: _cache[3] || (_cache[3] = (...args) => $options.openFactorInfo && $options.openFactorInfo(...args))
  }, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.factor_label), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    onClick: _cache[4] || (_cache[4] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => $options.submitClick && $options.submitClick(...args), ["stop"])),
    id: "submitbutton",
    class: "btn btn-dark btn-sm pull-right submit-button"
  }, [_cache[14] || (_cache[14] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
    class: "fa fa-ticket fas fa-ticket-alt fa-btn-icon"
  }, null, -1)), (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.submit_button), 1)])])])])])]), _cache[16] || (_cache[16] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1))]), ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(runtime_core_esm_bundler/* Teleport */.Im, {
    to: "#modaldialog"
  }, [_cache[17] || (_cache[17] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    id: "factormodaldialog_layer",
    class: "modal fade pt-page pt-page-item",
    tabindex: "-1",
    role: "dialog"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "modal-dialog modal-xm"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "modal-content portal-area fa-portal-area"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "modal-header"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h4", {
    class: "modal-title",
    id: "modalheadertitle"
  }, "Verification"), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal"
  }, "×")]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br"), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br"), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "text-center"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h4", null, "Scan QR Code add to Google Authenticator")]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br"), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br"), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "qr-image-layer"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
    id: "qrimg",
    alt: ""
  })])])])], -1))]))], 64);
}
;// ./src/components/form/FactorForm.vue?vue&type=template&id=495c940d

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/FactorForm.vue?vue&type=script&lang=js









const FactorFormvue_type_script_lang_js_formData = {
  factorcode: '',
  factorid: ''
};
/* harmony default export */ var FactorFormvue_type_script_lang_js = ({
  props: {
    labels: Object
  },
  emits: ["success"],
  setup(props, context) {
    const localData = (0,reactivity_esm_bundler/* ref */.KR)({
      ...FactorFormvue_type_script_lang_js_formData
    });
    const alreadyLoaded = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const reqalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.empty_alert);
    const requiredMessage = () => {
      return validators_dist/* helpers */._$.withMessage(reqalert, validators_dist/* required */.mw);
    };
    const validateRules = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return {
        factorcode: {
          required: requiredMessage()
        }
      };
    });
    const v$ = (0,dist/* useVuelidate */.fG)(validateRules, localData, {
      $lazy: true,
      $autoDirty: true
    });
    let onactivated = (0,runtime_core_esm_bundler/* onActivated */.n)(() => {
      console.log("FactorForm.vue: onActivated ... ");
      context.emit("activated", "factor");
    });
    return {
      accessor: accessor,
      v$,
      localData,
      reqalert,
      onactivated,
      alreadyLoaded
    };
  },
  created() {
    (0,runtime_core_esm_bundler/* watch */.wB)(this.$props, newProps => {
      this.reqalert = newProps.labels.empty_alert;
    });
  },
  mounted() {
    console.log("FactorForm.vue mounted ...");
    this.$nextTick(() => {
      jquery_default()(this.$refs.factorcode).on("keydown", e => {
        if (e.which == 13) {
          this.submitClick();
        }
      });
      jquery_default()("#factormodaldialog_layer").find(".modal-dialog").draggable();
    });
  },
  computed: {
    isEnglish() {
      return this.accessor.lang == "EN";
    },
    isFactorRegistered() {
      return this.accessor.info?.factorflag == '1';
    }
  },
  methods: {
    reset() {
      this.localData = {
        ...FactorFormvue_type_script_lang_js_formData
      };
      this.localData.factorid = this.accessor.info?.factorid;
      this.v$.$reset();
      this.alreadyLoaded = false;
    },
    setting() {
      console.log("FactorForm.vue: setting ...");
    },
    focus() {
      this.$refs.factorcode.focus();
    },
    success() {
      this.$emit('success', 'factor', this.localData);
    },
    async validateForm(focusing = true) {
      console.log("validateForm: localData", this.localData);
      const valid = await this.v$.$validate();
      console.log("validate form: valid", valid);
      console.log("error:", this.v$.$errors);
      if (!valid) {
        if (focusing) {
          this.focusFirstError();
        }
        return false;
      }
      return true;
    },
    focusFirstError() {
      if (this.v$.$errors && this.v$.$errors.length > 0) {
        let input = this.v$.$errors[0].$property;
        let el = this.$refs[input];
        if (el) el.focus();else jquery_default()("#" + input).trigger("focus");
      }
    },
    loadQRCode() {
      let params = {
        factorid: this.localData.factorid
      };
      let formdata = (0,will_app/* serializeParameters */.L3)({
        ajax: true
      }, params, true);
      console.log("FactorForm.vue loadQRCode: alreadyLoaded=", this.alreadyLoaded, ", formdata", formdata);
      if (this.alreadyLoaded) return;
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/factor/get",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: (data, status, transport) => {
          (0,will_app/* stopWaiting */.Sk)();
          console.log("loadQRCode: success", transport.responseText);
          if (data.body?.factorimage) {
            jquery_default()("#qrimg").attr("src", data.body?.factorimage);
            this.alreadyLoaded = true;
          }
        }
      });
    },
    async submitClick() {
      console.log("click: submit");
      let valid = await this.validateForm();
      if (!valid) return;
      this.startSubmitRecord();
    },
    startSubmitRecord() {
      this.submitRecord(this.localData);
    },
    submitRecord(dataRecord) {
      let jsondata = {
        ajax: true
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, dataRecord);
      console.log("submitRecord: formdata", formdata);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + "/api/factor/verify",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown, false);
        },
        success: (data, status, xhr) => {
          console.log("submitRecord: success : ", xhr.responseText);
          (0,will_app/* stopWaiting */.Sk)();
          this.submitSuccess(data);
        }
      });
    },
    submitSuccess(data) {
      console.log("submitSuccess : ", data);
      if (data.head?.errorflag == "Y") {
        (0,will_app/* alertbox */.Cb)(data.head.errordesc);
      } else {
        this.accessor.info.factorcode = this.localData.factorcode;
        this.success();
      }
    },
    display() {
      this.reset();
      setTimeout(() => {
        this.focus();
      }, 100);
    },
    loginClick() {
      this.$root.goLogIn();
    },
    openFactorInfo() {
      jquery_default()("#factormodaldialog_layer").modal("show");
      this.loadQRCode();
    }
  }
});
;// ./src/components/form/FactorForm.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/form/FactorForm.vue?vue&type=style&index=0&id=495c940d&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/form/FactorForm.vue?vue&type=style&index=0&id=495c940d&lang=css

;// ./src/components/form/FactorForm.vue




;


const FactorForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(FactorFormvue_type_script_lang_js, [['render',FactorFormvue_type_template_id_495c940d_render]])

/* harmony default export */ var FactorForm = (FactorForm_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/VueSure.vue?vue&type=script&lang=js




















const programVersion = "1.0.6";
/* harmony default export */ var VueSurevue_type_script_lang_js = ({
  components: {
    MetroSiderBar: MetroSiderBar,
    MetroHeaderBar: MetroHeaderBar,
    MetroHeaderBarMobile: MetroHeaderBarMobile,
    MetroSubHeaderBar: MetroSubHeaderBar,
    LoginForm: LoginForm,
    WorkerFrame: WorkerFrame,
    BlankForm: BlankForm,
    ChangeForm: ChangeForm,
    ForgotForm: ForgotForm,
    FactorForm: FactorForm
  },
  setup() {
    let labels = (0,reactivity_esm_bundler/* ref */.KR)((0,will_app/* getLabelModel */.aU)());
    let isShowing = (0,reactivity_esm_bundler/* ref */.KR)(true);
    let loginVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    let menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    let workingVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    let chatEnable = (0,reactivity_esm_bundler/* ref */.KR)(false);
    let notifyEnable = (0,reactivity_esm_bundler/* ref */.KR)(false);
    let languageEnable = (0,reactivity_esm_bundler/* ref */.KR)(true);
    let currentForcePage = (0,reactivity_esm_bundler/* ref */.KR)("BlankForm");
    let mode = (0,reactivity_esm_bundler/* ref */.KR)("");
    return {
      programVersion,
      labels,
      accessor: accessor,
      favorite: favorite,
      isShowing,
      loginVisible,
      menuVisible,
      workingVisible,
      currentForcePage,
      mode,
      chatEnable,
      notifyEnable,
      languageEnable
    };
  },
  mounted() {
    console.log("App: on mounted ...");
    this.$nextTick(() => {
      (0,will_app/* startApplication */.xL)("index");
      validAccessToken((valid, json) => {
        console.log("valid :", valid, ", json :", json);
        if (!valid) {
          (0,will_app/* removeAccessorInfo */.Or)();
          this.loginVisible = true;
          setTimeout(() => {
            this.$refs.loginForm.focus();
          }, 5);
        } else {
          this.verifyAfterLogin(json.body);
        }
      });
      /**
       * This try to load label and message code from server (api label & msgcode)
       * in case of server except authorize label & msgcode service 
       * then define default.js with META_INFO.ALLOW_LOAD_LABEL = true too       
       * in the other way this will load label after login success
       * */
      if (String((0,will_app/* getMetaInfo */.Ch)().ALLOW_LOAD_LABEL) == "true") {
        this.loadLabel();
      }
    });
  },
  methods: {
    changeLanguage(lang) {
      let labelModel = (0,will_app/* getLabelModel */.aU)(lang);
      this.labels = labelModel;
      this.$refs.siderBar.changeLanguage(lang);
    },
    loadLabel() {
      (0,will_app/* loadAndMergeLabel */.Sg)("vindex", success => {
        if (success) {
          this.changeLanguage((0,will_app/* getDefaultLanguage */.i5)());
        }
      });
    },
    verifyAfterLogin(body) {
      console.log("verifyAfterLogin: body", body);
      this.setAccessInfo(body);
      if (body?.factorverify && body?.factorid != "" && (body?.factorcode == undefined || body?.factorcode == "")) {
        console.log("two factor ...");
        this.isShowing = false;
        this.mode = "factor";
        this.currentForcePage = FactorForm;
      } else {
        this.verifyForcePage(body);
      }
      this.loadLabel();
    },
    verifyForcePage(body) {
      if (body?.changeflag == "1") {
        console.log("force change password ...");
        this.isShowing = false;
        this.mode = "force";
        this.currentForcePage = ChangeForm;
      } else if (body?.expireflag == "1") {
        console.log("password expired ...");
        this.isShowing = false;
        this.mode = "expire";
        this.currentForcePage = ChangeForm;
      } else {
        this.displayMenu();
        startReceiveBroadcast();
      }
    },
    setAccessInfo(info) {
      this.accessor.setInfo(info);
      let lang = this.accessor.info?.langcode || (0,will_app/* getDefaultLanguage */.i5)();
      this.$refs.headerBar.changeLanguage(lang);
      this.$refs.siderBar.changeLanguage(lang);
    },
    loginSuccess(info) {
      console.log("login success: info", info);
      this.verifyAfterLogin(info);
    },
    displayMenu() {
      this.resetBody();
      this.mode = "";
      this.currentForcePage = BlankForm;
      this.isShowing = true;
      this.loginVisible = false;
      this.menuVisible = true;
      this.$refs.headerBar.setting();
      this.$refs.siderBar.setting((success, menulists) => {
        this.loadFirstPage(success, menulists);
      });
      //this.$refs.workerFrame.setting();
      this.enableControls();
      refreshScreen();
      fetchMoreInfo();
      this.startNotify();
      this.startChating();
    },
    enableControls() {
      this.chatEnable = String((0,will_app/* getMetaInfo */.Ch)()?.chat) == "true";
      this.notifyEnable = String((0,will_app/* getMetaInfo */.Ch)()?.notify) == "true";
      this.languageEnable = !(String((0,will_app/* getMetaInfo */.Ch)()?.language) == "false");
    },
    menuSelected(menu) {
      console.log("App.vue: menu selected:", menu);
      if ("logout" == menu) {
        this.goLogOut();
      } else if ("home" == menu) {
        this.goHome();
      } else if ("intro" == menu) {
        this.$refs.workerFrame.hideWorkerMenu();
      } else if ("profile" == menu) {
        this.$refs.workerFrame.showProfile();
      } else if ("changepassword" == menu) {
        this.$refs.workerFrame.showChangePassword();
      }
    },
    goHome() {
      this.loadFirstPage();
    },
    openWorkingPage() {
      this.workingVisible = false;
      this.$refs.headerBar.showLanguage();
      this.$refs.workerFrame.showWorkerMenu();
    },
    goLogOut() {
      jquery_default()(window.document.body).addClass("body-login");
      logOut({
        ...this.accessor.info
      });
      this.$refs.workerFrame.reset();
      this.$refs.headerBar.reset();
      this.$refs.siderBar.reset();
      this.$refs.loginForm.reset();
      this.$refs.loginForm.focus();
      this.loginVisible = true;
      this.menuVisible = false;
      this.accessor.reset();
      this.stopNotify();
      this.stopChating();
      if (isSSOSignedIn()) {
        doSSOLogout();
      }
      stopReceiveBroadcast();
    },
    goLogIn() {
      jquery_default()(window.document.body).addClass("body-login");
      this.isShowing = true;
      this.mode = "";
      this.currentForcePage = BlankForm;
    },
    openFirstPage(success, menulists) {
      return this.$refs.siderBar.openFirstPage(success, menulists);
    },
    loadFirstPage(success = true, menulists) {
      if (!success) return;
      let found = this.openFirstPage(success, menulists);
      if (!found) this.openWorkingPage();
    },
    hideMenu() {
      this.$refs.headerBar.collapseSideBar();
    },
    resetBody() {
      jquery_default()(window.document.body).removeClass("body-login");
    },
    componentActivated(name) {
      console.log("component activated: ", name);
      if ("changepassword" == name) {
        this.resetBody();
        this.$refs.forceComponent.display(this.mode);
      } else if ("forgot" == name) {
        this.resetBody();
        this.$refs.forceComponent.display(this.mode);
      } else if ("factor" == name) {
        this.resetBody();
        this.$refs.forceComponent.display(this.mode);
      }
    },
    processSuccess(action, info) {
      console.log("processSuccess: action", action, ", info", info);
      if ("changepassword" == action) {
        this.displayMenu();
      } else if ("factor" == action) {
        this.verifyForcePage(this.accessor.info);
      }
    },
    forgotPassword() {
      console.log("forgot password click ...");
      this.isShowing = false;
      this.mode = "forgot";
      this.currentForcePage = ForgotForm;
    },
    openChat() {
      if (jquery_default()("#fschatinglayer").is(":visible")) {
        jquery_default()("#fschatinglayer").hide();
      } else {
        jquery_default()("#fschatinglayer").show();
      }
    },
    openChating() {
      let authtoken = (0,will_app/* getAccessorToken */.fD)();
      let appurl = (0,will_app/* getBaseUrl */.$_)() + "/gui/chat";
      (0,will_app/* submitWindow */.P1)({
        method: "POST",
        url: appurl,
        windowName: "chatingframe",
        params: "seed=" + Math.random() + "&authtoken=" + authtoken + "&language=" + (0,will_app/* getDefaultLanguage */.i5)()
      });
    },
    startChating() {
      if (this.chatEnable) {
        this.openChating();
      }
    },
    stopChating() {
      if (this.chatEnable) {
        jquery_default()("#fschatinglayer").hide();
        window.open((0,will_app/* getBaseUrl */.$_)() + "/blank.html", "chatingframe");
      }
    },
    openNotify() {
      let authtoken = (0,will_app/* getAccessorToken */.fD)();
      let appurl = (0,will_app/* getBaseUrl */.$_)() + "/gui/notify";
      (0,will_app/* submitWindow */.P1)({
        method: "POST",
        url: appurl,
        windowName: "notifyframe",
        params: "seed=" + Math.random() + "&authtoken=" + authtoken + "&language=" + (0,will_app/* getDefaultLanguage */.i5)()
      });
    },
    startNotify() {
      if (this.notifyEnable) {
        this.openNotify();
      }
    },
    stopNotify() {
      if (this.notifyEnable) {
        jquery_default()("#nn_alert_container").empty();
        jquery_default()("#kt_alert_container").empty();
        window.open((0,will_app/* getBaseUrl */.$_)() + "/blank.html", "notifyframe");
      }
    }
  }
});
;// ./src/VueSure.vue?vue&type=script&lang=js
 
;// ./src/VueSure.vue




;
const VueSure_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(VueSurevue_type_script_lang_js, [['render',render]])

/* harmony default export */ var VueSure = (VueSure_exports_);
;// ./src/vuesure.js






























initAppConfig(function (cfg) {
  console.log("init app config:", cfg);
});
(0,will_app/* appInit */.yR)({
  program_message: program_message_namespaceObject,
  default_labels: default_label_namespaceObject,
  program_labels: program_label_namespaceObject,
  listen_messaging: 'parent'
}, handleIncommingMessage);


console.log("Vue version", runtime_core_esm_bundler/* version */.rE);
console.log("window.jQuery version", window.jQuery.fn.jquery);
(0,runtime_dom_esm_bundler/* createApp */.Ef)(VueSure).mount('#app');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvuesure"] = self["webpackChunkvuesure"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [504], function() { return __webpack_require__(505); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.c71c6758.js.map