
function write(text){
    process.stdout.write(text);
}

// write('hello\nworld\t\tpeople');

// bold                                 reset
write('\x1B[1m'); write('hello world'); write('\x1B[0m'); write('\n');
write('\x1B[2m'); write('hello world'); write('\x1B[0m'); write('\n');
write('\x1B[3m'); write('hello world'); write('\x1B[0m'); write('\n');
write('\x1B[4m'); write('hello world'); write('\x1B[0m'); write('\n');
write('\x1B[5m'); write('hello world'); write('\x1B[0m'); write('\n');
write('\x1B[7m'); write('hello world'); write('\x1B[0m'); write('\n');
write('\x1B[8m'); write('hello world'); write('\x1B[0m'); write('\n');
write('\x1B[9m'); write('hello world'); write('\x1B[0m'); write('\n');

for (let i = 30; i<38; i++){
    write(`\x1B[${i}m`); write('hello world'); write('\x1B[0m'); write('\n');
}
for (let i = 90; i<97; i++){
    write(`\x1B[${i}m`); write('hello world'); write('\x1B[0m'); write('\n');
}
for (let i = 40; i<48; i++){
    write(`\x1B[${i}m`); write('hello world'); write('\x1B[0m'); write('\n');
}
for (let i = 100; i<107; i++){
    write(`\x1B[${i}m`); write('hello world'); write('\x1B[0m'); write('\n');
}
for (let i = 0; i<256; i++){
    let num = i.toString().padEnd(4);
    write(`\x1B[38;5;${i}m`); write(num); write('\x1B[0m'); 
    if(i+1%16 == 0){
        write('\n');
    }
}