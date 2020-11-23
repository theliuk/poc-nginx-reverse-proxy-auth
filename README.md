1. `docker-compose build`
2. `docker-compose up`
3. add to your `/etc/hosts` this line `127.0.0.1 reverseproxy.test`
4. `curl http://reverseproxy.net:8080`
5. See the `JSON` response. What you see is all the headers received by server. The authentication token is provided by the token issuer
6. `docker-compose down`
7. remove line from your `/etc/hosts`