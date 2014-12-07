$(document).ready(function() {
    $("#word").toggleInputValue();
    $("#word").keypress(PressEnter);
    $("#word").focus();
    $("#search").click(getWords);
});

function PressEnter(event) {
    if (event.which == 13) {
      $("#search").click();
    }
};

$.fn.toggleInputValue = function() {
    var input = $(this);
    var defaultValue = input.val();

    input.focus(function() {
        if (input.val() == defaultValue) input.val("");
    }).blur(function() {
        if (input.val().length == 0) input.val(defaultValue);
    });
};

function getWords() {
    var youdaoAPI = "http://fanyi.youdao.com/openapi.do?";

    $.getJSON(youdaoAPI, {
        keyfrom: "testyoudaodict123",
        key: "1746203895",
        type: "data",
        doctype: "json",
        version: "1.1",
        q: $("#word").val()
    })
    .done(function(data) {
        var i;

        $("#container").empty();
        for (i in data.basic.explains) {
            $("#container").append("<li>"+data.basic.explains[i]+"</li>");
        };
        //$("#debug").html("done");
    });
}

