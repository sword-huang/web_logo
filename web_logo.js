function parser_text_cmd(text_cmd)
{
	if(text_cmd=="")
		alert("Can't get any command!");
	else
		line_parser(text_cmd);
	
	app.input_cmd="";
	app.logs.unshift(text_cmd);
}

function in_array(needle, haystack) {
    for(var i in haystack) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

function line_parser(text_cmd)
{
	var line_cmd_array;

	text_cmd=text_cmd.toLowerCase().replace("\n\r", ";").replace("\n", ";").replace("\r", ";");

	line_cmd_array=text_cmd.split(";");
	for (i in line_cmd_array) {
		execute_cmd(line_cmd_array[i].trim());
	} 
}

function word_parser(text_cmd)
{
	var line_cmd_array, cmd;
	var cmd_list = ['fd', 'bk', 'tanya', 'timur', 'eve', 'kate', 'karen', 'peter'];

	text_cmd=text_cmd.toLowerCase().replace("\n\r", " ").replace("\n", " ").replace("\r", " ");
	line_cmd_array=text_cmd.split(" ");
	for (i in line_cmd_array) {
		cmd=line_cmd_array[i].trim();
		if(in_array(cmd, cmd_list))
			execute_cmd(line_cmd_array[i].trim());
	}	
}

function execute_cmd(cmd)
{
    var now_X,now_y;

    // alert(cmd);
    var res = cmd.split(" ");
    if(res[0]=="fd" || res[0]=="forward")
    	forward(res[1]);
    if(res[0]=="bk" || res[0]=="back")
    	back(res[1]);
    else if(res[0]=="lt" || res[0]=="left")
    	left(parseInt(res[1]));
    else if(res[0]=="rt" || res[0]=="right")
    	right(parseInt(res[1]));
    else if(res[0]=="pu" || res[0]=="penup")
    	pu();
    else if(res[0]=="pd" || res[0]=="pendown")
    	pd();
    else if(res[0]=="pe" || res[0]=="penerase")
    {
        pc="(255,255,255)";

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.strokeStyle = 'rgb'+pc;
        ctx.stroke(); 
    }
    else if(res[0]=="setpc")
    	setpc(res[1],res[2], res[3]);
    else if(res[0]=="cs")
    {
        canvas.width = canvas.width; 
        ctx.moveTo(x,y);
    }
    else if(res[0]=="home")
    	home();
    else if(res[0]=="setxy")
    	setxy(res[1], res[2]);
    else if(res[0]=="setx")
    	setx(res[1]);
    else if(res[0]=="sety")
    	sety(res[1]);
    else if(res[0]=="seth" || res[0]=="sethead")
    	seth(parseInt(res[1]));
    else if(res[0]=="ulb")
    	ulb(res[1]);
    else if(res[0]=="urb")
    	urb(res[1]);
    else if(res[0]=="dlb")
    	dlb(res[1]);
    else if(res[0]=="drb")
    	drb(res[1]);
    else if(res[0]=="cb")
    	cb(res[1]);
    else if(res[0]=="cc" || res[0]=="circle")
    	cc(parseInt(res[1]));
    else if(res[0]=="lc")
    	lc(parseInt(res[1]));
    else if(res[0]=="rc")
    	rc(parseInt(res[1]));
    else if(res[0]=="uc")
    	uc(parseInt(res[1]));
    else if(res[0]=="dc")
    	dc(parseInt(res[1]));

    if(x>width)
    	x=x-width;
    else if(x<=0)
    	x=x+width;
    x=Math.round(x);

    if(y>height)
    	y=y-height;
    else if(y<0)
    	y=y+height;
    y=Math.round(y);

    now_x=x;
    now_y=y;

    app.angle=angle;
	app.x=x;
	app.y=y;
}

function draw(x, y)
{
	if(pc!="")
		ctx.lineTo(x,y);
    else
        ctx.moveTo(x,y);
    ctx.stroke(); 
}

// Pen
function pu()
{
    pc="";
}

function pd()
{
    pc=c;

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.strokeStyle = 'rgb'+pc;
    ctx.stroke(); 
}

function setpc(r,g,b)
{
    pc="(" + r + "," + g + "," + b + ")";

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.strokeStyle = "rgb" + pc;
    ctx.stroke(); 
}

// Position
function forward(len)
{
    x=x+len*Math.cos(angle_value);
    y=y-len*Math.sin(angle_value);
    draw(x, y);
}

function back(len)
{
    x=x-len*Math.cos(angle_value);
    y=y+len*Math.sin(angle_value);
    draw(x, y);
}

function setx(new_x)
{
    x=parseInt(new_x);
    ctx.moveTo(x,y);
}

function sety(new_y)
{
    y=parseInt(new_y);
    ctx.moveTo(x,y);
}

function setxy(new_x, new_y)
{
    x=parseInt(new_x);
    y=parseInt(new_y);

    ctx.moveTo(x,y);
}

function home()
{
	setxy(400, 300);
}

// Angle
function set_angle_value()
{
	angle_value=angle*Math.PI/180;	
}

function left(ang)
{
	angle=angle+ang;
	if(angle>360)
		angle=angle-360;
	
	set_angle_value();
}

function right(ang)
{
	angle=angle-ang;
	if(angle<0)
		angle=angle+360;

	set_angle_value();
}

function seth(ang)
{
	angle=ang;
	set_angle_value();
}

// Box
function cb(len)
{
	pu();
	right(90);
	forward(len/2);
	right(90);
	forward(len/2);
	right(180);
	pd();
	ulb(len);
	pu();
	forward(len/2);
	left(90);
	forward(len/2);
	right(90);
	pd();
}

function ulb(len)
{
	for (i = 0; i < 4; i++) {
    	forward(len);
    	left(90);
	}
}

function urb(len)
{
	for (i = 0; i < 4; i++) {
    	forward(len);
    	right(90);
	}
}

function dlb(len)
{
	for (i = 0; i < 4; i++) {
    	left(90);
    	forward(len);
	}
}

function drb(len)
{
	for (i = 0; i < 4; i++) {
    	right(90);
    	forward(len);
	}
}

// Circle
function cc(len)
{
	pu();
	forward(len);
	pd();

	dc(len);

	pu();
	back(len);
	pd();
}

function lc(len)
{
	var s,r;
	r=parseInt(len);
	s=Math.PI*2*r/360;
	
	for (i = 0; i < 360; i++) {
		left(1);
		forward(s);
	} 
}

function rc(len)
{
	var s,r;
	r=parseInt(len);
	s=Math.PI*2*r/360;
	
	for (i = 0; i < 360; i++) {
		right(1);
		forward(s);
	} 
}

function uc(len)
{
	right(90);
	lc(len);
	left(90);
}

function dc(len)
{
	right(90);
	rc(len);
	left(90);
}
