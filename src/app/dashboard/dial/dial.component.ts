import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-dial',
    templateUrl: './dial.component.html',
    styleUrls: ['./dial.component.css']
})
export class DialComponent implements OnInit{

    public app: any;
    public ctx: any;

    public windowWitdh;
    public windowHeight;
    public light = false;

    Point = (radius, angle) => (
        {x: radius*Math.cos(angle*Math.PI/180), 
         y: radius*Math.sin(angle*Math.PI/180)}
    )

    ngOnInit() {
        this.app = document.getElementById('app');
        this.ctx = this.app.getContext('2d');
        window.onresize = this.windowResize;
        // this.windowResize()
        this.draw(0);
    }

    windowResize() {
        this.windowWitdh = window.innerWidth;
        this.windowHeight = window.innerHeight;
        
        this.app.width = this.windowWitdh;
        this.ctx.restore();
        this.ctx.translate(this.windowWitdh/2, this.windowHeight/2);
        
        this.draw(0);
    }

    draw(speed) {
  
        //清除背景
        this.ctx.fillStyle = "#111";
        this.ctx.beginPath();
        //起點/長/寬
        this.ctx.rect(-2000,-2000,4000,4000);
        this.ctx.fill();
        // 儀表板
  
        if (this.light == true) {
            this.ctx.shadowColor = '#999';
            this.ctx.shadowBlur = 20;
            this.ctx.shadowOffsetX = 5;
            this.ctx.shadowOffsetY = 5;
        } else {
            this.ctx.shadowColor = null;
            this.ctx.shadowBlur = null;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
        }

        // 內圈
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = "#555";
        this.ctx.arc(0, 0, 130, 0, Math.PI*2, true);
        this.ctx.fill();

        // 單位
        this.ctx.fillStyle = "rgba(255,255,255,1)";
        this.ctx.textAlign = "center"; 
        this.ctx.font="20px Arial";
        this.ctx.fillText( "km/h", 0, -50);
        this.ctx.restore();
        
        // 中心圈圈
        this.ctx.beginPath();
        var grd=this.ctx.createRadialGradient(0,0,100,0,0, 1);
        grd.addColorStop(0,"white");
        grd.addColorStop(1,"black");
        this.ctx.fillStyle = grd;
        this.ctx.arc(0, 0, 20, 0, Math.PI*2, true);
        this.ctx.fill();

        // 儀表板外框 135度~405度
        var degreeNum = 111; 
        var radius = 220;
        var len;
        
        for (var i=0; i<degreeNum; i++) {
            this.ctx.beginPath();
            
            this.ctx.strokeStyle="rgba(255,255,255,1)";
            
            if (i % 5 == 0) {
            this.ctx.lineWidth = 3;
            len = 10;
            
            } else {
            this.ctx.lineWidth = 1;
            len = 5;
            }
            let angle = i* (270/degreeNum) + 135;
            let startPoint = this.Point(radius-len, angle);
            let endPoint = this.Point(radius, angle)
            this.ctx.moveTo(startPoint.x, startPoint.y);
            this.ctx.lineTo(endPoint.x, endPoint.y);
            
            if ( i % 10 == 0 ) {
            this.ctx.fillStyle = "rgba(255,255,255,1)";
            this.ctx.textAlign = "center"; 
            this.ctx.font="20px Arial";
            let numPoint  = this.Point(radius-40, angle);
            this.ctx.fillText( (i/10) *20, numPoint.x, numPoint.y);
            }

            this.ctx.stroke();
            
        }
        
        // 指針 
        
        let firstPoint = this.Point(50, speed+ 310);
        let secondPoint = this.Point(250, speed + 135);
        let thirdPoint = this.Point(50, speed + 320);
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.moveTo(firstPoint.x, firstPoint.y);
        this.ctx.lineTo(secondPoint.x, secondPoint.y);
        this.ctx.lineTo(thirdPoint.x, thirdPoint.y);
        this.ctx.fill();
        
        // document.getElementsByClassName('speed')[0].innerHTML = speed * 220/269+ " km/h";
    }
    
}