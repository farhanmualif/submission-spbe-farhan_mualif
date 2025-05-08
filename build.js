import { build } from 'esbuild';

   build({
     entryPoints: ['src/index.js'], 
     bundle: true,             
     outfile: 'dist/app.js',    
     platform: 'node',          
     target: 'node16',          
     format: 'esm',             
     minify: true,             
     keepNames: true,          
     logLevel: 'info',         
   }).then(() => {
     console.log('Build selesai! File output: dist/app.js');
   }).catch((error) => {
     console.error('Build gagal:', error);
     process.exit(1);
   });