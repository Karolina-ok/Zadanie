/*Test Automation coding challenge
Tests written in JavaScript in Postman application
request GET https://api.punkapi.com/v2/beers?brewed_after=12-2015

Tests:*/

pm.test("abv is a double", function () {
    pm.expect(typeof pm.response.json()[0].abv).to.eql("number");
});

pm.test("abv is not null", function () {
    pm.expect(pm.response.json()[0].abv).to.not.be.null;
});

pm.test("abv is not an empty string", function () {
    pm.expect(pm.response.json()[0].abv).to.not.eql("");
});

pm.test("abv is greater than 4.0", function () {
    pm.expect(pm.response.json()[0].abv).to.be.greaterThan(4.0);
});

pm.test("name is not null", function () {
    pm.expect(pm.response.json()[0].name).to.not.be.null;
});

pm.test("name is not an empty string", function () {
    pm.expect(pm.response.json()[0].name).to.not.eql("");
});

pm.test("id is unique", function () {
    var ids = pm.response.json().map(function (beer) {
        return beer.id;
    });
    pm.expect(ids.length).to.eql(new Set(ids).size);
});

pm.test("description is not an empty string", function () {
    pm.expect(pm.response.json()[0].description).to.not.eql("");
});

pm.test("image url is provided", function () {
    pm.expect(pm.response.json()[0].image_url).to.not.eql("");
});