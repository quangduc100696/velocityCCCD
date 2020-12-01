function showChuyenPhat() {
    let value = $("input:checked").val();
    if (value == "yes") {
        $("#address").show();
    } else {
        $("#diaChiNhan").text("");
        $("#soDienThoai").text("");
        $("#address").hide();
    }
}
function validateDiaChi(id, idError, message) {
    let value = $("input:checked").val();
    if (value == "yes") {
        this.validate(id, idError, message);
    }
}
function nhapLai() {
    var r = confirm("Bạn có nhập lại không!");
    if (r == true) {
        document.getElementById("formC001").reset();
        document.getElementById("hoTen").focus();
    }
}

function validate(id, idError, message) {
    var text = $(id).val();
    if(text == null ||  text.length == 0) {
        $(idError).text(message);
        $(idError).addClass('textError');
        $(id).addClass('error');
    } else {
        $(idError).text("");
        $(id).removeClass('error');
    }
}

function validateCMND(id, idError) {
	  var cmnd = $(id).val();
	  var checkCC = $("#checkCC").val();
	  var re = new RegExp(/([0-9])$/);
	  if (checkCC == "yes") {
	    if (cmnd == null || cmnd.length == 0) {
	      $(idError).text("Vui lòng nhập số CMND/CCCD");
	      $(idError).addClass("textError");
	      $(id).addClass("error");
	    }
	  }
	  if (cmnd != null && cmnd.length != 0) {
	    if (re.test(cmnd) == false || cmnd.length != 9) {
	      $(idError).text("Số CMND/CCCD phải là số và có độ dài bằng 9");
	      $(idError).addClass("textError");
          $(id).addClass("error");
          $("#chuyenPhat").check = false;
	    } else {
	      $(idError).text("");
	      $(id).removeClass("error");
	    }
	  }
	}

    function validateCMNDKBB(id, idError) {
        var cmnd = $(id).val();
        var re = new RegExp(/([0-9])$/);
        if((cmnd.length != 0) && (re.test(cmnd) == false || cmnd.length != 9)) {
            $(idError).text("Số CMND/CCCD phải là số và có độ dài bằng 9");
            $(idError).addClass('textError');
            $(id).addClass('error');
            return false;
        } else {
            $(idError).text("");
            $(id).removeClass('error');
        }
        return true;
    }

