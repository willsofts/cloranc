/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5198:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(6587);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./node_modules/jquery-ui-dist/jquery-ui.js
var jquery_ui = __webpack_require__(9827);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.js
var bootstrap = __webpack_require__(5707);
// EXTERNAL MODULE: ./node_modules/bootbox/bootbox.js
var bootbox = __webpack_require__(954);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
;// CONCATENATED MODULE: ./src/assets/jquery/js/jquery.maskedinput.js


/*
	Masked Input plugin for jQuery
	Version: 1.2.2 (03/09/2009 22:39:06)
	Modification : build 1.0 (23/11/2010)
	Usage : ex. 
		$("#mask1").mask("99/99/9999",{placeholder:"_"});
		$("#mask2").mask("aaaaaaaa");
		$("#mask3").mask("AAAAAAAAAA");
		$("#mask4").mask("eeeeeee");
		$("#mask5").mask("EEEEEE");
		$("#mask6").mask("xxxxxxxxxx");
		$("#mask7").mask("XXXXXXXXXX");
		$("#mask8").mask("(100)T");
		$("#mask9").mask("**********");		
*/
(function ($) {
  var pasteEventName = "input.mask";
  var iPhone = window.orientation != undefined;
  $.mask = {
    //Predefined character definitions
    definitions: {
      '9': "[0-9]",
      '*': "[A-Za-z0-9]",
      'E': "[A-Z]",
      'e': "[A-Za-z]",
      'A': "[A-Z0-9#&+_-]",
      'a': "[A-Za-z0-9#&+_-]",
      'X': "[A-Z0-9!\"#$%&'()*+,.\\/:;<=>?@^_`{|}~-]",
      'x': "[A-Za-z0-9!\"#$%&'()*+,.\\/:;<=>?@^_`{|}~-]",
      'T': "[^~]"
    }
  };
  $.fn.extend({
    //Helper Function for Caret positioning
    caret: function (begin, end) {
      if (this.length == 0) return;
      if (typeof begin == 'number') {
        end = typeof end == 'number' ? end : begin;
        return this.each(function () {
          if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(begin, end);
          } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        });
      } else {
        if (this[0].setSelectionRange) {
          begin = this[0].selectionStart;
          end = this[0].selectionEnd;
        } else if (document.selection && document.selection.createRange) {
          var range = document.selection.createRange();
          begin = 0 - range.duplicate().moveStart('character', -100000);
          end = begin + range.text.length;
        }
        return {
          begin: begin,
          end: end
        };
      }
    },
    unmask: function () {
      return this.trigger("unmask");
    },
    mask: function (mask, settings) {
      if (!mask && this.length > 0) {
        var $input = $(this[0]);
        var tests = $input.data("tests");
        return $.map($input.data("buffer"), function (c, i) {
          return tests[i] ? c : null;
        }).join('');
      }
      settings = $.extend({
        placeholder: "",
        entirely: false,
        completed: null
      }, settings);
      var defs = $.mask.definitions;
      tests = [];
      var firstIdx = mask.indexOf("(");
      var lastIdx = mask.indexOf(")");
      if (firstIdx >= 0 && lastIdx >= 0) {
        let count = mask.substring(firstIdx + 1, lastIdx);
        let buf = mask.substring(0, firstIdx);
        let str2 = mask.substring(lastIdx + 1);
        let cntr = parseInt(count);
        for (let i = 0; i < cntr; i++) buf += str2.charAt(0);
        buf += str2.substring(1);
        mask = buf;
      }
      var firstNonMaskPos = null;
      var partialPosition = mask.length;
      var len = mask.length;
      $.each(mask.split(""), function (i, c) {
        if (c == '?') {
          len--;
          partialPosition = i;
        } else if (defs[c]) {
          tests.push(new RegExp(defs[c]));
          if (firstNonMaskPos == null) firstNonMaskPos = tests.length - 1;
        } else {
          tests.push(null);
        }
      });
      return this.each(function () {
        var $input = $(this);
        var buffer = $.map(mask.split(""), function (c) {
          if (c != '?') return defs[c] ? settings.placeholder : c;
        });
        var ignore = false; //Variable for ignoring control keys
        var focusText = $input.val();
        var keycode = "";
        $input.data("buffer", buffer).data("tests", tests);
        var mask_input = buffer.join('');
        function seekNext(pos) {
          while (++pos <= len && !tests[pos]);
          return pos;
        }
        function shiftL(pos) {
          if (pos > -1 && pos < len) {
            while (!tests[pos] && --pos >= 0);
            for (var i = pos; i < len; i++) {
              if (tests[i]) {
                buffer[i] = settings.placeholder;
                var j = seekNext(i);
                if (j < len && tests[i].test(buffer[j])) {
                  buffer[i] = buffer[j];
                } else break;
              }
            }
            writeBuffer();
            $input.caret(Math.max(firstNonMaskPos, pos));
          }
        }
        function shiftL2(begin) {
          if (begin > -1 && begin < len) {
            while (!tests[begin] && --begin >= 0);
            writeBuffer();
            $input.caret(Math.max(firstNonMaskPos, begin));
          }
        }
        function shiftR(pos) {
          for (var i = pos, c = settings.placeholder; i < len; i++) {
            if (tests[i]) {
              var j = seekNext(i);
              var t = buffer[i];
              buffer[i] = c;
              if (j < len && tests[j].test(t)) c = t;else break;
            }
          }
        }
        function keydownEvent(e) {
          if ($(this).is("[readonly]")) return true;
          var pos = $(this).caret();
          var k = e.charCode || e.keyCode || e.which;
          keycode = e.charCode || e.keyCode || e.which;
          ignore = k < 16 || k > 16 && k < 32 || k > 32 && k < 41;
          //delete selection before proceeding
          if (pos.begin - pos.end != 0 && (!ignore || k == 8 || k == 46)) {
            clearBuffer(pos.begin, pos.end);
          }
          //backspace, delete, and escape get special treatment
          if (k == 8 || k == 46 || iPhone && k == 127) {
            //backspace/delete
            if (pos.begin - pos.end != 0) {
              shiftL2(pos.begin, pos.end);
              if ($input.val() == mask_input) {
                $input.val("");
              }
            } else {
              shiftL(pos.begin + (k == 46 ? 0 : -1));
              if ($input.val() == mask_input) {
                $input.val("");
              }
            }
            triggerInput($input);
            return false;
          } else if (k == 27) {
            //escape
            $input.val(focusText);
            $input.caret(0, checkVal());
            return false;
          }
        }
        function checkLength() {
          if (settings.placeholder != "") {
            if ($input.val().indexOf(settings.placeholder) > -1 || $input.val().length == 0) {
              return true;
            } else {
              return false;
            }
          }
          if ($input.val().length < mask.length) {
            return true;
          }
          return false;
        }
        function keypressEvent(e) {
          if ($(this).is("[readonly]")) return true;
          if (ignore) {
            ignore = false;
            //Fixes Mac FF bug on backspace
            return e.keyCode == 8 ? false : null;
          }
          e = e || window.event;
          var k = e.charCode || e.keyCode || e.which;
          var pos = $(this).caret();
          if (checkLetter()) {
            clearBuffer2();
          }
          //alert("keycode in keypress : "+k+" character : "+String.fromCharCode(k)+" keycode in keydown: "+keycode);
          if (e.ctrlKey || e.altKey || e.metaKey) {
            //Ignore
            return true;
          } else if (keycode >= 32 && keycode <= 125 && keycode != 45 && keycode != 46 || keycode >= 186) {
            //typeable characters
            var p = seekNext(pos.begin - 1);
            if (checkLength() || pos.begin - pos.end != 0) {
              if (p < len) {
                if ($input.val().length == 0) buffer = $.map(mask.split(""), function (c) {
                  if (c != '?') return defs[c] ? settings.placeholder : c;
                });
                if (settings.placeholder != "") {
                  writeBuffer();
                }
                var c = String.fromCharCode(k);
                if (isUpper(findDefs(tests[p].source))) c = c.toUpperCase();
                if (tests[p].test(c)) {
                  shiftR(p);
                  buffer[p] = c;
                  writeBuffer();
                  var next = seekNext(p);
                  $(this).caret(next);
                  if (settings.completed && next == len) {
                    settings.completed.call($input);
                  }
                }
              }
            }
            triggerInput($input);
          }
          return false;
        }
        function clearBuffer(start, end) {
          for (let i = start; i < end && i < len; i++) {
            if (tests[i]) buffer[i] = settings.placeholder;
          }
          if (checkLetter()) {
            var j = 0;
            var temp = $.map(mask.split(""), function (c) {
              if (c != '?') return defs[c] ? settings.placeholder : c;
            });
            for (let i = 0; i < buffer.length; i++) {
              if (buffer[i] != "" && tests[i]) {
                temp[j++] = buffer[i];
              }
            }
            buffer = temp;
          }
        }
        function clearBuffer2() {
          if (!checkBuffer()) {
            var j = 0;
            var temp = $.map(mask.split(""), function (c) {
              if (c != '?') return defs[c] ? settings.placeholder : c;
            });
            for (var i = 0; i < buffer.length; i++) {
              if (buffer[i] != "" && tests[i]) {
                temp[j++] = buffer[i];
              } else {
                break;
              }
            }
            buffer = temp;
          }
        }
        function checkBuffer() {
          if ($input.val().length > -1) {
            var temp_input = "";
            for (var i = 0; i < len; i++) {
              if (buffer[i] == "") {
                break;
              }
              temp_input = temp_input + buffer[i];
            }
            if (buffer.join('') == temp_input) {
              return true;
            }
          }
          return false;
        }
        function checkLetter() {
          for (var i = 0; i < mask.length; i++) {
            if (defs[mask.charAt(i)] == null) {
              return false;
            }
          }
          return true;
        }
        function findDefs(src) {
          for (var p in defs) {
            if (defs[p] == src) return p;
          }
          return "";
        }
        function isUpper(c) {
          return c == 'E' || c == 'A' || c == 'X';
        }
        function writeBuffer() {
          let v = buffer.join('');
          $input.val(v);
          return v;
        }
        function triggerInput($input) {
          $input.get(0).dispatchEvent(new Event('input', {
            bubbles: true
          }));
        }
        function checkVal(allow) {
          //try to place characters where they belong
          var test = $input.val();
          var lastMatch = -1;
          for (var i = 0, pos = 0; i < len; i++) {
            if (tests[i]) {
              buffer[i] = settings.placeholder;
              while (pos++ < test.length) {
                var c = test.charAt(pos - 1);
                if (tests[i].test(c)) {
                  buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }
              if (pos > test.length) break;
            } else if (buffer[i] == test[pos] && i != partialPosition) {
              pos++;
              lastMatch = i;
            }
          }
          if (!allow && lastMatch + 1 < partialPosition) {
            if (settings.entirely) {
              $input.val("");
              clearBuffer(0, len);
            }
          } else if (allow || lastMatch + 1 >= partialPosition) {
            writeBuffer();
            if (!allow) {
              $input.val($input.val().substring(0, lastMatch + 1));
            }
          }
          return partialPosition ? i : firstNonMaskPos;
        }
        if (!$input.attr("readonly")) $input.one("unmask", function () {
          $input.unbind(".mask").removeData("buffer").removeData("tests");
        }).bind("focus.mask", function () {
          focusText = $input.val();
          let pos = checkVal();
          if (pos == mask.length) $input.caret(0, pos);else $input.caret(pos);
        }).bind("blur.mask", function () {
          checkVal();
          if ($input.val() != focusText) {
            $input.trigger("change");
          }
        }).bind("keydown.mask", keydownEvent).bind("keypress.mask", keypressEvent).bind(pasteEventName, function () {
          setTimeout(function () {
            $input.caret(checkVal(true));
          }, 0);
          return false;
        });
        checkVal(); //Perform initial check for existing values
      });
    }
  });
})((jquery_default()));
;// CONCATENATED MODULE: ./src/assets/json/program_message.json
var program_message_namespaceObject = /*#__PURE__*/JSON.parse('[{"code":"QS0001","TH":"คุณต้องการลบรายการนี้ใช่หรือไม่ %s","EN":"Do you want to delete this transaction? %s"},{"code":"QS0002","TH":"คุณต้องการบันทึกรายการนี้ใช่หรือไม่","EN":"Do you want to save this transaction?"},{"code":"QS0003","TH":"คุณต้องการยกเลิกรายการนี้ใช่หรือไม่","EN":"Do you want to cancel this transaction?"},{"code":"QS0004","TH":"บันทึกรายการเรียบร้อยแล้ว %s","EN":"Process Success %s"},{"code":"QS0005","TH":"ท่านต้องการลบรายการนี้ใช่หรือไม่ %s","EN":"Do you want to delete this record? %s"},{"code":"QS0006","TH":"คุณต้องการส่งรายการนี้ใช่หรือไม่","EN":"Do you want to send this transaction?"},{"code":"QS0007","TH":"คุณต้องการปรับปรุงรายการนี้ใช่หรือไม่","EN":"Do you want to update this transaction?"},{"code":"QS0008","TH":"คุณต้องการล้างรายการนี้ใช่หรือไม่","EN":"Do you want to clear this?"},{"code":"QS0009","TH":"คุณต้องการดำเนินการ รายการนี้ใช่หรือไม่","EN":"Do you want to process this transaction?"},{"code":"QS0010","TH":"คุณต้องการบันทึกเป็นรายการนี้ใช่หรือไม่","EN":"Do you want to save as this transaction ?"},{"code":"QS0011","TH":"คุณต้องการยืนยันการรับรายการนี้ใช่หรือไม่","EN":"Do you want to receive this transaction?"},{"code":"QS0012","TH":"คุณต้องการล้างและเริ่มใหม่รายการนี้ใช่หรือไม่","EN":"Do you want to reset this transaction?"},{"code":"QS0013","TH":"คุณต้องการลบ %s รายการใช่หรือไม่","EN":"Do you want to delete %s row(s)?"},{"code":"QS0014","TH":"คุณต้องการยืนยันการอนุมัติ  %s รายการนี้ใช่หรือไม่","EN":"Are you sure to confirm approve the %s request?"},{"code":"QS0015","TH":"คุณต้องการยืนยันการปฏิเสธ  %s รายการนี้ใช่หรือไม่","EN":"Are you sure to reject %s?"},{"code":"QS0016","TH":"คุณต้องการยืนยันการสร้างใบคำร้องใช่หรือไม่","EN":"Do you want to create this request?"},{"code":"QS0017","TH":"คุณต้องการนำเข้ารายการนี้ใช่หรือไม่","EN":"Do you want to import this transaction?"},{"code":"QS0018","TH":"คุณต้องการนำออกรายการนี้ใช่หรือไม่","EN":"Do you want to export this transaction?"},{"code":"QS0019","TH":"คุณต้องการส่งรายการนี้ใหม่ใช่หรือไม่?","EN":"Do you want to resend this transaction?"},{"code":"QS0020","TH":"คุณต้องการยืนยันการแก้ไขใหม่  %s รายการนี้ใช่หรือไม่","EN":"Are you sure to revise %s?"},{"code":"fsconfirmbtn","TH":"ตกลง","EN":"OK"},{"code":"fscancelbtn","TH":"ยกเลิก","EN":"Cancel"},{"code":"fssavebtn","TH":"บันทึก","EN":"Save"},{"code":"fsclosebtn","TH":"ปิด","EN":"Close"},{"code":"fsokbtn","TH":"ตกลง","EN":"OK"},{"code":"fsmessagetitle","TH":"ข้อความ","EN":"Message"},{"code":"fsaccepttitle","TH":"ยืนยัน","EN":"Confirm"},{"code":"fssuccessmsg","TH":"การดำเนินการสำเร็จ","EN":"Process success"},{"code":"fsfailmsg","TH":"การดำเนินการไม่สำเร็จ","EN":"Process fail"},{"code":"fsalert","TH":"คำเตือน","EN":"Alert"},{"code":"fswarn","TH":"คำเตือน","EN":"Warning"},{"code":"fsconfirm","TH":"ยืนยัน","EN":"Confirmation"},{"code":"fsinfo","TH":"ข้อความ","EN":"Information"},{"code":"QS8021","TH":"ท่านไม่มีสิทธิ์ดูรายการนี้","EN":"No permission to retrieve this transaction"},{"code":"QS8022","TH":"ท่านไม่มีสิทธิ์แก้ไขรายการนี้","EN":"No permission to edit this transaction"},{"code":"QS8023","TH":"ท่านไม่มีสิทธิ์ลบรายการนี้","EN":"No permission to delete this transaction"},{"code":"QS8024","TH":"ท่านไม่มีสิทธิ์สร้างรายการนี้","EN":"No permission to add this transaction"},{"code":"QS8025","TH":"ท่านไม่มีสิทธิ์นำเข้ารายการนี้","EN":"No permission to import this transaction"},{"code":"QS8026","TH":"ท่านไม่มีสิทธิ์นำออกรายการนี้","EN":"No permission to export this transaction"},{"code":"QS0101","TH":"ไม่พบข้อมูลที่ต้องการ โปรดกรุณาระบุและค้นหาใหม่","EN":"Record not found"},{"code":"QS0102","TH":"นำเข้าข้อมูลไม่ถูกต้อง","EN":"Invalid input"},{"code":"QS0103","TH":"ข้อมูลไม่ได้ระบุ","EN":"Value is undefined"},{"code":"QS0104","TH":"ปรับปรุงข้อมูลเรียบร้อย","EN":"Update success"},{"code":"QS0105","TH":"นำเข้าข้อมูลซ้ำซ้อน","EN":"Duplicate record"},{"code":"QS0201","TH":"Reset password success, Please verify your email for new password changed","EN":"Reset password success, Please verify your email for new password changed"},{"code":"QS0202","TH":"Reset Two Factor Success","EN":"Reset Two Factor Success"}]');
;// CONCATENATED MODULE: ./src/assets/json/default_label.json
var default_label_namespaceObject = /*#__PURE__*/JSON.parse('[{"language":"TH","label":[{"name":"EN_lang","value":"อังกฤษ"},{"name":"TH_lang","value":"ไทย"},{"name":"VN_lang","value":"เวียดนาม"},{"name":"CN_lang","value":"จีน"},{"name":"LA_lang","value":"ลาว"},{"name":"KM_lang","value":"กัมพูชา"},{"name":"JP_lang","value":"ญี่ปุ่น"},{"name":"english_lang","value":"อังกฤษ"},{"name":"thai_lang","value":"ไทย"},{"name":"title_new","value":"สร้างใหม่"},{"name":"title_edit","value":"แก้ไข"},{"name":"title_view","value":"มอง"},{"name":"save_button","value":"บันทึก"},{"name":"delete_button","value":"ลบ"},{"name":"retrieve_button","value":"เรียกดู"},{"name":"search_button","value":"ค้นหา"},{"name":"saveas_button","value":"บันทึกเป็น"},{"name":"submit_button","value":"ส่งข้อมูล"},{"name":"cancel_button","value":"ยกเลิก"},{"name":"clear_button","value":"ล้าง"},{"name":"reset_button","value":"ล้าง"},{"name":"update_button","value":"ปรับปรุง"},{"name":"close_button","value":"ปิด"},{"name":"send_button","value":"ส่ง"},{"name":"complete_button","value":"สำเร็จ"},{"name":"download_button","value":"ดาวน์โหลด"},{"name":"insert_button","value":"เพิ่ม"},{"name":"executebutton","value":"ปฏิบัติการ"},{"name":"ok_button","value":"ตกลง"},{"name":"import_button","value":"นำเข้า"},{"name":"export_button","value":"นำออก"},{"name":"remove_button","value":"ลบ"},{"name":"upload_button","value":"อัพโหลด"},{"name":"consend_button","value":"ส่งแบบสอบถาม"},{"name":"version_label","value":"รุ่น"},{"name":"action_label","value":" "},{"name":"active_label","value":"ใช้งาน"},{"name":"inactive_label","value":"ไม่ใช้งาน"},{"name":"all_label","value":"ทั้งหมด"},{"name":"seqno_label","value":"ลำดับที่"},{"name":"page_notfound","value":"ไม่พบหน้าใช้งาน"},{"name":"record_notfound","value":"ไม่พบรายการ"},{"name":"trx_notfound","value":"ไม่พบรายการ"},{"name":"invalid_alert","value":"กรอกข้อมูลไม่ถูกต้อง"},{"name":"empty_alert","value":"กรุณากรอกข้อมูล"}]},{"language":"EN","label":[{"name":"EN_lang","value":"English"},{"name":"TH_lang","value":"Thai"},{"name":"VN_lang","value":"Vietnam"},{"name":"CN_lang","value":"China"},{"name":"LA_lang","value":"Laos"},{"name":"KM_lang","value":"Cambodia"},{"name":"JP_lang","value":"Japan"},{"name":"english_lang","value":"English"},{"name":"thai_lang","value":"Thai"},{"name":"title_new","value":"Add New"},{"name":"title_edit","value":"Edit"},{"name":"title_view","value":"View"},{"name":"save_button","value":"Save"},{"name":"delete_button","value":"Delete"},{"name":"retrieve_button","value":"Retrieve"},{"name":"search_button","value":"Search"},{"name":"saveas_button","value":"Save As"},{"name":"submit_button","value":"Submit Data"},{"name":"cancel_button","value":"Cancel"},{"name":"clear_button","value":"Clear"},{"name":"reset_button","value":"Clear"},{"name":"close_button","value":"Close"},{"name":"update_button","value":"Update"},{"name":"send_button","value":"Send"},{"name":"complete_button","value":"Complete"},{"name":"download_button","value":"Down Load"},{"name":"insert_button","value":"Insert"},{"name":"execute_button","value":"Execute"},{"name":"ok_button","value":"OK"},{"name":"import_button","value":"Import"},{"name":"export_button","value":"Export"},{"name":"remove_button","value":"Remove"},{"name":"upload_button","value":"Upload"},{"name":"consend_button","value":"Send"},{"name":"version_label","value":"Version"},{"name":"action_label","value":" "},{"name":"active_label","value":"Active"},{"name":"inactive_label","value":"Inactive"},{"name":"all_label","value":"All"},{"name":"seqno_label","value":"No."},{"name":"page_notfound","value":"Page not found"},{"name":"record_notfound","value":"Record not found"},{"name":"trx_notfound","value":"Transaction not found"},{"name":"invalid_alert","value":"Invalid input"},{"name":"empty_alert","value":"This cannot be empty"}]}]');
;// CONCATENATED MODULE: ./src/assets/json/program_label.json
var program_label_namespaceObject = /*#__PURE__*/JSON.parse('[{"language":"TH","label":[{"name":"caption_title","value":"การกำหนดโทเค็น"},{"name":"keynames_label","value":"ชื่อ"},{"name":"fromdates_label","value":"จากวันที่"},{"name":"todates_label","value":"ถึงวันที่"},{"name":"keyname_headerlabel","value":"ชื่อ"},{"name":"createdate_headerlabel","value":"วันที่"},{"name":"createtime_headerlabel","value":"เวลา"},{"name":"expiredate_headerlabel","value":"หมดอายุวันที่"},{"name":"expiretime_headerlabel","value":"หมดอายุเวลา"},{"name":"expireflag_headerlabel","value":"หมดอายุ"},{"name":"keyname_label","value":"ชื่อ"},{"name":"expireflag_label","value":"ชนิด"},{"name":"expireday_label","value":"จำนวนวันหมดอายุ"},{"name":"keypass_label","value":"โทเค็ํน"},{"name":"expiredate_label","value":"หมดอายุวันที่"},{"name":"expiretime_label","value":"หมดอายุเวลา"},{"name":"customday_label","value":"กำหนดเอง"},{"name":"days_label","value":"วัน"},{"name":"neverexpire_label","value":"ไม่มีวันหมดอายุ"},{"name":"minvalue_alert","value":"ค่าต่ำสุดคือ %s"}]},{"language":"EN","label":[{"name":"caption_title","value":"Access Token"},{"name":"keynames_label","value":"Name"},{"name":"fromdates_label","value":"From Date"},{"name":"todates_label","value":"To Date"},{"name":"keyname_headerlabel","value":"Name"},{"name":"createdate_headerlabel","value":"Create Date"},{"name":"createtime_headerlabel","value":"Create Time"},{"name":"expiredate_headerlabel","value":"Expire Date"},{"name":"expiretime_headerlabel","value":"Expire Time"},{"name":"expireflag_headerlabel","value":"Expired"},{"name":"keyname_label","value":"Name"},{"name":"expireflag_label","value":"Expire Type"},{"name":"expireday_label","value":"Expire Day"},{"name":"keypass_label","value":"Token"},{"name":"expiredate_label","value":"Expire Date"},{"name":"expiretime_label","value":"Expire Time"},{"name":"customday_label","value":"Custom"},{"name":"days_label","value":"Day"},{"name":"neverexpire_label","value":"Never Expired"},{"name":"minvalue_alert","value":"Minimum value is %s"}]}]');
// EXTERNAL MODULE: ./node_modules/@willsofts/will-app/index.js
var will_app = __webpack_require__(4122);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6768);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(5130);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/AppVftu004.vue?vue&type=template&id=76b7be84

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  id: "fswaitlayer",
  class: "fa fa-spinner fa-spin"
}, null, -1);
const _hoisted_2 = {
  class: "pt-page pt-page-current pt-page-controller search-pager"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeader = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("PageHeader");
  const _component_SearchForm = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("SearchForm");
  const _component_EntryForm = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("EntryForm");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_PageHeader, {
    ref: "pageHeader",
    labels: $setup.labels,
    pid: "vftu004",
    version: "1.0.0",
    showLanguage: "true",
    onLanguageChanged: $options.changeLanguage,
    multiLanguages: $setup.multiLanguages,
    build: $setup.buildVersion,
    visible: $setup.displayPageHeader
  }, null, 8, ["labels", "onLanguageChanged", "multiLanguages", "build", "visible"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_SearchForm, {
    ref: "searchForm",
    labels: $setup.labels,
    dataCategory: _ctx.dataCategory,
    onDataSelect: $options.dataSelected,
    onDataInsert: $options.dataInsert
  }, null, 8, ["labels", "dataCategory", "onDataSelect", "onDataInsert"])]), ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(runtime_core_esm_bundler/* Teleport */.Im, {
    to: "#modaldialog"
  }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_EntryForm, {
    ref: "entryForm",
    labels: $setup.labels,
    dataCategory: _ctx.dataCategory,
    onDataSaved: $options.dataSaved,
    onDataUpdated: $options.dataUpdated,
    onDataDeleted: $options.dataDeleted
  }, null, 8, ["labels", "dataCategory", "onDataSaved", "onDataUpdated", "onDataDeleted"])]))], 64);
}
;// CONCATENATED MODULE: ./src/AppVftu004.vue?vue&type=template&id=76b7be84

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/@willsofts/will-control/dist/will-control.umd.js
var will_control_umd = __webpack_require__(3301);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(4232);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchForm.vue?vue&type=template&id=22661491

