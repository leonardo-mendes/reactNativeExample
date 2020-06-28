"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InviteList = /*#__PURE__*/function () {
  function InviteList() {
    _classCallCheck(this, InviteList);

    this.invites = [];
  }

  _createClass(InviteList, [{
    key: "invite",
    value: function invite(name, age, document) {
      this.invites.push({
        name: name,
        age: age,
        document: document
      });
    }
  }]);

  return InviteList;
}();

var newList = new InviteList();

document.getElementById("invite").onclick = function () {
  newList.invite(document.getElementById("#name"), 28, 123456789);
  console.log(document.getElementById("#name").nodeValue.name + "Invited");
};

var invite = {
  place: "Uberlândia",
  date: "01/01/2020"
};
var place = invite.place,
    date = invite.date;
console.log(place);
