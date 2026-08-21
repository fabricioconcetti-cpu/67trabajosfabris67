let cine = [
[1,0,1,0,1],
[0,1,0,1,0],
[1,0,1,0,1],
[0,1,0,1,0],
[1,0,1,0,1]  
]
let aprobados = 0, defectuoso =0;
for (let i = 0; i < 5; i++) {
ventas[i] = [];
for (let j = 0; j < 5; j++) {
if (productos[i][j] === 1) aprobados++;
else defectuosos++;    ;
    }
}
