function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    var name = data.name || '';
    var phone = data.phone || '';
    var email = data.email || '';
    var note = data.note || '';
    var pageUrl = data.pageUrl || '';
    var imageBase64 = (data.imageBase64 || '').replace(/^data:image\/png;base64,/, '');

    var attachments = [];
    if (imageBase64) {
      var bytes = Utilities.base64Decode(imageBase64);
      var blob = Utilities.newBlob(bytes, 'image/png', 'label-' + Date.now() + '.png');
      attachments.push(blob);
    }

    MailApp.sendEmail({
      to: 'matsiwine@gmail.com',
      subject: 'ახალი ეტიკეტის შეკვეთა - ' + (name || 'უცნობი'),
      htmlBody:
        '<h2>ახალი ეტიკეტის შეკვეთა</h2>' +
        '<p><b>სახელი:</b> ' + sanitize(name) + '</p>' +
        '<p><b>ტელეფონი:</b> ' + sanitize(phone) + '</p>' +
        '<p><b>ელფოსტა:</b> ' + sanitize(email || '-') + '</p>' +
        '<p><b>შენიშვნა:</b> ' + sanitize(note || '-') + '</p>' +
        '<p><b>გვერდი:</b> ' + sanitize(pageUrl || '-') + '</p>',
      attachments: attachments
    });

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitize(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
