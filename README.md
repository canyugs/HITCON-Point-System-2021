# HITCON-Point-System-2021
## Objective
---
TBD
### HITCON SHOP
TBD
### HITCON ONE PAGE
TBD
### POINT SYSTEM
TBD

## Architecture
---
TBD
## Deployment
---

### Prerequisite
- Install Docker version > 1.13.0+. (Highly Recommend: Docker: 19.03.0+ and Docker-compose: 1.29.2)
- Prepare 80 and 443 port for Nginx.
- Prepare 5432 for Postgresql (Optional).
- Use the correct postgresql and server`.env` in the staging.

### Command
Up:
`docker-compose -f docker/docker-compose.yml up --build --detach`
- If images already exist:
`docker-compose -f docker/docker-compose.yml up --detach`

Down:
`docker-compose -f docker/docker-compose.yml down`

## License
---
```
BSD 2-Clause License
Copyright (c) 2021, HITCON Agent Contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