function validateForm() {
    let hoTen = $("#hoTen").val();
    let date = $("#date").val();
    let gioiTinh = $("#gioiTinh").val();
    let socmnd = $("#socmnd").val();
    let danToc = $("#danToc").val();
    let tg = $("#tg").val();
    let qt = $("#qt").val();
    let honNhan = $("#honNhan").val();
    let ttp1 = $("#ttp1").val();
    let qh1 = $("#qh1").val();
    let xp1 = $("#xp1" ).val();
    let ttp2 = $("#ttp2").val();
    let qh2 = $("#qh2").val();
    let xp2 = $("#xp2").val();
    let ttp3 = $("#ttp3").val();
    let qh3 = $("#qh3" ).val();
    let xp3 = $("#xp3").val();
    let ttp4 = $("#ttp4").val();
    let qh4 = $("#qh4").val();
    let xp4 = $("#xp4").val();
    let dpThonXom1 = $("#dpThonXom1" ).val();
    let socmndCha = $("#socmndCha").val();
    let socmndMe = $("#socmndMe").val();
    let socmndVoChong = $("#socmndVoChong").val();
    let cmndNguoiDKHP = $("#cmndNguoiDKHP").val();
    let hoTenChuHo = $("#hoTenChuHo" ).val();
    let socmndChuho = $("#socmndChuho").val();
    let qhch = $("#qhch").val();
    let value = $("input:checked").val();
    let ttp5 = $("#ttp5").val();
    let qh5 = $("#qh5").val();
    let xp5 = $("#xp5" ).val();
    let dpThonXonDCN = $("#dpThonXonDCN").val();
    let soDienThoai = $("#soDienThoai").val();
    let check  = true;
    let isCheck = false;
    
    let xacNhan = $("#xacNhan").prop("checked");

    if(hoTen.length == 0) {
        validate('#hoTen', '#errorHT', 'Vui lòng nhập họ và tên');
        $('#hoTen').focus();
        isCheck = true;
        check = false;
    }
    if(date.length == 0) {
        validate('#date', '#errorNTN', 'Vui lòng chọn ngày tháng năm sinh');
        if(!isCheck) {
            $('#date').focus();
            isCheck = true;
        }
        check = false;
    }
    if(gioiTinh == null || gioiTinh.length == 0) {
        validate('#gioiTinh', '#errorGT', 'Vui lòng chọn giới tính');
        if(!isCheck) {
            $('#gioiTinh').focus();
            isCheck = true;
        }
        check = false;
    }
    if(socmnd == null || socmnd.length == 0) {
        if(!isCheck) {
            $('#socmnd').focus();
            isCheck = true;
        }
        validateCMND('#socmnd', '#errorCMND');
        check = false;
    }
    if(danToc == null || danToc.length == 0) {
        if(!isCheck) {
            $('#danToc').focus();
            isCheck = true;
        }
        validate('#danToc', '#errorDToc', 'Vui lòng chọn dân tộc');
        check = false;
    }
    if(tg == null || tg.length == 0) {
        if(!isCheck) {
            $('#tg').focus();
            isCheck = true;
        }
        validate('#tg', '#errorTG', 'Vui lòng chọn tôn giáo');
        check = false;
    }
    if(qt == null || qt.length == 0) {
        if(!isCheck) {
            $('#qt').focus();
            isCheck = true;
        }
        validate('#qt', '#errorQT', 'Vui lòng chọn quốc tịch');
        check = false;
    }
    if(honNhan == null || honNhan.length == 0) {
        if(!isCheck) {
            $('#honNhan').focus();
            isCheck = true;
        }
        validate('#honNhan', '#errorHN', 'Vui lòng chọn tình trạng hôn nhân');
        check = false;
    }
    if(ttp1 == null || ttp1.length == 0) {
        if(!isCheck) {
            $('#ttp1').focus();
            isCheck = true;
        }
        validate('#ttp1', '#errorTTP1', 'Vui lòng chọn tỉnh/ thành phố');
        check = false;
    }
    if(qh1 == null || qh1.length == 0) {
        if(!isCheck) {
            $('#qh1').focus();
            isCheck = true;
        }
        validate('#qh1', '#errorQH1', 'Vui lòng chọn quận/ huyện');
        check = false;
    }
    if(xp1 == null || xp1.length == 0) {
        if(!isCheck) {
            $('#xp1').focus();
            isCheck = true;
        }
        validate('#xp1', '#errorXP1', 'Vui lòng chọn xã phường');
        check = false;
    }
    if(ttp2 == null || ttp2.length == 0) {
        if(!isCheck) {
            $('#ttp2').focus();
            isCheck = true;
        }
        validate('#ttp2', '#errorTTP2', 'Vui lòng chọn tỉnh/ thành phố');
        check = false;
    }
    if(qh2 == null || qh2.length == 0) {
        if(!isCheck) {
            $('#qh2').focus();
            isCheck = true;
        }
        validate('#qh2', '#errorQH2', 'Vui lòng chọn quận/ huyện');
        check = false;
    }
    if(xp2 == null || xp2.length == 0) {
        if(!isCheck) {
            $('#xp2').focus();
            isCheck = true;
        }
        validate('#xp2', '#errorXP2', 'Vui lòng chọn xã/ phường');
        check = false;
    }
    if(ttp3 == null || ttp3.length == 0) {
        if(!isCheck) {
            $('#ttp3').focus();
            isCheck = true;
        }
        validate('#ttp3', '#errorTTP3', 'Vui lòng chọn tỉnh/ thành phố');
        check = false;
    }
    if(qh3 == null || qh3.length == 0) {
        if(!isCheck) {
            $('#qh3').focus();
            isCheck = true;
        }
        validate('#qh3', '#errorQH3', 'Vui lòng chọn quận/ huyện');
        check = false;
    }
    if(xp3 == null || xp3.length == 0) {
        if(!isCheck) {
            $('#xp3').focus();
            isCheck = true;
        }
        validate('#xp3', '#errorXP3', 'Vui lòng chọn xã/ phường');
        check = false;
    }
    if(ttp4 == null || ttp4.length == 0) {
        if(!isCheck) {
            $('#ttp4').focus();
            isCheck = true;
        }
        validate('#ttp4', '#errorTTP4', 'Vui lòng chọn tỉnh/ thành phố');
        check = false;
    }
    if(qh4 == null || qh4.length == 0) {
        if(!isCheck) {
            $('#qh4').focus();
            isCheck = true;
        }
        validate('#qh4', '#errorQH4', 'Vui lòng chọn quận/ huyện');
        check = false;
    }
    if(xp4 == null || xp4.length == 0) {
        if(!isCheck) {
            $('#xp4').focus();
            isCheck = true;
        }
        validate('#xp4', '#errorXP4', 'Vui lòng chọn xã/ phường');
        check = false;
    }
    if(dpThonXom1 == null || dpThonXom1.length == 0) {
        if(!isCheck) {
            $('#dpThonXom1').focus();
            isCheck = true;
        }
        validate('#dpThonXom1', '#errorDPX', 'Vui lòng chọn đường phố/ thôn xóm');
        check = false;hoTenCha
    }

    if(socmndCha.length != 0) {
        
        if(validateCMNDKBB('#socmndCha', '#errorCMCha') == false) {
            if(!isCheck) {
                $('#socmndCha').focus();
                isCheck = true;
            }
            check = false;
        }
    }

    if(socmndMe.length != 0) {
       
        if(validateCMNDKBB('#socmndMe', '#errorCMMe') == false) {
            if(!isCheck) {
                $('#socmndMe').focus();
                isCheck = true;
            }
            check = false;
        } 
    }
    if(socmndVoChong.length != 0 && socmndVoChong != null) {
        if(!isCheck) {
            isCheck = true;
        }
        if(validateCMNDKBB('#socmndVoChong', '#errorCMVKCK') == false) {
            if(!isCheck) {
                $('#socmndVoChong').focus();
                isCheck = true;
            }
            check = false;
        }
    }
    if(cmndNguoiDKHP.length != 0  && socmndVoChong != null) {
        if(!isCheck) {
            isCheck = true;
        }
        if(validateCMNDKBB('#cmndNguoiDKHP', '#errorCMDKHP') == false) {
            if(!isCheck) {
                $('#cmndNguoiDKHP').focus();
                isCheck = true;
            }
            check = false;
        }
       
    }
    if(hoTenChuHo == null || hoTenChuHo.length == 0) {
        if(!isCheck) {
            isCheck = true;
            $('#hoTenChuHo').focus();
        }
        validate('#hoTenChuHo', '#errorCH', 'Vui lòng nhập họ tên chủ hộ');
        check = false;
    }
    if(socmndChuho.length != 0) {
        if(!isCheck) {
            isCheck = true;
        }
        if(validateCMNDKBB('#socmndChuho', '#errorCMCHo') == false) {
            if(!isCheck) {
                isCheck = true;
                $('#socmndChuho').focus();
            }
            check = false;
        }
        
    }
    if(qhch == null || qhch.length == 0) {
        if(!isCheck) {
            isCheck = true;
            $('#qhch').focus();
        }
        validate('#qhch', '#errorQHCH', 'Vui lòng nhập quan hệ với chủ hội');
        check = false;
    }
    if(value == "yes") {
        if(ttp5 == null || ttp5.length == 0) {
            if(!isCheck) {
                $('#ttp5').focus();
                isCheck = true;
            }
            validate('#ttp5', '#errorTTP5', 'Vui lòng chọn tỉnh/ thành phố');
            check = false;
        }
        if(qh5 == null || qh5.length == 0) {
            if(!isCheck) {
                $('#qh5').focus();
                isCheck = true;
            }
            validate('#qh5', '#errorQH5', 'Vui lòng chọn quận/ huyện');
            check = false;
        }
        if(xp5 == null || xp5.length == 0) {
            if(!isCheck) {
                $('#xp5').focus();
                isCheck = true;
            }
            validate('#xp5', '#errorXP5', 'Vui lòng chọn xã/ phường');
            check = false;
        }
        if(dpThonXonDCN == null || dpThonXonDCN.length == 0) {
            if(!isCheck) {
                $('#dpThonXonDCN').focus();
                isCheck = true;
            }
            validate('#dpThonXonDCN', '#errorTXDCN', 'Vui lòng chọn đường phố/ thôn xóm');
            check = false;
        }
        if(soDienThoai == null || soDienThoai.length == 0) {
            if(!isCheck) {
                $('#soDienThoai').focus();
                isCheck = true;
            }
            validate('#soDienThoai', '#errorSdt', 'Vui lòng nhập số điện thoại');
            check = false;
        }else {
            var vnf_regex = /((09|03|07|08|05|02)+([0-9]{8})\b)/g;
            if (vnf_regex.test(soDienThoai) == false) 
            {
                if(!isCheck) {
                    $('#soDienThoai').focus();
                    isCheck = true;
                }
                $('#errorSdt').text("Vui lòng nhập đúng định dạng số điện thoại");
                $('#errorSdt').addClass('textError');
                $('#soDienThoai').addClass('error');
            } else {
                $('#errorSdt').text("");
                $('#soDienThoai').removeClass('error');
            }
        }
    }
    if(xacNhan == false) {
        $("#errorXacNhan").text("Vui lòng check vào ô xác nhận")
        $("#errorXacNhan").addClass('textError');
        check = false;
        if(!isCheck) {
            $('#xacNhan').focus();
            isCheck = true;
        }
    } else {
        $("#errorXacNhan").text("");
    }

    if(!check) {
        return false;
    }
   return true;
}