const SearchFormvue_type_template_id_22661491_hoisted_1 = {
  id: "searchpanel",
  class: "panel-body search-panel"
};
const SearchFormvue_type_template_id_22661491_hoisted_2 = {
  class: "row row-height"
};
const _hoisted_3 = {
  class: "col-height col-md-3"
};
const _hoisted_4 = {
  class: "col-height col-md-2"
};
const _hoisted_5 = {
  for: "fromdates"
};
const _hoisted_6 = {
  class: "col-height col-md-2"
};
const _hoisted_7 = {
  for: "todates"
};
const _hoisted_8 = {
  class: "col-height col-md"
};
const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1);
const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
  class: "fa fa-search fa-btn-icon",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
  class: "fa fa-refresh fa-btn-icon",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
  class: "fa fa-plus fa-btn-icon",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_13 = {
  id: "listpanel",
  class: "table-responsive fa-list-panel"
};
function SearchFormvue_type_template_id_22661491_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputDate = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("InputDate");
  const _component_DataTable = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("DataTable");
  const _component_DataPaging = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("DataPaging");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", SearchFormvue_type_template_id_22661491_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", SearchFormvue_type_template_id_22661491_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.keynames_label), 1), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.localData.keyname = $event),
    class: "form-control input-md",
    maxlength: "100"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.keyname]])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", _hoisted_5, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.fromdates_label), 1), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_InputDate, {
    modelValue: $setup.localData.fromdate,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.localData.fromdate = $event),
    id: "fromdates"
  }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", _hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.todates_label), 1), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_InputDate, {
    modelValue: $setup.localData.todate,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.localData.todate = $event),
    id: "todates"
  }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [_hoisted_9, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    id: "searchbutton",
    onClick: _cache[3] || (_cache[3] = (...args) => $options.searchClick && $options.searchClick(...args)),
    class: "btn btn-dark btn-sm btn-ctrl"
  }, [_hoisted_10, (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.search_button), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    id: "resetbutton",
    onClick: _cache[4] || (_cache[4] = (...args) => $options.resetClick && $options.resetClick(...args)),
    class: "btn btn-dark btn-sm btn-ctrl"
  }, [_hoisted_11, (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.reset_button), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
    id: "insertbutton",
    onClick: _cache[5] || (_cache[5] = (...args) => $options.insertClick && $options.insertClick(...args)),
    class: "btn btn-dark btn-sm btn-ctrl pull-right"
  }, [_hoisted_12, (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.insert_button), 1)])])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_13, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_DataTable, {
    ref: "dataTable",
    settings: $setup.tableSettings,
    labels: $props.labels,
    dataset: $setup.dataset,
    onDataSelect: $options.dataSelected,
    onDataSort: $options.dataSorted,
    formater: $options.formatData
  }, null, 8, ["settings", "labels", "dataset", "onDataSelect", "onDataSort", "formater"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_DataPaging, {
    ref: "dataPaging",
    settings: $setup.pagingSettings,
    onPageSelect: $options.pageSelected
  }, null, 8, ["settings", "onPageSelect"])])]);
}
;// CONCATENATED MODULE: ./src/components/SearchForm.vue?vue&type=template&id=22661491

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchForm.vue?vue&type=script&lang=js






