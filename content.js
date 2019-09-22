var udaraBibile = {
    name: "Udara Bibile",
    role: "Full Stack Developer",
    pic: "images/pic01.jpg"
}

var tags = [
    { id: "nodejs", icon: "fa-download"},
    { id: "reactjs", icon: "fa-download"},
    { id: "sql", icon: "fa-download"},
    { id: "linux", icon: "fa-download" },
]

var post_sql_foreign_keys = {
    id: "sql-foreign-keys/index.html",
    title: "SQL Snippet: Foreign Keys",
    subTitle: "Making relationship between database tables",
    date: "September 21, 2019",
    author: udaraBibile.name,
    featureImage: "images/pic01.jpg",
    summary: "xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx.",
    tags: [ tags[0].id, tags[1].id],
}

var post_sql_transaction = {
    id: "sql-foreign-keys/index.html",
    title: "SQL Snippet: Transaction",
    subTitle: "Making relationship between database tables",
    date: "September 21, 2019",
    author: udaraBibile.name,
    featureImage: "images/pic01.jpg",
    summary: "xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx.",
    tags: [ tags[0].id, tags[2].id],
}

var post_linux_foreign_keys = {
    id: "sql-foreign-keys/index.html",
    title: "Linux Snippet: Basic Commands",
    subTitle: "Making relationship between database tables",
    date: "September 21, 2019",
    author: udaraBibile.name,
    featureImage: "images/pic01.jpg",
    summary: "xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx.",
    tags: [tags[3].id],
}

var content = {
    posts: [
        post_sql_foreign_keys,
        post_sql_transaction,
        post_linux_foreign_keys
    ],

    authors: [
        udaraBibile
    ],

    tags: tags
}


/*
    http://jsfiddle.net/aybalasubramanian/N2b5M/1/

    person: { firstName: "Garry", lastName: "Finch"},

    Handlebars.registerHelper('createTags', (tags) => {
        return person.firstName + " " + person.lastName;
    });

    {{#users}} 
    <tr> 
        <td>{{fullName person}}</td> 
        <td>{{jobTitle}}</td> 
        <td><a href="https://twitter.com/{{twitter}}">@{{twitter}}</a></td> 
    </tr> 
    {{/users}} 
*/