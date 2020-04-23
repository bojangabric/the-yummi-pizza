### Installation

Create new repository using this one as a template, clone the newly created repo and run these commands inside the folder:

```
composer install
npm install
```

Add ip address and hostname to /etc/hosts file.

Create .env and Homestead.yaml with your credentials.

Homestead.yaml example (change the values in curly braces):

```yaml
ip: {ip address from /etc/hosts file}
memory: 2048
cpus: 2
provider: virtualbox
authorize: ~/.ssh/id_rsa.pub
keys:
  - ~/.ssh/id_rsa
folders:
  - map: {location of project}
    to: /home/vagrant/{project-name}
sites:
  - map: {host from /etc/hosts file}
    to: /home/vagrant/{project-name}/public
databases:
  - {database-name}
name: {project-name}
hostname: {project-name}
```