const curdate = will_app/* Utilities */.FP.getDateNow();
const APP_URL = "/api/sftu004";
const defaultData = {
  keyname: "",
  fromdate: curdate,
  todate: curdate
};
const tableSettings = {
  sequence: {
    label: "seqno_label"
  },
  columns: [{
    name: "keyname",
    type: "STRING",
    sorter: "keyname",
    label: "keyname_headerlabel"
  }, {
    name: "createdate",
    type: "DATE",
    sorter: "createdate",
    label: "createdate_headerlabel",
    css: "text-center"
  }, {
    name: "createtime",
    type: "TIME",
    sorter: "createtime",
    label: "createtime_headerlabel",
    css: "text-center"
  }, {
    name: "expiredate",
    type: "DATE",
    sorter: "expiredate",
    label: "expiredate_headerlabel",
    css: "text-center"
  }, {
    name: "expiretime",
    type: "TIME",
    sorter: "expiretime",
    label: "expiretime_headerlabel",
    css: "text-center"
  }, {
    name: "expireflag",
    type: "STRING",
    sorter: "expireflag",
    label: "expireflag_headerlabel",
    css: "text-center",
    unescape: true
  }],
  actions: [{
    type: "button",
    action: "edit"
  }, {
    type: "button",
    action: "delete"
  }]
};
/* harmony default export */ var SearchFormvue_type_script_lang_js = ({
  components: {
    InputDate: will_control_umd.InputDate,
    DataTable: will_control_umd.DataTable,
    DataPaging: will_control_umd.DataPaging
  },
  props: {
    labels: Object,
    formData: Object,
    dataCategory: Object
  },
  emits: ["data-select", "data-insert"],
  setup(props) {
    const localData = (0,reactivity_esm_bundler/* ref */.KR)({
      ...defaultData,
      ...props.formData
    });
    let paging = new will_app/* Paging */.lK();
    let pagingSettings = paging.setting;
    let filters = {};
    const dataset = (0,reactivity_esm_bundler/* ref */.KR)({});
    let now = new Date();
    const curtimes = (0,reactivity_esm_bundler/* ref */.KR)(now.getTime());
    return {
      localData,
      tableSettings,
      pagingSettings,
      paging,
      filters,
      dataset,
      curtimes
    };
  },
  methods: {
    reset(newData) {
      if (newData) this.localData = {
        ...newData
      };
    },
    getPagingOptions(settings) {
      if (!settings) settings = this.pagingSettings;
      return {
        page: settings.page,
        limit: settings.limit,
        rowsPerPage: settings.rowsPerPage,
        orderBy: settings.orderBy ? settings.orderBy : "",
        orderDir: settings.orderDir ? settings.orderDir : ""
      };
    },
    resetClick() {
      this.localData = {
        ...defaultData
      };
      this.resetFilters();
      this.$refs.dataTable.clear();
      this.$refs.dataPaging.clear();
      this.pagingSettings.rows = 0;
      let now = new Date();
      this.curtimes = now.getTime();
    },
    insertClick() {
      this.$emit('data-insert', this.filters);
    },
    searchClick() {
      this.filters = {
        ...this.localData
      };
      this.resetFilters();
      this.search();
    },
    resetFilters() {
      this.pagingSettings.page = 1;
      this.pagingSettings.orderBy = "";
      this.pagingSettings.orderDir = "";
    },
    search(ensurePaging = false) {
      if (ensurePaging) {
        if (this.pagingSettings.rows <= 1 && this.pagingSettings.page > 1) {
          this.pagingSettings.page = this.pagingSettings.page - 1;
        }
      }
      console.log("search: pagingSettings", this.pagingSettings);
      let options = this.getPagingOptions();
      this.collecting(options, this.filters);
    },
    collecting(options, criterias) {
      console.log("collecting: options", options, ", criteria", criterias);
      let jsondata = Object.assign({
        ajax: true
      }, options);
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, criterias);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + APP_URL + "/collect",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          console.error("error: status", status, "errorThrown", errorThrown);
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown);
        },
        success: data => {
          (0,will_app/* stopWaiting */.Sk)();
          console.log("collecting: success", data);
          if (data.body) {
            this.$refs.dataTable.reset(data.body);
            this.$refs.dataPaging.reset(data.body?.offsets);
            this.pagingSettings.rows = data.body?.rows?.length;
          }
        }
      });
    },
    pageSelected(item) {
      console.log("page selected:", item);
      this.pagingSettings.page = item.page;
      let options = this.getPagingOptions();
      this.collecting(options, this.filters);
    },
    dataSelected(item, action) {
      console.log("dataSelected", item, "action", action);
      this.$emit('data-select', item, action);
    },
    dataSorted(sorter, direction) {
      console.log("dataSorted", sorter, "direction", direction);
      this.pagingSettings.orderBy = sorter;
      this.pagingSettings.orderDir = direction;
      let options = this.getPagingOptions();
      this.collecting(options, this.filters);
    },
    formatData(data, field, record) {
      if (field.name == "expireflag") {
        if ("0" == data) {
          if (this.curtimes > record.expiretimes) {
            return '<em class="fa fa-check-square-o alert-color" aria-hidden="true"></em>';
          } else {
            return " ";
          }
        } else return " ";
      } else if (field.name == "expiredate" || field.name == "expiretime") {
        if (record.expireflag == "1") {
          return " ";
        }
      }
      return this.$refs.dataTable.formatField(data, field, record);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/SearchForm.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SearchForm.vue?vue&type=style&index=0&id=22661491&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SearchForm.vue?vue&type=style&index=0&id=22661491&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1241);
