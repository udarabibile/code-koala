var udaraBibile = {
    name: "Udara Bibile",
    fullName: "Udara Chathuranga Bibile",
    role: "Full Stack Developer",
    pic: "/images/authors/udarabibile.png",
    interests: ["nodejs", "dotnet core", "microservices", "golang"]
}

var tags = [
    { id: "nodejs", icon: "fa-download"},
    { id: "reactjs", icon: "fa-download"},
    { id: "sql", icon: "fa-download"},
    { id: "linux", icon: "fa-download" },
]

var post_sql_foreign_keys = {
    type: "snippet",
    id: "sql-foreign-keys",
    title: "SQL Snippet: Foreign Keys",
    subTitle: "Making relationship between database tables",
    date: "September 21, 2019",
    author: udaraBibile.name,
    authorImage: udaraBibile.pic,
    featureImage: "/images/pic01.jpg",
    summary: "xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx xxxxxxxxssssxxxxxxxx.",
    tags: [ tags[0].id, tags[1].id],
}

var article_context_api = {
    type: "article",
    id: "context-api-introduction",
    title: "Introduction to React Context API",
    subTitle: "Avoid props drilling to child components",
    date: "July 20, 2019",
    author: udaraBibile.name,
    authorImage: udaraBibile.pic,
    featureImage: "/context-api-introduction/featured.png",
    summary: "From React’s version 16.3.0, Context API is officially released to avoid props drilling to child components.",
    tags: [tags[1].id],
    content: `<p>From React’s version 16.3.0, Context API is officially released to avoid props drilling to child components.</>`
}

var content = {
    posts: [
        post_sql_foreign_keys,
        article_context_api,
    ],

    authors: [
        udaraBibile,
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