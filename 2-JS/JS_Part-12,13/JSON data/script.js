let jsonRes = '{"fact":"People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.","length":165}'

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "Shreyash",
    marks: 76.5,
};

let json = JSON.stringify(student);
console.log(json);