jQuery(document).ready(function () {
    //when someone type in input field then error mssg hide
    jQuery('input[type="text"], input[type="password"], input[type="email"]').on('input', function(){
        jQuery(this).parent().find('.err-msg').remove();
    });
   //register validation js form submit krne pe
   jQuery('#registerForm').submit(function(e){
    //submit ke baad page reload na ho isliye event prevent default use krte h
        e.preventDefault();
        jQuery('.err-msg').remove();
        var fname = jQuery('#fullname').val();
        var email = jQuery('#email').val();
        var password = jQuery('#password').val();
        var cpassword = jQuery('#cpassword').val();
        let isValid = true;

        //
        if(fname=='' || fname.length < 4){
            jQuery('#fullname').after(`<p class="text-danger err-msg">Fullname is required!</p>`);
            isValid = false;
        }
       //email rejax
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email=='' || !emailPattern.test(email)){
            jQuery('#email').after(`<p class="text-danger err-msg">Email is required & valid Email!</p>`);
            isValid = false;
        }
        if (password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            jQuery('#password').after(`<p class="text-danger err-msg">Password must be at least 8 characters long and contain at least one uppercase letter and one special character!</p>`);
            isValid = false;
        }
        if(cpassword=='' || cpassword != password){
            jQuery('#cpassword').after(`<p class="text-danger err-msg">Password and confirm password must be same!</p>`);
            isValid = false;
        }
        if(isValid){
            alert('everythinf is perfect');
            jQuery.ajax({
                url:'/register',
                method:'post',
                data:{
                    _token: $('meta[name="csrf-token"]').attr('content'), // manually add token
                    fname:fname,
                    email:email,
                    password:password,
                    cpassword:cpassword
                },
                success:function(data){
                  console.log(data);
                }
            })
        }

   });
   jQuery('body').on('click', '#showpassword', function() {
       var passType = jQuery('#password').attr('type');
       var changeType = passType == 'password' ? 'text' : 'password';
       jQuery('#password').attr('type', changeType);
    });
});
