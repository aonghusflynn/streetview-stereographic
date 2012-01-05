define("embr/core/Util",[],function(){function b(b,c){var d,e=[];while((d=b.getError())!==b.NO_ERROR)e.push(d);if(e.length>0){if(a===null){a={};for(var f in b)typeof b[f]=="number"&&(a[b[f]]=f)}throw c+" ("+e.map(function(b){return a[b]}).join(", ")+")"}}function c(a){var c,d,e={};for(c in a)d=a[c],typeof d=="function"?e[c]=function(c,d){return function(){var e=d.apply(a,arguments);return b(a,"GL Error in "+c),e}}(c,d):e[c]=d;return e}function d(a,b){function d(){this.constructor=b}for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return d.prototype=a.prototype,b.prototype=new d,b}function e(a){var b={};for(var c in a)a[c]instanceof Object?b[c]=e(a[c]):b[c]=a[c];return b}function f(a,b){if(b===undefined)return e(a);var c,d={};for(var g in a)c=g in b?b[g]:a[g],c instanceof Object?d[g]=f(a[g],b[g]):d[g]=c;return d}"use strict";var a=null;return{glCheckErr:b,glWrapContextWithErrorChecks:c,extend:d,mergeOptions:f}}),define("embr/core/Vec2",[],function(){function a(a,b){this.x=a,this.y=b}return"use strict",a.prototype={set:function(a,b){return this.x=a,this.y=b,this},setVec2:function(a){return this.x=a.x,this.y=a.y,this},dot:function(a){return this.x*a.x+this.y*a.y},add2:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this},add:function(a){return this.add2(this,a)},added:function(b){return new a(this.x+b.x,this.y+b.y)},sub2:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this},sub:function(a){return this.sub2(this,a)},subbed:function(b){return new a(this.x-b.x,this.y-b.y)},mul2:function(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this},mul:function(a){return this.mul2(this,a)},mulled:function(b){return new a(this.x*b.x,this.y*b.y)},scale:function(a){return this.x*=a,this.y*=a,this},scaled:function(b){return new a(this.x*b,this.y*b)},lerp:function(a,b){return this.x=this.x+(a.x-this.x)*b,this.y=this.y+(a.y-this.y)*b,this},lerped:function(b,c){return new a(this.x+(b.x-this.x)*c,this.y+(b.y-this.y)*c)},length:function(){var a=this.x,b=this.y;return Math.sqrt(a*a+b*b)},lengthSquared:function(){var a=this.x,b=this.y;return a*a+b*b},dist:function(a){var b=a.x-this.x,c=a.y-this.y;return Math.sqrt(b*b+c*c)},distSquared:function(a){var b=a.x-this.x,c=a.y-this.y;return b*b+c*c},normalize:function(){return this.scale(1/this.length())},normalized:function(){return this.dup().normalize()},rotate:function(a){var b=Math.sin(a),c=Math.cos(a),d=this.x,e=this.y;return this.x=d*c-e*b,this.y=d*b+e*c,this},rotated:function(a){return this.dup().rotate(a)},reflect:function(a){var b=this.dot(a)*2;return this.x-=a.x*b,this.y-=a.y*b,this},reflected:function(b){var c=this.dot(b)*2;return new a(this.x-b.x*c,this.y-b.y*c)},dup:function(){return new a(this.x,this.y)}},a}),define("embr/core/Vec3",[],function(){function a(a,b,c){this.x=a,this.y=b,this.z=c}return"use strict",a.prototype={set:function(a,b,c){return this.x=a,this.y=b,this.z=c,this},setVec3:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this},cross2:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;return this.x=d*h-e*g,this.y=e*f-c*h,this.z=c*g-d*f,this},cross:function(a){return this.cross2(this,a)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},add2:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this},add:function(a){return this.add2(this,a)},added:function(b){return new a(this.x+b.x,this.y+b.y,this.z+b.z)},sub2:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this},sub:function(a){return this.sub2(this,a)},subbed:function(b){return new a(this.x-b.x,this.y-b.y,this.z-b.z)},mul2:function(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this.z=a.z*b.z,this},mul:function(a){return this.mul2(this,a)},mulled:function(b){return new a(this.x*b.x,this.y*b.y,this.z*b.z)},scale:function(a){return this.x*=a,this.y*=a,this.z*=a,this},scaled:function(b){return new a(this.x*b,this.y*b,this.z*b)},lerp:function(a,b){return this.x=this.x+(a.x-this.x)*b,this.y=this.y+(a.y-this.y)*b,this.z=this.z+(a.z-this.z)*b,this},lerped:function(b,c){return new a(this.x+(b.x-this.x)*c,this.y+(b.y-this.y)*c,this.z+(b.z-this.z)*c)},length:function(){var a=this.x,b=this.y,c=this.z;return Math.sqrt(a*a+b*b+c*c)},lengthSquared:function(){var a=this.x,b=this.y,c=this.z;return a*a+b*b+c*c},dist:function(a){var b=a.x-this.x,c=a.y-this.y,d=a.z-this.z;return Math.sqrt(b*b+c*c+d*d)},distSquared:function(a){var b=a.x-this.x,c=a.y-this.y,d=a.z-this.z;return b*b+c*c+d*d},normalize:function(){return this.scale(1/this.length())},normalized:function(){return this.dup().normalize()},dup:function(){return new a(this.x,this.y,this.z)}},a}),define("embr/core/Vec4",[],function(){function a(a,b,c,d){this.x=a,this.y=b,this.z=c,this.w=d}return"use strict",a.prototype={set:function(a,b,c,d){return this.x=a,this.y=b,this.z=c,this.w=d,this},setVec4:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w,this},dup:function(){return new a(this.x,this.y,this.z,this.w)}},a}),define("embr/core/Mat4",["embr/core/Vec3"],function(a){function b(){this.reset()}return"use strict",b.prototype={set4x4r:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return this.a11=a,this.a12=b,this.a13=c,this.a14=d,this.a21=e,this.a22=f,this.a23=g,this.a24=h,this.a31=i,this.a32=j,this.a33=k,this.a34=l,this.a41=m,this.a42=n,this.a43=o,this.a44=p,this},reset:function(){return this.set4x4r(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},mul2:function(a,b){var c=a.a11,d=a.a12,e=a.a13,f=a.a14,g=a.a21,h=a.a22,i=a.a23,j=a.a24,k=a.a31,l=a.a32,m=a.a33,n=a.a34,o=a.a41,p=a.a42,q=a.a43,r=a.a44,s=b.a11,t=b.a12,u=b.a13,v=b.a14,w=b.a21,x=b.a22,y=b.a23,z=b.a24,A=b.a31,B=b.a32,C=b.a33,D=b.a34,E=b.a41,F=b.a42,G=b.a43,H=b.a44;return this.a11=c*s+d*w+e*A+f*E,this.a12=c*t+d*x+e*B+f*F,this.a13=c*u+d*y+e*C+f*G,this.a14=c*v+d*z+e*D+f*H,this.a21=g*s+h*w+i*A+j*E,this.a22=g*t+h*x+i*B+j*F,this.a23=g*u+h*y+i*C+j*G,this.a24=g*v+h*z+i*D+j*H,this.a31=k*s+l*w+m*A+n*E,this.a32=k*t+l*x+m*B+n*F,this.a33=k*u+l*y+m*C+n*G,this.a34=k*v+l*z+m*D+n*H,this.a41=o*s+p*w+q*A+r*E,this.a42=o*t+p*x+q*B+r*F,this.a43=o*u+p*y+q*C+r*G,this.a44=o*v+p*z+q*D+r*H,this},mul:function(a){return this.mul2(this,a)},mul4x4r:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=this.a11,r=this.a12,s=this.a13,t=this.a14,u=this.a21,v=this.a22,w=this.a23,x=this.a24,y=this.a31,z=this.a32,A=this.a33,B=this.a34,C=this.a41,D=this.a42,E=this.a43,F=this.a44;return this.a11=q*a+r*e+s*i+t*m,this.a12=q*b+r*f+s*j+t*n,this.a13=q*c+r*g+s*k+t*o,this.a14=q*d+r*h+s*l+t*p,this.a21=u*a+v*e+w*i+x*m,this.a22=u*b+v*f+w*j+x*n,this.a23=u*c+v*g+w*k+x*o,this.a24=u*d+v*h+w*l+x*p,this.a31=y*a+z*e+A*i+B*m,this.a32=y*b+z*f+A*j+B*n,this.a33=y*c+z*g+A*k+B*o,this.a34=y*d+z*h+A*l+B*p,this.a41=C*a+D*e+E*i+F*m,this.a42=C*b+D*f+E*j+F*n,this.a43=C*c+D*g+E*k+F*o,this.a44=C*d+D*h+E*l+F*p,this},rotate:function(a,b,c,d){var e=Math.sin(a),f=Math.cos(a);return this.mul4x4r(b*b*(1-f)+f,b*c*(1-f)-d*e,b*d*(1-f)+c*e,0,c*b*(1-f)+d*e,c*c*(1-f)+f,c*d*(1-f)-b*e,0,b*d*(1-f)-c*e,c*d*(1-f)+b*e,d*d*(1-f)+f,0,0,0,0,1),this},translate:function(a,b,c){return this.mul4x4r(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1),this},scale:function(a,b,c){return this.mul4x4r(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1),this},lookAt:function(b,c,d,e,f,g,h,i,j){var k=(new a(b-e,c-f,d-g)).normalize(),l=(new a(h,i,j)).cross(k).normalize(),m=k.dup().cross(l).normalize();return this.mul4x4r(l.x,l.y,l.z,0,m.x,m.y,m.z,0,k.x,k.y,k.z,0,0,0,0,1),this.translate(-b,-c,-d),this},frustum:function(a,b,c,d,e,f){return this.mul4x4r((e+e)/(b-a),0,(b+a)/(b-a),0,0,(e+e)/(d-c),(d+c)/(d-c),0,0,0,(f+e)/(e-f),2*f*e/(e-f),0,0,-1,0),this},perspective:function(a,b,c,d){var e=1/Math.tan(a*Math.PI/360);return this.mul4x4r(e/b,0,0,0,0,e,0,0,0,0,(d+c)/(c-d),2*c*d/(c-d),0,0,-1,0),this},ortho:function(a,b,c,d,e,f){return this.mul4x4r(2/(b-a),0,0,(b+a)/(a-b),0,2/(d-c),0,(d+c)/(c-d),0,0,2/(e-f),(f+e)/(e-f),0,0,0,1),this},invert:function(){var a=this.a11,b=this.a12,c=this.a13,d=this.a14,e=this.a21,f=this.a22,g=this.a23,h=this.a24,i=this.a31,j=this.a32,k=this.a33,l=this.a34,m=this.a41,n=this.a42,o=this.a43,p=this.a44,q=a*f-b*e,r=a*g-c*e,s=a*h-d*e,t=b*g-c*f,u=b*h-d*f,v=c*h-d*g,w=i*n-j*m,x=i*o-k*m,y=i*p-l*m,z=j*o-k*n,A=j*p-l*n,B=k*p-l*o,C=1/(q*B-r*A+s*z+t*y-u*x+v*w);return this.a11=(+f*B-g*A+h*z)*C,this.a12=(-b*B+c*A-d*z)*C,this.a13=(+n*v-o*u+p*t)*C,this.a14=(-j*v+k*u-l*t)*C,this.a21=(-e*B+g*y-h*x)*C,this.a22=(+a*B-c*y+d*x)*C,this.a23=(-m*v+o*s-p*r)*C,this.a24=(+i*v-k*s+l*r)*C,this.a31=(+e*A-f*y+h*w)*C,this.a32=(-a*A+b*y-d*w)*C,this.a33=(+m*u-n*s+p*q)*C,this.a34=(-i*u+j*s-l*q)*C,this.a41=(-e*z+f*x-g*w)*C,this.a42=(+a*z-b*x+c*w)*C,this.a43=(-m*t+n*r-o*q)*C,this.a44=(+i*t-j*r+k*q)*C,this},transpose:function(){var a=this.a11,b=this.a12,c=this.a13,d=this.a14,e=this.a21,f=this.a22,g=this.a23,h=this.a24,i=this.a31,j=this.a32,k=this.a33,l=this.a34,m=this.a41,n=this.a42,o=this.a43,p=this.a44;return this.a11=a,this.a12=e,this.a13=i,this.a14=m,this.a21=b,this.a22=f,this.a23=j,this.a24=n,this.a31=c,this.a32=g,this.a33=k,this.a34=o,this.a41=d,this.a42=h,this.a43=l,this.a44=p,this},mulVec3:function(b){var c=b.x,d=b.y,e=b.z;return new a(this.a14+this.a11*c+this.a12*d+this.a13*e,this.a24+this.a21*c+this.a22*d+this.a23*e,this.a34+this.a31*c+this.a32*d+this.a33*e)},mulVec4:function(a){var b=a.x,c=a.y,d=a.z,e=a.w;return new Vec4(this.a14*e+this.a11*b+this.a12*c+this.a13*d,this.a24*e+this.a21*b+this.a22*c+this.a23*d,this.a34*e+this.a31*b+this.a32*c+this.a33*d,this.a44*e+this.a41*b+this.a42*c+this.a43*d)},dup:function(){var a=new b;return a.set4x4r(this.a11,this.a12,this.a13,this.a14,this.a21,this.a22,this.a23,this.a24,this.a31,this.a32,this.a33,this.a34,this.a41,this.a42,this.a43,this.a44),a},toFloat32Array:function(){return new Float32Array([this.a11,this.a21,this.a31,this.a41,this.a12,this.a22,this.a32,this.a42,this.a13,this.a23,this.a33,this.a43,this.a14,this.a24,this.a34,this.a44])},to3x3Float32Array:function(){return new Float32Array([this.a11,this.a21,this.a31,this.a12,this.a22,this.a32,this.a13,this.a23,this.a33])}},b.ptFirstFrame=function(c,d,e){var f=e.dup().cross(d.subbed(c));if(f.lengthSquared()===0){var g=Math.abs(e.x),h=Math.abs(e.y),i=Math.abs(e.z);i<g&&i<h?f=e.dup().cross(new a(0,0,e.z)):h>g&&h>i?f=e.dup().cross(new a(0,e.y,0)):f=e.dup().cross(new a(e.x,0,0))}f.normalize();var j=e.dup().cross(f);return(new b).set4x4r(j.x,f.x,e.x,c.x,j.y,f.y,e.y,c.y,j.z,f.z,e.z,c.z,0,0,0,1)},b.ptNextFrame=function(a,c,d,e,f){var g=Math.acos(e.dot(f)),h=e.dup().cross(f);return g!==0&&h.lengthSquared()!==0?(h.normalize(),(new b).translate(d.x,d.y,d.z).rotate(g,h.x,h.y,h.z).translate(-c.x,-c.y,-c.z).mul(a)):(new b).translate(d.x-c.x,d.y-c.y,d.z-c.z).mul(a)},b}),define("embr/core/Math",["embr/core/Vec3","embr/core/Mat4"],function(a,b){"use strict";var c={},d=Math.kPI2=Math.PI/2,e=Math.kPI4=Math.PI/4,f=Math.k2PI=Math.PI*2;return c.rand=function(a){return Math.random()*a},c.randInt=function(a){return Math.floor(Math.random()*a)},c.rand2=function(a,b){return a+Math.random()*(b-a)},c.randInt2=function(a,b){return Math.floor(a+Math.random()*(b-a))},c.randSym=function(a){return a*2*Math.random()-a},c.lerp=function(a,b,c){return a+(b-a)*c},c.lmap=function(a,b,c,d,e){return d+(e-d)*((a-b)/(c-b))},c.clamp=function(a,b,c){return a<b?b:a>c?c:a},c.randVec3=function(b){var c=Math.random()*f,d=Math.random()*2-1,e=Math.sqrt(1-d*d);return new a(e*Math.cos(c)*b,e*Math.sin(c)*b,d*b)},c}),define("embr/core/Quat",["embr/core/Mat4"],function(a){function b(a,b,c,d){this.x=a,this.y=b,this.z=c,this.w=d}return"use strict",b.identity=function(){return new b(0,0,0,1)},b.prototype={set:function(a,b,c,d){return this.x=a,this.y=b,this.z=c,this.w=d,this},setQuat:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w,this},reset:function(){return this.set(0,0,0,1)},length:function(){var a=this.x,b=this.y,c=this.z,d=this.w;return Math.sqrt(a*a+b*b+c*c+d*d)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},mul2:function(a,b){var c=a.x,d=a.y,e=a.z,f=a.w,g=b.x,h=b.y,i=b.z,j=b.w;return this.x=j*c+g*f+h*e-i*d,this.y=j*d+h*f+i*c-g*e,this.z=j*e+i*f+g*d-h*c,this.w=j*f-g*c-h*d-i*e,this},mul:function(a){return this.mul2(this,a)},mulled:function(a){return this.dup().mul2(this,a)},mul4:function(a,b,c,d){var e=this.x,f=this.y,g=this.z,h=this.w;return this.x=d*e+a*h+b*g-c*f,this.y=d*f+b*h+c*e-a*g,this.z=d*g+c*h+a*f-b*e,this.w=d*h-a*e-b*f-c*g,this},normalize:function(){var a=this.length();return a>0&&(this.x/=a,this.y/=a,this.z/=a,this.w/=a),this},rotate:function(a,b,c,d){var e=Math.sqrt(b*b+c*c+d*d);if(e>0){var f=a/2,g=Math.sin(f);this.mul4(b/e*g,c/e*g,d/e*g,Math.cos(f))}return this},slerp:function(a,b){var c=this.dot(a),d,e,f,g;return c>=0?1-c>0?(f=Math.acos(c),g=1/Math.sin(f),d=Math.sin((1-b)*f)*g,e=Math.sin(b*f)*g):(d=1-b,e=b):1+c>0?(f=Math.acos(-c),g=1/Math.sin(f),d=Math.sin((b-1)*f)*g,e=Math.sin(b*f)*g):(d=b-1,e=b),this.set(this.x*d+a.x*e,this.y*d+a.y*e,this.z*d+a.z*e,this.w*d+a.w*e)},toMat4:function(){var b=this.x+this.x,c=this.y+this.y,d=this.z+this.z,e=this.w*b,f=this.w*c,g=this.w*d,h=this.x*b,i=this.x*c,j=this.x*d,k=this.y*c,l=this.y*d,m=this.z*d;return(new a).set4x4r(1-(k+m),i-g,j+f,0,i+g,1-(h+m),l-e,0,j-f,l+e,1-(h+k),0,0,0,0,1)},dup:function(){return new b(this.x,this.y,this.z,this.w)},toArray:function(){return[this.x,this.y,this.z,this.w]}},b}),define("embr/core/Program",[],function(){function d(a,b,c){this.gl=a,this.handle=a.createProgram(),this.shader_vert=a.createShader(a.VERTEX_SHADER),this.shader_frag=a.createShader(a.FRAGMENT_SHADER),a.attachShader(this.handle,this.shader_vert),a.attachShader(this.handle,this.shader_frag)}"use strict";var a="#ifdef GL_ES\nprecision highp float;\n#endif\n",b=a+"#define EM_VERTEX\n",c=a+"#define EM_FRAGMENT\n";return d.prototype={compile:function(a,d){var e=this.gl;if(a){e.shaderSource(this.shader_vert,b+a),e.compileShader(this.shader_vert);if(e.getShaderParameter(this.shader_vert,e.COMPILE_STATUS)!==!0)throw e.getShaderInfoLog(this.shader_vert)}if(d){e.shaderSource(this.shader_frag,c+d),e.compileShader(this.shader_frag);if(e.getShaderParameter(this.shader_frag,e.COMPILE_STATUS)!==!0)throw e.getShaderInfoLog(this.shader_frag)}},link:function(){function c(b,c){switch(b){case a.BOOL:case a.INT:case a.SAMPLER_2D:case a.SAMPLER_CUBE:return function(b){return a.uniform1i(c,b),this};case a.FLOAT:return function(b){return a.uniform1f(c,b),this};case a.FLOAT_VEC2:return function(b){a.uniform2f(c,b.x,b.y)};case a.FLOAT_VEC3:return function(b){a.uniform3f(c,b.x,b.y,b.z)};case a.FLOAT_VEC4:return function(b){a.uniform4f(c,b.x,b.y,b.z,b.w)};case a.FLOAT_MAT3:return function(b){a.uniformMatrix3fv(c,!1,b.to3x3Float32Array())};case a.FLOAT_MAT4:return function(b){a.uniformMatrix4fv(c,!1,b.toFloat32Array())}}return function(){throw"Unknown uniform type: "+b}}var a=this.gl,b=this.handle;a.linkProgram(b);if(a.getProgramParameter(b,a.LINK_STATUS)!==!0)throw a.getProgramInfoLog(b);this.uniforms={},this.locations={};var d,e,f,g=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(d=0;d<g;++d)e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),this.uniforms[e.name]=c(e.type,f),this.locations[e.name]=f;var h=a.getProgramParameter(b,a.ACTIVE_ATTRIBUTES);for(d=0;d<h;++d)e=a.getActiveAttrib(b,d),f=a.getAttribLocation(b,e.name),this.locations[e.name]=f;return this},assignLocations:function(a){for(var b in a.attributes)b in this.locations&&(a.attributes[b].location=this.locations[b])},use:function(a){this.gl.useProgram(this.handle);if(a)for(var b in a)b in this.uniforms&&this.uniforms[b](a[b])},dispose:function(){this.gl.deleteShader(this.shader_vert),this.gl.deleteShader(this.shader_frag),this.gl.deleteProgram(this.handle)}},d}),define("embr/core/Texture",[],function(){function a(a){this.gl=a,this.handle=a.createTexture()}return"use strict",a.prototype={dispose:function(){this.gl.deleteTexture(this.handle)},updateFormat:function(a){var b=this.gl;typeof a!="object"&&(a={}),this.target=a.target||b.TEXTURE_2D,this.format=a.format||b.RGBA,this.formati=a.formati||b.RGBA,this.type=a.type||b.UNSIGNED_BYTE,this.filter_min=a.filter_min||b.NEAREST,this.filter_mag=a.filter_mag||b.NEAREST,this.wrap_s=a.wrap_s||b.CLAMP_TO_EDGE,this.wrap_t=a.wrap_t||b.CLAMP_TO_EDGE,this.unit=a.unit>=0?b.TEXTURE0+a.unit:b.TEXTURE0,b.bindTexture(this.target,this.handle),b.texParameteri(this.target,b.TEXTURE_MIN_FILTER,this.filter_min),b.texParameteri(this.target,b.TEXTURE_MAG_FILTER,this.filter_mag),b.texParameteri(this.target,b.TEXTURE_WRAP_S,this.wrap_s),b.texParameteri(this.target,b.TEXTURE_WRAP_T,this.wrap_t)},setDataWithElement:function(a,b){var c=this.gl;this.updateFormat(b),c.texImage2D(this.target,0,this.formati,this.format,this.type,a)},setData:function(a,b,c,d){var e=this.gl;this.updateFormat(d),e.texImage2D(this.target,0,this.formati,a,b,0,this.format,this.type,c)},updateData:function(a){var b=this.gl;b.bindTexture(this.target,this.handle),b.texSubImage2D(this.target,0,0,0,this.width,this.height,this.format,this.type,a)},bind:function(a){var b=this.gl;a!==undefined&&(this.unit=b.TEXTURE0+a),b.activeTexture(this.unit),b.bindTexture(this.target,this.handle)},unbind:function(){var a=this.gl;a.activeTexture(this.unit),a.bindTexture(this.target,null)}},a}),define("embr/core/Vbo",["embr/core/Util"],function(a){function b(a,b,c,d){this.gl=a,this.type=b,this.usage=c,this.attributes={},d&&this.update(d)}return"use strict",b.prototype={dispose:function(){var a=this.gl;for(var b=attributes.length;--b>=0;)a.deleteBuffer(attributes[b])},update:function(a){var b,c,d,e=this.gl;for(var f in a)f in this.attributes||(this.attributes[f]={buffer:e.createBuffer()}),c=a[f],b=this.attributes[f],b.target=c.target||b.target||(f==="index"?e.ELEMENT_ARRAY_BUFFER:e.ARRAY_BUFFER),b.size=c.size||b.size||1,b.location=c.location!==undefined?c.location:b.location!==undefined?b.location:-1,d=c.data,d&&(b.length=Math.floor(d.length/b.size),b.target!==e.ELEMENT_ARRAY_BUFFER||d instanceof Uint16Array?d instanceof Float32Array||(d=new Float32Array(d)):d=new Uint16Array(d),e.bindBuffer(b.target,b.buffer),e.bufferData(b.target,d,this.usage));if(!this.attributes.index){this.length=Number.MAX_VALUE;for(var f in this.attributes)this.length=Math.min(this.length,this.attributes[f].length)}},draw:function(a){var b=this.gl;a&&(a.assignLocations(this),a.use());for(var c in this.attributes){var d=this.attributes[c];d.target===b.ARRAY_BUFFER&&d.location>=0&&(b.bindBuffer(d.target,d.buffer),b.vertexAttribPointer(d.location,d.size,b.FLOAT,!1,0,0),b.enableVertexAttribArray(d.location))}var e=this.attributes.index;e?(b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,e.buffer),b.drawElements(this.type,e.length,b.UNSIGNED_SHORT,0)):b.drawArrays(this.type,0,this.length)}},b.createPlane=function(a,c,d,e,f){var g=[c,d,0,c,f,0,e,d,0,e,f,0],h=[0,0,0,1,1,0,1,1];return new b(a,a.TRIANGLE_STRIP,a.STATIC_DRAW,{position:{data:g,size:3},texcoord:{data:h,size:2}})},b.createBox=function(a,c,d,e){var f=[c,d,e,c,-d,e,c,-d,-e,c,d,-e,c,d,e,c,d,-e,-c,d,-e,-c,d,e,c,d,e,-c,d,e,-c,-d,e,c,-d,e,-c,d,e,-c,d,-e,-c,-d,-e,-c,-d,e,-c,-d,-e,c,-d,-e,c,-d,e,-c,-d,e,c,-d,-e,-c,-d,-e,-c,d,-e,c,d,-e],g=[1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1],h=[0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],i=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];return new b(a,a.TRIANGLES,a.STATIC_DRAW,{position:{data:f,size:3},normal:{data:g,size:3},texcoord:{data:h,size:2},index:{data:i}})},b}),define("embr/core/Fbo",[],function(){function a(a,b,c,d){this.gl=a,this.width=b,this.height=c,this.tex_attachments=[],this.render_attachments=[],this.handle=a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,this.handle);for(var e=0,f=d.length,g=0;e<f;e++){var h=d[e],i=h.target||a.TEXTURE_2D,j=h.formati||a.RGBA,k=h.attach||a.COLOR_ATTACHMENT0+g++;if(i==a.RENDERBUFFER){var l=a.createRenderbuffer();a.bindRenderbuffer(a.RENDERBUFFER,l),a.renderbufferStorage(i,j,b,c),a.framebufferRenderbuffer(a.FRAMEBUFFER,k,i,l),this.render_attachments.push({handle:l})}else{var m=h.format||a.RGBA,n=h.type||a.UNSIGNED_BYTE,o=h.filter_min||a.NEAREST,p=h.filter_mag||a.NEAREST,q=h.wrap_s||a.CLAMP_TO_EDGE,r=h.wrap_t||a.CLAMP_TO_EDGE,s=a.createTexture();a.bindTexture(i,s),a.texImage2D(i,0,j,b,c,0,m,n,null),a.texParameteri(i,a.TEXTURE_MIN_FILTER,o),a.texParameteri(i,a.TEXTURE_MAG_FILTER,p),a.texParameteri(i,a.TEXTURE_WRAP_S,q),a.texParameteri(i,a.TEXTURE_WRAP_T,r),a.framebufferTexture2D(a.FRAMEBUFFER,k,i,s,0),this.tex_attachments.push({handle:s,target:i,unit:a.TEXTURE0})}}if(a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE)throw"Incomplete frame buffer object.";a.bindFramebuffer(a.FRAMEBUFFER,null)}return"use strict",a.prototype={bind:function(){var a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,this.handle)},unbind:function(){var a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,null)},bindTexture:function(a,b){var c=this.gl,d=this.tex_attachments[a];b!==undefined&&(d.unit=c.TEXTURE0+b),c.activeTexture(d.unit),c.bindTexture(d.target,d.handle)},unbindTexture:function(a){var b=this.gl,c=this.tex_attachments[a];b.activeTexture(c.unit),b.bindTexture(c.target,null)}},a}),define("embr/core/PingPong",["embr/core/Fbo"],function(a){function b(b,c,d,e){this.wbuffer=new a(b,c,d,e),this.rbuffer=new a(b,c,d,e),this.swap()}return"use strict",b.prototype={swap:function(){var a=this.wbuffer;this.wbuffer=this.rbuffer,this.rbuffer=a},bind:function(){this.wbuffer.bind()},unbind:function(){this.wbuffer.unbind()},bindTexture:function(){this.rbuffer.bindTexture.apply(this.rbuffer,arguments)},unbindTexture:function(){this.rbuffer.unbindTexture.apply(this.rbuffer,arguments)}},b}),define("embr/core",["embr/core/Math","embr/core/Util","embr/core/Vec2","embr/core/Vec3","embr/core/Vec4","embr/core/Mat4","embr/core/Quat","embr/core/Program","embr/core/Texture","embr/core/Vbo","embr/core/Fbo","embr/core/PingPong"],function(a,b,c,d,e,f,g,h,i,j,k,l){return{math:a,util:b,Vec2:c,Vec3:d,Vec4:e,Mat4:f,Quat:g,Program:h,Texture:i,Vbo:j,Fbo:k,PingPong:l}}),define("embr/material/Material",["embr/core/Util","embr/core/Program"],function(a,b){function c(a,c,d,e){b.call(this,a);if(e&&e.flags){var f="";for(var g in e.flags)e.flags[g]&&(f+="#define "+g+"\n");c=f+c,d=f+d}this.compile(c,d),this.link(),this.attribute_locations={};if(e&&e.attributes){var h;for(var i in e.attributes)h=e.attributes[i],h in this.locations&&(this.attribute_locations[i]=this.locations[h])}}return"use strict",a.extend(b,c),c.prototype.assignLocations=function(a){for(var b in a.attributes)b in this.attribute_locations?a.attributes[b].location=this.attribute_locations[b]:a.attributes[b].location=-1},c}),define("embr/material/ColorMaterial",["embr/core/Util","embr/material/Material"],function(a,b){"use strict";var c=["uniform mat4 modelview, projection;","attribute vec3 a_position;","#ifdef use_vertex_color","attribute vec4 a_color;","varying vec4 v_color;","#endif","#ifdef use_texture","attribute vec2 a_texcoord;","varying vec2 v_texcoord;","#endif","void main(){","#ifdef use_vertex_color","v_color = a_color;","#endif","#ifdef use_texture","v_texcoord = a_texcoord;","#endif","gl_Position = projection * modelview * vec4(a_position, 1.0);","}"].join("\n"),d=["uniform vec4 color;","#ifdef use_vertex_color","varying vec4 v_color;","#endif","#ifdef use_texture","uniform sampler2D texture;","varying vec2 v_texcoord;","#endif","void main(){","vec4 c = color;","#ifdef use_vertex_color","c *= v_color;","#endif","#ifdef use_texture","c *= texture2D(texture, v_texcoord);","#endif","gl_FragColor = c;","}"].join("\n"),e={attributes:{position:"a_position",texcoord:"a_texcoord",color:"a_color"},flags:{use_vertex_color:!1,use_texture:!1}};return a.extend(b,function(g,h){h=a.mergeOptions(e,h),b.call(this,g,c,d,h)})}),define("embr/material/NormalMaterial",["embr/core/Util","embr/material/Material"],function(a,b){"use strict";var c=["uniform mat4 modelview, projection;","attribute vec3 a_position;","attribute vec3 a_normal;","varying vec4 v_color;","void main(){","vec4 normal = modelview * vec4(a_normal, 0.0);","v_color = vec4((normal.xyz + 1.0) * 0.5, 1.0);","gl_Position = projection * modelview * vec4(a_position, 1.0);","}"].join("\n"),d=["varying vec4 v_color;","void main(){","gl_FragColor = v_color;","}"].join("\n"),e={attributes:{position:"a_position",normal:"a_normal"}};return a.extend(b,function(g,h){h=a.mergeOptions(e,h),b.call(this,g,c,d,h)})}),define("embr/material/LambertMaterial",["embr/core/Util","embr/material/Material"],function(a,b){"use strict";var c=["uniform mat4 modelview_matrix, projection_matrix;","uniform mat3 normal_matrix;","attribute vec3 a_position;","attribute vec3 a_normal;","varying vec3 v_normal;","void main(){","v_normal = normal_matrix * a_normal;","gl_Position = projection_matrix * modelview_matrix * vec4(a_position, 1.0);","}"].join("\n"),d=["uniform vec3 light_direction;","uniform vec4 ambient_color, diffuse_color;","varying vec3 v_normal;","void main(){","float i = clamp(dot(light_direction, normalize(v_normal)), 0.0, 1.0);","gl_FragColor = ambient_color;","gl_FragColor += diffuse_color * i;","}"].join("\n"),e={attributes:{position:"a_position",normal:"a_normal"},flags:{use_vertex_color:!1}};return a.extend(b,function(g,h){h=a.mergeOptions(e,h),b.call(this,g,c,d,h)})}),define("embr/material",["embr/material/Material","embr/material/ColorMaterial","embr/material/NormalMaterial","embr/material/LambertMaterial"],function(a,b,c,d){return{Material:a,ColorMaterial:b,NormalMaterial:c,LambertMaterial:d}}),define("embr/Arcball",["embr/core/Vec3","embr/core/Quat"],function(a,b){function c(a,c){this.center=a,this.radius=c,this.orientation=b.identity(),this.inverted=!1}return"use strict",c.prototype={screenToSphere:function(b,c,d){var e=new a((b-this.center.x)/this.radius,(c-this.center.y)/this.radius,0);this.inverted&&e.scale(-1);var f=e.lengthSquared();return f>1?e.scale(1/Math.sqrt(f)):(e.z=Math.sqrt(1-f),e.normalize()),e},down:function(a,b){this.down_pos=this.screenToSphere(a,b),this.down_ori=this.orientation.dup()},drag:function(a,c){var d=this.screenToSphere(a,c),e=this.down_pos.dup().cross(d);this.orientation=this.down_ori.mulled(new b(e.x,e.y,e.z,this.down_pos.dot(d))),this.orientation.normalize()}},c}),define("util",[],function(){function g(a,b,c,d){function e(f){d&&b.forEach(function(b){a.removeEventListener(b,e)}),c(f)}b.forEach(function(b){a.addEventListener(b,e)})}"use strict";var a=Math.PI,b=a/180,c=a*2,d=["webkitTransitionEnd","transitionend","MSTransitionEnd","oTransitionEnd"],e=["mousewheel","DOMMouseScroll"],f=/[#&]([\w\-\.,]+)=([\w\-\.,]+)/g;return{getGLContext:function(a){var b=null;try{b=a.getContext("experimental-webgl")}catch(c){console.error(c)}if(b)return console.log(["GL Context Created",b.getParameter(b.VERSION),b.getParameter(b.VENDOR),b.getParameter(b.RENDERER),b.getParameter(b.SHADING_LANGUAGE_VERSION)].join(" – ")),b},loadImage:function(a,b){var c=new Image;return c.crossOrigin="anonymous",b&&(c.onload=function(){b(null,c)},c.onerror=function(){b(err,c)}),c.src=a,c},parseUrlHash:function(a){var b,c={};while((b=f.exec(a))!=null)c[b[1]]=b[2].indexOf(",")===-1?b[2]:b[2].split(",");return c},stringifyParams:function(a){var b=[];for(var c in a)b.push(c+"="+(a[c]instanceof Array?a[c].join(","):a[c]));return b.join("&")},addTransitionEndListener:function(a,b,c){g(a,d,b,c)},addMouseWheelListener:function(a,b){g(a,e,function(a){a.wheelDelta?a.delta=event.wheelDelta/120:a.detail&&(a.delta=-a.detail),b(a)},!1)},degreeToRadian:function(a){return a*b},angleBetween:function(b,d){while(b<0)b+=c;while(b>c)b-=c;while(d<0)d+=c;while(d>c)d-=c;var e=Math.abs(b-d);return e>a?c-e:e}}}),define("sv",["embr/core","embr/material","util"],function(a,b,c){function d(b,c){var d=new a.Vec2(b.tiles.worldSize.width,b.tiles.worldSize.height),e=d.y/d.x,f=Math.pow(2,c),g=Math.ceil(f*e),h=f*b.tiles.tileSize.width;while(d.x>h)d.scale(.5);return{size:d,tiles:new a.Vec2(f,g)}}function e(a,b,c,d){this.pano=a,this.zoom=b,this.x=c,this.y=d}function f(f){function v(a){this.coord=a,this.id=a.getKey(),this.cancelled=!1}function w(a){a.coord.zoom===0&&a.coord.pano in l&&(l[a.coord.pano](),delete l[a.coord.pano]),--k===0&&j.length===0&&n<h&&(u.setZoom(n+1),u.resetQueue()),p&&window.clearTimeout(p);var b=n===1?150:0;p=window.setTimeout(function(){p=0,u.processQueue()},b)}var g=4,h=2,i={},j,k=0,l={},m,n=-1,o,p,q=this.framebuffer=new a.Fbo(f,2048,2048,[{filter_min:f.LINEAR,filter_mag:f.LINEAR,wrap_s:f.REPEAT,wrap_t:f.MIRRORED_REPEAT}]),r=a.Vbo.createPlane(f,0,0,1,1),s=new b.ColorMaterial(f,{flags:{use_texture:!0}});s.use({texture:0,color:new a.Vec4(1,1,1,1)});var t=new a.Mat4,u=this;v.prototype={load:function(){var b=this;c.loadImage(this.coord.getUrl(),function(c,d){c?console.error(c):b.cancelled||(b.texture=new a.Texture(f),b.texture.setDataWithElement(d,{filter_min:f.LINEAR,filter_mag:f.LINEAR}),u.draw()),w(b)}),k++},draw:function(){this.texture&&this.coord.zoom===n&&(this.texture.bind(0),s.use({projection:t,modelview:(new a.Mat4).translate(this.coord.x,this.coord.y,0)}),r.draw(s))},dispose:function(){this.texture&&this.texture.dispose(),this.cancelled=!0}},this.resetQueue=function(){j=[];var a,b,c,d,f;for(f=o.tiles.y;--f>=0;)for(d=o.tiles.x;--d>=0;)j.push(new e(m.location.pano,n,d,f))},this.processQueue=function(){var a;while(k<g&&j.length>0)a=new v(j.shift()),i[a.id]=a,a.load()},this.setPano=function(a,b){if(m&&a.location.pano==m.location.pano)return;m=a,b&&(l[a.location.pano]=b),this.setZoom(0),this.resetQueue(),this.processQueue()},this.getPano=function(){return m},this.setZoom=function(a){a=Math.min(h,a);if(a!==n){n=a,o=d(m,n);var b=o.size.x/m.tiles.tileSize.width,c=o.size.y/m.tiles.tileSize.height;t.reset().ortho(0,b,0,c,-1,1),this.clearTiles()}},this.clearTiles=function(){for(var a in i)i[a].dispose(),delete i[a]},this.draw=function(){q.bind(),f.viewport(0,0,q.width,q.height);for(var a in i)i[a].draw();q.unbind()}}return"use strict",e.prototype={getKey:function(){return[this.pano,this.zoom,this.x,this.y].join(",")},getUrl:function(){return"http://cbk"+a.math.randInt(4)+".google.com/cbk?output=tile"+"&panoid="+this.pano+"&zoom="+this.zoom.toFixed()+"&x="+this.x.toFixed()+"&y="+this.y.toFixed()}},{TileCoord:e,TileLoader:f}}),require.config({paths:{embr:"lib/embr/src"}}),require(["embr/core","embr/material","embr/Arcball","util","sv"],function(a,b,c,d,e){function D(){var a=y.getPosition(),b=A.getPosition();a&&b&&z.setPath(new v.MVCArray(w.getBounds().contains(a)&&w.getBounds().contains(b)?[a,b]:[]))}function E(){var a=bd.getPano();a&&!w.getBounds().contains(a.location.latLng)&&w.panTo(a.location.latLng)}function H(){try{bb.compile(F,j.value),bb.link(),j.classList.remove("error"),j.value.trim()!=G&&U(),console.log("Compile Successful!")}catch(a){j.classList.add("error"),console.error("Error compiling shader: "+a)}}function N(a){L.drag(a.clientX,a.clientY)}function O(a){i.classList.remove("grabbing"),i.removeEventListener("mousemove",N),document.removeEventListener("mouseup",O),U()}function Q(a,b){if(b==v.StreetViewStatus.OK&&bd){var c=a.location.latLng;y.setPosition(c),bd.setPano(a,function(){R=d.degreeToRadian(a.tiles.centerHeading),n.value=a.location.description.trim()}),E(),U()}}function S(){i.width=i.clientWidth,i.height=i.clientHeight,L.center=new a.Vec2(i.width/2,i.height/2),L.radius=L.center.length(),w.getDiv().style.height=h.clientHeight-l.offsetHeight+"px",r.style.left=(window.innerWidth-r.clientWidth)/2+"px",r.style.top=(window.innerHeight-r.clientHeight)/2+"px"}function T(a,b){C.geocode({address:a},function(a,c){c==v.GeocoderStatus.OK&&(w.fitBounds(a[0].geometry.viewport),b(a[0].geometry.location))})}function U(){var a={o:L.orientation.toArray().map(function(a){return a.toFixed(3)}),z:K.toFixed(3),mz:w.getZoom().toFixed()};w.getMapTypeId()!=v.MapTypeId.ROADMAP&&(a.mt=w.getMapTypeId());var b;bd&&bd.getPano()&&(b=bd.getPano().location)&&(a.p=[b.latLng.lat().toFixed(5),b.latLng.lng().toFixed(5)]),document.location.hash=d.stringifyParams(a)}function V(){var a=d.parseUrlHash(document.location.hash);a.o&&a.o.length===4&&(L.orientation.set.apply(L.orientation,a.o.map(parseFloat)),M.setQuat(L.orientation)),a.z&&(J=K=parseFloat(a.z)),a.mz&&w.setZoom(parseInt(a.mz)),a.mt&&w.setMapTypeId(a.mt);if(a.p&&a.p.length===2){var b=new v.LatLng(parseFloat(a.p[0]),parseFloat(a.p[1]));!isNaN(b.lat())&&!isNaN(b.lat())&&(w.panTo(b),A.setPosition(b),W=!0)}}function X(){window.requestAnimationFrame(Y)}function Y(){X();var b=(Date.now()-Z)/1e3;ba.viewport(0,0,i.width,i.height),bd.framebuffer.bindTexture(0),J=a.math.lerp(J,K,.33),M.slerp(L.orientation,.33).normalize(),bb.use({projection:_,aspect:i.height/i.width,scale:Math.pow(J,3),transform:M.toMat4().mul((new a.Mat4).rotate(R+Math.PI/2,0,0,1)),time:b,texture:0}),bc.draw(bb)}window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){window.setTimeout(a,1e3/60)}}());var f=["o=0,0,0,1&p=54.21050,-2.36962&z=1.656&mt=hybrid","o=0,0,0,1&p=35.66007,139.69978","o=0,0,0,1&p=-23.61071,-46.59209","o=0,0,0,1&p=22.33605,114.18748","o=0,0,0,1&p=22.27844,114.16438","o=0,0,0,1&p=33.93011,-118.28101","o=0,0,0,1&p=37.79071,-122.40561","o=0,0,0,1&p=40.70911,-74.01057","o=0,0,0,1&p=35.01639,135.68119","o=0,0,0,1&p=25.03293,121.56480&z=1.553"],g=document.getElementById("left"),h=document.getElementById("right"),i=document.getElementById("gl-canvas"),j=document.getElementById("code"),k=document.getElementById("code-toggle"),l=document.getElementById("mapui"),m=document.getElementById("panoui"),n=document.getElementById("location"),o=document.getElementById("above"),p=document.getElementById("below"),q=document.getElementById("fullwindow"),r=document.getElementById("about"),s=document.getElementById("about-toggle"),t=document.getElementById("about-backdrop"),u=document.getElementById("no-webgl"),v=google.maps,w=new v.Map(document.getElementById("map"),{center:new v.LatLng(0,0),zoom:17,mapTypeId:v.MapTypeId.ROADMAP,streetViewControl:!1,keyboardShortcuts:!1}),x=new v.ImageMapType({getTileUrl:function(b,c){return"http://cbk"+a.math.randInt(4)+".google.com/cbk?output=overlay"+"&zoom="+c+"&x="+b.x%(1<<c)+"&y="+b.y+"&cb_client=api"},tileSize:new v.Size(256,256)}),y=new v.Marker({map:w,icon:new v.MarkerImage("img/pano_marker.png",new v.Size(14,14),new v.Point(0,0),new v.Point(7,7))}),z=new v.Polyline({map:w,clickable:!1,strokeColor:"#444",strokeWeight:4,geodesic:!0}),A=new v.Marker({map:w,draggable:!0,raiseOnDrag:!1}),B=new v.StreetViewService,C=new v.Geocoder;v.event.addListener(w,"click",function(a){A.setPosition(a.latLng)}),v.event.addListener(w,"maptypeid_changed",U),v.event.addListener(A,"position_changed",function(){B.getPanoramaByLocation(A.getPosition(),50,Q),D()}),v.event.addListener(A,"dragstart",function(a){w.overlayMapTypes.setAt(1,x)}),v.event.addListener(A,"dragend",function(a){w.overlayMapTypes.setAt(1,null)}),v.event.addListener(y,"position_changed",D),v.event.addListener(w,"zoom_changed",function(a){U()});var F=["uniform mat4 projection;","attribute vec3 position;","attribute vec2 texcoord;","varying vec2 v_texcoord;","void main(){","v_texcoord = texcoord;","gl_Position = projection * vec4(position, 1.);","}"].join("\n"),G=j.value.trim();j.addEventListener("keydown",function(a){a.stopPropagation();if(event.keyCode==9){a.preventDefault();var b=j.selectionStart,c=j.selectionEnd;j.value=j.value.substring(0,b)+"    "+j.value.substring(c,j.value.length),j.selectionStart=j.selectionEnd=b+4,j.focus()}},!1),j.addEventListener("keyup",function(a){a.stopPropagation();if(event.keyCode==37||event.keyCode==38||event.keyCode==39||event.keyCode==40)return;H()},!1),j.addEventListener("keypress",function(a){a.stopPropagation()},!1),n.addEventListener("mousedown",function(a){n!==document.activeElement&&(a.preventDefault(),n.focus(),n.select())},!1),n.addEventListener("keydown",function(a){a.stopPropagation(),a.keyCode==13&&(a.preventDefault(),T(n.value,function(a){A.setPosition(a)}),n.blur())},!1),n.addEventListener("keypress",function(a){a.stopPropagation()},!1);var I=!1;k.addEventListener("click",function(a){I=!I,k.setAttribute("class",I?"open":"shut"),I?(j.style.visibility="visible",j.classList.remove("shut")):(d.addTransitionEndListener(j,function(a){j.style.visibility="hidden"},!0),j.classList.add("shut"))},!1),document.addEventListener("keydown",function(a){if(bd&&bd.getPano()&&a.keyCode>=37&&a.keyCode<=40){var b=(a.keyCode-38)*(Math.PI/2),c,e=Number.MAX_VALUE,f;bd.getPano().links.forEach(function(a){f=d.angleBetween(b,d.degreeToRadian(a.heading)),f<Math.PI/2&&f<e&&(c=a,e=f)}),c&&B.getPanoramaById(c.pano,function(a,b){b==v.StreetViewStatus.OK&&(A.setPosition(a.location.latLng),Q(a,b))})}},!1),document.addEventListener("keypress",function(a){var b=String.fromCharCode(a.charCode);b=="-"&&w.setZoom(w.getZoom()-1),b=="="&&w.setZoom(w.getZoom()+1)},!1),d.addMouseWheelListener(i,function(b){K=a.math.clamp(J-b.delta*.0333,.5,10),U()});var J=1.8,K=J,L=new c;L.inverted=!0;var M=a.Quat.identity();i.addEventListener("mousedown",function(a){a.preventDefault(),i.classList.add("grabbing"),L.down(a.clientX,a.clientY),i.addEventListener("mousemove",N),document.addEventListener("mouseup",O,!0)}),o.addEventListener("click",function(a){a.preventDefault(),L.orientation.reset(),U()}),p.addEventListener("click",function(a){a.preventDefault(),L.orientation.reset().rotate(Math.PI,1,0,0),U()});var P=!1;q.addEventListener("click",function(a){a.preventDefault(),q.textContent=(P=!P)?"halfwindow":"fullwindow",P?(g.classList.add("full"),h.classList.add("full")):(g.classList.remove("full"),h.classList.remove("full")),S()}),t.addEventListener("click",function(a){a.preventDefault(),r.style.visibility=t.style.visibility="hidden"},!1),s.addEventListener("click",function(a){a.preventDefault(),r.style.visibility=t.style.visibility="visible"},!1);var R=0;window.addEventListener("resize",S,!1);var W=!1;document.location.hash&&V(),W||(document.location.hash=f[a.math.randInt(f.length)],V());var Z=Date.now(),$=new a.Mat4,_=(new a.Mat4).ortho(0,1,1,0,-1,1),ba=d.getGLContext(i);if(ba){var bb=new a.Program(ba),bc=a.Vbo.createPlane(ba,0,0,1,1),bd=new e.TileLoader(ba);H(),X(),i.style.display="block"}else u.style.display="block";S()}),define("main",function(){})