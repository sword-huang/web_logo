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

function setpc(color)
{
    pc=color;

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.strokeStyle = 'rgb'+pc;
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
