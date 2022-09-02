Web.config 文件 ---->     <system.webServer> 节点   ----->

```
<httpProtocol>
    <customHeaders>
    <add name="Access-Control-Allow-Origin" value="http://localhost:8080" />
    <add name="Access-Control-Allow-Headers" value="http://localhost:8080" />
    <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE" />
    </customHeaders>
</httpProtocol>
```

