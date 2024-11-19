function validate(){
    let mail = document.getElementById('email').value
    let email = document.getElementById('email')
    let sign_mob = document.querySelector('#validx')
    let sign = document.querySelector('#validy')
    let regex = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(regex.test(mail)){
        console.log('valid')
        email.style.border= '2px solid lightgray'
        sign.style.color = 'white'
        sign_mob.style.color= 'white'
        
    }
    else{
        console.log('invalid')
        email.style.border= '2px solid red'
        sign.style.color = 'red'
        sign_mob.style.color= 'red'


    }
}