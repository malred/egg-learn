<h1>hello {{message}}</h1>
<ul>
    {% for item in user%}
        <li>{{item.name}}</li>
        <li>{{item.age}}</li>
        {%endfor%}
    </ul>