;// CONCATENATED MODULE: ./src/components/SearchForm.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(SearchFormvue_type_script_lang_js, [['render',SearchFormvue_type_template_id_22661491_render]])

/* harmony default export */ var SearchForm = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/EntryForm.vue?vue&type=template&id=6a3178f0

const EntryFormvue_type_template_id_6a3178f0_hoisted_1 = {
  key: 0,
  class: "modal-title"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_2 = {
  key: 1,
  class: "modal-title"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_3 = {
  class: "row row-height"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_4 = {
  class: "col-height col-md-8"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_5 = {
  for: "keyname"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", {
  class: "required"
}, "*", -1);
const EntryFormvue_type_template_id_6a3178f0_hoisted_7 = {
  key: 0,
  class: "has-error"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_8 = {
  class: "row row-height hidden-layer"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_9 = {
  class: "col-height col-md-3"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_10 = {
  for: "expiredayoption"
};
const EntryFormvue_type_template_id_6a3178f0_hoisted_11 = ["disabled"];
const EntryFormvue_type_template_id_6a3178f0_hoisted_12 = ["value"];
const EntryFormvue_type_template_id_6a3178f0_hoisted_13 = {
  value: "CUSTOM"
};
const _hoisted_14 = {
  value: "NEVER"
};
const _hoisted_15 = {
  class: "col-height col-md-3"
};
const _hoisted_16 = {
  for: "expiredaycustom"
};
const _hoisted_17 = {
  key: 0,
  class: "required"
};
const _hoisted_18 = {
  key: 0,
  class: "has-error"
};
const _hoisted_19 = {
  class: "row row-height hidden-layer copy-layer"
};
const _hoisted_20 = {
  class: "col-height col-md-11"
};
const _hoisted_21 = {
  for: "keypass",
  class: "control-label"
};
const _hoisted_22 = {
  class: "input-group"
};
const _hoisted_23 = {
  class: "input-group-required input-group-addon input-group-append"
};
const _hoisted_24 = {
  valign: "top"
};
const _hoisted_25 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
  class: "fa fa-copy",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_26 = [_hoisted_25];
const _hoisted_27 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
  class: "fa fa-download",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_28 = [_hoisted_27];
const _hoisted_29 = {
  class: "row row-height hidden-layer copy-layer"
};
const _hoisted_30 = {
  class: "col-height col-md-4"
};
const _hoisted_31 = {
  class: "col-height col-md-4"
};
const _hoisted_32 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
  class: "fa fa-save fa-btn-icon"
}, null, -1);
const _hoisted_33 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
  class: "fa fa-save fa-btn-icon"
}, null, -1);
const _hoisted_34 = {
  id: "canceldialogbutton",
  class: "btn btn-dark btn-sm",
  "data-dismiss": "modal"
};
const _hoisted_35 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("em", {
  class: "fa fa-close fa-btn-icon"
}, null, -1);
function EntryFormvue_type_template_id_6a3178f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputNumber = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("InputNumber");
  const _component_DialogForm = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("DialogForm");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_DialogForm, {
    ref: "dialogForm"
  }, {
    header: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$options.insertMode ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("h4", EntryFormvue_type_template_id_6a3178f0_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.title_new), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $options.updateMode ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("h4", EntryFormvue_type_template_id_6a3178f0_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.title_edit), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", EntryFormvue_type_template_id_6a3178f0_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", EntryFormvue_type_template_id_6a3178f0_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", EntryFormvue_type_template_id_6a3178f0_hoisted_5, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.keyname_label), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["input-group has-validation", {
        'has-error': $setup.v$.keyname.$error
      }])
    }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
      type: "text",
      ref: "keyname",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.localData.keyname = $event),
      id: "keyname",
      class: "form-control input-md",
      maxlength: "100"
    }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.keyname]]), EntryFormvue_type_template_id_6a3178f0_hoisted_6], 2), $setup.v$.keyname.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", EntryFormvue_type_template_id_6a3178f0_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.keyname.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", EntryFormvue_type_template_id_6a3178f0_hoisted_8, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", EntryFormvue_type_template_id_6a3178f0_hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", EntryFormvue_type_template_id_6a3178f0_hoisted_10, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.expireday_label), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("fieldset", {
      disabled: !$options.insertMode
    }, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("select", {
      ref: "expiredayoption",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.localData.expiredayoption = $event),
      id: "expiredayoption",
      class: "form-control input-md"
    }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.daysOption, (item, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("option", {
        key: index,
        value: item
      }, (0,shared_esm_bundler/* toDisplayString */.v_)(item), 9, EntryFormvue_type_template_id_6a3178f0_hoisted_12);
    }), 128)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("option", EntryFormvue_type_template_id_6a3178f0_hoisted_13, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.customday_label), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("option", _hoisted_14, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.neverexpire_label), 1)], 512), [[runtime_dom_esm_bundler/* vModelSelect */.u1, $setup.localData.expiredayoption]])], 8, EntryFormvue_type_template_id_6a3178f0_hoisted_11)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_15, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", _hoisted_16, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.days_label), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["input-group has-validation", {
        'has-error': $setup.v$.expiredaycustom.$error
      }])
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_InputNumber, {
      ref: "expiredaycustom",
      modelValue: $setup.localData.expiredaycustom,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.localData.expiredaycustom = $event),
      id: "expireday",
      disabled: !$options.canEntry
    }, null, 8, ["modelValue", "disabled"]), $options.canEntry ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("label", _hoisted_17, "*")) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 2), $setup.v$.expiredaycustom.$error ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", _hoisted_18, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.v$.expiredaycustom.$errors[0].$message), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_19, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_20, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", _hoisted_21, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.keypass_label), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_22, [(0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("textarea", {
      ref: "keypass",
      id: "keypass",
      class: "form-control input-md",
      rows: "5",
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.localData.keypass = $event),
      readonly: ""
    }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.keypass]]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_23, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("table", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("tr", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("td", _hoisted_24, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
      href: "javascript:void(0);",
      class: "input-group-text key-link",
      onClick: _cache[4] || (_cache[4] = (...args) => $options.copyTokenKey && $options.copyTokenKey(...args)),
      tabindex: "-1",
      title: "Copy"
    }, _hoisted_26), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
      href: "javascript:void(0);",
      class: "input-group-text key-link",
      onClick: _cache[5] || (_cache[5] = (...args) => $options.downloadTokenKey && $options.downloadTokenKey(...args)),
      tabindex: "-1",
      title: "Download"
    }, _hoisted_28)])])])])])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.displayCopy]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_29, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_30, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.expiredate_label), 1), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
      type: "text",
      ref: "expiredate",
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.localData.expiredate = $event),
      id: "expiredate",
      class: "form-control input-md",
      disabled: ""
    }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.expiredate]])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_31, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, (0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.expiretime_label), 1), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
      type: "text",
      ref: "expiretime",
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $setup.localData.expiretime = $event),
      id: "expiretime",
      class: "form-control input-md",
      disabled: ""
    }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $setup.localData.expiretime]])])], 512), [[runtime_dom_esm_bundler/* vShow */.aG, $setup.displayCopy]])]),
    footer: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$options.insertMode ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("button", {
      key: 0,
      ref: "savebutton",
      id: "savebutton",
      class: "btn btn-dark btn-sm",
      onClick: _cache[8] || (_cache[8] = (...args) => $options.saveClick && $options.saveClick(...args))
    }, [_hoisted_32, (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.save_button), 1)], 512)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $options.updateMode ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("button", {
      key: 1,
      ref: "updatebutton",
      id: "updatebutton",
      class: "btn btn-dark btn-sm",
      onClick: _cache[9] || (_cache[9] = (...args) => $options.updateClick && $options.updateClick(...args))
    }, [_hoisted_33, (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.update_button), 1)], 512)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", _hoisted_34, [_hoisted_35, (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($props.labels.cancel_button), 1)])]),
    _: 1
  }, 512);
}
;// CONCATENATED MODULE: ./src/components/EntryForm.vue?vue&type=template&id=6a3178f0

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__(4603);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__(7566);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__(8721);
// EXTERNAL MODULE: ./node_modules/@vuelidate/core/dist/index.mjs
var dist = __webpack_require__(7760);
// EXTERNAL MODULE: ./node_modules/@vuelidate/validators/dist/index.mjs
var validators_dist = __webpack_require__(9428);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DialogForm.vue?vue&type=template&id=35b578a2

