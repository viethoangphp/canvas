var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x = 200;
var y = 200;
var dx = 1000;
var dy = 1000;
var mouse ={
    x:undefined,
    y:undefined
}
function play() {
    const m=new Audio('buff.mp3');
    m.play();
}
var count=0;
window.onclick = function(){
    count++;
   if(count==1)
   {
    play();
   }
}
window.addEventListener('mousemove', function(event){
   mouse.x=event.x;
   mouse.y=event.y;
})
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
function Circle(x,y,dx,dy,radius) {
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    var  color = ['white','red','#d5d5d5','#fff','blue','green','yellow','orange','purple','pink'];
    this.cl = color[Math.floor(Math.random()*color.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y,this.radius,0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fillStyle=color[Math.floor(Math.random()*color.length)];;
        c.fill();
        
    }
    this.update = function()
    {
        if(this.x + 20 > window.innerWidth || this.x- 20 < 0)
        {
           this.dx = -this.dx;
        }
        if(this.y + 20 > window.innerHeight || this.y - 20 < 0)
        {
           this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        if(mouse.x - this.x < 100 && mouse.x -this.x >-100 && mouse.y-this.y < 100 && mouse.y -this.y >-100)
        {
            if(this.radius < 40)
            {
                this.radius +=1;
            }
        }else if(this.radius > 2)
        {
            this.radius -=1;
        }
        this.draw();
    }
}

var arr = [];
for(var i = 0 ; i<1000; i++)
{
    var x = Math.random() * (innerWidth - radius*2)+radius;
    var y = Math.random() * (innerHeight - radius*2)+radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    var radius = Math.random() *3+1;
    arr.push(new Circle(x,y,dx,dy,radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);

    for(var i = 0; i <arr.length;i++)
    {
        arr[i].update();
    }
}
animate();
console.log(canvas);
