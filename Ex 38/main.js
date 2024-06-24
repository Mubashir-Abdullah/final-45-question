function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//first calling the function 
describe_city("karachi");
//Second calling the function
describe_city("Berlin", "Germany");
//third calling the function
describe_city("Lahore");