const DialogFormvue_type_template_id_35b578a2_hoisted_1 = ["id"];
const DialogFormvue_type_template_id_35b578a2_hoisted_2 = {
  class: "modal-dialog modal-xm"
};
const DialogFormvue_type_template_id_35b578a2_hoisted_3 = {
  class: "modal-content portal-area fa-portal-area"
};
const DialogFormvue_type_template_id_35b578a2_hoisted_4 = {
  class: "modal-header"
};
const DialogFormvue_type_template_id_35b578a2_hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
  type: "button",
  class: "close btn-closing",
  "data-dismiss": "modal"
}, null, -1);
const DialogFormvue_type_template_id_35b578a2_hoisted_6 = {
  class: "entry-dialog-layer"
};
const DialogFormvue_type_template_id_35b578a2_hoisted_7 = {
  class: "row-heighter modal-footer"
};
function DialogFormvue_type_template_id_35b578a2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", (0,runtime_core_esm_bundler/* mergeProps */.v6)({
    id: $props.id,
    class: "modal fade pt-page pt-page-item",
    tabindex: "-1",
    role: "dialog"
  }, _ctx.$attrs), [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", DialogFormvue_type_template_id_35b578a2_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", DialogFormvue_type_template_id_35b578a2_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", DialogFormvue_type_template_id_35b578a2_hoisted_4, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "header"), DialogFormvue_type_template_id_35b578a2_hoisted_5]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", DialogFormvue_type_template_id_35b578a2_hoisted_6, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", DialogFormvue_type_template_id_35b578a2_hoisted_7, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "footer")])])])], 16, DialogFormvue_type_template_id_35b578a2_hoisted_1);
}
;// CONCATENATED MODULE: ./src/components/DialogForm.vue?vue&type=template&id=35b578a2

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DialogForm.vue?vue&type=script&lang=js
/* harmony default export */ var DialogFormvue_type_script_lang_js = ({
  props: {
    id: {
      type: String,
      default: "modaldialog_layer"
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DialogForm.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/DialogForm.vue




;
const DialogForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(DialogFormvue_type_script_lang_js, [['render',DialogFormvue_type_template_id_35b578a2_render]])

/* harmony default export */ var DialogForm = (DialogForm_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/EntryForm.vue?vue&type=script&lang=js













const EntryFormvue_type_script_lang_js_APP_URL = "/api/sftu004";
const defaultExpired = "30";
const EntryFormvue_type_script_lang_js_defaultData = {
  keyid: "",
  keyname: "",
  expireflag: "0",
  expireday: "30",
  expiredayoption: "30",
  expiredaycustom: "",
  keypass: "",
  expiredate: "",
  expiretime: ""
};
const defaultDays = ["30", "60", "90", "120", "150", "180"];
/* harmony default export */ var EntryFormvue_type_script_lang_js = ({
  components: {
    DialogForm: DialogForm,
    InputNumber: will_control_umd.InputNumber
  },
  props: {
    modes: Object,
    labels: Object,
    dataCategory: Object
  },
  emits: ["data-saved", "data-updated", "data-deleted"],
  setup(props) {
    const mode = (0,reactivity_esm_bundler/* ref */.KR)({
      action: "new",
      ...props.modes
    });
    const localData = (0,reactivity_esm_bundler/* ref */.KR)({
      ...EntryFormvue_type_script_lang_js_defaultData
    });
    const disabledKeyField = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const reqalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.empty_alert);
    const minalert = (0,reactivity_esm_bundler/* ref */.KR)(props.labels.minvalue_alert);
    const requiredMessage = () => {
      return validators_dist/* helpers */._$.withMessage(reqalert, validators_dist/* required */.mw);
    };
    const minValueMessage = () => {
      return validators_dist/* helpers */._$.withMessage(params => {
        return (0,will_app/* replaceString */.uf)(minalert.value, [params.$params.min]);
      }, (0,validators_dist/* minValue */.Ww)(1));
    };
    const requiredField = () => {
      let inserting = mode.value.action == "insert" || mode.value.action == "new";
      return inserting && localData.value.expiredayoption == "CUSTOM" ? validators_dist/* helpers */._$.withMessage(reqalert, validators_dist/* required */.mw) : false;
    };
    const validateRules = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return {
        keyname: {
          required: requiredMessage()
        },
        expiredaycustom: {
          required: requiredField(),
          minValue: minValueMessage()
        }
      };
    });
    const v$ = (0,dist/* useVuelidate */.fG)(validateRules, localData, {
      $lazy: true,
      $autoDirty: true
    });
    const displayCopy = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const keepexpireday = (0,reactivity_esm_bundler/* ref */.KR)(defaultExpired);
    (0,runtime_core_esm_bundler/* watch */.wB)(() => localData.value.expiredayoption, newOption => {
      if (newOption == "CUSTOM") {
        localData.value.expiredaycustom = keepexpireday.value;
      } else {
        keepexpireday.value = localData.value.expiredaycustom;
        if (keepexpireday.value == "") keepexpireday.value = defaultExpired;
        localData.value.expiredaycustom = "";
      }
    });
    const daysOption = (0,reactivity_esm_bundler/* ref */.KR)(defaultDays);
    return {
      mode,
      v$,
      localData,
      disabledKeyField,
      reqalert,
      minalert,
      displayCopy,
      keepexpireday,
      daysOption
    };
  },
  created() {
    (0,runtime_core_esm_bundler/* watch */.wB)(this.$props, newProps => {
      this.reqalert = newProps.labels.empty_alert;
      this.minalert = newProps.labels.minvalue_alert;
    });
  },
  computed: {
    insertMode() {
      return this.mode.action == "insert" || this.mode.action == "new";
    },
    updateMode() {
      return this.mode.action == "update" || this.mode.action == "edit";
    },
    canEntry() {
      return (this.mode.action == "insert" || this.mode.action == "new") && this.localData.expiredayoption == "CUSTOM";
    }
  },
  mounted() {
    this.$nextTick(function () {
      jquery_default()("#modaldialog_layer").find(".modal-dialog").draggable();
    });
  },
  methods: {
    reset(newData, newMode) {
      if (newData) this.localData = {
        ...newData
      };
      if (newMode) this.mode = {
        ...newMode
      };
    },
    async saveClick() {
      console.log("click: save");
      (0,will_app/* disableControls */.rv)(jquery_default()("#savebutton"));
      let valid = await this.validateForm();
      if (!valid) return;
      this.startSaveRecord();
    },
    async updateClick() {
      console.log("click: update");
      (0,will_app/* disableControls */.rv)(jquery_default()("#updatebutton"));
      let valid = await this.validateForm();
      if (!valid) return;
      this.startUpdateRecord();
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
        if (el) el.focus(); //if using ref
        else jquery_default()("#" + input).trigger("focus"); //if using id
      }
    },
    showDialog(callback) {
      if (callback) jquery_default()(this.$refs.dialogForm.$el).on("shown.bs.modal", callback);
      jquery_default()(this.$refs.dialogForm.$el).modal("show");
    },
    hideDialog() {
      jquery_default()(this.$refs.dialogForm.$el).modal("hide");
    },
    resetRecord() {
      //reset to default data 
      this.reset(EntryFormvue_type_script_lang_js_defaultData, {
        action: "insert"
      });
      //reset validator
      this.v$.$reset();
      //enable key field
      this.disabledKeyField = false;
      this.displayCopy = false;
      this.keepexpireday = defaultExpired;
    },
    scrapeData(dataset) {
      let resData = {
        ...EntryFormvue_type_script_lang_js_defaultData
      };
      if (dataset) {
        resData = Object.keys(resData).reduce((data, key) => {
          if (Object.hasOwn(dataset, key)) {
            data[key] = dataset[key];
          }
          return data;
        }, {});
      }
      resData.expiredayoption = "CUSTOM";
      resData.expiredaycustom = String(resData.expireday);
      let foundexpireday = defaultDays.find(item => item == resData.expireday);
      if (foundexpireday) {
        resData.expiredayoption = foundexpireday;
        resData.expiredaycustom = "";
      }
      if (resData.expireflag == "1") {
        resData.expiredate = "";
        resData.expiretime = "";
        resData.expiredayoption = "NEVER";
        resData.expiredaycustom = "";
      }
      return resData;
    },
    startInsertRecord() {
      this.resetRecord();
      this.showDialog(() => {
        this.$refs.keyname.focus();
      });
    },
    startSaveRecord() {
      (0,will_app/* confirmSave */.ex)(() => {
        this.localData.expireday = "";
        this.localData.expireflag = this.localData.expiredayoption == "NEVER" ? "1" : "0";
        if (this.localData.expireflag == "0") {
          this.localData.expireday = this.localData.expiredayoption == "CUSTOM" ? this.localData.expiredaycustom : this.localData.expiredayoption;
        }
        this.saveRecord(this.localData);
      });
    },
    startUpdateRecord() {
      (0,will_app/* confirmUpdate */.cS)(() => {
        this.updateRecord({
          keyid: this.localData.keyid,
          keyname: this.localData.keyname
        });
      });
    },
    startDeleteRecord(dataKeys) {
      (0,will_app/* confirmDelete */.QV)(Object.values(dataKeys), () => {
        this.deleteRecord(dataKeys);
      });
    },
    saveRecord(dataRecord) {
      let jsondata = {
        ajax: true
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, dataRecord);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + EntryFormvue_type_script_lang_js_APP_URL + "/insert",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          console.error("error: status", status, "errorThrown", errorThrown);
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown);
        },
        success: data => {
          (0,will_app/* stopWaiting */.Sk)();
          console.log("success", data);
          if ((0,will_app/* detectErrorResponse */.DA)(data)) return;
          let dataset = this.scrapeData(data.body.dataset);
          this.keepexpireday = String(dataset.expireday);
          console.log("scrapeData:", dataset);
          this.reset(dataset, {
            action: "view"
          });
          this.v$.$reset();
          this.disabledKeyField = true;
          this.displayCopy = true;
          (0,will_app/* successbox */.hM)(() => {
            //reset data for new record insert
            this.$emit('data-saved', dataRecord, data);
          });
        }
      });
    },
    updateRecord(dataRecord) {
      let jsondata = {
        ajax: true
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, dataRecord);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + EntryFormvue_type_script_lang_js_APP_URL + "/update",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          console.error("error: status", status, "errorThrown", errorThrown);
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown);
        },
        success: data => {
          (0,will_app/* stopWaiting */.Sk)();
          console.log("success", data);
          if ((0,will_app/* detectErrorResponse */.DA)(data)) return;
          (0,will_app/* successbox */.hM)(() => {
            this.hideDialog();
            this.$emit('data-updated', dataRecord, data);
          });
        }
      });
    },
    retrieveRecord(dataKeys) {
      let jsondata = {
        ajax: true
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, dataKeys);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + EntryFormvue_type_script_lang_js_APP_URL + "/retrieve",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          console.error("retrieveRecord: error: status", status, "errorThrown", errorThrown);
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown);
        },
        success: data => {
          (0,will_app/* stopWaiting */.Sk)();
          console.log("retrieveRecord: success", data);
          if (data.body.dataset) {
            let dataset = this.scrapeData(data.body.dataset);
            this.keepexpireday = String(dataset.expireday);
            console.log("scrapeData:", dataset);
            this.reset(dataset, {
              action: "edit"
            });
            this.v$.$reset();
            this.disabledKeyField = true;
            this.displayCopy = true;
            this.showDialog(() => {
              this.$refs.keyname.focus();
            });
          }
        }
      });
    },
    deleteRecord(dataKeys) {
      let jsondata = {
        ajax: true
      };
      let formdata = (0,will_app/* serializeParameters */.L3)(jsondata, dataKeys);
      (0,will_app/* startWaiting */.eF)();
      jquery_default().ajax({
        url: (0,will_app/* getApiUrl */.e9)() + EntryFormvue_type_script_lang_js_APP_URL + "/remove",
        data: formdata.jsondata,
        headers: formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: will_app/* DEFAULT_CONTENT_TYPE */.Xh,
        error: function (transport, status, errorThrown) {
          console.error("deleteRecord: error: status", status, "errorThrown", errorThrown);
          (0,will_app/* submitFailure */.pg)(transport, status, errorThrown);
        },
        success: data => {
          (0,will_app/* stopWaiting */.Sk)();
          console.log("deleteRecord: success", data);
          if ((0,will_app/* detectErrorResponse */.DA)(data)) return;
          (0,will_app/* successbox */.hM)(() => {
            this.$emit('data-deleted', dataKeys, data);
          });
        }
      });
    },
    async copyTokenKey() {
      try {
        let copyText = document.getElementById("keypass");
        copyText.select();
        await navigator.clipboard.writeText(copyText.value);
      } catch (ex) {
        console.error(ex);
      }
    },
    downloadTokenKey() {
      this.createDownloader(this.localData.keypass, this.localData.keyname + ".txt");
    },
    createDownloader(data, filename) {
      let a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(new Blob([data], {
        type: 'text/html'
      }));
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/EntryForm.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/EntryForm.vue




;
const EntryForm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(EntryFormvue_type_script_lang_js, [['render',EntryFormvue_type_template_id_6a3178f0_render]])

/* harmony default export */ var EntryForm = (EntryForm_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/AppVftu004.vue?vue&type=script&lang=js







const buildVersion = "20250706-113559";
/* harmony default export */ var AppVftu004vue_type_script_lang_js = ({
  components: {
    PageHeader: will_control_umd.PageHeader,
    SearchForm: SearchForm,
    EntryForm: EntryForm
  },
  setup() {
    let labels = (0,reactivity_esm_bundler/* ref */.KR)((0,will_app/* getLabelModel */.aU)());
    const multiLanguages = (0,reactivity_esm_bundler/* ref */.KR)((0,will_app/* getMultiLanguagesModel */.Hx)());
    const displayPageHeader = !(String((0,will_app/* getMetaInfo */.Ch)().DISPLAY_PAGE_HEADER) == "false");
    return {
      displayPageHeader,
      buildVersion,
      multiLanguages,
      labels
    };
  },
  mounted() {
    console.log("App: mounted ...");
    this.$nextTick(async () => {
      //ensure ui completed then invoke startApplication 
      (0,will_app/* startApplication */.xL)("vftu004", data => {
        console.log("vueapp: message", data);
        if (data.type == "language") {
          let lang = data.language;
          if (lang) {
            this.changeLanguage(lang);
          }
        } else {
          this.multiLanguages = (0,will_app/* getMultiLanguagesModel */.Hx)();
          this.messagingHandler(data);
          this.$refs.pageHeader.changeLanguage((0,will_app/* getDefaultLanguage */.i5)());
          (0,will_app/* loadAndMergeLabel */.Sg)("vftu004", success => {
            if (success) {
              this.changeLanguage((0,will_app/* getDefaultLanguage */.i5)());
            }
          });
        }
      });
    });
  },
  methods: {
    messagingHandler(data) {
      console.log("messagingHandler: data", data);
    },
    changeLanguage(lang) {
      (0,will_app/* setDefaultLanguage */.Qq)(lang);
      let labelModel = (0,will_app/* getLabelModel */.aU)(lang);
      this.labels = labelModel;
    },
    dataSelected(item, action) {
      //listen action from search form
      console.log("App: dataSelected", item, "action", action);
      if ("edit" == action) {
        this.$refs.entryForm.retrieveRecord({
          keyid: item.keyid
        });
      } else if ("delete" == action) {
        this.$refs.entryForm.startDeleteRecord({
          keyname: item.keyname,
          keyid: item.keyid
        });
      }
    },
    dataInsert(filters) {
      //listen action from search form
      console.log("App: record insert", filters);
      this.$refs.entryForm.startInsertRecord();
    },
    dataSaved(data, response) {
      //listen action from entry form when after saved
      console.log("App: record saved");
      console.log("data", data, "response", response);
      this.$refs.searchForm.search();
    },
    dataUpdated(data, response) {
      //listen action from entry form when after updated
      console.log("App: record updated");
      console.log("data", data, "response", response);
      this.$refs.searchForm.search();
    },
    dataDeleted(data, response) {
      //listen action from entry form when after deleted
      console.log("App: record deleted");
      console.log("data", data, "response", response);
      this.$refs.searchForm.search(true);
    }
  }
});
;// CONCATENATED MODULE: ./src/AppVftu004.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/AppVftu004.vue




;
const AppVftu004_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(AppVftu004vue_type_script_lang_js, [['render',render]])

/* harmony default export */ var AppVftu004 = (AppVftu004_exports_);
;// CONCATENATED MODULE: ./src/vftu004.js
















(0,will_app/* appInit */.yR)({
  program_message: program_message_namespaceObject,
  default_labels: default_label_namespaceObject,
  program_labels: program_label_namespaceObject
});
(0,will_app/* initAppConfig */.c1)(function (cfg) {
  console.log("init app config:", cfg);
});


console.info("Vue version", runtime_core_esm_bundler/* version */.rE);
(0,runtime_dom_esm_bundler/* createApp */.Ef)(AppVftu004).mount('#app');

/***/ }),

/***/ 477:
/***/ (function() {

/* (ignored) */

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkvftu004"] = self["webpackChunkvftu004"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [504], function() { return __webpack_require__(5198); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.09d6e9ba.js.map