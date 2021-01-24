function drawEllipse(parent_obj, id, x_radius, y_radius, center_x, center_y, fill_color) {
	if (parent_obj.contains(document.getElementById(id))) {
		document.getElementById(id).style.position = "absolute";
		document.getElementById(id).style.width = (x_radius * 2).toString() + "px";
		document.getElementById(id).style.height = (y_radius * 2).toString() + "px";
		document.getElementById(id).style.left = (center_x - x_radius).toString() + "px";
		document.getElementById(id).style.top = (center_y - y_radius).toString() + "px";
		document.getElementById(id).style.backgroundColor = fill_color;
		shape.style.borderRadius = "100%";
	} else {
		shape = document.createElement("DIV");
		shape.id = id;
		shape.style.position = "absolute";
		shape.style.width = (x_radius * 2).toString() + "px";
		shape.style.height = (y_radius * 2).toString() + "px";
		shape.style.left = (center_x - x_radius).toString() + "px";
		shape.style.top = (center_y - y_radius).toString() + "px";
		shape.style.backgroundColor = fill_color;
		shape.style.borderRadius = "100%";
		parent_obj.appendChild(shape);
	}
}

function drawRect(parent_obj, id, width, height, center_x, center_y, fill_color) {
	if (parent_obj.contains(document.getElementById(id))) {
		document.getElementById(id).style.position = "absolute";
		document.getElementById(id).style.width = (width).toString() + "px";
		document.getElementById(id).style.height = (height).toString() + "px";
		document.getElementById(id).style.left = (center_x - (width/2)).toString() + "px";
		document.getElementById(id).style.top = (center_y - (height/2)).toString() + "px";
		document.getElementById(id).style.backgroundColor = fill_color;
		shape.style.borderRadius = "0";
	} else {
		shape = document.createElement("DIV");
		shape.id = id;
		shape.style.position = "absolute";
		shape.style.width = (width).toString() + "px";
		shape.style.height = (height).toString() + "px";
		shape.style.left = (center_x - (width/2)).toString() + "px";
		shape.style.top = (center_y - (height/2)).toString() + "px";
		shape.style.backgroundColor = fill_color;
		shape.style.borderRadius = "0";
		parent_obj.appendChild(shape);
	}
}

function drawImgSprite(parent_obj, id, width, height, center_x, center_y, imageurl) {
	if (parent_obj.contains(document.getElementById(id))) {
		document.getElementById(id).style.position = "absolute";
		document.getElementById(id).style.width = (width).toString() + "px";
		document.getElementById(id).style.height = (height).toString() + "px";
		document.getElementById(id).style.left = (center_x - (width/2)).toString() + "px";
		document.getElementById(id).style.top = (center_y - (height/2)).toString() + "px";
		document.getElementById(id).style.backgroundImage = "url('" + imageurl + "')";
		document.getElementById(id).style.borderRadius = "0";
		document.getElementById(id).style.backgroundSize = "100% 100%";
	} else {
		shape = document.createElement("DIV");
		shape.id = id;
		shape.style.position = "absolute";
		shape.style.width = (width).toString() + "px";
		shape.style.height = (height).toString() + "px";
		shape.style.left = (center_x - (width/2)).toString() + "px";
		shape.style.top = (center_y - (height/2)).toString() + "px";
		shape.style.backgroundImage = "url('" + imageurl + "')";
		shape.style.borderRadius = "0";
		shape.style.backgroundSize = "100% 100%";
		parent_obj.appendChild(shape);
	}
}

function rectCollision(item1, item2) {
	if (parseInt(item1.style.top.split("px")[0]) + parseInt(item1.style.height.split("px")[0]) >= parseInt(item2.style.top.split("px")[0])) {
		if (parseInt(item1.style.left.split("px")[0]) + parseInt(item1.style.width.split("px")[0]) >= parseInt(item2.style.left.split("px")[0])) {
			if (parseInt(item1.style.top.split("px")[0]) <= parseInt(item2.style.top.split("px")[0]) + parseInt(item2.style.height.split("px")[0])) {
				if (parseInt(item1.style.left.split("px")[0]) <= parseInt(item2.style.left.split("px")[0]) + parseInt(item2.style.width.split("px")[0])) {
					return true;
				}
			}
		}
	}
	else { return false; }
}

function directionalCollision(item1, item2) {
	item1_bottom = parseInt(item1.style.top.split("px")[0]) + parseInt(item1.style.height.split("px")[0]);
	item2_bottom = parseInt(item2.style.top.split("px")[0]) + parseInt(item2.style.height.split("px")[0]);
	item1_right = parseInt(item1.style.left.split("px")[0]) + parseInt(item1.style.width.split("px")[0]);
	item2_right = parseInt(item2.style.left.split("px")[0]) + parseInt(item2.style.width.split("px")[0]);
	b_collision = item1_bottom - parseInt(item2.style.top.split("px")[0]);
	t_collision = item2_bottom - parseInt(item1.style.top.split("px")[0]);
	l_collision = item1_right - parseInt(item2.style.left.split("px")[0]);
	r_collision = item2_right - parseInt(item1.style.left.split("px")[0]);
	if (rectCollision(item1,item2)){
	if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision ) {
		return "top";
		console.log("h");
	}
	if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision) {
		return "bottom";
	}
	if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision) {
		return "left";
	}
	if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision ) {
		return "right";
	}
	}
	else { return "not_touchign"; }
}