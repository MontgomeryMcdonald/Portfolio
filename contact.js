$(document).ready(function(){
            (function(){
            emailjs.init({
                publicKey: "2-mmyqvzc8wORvWhE",
            })
        })()
        function sendEmail(){
            // assigns each value to a variable
            let subject = $("#subject").val();
            let name = $("#name").val();
            let email = $("#email").val();
            let message = $("#message").val();
            // sends the variables (containing input data from users) to emailjs, which sends the email automatically. key is the variable name in emailjs, and the value is the variable being passed into emailjs. it will then autofill the values we need.
            emailjs.send("service_bgdhrdc", "template_cefgrfj", {
                subject:subject,
                name:name,
                email:email,
                message:message,
            })
        }
        $(".submit").click(function(event) {
            // stops the form from clearing by default, which nulls out all the values. 
            event.preventDefault();
            sendEmail();
        });

})