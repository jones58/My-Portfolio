//dark mode //

const darkModeButton = document.getElementById("dark-mode");

const darkModeOn = () => {
  document.body.classList.add("darkMode");
};

const darkModeOff = () => {
  document.body.classList.remove("darkMode");
};

darkModeButton.addEventListener("click", () => {
  if (document.body.classList.contains("darkMode")) {
    darkModeOff();
  } else {
    darkModeOn();
  }
});

// email script //

/* SmtpJS.com - v3.0.0 */
var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)),
        (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost(
        "https://smtpjs.com/v3/smtpjs.aspx?",
        t,
        function (e) {
          n(e);
        }
      );
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    ),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};

function sendEmail() {
  Email.send({
    SecureToken: "34b97877-517d-46f3-afc2-fe580d7252ba",
    To: "jcode689@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New contact form enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "‹br> Email: " +
      document.getElementById("email").value +
      "‹br> Pnone no: " +
      document.getElementById("phone").value +
      "‹br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}
