/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var n=1;
function list() {
	var item = document.createElement("tr");
	var data = document.createElement("td");
	var dataname = document.createTextNode(document.getElementById("nameinput").value);
	data.appendChild(dataname);
	data.setAttribute("id",`name${n}`);

	var phone = document.createElement("td");
	var datanum = document.createTextNode(document.getElementById("numinput").value);
	phone.appendChild(datanum);
	phone.setAttribute("id",`phone${n}`);

	var but = document.createElement("button");
	var del = document.createTextNode("delete");
	but.appendChild(del);
	but.setAttribute("id",`but${n}`);
	but.setAttribute("value",`${n}`);
	
	item.appendChild(data);
	item.appendChild(phone);
	item.appendChild(but);
	
	but.onclick = () =>{
		deleteEntry(`${but.value}`);
	};
	
	document.body.appendChild(item);
	n++;
	document.getElementById("nameinput").value = "";
	document.getElementById("numinput").value = "";
}

function deleteEntry(val) {
	var delname = document.getElementById(`name${val}`);
	var delnum = document.getElementById(`phone${val}`);
	var delbut = document.getElementById(`but${val}`);
	delname.parentNode.removeChild(delname);
	delnum.parentNode.removeChild(delnum);
	delbut.parentNode.removeChild(delbut);
}