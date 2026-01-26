const MONTH_NAMES=new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');const DAY_NAMES=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');function LZ(x){return(x<0||x>9?"":"0")+x}
function isDate(val,format){let date=getDateFromFormat(val,format);return date!==0;}
function compareDates(date1,dateformat1,date2,dateformat2){let d1=getDateFromFormat(date1,dateformat1);let d2=getDateFromFormat(date2,dateformat2);if(d1==0||d2==0){return-1;}
else if(d1>d2){return 1;}
return 0;}
function formatingDate(date,format){format=format+"";let result="";let i_format=0;let c="";let token="";let y=date.getYear()+"";let M=date.getMonth()+1;let d=date.getDate();let E=date.getDay();let H=date.getHours();let m=date.getMinutes();let s=date.getSeconds();let value=new Object();if(y.length<4){y=""+(y-0+1900);}
value["y"]=""+y;value["yyyy"]=y;value["yy"]=y.substring(2,4);value["M"]=M;value["MM"]=LZ(M);value["MMM"]=MONTH_NAMES[M-1];value["NNN"]=MONTH_NAMES[M+11];value["d"]=d;value["dd"]=LZ(d);value["E"]=DAY_NAMES[E+7];value["EE"]=DAY_NAMES[E];value["H"]=H;value["HH"]=LZ(H);if(H==0){value["h"]=12;}
else if(H>12){value["h"]=H-12;}
else{value["h"]=H;}
value["hh"]=LZ(value["h"]);if(H>11){value["K"]=H-12;}else{value["K"]=H;}
value["k"]=H+1;value["KK"]=LZ(value["K"]);value["kk"]=LZ(value["k"]);if(H>11){value["a"]="PM";}
else{value["a"]="AM";}
value["m"]=m;value["mm"]=LZ(m);value["s"]=s;value["ss"]=LZ(s);while(i_format<format.length){c=format.charAt(i_format);token="";while((format.charAt(i_format)==c)&&(i_format<format.length)){token+=format.charAt(i_format++);}
if(value[token]){result=result+value[token];}
else{result=result+token;}}
return result;}
function _isInteger(val){let digits="1234567890";for(let i=0;i<val.length;i++){if(!digits.includes(val.charAt(i))){return false;}}
return true;}
function _getInt(str,i,minlength,maxlength){for(let x=maxlength;x>=minlength;x--){let token=str.substring(i,i+x);if(token.length<minlength){return null;}
if(_isInteger(token)){return token;}}
return null;}
function getDateFromFormat(val,format){val=val+"";format=format+"";let i_val=0;let i_format=0;let c="";let token="";let x,y;let now=new Date();let year=now.getYear();let month=now.getMonth()+1;let date=1;let hh=now.getHours();let mm=now.getMinutes();let ss=now.getSeconds();let ampm="";while(i_format<format.length){c=format.charAt(i_format);token="";while((format.charAt(i_format)==c)&&(i_format<format.length)){token+=format.charAt(i_format++);}
if(token=="yyyy"||token=="yy"||token=="y"){if(token=="yyyy"){x=4;y=4;}
if(token=="yy"){x=2;y=2;}
if(token=="y"){x=2;y=4;}
year=_getInt(val,i_val,x,y);if(year==null){return 0;}
i_val+=year.length;if(year.length==2){if(year>70){year=1900+(year-0);}
else{year=2000+(year-0);}}}
else if(token=="MMM"||token=="NNN"){month=0;for(let i=0;i<MONTH_NAMES.length;i++){let month_name=MONTH_NAMES[i];if(val.substring(i_val,i_val+month_name.length).toLowerCase()==month_name.toLowerCase()){if(token=="MMM"||(token=="NNN"&&i>11)){month=i+1;if(month>12){month-=12;}
i_val+=month_name.length;break;}}}
if((month<1)||(month>12)){return 0;}}
else if(token=="EE"||token=="E"){for(let day_name of DAY_NAMES){if(val.substring(i_val,i_val+day_name.length).toLowerCase()==day_name.toLowerCase()){i_val+=day_name.length;break;}}}
else if(token=="MM"||token=="M"){month=_getInt(val,i_val,token.length,2);if(month==null||(month<1)||(month>12)){return 0;}
i_val+=month.length;}
else if(token=="dd"||token=="d"){date=_getInt(val,i_val,token.length,2);if(date==null||(date<1)||(date>31)){return 0;}
i_val+=date.length;}
else if(token=="hh"||token=="h"){hh=_getInt(val,i_val,token.length,2);if(hh==null||(hh<1)||(hh>12)){return 0;}
i_val+=hh.length;}
else if(token=="HH"||token=="H"){hh=_getInt(val,i_val,token.length,2);if(hh==null||(hh<0)||(hh>23)){return 0;}
i_val+=hh.length;}
else if(token=="KK"||token=="K"){hh=_getInt(val,i_val,token.length,2);if(hh==null||(hh<0)||(hh>11)){return 0;}
i_val+=hh.length;}
else if(token=="kk"||token=="k"){hh=_getInt(val,i_val,token.length,2);if(hh==null||(hh<1)||(hh>24)){return 0;}
i_val+=hh.length;hh--;}
else if(token=="mm"||token=="m"){mm=_getInt(val,i_val,token.length,2);if(mm==null||(mm<0)||(mm>59)){return 0;}
i_val+=mm.length;}
else if(token=="ss"||token=="s"){ss=_getInt(val,i_val,token.length,2);if(ss==null||(ss<0)||(ss>59)){return 0;}
i_val+=ss.length;}
else if(token=="a"){if(val.substring(i_val,i_val+2).toLowerCase()=="am"){ampm="AM";}
else if(val.substring(i_val,i_val+2).toLowerCase()=="pm"){ampm="PM";}
else{return 0;}
i_val+=2;}
else if(val.substring(i_val,i_val+token.length)===token){i_val+=token.length;}
else{return 0;}}
if(i_val!=val.length){return 0;}
if(month==2){if(((year%4==0)&&(year%100!=0))||(year%400==0)){if(date>29){return 0;}}
else if(date>28){return 0;}}
if((month==4)||(month==6)||(month==9)||(month==11)){if(date>30){return 0;}}
if(hh<12&&ampm=="PM"){hh=hh-0+12;}
else if(hh>11&&ampm=="AM"){hh-=12;}
let newdate=new Date(year,month-1,date,hh,mm,ss);return newdate.getTime();}
const generalFormats=new Array('y-M-d','MMM d, y','MMM d,y','y-MMM-d','d-MMM-y','MMM d');const monthFirst=new Array('M/d/y','M-d-y','M.d.y','MMM-d','M/d','M-d');const dateFirst=new Array('d/M/y','d-M-y','d.M.y','d-MMM','d/M','d-M');function parseDate(val){let preferEuro=(arguments.length==2)?arguments[1]:false;let checkList=new Array(generalFormats,preferEuro?dateFirst:monthFirst,preferEuro?monthFirst:dateFirst);for(let l of checkList){for(let f of l){let d=getDateFromFormat(val,f);if(d!=0){return new Date(d);}}}
return null;}
function parsingDate(text){if("TH"==fs_default_language){let txts=text.split("/");text=(txts.length>0?txts[0]:"")+"/"+(txts.length>1?txts[1]:"");if(txts.length>2){let y=Number.parseInt(txts[2])-543;text=text+"/"+y;}}
return parseDate(text,true);}