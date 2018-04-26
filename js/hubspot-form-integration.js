$(document).ready(function() {
    var hubspotFormsUrl = "https://forms.hubspot.com/uploads/form/v2/"
    var hubspotPortalID = "4168237"
    var hubspotContactFormGuid = "5a0f6201-629a-4739-83d0-3ea0b0064fca"
    var url = hubspotFormsUrl + hubspotPortalID + "/" + hubspotContactFormGuid
    $("form").submit(function(event){
        $.post( url, $( this ).serialize(), function(data){
            // Whatever is to be done after submitting the form can be done here!
        });
    })
})