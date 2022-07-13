 const crypto =require('crypto')
 const pbkdf2 = crypto.pbkdf2
 const start =Date.now()
 pbkdf2('pass','salt',1000000,30,'sha512' ,()=> {
    console.log('1:', Date.now() - start)
 })
 pbkdf2('pass','salt',1000000,30,'sha512' ,()=> {
    console.log('2:', Date.now() - start)
 })
 pbkdf2('pass','salt',1000000,30,'sha512' ,()=> {
    console.log('3:', Date.now() - start)
 })
 pbkdf2('pass','salt',1000000,30,'sha512' ,()=> {
    console.log('4:', Date.now() - start)
 })
 
 pbkdf2('pass','salt',1000000,30,'sha512' ,()=> {
    console.log('5:', Date.now() - start)
 })
 pbkdf2('pass','salt',1000000,30,'sha512' ,()=> {
    console.log('6:', Date.now() - start)
 })
