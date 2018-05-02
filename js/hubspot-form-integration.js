$(document).ready(function() {
    var hubspotFormsUrl = "https://forms.hubspot.com/uploads/form/v2/"
    var gRecaptchaUrl = "https://www.google.com/recaptcha/api/siteverify"
    var hubspotPortalID = "4168237"
    var hubspotContactFormGuid = "5a0f6201-629a-4739-83d0-3ea0b0064fca"
    var googleRecaptchaSecret = "6LdPB1YUAAAAAA08InPAxCNJwL8HP_CGIsSfYmR_"
    var url = hubspotFormsUrl + hubspotPortalID + "/" + hubspotContactFormGuid
    // $("form").submit(function(event){
    //     event.preventDefault();
    //     var form = $( this ).serializeArray();
    //     var recaptchaResponse = form[6]['value'];
    //     $.get('https://jsonip.com/', function(jsonipData){ 
    //         console.log(jsonipData.ip);
    //         var reqObj = {
    //             'secret': googleRecaptchaSecret,
    //             'response': recaptchaResponse,
    //             'remoteip': jsonipData.ip
    //         }
    //         $.post( gRecaptchaUrl, reqObj, function(data){
    //             console.log(data)
    //         });
    //     });
    //     $.post( url, $( this ).serialize(), function(data){
    //         //console.log(data['g-recaptcha-response'])
    //         //console.log("This is form submit handler")
    //         console.log("Breakpoint line")
    //         // Whatever is to be done after submitting the form can be done here!
    //     });
    // })
})